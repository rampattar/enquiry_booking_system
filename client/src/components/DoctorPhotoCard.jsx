import React from 'react';
import { UserCheck, ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorPhotoCard({ className = '', showBadges = true }) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Cyan Geometric Accent Brackets (Reference Image 2) */}
      <div className="absolute -top-3 -right-3 w-28 h-28 border-t-4 border-r-4 border-[#48B6B7] rounded-tr-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-3 -left-3 w-28 h-28 border-b-4 border-l-4 border-[#48B6B7] rounded-bl-3xl pointer-events-none -z-0" />
      
      {/* Soft Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-navy-800/20 to-cyan-400/20 rounded-[2.5rem] blur-xl -z-10" />

      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative bg-white rounded-[2.2rem] p-4 sm:p-5 border-2 border-white shadow-2xl overflow-hidden z-10"
      >
        {/* Top Badges */}
        {showBadges && (
          <div className="flex items-center justify-between gap-2 mb-3 px-1">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#0E3854] text-white shadow-sm font-nav">
              <Award className="w-3.5 h-3.5 text-[#48B6B7]" />
              Ahana Hospitals (12 Yrs)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-cyan-100 text-[#1D4F50] border border-cyan-200 font-nav">
              English &amp; தமிழ்
            </span>
          </div>
        )}

        {/* Doctor Consultation Image Frame (Asymmetrical shape inspired by Image 2) */}
        <div className="relative w-full h-64 sm:h-72 rounded-[1.8rem] rounded-tl-md rounded-br-md overflow-hidden bg-navy-900 border-2 border-cyan-200 group">
          <img
            src="/images/dr-sharmila-siraj.jpg"
            alt="Dr. Sharmila Siraj - Consultant Psychologist & Counsellor, Madurai"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
          {/* Subtle gradient overlay at bottom of photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E3854]/80 via-transparent to-transparent" />
          
          {/* Floating Location Badge */}
          <div className="absolute bottom-3 left-3 bg-[#0E3854]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-[#48B6B7]" />
            <span>Madurai, Tamil Nadu</span>
          </div>
        </div>

        {/* Content Details Below Photo */}
        <div className="mt-4 text-center space-y-1.5 px-2">
          <h4 className="text-xl font-serif font-bold text-[#0E3854] tracking-tight">
            Dr. Sharmila Siraj
          </h4>
          <p className="text-xs font-semibold text-[#2E8485] font-nav">
            Consultant Psychologist | Counsellor | Trainer
          </p>
          <p className="text-[11px] text-charcoal-600 leading-snug">
            MSc Psychology • PGDip Counselling • BA Sociology<br />
            <strong className="text-[#0E3854] font-semibold">PhD in Psychology – In Progress (MKU)</strong>
          </p>

          <div className="pt-3 border-t border-softgrey-200 flex items-center justify-center gap-4 text-xs text-charcoal-700 font-medium font-nav">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#48B6B7]" />
              <span>12 Yrs Clinical Exp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2E8485]" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
