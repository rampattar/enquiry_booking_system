import express from 'express';
import {
  submitEnquiry,
  getEnquiries,
  getEnquiryById,
  updateStatus,
  updateFollowUp,
  assignStaff,
  recordCallAttempt,
  addNote,
} from '../controllers/enquiryController.js';

const router = express.Router();

// Public route to submit an enquiry
router.post('/', submitEnquiry);

// Protected routes for enquiry administration
router.get('/', getEnquiries);
router.get('/:id', getEnquiryById);
router.patch('/:id/status', updateStatus);
router.patch('/:id/follow-up', updateFollowUp);
router.patch('/:id/assign', assignStaff);
router.post('/:id/call-attempt', recordCallAttempt);
router.patch('/:id/notes', addNote);

export default router;

