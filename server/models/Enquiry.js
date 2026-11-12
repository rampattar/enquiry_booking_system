import mongoose from 'mongoose';

const callAttemptSchema = new mongoose.Schema({
  attemptedAt: {
    type: Date,
    default: Date.now,
  },
  callerName: {
    type: String,
    default: 'Telecaller',
    trim: true,
  },
  outcome: {
    type: String,
    enum: [
      'No Answer',
      'Busy',
      'Callback Requested',
      'Spoke - Evaluating Requirements',
      'Doctor Schedule Checked',
      'Appointment Confirmed',
      'Declined / Not Interested',
      'Wrong Number',
      'Other',
    ],
    default: 'No Answer',
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
}, { _id: true });

const internalNoteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000,
  },
  addedBy: {
    type: String,
    default: 'Staff',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { _id: true });

const enquirySchema = new mongoose.Schema({
  enquiryId: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true,
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
    index: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',
  },
  ageGroup: {
    type: String,
    enum: [
      'Child (Below 12)',
      'Adolescent (13 - 19)',
      'Young Adult (20 - 35)',
      'Adult (36 - 60)',
      'Senior (60+)',
      'Not Specified',
      '',
    ],
    default: 'Not Specified',
  },
  consultationMode: {
    type: String,
    enum: ['Online', 'Offline', 'Not Sure'],
    default: 'Not Sure',
  },
  serviceInterest: {
    type: String,
    required: [true, 'Service of interest is required'],
    trim: true,
  },
  preferredContactMethod: {
    type: String,
    enum: ['Phone Call', 'WhatsApp'],
    default: 'Phone Call',
  },
  consent: {
    type: Boolean,
    required: [true, 'Patient consent to be contacted is mandatory'],
    validate: {
      validator: (v) => v === true,
      message: 'You must provide consent to submit this enquiry.',
    },
  },
  status: {
    type: String,
    enum: [
      'New Enquiry',
      'Contacted',
      'Follow-up Required',
      'Waiting for Doctor Availability',
      'Appointment Confirmed',
      'Cancelled',
      'Closed',
    ],
    default: 'New Enquiry',
    index: true,
  },
  followUpDate: {
    type: Date,
    default: null,
  },
  assignedTo: {
    type: String,
    default: 'Unassigned',
    trim: true,
  },
  callAttempts: [callAttemptSchema],
  internalNotes: [internalNoteSchema],
  spreadsheetSync: {
    synced: {
      type: Boolean,
      default: false,
    },
    syncedAt: {
      type: Date,
      default: null,
    },
    rowIdentifier: {
      type: String,
      default: null,
    },
    lastError: {
      type: String,
      default: null,
    },
    retryCount: {
      type: Number,
      default: 0,
    },
  },
}, {
  timestamps: true,
});

// Helper static method to generate unique reference enquiry ID
enquirySchema.statics.generateEnquiryId = async function () {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  let candidateId = `SMC-${dateStr}-${randomSuffix}`;
  
  // Verify uniqueness
  const exists = await this.findOne({ enquiryId: candidateId });
  if (exists) {
    const extra = Math.floor(10000 + Math.random() * 90000);
    candidateId = `SMC-${dateStr}-${extra}`;
  }
  return candidateId;
};

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
