import React, { useEffect } from 'react';
import { resumeData } from '../../data/resume';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white text-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{resumeData.header.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          {/* Resume Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{resumeData.header.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{resumeData.header.title}</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-600">
              {resumeData.header.contact.map((item, index) => (
                <span key={index}>{item.icon} {item.value}</span>
              ))}
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resumeData.technicalSkills.map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{category.category}</h3>
                  <p className="text-gray-700">{category.skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Professional Experience
            </h2>
            {resumeData.experience.map((job, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.position}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-600">{job.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{resumeData.education.degree}</h3>
                <p className="text-blue-600 font-medium">{resumeData.education.school}</p>
                <p className="text-gray-700">{resumeData.education.details}</p>
              </div>
              <span className="text-gray-600">{resumeData.education.period}</span>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resumeData.certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Key Projects
            </h2>
            {resumeData.keyProjects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-sm text-blue-600">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;