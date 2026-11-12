import express from 'express';
import { getDoctorProfile, getServices } from '../controllers/publicController.js';

const router = express.Router();

router.get('/profile', getDoctorProfile);
router.get('/services', getServices);

export default router;
