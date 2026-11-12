# Sharmila MindCare – Psychologist Website & Enquiry Management System

> **Tagline:** Understand Your Mind. Embrace Your Wellbeing.  
> **Subtitle:** Psychological Care, Counselling & Wellbeing.  
> **Consultant:** Dr. Sharmila Siraj (Consultant Psychologist, Counsellor & Interpersonal Skills Trainer • 12 Years Clinical Experience at Ahana Hospitals, Madurai)

---

## 🌿 Project Overview

**Sharmila MindCare** is a dedicated MERN-stack web application and operational enquiry management system tailored for the clinical practice of Dr. Sharmila Siraj in Madurai, Tamil Nadu, India.

### Key Purpose & Workflows:
1. **Public Practice Presence:** Introduce Dr. Sharmila Siraj, her qualifications (MSc, PGDip Counselling, BA, PhD in progress), 12 years of clinical experience, and core therapy focus areas (Marital, Stress, Individual, and Family Counselling).
2. **Confidential Enquiry Intake:** Allow prospective patients to easily submit appointment enquiries (Phone, WhatsApp, Mode of consultation) without exposing raw medical records.
3. **Manual Coordination Workflow:** **Strictly an enquiry-based appointment coordination system, NOT an automatic booking system.** Telecallers/admin manually check doctor availability before confirming slots.
4. **Reliable Data Persistence:** MongoDB as primary source of truth, synchronised with external spreadsheets (Google Sheets / Excel) without duplicates.
5. **Staff Dashboard:** Role-based access control for Admins and Telecallers to manage enquiries, log call attempts, record notes, and confirm appointments.

---

## 🏗️ Architecture & Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide React, Axios, React Router DOM
- **Backend:** Node.js, Express.js (REST API, Helmet, CORS, Morgan, Rate Limiting)
- **Database:** MongoDB Atlas / Local MongoDB via Mongoose
- **Authentication:** JWT (JSON Web Tokens) & bcryptjs password hashing
- **Integrations:** Spreadsheet sync (Google Sheets / Microsoft Graph), WhatsApp Click-to-Chat, Nodemailer
- **Design System:**
  - Primary: Soft Sage Green (`#8FAF9D`)
  - Secondary: Warm Beige (`#F5F0E8`)
  - Background: Off White (`#FAF9F6`)
  - Text: Deep Charcoal (`#303A35`)
  - Accent: Muted Gold (`#C5A46D`)
  - Typography: Playfair Display (Serif headings) + Poppins / Inter (Sans body)

---

## 📁 Repository Directory Structure

```text
sharmila-mindcare/
├── client/                     # Vite + React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Brand logos & image placeholders
│   │   ├── components/         # Shared UI components (Navbar, Footer, etc.)
│   │   ├── pages/              # Public web pages (Home, About, Therapies, etc.)
│   │   ├── admin/              # Admin dashboard pages (Enquiries, Appointments, etc.)
│   │   ├── layouts/            # Public & Admin layout wrappers
│   │   ├── services/           # Axios API client services
│   │   ├── App.jsx             # Root application component
│   │   ├── index.css           # Tailwind directives & theme styles
│   │   └── main.jsx            # React entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                     # Node.js + Express Backend API
│   ├── config/                 # DB & Spreadsheet configurations
│   ├── controllers/            # Request handlers
│   ├── middleware/             # Auth, role-validation & error middleware
│   ├── models/                 # Mongoose schemas (Admin, Enquiry, Appointment, Service)
│   ├── routes/                 # Express route definitions
│   ├── scripts/                # Database seeding scripts (admin seed)
│   ├── services/               # Spreadsheet & notification services
│   ├── utils/                  # Helper utilities & validators
│   ├── .env.example            # Environment variable template
│   ├── package.json
│   └── server.js               # Express application entry point
│
├── .gitignore                  # Git exclusions (node_modules, .env, dist)
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm
- MongoDB running locally or MongoDB Atlas connection URI

### 1. Backend Setup
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
The server will start on `http://localhost:5000` (Health check at `http://localhost:5000/api/health`).

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The client will start on `http://localhost:3000`.

---

## 🧭 Phased Implementation Roadmap

- [x] **Phase 1:** Project Setup, Folder Structure, Dependencies & Tailwind Config
- [x] **Phase 2:** Website UI, Layouts & Public Pages (Home, About, Therapies, Policies, Contact, Book a Session)
- [x] **Phase 3:** Patient Enquiry Form with Backend API Integration & Validation
- [x] **Phase 4:** MongoDB Schemas, Enquiry Service, Rate Limiting & REST APIs
- [ ] **Phase 5:** Spreadsheet Sync Service with Idempotency & Retry Mechanism
- [ ] **Phase 6:** Secure JWT Authentication, Role-based Middleware & Admin Seed Script
- [ ] **Phase 7:** Admin & Telecaller Dashboard with Search, Filters & Call Logs
- [ ] **Phase 8:** Manual Appointment Confirmation Workflow & Status Management
- [ ] **Phase 9:** Comprehensive Security, Rate Limiting, Privacy Policies & Testing
- [ ] **Phase 10:** Production Build Optimization & Deployment Guide (Vercel / Render)

