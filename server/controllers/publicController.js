/**
 * Controller for public practice information
 */

export const getDoctorProfile = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Dr. Sharmila Siraj',
      designation: 'Consultant Psychologist | Counsellor | Interpersonal Skills Trainer',
      location: 'Madurai, Tamil Nadu, India',
      languages: ['English', 'Tamil'],
      clinicalExperience: '12 years at Ahana Hospitals, Madurai',
      aboutMe:
        'I am a Consultant Psychologist, Counsellor and Trainer with 12 years of clinical experience at Ahana Hospitals, Madurai. I help individuals, couples, children and families with counselling, behavioural support and life-skills education. My focus is marital counselling and stress counselling. My approach is empathetic, clear and confidential. I help you find calm, build clarity and heal.',
      education: [
        {
          degree: 'PhD in Psychology – In Progress',
          institution: 'Madurai Kamaraj University',
          details: 'Research focus: Smartphone Addiction',
        },
        {
          degree: 'MSc Psychology',
          institution: 'University of Madras',
        },
        {
          degree: 'Postgraduate Diploma in Counselling',
          institution: 'Madurai Social Work College',
        },
        {
          degree: 'BA Sociology',
          institution: 'Madurai Kamaraj University',
        },
      ],
      professionalExperience: [
        { role: 'Consultant Psychologist', institution: 'Ahana Hospitals, Madurai', duration: '12 years' },
        { role: 'Interpersonal Skills Trainer', institution: 'Judges Academy, Madurai', duration: '2 years' },
        { role: 'Human Resource Trainer', institution: 'M.S. Chellamuthu Trust and Research Foundation' },
        { role: 'Faculty', institution: 'School Counselling Course, Alagappa University' },
        { role: 'Visiting Faculty', institution: 'Diploma in Counselling, M.E.S. College' },
        { role: 'Behavioural and Life Skills Trainer', institution: 'NIE and The Hindu', duration: '2005–2012' },
      ],
      coreAreasOfExpertise: [
        'Psychological Counselling',
        'Marital Counselling',
        'Stress Counselling',
        'Behavioural Skills Training',
        'Interpersonal Skills Training',
        'Life-Skills Education',
        'Mental Health and Rehabilitation',
      ],
      contact: {
        phone: '+91 98946 35451',
        email: 'sharmilasiraj@yahoo.com',
        location: 'Madurai, Tamil Nadu, India',
        whatsappChat: 'https://wa.me/919894635451',
      },
    },
  });
};

export const getServices = (req, res) => {
  const approvedServices = [
    {
      id: 'marital',
      name: 'Marital Counselling',
      category: 'relationships',
      description: 'Support for couples experiencing communication breakdown, marital distress, or conflict resolution.',
      whoBenefits: 'Couples and spouses seeking to rebuild intimacy, resolve disagreements, or strengthen marital partnership.',
      approach: 'Empathetic, non-judgmental mediation fostering open dialogue and mutual emotional understanding.',
      badge: 'Core Specialty',
    },
    {
      id: 'stress',
      name: 'Stress Counselling',
      category: 'individual',
      description: 'Evidence-informed psychological support for work stress, academic strain, chronic worry, and modern lifestyle pressures.',
      whoBenefits: 'Individuals feeling overwhelmed, anxious, emotionally drained, or struggling to cope with daily demands.',
      approach: 'Cognitive reframing, mindfulness-based stress reduction, and practical emotional coping strategies.',
      badge: 'Core Specialty',
    },
    {
      id: 'individual',
      name: 'Individual Counselling',
      category: 'individual',
      description: 'A confidential, one-on-one space to explore personal thoughts, emotional pain, self-esteem, and personal growth.',
      whoBenefits: 'Adults and young adults facing loneliness, sadness, personal dilemmas, or emotional blocks.',
      approach: 'Client-centered, empathetic reflection aimed at personal clarity, emotional resilience, and healing.',
      badge: 'Confidential Care',
    },
    {
      id: 'family',
      name: 'Family Counselling',
      category: 'relationships',
      description: 'Facilitating harmony across multi-generational households, parent-child discord, and family conflict resolution.',
      whoBenefits: 'Families experiencing relational strain, parenting friction, or major life changes.',
      approach: 'Systemic family perspective honoring every member’s emotional voice while building cohesive bonds.',
      badge: 'Family Focus',
    },
    {
      id: 'behavioural',
      name: 'Behavioural Support',
      category: 'child',
      description: 'Guiding children and adolescents through behavioural obstacles, emotional turbulence, and school adjustment challenges.',
      whoBenefits: 'Parents and youths navigating behavioural difficulties, attention struggles, or peer pressures.',
      approach: 'Positive discipline, gentle behavioural reinforcement, and empathetic parental coaching.',
      badge: 'Child & Youth',
    },
    {
      id: 'assessment',
      name: 'Psychological Consultation and Assessment',
      category: 'individual',
      description: 'Comprehensive initial evaluation of psychological wellbeing, emotional functioning, cognitive stressors, and lifestyle factors.',
      whoBenefits: 'Individuals seeking clarity on whether counselling is appropriate, or seeking a professional psychological perspective.',
      approach: 'Detailed clinical intake interview, observational assessment, and tailored recommendations for ongoing care.',
      badge: 'Clinical Assessment',
    },
    {
      id: 'life-skills',
      name: 'Life-Skills Education',
      category: 'training',
      description: 'Structured life-skills education, emotional intelligence building, assertiveness training, and conflict mastery.',
      whoBenefits: 'Students, professionals, and individuals seeking to elevate interpersonal communication and confidence.',
      approach: 'Action-oriented behavioural skills coaching developed through years of training at institutions and academies.',
      badge: 'Skills Training',
    },
    {
      id: 'interpersonal',
      name: 'Interpersonal Skills Training',
      category: 'training',
      description: 'Specialised training to enhance communication effectiveness, empathetic listening, emotional intelligence, and professional interaction.',
      whoBenefits: 'Judicial candidates, corporate executives, team leaders, and individuals seeking to improve relational rapport.',
      approach: 'Structured coaching and behavioural exercises drawn from accredited judicial and institutional training programs.',
      badge: 'Institutional Training',
    },
  ];

  res.status(200).json({
    success: true,
    data: approvedServices,
  });
};

