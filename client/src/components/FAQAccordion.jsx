import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How can I request a psychological consultation?',
      answer: 'You can submit your details using our confidential online enquiry form on the "Book a Session" page, or reach out to our team directly via phone (+91 98946 35451) or WhatsApp. Our care coordination team will review your request and get in touch with you.',
    },
    {
      question: 'Does submitting an enquiry confirm my appointment immediately?',
      answer: 'No. Sharmila MindCare is an enquiry-based appointment coordination system, not an automated instant booking platform. Submitting a form registers your interest. An appointment is confirmed only after our telecaller contacts you, understands your requirements, and manually checks Dr. Sharmila Siraj\'s current clinical availability.',
    },
    {
      question: 'Are online video consultations available if I cannot visit Madurai in person?',
      answer: 'Yes. Online psychological consultations are available via secure tele-health platforms (Google Meet / Zoom) for clients across India and internationally. When submitting your enquiry, simply choose "Online Video Consultation" as your preferred mode.',
    },
    {
      question: 'Which languages can consultations be conducted in?',
      answer: 'Dr. Sharmila Siraj conducts consultations fluently in both English and Tamil (தமிழ்), ensuring comfortable, culturally attuned, and empathetic communication.',
    },
    {
      question: 'How and when will your care team contact me after I submit an enquiry?',
      answer: 'Our team will contact you via your preferred communication method (Phone Call or WhatsApp) typically within 24 operational hours (Monday to Saturday, 9:30 AM to 7:00 PM IST) to verify requirements and propose consultation times.',
    },
    {
      question: 'How can I reschedule or cancel a confirmed appointment?',
      answer: 'If you need to reschedule, please notify us via phone or WhatsApp at least 24 hours in advance so our coordination team can allocate the time slot to other waiting patients and find the next suitable opening for you.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-teal-300 shadow-soft-md'
                : 'bg-white/80 border-softgrey-200 hover:border-teal-200'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className={`text-sm sm:text-base font-serif font-bold transition-colors ${
                isOpen ? 'text-teal-800' : 'text-charcoal-800'
              }`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                isOpen ? 'bg-teal-700 text-white rotate-180' : 'bg-teal-50 text-teal-700'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-softgrey-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
