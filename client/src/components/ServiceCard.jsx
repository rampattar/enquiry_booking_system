import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
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
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-600 border border-sage-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-sage-100 transition-all duration-300 shrink-0">
            {Icon ? <Icon className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />}
          </div>
          {badge && (
            <span className="badge-sage text-[11px]">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-serif font-bold text-charcoal-800 mb-2 group-hover:text-sage-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charcoal-600 leading-relaxed mb-5">
          {description}
        </p>

        {/* Who may benefit */}
        {whoBenefits && (
          <div className="mb-4 bg-beige-50/70 rounded-2xl p-4 border border-beige-200/60">
            <h4 className="text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
              <span>Who May Benefit</span>
            </h4>
            <p className="text-xs text-charcoal-600 leading-normal">
              {whoBenefits}
            </p>
          </div>
        )}

        {/* General approach */}
        {approach && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Clinical Approach
            </h4>
            <p className="text-xs text-charcoal-500 italic">
              {approach}
            </p>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-sage-100/80">
        <Button
          to={`/book-a-session?service=${encodeURIComponent(serviceKey || title)}`}
          variant="outline"
          size="sm"
          className="w-full justify-between group-hover:border-sage-500 group-hover:bg-sage-50/50"
          icon={ArrowRight}
          iconPosition="right"
        >
          Send an Enquiry
        </Button>
      </div>
    </div>
  );
}
