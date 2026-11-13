import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';
import memoryStore from './inMemoryStore.js';

const isDBConnected = () => mongoose.connection.readyState === 1;

/**
 * Generate a unique enquiry ID e.g. SMC-20261112-4821
 */
export const generateEnquiryId = async () => {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `SMC-${dateStr}-${randomSuffix}`;
};

/**
 * Create a new patient enquiry
 */
export const createEnquiry = async (data) => {
  const enquiryId = await generateEnquiryId();

  const sanitizedData = {
    enquiryId,
    fullName: data.fullName?.trim(),
    mobileNumber: data.mobileNumber?.trim(),
    email: data.email?.trim().toLowerCase() || '',
    ageGroup: data.ageGroup || 'Not Specified',
    consultationMode: data.consultationMode || 'Not Sure',
    serviceInterest: data.serviceInterest?.trim() || 'General Enquiry',
    preferredContactMethod: data.preferredContactMethod || 'Phone Call',
    consent: Boolean(data.consent),
    status: 'New Enquiry',
    callAttempts: [],
    internalNotes: [],
    spreadsheetSync: {
      synced: false,
      syncedAt: null,
      rowIdentifier: null,
      lastError: null,
    },
  };

  if (isDBConnected()) {
    const enquiry = new Enquiry(sanitizedData);
    await enquiry.save();
    return enquiry.toObject();
  }

  // Fallback memory store
  return memoryStore.createEnquiry(sanitizedData);
};

/**
 * Fetch enquiries with filtering, search, and pagination
 */
export const listEnquiries = async ({
  search = '',
  status = '',
  mode = '',
  page = 1,
  limit = 10,
  sortBy = 'createdAt',
  order = 'desc',
}) => {
  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));

  if (isDBConnected()) {
    const query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (mode && mode !== 'all') {
      query.consultationMode = mode;
    }

    if (search) {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { fullName: regex },
        { mobileNumber: regex },
        { enquiryId: regex },
        { email: regex },
        { serviceInterest: regex },
      ];
    }

    const sortOptions = { [sortBy]: order === 'asc' ? 1 : -1 };

    const total = await Enquiry.countDocuments(query);
    const enquiries = await Enquiry.find(query)
      .sort(sortOptions)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .lean();

    return {
      enquiries,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum) || 1,
        limit: limitNum,
      },
    };
  }

  // Fallback memory store
  const memResult = memoryStore.findEnquiries({
    search,
    status,
    mode,
    page: pageNum,
    limit: limitNum,
  });

  return {
    enquiries: memResult.enquiries,
    pagination: {
      total: memResult.total,
      page: memResult.page,
      pages: memResult.pages,
      limit: limitNum,
    },
  };
};

/**
 * Get individual enquiry by ID or reference code
 */
export const getEnquiryById = async (idOrEnquiryId) => {
  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    let enquiry = null;

    if (isObjectId) {
      enquiry = await Enquiry.findById(idOrEnquiryId).lean();
    }
    if (!enquiry) {
      enquiry = await Enquiry.findOne({ enquiryId: idOrEnquiryId.toUpperCase() }).lean();
    }
    return enquiry;
  }

  return memoryStore.findEnquiryById(idOrEnquiryId);
};

/**
 * Update enquiry status
 */
export const updateEnquiryStatus = async (idOrEnquiryId, status) => {
  const allowedStatuses = [
    'New Enquiry',
    'Contacted',
    'Follow-up Required',
    'Waiting for Doctor Availability',
    'Appointment Confirmed',
    'Cancelled',
    'Closed',
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error(`Invalid status: ${status}. Must be one of ${allowedStatuses.join(', ')}`);
  }

  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    const query = isObjectId ? { _id: idOrEnquiryId } : { enquiryId: idOrEnquiryId.toUpperCase() };

    const updated = await Enquiry.findOneAndUpdate(
      query,
      { $set: { status, updatedAt: new Date() } },
      { new: true, runValidators: true }
    ).lean();

    return updated;
  }

  return memoryStore.updateEnquiry(idOrEnquiryId, { status });
};

/**
 * Update follow-up date
 */
