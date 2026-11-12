import React from 'react';
import { HeartHandshake, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center p-6 text-charcoal-800">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-sage-100 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-100 text-sage-600 mb-2">
          <HeartHandshake className="w-9 h-9" />
        </div>
        
        <div>
          <span className="badge-sage mb-3">Phase 1 Setup Complete</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-charcoal-800 tracking-tight mt-2">
            Sharmila MindCare
          </h1>
          <p className="text-sm sm:text-base font-serif italic text-sage-600 mt-1">
            Understand Your Mind. Embrace Your Wellbeing.
          </p>
          <p className="text-xs uppercase tracking-wider text-charcoal-400 mt-1">
            Psychological Care, Counselling & Wellbeing
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-beige-50 border border-beige-200 text-left text-sm text-charcoal-700 space-y-2">
          <div className="flex items-center gap-2 font-medium text-charcoal-800">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Consultant: Dr. Sharmila Siraj</span>
          </div>
          <p className="text-xs text-charcoal-500">
            12 Years Clinical Experience at Ahana Hospitals, Madurai • Specialising in Marital & Stress Counselling
          </p>
        </div>

        <div className="pt-2 border-t border-sage-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs">
            <div className="flex items-center gap-2 text-charcoal-700 bg-sage-50/60 p-3 rounded-xl border border-sage-100">
              <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
              <span>React 18 + Vite configured</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-700 bg-sage-50/60 p-3 rounded-xl border border-sage-100">
              <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
              <span>Tailwind CSS & Brand Palette</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-700 bg-sage-50/60 p-3 rounded-xl border border-sage-100">
              <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
              <span>Express Backend Scaffolded</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-700 bg-sage-50/60 p-3 rounded-xl border border-sage-100">
              <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
              <span>MERN Folder Structure Ready</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-charcoal-400">
          Phase 1 Environment Initialized • Ready to proceed to Phase 2 (Website UI & Pages)
        </p>
      </div>
    </div>
  );
}

export default App;

