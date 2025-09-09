import React from 'react';

const MobileMenu = ({ isOpen, activeSection, onNavigate, onResumeClick, onClose }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  const handleResumeClick = () => {
    onResumeClick();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black/30 backdrop-blur-lg">
      <div className="px-4 py-2 space-y-2">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`block w-full text-left py-2 hover:text-blue-400 ${
              activeSection === id ? 'text-blue-400' : ''
            }`}
          >
            {label}
          </button>
        ))}
        <button 
          onClick={handleResumeClick}
          className="block w-full text-left py-2 text-blue-400"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;