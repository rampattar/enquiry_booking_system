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
  Briefcase
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
      icon: Heart,
      badge: 'Core Specialty',
    },
    {
      title: 'Stress & Anxiety Counselling',
      serviceKey: 'Stress Counselling',
      description: 'Evidence-informed psychological support for work stress, academic strain, chronic worry, and modern lifestyle pressures.',
      whoBenefits: 'Individuals feeling overwhelmed, anxious, emotionally drained, or struggling to cope with daily demands.',
      approach: 'Cognitive reframing, mindfulness-based stress reduction, and practical emotional coping strategies.',
      icon: Compass,
      badge: 'Core Specialty',
    },
    {
      title: 'Individual Counselling',
      serviceKey: 'Individual Counselling',
      description: 'A confidential, one-on-one sanctuary to explore personal thoughts, emotional pain, self-esteem, and personal growth.',
      whoBenefits: 'Adults and young adults facing loneliness, sadness, personal dilemmas, or emotional blocks.',
      approach: 'Client-centered, empathetic reflection aimed at personal clarity, emotional resilience, and healing.',
      icon: Smile,
      badge: 'Confidential Care',
    },
    {
      title: 'Family Counselling',
      serviceKey: 'Family Counselling',
      description: 'Facilitating harmony across multi-generational households, parent-child discord, and family conflict resolution.',
      whoBenefits: 'Families experiencing relational strain, parenting friction, or major life changes.',
      approach: 'Systemic family perspective honoring every member’s emotional voice while building cohesive bonds.',
      icon: Users,
      badge: 'Family Focus',
    },
    {
      title: 'Child & Adolescent Behavioural Support',
      serviceKey: 'Behavioural Support',
      description: 'Guiding children and adolescents through behavioural obstacles, emotional turbulence, and school adjustment challenges.',
      whoBenefits: 'Parents and youths navigating behavioural difficulties, attention struggles, or peer pressures.',
      approach: 'Positive discipline, gentle behavioural reinforcement, and empathetic parental coaching.',
      icon: Sparkles,
      badge: 'Child & Youth',
    },
    {
      title: 'Life-Skills & Interpersonal Training',
      serviceKey: 'Life-Skills Education',
      description: 'Structured life-skills education, emotional intelligence building, assertiveness training, and conflict mastery.',
      whoBenefits: 'Students, professionals, and individuals seeking to elevate interpersonal communication and confidence.',
      approach: 'Action-oriented behavioural skills coaching developed through years of training at institutions and academies.',
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
      
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-14 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-aqua-50/60 via-ivory-100 to-ivory-100">
        
        {/* Soft background decorative auras */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-aqua-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Bio, CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold tracking-wide border border-teal-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>Professional Psychological Care &amp; Wellbeing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal-900 tracking-tight leading-[1.15]">
                Your Mental Wellbeing Deserves Care and Understanding.
              </h1>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-serif text-teal-700 font-semibold">
                  Dr. Sharmila Siraj
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 font-medium font-nav">
                  Consultant Psychologist | Counsellor | Interpersonal Skills Trainer
                </p>
              </div>

              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Compassionate psychological counselling and wellbeing support with <strong>12 years of clinical experience</strong> at Ahana Hospitals, Madurai. Guiding individuals, couples, children, and families toward clarity, calm, and emotional healing.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to="/book-a-session" variant="primary" size="lg" icon={CalendarCheck}>
                  Book a Session
                </Button>
                <Button to="/therapies" variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                  Explore Our Services
                </Button>
              </div>

              {/* Highlights Strip */}
              <div className="pt-6 border-t border-softgrey-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="p-3.5 bg-white rounded-2xl border border-softgrey-200 shadow-soft">
                  <div className="text-xl font-serif font-bold text-teal-800">12+ Yrs</div>
                  <div className="text-xs text-charcoal-500 font-medium">Ahana Hospitals Experience</div>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-softgrey-200 shadow-soft">
                  <div className="text-xl font-serif font-bold text-teal-800">English &amp; தமிழ்</div>
                  <div className="text-xs text-charcoal-500 font-medium">Bilingual Consultations</div>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-softgrey-200 shadow-soft col-span-2 sm:col-span-1">
                  <div className="text-xl font-serif font-bold text-teal-800">Online &amp; Offline</div>
                  <div className="text-xs text-charcoal-500 font-medium">Madurai &amp; Video Sessions</div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Doctor Profile Card */}
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


      {/* 2. Doctor Introduction Section */}
      <section className="bg-white py-16 sm:py-20 border-y border-softgrey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <span className="badge-teal">Our Clinical Commitment</span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
              &ldquo;My approach is empathetic, clear and confidential.&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed italic font-serif">
              &ldquo;I help individuals, couples, children and families with counselling, behavioural support and life-skills education. My focus is marital counselling and stress counselling. I help you find calm, build clarity and heal.&rdquo;
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 bg-aqua-300 rounded-full" />
              <span className="text-sm font-serif font-bold text-teal-800">
                Dr. Sharmila Siraj, Consultant Psychologist
              </span>
              <div className="h-0.5 w-12 bg-aqua-300 rounded-full" />
            </div>

            <div className="pt-4">
              <Button to="/about" variant="outline" size="sm">
                View Full Professional Profile &amp; Credentials
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 3. Counselling Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <span className="badge-aqua">Approved Clinical Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
            Psychological Care Tailored to Your Journey
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Every session is structured with warmth, clinical empathy, and professional integrity. Select a service to explore its approach or submit an enquiry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              serviceKey={service.serviceKey}
              description={service.description}
              whoBenefits={service.whoBenefits}
              approach={service.approach}
              icon={service.icon}
              badge={service.badge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/therapies" variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
            Browse All 8 Approved Therapies &amp; Care Modalities
          </Button>
        </div>
      </section>


      {/* 4. Why Choose Dr. Sharmila Section */}
      <section className="bg-paleaqua py-16 sm:py-24 border-y border-softgrey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <span className="badge-teal">Professional Practice</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
              Why Consult Dr. Sharmila Siraj?
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600">
              Committed to ethical, evidence-based psychological counselling and dedicated client welfare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft hover:shadow-soft-md transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-teal-900">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 5. How It Works (5-Step Visual Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="badge-rose">Enquiry Coordination</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
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
              className="bg-white rounded-3xl p-6 border border-softgrey-200 shadow-soft flex flex-col justify-between relative group hover:border-teal-300 transition-colors"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-teal-300 group-hover:text-teal-700 transition-colors block mb-3">
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
        <div className="mt-8 bg-aqua-100 rounded-2xl p-4 sm:p-5 border border-aqua-200 max-w-3xl mx-auto flex items-start gap-3.5">
          <HelpCircle className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-700 leading-relaxed">
            <strong>Important Coordination Note:</strong> Submitting an enquiry does not automatically book an appointment. Our telecaller or care coordinator will contact you via phone or WhatsApp to understand your requirements and confirm a mutually agreed session time based on doctor availability.
          </p>
        </div>
      </section>


      {/* 6. Professional Qualifications & Clinical Career Summary */}
      <section className="bg-white py-16 sm:py-20 border-y border-softgrey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-teal">Academic &amp; Clinical Background</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
                12 Years Clinical Experience at Ahana Hospitals
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Extensive institutional career serving at Ahana Hospitals, Madurai, along with 2 years as Interpersonal Skills Trainer at Judges Academy, Madurai, and faculty roles across universities.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-softgrey-200">
                  <GraduationCap className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <strong>PhD in Psychology – In Progress:</strong> Madurai Kamaraj University. Active research investigating Smartphone Addiction.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-softgrey-200">
                  <Briefcase className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <strong>Hospital Consultant:</strong> 12 years of clinical psychotherapy, marital counselling, and stress alleviation at Ahana Hospitals, Madurai.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-softgrey-200">
                  <Award className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
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
              <div className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-softgrey-200 space-y-4">
                <h3 className="font-serif font-bold text-lg text-teal-900 border-b border-softgrey-200 pb-3">
                  Approved Core Areas of Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Psychological Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Marital Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Stress Counselling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Behavioural Skills Training</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Interpersonal Skills Training</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-softgrey-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Life-Skills Education</span>
                  </div>
                </div>

                <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900">
                  All clinical credentials and training backgrounds are verified and practiced in full compliance with psychology codes of ethics.
                </div>
              </div>
            </div>

          </div>
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
          <span className="badge-teal">Common Queries</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-charcoal-600">
            Find answers to common questions regarding consultation requests, modes, and appointment coordination.
          </p>
        </motion.div>

        <FAQAccordion />
      </section>


      {/* 8. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left relative overflow-hidden shadow-teal-glow"
        >
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-700/60 text-aqua-200 text-xs font-semibold border border-teal-600">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              Confidential &amp; Supportive
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              Ready to take the first step toward emotional clarity?
            </h2>

            <p className="text-sm sm:text-base text-aqua-100 leading-relaxed">
              Submit your enquiry today. We will guide you through our counselling options and coordinate a session that accommodates your schedule.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button to="/book-a-session" variant="accent" size="lg" icon={CalendarCheck}>
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
