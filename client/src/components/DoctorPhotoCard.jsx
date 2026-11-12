import React from 'react';
import { UserCheck, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function DoctorPhotoCard({ className = '', showBadges = true }) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Aura / Background Blob */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-sage-200/60 to-beige-200/60 rounded-3xl blur-xl -z-10" />

      {/* Main Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-sage-200/80 shadow-soft-lg overflow-hidden">
        
        {/* Top Badges */}
        {showBadges && (
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="badge-sage">
              Ahana Hospitals (12 Yrs)
            </span>
            <span className="badge-gold">
              Tamil & English
            </span>
          </div>
        )}

        {/* Doctor Graphic / Clinical Illustration */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-sage-100 via-beige-100 to-sage-50 border-4 border-white shadow-soft flex items-center justify-center overflow-hidden">
          {/* Subtle geometric & healing motifs */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8FAF9D_1px,transparent_1px)] [background-size:12px_12px]" />
          
          <div className="relative text-center z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-sage-500/10 border border-sage-300 flex items-center justify-center text-sage-700 mb-2">
              <UserCheck className="w-10 h-10" />
            </div>
            <span className="text-xs font-serif font-bold text-charcoal-700">Dr. Sharmila Siraj</span>
            <span className="text-[10px] text-charcoal-500">Consultant Psychologist</span>
          </div>
        </div>

        {/* Content Details Below Avatar */}
        <div className="mt-6 text-center space-y-2">
          <h4 className="text-lg font-serif font-bold text-charcoal-800">
            Dr. Sharmila Siraj
          </h4>
          <p className="text-xs text-charcoal-500 leading-snug">
            MSc Psychology • PGDip Counselling • BA Sociology<br />
            <strong className="text-sage-700 font-medium">PhD in Psychology – In Progress</strong>
          </p>

          <div className="pt-3 border-t border-sage-100 flex items-center justify-center gap-4 text-xs text-charcoal-600">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-500" />
              <span>12 Yrs Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sage-600" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Doctor Approved Placeholder Notice */}
        <div className="mt-4 pt-3 border-t border-sage-100/60 text-center">
          <p className="text-[10px] text-charcoal-400 italic">
            Professional Profile • Official Photo Pending Launch Approval
          </p>
        </div>

      </div>
    </div>
  );
}
