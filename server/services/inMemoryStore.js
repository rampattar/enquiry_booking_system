// Fallback in-memory storage buffer when MongoDB is connecting or offline
class InMemoryStore {
  constructor() {
    this.enquiries = [];
    this.admins = [];
    this.appointments = [];
  }

  // Enquiry methods
  createEnquiry(data) {
    const now = new Date();
    const enquiry = {
      _id: `mem_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      ...data,
      callAttempts: data.callAttempts || [],
      internalNotes: data.internalNotes || [],
      createdAt: now,
      updatedAt: now,
    };
    this.enquiries.unshift(enquiry);
    return enquiry;
  }

  findEnquiries({ search, status, mode, page = 1, limit = 10 }) {
    let result = [...this.enquiries];

    if (status && status !== 'all') {
      result = result.filter(e => e.status === status);
    }

    if (mode && mode !== 'all') {
      result = result.filter(e => e.consultationMode === mode);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(e =>
        e.fullName?.toLowerCase().includes(q) ||
        e.mobileNumber?.toLowerCase().includes(q) ||
        e.enquiryId?.toLowerCase().includes(q) ||
        e.email?.toLowerCase().includes(q)
      );
    }

    const total = result.length;
    const startIndex = (page - 1) * limit;
    const paginated = result.slice(startIndex, startIndex + limit);

    return {
      enquiries: paginated,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit) || 1,
    };
  }

  findEnquiryById(idOrEnquiryId) {
    return this.enquiries.find(
      e => e._id === idOrEnquiryId || e.enquiryId === idOrEnquiryId
    ) || null;
  }

  updateEnquiry(idOrEnquiryId, updates) {
    const index = this.enquiries.findIndex(
      e => e._id === idOrEnquiryId || e.enquiryId === idOrEnquiryId
    );
    if (index === -1) return null;

    this.enquiries[index] = {
      ...this.enquiries[index],
      ...updates,
      updatedAt: new Date(),
    };
    return this.enquiries[index];
  }

  getDashboardSummary() {
    const total = this.enquiries.length;
    const countStatus = (status) => this.enquiries.filter(e => e.status === status).length;

    return {
      totalEnquiries: total,
      newEnquiries: countStatus('New Enquiry'),
      contacted: countStatus('Contacted'),
      followUpRequired: countStatus('Follow-up Required'),
      waitingForDoctorAvailability: countStatus('Waiting for Doctor Availability'),
      appointmentConfirmed: countStatus('Appointment Confirmed'),
      cancelled: countStatus('Cancelled'),
      closed: countStatus('Closed'),
    };
  }
}

export const memoryStore = new InMemoryStore();
export default memoryStore;

