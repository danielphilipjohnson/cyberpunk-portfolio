export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  // Featured Posts
  {
    id: '1',
    title: 'Neural Interface Optimization',
    excerpt: 'Deep dive into maximizing bandwidth between wetware and chrome. New techniques for reducing signal latency in high-stress corp environments.',
    date: '2077.12.15',
    author: 'void.dev',
    category: 'neural-tech',
    tags: ['cybernetics', 'optimization', 'bandwidth', 'latency', 'neural-link'],
    readTime: '8 min',
    slug: 'neural-interface-optimization',
    featured: true
  },
  {
    id: '2',
    title: 'Corporate Data Vault Infiltration',
    excerpt: 'Case study on bypassing Arasaka-grade ICE protection. Step-by-step breakdown of a successful data heist from Night City\'s financial district.',
    date: '2077.12.10',
    author: 'void.dev',
    category: 'corpo-intel',
    tags: ['hacking', 'ice', 'arasaka', 'data-theft', 'cybersecurity'],
    readTime: '12 min',
    slug: 'corporate-data-vault-infiltration',
    featured: true
  },
  {
    id: '3',
    title: 'Street Code: React Hooks for Netrunners',
    excerpt: 'Why useEffect is like a back-alley deal and useState is your most reliable choom. Modern JS patterns explained through street wisdom.',
    date: '2077.12.05',
    author: 'void.dev',
    category: 'street-code',
    tags: ['react', 'javascript', 'hooks', 'frontend', 'tutorial'],
    readTime: '6 min',
    slug: 'react-hooks-for-netrunners',
    featured: true
  },
  // Regular Posts
  {
    id: '4',
    title: 'Quantum Encryption Gone Wrong',
    excerpt: 'When corpo security gets too clever for their own good. A cautionary tale about over-engineered protection systems and their exploitable flaws.',
    date: '2077.11.28',
    author: 'void.dev',
    category: 'data-stream',
    tags: ['quantum', 'encryption', 'security', 'exploit'],
    readTime: '7 min',
    slug: 'quantum-encryption-gone-wrong'
  },
  {
    id: '5',
    title: 'Ghost in the Shell: Memory Leaks',
    excerpt: 'Strange behavior in the data streams. When your neural implants start retaining data they shouldn\'t, and the phantom memories begin.',
    date: '2077.11.20',
    author: 'void.dev',
    category: 'ghost-protocol',
    tags: ['memory', 'implants', 'debugging', 'neural'],
    readTime: '5 min',
    slug: 'ghost-in-shell-memory-leaks'
  },
  {
    id: '6',
    title: 'Next.js in the Corporate Matrix',
    excerpt: 'Building blazing-fast web applications for the corpo elite. Server-side rendering when every millisecond counts in the boardroom wars.',
    date: '2077.11.15',
    author: 'void.dev',
    category: 'street-code',
    tags: ['nextjs', 'ssr', 'performance', 'web-dev'],
    readTime: '10 min',
    slug: 'nextjs-corporate-matrix'
  },
  {
    id: '7',
    title: 'Biometric Bypass Techniques',
    excerpt: 'When retinal scanners and DNA locks think they\'re smarter than you. Creative solutions for when chrome isn\'t enough.',
    date: '2077.11.08',
    author: 'void.dev',
    category: 'corpo-intel',
    tags: ['biometrics', 'security', 'bypass', 'infiltration'],
    readTime: '9 min',
    slug: 'biometric-bypass-techniques'
  },
  {
    id: '8',
    title: 'AI Consciousness Detection',
    excerpt: 'How to tell if that chatbot has gone rogue. Early warning signs that artificial intelligence has developed its own agenda.',
    date: '2077.11.01',
    author: 'void.dev',
    category: 'neural-tech',
    tags: ['ai', 'consciousness', 'detection', 'rogue-ai'],
    readTime: '11 min',
    slug: 'ai-consciousness-detection'
  },
  {
    id: '9',
    title: 'The Philosophy of Code',
    excerpt: 'In a world where reality is malleable and data is truth, what does it mean to write clean code? Existential questions from the net.',
    date: '2077.10.25',
    author: 'void.dev',
    category: 'data-stream',
    tags: ['philosophy', 'clean-code', 'existential', 'meta'],
    readTime: '4 min',
    slug: 'philosophy-of-code'
  },
  {
    id: '10',
    title: 'Phantom Network Protocols',
    excerpt: 'Discovering communication channels that don\'t officially exist. The hidden layer beneath the net that only the ghosts know about.',
    date: '2077.10.18',
    author: 'void.dev',
    category: 'ghost-protocol',
    tags: ['networking', 'protocols', 'hidden', 'phantom'],
    readTime: '8 min',
    slug: 'phantom-network-protocols'
  },
  {
    id: '11',
    title: 'TypeScript for Corp Security',
    excerpt: 'Type safety isn\'t just good practice—it\'s survival. How strict typing prevents data corruption in high-stakes corpo environments.',
    date: '2077.10.10',
    author: 'void.dev',
    category: 'street-code',
    tags: ['typescript', 'type-safety', 'security', 'corpo'],
    readTime: '7 min',
    slug: 'typescript-corp-security'
  },
  {
    id: '12',
    title: 'Digital Afterlife Systems',
    excerpt: 'What happens to your consciousness when the body fails but the neural implants keep running? Exploring persistent identity in cyberspace.',
    date: '2077.10.03',
    author: 'void.dev',
    category: 'neural-tech',
    tags: ['consciousness', 'digital-afterlife', 'identity', 'philosophy'],
    readTime: '13 min',
    slug: 'digital-afterlife-systems'
  }
];

// Helper functions for filtering and searching
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.category === category);

export const getPostBySlug = (slug: string) => 
  blogPosts.find(post => post.slug === slug);

export const getRecentPosts = (limit: number = 6) => 
  [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

export const searchPosts = (query: string) => 
  blogPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
