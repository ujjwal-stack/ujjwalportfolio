import React from 'react';
import { projectsData } from '../../data/projects';

const Projects = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <section className="section-content fade-in">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
        <div class={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full`}></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all project-card duration-300 group`}
          >



            <div className={`relative w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center ">
                {/* <!-- E-commerce icon graphic --> */}
                <svg className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={project.d} />
                </svg>
              </div>
              {/* Animated elements */}
              {/* Animated decorations */}
          <div className="absolute inset-0 pointer-events-none">
            {project.decorations.map((decoration, Index) => (
              <div
                key={Index}
                className={decoration.className}
                style={decoration.style || {}}
              >
                {decoration.svg && (
                  <svg
                    className={decoration.svg.className}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path {...decoration.svg.path} />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className={`w-2 h-2 ${project.colordot} rounded-full mr-2`}></span>
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`${tech.color} ${tech.text} px-2 py-1 rounded text-sm border ${tech.border} tech-icon`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <button class={`bg-gradient-to-r ${project.gradient} hover:${project.gradientMin} hover:${project.gradientMax} px-4 py-2 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2 w-full justify-center`}>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Project
              </button>
            </div>
        ))}

          </div>
    </section>
  );
};

export default Projects;