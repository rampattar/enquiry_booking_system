import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-charcoal-200 pt-14 pb-8 border-t border-charcoal-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Column 1: Doctor & Practice Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800 text-sage-300 flex items-center justify-center border border-sage-700">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-offwhite tracking-tight">
                  Sharmila MindCare
                </h3>
                <p className="text-xs text-charcoal-400">Psychological Care & Counselling</p>
              </div>
            </div>
            
            <p className="text-xs text-charcoal-300 leading-relaxed">
              Empathetic, clear, and confidential psychological support led by <strong>Dr. Sharmila Siraj</strong>. 12 years of clinical experience guiding individuals, couples, children, and families in Madurai, Tamil Nadu.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-charcoal-800 text-sage-300 border border-charcoal-700">
                English & Tamil
              </span>
              <span className="px-2.5 py-1 rounded-md bg-charcoal-800 text-gold-300 border border-charcoal-700">
                12 Years Clinical Exp.
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-offwhite uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-sage-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sage-300 transition-colors">
                  About Dr. Sharmila Siraj
                </Link>
              </li>
              <li>
                <Link to="/therapies" className="hover:text-sage-300 transition-colors">
                  Counselling Services & Therapies
                </Link>
              </li>
              <li>
                <Link to="/book-a-session" className="hover:text-sage-300 transition-colors">
                  Book a Session (Enquiry)
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-sage-300 transition-colors">
                  Practice Policies & Guidelines
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sage-300 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Counselling Focus & Areas */}
          <div>
            <h4 className="text-sm font-serif font-semibold text-offwhite uppercase tracking-wider mb-4">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li>• Marital & Relationship Counselling</li>
              <li>• Stress & Anxiety Support</li>
              <li>• Individual Psychological Counselling</li>
              <li>• Family & Parental Guidance</li>
              <li>• Child & Adolescent Behavioural Support</li>
              <li>• Life-Skills & Interpersonal Training</li>
              <li>• Mental Health & Rehabilitation</li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordination Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-semibold text-offwhite uppercase tracking-wider mb-4">
              Enquiry & Coordination
            </h4>
            
            <p className="text-xs text-charcoal-300 leading-relaxed">
              Appointments are scheduled after manual availability coordination by our team.
            </p>

            <div className="space-y-2 text-xs">
              <a
                href="tel:+919894635451"
                className="flex items-center gap-2.5 text-charcoal-200 hover:text-sage-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-sage-400 shrink-0" />
                <span>+91 98946 35451</span>
              </a>

              <a
                href="mailto:sharmilasiraj@yahoo.com"
                className="flex items-center gap-2.5 text-charcoal-200 hover:text-sage-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sage-400 shrink-0" />
                <span>sharmilasiraj@yahoo.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-charcoal-300">
                <MapPin className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/40 text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Practice Notice & Disclaimers */}
        <div className="py-6 border-b border-charcoal-800 space-y-2 text-[11px] text-charcoal-400 leading-relaxed">
          <p>
            <strong>Enquiry-Based Appointment System:</strong> Submitting an enquiry through this website does not automatically confirm or reserve an appointment time slot. All appointments are coordinated manually with patients based on Dr. Sharmila Siraj&apos;s clinical schedule and availability.
          </p>
          <p>
            <strong>Emergency Disclaimer:</strong> Sharmila MindCare does not provide emergency psychiatric or 24/7 crisis response services. If you are experiencing acute emotional crisis, suicidal ideation, severe harm, or a medical emergency, please immediately call <strong>112</strong> (National Emergency Service in India) or report to the nearest hospital casualty emergency ward.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {currentYear} Sharmila MindCare. All rights reserved. Dr. Sharmila Siraj, Madurai.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <Link to="/policies" className="hover:text-charcoal-300 transition-colors">
              Privacy & Confidentiality Policy
            </Link>
            <span>•</span>
            <Link to="/policies" className="hover:text-charcoal-300 transition-colors">
              Cancellation & Rescheduling
            </Link>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-charcoal-300 flex items-center gap-1 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5" />
              Staff Login
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
