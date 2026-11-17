import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  BookCheck,
  CheckCircle2,
  CalendarCheck,
  Languages,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import DoctorPhotoCard from '../components/DoctorPhotoCard.jsx';

export default function AboutDoctor() {
  const educationTimeline = [
    {
      degree: 'PhD in Psychology (In Progress)',
      institution: 'Madurai Kamaraj University, Madurai',
      details: 'Active doctoral research investigating psychological and behavioural dynamics of Smartphone Addiction.',
      status: 'In Progress (Doctoral Candidate)',
      current: true,
    },
    {
      degree: 'MSc Psychology',
      institution: 'University of Madras, Chennai',
      details: 'Comprehensive postgraduate training in core psychological theories, psychopathology, research methodology, and clinical assessment.',
    },
    {
      degree: 'Postgraduate Diploma in Counselling',
      institution: 'Madurai Social Work College, Madurai',
      details: 'Specialised practical training in counselling modalities, client-centered therapy, emotional support, and crisis intervention.',
    },
    {
      degree: 'BA Sociology',
      institution: 'Madurai Kamaraj University, Madurai',
      details: 'Foundational study of social systems, familial structures, interpersonal relationships, and community health.',
    },
  ];

  const experienceTimeline = [
    {
      role: 'Consultant Psychologist',
      organization: 'Ahana Hospitals, Madurai',
      period: '12 Years Clinical Experience',
      highlight: true,
      desc: 'Extensive clinical practice offering individual psychotherapy, marital and couples counselling, stress management, and adolescent behavioural support within an accredited neuropsychiatric hospital setting.',
    },
    {
      role: 'Interpersonal Skills Trainer',
      organization: 'Judges Academy, Madurai',
      period: '2 Years',
      desc: 'Conducted high-level interpersonal communication, emotional regulation, and stress alleviation training programs for judicial officers and trainees.',
    },
    {
      role: 'Human Resource & Mental Health Trainer',
      organization: 'M.S. Chellamuthu Trust and Research Foundation',
      period: 'Professional Engagement',
      desc: 'Delivered institutional training on psychosocial rehabilitation, positive mental health, and occupational wellbeing.',
    },
    {
      role: 'Faculty – School Counselling Course',
      organization: 'Alagappa University',
      period: 'Academic Faculty',
      desc: 'Trained educators and aspiring counsellors on adolescent psychology, school-based counselling techniques, and student emotional guidance.',
    },
    {
      role: 'Visiting Faculty – Diploma in Counselling',
      organization: 'M.E.S. College',
      period: 'Visiting Faculty',
      desc: 'Lectured on counselling techniques, case conceptualisation, and ethical mental health practices.',
    },
    {
      role: 'Behavioural and Life Skills Trainer',
      organization: 'NIE (Newspaper in Education) and The Hindu',
      period: '2005 – 2012 (7 Years)',
      desc: 'Formulated and facilitated life-skills, emotional intelligence, study skills, and positive discipline workshops for hundreds of schools across Tamil Nadu.',
    },
  ];

  const coreExpertise = [
    'Psychological Counselling',
    'Marital & Couples Counselling',
    'Stress Counselling & De-escalation',
    'Behavioural Skills Training',
    'Interpersonal Skills Training',
    'Life-Skills Education',
    'Mental Health & Psychosocial Rehabilitation',
  ];

  const certifications = [
    'Interpersonal Relationship Training',
    'Non-Pharmacological Interventions for Family Health & Well-being',
    'Anger Management Training',
    'Foundation Course on Mental Health',
    'Basic Skills of Counselling',
    'LGBT Counselling Training',
    'Positive Mental Health Training',
    'Solution-Focused Brief Therapy (SFBT)',
    'Positive Discipline for Children & Adolescents',
    'Cognitive Behavioural Therapy (CBT) in Sexual Dysfunction',
    'Mental Health and Rehabilitation Practice',
    'Psychotherapy for Various Psychological Issues',
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      
      {/* 1. Profile Hero Section */}
      <section id="profile" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="badge-navy">Consultant Psychologist Profile</span>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0E3854] tracking-tight">
              Dr. Sharmila Siraj
            </h1>

            <div className="space-y-1.5">
              <p className="text-lg font-serif text-[#2E8485] font-semibold">
                Consultant Psychologist | Counsellor | Interpersonal Skills Trainer
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-600 pt-1 font-medium font-nav">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#48B6B7]" />
                  Madurai, Tamil Nadu, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-[#48B6B7]" />
                  English &amp; தமிழ்
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#0E3854]" />
                  12 Years at Ahana Hospitals
                </span>
              </div>
            </div>

            {/* Verbatim Clinical Statement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-softgrey-200 shadow-soft space-y-4">
              <h2 className="text-xs font-serif font-bold text-[#0E3854] uppercase tracking-wider font-nav">
                Clinical Philosophy &amp; Approach
              </h2>
              <blockquote className="text-sm sm:text-base text-charcoal-700 leading-relaxed italic border-l-4 border-[#48B6B7] pl-4">
                &ldquo;I am a Consultant Psychologist, Counsellor and Trainer with 12 years of clinical experience at Ahana Hospitals, Madurai.
                <br /><br />
                I help individuals, couples, children and families with counselling, behavioural support and life-skills education. My focus is marital counselling and stress counselling.
                <br /><br />
                My approach is empathetic, clear and confidential. I help you find calm, build clarity and heal.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/book-a-session" variant="cyan" size="md" showArrow={true}>
                Request Consultation Enquiry
              </Button>
              <Button to="/therapies" variant="secondary" size="md">
                Explore Counselling Therapies
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <DoctorPhotoCard className="w-full max-w-md" />
          </motion.div>

        </div>
      </section>


      {/* 2. Educational Qualifications Timeline */}
      <section id="education" className="bg-white py-16 sm:py-20 border-y border-softgrey-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12 space-y-3"
          >
            <span className="badge-navy">Academic Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
              Educational Qualifications
            </h2>
            <p className="text-sm text-charcoal-600">
              A comprehensive academic background combining clinical psychology, sociology, and specialised counselling diplomas.
            </p>
          </motion.div>

          <div className="relative border-l-2 border-[#48B6B7]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {educationTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-white transition-all ${
                  item.current ? 'bg-[#48B6B7] ring-4 ring-cyan-100' : 'bg-[#0E3854] ring-2 ring-navy-100'
                }`} />

                <div className="bg-ice-50 rounded-2xl p-6 border border-softgrey-200 hover:border-[#48B6B7] shadow-soft transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-serif font-bold text-[#0E3854]">
                      {item.degree}
                    </h3>
                    {item.status && (
                      <span className="badge-cyan self-start sm:self-auto font-medium font-nav">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-[#2E8485] mb-2 font-nav">
                    {item.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-cyan-50 rounded-2xl p-4 border border-cyan-200 text-xs text-charcoal-700">
            <strong>Transparency Notice:</strong> Dr. Sharmila Siraj&apos;s doctoral degree is currently in progress at Madurai Kamaraj University focusing on smartphone addiction. All qualifications are verified and represented accurately without exaggeration.
          </div>

        </div>
      </section>


      {/* 3. Professional Experience Timeline */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <span className="badge-navy">Clinical &amp; Institutional Career</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            Professional Experience
          </h2>
          <p className="text-sm text-charcoal-600">
            Over a decade of hands-on hospital consultations, judicial training, and community life-skills education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceTimeline.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 sm:p-8 border shadow-soft transition-all ${
                exp.highlight 
                  ? 'bg-gradient-to-br from-cyan-50/70 to-white border-cyan-300 ring-1 ring-cyan-200' 
                  : 'bg-white border-softgrey-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full font-nav ${
                  exp.highlight ? 'bg-[#0E3854] text-white' : 'bg-cyan-100 text-[#0E3854]'
                }`}>
                  {exp.period}
                </span>
                <Briefcase className="w-4 h-4 text-[#48B6B7]" />
              </div>

              <h3 className="text-lg font-serif font-bold text-[#0E3854] mb-1">
                {exp.role}
              </h3>
              
              <div className="text-xs font-semibold text-[#2E8485] mb-3 font-nav">
                {exp.organization}
              </div>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 4. Core Areas of Expertise */}
      <section id="expertise" className="bg-ice-100 py-16 sm:py-20 border-y border-softgrey-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 space-y-3"
          >
            <span className="badge-navy">Core Focus</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
              Core Areas of Expertise
            </h2>
            <p className="text-sm text-charcoal-600">
              Approved clinical counselling and behavioural domains developed through clinical practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {coreExpertise.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-softgrey-200 shadow-soft flex items-center gap-3.5 hover:border-[#48B6B7] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-100 text-[#2E8485] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#48B6B7]" />
                </div>
                <span className="text-sm font-serif font-bold text-charcoal-800">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. Professional Training and Certifications */}
      <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <span className="badge-navy">Continuing Professional Development</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0E3854]">
            Professional Training &amp; Certifications
          </h2>
          <p className="text-sm text-charcoal-600">
            Ongoing specialist training across diverse psychological and behavioural modalities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-softgrey-200 shadow-xs flex items-start gap-3 hover:border-[#48B6B7] transition-colors"
            >
              <Award className="w-5 h-5 text-[#48B6B7] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-charcoal-800 leading-snug">
                  {cert}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 6. Closing Action Box */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-ice-100 rounded-3xl p-8 sm:p-12 border border-softgrey-200 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E3854]">
            Schedule a Confidential Consultation Enquiry
          </h2>
          <p className="text-sm text-charcoal-600 max-w-xl mx-auto leading-relaxed">
            Our team will reach out to understand your situation, answer initial questions, and coordinate an appointment based on Dr. Sharmila&apos;s schedule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button to="/book-a-session" variant="cyan" size="md" showArrow={true}>
              Book a Session Enquiry
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Contact Practice
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
