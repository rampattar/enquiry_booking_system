import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A273C] text-cyan-100 pt-16 pb-8 border-t border-[#0E3854] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0E3854]/80">
          
          {/* Column 1: Brand & Practice Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#48B6B7] flex items-center justify-center border border-[#48B6B7]/30 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                  Sharmila MindCare
                </h3>
                <p className="text-xs text-[#48B6B7]">Psychological Care &amp; Wellbeing</p>
              </div>
            </div>
            
            <p className="text-xs text-charcoal-200 leading-relaxed">
              Empathetic, clear, and confidential psychological support led by <strong>Dr. Sharmila Siraj</strong>. 12 years of clinical experience guiding individuals, couples, children, and families in Madurai, Tamil Nadu.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-[#0E3854] text-cyan-200 border border-cyan-700/40">
                English &amp; தமிழ்
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0E3854] text-white border border-cyan-700/40">
                12 Yrs Clinical Exp.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#0E3854] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-200">
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
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#0E3854] pb-2">
              Practice &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-200">
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
                <Link to="/policies" className="hover:text-white transition-colors">
                  Online Video Consultation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordination Info */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#0E3854] pb-2">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-xs text-charcoal-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#48B6B7] shrink-0 mt-0.5" />
                <span>Madurai, Tamil Nadu, India (Offline by confirmed appointment)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#48B6B7] shrink-0" />
                <a href="tel:+919894635451" className="hover:text-white font-medium">
                  +91 98946 35451
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#48B6B7] shrink-0" />
                <a href="mailto:sharmilasiraj@yahoo.com" className="hover:text-white">
                  sharmilasiraj@yahoo.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Emergency Notice */}
        <div className="py-6 border-b border-[#0E3854]/80 text-xs text-center text-charcoal-300">
          <p>
            <strong className="text-white">Crisis Notice:</strong> Sharmila MindCare is an appointment-based psychological counselling and guidance practice. It does not provide 24/7 psychiatric emergency or acute suicide intervention services. In an emergency crisis, please call <strong>112</strong> or visit the nearest hospital emergency room.
          </p>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-400 gap-4">
          <p>
            &copy; {currentYear} Sharmila MindCare. All rights reserved. Dr. Sharmila Siraj, Consultant Psychologist.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/policies" className="hover:text-white transition-colors">
              Terms &amp; Policies
            </Link>
            <Link to="/admin/login" className="hover:text-[#48B6B7] transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
