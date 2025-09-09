export const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend',
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/30',
    titleColor: 'text-blue-400',
    skills: [
      { name: 'React.js', level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
      { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    gradient: 'from-green-500 to-emerald-500',
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    border: 'border-green-500/30',
    titleColor: 'text-green-400',
    skills: [
      { name: 'Node.js', level: 92, color: 'bg-green-500' },
      { name: 'Express.js', level: 90, color: 'bg-gray-500' },
      { name: 'Python', level: 80, color: 'bg-blue-500' },
      { name: 'FastAPI', level: 75, color: 'bg-teal-500' }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    gradient: 'from-purple-500 to-pink-500',
    titleColor: 'text-purple-400',
    d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z',
    border: 'border-purple-500/30',
    skills: [
      { name: 'MongoDB', level: 88, color: 'bg-green-600' },
      { name: 'PostgreSQL', level: 85, color: 'bg-blue-600' },
      { name: 'MySQL', level: 82, color: 'bg-orange-500' },
      { name: 'Redis', level: 70, color: 'bg-red-500' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    gradient: 'from-orange-500 to-red-500',
    d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
    border: 'border-orange-500/30',
    titleColor: 'text-orange-400',
    skills: [
      { name: 'Git', level: 95, color: 'bg-orange-500' },
      { name: 'Docker', level: 78, color: 'bg-blue-500' },
      { name: 'AWS', level: 80, color: 'bg-yellow-600' },
      { name: 'JWT Auth', level: 90, color: 'bg-purple-500' }
    ]
  }
];