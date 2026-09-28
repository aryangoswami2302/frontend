export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'FaHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#1572B6' },
      { name: 'JavaScript (ES6+)', icon: 'FaJs', color: '#F7DF1E' },
      { name: 'React.js', icon: 'FaReact', color: '#61DAFB' },
      { name: 'Bootstrap', icon: 'FaBootstrap', color: '#7952B3' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: 'FaPython', color: '#3776AB' },
      { name: 'Django', icon: 'SiDjango', color: '#092E20' },
      { name: 'REST APIs', icon: 'FaServer', color: '#4ADE80' },
  
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'SQL', icon: 'SiDatabase', color: '#22C55E' },
      { name:'Firebase', icon: 'SiFirebase', color: '#FFCA28' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
      { name: 'GitHub', icon: 'FaGithub', color: '#181717' },
      { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#0A74DA' },
      { name: 'docker', icon: 'FaDocker', color: '#2496ED' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'AI Interview Preparation Dashboard',
    description: 'Developed an AI-inspired interview preparation dashboard with mock questions, category filtering, progress tracking, and responsive dark/light mode.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    image: 'project_1'
  },
  {
    id: 2,
    title: 'Personal Finance Tracker UI',
    description: 'Designed a responsive personal finance tracker interface with expense dashboards, income vs expense charts, and monthly reporting.',
    tech: ['React.js', 'Chart.js', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: '#',
    image: 'project_3'
  },
  {
    id: 3,
    title: 'Employee Management REST API',
    description: 'Built a RESTful employee management API with CRUD operations, JWT authentication, role-based access, and search/pagination.',
    tech: ['Node.js', 'Express.js', 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    image: 'hero'
  },
  {
    id: 4,
    title: 'Library Management System API',
    description: 'Developed a library management API supporting book issue/return, student management, fine calculation, and API documentation.',
    tech: ['Java Spring Boot', 'Node.js', 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    image: 'project_2'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/aryangoswami2302',
  linkedin: 'https://linkedin.com',
  email: 'mailto:contact@example.com'
};
