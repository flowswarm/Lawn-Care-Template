/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Features } from './components/Hero';
import { StatsSection, AboutSection } from './components/About';
import { ServicesSection } from './components/Services';
import { ProjectsSection, WhyChooseUs } from './components/Projects';
import { TeamSection, TestimonialsSection, CTASection } from './components/Team';
import { BlogSection, Footer } from './components/Footer';
import { FEATURES } from './constants';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features features={FEATURES} />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProjectsSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
