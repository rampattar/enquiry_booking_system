import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake, Phone, CalendarCheck, ShieldCheck } from 'lucide-react';
import Button from './Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Doctor', path: '/about' },
    { name: 'Therapies', path: '/therapies' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-sage-100/80 py-3' 
        : 'bg-offwhite/90 backdrop-blur-sm border-b border-sage-100/40 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sage-400 rounded-lg p-1">
            <div className="w-11 h-11 rounded-2xl bg-sage-100 group-hover:bg-sage-200 border border-sage-200 flex items-center justify-center text-sage-700 transition-colors">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-charcoal-800 block leading-tight">
                Sharmila MindCare
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wider text-charcoal-500 block">
                Psychological Care & Counselling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-sage-800 bg-sage-100/80 font-semibold shadow-xs'
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-beige-100/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919894635451"
              className="text-xs font-medium text-charcoal-600 hover:text-sage-700 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors"
              title="Call for enquiry"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600" />
              <span>+91 98946 35451</span>
            </a>
            <Button to="/book-a-session" variant="primary" size="sm" icon={CalendarCheck}>
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button to="/book-a-session" variant="primary" size="sm" className="text-xs px-3 py-1.5">
              Enquire
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal-700 hover:bg-beige-100 focus:outline-none focus:ring-2 focus:ring-sage-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sage-100 bg-white/98 backdrop-blur-xl animate-fadeIn px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-sage-900 bg-sage-100 font-semibold'
                      : 'text-charcoal-700 hover:bg-beige-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-sage-100 space-y-2">
            <a
              href="tel:+919894635451"
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-charcoal-600 hover:text-sage-700 bg-beige-50 rounded-xl"
            >
              <Phone className="w-4 h-4 text-sage-600" />
              <span>Enquiry Helpline: +91 98946 35451</span>
            </a>
            <Button to="/book-a-session" variant="primary" className="w-full justify-center">
              Submit Appointment Enquiry
            </Button>
            <div className="text-center pt-2">
              <Link to="/admin/login" className="text-[11px] text-charcoal-400 hover:text-charcoal-600 inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Staff Portal Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

