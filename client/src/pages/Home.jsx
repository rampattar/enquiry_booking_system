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
  HelpCircle
} from 'lucide-react';
import Button from '../components/Button.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import DoctorPhotoCard from '../components/DoctorPhotoCard.jsx';

export default function Home() {
  const featuredServices = [
    {
      title: 'Marital & Relationship Counselling',
      serviceKey: 'Marital Counselling',
      description: 'Support for couples experiencing communication breakdown, marital distress, conflict resolution, or life transitions.',
      whoBenefits: 'Couples and spouses seeking to rebuild intimacy, resolve repeated disagreements, or strengthen marital partnership.',
      approach: 'Empathetic, non-judgmental mediation fostering open dialogue and mutual emotional understanding.',
      icon: Heart,
    },
    {
      title: 'Stress & Anxiety Counselling',
      serviceKey: 'Stress Counselling',
      description: 'Evidence-informed psychological support for work stress, academic strain, chronic worry, and modern lifestyle pressures.',
      whoBenefits: 'Individuals feeling overwhelmed, anxious, emotionally drained, or struggling to cope with daily demands.',
      approach: 'Cognitive reframing, mindfulness-based stress reduction, and practical emotional coping strategies.',
      icon: Compass,
    },
    {
      title: 'Individual Counselling',
      serviceKey: 'Individual Counselling',
      description: 'A confidential, one-on-one space to explore personal thoughts, emotional pain, self-esteem, and personal growth.',
      whoBenefits: 'Adults and young adults facing loneliness, sadness, personal dilemmas, or emotional blocks.',
      approach: 'Client-centered, empathetic reflection aimed at personal clarity, emotional resilience, and healing.',
      icon: Smile,
    },
    {
      title: 'Family Counselling',
      serviceKey: 'Family Counselling',
      description: 'Facilitating harmony across multi-generational households, parent-child discord, and family conflict resolution.',
      whoBenefits: 'Families experiencing relational strain, parenting friction, or major life changes.',
      approach: 'Systemic family perspective honoring every member’s emotional voice while building cohesive bonds.',
      icon: Users,
    },
    {
      title: 'Child & Adolescent Behavioural Support',
      serviceKey: 'Behavioural Support',
      description: 'Guiding children and adolescents through behavioural obstacles, emotional turbulence, and school adjustment challenges.',
      whoBenefits: 'Parents and youths navigating behavioural difficulties, attention struggles, or peer pressures.',
      approach: 'Positive discipline, gentle behavioural reinforcement, and empathetic parental coaching.',
      icon: Sparkles,
    },
    {
      title: 'Life-Skills & Interpersonal Training',
      serviceKey: 'Life-Skills Education',
      description: 'Structured life-skills education, emotional intelligence building, assertiveness training, and conflict mastery.',
      whoBenefits: 'Students, professionals, and individuals seeking to elevate interpersonal communication and confidence.',
      approach: 'Action-oriented behavioural skills coaching developed through years of training at institutions and academies.',
      icon: BookOpen,
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'Submit an Enquiry',
      desc: 'Fill out our brief, confidential enquiry form online or reach out via WhatsApp/Phone.',
    },
    {
      number: '02',
      title: 'Receive a Follow-Up Call',
      desc: 'Our coordination team will contact you promptly to understand your consultation mode (Online/Offline) and needs.',
    },
    {
      number: '03',
      title: 'Discuss Requirements',
      desc: 'We clarify basic preferences and ensure our counselling services match your specific requirements.',
    },
    {
      number: '04',
      title: 'Doctor Availability Check',
      desc: 'Our team manually coordinates with Dr. Sharmila Siraj to verify her upcoming clinical schedule.',
    },
    {
      number: '05',
      title: 'Appointment Confirmed',
      desc: 'Your consultation time is confirmed manually, and details are shared directly via phone or WhatsApp.',
    },
  ];

  const whyChoosePoints = [
    {
      title: '12 Years Clinical Experience',
      desc: 'A seasoned background serving at Ahana Hospitals, Madurai, handling diverse clinical and counselling cases.',
      icon: Award,
    },
    {
      title: 'Empathetic & Confidential Care',
      desc: 'A safe, warm, and strictly confidential sanctuary where your personal narrative is respected without judgment.',
      icon: ShieldCheck,
    },
    {
      title: 'Bilingual Support (English & Tamil)',
      desc: 'Full psychological consultations and support conducted comfortably in both English and Tamil.',
      icon: MessageSquare,
    },
    {
      title: 'Specialised Focus Areas',
      desc: 'Deep clinical expertise in marital counselling, stress reduction, and adolescent behavioural support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Intro, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold tracking-wide border border-sage-200">
                <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                <span>Understand Your Mind • Embrace Your Wellbeing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 tracking-tight leading-[1.15]">
                Your Mental Wellbeing Matters.
              </h1>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-serif text-sage-700 font-semibold">
                  Dr. Sharmila Siraj
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 font-medium">
                  Consultant Psychologist | Counsellor | Interpersonal Skills Trainer
                </p>
              </div>

              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With <strong>12 years of clinical experience</strong> at Ahana Hospitals, Madurai, I provide an empathetic, clear, and confidential space to help individuals, couples, children, and families find calm, build clarity, and heal.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to="/book-a-session" variant="primary" size="lg" icon={CalendarCheck}>
                  Book a Session
                </Button>
                <Button to="/therapies" variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                  Explore Services
                </Button>
              </div>

              {/* Highlight Badges */}
              <div className="pt-6 border-t border-sage-100/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="p-3 bg-white rounded-2xl border border-sage-100 shadow-xs">
                  <div className="text-xl font-serif font-bold text-sage-700">12+ Yrs</div>
                  <div className="text-xs text-charcoal-500">Ahana Hospitals Experience</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-sage-100 shadow-xs">
                  <div className="text-xl font-serif font-bold text-sage-700">English & Tamil</div>
                  <div className="text-xs text-charcoal-500">Bilingual Consultations</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-sage-100 shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xl font-serif font-bold text-sage-700">Online & Offline</div>
                  <div className="text-xs text-charcoal-500">Madurai & Remote Sessions</div>
                </div>
              </div>

            </div>

            {/* Right Column: Doctor Photo & Clinical Card */}
            <div className="lg:col-span-5 flex justify-center">
              <DoctorPhotoCard className="w-full max-w-md" />
            </div>

          </div>
        </div>
      </section>


      {/* 2. Introduction Section */}
      <section className="bg-white py-16 sm:py-20 border-y border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="badge-sage">Our Philosophy & Approach</span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              &ldquo;My approach is empathetic, clear and confidential.&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed italic font-serif">
              &ldquo;I help individuals, couples, children and families with counselling, behavioural support and life-skills education. My clinical focus is marital counselling and stress counselling. I help you find calm, build clarity and heal.&rdquo;
            </p>

            <div className="pt-4 flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 bg-sage-300 rounded-full" />
              <span className="text-sm font-serif font-semibold text-charcoal-800">
                Dr. Sharmila Siraj, Consultant Psychologist
              </span>
              <div className="h-0.5 w-12 bg-sage-300 rounded-full" />
            </div>

            <div className="pt-6">
              <Button to="/about" variant="outline" size="sm">
                Read Dr. Sharmila&apos;s Full Profile & Credentials
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* 3. Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="badge-gold">Clinical Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Psychological Care Tailored to Your Needs
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Every session is structured with warmth, empathy, and professional clinical grounding. Explore our primary therapy and counselling domains below.
          </p>
        </div>

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
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/therapies" variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
            View All Approved Therapies & Guidelines
          </Button>
        </div>
      </section>


      {/* 4. Why Choose Dr. Sharmila Siraj */}
      <section className="bg-beige-50/70 py-16 sm:py-24 border-y border-beige-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="badge-sage">Trusted Practice</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Why Consult Dr. Sharmila Siraj?
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600">
              Committed to ethical, evidence-based psychological counselling and dedicated patient welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-100 shadow-soft space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-600 border border-sage-100 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-charcoal-800">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 5. How It Works Section (Enquiry Coordination) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="badge-gold">Enquiry Coordination</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            How Our Enquiry Process Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            To ensure genuine clinical attention, we coordinate appointments manually based on Dr. Sharmila Siraj&apos;s current availability, rather than automated instant bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-sage-100 shadow-soft relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-sage-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-base font-serif font-bold text-charcoal-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-sage-50 rounded-2xl p-4 sm:p-5 border border-sage-200/80 max-w-3xl mx-auto flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-sage-700 shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-700 leading-relaxed">
            <strong>Important Coordination Note:</strong> Submitting an enquiry does not automatically book an appointment. Our telecaller or care coordinator will contact you via phone or WhatsApp to understand your requirements and confirm a mutually agreed session time based on doctor availability.
          </p>
        </div>
      </section>


      {/* 6. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-br from-sage-800 to-charcoal-900 rounded-3xl p-8 sm:p-14 text-white text-center sm:text-left relative overflow-hidden shadow-soft-lg">
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-700/60 text-sage-200 text-xs font-semibold border border-sage-600">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Confidential & Supportive
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-offwhite">
              Ready to take the first step toward emotional clarity?
            </h2>

            <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
