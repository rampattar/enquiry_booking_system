import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Heart,
  Compass,
  Smile,
  Users,
  Sparkles,
  ClipboardCheck,
  BookOpen,
  Award,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard.jsx';
import Button from '../components/Button.jsx';

export default function Therapies() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('filter') || 'all';
  const [filterCategory, setFilterCategory] = useState(initialCategory);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setFilterCategory(filter);
    }
  }, [searchParams]);

  const services = [
    {
      title: 'Marital Counselling',
      category: 'relationships',
      serviceKey: 'Marital Counselling',
      description: 'Dedicated couples and marital therapy aimed at identifying communication barriers, re-establishing emotional intimacy, and resolving chronic conflict.',
      whoBenefits: 'Couples and spouses experiencing relational disconnect, frequent misunderstandings, infidelity recovery, or transitional strain.',
      approach: 'Empathetic, balanced mediation focusing on emotional attunement, conflict resolution frameworks, and mutual healing without taking sides.',
      icon: Heart,
      badge: 'Core Specialty',
    },
    {
      title: 'Stress Counselling',
      category: 'individual',
      serviceKey: 'Stress Counselling',
      description: 'Structured psychological intervention designed to alleviate workplace burnout, academic anxiety, emotional exhaustion, and chronic worry.',
      whoBenefits: 'Professionals, students, and caregivers navigating excessive daily demands, panic sensations, or feelings of being overwhelmed.',
      approach: 'Cognitive reframing, psychoeducation on the physiological stress response, relaxation techniques, and practical coping rituals.',
      icon: Compass,
      badge: 'Core Specialty',
    },
    {
      title: 'Individual Counselling',
      category: 'individual',
      serviceKey: 'Individual Counselling',
      description: 'One-on-one confidential therapy providing a non-judgmental space to navigate self-doubt, grief, low mood, identity, and personal life transitions.',
      whoBenefits: 'Adults and adolescents seeking deeper self-understanding, emotional clarity, and tools to navigate personal dilemmas.',
      approach: 'Client-centered, empathetic psychotherapy respecting individual autonomy and paced to your emotional comfort.',
      icon: Smile,
      badge: 'Confidential Care',
    },
    {
      title: 'Family Counselling',
      category: 'relationships',
      serviceKey: 'Family Counselling',
      description: 'Collaborative family sessions addressing multi-generational tension, parenting discord, boundary formulation, and communication gaps.',
      whoBenefits: 'Families experiencing recurring hostility, adolescent rebellion, sibling rivalry, or difficulty adjusting to changes.',
      approach: 'Systemic counselling examining relational dynamics and empowering the family unit to foster collective emotional safety.',
      icon: Users,
      badge: 'Family Focus',
    },
    {
      title: 'Behavioural Support',
      category: 'child',
      serviceKey: 'Behavioural Support',
      description: 'Targeted behavioural interventions and support for children, adolescents, and youths facing behavioural resistance or adaptation challenges.',
      whoBenefits: 'Children and youths struggling with anger outbursts, defiance, peer conflicts, or difficulty adapting to academic settings.',
      approach: 'Positive discipline modalities, non-pharmacological family interventions, and structured parental coaching.',
      icon: Sparkles,
      badge: 'Child & Youth',
    },
    {
      title: 'Psychological Consultation and Assessment',
      category: 'individual',
      serviceKey: 'Psychological Consultation and Assessment',
      description: 'Comprehensive initial evaluation of psychological wellbeing, emotional functioning, cognitive stressors, and lifestyle factors.',
      whoBenefits: 'Individuals seeking clarity on whether counselling is appropriate, or seeking a professional psychological perspective.',
      approach: 'Detailed clinical intake interview, observational assessment, and tailored recommendations for ongoing care.',
      icon: ClipboardCheck,
      badge: 'Clinical Assessment',
    },
    {
      title: 'Life-Skills Education',
      category: 'training',
      serviceKey: 'Life-Skills Education',
      description: 'Evidence-based life-skills education helping individuals develop emotional regulation, assertiveness, critical decision-making, and resilience.',
      whoBenefits: 'Students, young adults, and professionals seeking foundational personal skills for long-term emotional and academic success.',
      approach: 'Interactive behavioural modules rooted in Dr. Sharmila Siraj&apos;s years of training with NIE and The Hindu.',
      icon: BookOpen,
      badge: 'Skills Training',
    },
    {
      title: 'Interpersonal Skills Training',
      category: 'training',
      serviceKey: 'Interpersonal Skills Training',
      description: 'Specialised training to enhance communication effectiveness, empathetic listening, emotional intelligence, and professional interaction.',
      whoBenefits: 'Judicial candidates, corporate executives, team leaders, and individuals seeking to improve relational rapport.',
      approach: 'Structured coaching and behavioural exercises drawn from accredited judicial and institutional training programs.',
      icon: Award,
      badge: 'Institutional Training',
    },
  ];

  const filteredServices = filterCategory === 'all'
    ? services
    : services.filter(s => s.category === filterCategory);

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-14">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="badge-teal">Approved Counselling Services</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-teal-900 tracking-tight">
            Therapies &amp; Psychological Care
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            All counselling services are grounded in empathetic, evidence-informed practices and conducted under strict confidentiality. Review our approved consultation domains below.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'relationships', label: 'Marital & Family' },
            { id: 'individual', label: 'Individual & Stress' },
            { id: 'child', label: 'Child & Adolescent' },
            { id: 'training', label: 'Life-Skills & Training' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-nav transition-all ${
                filterCategory === tab.id
                  ? 'bg-teal-700 text-white shadow-teal-glow'
                  : 'bg-white text-charcoal-700 hover:bg-aqua-100 border border-softgrey-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              serviceKey={service.serviceKey}
              description={service.description}
              whoBenefits={service.whoBenefits}
              approach={service.approach}
              icon={service.icon}
              badge={service.badge}
            />
          ))}
        </motion.div>
      </section>

      {/* 3. Practice Boundary & Clinical Note */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft space-y-4 text-xs sm:text-sm text-charcoal-700">
          <div className="flex items-center gap-2 font-serif font-bold text-teal-900 text-base">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>Ethical Standards &amp; Service Scope</span>
          </div>
          <p className="leading-relaxed">
            All counselling sessions at Sharmila MindCare are conducted in accordance with clinical psychology ethics. Consultations are available both in-person (offline in Madurai) and online (video consultation) subject to clinical suitability and prior manual appointment coordination.
          </p>
          <p className="text-charcoal-500 italic">
            Note: The doctor holds specialist training across diverse therapy modalities. Publicly offered services are reviewed and approved regularly to ensure optimal clinical outcomes for every client.
          </p>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-12 border border-softgrey-200 shadow-soft space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-teal-900">
            Unsure which counselling service is right for you?
          </h2>
          <p className="text-sm text-charcoal-600 max-w-lg mx-auto leading-relaxed">
            You can select &ldquo;Not Sure&rdquo; or &ldquo;Psychological Assessment&rdquo; on our enquiry form. Our team will contact you to discuss your circumstances confidentially.
          </p>
          <div className="pt-2">
            <Button to="/book-a-session" variant="primary" icon={CalendarCheck}>
              Submit a Consultation Enquiry
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
