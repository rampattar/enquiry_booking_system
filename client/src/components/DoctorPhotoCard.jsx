import React from 'react';
import { UserCheck, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorPhotoCard({ className = '', showBadges = true }) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Aura / Background Blob */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-aqua-200/50 via-teal-100/40 to-rose-200/40 rounded-3xl blur-xl -z-10" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft-lg overflow-hidden"
      >
        {/* Top Badges */}
        {showBadges && (
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="badge-teal">
              Ahana Hospitals (12 Yrs)
            </span>
            <span className="badge-rose">
              English &amp; தமிழ்
            </span>
          </div>
        )}

        {/* Doctor Graphic / Clinical Illustration */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-teal-50 via-ivory-100 to-aqua-100 border-4 border-white shadow-soft flex items-center justify-center overflow-hidden">
          {/* Subtle grid pattern motif */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#174C4B_1px,transparent_1px)] [background-size:12px_12px]" />
          
          <div className="relative text-center z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-teal-700/10 border border-teal-300 flex items-center justify-center text-teal-700 mb-2 shadow-inner">
              <UserCheck className="w-10 h-10" />
            </div>
            <span className="text-xs font-serif font-bold text-teal-900">Dr. Sharmila Siraj</span>
            <span className="text-[10px] text-charcoal-500 font-medium">Consultant Psychologist</span>
          </div>
        </div>

        {/* Content Details Below Avatar */}
        <div className="mt-6 text-center space-y-2">
          <h4 className="text-xl font-serif font-bold text-teal-800">
            Dr. Sharmila Siraj
          </h4>
          <p className="text-xs text-charcoal-600 leading-snug">
            MSc Psychology • PGDip Counselling • BA Sociology<br />
            <strong className="text-teal-700 font-semibold">PhD in Psychology – In Progress</strong>
          </p>

          <div className="pt-3 border-t border-softgrey-200 flex items-center justify-center gap-4 text-xs text-charcoal-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-rose-500" />
              <span>12 Yrs Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Transparency note */}
        <div className="mt-4 pt-3 border-t border-softgrey-200 text-center">
          <p className="text-[10px] text-charcoal-400 italic">
            Professional Profile • Official Photo Pending Launch Approval
          </p>
        </div>

      </motion.div>
    </div>
  );
}
