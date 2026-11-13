import * as enquiryService from '../services/enquiryService.js';

/**
 * Public: Submit appointment enquiry
 * POST /api/enquiries
 */
export const submitEnquiry = async (req, res, next) => {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      ageGroup,
      consultationMode,
      serviceInterest,
      preferredContactMethod,
      consent,
    } = req.body;

    // Validation
    const errors = {};

    if (!fullName || !fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = (mobileNumber || '').replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!cleanPhone) {
      errors.mobileNumber = 'Mobile Number is required for appointment coordination.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.mobileNumber = 'Please provide a valid 10-digit Indian mobile number.';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!consent) {
      errors.consent = 'Consent to be contacted is mandatory.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the highlighted errors.',
        errors,
      });
    }

    // Create enquiry
    const newEnquiry = await enquiryService.createEnquiry({
      fullName,
      mobileNumber: cleanPhone,
      email,
      ageGroup,
      consultationMode,
      serviceInterest,
      preferredContactMethod,
      consent,
    });

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been received successfully. Our team will contact you shortly.',
      enquiryId: newEnquiry.enquiryId,
      data: {
        enquiryId: newEnquiry.enquiryId,
        fullName: newEnquiry.fullName,
        mobileNumber: newEnquiry.mobileNumber,
        consultationMode: newEnquiry.consultationMode,
        serviceInterest: newEnquiry.serviceInterest,
        status: newEnquiry.status,
        createdAt: newEnquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: List enquiries with pagination, search, and filters
 * GET /api/enquiries
 */
export const getEnquiries = async (req, res, next) => {
  try {
    const { search, status, mode, page, limit, sortBy, order } = req.query;
    const result = await enquiryService.listEnquiries({
      search,
      status,
      mode,
      page,
      limit,
      sortBy,
      order,
    });

    res.status(200).json({
      success: true,
      data: result.enquiries,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Get single enquiry details
 * GET /api/enquiries/:id
 */
export const getEnquiryById = async (req, res, next) => {
  try {
    const enquiry = await enquiryService.getEnquiryById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Update enquiry status
 * PATCH /api/enquiries/:id/status
 */
export const updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status field is required.',
      });
    }

    const updated = await enquiryService.updateEnquiryStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: `Enquiry status updated to ${status}`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Update follow-up date
 * PATCH /api/enquiries/:id/follow-up
 */
export const updateFollowUp = async (req, res, next) => {
  try {
    const { followUpDate } = req.body;
    const updated = await enquiryService.updateFollowUpDate(req.params.id, followUpDate);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Follow-up date updated successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Assign enquiry
 * PATCH /api/enquiries/:id/assign
 */
export const assignStaff = async (req, res, next) => {
  try {
    const { assignedTo } = req.body;
    const updated = await enquiryService.assignEnquiry(req.params.id, assignedTo);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry assigned successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Record call attempt
 * POST /api/enquiries/:id/call-attempt
 */
export const recordCallAttempt = async (req, res, next) => {
  try {
    const { outcome, notes, callerName } = req.body;
    const updated = await enquiryService.addCallAttempt(req.params.id, {
      outcome,
      notes,
      callerName: callerName || (req.user ? req.user.name : 'Telecaller'),
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Call attempt recorded successfully',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected: Update internal operational notes
 * PATCH /api/enquiries/:id/notes
 */
export const addNote = async (req, res, next) => {
  try {
    const { note, addedBy } = req.body;
    const updated = await enquiryService.addInternalNote(req.params.id, {
      note,
      addedBy: addedBy || (req.user ? req.user.name : 'Staff'),
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Operational note added',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Protected / Overview: Dashboard summary statistics
 * GET /api/dashboard/summary
 */
export const getSummary = async (req, res, next) => {
  try {
    const summary = await enquiryService.getDashboardMetrics();
    res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    next(error);
  }
};

