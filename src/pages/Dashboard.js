// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import ResumeModal from '../components/modals/ResumeModal';
import DemoTimer from '../components/modals/DemoTimer';
import Footer from '../components/common/Footer';
import { useNavigation } from '../hooks/useNavigation';
import { useModal } from '../hooks/useModal';

const Dashboard = () => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll(".float-animation");
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.002; // adjust speed
        const x = e.clientX * speed;
        const y = e.clientY * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  const { activeSection, showSection } = useNavigation();
  const {
    showResumeModal,
    showMobileMenu,
    openResumeModal,
    closeResumeModal,
    toggleMobileMenu,
    closeMobileMenu
  } = useModal();

  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert('Demo: This is a portfolio demo. In a real application, this would send your message to the backend API.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rotate-45 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-500/20 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-500/20 rotate-12 float-animation" style={{ animationDelay: '0.5s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>


      <Header
        activeSection={activeSection}
        onNavigate={showSection}
        onResumeClick={openResumeModal}
        onMobileMenuToggle={toggleMobileMenu}
        showMobileMenu={showMobileMenu}
        onMobileMenuClose={closeMobileMenu}
      />
      
      


      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <About isActive={activeSection === 'about'} />
        <Projects isActive={activeSection === 'projects'} />
        <Skills isActive={activeSection === 'skills'} />
        <Contact
          isActive={activeSection === 'contact'}
          onSubmit={handleContactSubmit}
        />
        <DemoTimer />
      </main>

      <Footer />
      <ResumeModal
        isOpen={showResumeModal}
        onClose={closeResumeModal}
      />
    
    </div >
  );
};

export default Dashboard;
