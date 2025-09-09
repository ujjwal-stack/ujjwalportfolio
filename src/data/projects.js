export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    displayName: 'E-Commerce',
    description: 'Full-stack e-commerce solution with React.js frontend and Node.js backend',
    gradient: 'from-blue-500 to-purple-600',
    gradientMin: 'from-blue-700 ',
    gradientMax: 'to-purple-700',
    colordot: 'bg-blue-500',
    d:'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'Node.js', color: 'bg-green-600/20', text: 'text-green-300', border : 'border-green-500' },
      { name: 'MongoDB', color: 'bg-purple-600/20', text: 'text-purple-300', border : 'border-purple-500' }
    ],
    decorations:[
     { className: "absolute bottom-6 right-6 w-3 h-3 bg-white/30 rounded-full float-animation" },
    { className: "absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full float-animation" },
    { className: "absolute bottom-4 right-4 w-2 h-2 bg-white/40 rounded-full float-animation", style: { animationDelay: "1s" } },
    { className: "absolute top-8 right-8 w-1 h-1 bg-white/50 rounded-full float-animation", style: { animationDelay: "2s" } }
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    displayName: 'Task App',
    description: 'Collaborative task management with real-time updates and JWT authentication',
    gradient: 'from-green-500 to-teal-600',
    gradientMin: 'from-green-700',
    gradientMax: 'to-teal-700',
    colordot: 'bg-green-500',
    d:'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'Express.js', color: 'bg-yellow-600/20', text: 'text-yellow-300' , border : 'border-yellow-500'},
      { name: 'PostgreSQL', color: 'bg-red-600/20', text: 'text-red-300', border : 'border-red-500' }
    ],
    decorations:[
      { 
      className: "absolute top-6 left-6 w-4 h-4 border-2 border-white/40 rounded flex items-center justify-center",
      svg: {
        className: "w-2 h-2 text-white/60",
        path: { d: "M5 13l4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3 }
      }
    }
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    displayName: 'Weather',
    description: 'Real-time weather application with location-based forecasts',
    gradient: 'from-orange-500 to-red-600',
    gradientMin: 'from-orange-700',  
    gradientMax: 'to-red-700',
    colordot: 'bg-orange-500',
    d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'FastAPI', color: 'bg-green-600/20', text: 'text-green-300', border : 'border-green-500' },
      { name: 'SQLite', color: 'bg-gray-600/20', text: 'text-gray-300', border : 'border-gray-500' }
    ],
    decorations:[
      { className: "absolute top-4 right-4 w-6 h-6 bg-yellow-400/60 rounded-full" },
    { className: "absolute bottom-8 left-8 w-2 h-6 bg-blue-400/40 rounded-full float-animation" },
    { className: "absolute bottom-8 left-12 w-2 h-4 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "0.5s" } },
    { className: "absolute bottom-8 left-16 w-2 h-8 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "1s" } }
    ]
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    displayName: 'Weather',
    description: 'Real-time weather application with location-based forecasts',
    gradient: 'from-orange-500 to-red-600',
    gradientMin: 'from-orange-700',  
    gradientMax: 'to-red-700',
    colordot: 'bg-orange-500',
    d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'FastAPI', color: 'bg-green-600/20', text: 'text-green-300', border : 'border-green-500' },
      { name: 'SQLite', color: 'bg-gray-600/20', text: 'text-gray-300', border : 'border-gray-500' }
    ],
    decorations:[
      { className: "absolute top-4 right-4 w-6 h-6 bg-yellow-400/60 rounded-full" },
    { className: "absolute bottom-8 left-8 w-2 h-6 bg-blue-400/40 rounded-full float-animation" },
    { className: "absolute bottom-8 left-12 w-2 h-4 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "0.5s" } },
    { className: "absolute bottom-8 left-16 w-2 h-8 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "1s" } }
    ]
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    displayName: 'Weather',
    description: 'Real-time weather application with location-based forecasts',
    gradient: 'from-orange-500 to-red-600',
    gradientMin: 'from-orange-700',  
    gradientMax: 'to-red-700',
    colordot: 'bg-orange-500',
    d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'FastAPI', color: 'bg-green-600/20', text: 'text-green-300', border : 'border-green-500' },
      { name: 'SQLite', color: 'bg-gray-600/20', text: 'text-gray-300', border : 'border-gray-500' }
    ],
    decorations:[
      { className: "absolute top-4 right-4 w-6 h-6 bg-yellow-400/60 rounded-full" },
    { className: "absolute bottom-8 left-8 w-2 h-6 bg-blue-400/40 rounded-full float-animation" },
    { className: "absolute bottom-8 left-12 w-2 h-4 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "0.5s" } },
    { className: "absolute bottom-8 left-16 w-2 h-8 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "1s" } }
    ]
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    displayName: 'Weather',
    description: 'Real-time weather application with location-based forecasts',
    gradient: 'from-orange-500 to-red-600',
    gradientMin: 'from-orange-700',  
    gradientMax: 'to-red-700',
    colordot: 'bg-orange-500',
    d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    technologies: [
      { name: 'React.js', color: 'bg-blue-600/20', text: 'text-blue-300', border : 'border-blue-500' },
      { name: 'FastAPI', color: 'bg-green-600/20', text: 'text-green-300', border : 'border-green-500' },
      { name: 'SQLite', color: 'bg-gray-600/20', text: 'text-gray-300', border : 'border-gray-500' }
    ],
    decorations:[
      { className: "absolute top-4 right-4 w-6 h-6 bg-yellow-400/60 rounded-full" },
    { className: "absolute bottom-8 left-8 w-2 h-6 bg-blue-400/40 rounded-full float-animation" },
    { className: "absolute bottom-8 left-12 w-2 h-4 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "0.5s" } },
    { className: "absolute bottom-8 left-16 w-2 h-8 bg-blue-400/40 rounded-full float-animation", style: { animationDelay: "1s" } }
    ]
  }

];