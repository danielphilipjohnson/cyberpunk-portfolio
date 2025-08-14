"use client"

import React from 'react';
import Link from 'next/link';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';
import { BlogPost } from '@/data/blogPosts';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'neural-tech': { border: 'border-cyan-400', text: 'text-cyan-400', bg: 'bg-cyan-400' },
      'corpo-intel': { border: 'border-pink-500', text: 'text-pink-500', bg: 'bg-pink-500' },
      'street-code': { border: 'border-lime-400', text: 'text-lime-400', bg: 'bg-lime-400' },
      'data-stream': { border: 'border-purple-500', text: 'text-purple-500', bg: 'bg-purple-500' },
      'ghost-protocol': { border: 'border-orange-400', text: 'text-orange-400', bg: 'bg-orange-400' },
      default: { border: 'border-teal-400', text: 'text-teal-400', bg: 'bg-teal-400' }
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const colorScheme = getCategoryColor(post.category);

  return (
    <section
      className="relative min-h-[70vh] text-white font-mono overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%)',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Cyberpunk Visual Effects */}
      <div className="absolute inset-0 z-0">
        <CyberpunkSectionDecor variant="grid" intensity="high" />
      </div>


      {/* Blog Post Header Content */}
      <div className="relative z-10 px-6 md:px-16 pt-8 pb-16 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm font-mono text-gray-400">
          <Link href="/" className="hover:text-teal-400 transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">BLOG</Link>
          <span>/</span>
          <span className={colorScheme.text}>{post.slug.toUpperCase()}</span>
        </div>

        {/* Category and Date */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Category */}
          <div className={`
            inline-flex items-center px-4 py-2
            bg-gray-800/60 border-2 ${colorScheme.border}
            text-sm font-mono uppercase tracking-wider ${colorScheme.text}
          `}
          style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
          >
            [{post.category.replace('-', '_').toUpperCase()}]
          </div>

          {/* Date and Read Time */}
          <div className="flex items-center gap-4 text-gray-400 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>PUBLISHED: {post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>NEURAL_TIME: {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-wider text-white mb-6 font-mono">
          {post.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 === 1 ? colorScheme.text : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>

        {/* Excerpt */}
        <p className="text-xl md:text-2xl text-gray-300 font-mono leading-relaxed mb-8 max-w-4xl">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-mono text-gray-400 px-3 py-1 bg-gray-800/40 border border-gray-600 hover:border-gray-400 transition-colors"
              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author and Status */}
        <div className="flex flex-wrap items-center justify-between pt-8 border-t border-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 ${colorScheme.bg} rounded-full animate-pulse`}></div>
              <span className="text-gray-300 font-mono text-sm">
                AUTHOR: <span className={colorScheme.text}>{post.author}</span>
              </span>
            </div>
            <div className="text-gray-500 font-mono text-xs">
              [NEURAL_SIGNATURE_VERIFIED]
            </div>
          </div>

          {/* Transmission Status */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="text-green-400 font-mono text-sm">
              [TRANSMISSION_ACTIVE]
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-green-400 animate-pulse"></div>
              <div className="w-1 h-4 bg-green-400 animate-pulse animation-delay-200"></div>
              <div className="w-1 h-4 bg-green-400 animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning lines animation */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
