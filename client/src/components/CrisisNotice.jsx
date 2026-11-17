import React from 'react';
import { AlertCircle, PhoneCall } from 'lucide-react';

export default function CrisisNotice() {
  return (
    <aside aria-label="Crisis and Emergency Notice" className="bg-teal-900 text-ivory-100 py-1.5 px-4 text-xs font-sans border-b border-teal-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-rose-300 shrink-0" />
          <span>
            <strong>Crisis Notice:</strong> Enquiry-based consultation service. Not equipped for acute medical emergencies.
          </span>
        </div>
        <div className="flex items-center gap-2 text-aqua-200">
          <span>In acute distress or crisis, call</span>
          <a
            href="tel:112"
            className="inline-flex items-center gap-1 font-semibold text-rose-200 hover:text-white underline decoration-dotted underline-offset-2 transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            112 (National Emergency)
          </a>
          <span>or visit the nearest emergency room.</span>
        </div>
      </div>
    </aside>
  );
}
