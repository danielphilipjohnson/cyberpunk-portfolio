"use client"

import React from 'react';
import BlogPostCard from './BlogPostCard';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

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

interface BlogGridProps {
  posts: BlogPost[];
  showFeatured?: boolean;
}

export default function BlogGrid({ posts, showFeatured = true }: BlogGridProps) {
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <CyberpunkSectionDecor variant="grid" intensity="low" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            <div className="text-cyan-400 text-sm font-mono tracking-wider uppercase">
              [DATA_TRANSMISSIONS]
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4 font-mono">
            Recent <span className="text-cyan-400">Uploads</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 font-mono leading-relaxed">
              Fresh intel from the net. Corporate data leaks, street wisdom, 
              and the occasional glitch in the <span className="text-pink-500">system</span>.
            </p>
          </div>
        </div>

        {/* Featured Posts Section */}
        {showFeatured && featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex items-center bg-gray-800/60 border border-pink-500/30 px-4 py-2 mr-4"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}>
                <span className="text-pink-500 font-mono text-sm mr-2">[PRIORITY]</span>
                <span className="text-white font-bold tracking-wider">FEATURED TRANSMISSIONS</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-pink-500/60 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <BlogPostCard 
                  key={post.id} 
                  post={post} 
                  featured={true} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Section */}
        {regularPosts.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <div className="flex items-center bg-gray-800/60 border border-cyan-500/30 px-4 py-2 mr-4"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}>
                <span className="text-cyan-500 font-mono text-sm mr-2">[ARCHIVE]</span>
                <span className="text-white font-bold tracking-wider">DATA STREAM</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogPostCard 
                  key={post.id} 
                  post={post} 
                  featured={false} 
                />
              ))}
            </div>
          </div>
        )}

        {/* No Posts State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 border border-red-500/50 flex items-center justify-center"
                  style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-mono font-bold text-red-400 mb-2 uppercase tracking-wider">
                  [CONNECTION_LOST]
                </h3>
                
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  No data transmissions found in the neural buffer. 
                  The netrunner might be jack'd out or experiencing signal interference.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Load More Section */}
        {posts.length > 0 && (
          <div className="text-center mt-16">
            <button
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 font-mono"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            >
              [LOAD_MORE_DATA]
            </button>
          </div>
        )}
      </div>

      {/* Floating data points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-500 rounded-full animate-ping opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-lime-400 rounded-full animate-ping opacity-40 animation-delay-2000"></div>

      {/* CSS for animation delays */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
