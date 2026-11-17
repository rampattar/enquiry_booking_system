import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button.jsx';

export default function ServiceCard({
  title,
  description,
  whoBenefits,
  approach,
  icon: Icon,
  badge = 'Approved Service',
  serviceKey,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft hover:shadow-soft-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-aqua-300 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
            {Icon ? <Icon className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />}
          </div>
          {badge && (
            <span className="badge-teal text-[11px] font-medium">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-serif font-bold text-teal-900 mb-2.5 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charcoal-600 leading-relaxed mb-5">
          {description}
        </p>

        {/* Who may benefit */}
        {whoBenefits && (
          <div className="mb-4 bg-ivory-50 rounded-2xl p-4 border border-softgrey-200/80">
            <h4 className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-nav">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Who May Benefit</span>
            </h4>
            <p className="text-xs text-charcoal-600 leading-normal">
              {whoBenefits}
            </p>
          </div>
        )}

        {/* Clinical approach */}
        {approach && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1 font-nav">
              Clinical Approach
            </h4>
            <p className="text-xs text-charcoal-500 italic">
              {approach}
            </p>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-softgrey-200">
        <Button
          to={`/book-a-session?service=${encodeURIComponent(serviceKey || title)}`}
          variant="outline"
          size="sm"
          className="w-full justify-between group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700"
          icon={ArrowRight}
          iconPosition="right"
        >
          Send an Enquiry
        </Button>
      </div>
    </motion.div>
  );
}
