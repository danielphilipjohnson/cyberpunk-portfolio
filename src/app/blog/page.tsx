"use client"

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import Footer from '@/components/home/Footer';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Blog Hero Section */}
      <BlogHero />
      
      {/* Blog Posts Grid */}
      <BlogGrid posts={blogPosts} showFeatured={true} />
      
      {/* Footer */}
      <div className="bg-gray-950">
        <Footer />
      </div>
    </main>
  );
}
