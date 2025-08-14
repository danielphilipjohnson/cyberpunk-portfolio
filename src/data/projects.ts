export interface ProjectTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'blockchain' | 'other';
  color: 'cyan' | 'purple' | 'pink' | 'green' | 'yellow' | 'blue' | 'red' | 'orange';
}

export interface Project {
  id: string;
  title: string;
  cyberpunkName: string; // Neural interface themed name
  description: string;
  longDescription: string;
  category: 'web' | 'mobile' | 'ai' | 'blockchain' | 'game' | 'tool' | 'api';
  status: 'active' | 'completed' | 'archived' | 'in-development';
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  technologies: ProjectTechnology[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  images: string[];
  startDate: string;
  endDate?: string;
  complexity: 1 | 2 | 3 | 4 | 5; // Neural complexity rating
  clientSatisfaction: number; // 0-100%
}

// Technology definitions
export const technologies: Record<string, ProjectTechnology> = {
  react: { name: 'React', category: 'frontend', color: 'cyan' },
  nextjs: { name: 'Next.js', category: 'frontend', color: 'purple' },
  typescript: { name: 'TypeScript', category: 'frontend', color: 'blue' },
  tailwind: { name: 'Tailwind CSS', category: 'frontend', color: 'cyan' },
  nodejs: { name: 'Node.js', category: 'backend', color: 'green' },
  express: { name: 'Express', category: 'backend', color: 'yellow' },
  postgresql: { name: 'PostgreSQL', category: 'database', color: 'blue' },
  mongodb: { name: 'MongoDB', category: 'database', color: 'green' },
  aws: { name: 'AWS', category: 'cloud', color: 'orange' },
  docker: { name: 'Docker', category: 'cloud', color: 'blue' },
  python: { name: 'Python', category: 'backend', color: 'yellow' },
  tensorflow: { name: 'TensorFlow', category: 'ai', color: 'orange' },
  solidity: { name: 'Solidity', category: 'blockchain', color: 'purple' },
  ethereum: { name: 'Ethereum', category: 'blockchain', color: 'purple' },
  reactnative: { name: 'React Native', category: 'mobile', color: 'cyan' },
  graphql: { name: 'GraphQL', category: 'backend', color: 'pink' },
  redux: { name: 'Redux', category: 'frontend', color: 'purple' },
  firebase: { name: 'Firebase', category: 'cloud', color: 'yellow' },
  vue: { name: 'Vue.js', category: 'frontend', color: 'green' },
  angular: { name: 'Angular', category: 'frontend', color: 'red' }
};

// Sample projects data
export const projects: Project[] = [
  {
    id: 'neural-portfolio',
    title: 'Cyberpunk Portfolio',
    cyberpunkName: 'NEURAL_INTERFACE_PORTFOLIO_v3.2.7',
    description: 'Personal portfolio website with full cyberpunk neural interface theme and interactive animations.',
    longDescription: 'A cutting-edge portfolio website designed with a cyberpunk aesthetic, featuring neural network animations, quantum-encrypted contact forms, and immersive user experiences. Built with Next.js and enhanced with custom animations and interactive elements.',
    category: 'web',
    status: 'active',
    threatLevel: 'LOW',
    technologies: [technologies.nextjs, technologies.typescript, technologies.tailwind, technologies.react],
    features: [
      'Neural interface animations',
      'Quantum-encrypted contact system',
      'Dynamic data stream visualizations',
      'Responsive cyberpunk design',
      'Interactive hover effects',
      'Custom loading sequences'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/cyberpunk-portfolio',
    liveUrl: 'https://void.dev',
    images: ['/images/projects/portfolio-1.jpg', '/images/projects/portfolio-2.jpg'],
    startDate: '2024-01',
    complexity: 4,
    clientSatisfaction: 98
  },
  {
    id: 'neural-commerce',
    title: 'Neural Commerce Platform',
    cyberpunkName: 'QUANTUM_COMMERCE_NEXUS_v2.1.4',
    description: 'Advanced e-commerce platform with AI-powered recommendations and neural interface shopping experience.',
    longDescription: 'A next-generation e-commerce platform that leverages artificial intelligence for personalized shopping experiences. Features include neural network product recommendations, quantum-secured payments, and immersive AR try-on capabilities.',
    category: 'web',
    status: 'completed',
    threatLevel: 'MEDIUM',
    technologies: [technologies.nextjs, technologies.typescript, technologies.nodejs, technologies.postgresql, technologies.aws],
    features: [
      'AI-powered product recommendations',
      'Quantum-secured payment processing',
      'AR virtual try-on system',
      'Real-time inventory management',
      'Neural interface design',
      'Advanced analytics dashboard'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/neural-commerce',
    liveUrl: 'https://neural-commerce.demo',
    demoUrl: 'https://demo.neural-commerce.com',
    images: ['/images/projects/commerce-1.jpg', '/images/projects/commerce-2.jpg'],
    startDate: '2023-06',
    endDate: '2023-12',
    complexity: 5,
    clientSatisfaction: 95
  },
  {
    id: 'blockchain-vault',
    title: 'Cybersecurity Vault',
    cyberpunkName: 'QUANTUM_VAULT_PROTOCOL_v1.8.3',
    description: 'Decentralized secure storage system using blockchain technology for ultra-secure data protection.',
    longDescription: 'A revolutionary blockchain-based security system that provides military-grade encryption for sensitive data storage. Utilizes smart contracts and distributed networks to ensure maximum security and accessibility.',
    category: 'blockchain',
    status: 'in-development',
    threatLevel: 'CRITICAL',
    technologies: [technologies.solidity, technologies.ethereum, technologies.nodejs, technologies.react, technologies.typescript],
    features: [
      'Quantum-resistant encryption',
      'Smart contract automation',
      'Distributed storage network',
      'Zero-knowledge authentication',
      'Multi-signature security',
      'Backup redundancy systems'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/quantum-vault',
    images: ['/images/projects/vault-1.jpg'],
    startDate: '2024-02',
    complexity: 5,
    clientSatisfaction: 92
  },
  {
    id: 'ai-assistant',
    title: 'Neural AI Assistant',
    cyberpunkName: 'CORTEX_AI_COMPANION_v4.5.1',
    description: 'Advanced AI assistant with neural learning capabilities and cyberpunk personality integration.',
    longDescription: 'An intelligent AI companion designed with a cyberpunk personality and advanced neural learning algorithms. Capable of complex conversations, task automation, and adaptive learning from user interactions.',
    category: 'ai',
    status: 'active',
    threatLevel: 'HIGH',
    technologies: [technologies.python, technologies.tensorflow, technologies.nodejs, technologies.mongodb, technologies.aws],
    features: [
      'Neural conversation engine',
      'Adaptive learning algorithms',
      'Voice synthesis technology',
      'Emotion recognition system',
      'Multi-language support',
      'Privacy-first architecture'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/cortex-ai',
    demoUrl: 'https://cortex.demo.void.dev',
    images: ['/images/projects/ai-1.jpg', '/images/projects/ai-2.jpg'],
    startDate: '2023-09',
    complexity: 5,
    clientSatisfaction: 97
  },
  {
    id: 'mobile-runner',
    title: 'Netrunner Mobile',
    cyberpunkName: 'MOBILE_NEURAL_INTERFACE_v2.7.9',
    description: 'Cross-platform mobile app for cyberpunk-themed productivity and neural enhancement tracking.',
    longDescription: 'A mobile application designed for tracking personal productivity with a cyberpunk theme. Features include neural enhancement monitoring, habit tracking, and gamified progress systems.',
    category: 'mobile',
    status: 'completed',
    threatLevel: 'LOW',
    technologies: [technologies.reactnative, technologies.typescript, technologies.firebase, technologies.nodejs],
    features: [
      'Neural enhancement tracking',
      'Habit formation algorithms',
      'Gamified progress system',
      'Offline synchronization',
      'Biometric integration',
      'Social challenges network'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/netrunner-mobile',
    liveUrl: 'https://apps.apple.com/netrunner',
    images: ['/images/projects/mobile-1.jpg', '/images/projects/mobile-2.jpg'],
    startDate: '2023-03',
    endDate: '2023-08',
    complexity: 3,
    clientSatisfaction: 89
  },
  {
    id: 'api-gateway',
    title: 'Neural API Gateway',
    cyberpunkName: 'QUANTUM_API_NEXUS_v3.1.2',
    description: 'High-performance API gateway with advanced security and neural routing capabilities.',
    longDescription: 'A sophisticated API gateway system designed for high-traffic applications with advanced security features, intelligent routing, and real-time monitoring capabilities.',
    category: 'api',
    status: 'active',
    threatLevel: 'MEDIUM',
    technologies: [technologies.nodejs, technologies.express, technologies.postgresql, technologies.docker, technologies.aws],
    features: [
      'Intelligent request routing',
      'Rate limiting algorithms',
      'Advanced authentication',
      'Real-time monitoring',
      'Auto-scaling capabilities',
      'Security threat detection'
    ],
    githubUrl: 'https://github.com/danielphilipjohnson/neural-api-gateway',
    demoUrl: 'https://api.neural-gateway.dev',
    images: ['/images/projects/api-1.jpg'],
    startDate: '2023-11',
    complexity: 4,
    clientSatisfaction: 94
  }
];

// Helper functions
export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status']) => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByTechnology = (technologyName: string) => {
  return projects.filter(project => 
    project.technologies.some(tech => tech.name === technologyName)
  );
};

export const getProjectsByThreatLevel = (threatLevel: Project['threatLevel']) => {
  return projects.filter(project => project.threatLevel === threatLevel);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
