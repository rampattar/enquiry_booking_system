import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  CalendarCheck,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="badge-navy">Get In Touch</span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0E3854] tracking-tight">
          Contact Sharmila MindCare
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          We are here to assist you with appointment enquiries, consultation coordination, and general questions about our counselling services.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft text-center space-y-4 hover:shadow-soft-md transition-all hover:border-[#48B6B7]"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0E3854] border border-cyan-200 flex items-center justify-center mx-auto">
            <Phone className="w-7 h-7 text-[#48B6B7]" />
          </div>
          <h2 className="text-lg font-serif font-bold text-[#0E3854]">
            Phone Enquiry
          </h2>
          <p className="text-xs text-charcoal-500">
            Reach our coordination team directly for telephone enquiries.
          </p>
          <a
            href="tel:+919894635451"
            className="text-base font-serif font-bold text-[#0E3854] hover:text-[#48B6B7] transition-colors block"
          >
            +91 98946 35451
          </a>
          <span className="text-[11px] text-charcoal-400 block font-medium">
            Mon – Sat: 9:30 AM – 7:00 PM IST
          </span>
        </motion.div>

        {/* WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft text-center space-y-4 hover:shadow-soft-md transition-all hover:border-[#25D366]"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#25D366] border border-emerald-100 flex items-center justify-center mx-auto">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-serif font-bold text-[#0E3854]">
            WhatsApp Chat
          </h2>
          <p className="text-xs text-charcoal-500">
            Instant messaging for quick questions and session enquiries.
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-sm transition-colors active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
          <span className="text-[11px] text-charcoal-400 block font-medium">
            Direct Click-to-Chat
          </span>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft text-center space-y-4 hover:shadow-soft-md transition-all hover:border-[#48B6B7]"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0E3854] border border-cyan-200 flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7 text-[#48B6B7]" />
          </div>
          <h2 className="text-lg font-serif font-bold text-[#0E3854]">
            Email Correspondence
          </h2>
          <p className="text-xs text-charcoal-500">
            For formal or institutional training requests.
          </p>
          <a
            href="mailto:sharmilasiraj@yahoo.com"
            className="text-base font-serif font-bold text-[#0E3854] hover:text-[#48B6B7] transition-colors block truncate"
          >
            sharmilasiraj@yahoo.com
          </a>
          <span className="text-[11px] text-charcoal-400 block font-medium">
            Official Professional Contact
          </span>
        </motion.div>

      </div>

      {/* Location & Practice Coordination Details */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-softgrey-200 shadow-soft grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-4">
          <span className="badge-navy">Practice Location</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E3854]">
            Madurai, Tamil Nadu, India
          </h2>
          
          <p className="text-sm text-charcoal-600 leading-relaxed">
            In-person psychological counselling sessions are conducted in <strong>Madurai</strong>. To protect patient privacy and manage clinical flow, offline visits are scheduled <strong>strictly by prior confirmed appointment</strong>.
          </p>

          <div className="space-y-2 pt-2 text-xs text-charcoal-700 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#48B6B7] shrink-0" />
              <span>Location: Madurai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#48B6B7] shrink-0" />
              <span>Consultation Hours: By confirmed appointment</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#48B6B7] shrink-0" />
              <span>Remote / Online Video Sessions Available Nationwide &amp; Globally</span>
            </div>
          </div>

          <div className="pt-3">
            <Button to="/book-a-session" variant="cyan" size="md" showArrow={true}>
              Submit Appointment Enquiry
            </Button>
          </div>
        </div>

        {/* Informational Guidance Panel */}
        <div className="bg-ice-50 rounded-2xl p-6 sm:p-8 border border-softgrey-200 space-y-4">
          <div className="flex items-center gap-2 text-[#0E3854] font-serif font-bold text-base">
            <HelpCircle className="w-5 h-5 text-[#48B6B7]" />
            <span>Consultation Coordination Guidelines</span>
          </div>

          <ul className="space-y-2.5 text-xs text-charcoal-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#48B6B7]">•</span>
              <span><strong>Prior Coordination Required:</strong> Please submit an enquiry form or call prior to visiting in person. Walk-in consultations are not accommodated.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#48B6B7]">•</span>
              <span><strong>Language Support:</strong> Consultations and communication can be conducted comfortably in either <strong>English</strong> or <strong>Tamil (தமிழ்)</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#48B6B7]">•</span>
              <span><strong>Emergency Cases:</strong> If you are in immediate personal crisis or requiring 24/7 psychiatric emergency services, please contact <strong>112</strong> or visit the nearest hospital casualty immediately.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
