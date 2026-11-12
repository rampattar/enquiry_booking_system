import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import CrisisNotice from '../components/CrisisNotice.jsx';
import { MessageSquare } from 'lucide-react';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-charcoal-800 font-sans antialiased selection:bg-sage-200 selection:text-charcoal-900">
      {/* Top Emergency / Crisis Notice Bar */}
      <CrisisNotice />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sticky Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sharmila MindCare on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
