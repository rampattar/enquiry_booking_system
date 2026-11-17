import React from 'react';
import { MapPin, Phone, MessageSquare, Globe, Heart } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-teal-800 text-ivory-100 text-[11px] sm:text-xs py-2 px-4 border-b border-teal-700/60 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left Side: Tagline & Madurai Location */}
        <div className="flex items-center gap-3 sm:gap-4 text-aqua-200">
          <span className="flex items-center gap-1.5 font-medium text-white">
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
            <span>Psychological Care, Counselling & Wellbeing</span>
          </span>
          <span className="hidden sm:inline text-teal-600">•</span>
          <span className="hidden sm:flex items-center gap-1 text-aqua-100">
            <MapPin className="w-3.5 h-3.5 text-aqua-300" />
            <span>Madurai, Tamil Nadu, India</span>
          </span>
        </div>

        {/* Right Side: Phone, WhatsApp, Language Indicator */}
        <div className="flex items-center gap-3 sm:gap-5 text-white">
          <a
            href="tel:+919894635451"
            className="flex items-center gap-1.5 hover:text-aqua-200 transition-colors font-medium"
            title="Helpline for consultation enquiry"
          >
            <Phone className="w-3.5 h-3.5 text-aqua-300" />
            <span>+91 98946 35451</span>
          </a>

          <span className="text-teal-600">•</span>

          <a
            href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            title="WhatsApp Consultation Enquiry"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <span className="text-teal-600">•</span>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-900/60 border border-teal-700/60 text-aqua-200">
            <Globe className="w-3 h-3 text-aqua-300" />
            <span className="font-semibold text-[10px] tracking-wide">English &amp; தமிழ்</span>
          </div>
        </div>

      </div>
    </div>
  );
}
