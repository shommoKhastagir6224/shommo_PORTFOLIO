export const PROJECTS = [
  {
    id: 1,
    title: 'NexCommerce',
    description:
      'A high-performance e-commerce platform with real-time inventory, Stripe payments, and admin dashboard. Built to handle 10k+ concurrent users.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: true,
    color: '#00d4ff',
  },
  {
    id: 2,
    title: 'TaskFlow Pro',
    description:
      'Real-time project management tool with Kanban boards, team collaboration, and WebSocket-powered live updates across all devices.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tags: ['React', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: true,
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'DevConnect API',
    description:
      'RESTful social platform for developers — profiles, posts, GitHub integration, and activity feeds. Production-ready with Docker.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: false,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'CloudNotes',
    description:
      'Firebase-powered note-taking app with rich text editor, markdown support, real-time sync, and offline capability via service workers.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'StockPulse Dashboard',
    description:
      'Real-time financial dashboard with live market data, interactive charts, portfolio tracking, and AI-based stock insights.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'REST API'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: true,
    color: '#00d4ff',
  },
  {
    id: 6,
    title: 'AuthKit',
    description:
      'Production-ready authentication microservice with OAuth2, 2FA, role-based access control, and audit logging. Drop-in for any app.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    tags: ['Node.js', 'MongoDB', 'OAuth2', 'Redis', 'TypeScript'],
    live: 'https://demo.example.com',
    github: 'https://github.com',
    featured: false,
    color: '#7c3aed',
  },
];

export const SKILLS = [
  { name: 'React / Next.js', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js / Express', level: 92, icon: '🟢', category: 'Backend' },
  { name: 'MongoDB / Mongoose', level: 88, icon: '🍃', category: 'Database' },
  { name: 'TypeScript', level: 85, icon: '🔷', category: 'Language' },
  { name: 'REST API Design', level: 93, icon: '🔗', category: 'Backend' },
  { name: 'Firebase', level: 80, icon: '🔥', category: 'Cloud' },
  { name: 'Docker / CI/CD', level: 75, icon: '🐳', category: 'DevOps' },
  { name: 'Tailwind CSS', level: 96, icon: '🎨', category: 'Frontend' },
];

export const SERVICES = [
  {
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end development using the MERN stack. From database schema design to pixel-perfect UI — complete, production-ready web applications.',
    icon: '🚀',
    features: ['Custom CMS', 'Admin Dashboards', 'SaaS Platforms', 'E-commerce'],
    color: 'cyan',
  },
  {
    title: 'API Development',
    description:
      'Robust, scalable REST APIs and backend systems. Clean architecture, proper auth, rate limiting, and comprehensive documentation.',
    icon: '⚙️',
    features: ['RESTful APIs', 'Authentication/Auth', 'Microservices', 'Integrations'],
    color: 'violet',
  },
  {
    title: 'Performance & Optimization',
    description:
      'Speed-up slow apps with code splitting, caching strategies, database indexing, CDN setup, and Core Web Vitals improvements.',
    icon: '⚡',
    features: ['Core Web Vitals', 'Database Optimization', 'Caching', 'Code Splitting'],
    color: 'emerald',
  },
  {
    title: 'UI/UX Implementation',
    description:
      'Transform designs into flawless, responsive interfaces. Pixel-perfect Figma-to-code with smooth animations and accessibility.',
    icon: '🎨',
    features: ['Figma to Code', 'Responsive Design', 'Animations', 'Accessibility'],
    color: 'amber',
  },
];

export const TECH_STACK = [
  'MongoDB', 'Express.js', 'React', 'Node.js',
  'Next.js', 'TypeScript', 'Firebase', 'Redis',
  'Docker', 'Tailwind CSS', 'REST APIs', 'WebSockets',
];
