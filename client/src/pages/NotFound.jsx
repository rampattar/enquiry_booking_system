import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-sage-100 shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
          <HeartHandshake className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="badge-sage">404 Error</span>
          <h1 className="text-3xl font-serif font-bold text-charcoal-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" icon={Home} size="sm">
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

