import React from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = ({ 
  activeSection, 
  onNavigate, 
  onResumeClick, 
  onMobileMenuToggle, 
  showMobileMenu,
  onMobileMenuClose 
}) => {
  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center rotate-slow">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <span class="text-xl font-bold gradient-text">Ujjwal Singh</span>
                </div>

          {/* Desktop Navigation */}
          <Navigation 
            activeSection={activeSection}
            onNavigate={onNavigate}
            onResumeClick={onResumeClick}
          />

          {/* Mobile Menu Button */}
          <button 
            onClick={onMobileMenuToggle}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={showMobileMenu}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onResumeClick={onResumeClick}
        onClose={onMobileMenuClose}
      />
    </nav>
  );
};

export default Header;