"use client"

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogPosts';

interface BlogPostNavigationProps {
  currentPost: BlogPost;
  previousPost?: BlogPost | null;
  nextPost?: BlogPost | null;
}

export default function BlogPostNavigation({ currentPost, previousPost, nextPost }: BlogPostNavigationProps) {
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

  return (
    <section className="relative py-16 bg-gray-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Navigation Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            <div className="text-cyan-400 text-sm font-mono tracking-wider uppercase">
              [DATA_STREAM_NAVIGATION]
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-mono uppercase tracking-wider">
            Continue <span className="text-cyan-400">Transmission</span>
          </h2>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Post */}
          <div className="space-y-4">
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`} className="block group">
                <div className={`
                  bg-gray-900/80 backdrop-blur-sm border-2 ${getCategoryColor(previousPost.category).border}
                  p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${getCategoryColor(previousPost.category).text.split('-')[1]}-500/20
                  hover:scale-[1.02] h-full
                `}
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
                >
                  {/* Direction indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                      Previous_Transmission
                    </span>
                  </div>

                  {/* Category */}
                  <div className={`
                    inline-flex items-center px-2 py-1 mb-3
                    bg-gray-800/60 border ${getCategoryColor(previousPost.category).border}
                    text-xs font-mono uppercase tracking-wider ${getCategoryColor(previousPost.category).text}
                  `}
                  style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
                  >
                    [{previousPost.category.replace('-', '_').toUpperCase()}]
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold font-mono uppercase tracking-wide mb-2
                    text-white group-hover:${getCategoryColor(previousPost.category).text}
                    transition-colors duration-300
                  `}>
                    {previousPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4 line-clamp-3">
                    {previousPost.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                    <span>{previousPost.date}</span>
                    <span>•</span>
                    <span>{previousPost.readTime}</span>
                  </div>

                  {/* Hover indicator */}
                  <div className={`
                    absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-${getCategoryColor(previousPost.category).text.split('-')[1]}-400/0 
                    via-${getCategoryColor(previousPost.category).text.split('-')[1]}-400/60 
                    to-${getCategoryColor(previousPost.category).text.split('-')[1]}-400/0
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                  `}></div>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-900/40 border-2 border-gray-600/30 p-6 h-full"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-gray-600 font-mono text-xs uppercase tracking-wider">
                    No_Previous_Data
                  </span>
                </div>
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 border border-red-500/30 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
                    <svg className="w-6 h-6 text-red-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-mono text-sm">
                    [BEGINNING_OF_ARCHIVE]
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Next Post */}
          <div className="space-y-4">
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="block group">
                <div className={`
                  bg-gray-900/80 backdrop-blur-sm border-2 ${getCategoryColor(nextPost.category).border}
                  p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${getCategoryColor(nextPost.category).text.split('-')[1]}-500/20
                  hover:scale-[1.02] h-full
                `}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
                >
                  {/* Direction indicator */}
                  <div className="flex items-center justify-end gap-2 mb-4">
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                      Next_Transmission
                    </span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Category */}
                  <div className="flex justify-end mb-3">
                    <div className={`
                      inline-flex items-center px-2 py-1
                      bg-gray-800/60 border ${getCategoryColor(nextPost.category).border}
                      text-xs font-mono uppercase tracking-wider ${getCategoryColor(nextPost.category).text}
                    `}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
                    >
                      [{nextPost.category.replace('-', '_').toUpperCase()}]
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold font-mono uppercase tracking-wide mb-2 text-right
                    text-white group-hover:${getCategoryColor(nextPost.category).text}
                    transition-colors duration-300
                  `}>
                    {nextPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4 line-clamp-3 text-right">
                    {nextPost.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-end gap-4 text-xs font-mono text-gray-500">
                    <span>{nextPost.readTime}</span>
                    <span>•</span>
                    <span>{nextPost.date}</span>
                  </div>

                  {/* Hover indicator */}
                  <div className={`
                    absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-${getCategoryColor(nextPost.category).text.split('-')[1]}-400/0 
                    via-${getCategoryColor(nextPost.category).text.split('-')[1]}-400/60 
                    to-${getCategoryColor(nextPost.category).text.split('-')[1]}-400/0
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                  `}></div>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-900/40 border-2 border-gray-600/30 p-6 h-full"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
                <div className="flex items-center justify-end gap-2 mb-4">
                  <span className="text-gray-600 font-mono text-xs uppercase tracking-wider">
                    No_Next_Data
                  </span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 border border-red-500/30 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
                    <svg className="w-6 h-6 text-red-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-mono text-sm">
                    [END_OF_ARCHIVE]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Archive */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 font-mono"
            style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m0 0l4-4m-4 4l4 4" />
            </svg>
            [RETURN_TO_ARCHIVE]
          </Link>
        </div>
      </div>

      {/* Floating connection lines */}
      <div className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-px bg-gradient-to-r from-cyan-400/60 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
