import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldCheck,
  ArrowRight,
  Heart,
  Users,
  Compass,
  Smile,
  BookOpen,
  Award,
  MessageSquare,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Phone,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import DoctorPhotoCard from '../components/DoctorPhotoCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

export default function Home() {
  const featuredServices = [
    {
      title: 'Marital & Relationship Counselling',
      serviceKey: 'Marital Counselling',
      description: 'Dedicated support for couples experiencing communication breakdown, marital distress, conflict resolution, or life transitions.',
      whoBenefits: 'Couples and spouses seeking to rebuild intimacy, resolve repeated disagreements, or strengthen marital partnership.',
      approach: 'Empathetic, non-judgmental mediation fostering open dialogue and mutual emotional understanding.',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80',
      icon: Heart,
      badge: 'Core Specialty',
    },
    {
      title: 'Stress & Anxiety Counselling',
      serviceKey: 'Stress Counselling',
      description: 'Evidence-informed psychological support for work stress, academic strain, chronic worry, and modern lifestyle pressures.',
      whoBenefits: 'Individuals feeling overwhelmed, anxious, emotionally drained, or struggling to cope with daily demands.',
      approach: 'Cognitive reframing, mindfulness-based stress reduction, and practical emotional coping strategies.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      icon: Compass,
      badge: 'Core Specialty',
    },
    {
      title: 'Individual Counselling',
      serviceKey: 'Individual Counselling',
      description: 'A confidential, one-on-one sanctuary to explore personal thoughts, emotional pain, self-esteem, and personal growth.',
      whoBenefits: 'Adults and young adults facing loneliness, sadness, personal dilemmas, or emotional blocks.',
      approach: 'Client-centered, empathetic reflection aimed at personal clarity, emotional resilience, and healing.',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
      icon: Smile,
      badge: 'Confidential Care',
    },
    {
      title: 'Family Counselling',
      serviceKey: 'Family Counselling',
      description: 'Facilitating harmony across multi-generational households, parent-child discord, and family conflict resolution.',
      whoBenefits: 'Families experiencing relational strain, parenting friction, or major life changes.',
      approach: 'Systemic family perspective honoring every member’s emotional voice while building cohesive bonds.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      badge: 'Family Focus',
    },
    {
      title: 'Child & Adolescent Behavioural Support',
      serviceKey: 'Behavioural Support',
      description: 'Guiding children and adolescents through behavioural obstacles, emotional turbulence, and school adjustment challenges.',
      whoBenefits: 'Parents and youths navigating behavioural difficulties, attention struggles, or peer pressures.',
      approach: 'Positive discipline, gentle behavioural reinforcement, and empathetic parental coaching.',
      image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
      badge: 'Child & Youth',
    },
    {
      title: 'Life-Skills & Interpersonal Training',
      serviceKey: 'Life-Skills Education',
      description: 'Structured life-skills education, emotional intelligence building, assertiveness training, and conflict mastery.',
      whoBenefits: 'Students, professionals, and individuals seeking to elevate interpersonal communication and confidence.',
      approach: 'Action-oriented behavioural skills coaching developed through years of training at institutions and academies.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      icon: BookOpen,
      badge: 'Skills Training',
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'Submit an Enquiry',
      desc: 'Fill out our confidential online enquiry form or connect via WhatsApp/Phone.',
    },
    {
      number: '02',
      title: 'Receive a Follow-Up Call',
      desc: 'Our team contacts you to understand your requirements and preferred consultation mode.',
    },
    {
      number: '03',
      title: 'Discuss Requirements',
      desc: 'We verify session preferences (Online video or In-person in Madurai) and scope of care.',
    },
    {
      number: '04',
      title: 'Doctor Availability Checked',
      desc: 'Our coordinator checks Dr. Sharmila Siraj\'s current clinical schedule manually.',
    },
    {
      number: '05',
      title: 'Appointment Confirmed',
      desc: 'Your consultation time is confirmed manually, and details are shared directly with you.',
    },
  ];

  const whyChoosePoints = [
    {
      title: '12 Years Clinical Experience',
      desc: 'Seasoned clinical background at Ahana Hospitals, Madurai, handling diverse clinical and counselling cases.',
      icon: Award,
    },
    {
      title: 'Empathetic & Confidential Care',
      desc: 'A safe, warm, and strictly confidential sanctuary where your personal narrative is respected without judgment.',
      icon: ShieldCheck,
    },
    {
      title: 'Bilingual Support (English & Tamil)',
      desc: 'Consultations and guidance conducted comfortably in both English and Tamil (தமிழ்).',
      icon: MessageSquare,
    },
    {
      title: 'Specialised Focus Areas',
      desc: 'Deep clinical expertise in marital counselling, stress reduction, and adolescent behavioural guidance.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Hero Section - Deep Navy & Vibrant Cyan (Inspired by Reference Image 2) */}
      <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden bg-[#0E3854] text-white">
        
        {/* Subtle geometric wireframe & cyan background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#48B6B7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#48B6B7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#1D4F50]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Cyan Hexagonal Outline (From Image 2) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#48B6B7]/30 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Subtitle, Signature Button (Image 2 style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Doctor designation pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold tracking-wide border border-cyan-400/30 font-nav shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#48B6B7]" />
                <span>Dr. Sharmila Siraj • 12 Years at Ahana Hospitals, Madurai</span>
              </div>

              {/* Bold Tri-Line Title (Reference Image 2: "CONFIDENTIAL / PSYCHIATRIC / CARE IN MADURAI") */}
              <div className="space-y-1">
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-wider text-white uppercase">
                  CONFIDENTIAL
                </span>
                <span className="inline-block text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white border-2 border-white/90 px-3 sm:px-4 py-0.5 rounded-sm my-1 tracking-tight">
                  PSYCHOLOGICAL
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-wider text-white uppercase">
                  CARE IN MADURAI
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-cyan-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Empathetic assessment and counselling for stress, marital discord, anxiety, adolescent behavioural guidance, and mental wellbeing by a seasoned Consultant Psychologist.
              </p>

              {/* Action Buttons: Signature Vibrant Cyan Pill Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/book-a-session"
                  variant="cyan"
                  size="lg"
                  className="shadow-cyan-glow"
                  showArrow={true}
                >
                  Book a Session
                </Button>
                
                <Button
                  to="/therapies"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                  showArrow={true}
                >
                  Explore Services
                </Button>
              </div>

              {/* Highlights Strip */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-xl font-serif font-bold text-white">12+ Yrs</div>
                  <div className="text-xs text-cyan-200 font-medium">Ahana Hospitals Experience</div>
                </div>
                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-xl font-serif font-bold text-white">English &amp; தமிழ்</div>
                  <div className="text-xs text-cyan-200 font-medium">Bilingual Consultations</div>
                </div>
                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xl font-serif font-bold text-white">Online &amp; Offline</div>
                  <div className="text-xs text-cyan-200 font-medium">Madurai &amp; Video Sessions</div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Doctor Consultation Photo Frame (Image 2 style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
            >
              <DoctorPhotoCard className="w-full max-w-md" />
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. Banner Section: Vibrant Cyan Appointment Banner (Inspired by Reference Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#48B6B7] rounded-3xl p-6 sm:p-10 text-white shadow-cyan-glow relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle background decorative shapes */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 skew-x-12 pointer-events-none" />
          
          {/* Left Side: Icon + Heading + Text */}
          <div className="flex items-center gap-4 sm:gap-6 relative z-10 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center shrink-0 mx-auto sm:mx-0 shadow-inner">
              <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Book an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-white/95 mt-1 font-light max-w-xl">
                Reach out to us for confidential psychological care and counselling. We are here to help you heal and thrive.
              </p>
            </div>
          </div>

          {/* Right Side: Contrast White Pill Button (CALL NOW / BOOK A SESSION) */}
          <div className="relative z-10 shrink-0">
            <Button
              to="/book-a-session"
              variant="white"
              size="lg"
              className="shadow-xl px-8"
              showArrow={true}
            >
              Call Now / Enquire
            </Button>
          </div>
        </motion.div>
      </section>


      {/* 3. Counselling Services Section (All Treatment Cards equipped with photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <span className="badge-navy">Approved Clinical Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            Psychological Care Tailored to Your Journey
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Every session is structured with warmth, clinical empathy, and professional integrity. Select a service to explore its approach or submit an enquiry.
          </p>
        </motion.div>

        {/* 6 Featured Cards with High-Quality Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              serviceKey={service.serviceKey}
              description={service.description}
              whoBenefits={service.whoBenefits}
              approach={service.approach}
              image={service.image}
              icon={service.icon}
              badge={service.badge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/therapies" variant="secondary" size="md" showArrow={true}>
            Browse All 8 Approved Therapies &amp; Care Modalities
          </Button>
        </div>
      </section>


      {/* 4. Section: "HOW WE WORK / Our Treatment Approach" (Inspired by Reference Image 3) */}
      <section className="bg-white py-16 sm:py-24 border-y border-softgrey-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Description & 4 Pillars (Image 3 style) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Top tag */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#48B6B7] rounded-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#48B6B7] font-nav">
                  HOW WE WORK
                </span>
              </div>

              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0E3854] leading-tight">
                Our Treatment Approach
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Based on a comprehensive biopsychosocial model. Treatment is individualised — not all emotional consultations require medication. Understanding comes before intervention.
              </p>

              {/* Highlighted Quote in Cyan / Navy */}
              <div className="p-3.5 bg-cyan-50 border-l-4 border-[#48B6B7] rounded-r-xl">
                <p className="text-sm font-semibold text-[#1D4F50] italic">
                  &ldquo;Treatment begins with understanding, active listening, and emotional safety.&rdquo;
                </p>
              </div>

              {/* 4 Checkmark Points (Assessment, Formulation, Planning, Follow-Up) */}
              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48B6B7]" />
                  </div>
                  <div>
                    <strong>Clinical Assessment:</strong> Detailed evaluation of symptoms, duration, emotional triggers, and functional impact.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48B6B7]" />
                  </div>
                  <div>
                    <strong>Psychological Formulation:</strong> Grounded in established clinical criteria and evidence — clearly explained, no ambiguity.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48B6B7]" />
                  </div>
                  <div>
                    <strong>Treatment Planning:</strong> Non-pharmacological interventions, cognitive reframing, behavioural strategies, and lifestyle guidance.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48B6B7]" />
                  </div>
                  <div>
                    <strong>Follow-Up &amp; Growth:</strong> Monitoring progress, adjusting tools, and empowering clients toward sustained emotional resilience.
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button to="/about" variant="cyan" size="md" showArrow={true}>
                  Learn More About Approach
                </Button>
              </div>

            </motion.div>

            {/* Right Column: Multi-Photo Clinical Collage with Vertical Accent Bars (Image 3 style) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              {/* Decorative Vertical Accent Bars (Image 3 style) */}
              <div className="absolute -left-6 top-10 flex gap-2 h-44 pointer-events-none z-10">
                <div className="w-2.5 h-full bg-[#48B6B7] rounded-full" />
                <div className="w-2.5 h-32 bg-[#0E3854] rounded-full mt-4" />
              </div>

              <div className="relative pl-6 sm:pl-8 grid grid-cols-2 gap-4">
                {/* Main Large Photo (Top/Right) */}
                <div className="col-span-2 relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
                    alt="Psychologist in clinical counselling session"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3854]/40 to-transparent" />
                </div>

                {/* Overlapping Secondary Photo 1 */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white -mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                    alt="Clinical assessment and therapeutic notes"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlapping Secondary Photo 2 */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white -mt-6 bg-[#0E3854] p-5 flex flex-col justify-between text-white">
                  <div className="w-8 h-8 rounded-full bg-[#48B6B7] text-white flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xl font-serif font-bold text-white">100%</div>
                    <div className="text-xs text-cyan-200">Ethical &amp; Confidential Consultation Standards</div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* 5. Qualifications & Clinical Experience (12 Years at Ahana Hospitals) */}
      <section className="bg-ice-100 py-16 sm:py-20 border-b border-softgrey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-navy">Academic &amp; Clinical Background</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
                12 Years Clinical Experience at Ahana Hospitals
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Extensive institutional career serving at Ahana Hospitals, Madurai, along with 2 years as Interpersonal Skills Trainer at Judges Academy, Madurai, and faculty roles across universities.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-softgrey-200 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-[#2E8485] shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <strong>PhD in Psychology – In Progress:</strong> Madurai Kamaraj University. Active research investigating Smartphone Addiction.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-softgrey-200 shadow-xs">
                  <Briefcase className="w-5 h-5 text-[#2E8485] shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <strong>Hospital Consultant:</strong> 12 years of clinical psychotherapy, marital counselling, and stress alleviation at Ahana Hospitals, Madurai.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-softgrey-200 shadow-xs">
                  <Award className="w-5 h-5 text-[#2E8485] shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <strong>Trainer &amp; Faculty:</strong> Judges Academy (2 yrs), M.S. Chellamuthu Trust, Alagappa University, and The Hindu NIE (2005–2012).
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/about" variant="outline" size="sm">
                  View Full Credentials &amp; Certifications
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#0E3854] border-b border-softgrey-200 pb-3">
                  Approved Core Areas of Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Psychological Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Marital Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Stress Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Behavioural Skills Training</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Interpersonal Skills Training</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-50 border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0" />
                    <span>Life-Skills Education</span>
                  </div>
                </div>

                <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-200 text-xs text-[#1D4F50]">
                  All clinical credentials and training backgrounds are verified and practiced in full compliance with psychology codes of ethics.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. How It Works (5-Step Visual Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="badge-navy">Enquiry Coordination</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            How the Enquiry Process Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Appointments are coordinated manually to provide authentic clinical focus and match the psychologist&apos;s current availability.
          </p>
        </motion.div>

        {/* 5 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
          {howItWorksSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-softgrey-200 shadow-soft flex flex-col justify-between relative group hover:border-[#48B6B7] transition-colors"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-[#48B6B7] group-hover:text-[#0E3854] transition-colors block mb-3">
                  {step.number}
                </span>
                <h3 className="text-base font-serif font-bold text-charcoal-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Process Note */}
        <div className="mt-8 bg-cyan-50 rounded-2xl p-4 sm:p-5 border border-cyan-200 max-w-3xl mx-auto flex items-start gap-3.5">
          <HelpCircle className="w-5 h-5 text-[#0E3854] shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-700 leading-relaxed">
            <strong>Important Coordination Note:</strong> Submitting an enquiry does not automatically book an appointment. Our telecaller or care coordinator will contact you via phone or WhatsApp to understand your requirements and confirm a mutually agreed session time based on doctor availability.
          </p>
        </div>
      </section>


      {/* 7. Frequently Asked Questions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <span className="badge-navy">Common Queries</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-charcoal-600">
            Find answers to common questions regarding consultation requests, modes, and appointment coordination.
          </p>
        </motion.div>

        <FAQAccordion />
      </section>


      {/* 8. Call to Action Banner (Navy & Cyan) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0E3854] via-[#0E3854] to-[#0A273C] rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left relative overflow-hidden shadow-navy-glow"
        >
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#48B6B7]" />
              Confidential &amp; Supportive
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              Ready to take the first step toward emotional clarity?
            </h2>

            <p className="text-sm sm:text-base text-cyan-100 leading-relaxed font-light">
              Submit your enquiry today. We will guide you through our counselling options and coordinate a session that accommodates your schedule.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button to="/book-a-session" variant="cyan" size="lg" showArrow={true}>
                Submit Appointment Enquiry
              </Button>
              <a
                href="https://wa.me/919894635451?text=Hello%20Dr.%20Sharmila%20MindCare,%20I%20would%20like%20to%20enquire%20about%20a%20counselling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
