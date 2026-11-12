import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  FileText,
  CalendarCheck2,
  Clock,
  Video,
  CreditCard,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

export default function Policies() {
  const [activeTab, setActiveTab] = useState('confidentiality');

  const policies = [
    {
      id: 'confidentiality',
      name: 'Confidentiality Policy',
      icon: Lock,
      title: 'Client Confidentiality & Clinical Privacy',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <p>
            At <strong>Sharmila MindCare</strong>, safeguarding your privacy and personal trust is our foremost ethical commitment. All communication, psychological assessments, discussions during sessions, and clinical records are treated with the highest degree of confidentiality under professional psychology codes of ethics.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Scope of Confidentiality
          </h4>
          <p>
            Information shared during individual, marital, or family sessions will not be disclosed to any third party, employer, or family member without your explicit prior written or documented consent.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Standard Ethical Exceptions to Confidentiality
          </h4>
          <p>
            By law and clinical mental health ethics in India, confidentiality may only be limited under rare circumstances where:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-charcoal-600">
            <li>There is an imminent and credible threat of severe physical harm or suicide to the client or another person.</li>
            <li>There is reasonable cause to suspect abuse or neglect of a child, elderly individual, or vulnerable person.</li>
            <li>Disclosure is strictly mandated by a valid judicial court order or legal warrant.</li>
          </ul>
          <p className="text-xs text-charcoal-500 italic pt-2">
            In any such exceptional event, the psychologist will make reasonable efforts to discuss the matter with the client prior to any external disclosure where clinically safe and feasible.
          </p>
        </div>
      ),
    },
    {
      id: 'privacy',
      name: 'Privacy & Data Policy',
      icon: ShieldCheck,
      title: 'Website Privacy & Data Collection Policy',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <p>
            This website collects minimal identifying information necessary solely for operational appointment coordination and communication.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Information We Collect
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-charcoal-600">
            <li><strong>Full Name:</strong> To address you respectfully during coordination.</li>
            <li><strong>Contact Information:</strong> Phone number and optional email address to follow up regarding availability.</li>
            <li><strong>Consultation Preference:</strong> Preferred mode (Online or In-person/Offline) and broad service of interest.</li>
            <li><strong>Consent:</strong> Explicit user confirmation authorizing our team to contact you.</li>
          </ul>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            What We Do NOT Collect Online
          </h4>
          <p>
            We do <strong>not</strong> solicit or store detailed psychiatric medical histories, diagnoses, or sensitive personal trauma details on public web forms. Such clinical discussions occur solely inside private consultations with Dr. Sharmila Siraj.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Data Storage & Access
          </h4>
          <p>
            Enquiry data is encrypted in transit and securely persisted. Access is restricted strictly to authorized clinic staff (Admin / Telecaller) solely for coordinating consultations. We never sell, rent, or trade patient personal data with advertising networks or third-party marketing entities.
          </p>
        </div>
      ),
    },
    {
      id: 'confirmation',
      name: 'Appointment Confirmation',
      icon: CalendarCheck2,
      title: 'Appointment Confirmation Policy',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <div className="bg-sage-50 border border-sage-200 p-4 rounded-2xl text-xs sm:text-sm text-sage-900">
            <strong>Key Distinction:</strong> Sharmila MindCare operates an enquiry-based appointment coordination system, not an automatic instant booking engine.
          </div>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            The Confirmation Workflow
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-charcoal-600">
            <li><strong>Enquiry Receipt:</strong> Upon submitting the enquiry form, you will receive a unique Enquiry Reference ID.</li>
            <li><strong>Coordination Call:</strong> Our authorized telecaller or clinic assistant will contact you via your preferred channel (Phone Call or WhatsApp).</li>
            <li><strong>Doctor Schedule Check:</strong> Our team checks Dr. Sharmila Siraj&apos;s current clinical schedule at Ahana Hospitals and private consultation availability.</li>
            <li><strong>Final Confirmation:</strong> A mutually agreed consultation date and time is finalized and communicated directly to you. An appointment is confirmed <em>only</em> after this manual coordination step.</li>
          </ol>
          <p className="text-xs text-charcoal-500 italic">
            Please note: Submitting an enquiry does not guarantee a specific time slot or reserve an instant appointment.
          </p>
        </div>
      ),
    },
    {
      id: 'cancellation',
      name: 'Cancellation & Rescheduling',
      icon: Clock,
      title: 'Cancellation & Rescheduling Guidelines',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <p>
            We understand that unforeseen events and personal emergencies arise. Because session times are dedicated exclusively to each patient, we request reasonable advance notice for any schedule adjustments.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Rescheduling Your Session
          </h4>
          <p>
            If you need to reschedule your confirmed appointment, please inform our coordination helpline via phone or WhatsApp as early as possible. Our team will do their utmost to offer you the next available consultation opening that fits Dr. Sharmila Siraj&apos;s schedule.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Cancellation Notice
          </h4>
          <p>
            Advance notice of at least 24 hours is kindly appreciated to enable us to allocate the reserved consultation slot to other individuals waiting for care. Specific cancellation timelines and policies are subject to individual consultation terms provided upon appointment confirmation.
          </p>
        </div>
      ),
    },
    {
      id: 'online',
      name: 'Online Consultations',
      icon: Video,
      title: 'Online Psychological Consultation Guidelines',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <p>
            For clients residing outside Madurai or unable to visit in person, video consultations are available via secure tele-consultation platforms (Google Meet / Zoom).
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Client Preparation for Online Sessions
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-charcoal-600">
            <li><strong>Private, Quiet Space:</strong> Ensure you are in a secure room where you will not be overheard or interrupted during your session.</li>
            <li><strong>Stable Internet & Device:</strong> A reliable internet connection, working camera, and earphones/headphones are recommended for privacy and sound clarity.</li>
            <li><strong>No Unauthorized Recordings:</strong> In accordance with clinical ethics, recording sessions via audio or video without explicit mutual written consent is strictly prohibited.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'payment',
      name: 'Payment & Refunds',
      icon: CreditCard,
      title: 'Consultation Fees & Payment Terms',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <p>
            Consultation charges vary depending on the nature of the service (Individual Counselling, Marital Counselling, Psychological Assessment, or Behavioural Training) and session duration.
          </p>
          <div className="bg-beige-50 border border-beige-200 p-4 rounded-2xl text-xs text-charcoal-600">
            <strong>Transparent Practice Note:</strong> Consultation fees are communicated clearly by our coordination team during the follow-up call prior to appointment confirmation. No hidden charges are applied.
          </div>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Accepted Payment Methods
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Payment can be completed via standard digital methods (UPI, GPay, PhonePe, Bank Transfer) for online consultations or in-person payment at the consultation venue for offline sessions.
          </p>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Refunds & Policy Adjustments
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Official refund terms for missed or canceled appointments are confirmed directly with the care team at the time of session booking based on individual circumstances.
          </p>
        </div>
      ),
    },
    {
      id: 'crisis',
      name: 'Crisis & Emergency Notice',
      icon: AlertTriangle,
      title: 'Emergency & Crisis Disclaimer',
      content: (
        <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <div className="bg-red-50 border border-red-200 p-5 rounded-2xl text-red-900 space-y-2">
            <h4 className="font-serif font-bold text-base flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <span>Not a 24/7 Crisis Response Service</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-red-800">
              Sharmila MindCare provides scheduled outpatient psychological counselling and consultation. We do <strong>not</strong> operate a 24-hour emergency room, psychiatric inpatient unit, or immediate crisis hotline.
            </p>
          </div>
          <h4 className="text-base font-serif font-bold text-charcoal-900 pt-2">
            Immediate Emergency Resources in India
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-charcoal-700">
            <li><strong>National Emergency Number:</strong> Dial <strong>112</strong> for police, medical, and ambulance services.</li>
            <li><strong>KIRAN Mental Health Helpline (Govt. of India):</strong> 1800-599-0019 (24/7 Toll-free).</li>
            <li><strong>Tele-MANAS (National Tele Mental Health Programme):</strong> 14416 or 1800-891-4416 (24/7).</li>
            <li><strong>Emergency Hospital Care:</strong> Please visit the casualty department of the nearest hospital in Madurai or your city immediately.</li>
          </ul>
        </div>
      ),
    },
  ];

  const currentPolicy = policies.find(p => p.id === activeTab) || policies[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="badge-sage">Practice Guidelines & Compliance</span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 tracking-tight">
          Policies & Patient Guidelines
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          Review our ethical framework, data privacy policies, and appointment coordination procedures.
        </p>
      </div>

      {/* Main Layout: Tabs on Left, Content on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Policy Navigation List */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-3 border border-sage-100 shadow-soft space-y-1">
          {policies.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sage-600 text-white font-semibold shadow-xs'
                    : 'text-charcoal-700 hover:bg-beige-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sage-600'}`} />
                  <span>{item.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-charcoal-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Selected Policy Content Panel */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-sage-100 shadow-soft">
          <div className="pb-6 mb-6 border-b border-sage-100">
            <span className="badge-gold mb-2 inline-block">
              Official Practice Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
              {currentPolicy.title}
            </h2>
          </div>

          <div>
            {currentPolicy.content}
          </div>
        </div>

      </div>

    </div>
  );
}

