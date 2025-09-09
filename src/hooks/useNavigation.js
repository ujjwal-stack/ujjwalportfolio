import { useState } from 'react';

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return {
    activeSection,
    showSection
  };
};