import { useState, useEffect } from 'react';

export const useModal = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // Close modals on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeResumeModal();
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return {
    showResumeModal,
    showMobileMenu,
    openResumeModal,
    closeResumeModal,
    toggleMobileMenu,
    closeMobileMenu
  };
};