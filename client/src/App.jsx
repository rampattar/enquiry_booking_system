import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Public Pages
import Home from './pages/Home.jsx';
import AboutDoctor from './pages/AboutDoctor.jsx';
import Therapies from './pages/Therapies.jsx';
import Policies from './pages/Policies.jsx';
import BookSession from './pages/BookSession.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutDoctor />} />
          <Route path="therapies" element={<Therapies />} />
          <Route path="policies" element={<Policies />} />
          <Route path="book-a-session" element={<BookSession />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
