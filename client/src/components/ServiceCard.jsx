import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button.jsx';

export default function ServiceCard({
  title,
  description,
  whoBenefits,
  approach,
  image,
  icon: Icon,
  badge = 'Approved Service',
  serviceKey,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-3xl overflow-hidden border border-softgrey-200 shadow-soft hover:shadow-soft-lg hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Treatment Image Container */}
        {image && (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-navy-50">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />
            
            {/* Badge on Image */}
            {badge && (
              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#48B6B7] text-white shadow-md">
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          {/* Icon & Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0 group-hover:bg-[#48B6B7] group-hover:text-white transition-colors duration-300">
              {Icon ? <Icon className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0E3854] group-hover:text-[#2E8485] transition-colors leading-snug">
              {title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
            {description}
          </p>

          {/* Who may benefit box */}
          {whoBenefits && (
            <div className="mb-4 bg-ice-100 rounded-2xl p-3.5 border border-softgrey-200">
              <h4 className="text-[11px] font-bold text-[#0E3854] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-nav">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#48B6B7]" />
                <span>Who May Benefit</span>
              </h4>
              <p className="text-xs text-charcoal-600 leading-normal">
                {whoBenefits}
              </p>
            </div>
          )}

          {/* Clinical approach */}
          {approach && (
            <div className="mb-4">
              <h4 className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider mb-1 font-nav">
                Clinical Approach
              </h4>
              <p className="text-xs text-charcoal-600 italic">
                {approach}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="px-6 sm:px-7 pb-6 pt-2">
        <Button
          to={`/book-a-session?service=${encodeURIComponent(serviceKey || title)}`}
          variant="primary"
          size="md"
          className="w-full justify-center shadow-cyan-glow"
          showArrow={true}
        >
          Send an Enquiry
        </Button>
      </div>
    </motion.div>
  );
}
