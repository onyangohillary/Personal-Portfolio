import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SideNavigation } from './components/SideNavigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { FocusAndEducation } from './components/FocusAndEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [modalInitialRole, setModalInitialRole] = useState<string>('Opportunity Inquiry');

  // Track active section with IntersectionObserver for precision
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'expertise', 'focus-education', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to pick the most visible one
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenContactModal = (role?: string) => {
    if (role) {
      setModalInitialRole(role);
    } else {
      setModalInitialRole('Opportunity Inquiry');
    }
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-neutral-800 selection:text-white flex flex-col justify-between font-sans relative">
      {/* Top Fixed Header */}
      <Header onOpenContactModal={() => handleOpenContactModal()} />

      {/* Fixed Vertical Side Navigation (Desktop + Mobile) */}
      <SideNavigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        {/* 01: Hero Section */}
        <Hero onOpenContactModal={() => handleOpenContactModal()} />

        {/* 02: About Section */}
        <About />

        {/* 03: Experience Section */}
        <Experience />

        {/* 04: Expertise / Skills Section */}
        <Skills />

        {/* 05: Career Focus & Education Section */}
        <FocusAndEducation
          onSelectRole={(role) => handleOpenContactModal(role)}
        />

        {/* 06: Contact Section */}
        <Contact onOpenContactModal={() => handleOpenContactModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact & Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialRole={modalInitialRole}
      />
    </div>
  );
}
