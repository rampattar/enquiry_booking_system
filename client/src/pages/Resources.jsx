import React from 'react';
import {
  Heart,
  Compass,
  Users,
  Sparkles,
  HelpCircle,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

export default function Resources() {
  const resourceSections = [
    {
      id: 'wellbeing',
      title: 'Mental Wellbeing Foundations',
      subtitle: 'Understanding Emotional Health & Balance',
      icon: Heart,
      badge: 'Psychoeducation',
      content: [
        'Mental health is not merely the absence of distress, but the ability to navigate emotions, form meaningful connections, and cope with life’s stressors with resilience.',
        'Acknowledging when you feel overwhelmed, anxious, or emotionally drained is a courageous first step toward restoring balance.',
        'Professional psychological counselling provides a structured, non-judgmental sanctuary to untangle complex emotions and discover renewed mental clarity.',
      ],
    },
    {
      id: 'stress',
      title: 'Stress & Burnout Management',
      subtitle: 'Recognizing Signs & Constructive Coping Strategies',
      icon: Compass,
      badge: 'Coping Strategies',
      content: [
        'Chronic stress activates prolonged physiological fight-or-flight responses, leading to fatigue, irritability, insomnia, and cognitive fog.',
        'Cognitive reframing helps distinguish between situations within your sphere of control versus external pressures outside your influence.',
        'Small daily grounding rituals—mindful breathing pauses, progressive muscle relaxation, and boundary setting—significantly lessen emotional exhaustion.',
      ],
    },
    {
      id: 'relationships',
      title: 'Relationship & Marital Awareness',
      subtitle: 'Building Empathetic Dialogue & Mutual Trust',
      icon: Users,
      badge: 'Relational Health',
      content: [
        'Healthy communication requires empathetic listening—hearing to understand your partner’s underlying emotional need, rather than hearing to defend.',
        'Recurring conflicts in marital relationships often stem from unexpressed emotional vulnerabilities, unspoken expectations, or life transitions.',
        'Marital counselling acts as a guided bridge, allowing couples to dismantle destructive communication loops and rediscover emotional intimacy.',
      ],
    },
    {
      id: 'self-care',
      title: 'Self-Care & Emotional Wellbeing',
      subtitle: 'Sustainable Habits for Mind & Body Harmony',
      icon: Sparkles,
      badge: 'Holistic Habits',
      content: [
        'Authentic self-care is not an indulgence—it is essential maintenance for your psychological and emotional nervous system.',
        'Practicing digital mindfulness (setting boundaries with smartphones and social media) prevents mental overstimulation and comparison fatigue.',
        'Regular sleep schedules, balanced nourishment, and permission to rest without guilt are cornerstones of emotional equilibrium.',
      ],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="badge-navy">Patient Education &amp; Self-Care</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0E3854] tracking-tight">
            Psychological Resources &amp; Wellness Guides
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Curated psychoeducational insights and answers to support your journey toward emotional clarity, resilient relationships, and personal wellbeing.
          </p>
        </motion.div>
      </section>

      {/* 2. Resource Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {resourceSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <motion.div
              key={sec.id}
              id={sec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-softgrey-200 shadow-soft scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-softgrey-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-[#0E3854] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#48B6B7]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0E3854]">
                      {sec.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal-500 font-medium font-nav">
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                <span className="badge-cyan self-start sm:self-auto text-xs font-nav">
                  {sec.badge}
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {sec.content.map((para, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#48B6B7] shrink-0 mt-0.5" />
                    <span>{para}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-softgrey-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-charcoal-500 italic">
                  Informational guidance. For clinical support, request a confidential consultation.
                </span>
                <Button to="/book-a-session" variant="cyan" size="sm" showArrow={true}>
                  Enquire for Personal Guidance
                </Button>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Frequently Asked Questions Section */}
      <section id="faqs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="badge-navy">Practice FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-charcoal-600">
            Clear, transparent answers regarding consultation appointments, languages, modes, and coordination.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-[#0E3854] via-[#0E3854] to-[#0A273C] rounded-3xl p-8 sm:p-12 text-white shadow-navy-glow space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Have a Specific Question for Our Care Team?
          </h3>
          <p className="text-sm text-cyan-100 max-w-lg mx-auto leading-relaxed font-light">
            Our team is available to assist you with appointment enquiries, language preferences, and consultation coordination.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Button to="/book-a-session" variant="cyan" size="md" showArrow={true}>
              Submit an Enquiry
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Contact Our Clinic
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
