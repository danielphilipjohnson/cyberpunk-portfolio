"use client"

import React from 'react';
import BlogPostCard from './BlogPostCard';
import { BlogPost, getPostsByCategory, blogPosts } from '@/data/blogPosts';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

interface RelatedPostsProps {
  currentPost: BlogPost;
}

export default function RelatedPosts({ currentPost }: RelatedPostsProps) {
  // Get posts from the same category, excluding the current post
  const categoryPosts = getPostsByCategory(currentPost.category)
    .filter(post => post.slug !== currentPost.slug)
    .slice(0, 3); // Limit to 3 related posts

  // If we don't have enough posts from the same category, fill with recent posts
  const allOtherPosts = blogPosts
    .filter((post: BlogPost) => post.slug !== currentPost.slug);
  
  const relatedPosts = [...categoryPosts];
  
  // Fill remaining slots with posts from other categories
  if (relatedPosts.length < 3) {
    const additionalPosts = allOtherPosts
      .filter((post: BlogPost) => !relatedPosts.some(rp => rp.slug === post.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  if (relatedPosts.length === 0) {
    return null; // Don't show section if no related posts
  }

  return (
    <section className="relative py-16 bg-gray-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <CyberpunkSectionDecor variant="minimal" intensity="low" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse mr-2"></div>
            <div className="text-lime-400 text-sm font-mono tracking-wider uppercase">
              [RELATED_TRANSMISSIONS]
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4 font-mono">
            Similar <span className="text-lime-400">Data_Streams</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 font-mono leading-relaxed">
              Other neural transmissions from the same data cluster. 
              Expand your knowledge <span className="text-lime-400">matrix</span>.
            </p>
          </div>
        </div>

        {/* Related Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <BlogPostCard 
              key={post.id} 
              post={post} 
              featured={false} 
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent"></div>
          <div className="mx-4 w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent"></div>
        </div>
      </div>

      {/* Floating data points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-lime-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-lime-400 rounded-full animate-ping opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-lime-400 rounded-full animate-ping opacity-40 animation-delay-2000"></div>

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
