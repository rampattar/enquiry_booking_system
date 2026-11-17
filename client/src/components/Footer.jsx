import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-ivory-100 pt-16 pb-8 border-t border-teal-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-teal-800/80">
          
          {/* Column 1: Brand & Practice Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-aqua-300 flex items-center justify-center border border-teal-700 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                  Sharmila MindCare
                </h3>
                <p className="text-xs text-aqua-200">Psychological Care &amp; Wellbeing</p>
              </div>
            </div>
            
            <p className="text-xs text-aqua-100 leading-relaxed">
              Empathetic, clear, and confidential psychological support led by <strong>Dr. Sharmila Siraj</strong>. 12 years of clinical experience guiding individuals, couples, children, and families in Madurai, Tamil Nadu.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-teal-800 text-aqua-200 border border-teal-700">
                English &amp; தமிழ்
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-800 text-rose-200 border border-teal-700">
                12 Yrs Clinical Exp.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-teal-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-aqua-100">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>About Dr. Sharmila Siraj</span>
                </Link>
              </li>
              <li>
                <Link to="/therapies" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Counselling Services &amp; Therapies</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Mental Wellbeing Resources</span>
                </Link>
              </li>
              <li>
                <Link to="/book-a-session" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Book a Session (Enquiry)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies & Questions */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-teal-800 pb-2">
              Practice &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-aqua-100">
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Privacy &amp; Data Policy
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Confidentiality Guidelines
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Appointment Confirmation Policy
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-white transition-colors">
                  Cancellation &amp; Rescheduling
                </Link>
              </li>
              <li>
                <Link to="/resources#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions (FAQs)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Location Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordination Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-teal-800 pb-2">
              Contact &amp; Coordination
            </h4>
            
            <p className="text-xs text-aqua-100 leading-relaxed">
              Consultations scheduled strictly by prior manual coordination.
            </p>

            <div className="space-y-2 text-xs">
              <a
                href="tel:+919894635451"
                className="flex items-center gap-2.5 text-ivory-100 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-aqua-300 shrink-0" />
                <span>+91 98946 35451</span>
              </a>

              <a
                href="mailto:sharmilasiraj@yahoo.com"
                className="flex items-center gap-2.5 text-ivory-100 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-aqua-300 shrink-0" />
                <span>sharmilasiraj@yahoo.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-aqua-100">
                <MapPin className="w-4 h-4 text-aqua-300 shrink-0 mt-0.5" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-medium transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Consultation Enquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Practice Notice & Disclaimers */}
        <div className="py-6 border-b border-teal-800/80 space-y-2 text-[11px] text-aqua-200/80 leading-relaxed">
          <p>
            <strong>Enquiry-Based Coordination System:</strong> Submitting an enquiry does not automatically book an appointment. All appointments are coordinated manually based on Dr. Sharmila Siraj&apos;s clinical availability.
          </p>
          <p>
            <strong>Emergency Notice:</strong> Sharmila MindCare is an outpatient psychological service and not an emergency crisis helpline. If you are experiencing acute psychiatric crisis or severe harm, dial <strong>112</strong> or visit the nearest hospital emergency casualty immediately.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-aqua-200/70">
          <p>© {currentYear} Sharmila MindCare. All rights reserved. Dr. Sharmila Siraj, Madurai.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <Link to="/policies" className="hover:text-white transition-colors">
              Privacy &amp; Confidentiality
            </Link>
            <span>•</span>
            <Link to="/policies" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-white flex items-center gap-1 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
