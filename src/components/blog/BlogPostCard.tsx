"use client"

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  slug: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'neural-tech': { border: 'border-cyan-400', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
      'corpo-intel': { border: 'border-pink-500', text: 'text-pink-500', glow: 'shadow-pink-500/20' },
      'street-code': { border: 'border-lime-400', text: 'text-lime-400', glow: 'shadow-lime-500/20' },
      'data-stream': { border: 'border-purple-500', text: 'text-purple-500', glow: 'shadow-purple-500/20' },
      'ghost-protocol': { border: 'border-orange-400', text: 'text-orange-400', glow: 'shadow-orange-500/20' },
      default: { border: 'border-teal-400', text: 'text-teal-400', glow: 'shadow-teal-500/20' }
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const colorScheme = getCategoryColor(post.category);
  
  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <article 
        className={`
          bg-gray-900/80 backdrop-blur-sm border-2 ${colorScheme.border}
          relative overflow-hidden transition-all duration-300
          hover:${colorScheme.glow} hover:shadow-lg hover:scale-[1.02]
          h-full flex flex-col
          ${featured ? 'md:col-span-2 lg:col-span-3' : ''}
        `}
        style={{ 
          clipPath: featured 
            ? 'polygon(0 0, 100% 0, 98% 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
        }}
      >
        {/* Scanning effect overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <div 
            className={`absolute top-0 left-0 w-full h-px bg-${colorScheme.text.split('-')[1]}-400`}
            style={{
              animation: 'scanY 2s linear infinite'
            }}
          ></div>
        </div>

        {/* Corner accents */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${colorScheme.border} opacity-60`}></div>
        <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${colorScheme.border} opacity-60`}></div>
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${colorScheme.border} opacity-60`}></div>
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${colorScheme.border} opacity-60`}></div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {/* Category tag */}
            <div className={`
              inline-flex items-center px-3 py-1 
              bg-gray-800/60 border ${colorScheme.border}
              text-xs font-mono uppercase tracking-wider ${colorScheme.text}
            `}
            style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            >
              [{post.category.replace('-', '_').toUpperCase()}]
            </div>
            
            {/* Date */}
            <div className="text-gray-400 text-xs font-mono">
              {post.date}
            </div>
          </div>

          {/* Title */}
          <h3 className={`
            text-xl font-bold mb-3 font-mono uppercase tracking-wide
            text-white group-hover:${colorScheme.text} transition-colors duration-300
            ${featured ? 'md:text-2xl lg:text-3xl' : ''}
          `}>
            {post.title}
          </h3>

          {/* Content area that grows */}
          <div className="flex-grow">
            {/* Excerpt */}
            <p className={`
              text-gray-300 text-sm font-mono leading-relaxed mb-4
              ${featured ? 'md:text-base' : ''}
            `}>
              {post.excerpt}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, featured ? 5 : 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-800/40 border border-gray-600"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-400">by {post.author}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Featured indicator */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className={`
              bg-${colorScheme.text.split('-')[1]}-400 text-gray-900
              px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider
            `}
            style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}
            >
              FEATURED
            </div>
          </div>
        )}

        {/* Hover indicator */}
        <div className={`
          absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
          from-${colorScheme.text.split('-')[1]}-400/0 
          via-${colorScheme.text.split('-')[1]}-400/60 
          to-${colorScheme.text.split('-')[1]}-400/0
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
        `}></div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes scanY {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>
      </article>
    </Link>
  );
}
