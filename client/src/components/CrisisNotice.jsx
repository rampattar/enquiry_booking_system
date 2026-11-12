import React from 'react';
import { AlertCircle, PhoneCall } from 'lucide-react';

export default function CrisisNotice() {
  return (
    <aside aria-label="Crisis and Emergency Notice" className="bg-charcoal-900 text-offwhite py-2 px-4 text-xs font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
          <span>
            <strong>Crisis Notice:</strong> This website is an enquiry-based consultation platform and not an emergency service.
          </span>
        </div>
        <div className="flex items-center gap-2 text-charcoal-200">
          <span>In acute distress or medical emergency, please call</span>
          <a
            href="tel:112"
            className="inline-flex items-center gap-1 font-semibold text-gold-300 hover:text-gold-200 underline decoration-dotted underline-offset-2"
          >
            <PhoneCall className="w-3 h-3" />
            112 (National Emergency)
          </a>
          <span>or visit the nearest hospital.</span>
        </div>
      </div>
    </aside>
  );
}
