import React from 'react';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Footer from '@/components/home/Footer';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import { getPostContent } from '@/data/blogContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to get previous and next posts
const getAdjacentPosts = (currentSlug: string) => {
  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug);
  
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  return { previousPost, nextPost };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // Find the blog post
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  // Get the full content
  const content = getPostContent(slug);
  
  if (!content) {
    notFound();
  }
  
  // Get previous and next posts
  const { previousPost, nextPost } = getAdjacentPosts(slug);
  
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Blog Post Header */}
      <BlogPostHeader post={post} />
      
      {/* Blog Post Content */}
      <BlogPostContent content={content} category={post.category} />
      
      {/* Related Posts */}
      <RelatedPosts currentPost={post} />
      
      {/* Navigation to Previous/Next Posts */}
      <BlogPostNavigation 
        currentPost={post}
        previousPost={previousPost}
        nextPost={nextPost}
      />
      
      {/* Footer */}
      <div className="bg-gray-950">
        <Footer />
      </div>
    </main>
  );
}

// Generate static params for all blog posts (optional, for better performance)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | void.dev',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | void.dev`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}
