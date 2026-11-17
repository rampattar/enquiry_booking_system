import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  HeartHandshake,
  ChevronDown,
  CalendarCheck,
  Heart,
  Compass,
  Smile,
  Users,
  Sparkles,
  ClipboardCheck,
  BookOpen,
  Award,
  ArrowRight,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import Button from './Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Desktop hover/active dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'about' | 'resources' | null
  const timeoutRef = useRef(null);

  // Mobile accordion states
  const [mobileAccordions, setMobileAccordions] = useState({
    services: false,
    about: false,
    resources: false,
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle dropdown mouse enter with debounce clearing
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileAccordion = (key) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const servicesList = [
    {
      title: 'Marital Counselling',
      desc: 'Couples communication & conflict resolution',
      to: '/therapies?filter=relationships',
      icon: Heart,
    },
    {
      title: 'Stress Counselling',
      desc: 'Work burnout & anxiety relief',
      to: '/therapies?filter=individual',
      icon: Compass,
    },
    {
      title: 'Individual Counselling',
      desc: 'Confidential personal healing & clarity',
      to: '/therapies?filter=individual',
      icon: Smile,
    },
    {
      title: 'Family Counselling',
      desc: 'Familial harmony & parental support',
      to: '/therapies?filter=relationships',
      icon: Users,
    },
    {
      title: 'Behavioural Support',
      desc: 'Child & adolescent positive discipline',
      to: '/therapies?filter=child',
      icon: Sparkles,
    },
    {
      title: 'Psychological Assessment',
      desc: 'Clinical evaluation & care guidance',
      to: '/therapies?filter=individual',
      icon: ClipboardCheck,
    },
    {
      title: 'Life-Skills Education',
      desc: 'Assertiveness & emotional intelligence',
      to: '/therapies?filter=training',
      icon: BookOpen,
    },
    {
      title: 'Interpersonal Training',
      desc: 'Communication & institutional mastery',
      to: '/therapies?filter=training',
      icon: Award,
    },
  ];

  const aboutDoctorLinks = [
    {
      title: 'Professional Profile',
      desc: 'Clinical bio & Dr. Sharmila’s therapeutic approach',
      to: '/about#profile',
      icon: HeartHandshake,
    },
    {
      title: 'Educational Qualifications',
      desc: 'MSc, PGDip & PhD in Progress at MKU',
      to: '/about#education',
      icon: GraduationCap,
    },
    {
      title: 'Clinical Experience',
      desc: '12 years at Ahana Hospitals, Madurai',
      to: '/about#experience',
      icon: Briefcase,
    },
    {
      title: 'Core Expertise',
      desc: 'Marital, stress, and behavioural psychology',
      to: '/about#expertise',
      icon: ShieldCheck,
    },
    {
      title: 'Training & Certifications',
      desc: '12 approved clinical certifications',
      to: '/about#certifications',
      icon: Award,
    },
  ];

  const resourcesLinks = [
    {
      title: 'Mental Wellbeing Overview',
      desc: 'Foundational guidance for emotional balance',
      to: '/resources#wellbeing',
      icon: Heart,
    },
    {
      title: 'Stress Management Guide',
      desc: 'Practical strategies for burnout & daily strain',
      to: '/resources#stress',
      icon: Compass,
    },
    {
      title: 'Relationship Awareness',
      desc: 'Nurturing healthy communication with loved ones',
      to: '/resources#relationships',
      icon: Users,
    },
    {
      title: 'Self-Care & Emotional Care',
      desc: 'Mindful habits to recharge and build clarity',
      to: '/resources#self-care',
      icon: Sparkles,
    },
    {
      title: 'Frequently Asked Questions',
      desc: 'Answers regarding appointments, modes & policies',
      to: '/resources#faqs',
      icon: HelpCircle,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#174C4B] border-b border-[#123D3C] transition-shadow duration-200 ${
        scrolled ? 'shadow-xl py-3' : 'shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B7D1CC] rounded-xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-white/10 group-hover:bg-white/15 text-[#B7D1CC] border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white block leading-tight">
                Sharmila MindCare
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#B7D1CC] block font-medium">
                Psychological Care &amp; Wellbeing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium font-nav transition-colors ${
                  isActive
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink>

            {/* About Doctor Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`px-3.5 py-2 rounded-full text-sm font-medium font-nav flex items-center gap-1.5 transition-colors ${
                  location.pathname.startsWith('/about') || activeDropdown === 'about'
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>About Doctor</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#B7D1CC] transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {/* About Dropdown Panel */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white text-charcoal-800 rounded-2xl shadow-2xl border border-softgrey-200 p-2.5 animate-slide-up z-50">
                  {aboutDoctorLinks.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.to}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-aqua-100/60 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-charcoal-800 group-hover:text-teal-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-charcoal-500 leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Services Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`px-3.5 py-2 rounded-full text-sm font-medium font-nav flex items-center gap-1.5 transition-colors ${
                  location.pathname.startsWith('/therapies') || activeDropdown === 'services'
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#B7D1CC] transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Panel */}
              {activeDropdown === 'services' && (
                <div className="fixed left-1/2 -translate-x-1/2 top-[68px] w-[95vw] max-w-5xl bg-white text-charcoal-800 rounded-3xl shadow-2xl border border-softgrey-200 p-6 xl:p-8 animate-slide-up z-50">
                  <div className="grid grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Column: Intro */}
                    <div className="col-span-3 bg-teal-50/70 rounded-2xl p-5 border border-teal-100 flex flex-col justify-between">
                      <div>
                        <span className="badge-teal mb-2">Approved Care</span>
                        <h4 className="text-lg font-serif font-bold text-teal-700 mb-2">
                          Psychological Services
                        </h4>
                        <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                          Evidence-informed counselling tailored to individuals, couples, children, and families with utmost confidentiality.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-teal-200/60">
                        <Link
                          to="/therapies"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                        >
                          <span>Browse All Therapies</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Middle Column: 2-column service links (8 services) */}
                    <div className="col-span-6 grid grid-cols-2 gap-2">
                      {servicesList.map((svc, idx) => {
                        const Icon = svc.icon;
                        return (
                          <Link
                            key={idx}
                            to={svc.to}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-aqua-100/60 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-charcoal-800 group-hover:text-teal-700 transition-colors">
                                {svc.title}
                              </div>
                              <div className="text-[10px] text-charcoal-500 leading-tight">
                                {svc.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right Column: Highlighted Enquiry Card */}
                    <div className="col-span-3 bg-gradient-to-br from-teal-700 to-teal-950 rounded-2xl p-5 text-white flex flex-col justify-between shadow-teal-glow">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-600/60 text-aqua-200 text-[10px] font-semibold mb-3 border border-teal-500/50">
                          <Sparkles className="w-3 h-3 text-rose-300" />
                          <span>Manual Coordination</span>
                        </div>
                        <h5 className="font-serif font-bold text-base text-white mb-2">
                          Need Guidance on Choosing?
                        </h5>
                        <p className="text-xs text-aqua-100 leading-relaxed mb-4">
                          Submit a confidential enquiry and our team will discuss your consultation requirements.
                        </p>
                      </div>

                      <Button to="/book-a-session" variant="accent" size="sm" className="w-full justify-center">
                        Book a Session
                      </Button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className={`px-3.5 py-2 rounded-full text-sm font-medium font-nav flex items-center gap-1.5 transition-colors ${
                  location.pathname.startsWith('/resources') || activeDropdown === 'resources'
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={activeDropdown === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#B7D1CC] transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              {/* Resources Dropdown Panel */}
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white text-charcoal-800 rounded-2xl shadow-2xl border border-softgrey-200 p-2.5 animate-slide-up z-50">
                  {resourcesLinks.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.to}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-aqua-100/60 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-charcoal-800 group-hover:text-teal-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-charcoal-500 leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Policies */}
            <NavLink
              to="/policies"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium font-nav transition-colors ${
                  isActive
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Policies
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium font-nav transition-colors ${
                  isActive
                    ? 'text-white bg-white/20 font-semibold shadow-inner border border-white/25'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/book-a-session"
              variant="accent"
              size="md"
              icon={CalendarCheck}
              className="font-semibold shadow-rose-glow"
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button to="/book-a-session" variant="accent" size="sm" className="text-xs px-3 py-1.5 font-semibold">
              Enquire
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#B7D1CC]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-slide-up">
            
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-softgrey-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-teal-800 leading-tight">
                      Sharmila MindCare
                    </h3>
                    <p className="text-[10px] text-charcoal-500 font-medium">Psychological Care &amp; Wellbeing</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-charcoal-600 hover:bg-aqua-50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links with Accordions */}
              <nav className="space-y-1">
                
                {/* Home */}
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-aqua-100 text-teal-800' : 'text-charcoal-800 hover:bg-ivory-100'
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* About Doctor Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion('about')}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100 transition-colors"
                  >
                    <span>About Doctor</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordions.about ? 'rotate-180 text-teal-700' : ''}`} />
                  </button>

                  {mobileAccordions.about && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-ivory-50/80 rounded-xl mb-1">
                      {aboutDoctorLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-charcoal-700 hover:text-teal-700 hover:bg-white rounded-lg transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion('services')}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100 transition-colors"
                  >
                    <span>Counselling Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordions.services ? 'rotate-180 text-teal-700' : ''}`} />
                  </button>

                  {mobileAccordions.services && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-ivory-50/80 rounded-xl mb-1">
                      {servicesList.map((svc, idx) => (
                        <Link
                          key={idx}
                          to={svc.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-charcoal-700 hover:text-teal-700 hover:bg-white rounded-lg transition-colors"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion('resources')}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100 transition-colors"
                  >
                    <span>Resources &amp; Guides</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordions.resources ? 'rotate-180 text-teal-700' : ''}`} />
                  </button>

                  {mobileAccordions.resources && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-ivory-50/80 rounded-xl mb-1">
                      {resourcesLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-charcoal-700 hover:text-teal-700 hover:bg-white rounded-lg transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Policies */}
                <NavLink
                  to="/policies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-aqua-100 text-teal-800' : 'text-charcoal-800 hover:bg-ivory-100'
                    }`
                  }
                >
                  Policies &amp; Guidelines
                </NavLink>

                {/* Contact */}
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-aqua-100 text-teal-800' : 'text-charcoal-800 hover:bg-ivory-100'
                    }`
                  }
                >
                  Contact &amp; Location
                </NavLink>

              </nav>

            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-softgrey-200 space-y-3">
              <Button
                to="/book-a-session"
                variant="accent"
                className="w-full justify-center shadow-rose-glow font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Session Enquiry
              </Button>

              <a
                href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-2 text-center">
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] text-charcoal-500 hover:text-teal-700 flex items-center justify-center gap-1 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized Staff Portal</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
