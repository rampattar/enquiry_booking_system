import React from 'react';
import { HeartHandshake, Home } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-softgrey-200 shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-[#0E3854] flex items-center justify-center mx-auto border border-cyan-200">
          <HeartHandshake className="w-8 h-8 text-[#48B6B7]" />
        </div>

        <div className="space-y-2">
          <span className="badge-navy">404 Error</span>
          <h1 className="text-3xl font-serif font-bold text-[#0E3854]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="cyan" icon={Home} size="sm">
            Go to Home
          </Button>
          <Button to="/contact" variant="outline" size="sm">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
