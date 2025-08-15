import React from 'react';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import Navigation from '@/components/layout/Navigation';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Footer from '@/components/home/Footer';
import { getPost, getAllPosts, getRelatedPosts } from '@/lib/mdx';
import { BlogPost as LegacyBlogPost } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to convert MDX post to legacy BlogPost format
const convertMDXPostToLegacy = (mdxPost: any): LegacyBlogPost => {
  return {
    id: mdxPost.slug, // Use slug as ID
    title: mdxPost.title,
    excerpt: mdxPost.description, // Map description to excerpt
    date: mdxPost.date,
    author: mdxPost.author,
    category: mdxPost.classification || 'neural-tech', // Map classification to category
    tags: mdxPost.tags,
    readTime: mdxPost.readingTime, // Already in correct format from reading-time
    slug: mdxPost.slug,
    featured: false // Default to false
  };
};

// Helper function to get previous and next posts
const getAdjacentPosts = (currentSlug: string, allPosts: any[]) => {
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug);
  
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  
  return { previousPost, nextPost };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // Get the MDX post
  const post = getPost(slug);
  
  if (!post) {
    notFound();
  }
  
  // Get all posts for navigation
  const allPosts = getAllPosts();
  const { previousPost, nextPost } = getAdjacentPosts(slug, allPosts);
  
  // Get related posts from MDX system
  const mdxRelatedPosts = getRelatedPosts(slug, 3);
  
  // Convert MDX post to legacy format for existing components
  const legacyPost = convertMDXPostToLegacy(post);
  const legacyPreviousPost = previousPost ? convertMDXPostToLegacy(previousPost) : null;
  const legacyNextPost = nextPost ? convertMDXPostToLegacy(nextPost) : null;
  const legacyRelatedPosts = mdxRelatedPosts.map(convertMDXPostToLegacy);
  
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Blog Post Header */}
      <BlogPostHeader post={legacyPost} />
      
      {/* Blog Post Content */}
      <BlogPostContent 
        slug={slug}
        post={post}
        content={post.content}
        category={legacyPost.category}
      />
      
      {/* Related Posts */}
      <RelatedPosts currentPost={legacyPost} relatedPosts={legacyRelatedPosts} />
      
      {/* Navigation to Previous/Next Posts */}
      <BlogPostNavigation 
        currentPost={legacyPost}
        previousPost={legacyPreviousPost}
        nextPost={legacyNextPost}
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
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | void.dev',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | void.dev`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}
