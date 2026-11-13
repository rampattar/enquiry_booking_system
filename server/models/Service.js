import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ['relationships', 'individual', 'child', 'training'],
    default: 'individual',
  },
  description: {
    type: String,
    required: true,
  },
  whoBenefits: {
    type: String,
    default: '',
  },
  approach: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: 'Approved Service',
  },
  isApproved: {
    type: Boolean,
    default: true,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;