export const updateFollowUpDate = async (idOrEnquiryId, followUpDate) => {
  const dateValue = followUpDate ? new Date(followUpDate) : null;

  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    const query = isObjectId ? { _id: idOrEnquiryId } : { enquiryId: idOrEnquiryId.toUpperCase() };

    return Enquiry.findOneAndUpdate(
      query,
      { $set: { followUpDate: dateValue, updatedAt: new Date() } },
      { new: true }
    ).lean();
  }

  return memoryStore.updateEnquiry(idOrEnquiryId, { followUpDate: dateValue });
};

/**
 * Assign enquiry to staff member
 */
export const assignEnquiry = async (idOrEnquiryId, assignedTo) => {
  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    const query = isObjectId ? { _id: idOrEnquiryId } : { enquiryId: idOrEnquiryId.toUpperCase() };

    return Enquiry.findOneAndUpdate(
      query,
      { $set: { assignedTo, updatedAt: new Date() } },
      { new: true }
    ).lean();
  }

  return memoryStore.updateEnquiry(idOrEnquiryId, { assignedTo });
};

/**
 * Add a call attempt
 */
export const addCallAttempt = async (idOrEnquiryId, { outcome, notes, callerName }) => {
  const callRecord = {
    attemptedAt: new Date(),
    outcome: outcome || 'Spoke - Evaluating Requirements',
    notes: notes || '',
    callerName: callerName || 'Telecaller',
  };

  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    const query = isObjectId ? { _id: idOrEnquiryId } : { enquiryId: idOrEnquiryId.toUpperCase() };

    return Enquiry.findOneAndUpdate(
      query,
      {
        $push: { callAttempts: callRecord },
        $set: { updatedAt: new Date() },
      },
      { new: true }
    ).lean();
  }

  const existing = memoryStore.findEnquiryById(idOrEnquiryId);
  if (!existing) return null;
  const attempts = [...(existing.callAttempts || []), callRecord];
  return memoryStore.updateEnquiry(idOrEnquiryId, { callAttempts: attempts });
};

/**
 * Add internal operational note
 */
export const addInternalNote = async (idOrEnquiryId, { note, addedBy }) => {
  if (!note || !note.trim()) {
    throw new Error('Note content cannot be empty');
  }

  const noteRecord = {
    note: note.trim(),
    addedBy: addedBy || 'Staff',
    createdAt: new Date(),
  };

  if (isDBConnected()) {
    const isObjectId = mongoose.Types.ObjectId.isValid(idOrEnquiryId);
    const query = isObjectId ? { _id: idOrEnquiryId } : { enquiryId: idOrEnquiryId.toUpperCase() };

    return Enquiry.findOneAndUpdate(
      query,
      {
        $push: { internalNotes: noteRecord },
        $set: { updatedAt: new Date() },
      },
      { new: true }
    ).lean();
  }

  const existing = memoryStore.findEnquiryById(idOrEnquiryId);
  if (!existing) return null;
  const notesList = [...(existing.internalNotes || []), noteRecord];
  return memoryStore.updateEnquiry(idOrEnquiryId, { internalNotes: notesList });
};

/**
 * Aggregated statistics for dashboard
 */
export const getDashboardMetrics = async () => {
  if (isDBConnected()) {
    const pipeline = [
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ];

    const results = await Enquiry.aggregate(pipeline);
    const summary = {
      totalEnquiries: 0,
      newEnquiries: 0,
      contacted: 0,
      followUpRequired: 0,
      waitingForDoctorAvailability: 0,
      appointmentConfirmed: 0,
      cancelled: 0,
      closed: 0,
    };

    results.forEach(({ _id, count }) => {
      summary.totalEnquiries += count;
      if (_id === 'New Enquiry') summary.newEnquiries = count;
      else if (_id === 'Contacted') summary.contacted = count;
      else if (_id === 'Follow-up Required') summary.followUpRequired = count;
      else if (_id === 'Waiting for Doctor Availability') summary.waitingForDoctorAvailability = count;
      else if (_id === 'Appointment Confirmed') summary.appointmentConfirmed = count;
      else if (_id === 'Cancelled') summary.cancelled = count;
      else if (_id === 'Closed') summary.closed = count;
    });

    return summary;
  }

  return memoryStore.getDashboardSummary();
};

