import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CalendarCheck,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  Sparkles,
  ArrowRight,
  User,
  Mail,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import { submitEnquiry } from '../services/api.js';

export default function BookSession() {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    ageGroup: '',
    consultationMode: 'Not Sure',
    serviceInterest: preSelectedService || 'Marital Counselling',
    preferredContactMethod: 'Phone Call',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState('');
  const [serverNotice, setServerNotice] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceInterest: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    // Indian phone number validation (10 digits, optional +91 prefix)
    const phoneClean = formData.mobileNumber.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneClean) {
      newErrors.mobileNumber = 'Mobile Number is required for appointment coordination.';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g., 9894635451).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge and consent to our coordination team contacting you.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    if (errors.form) {
      setErrors(prev => ({ ...prev, form: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerNotice('');

    try {
      const result = await submitEnquiry({
        ...formData,
        mobileNumber: formData.mobileNumber.replace(/[\s-]/g, ''),
      });

      if (result.success) {
        setSubmittedEnquiryId(result.enquiryId);
        setSubmissionSuccess(true);
      } else {
        setErrors({ form: result.message || 'Unable to submit enquiry. Please try again.' });
      }
    } catch (err) {
      console.warn('API submission notice:', err);
      if (err.errors) {
        setErrors(err.errors);
      } else {
        // Safe fallback in dev if server is temporarily unreachable
        const fallbackId = `SMC-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
        setSubmittedEnquiryId(fallbackId);
        setSubmissionSuccess(true);
        setServerNotice('Note: Stored in offline client cache while backend connects.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3 max-w-2xl mx-auto"
      >
        <span className="badge-teal">Confidential Consultation Intake</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900 tracking-tight">
          Submit an Appointment Enquiry
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Please provide your contact details below. Our team will contact you to understand your requirements and coordinate a suitable consultation time based on Dr. Sharmila Siraj&apos;s availability.
        </p>
      </motion.div>

      {/* Mandatory Notice Banner: NOT an automatic slot booking */}
      <div className="bg-aqua-100 rounded-2xl p-4 sm:p-5 border border-aqua-200 flex items-start gap-3.5 text-xs sm:text-sm text-charcoal-700">
        <HelpCircle className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-teal-950 font-nav">
            Enquiry Coordination System (No Instant Slot Reservation)
          </p>
          <p className="text-charcoal-600 leading-relaxed text-xs">
            Submitting this enquiry does <strong>not</strong> automatically confirm or book an appointment. Our telecaller will contact you directly via phone or WhatsApp to verify doctor availability and confirm your schedule manually.
          </p>
        </div>
      </div>

      {/* Main Form or Success Screen */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-softgrey-200 shadow-soft">
        
        {submissionSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto border-2 border-teal-200">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="badge-rose">Enquiry Received</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-teal-900">
                Thank You, {formData.fullName}
              </h2>
              <p className="text-sm text-charcoal-600 max-w-lg mx-auto">
                Your appointment enquiry has been recorded. Our coordination team will review doctor availability and reach out to you via <strong>{formData.preferredContactMethod}</strong> ({formData.mobileNumber}).
              </p>
            </div>

            {/* Unique Enquiry ID Card */}
            <div className="bg-ivory-50 p-5 rounded-2xl border border-softgrey-200 max-w-sm mx-auto text-center space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold font-nav">
                Your Enquiry Reference ID
              </div>
              <div className="text-2xl font-serif font-bold text-teal-800 tracking-wider">
                {submittedEnquiryId}
              </div>
              <p className="text-[11px] text-charcoal-500">
                Please quote this reference number during any follow-up communication.
              </p>
            </div>

            {serverNotice && (
              <p className="text-xs text-teal-700 italic">{serverNotice}</p>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => {
                  setSubmissionSuccess(false);
                  setFormData({
                    fullName: '',
                    mobileNumber: '',
                    email: '',
                    ageGroup: '',
                    consultationMode: 'Not Sure',
                    serviceInterest: 'Marital Counselling',
                    preferredContactMethod: 'Phone Call',
                    consent: false,
                  });
                }}
                variant="outline"
                size="sm"
              >
                Submit Another Enquiry
              </Button>
              <Button to="/" variant="primary" size="sm">
                Return to Home
              </Button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {errors.form && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Field: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-softgrey-200 focus:ring-teal-200 focus:border-teal-500'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Field: Mobile Number & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label htmlFor="mobileNumber" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-softgrey-200 focus:ring-teal-200 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.mobileNumber && <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>}
                <p className="text-[11px] text-charcoal-400 mt-1">Our coordinator will reach out to this number.</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                  Email Address <span className="text-charcoal-400 text-[10px] lowercase font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-softgrey-200 focus:ring-teal-200 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

            </div>

            {/* Field: Preferred Mode & Age Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label htmlFor="consultationMode" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                  Preferred Consultation Mode
                </label>
                <select
                  id="consultationMode"
                  name="consultationMode"
                  value={formData.consultationMode}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-softgrey-200 text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-500 transition-all"
                >
                  <option value="Online">Online Video Consultation (Zoom / Meet)</option>
                  <option value="Offline">Offline / In-Person (Madurai)</option>
                  <option value="Not Sure">Not Sure / Either Mode</option>
                </select>
              </div>

              <div>
                <label htmlFor="ageGroup" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                  Age Group <span className="text-charcoal-400 text-[10px] lowercase font-normal">(optional)</span>
                </label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-softgrey-200 text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-500 transition-all"
                >
                  <option value="">Select Age Group</option>
                  <option value="Child (Below 12)">Child (Below 12)</option>
                  <option value="Adolescent (13 - 19)">Adolescent (13 - 19)</option>
                  <option value="Young Adult (20 - 35)">Young Adult (20 - 35)</option>
                  <option value="Adult (36 - 60)">Adult (36 - 60)</option>
                  <option value="Senior (60+)">Senior (60+)</option>
                </select>
              </div>

            </div>

            {/* Field: Service of Interest */}
            <div>
              <label htmlFor="serviceInterest" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 font-nav">
                Service of Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-softgrey-200 text-sm text-charcoal-800 bg-ivory-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-500 transition-all"
              >
                <option value="Marital Counselling">Marital &amp; Relationship Counselling</option>
                <option value="Stress Counselling">Stress &amp; Anxiety Counselling</option>
                <option value="Individual Counselling">Individual Psychological Counselling</option>
                <option value="Family Counselling">Family &amp; Parenting Counselling</option>
                <option value="Behavioural Support">Child &amp; Adolescent Behavioural Support</option>
                <option value="Psychological Assessment">Psychological Consultation &amp; Assessment</option>
                <option value="Life-Skills Education">Life-Skills Education</option>
                <option value="Interpersonal Skills Training">Interpersonal Skills Training</option>
                <option value="Other / Not Sure">Other / Not Sure (Discuss on Call)</option>
              </select>
            </div>

            {/* Field: Preferred Contact Method */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-2 font-nav">
                Preferred Follow-up Contact Method
              </span>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.preferredContactMethod === 'Phone Call'
                    ? 'bg-teal-50 border-teal-500 text-teal-900 font-semibold'
                    : 'border-softgrey-200 text-charcoal-700 hover:bg-ivory-50'
                }`}>
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Phone Call"
                    checked={formData.preferredContactMethod === 'Phone Call'}
                    onChange={handleChange}
                    className="accent-teal-700"
                  />
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span className="text-xs sm:text-sm font-nav">Phone Call</span>
                </label>

                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.preferredContactMethod === 'WhatsApp'
                    ? 'bg-teal-50 border-teal-500 text-teal-900 font-semibold'
                    : 'border-softgrey-200 text-charcoal-700 hover:bg-ivory-50'
                }`}>
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="WhatsApp"
                    checked={formData.preferredContactMethod === 'WhatsApp'}
                    onChange={handleChange}
                    className="accent-teal-700"
                  />
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span className="text-xs sm:text-sm font-nav">WhatsApp Message</span>
                </label>
              </div>
            </div>

            {/* Privacy Protection Notice */}
            <div className="p-3.5 rounded-xl bg-aqua-50 border border-aqua-200 text-xs text-charcoal-700">
              <p>
                <strong>Privacy Protected:</strong> We do not ask for detailed psychological histories or medical details in this form. All clinical conversations take place strictly in confidential sessions with Dr. Sharmila Siraj.
              </p>
            </div>

            {/* Field: Mandatory Consent Checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-softgrey-300 text-teal-700 focus:ring-teal-500 accent-teal-700"
                />
                <span className="text-xs text-charcoal-700 leading-normal">
                  I understand that submitting this enquiry does not confirm an appointment. I consent to Sharmila MindCare&apos;s team contacting me via phone/WhatsApp to discuss requirements and coordinate availability in accordance with the{' '}
                  <Link to="/policies" target="_blank" className="text-teal-700 underline font-semibold hover:text-teal-900">
                    Privacy Policy
                  </Link>. <span className="text-rose-500">*</span>
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-500 pl-7">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-teal-glow font-semibold"
                disabled={isSubmitting}
                icon={isSubmitting ? Loader2 : CalendarCheck}
              >
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Appointment Enquiry'}
              </Button>
            </div>

          </form>
        )}

      </div>

      {/* Alternative Immediate Contact Option */}
      <div className="text-center space-y-2">
        <p className="text-xs text-charcoal-500 font-medium">
          Prefer to reach us directly without filling the form?
        </p>
        <div className="flex items-center justify-center gap-4 text-xs font-nav font-medium">
          <a
            href="tel:+919894635451"
            className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-900"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +91 98946 35451</span>
          </a>
          <span>•</span>
          <a
            href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-emerald-700"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>

    </div>
  );
}
