import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true,
  },
  enquiryId: {
    type: String,
    required: true,
    index: true,
  },
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
  },
  patientPhone: {
    type: String,
    required: [true, 'Patient phone is required'],
    trim: true,
  },
  confirmedDate: {
    type: Date,
    required: [true, 'Confirmed consultation date is required'],
  },
  confirmedTime: {
    type: String,
    required: [true, 'Confirmed consultation time is required (e.g. 10:30 AM)'],
    trim: true,
  },
  consultationMode: {
    type: String,
    enum: ['Online', 'Offline'],
    required: true,
  },
  confirmationDate: {
    type: Date,
    default: Date.now,
  },
  confirmationStatus: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Rescheduled', 'Cancelled', 'No-Show'],
    default: 'Scheduled',
  },
  confirmedBy: {
    type: String,
    required: true,
    trim: true,
  },
  internalNotes: {
    type: String,
    trim: true,
    default: '',
  },
}, {
  timestamps: true,
});

// Helper static method to generate unique appointment ID
appointmentSchema.statics.generateAppointmentId = async function () {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(100 + Math.random() * 900);
  return `APT-${dateStr}-${randomSuffix}`;
};

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

export default Appointment;

