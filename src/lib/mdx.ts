import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface BlogPostMeta {
  slug: string;
  title: string;
  classification: string;
  author: string;
  date: string;
  securityLevel: string;
  description: string;
  tags: string[];
  readingTime: string;
  filePath: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

// Get metadata for all posts
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  
  return slugs
    .map(slug => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get metadata for a single post
export function getPostMeta(slug: string): BlogPostMeta | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const stats = readingTime(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      classification: data.classification || 'PUBLIC_ACCESS',
      author: data.author || 'void.dev',
      date: data.date || new Date().toISOString(),
      securityLevel: data.securityLevel || 'LOW',
      description: data.description || '',
      tags: data.tags || [],
      readingTime: stats.text,
      filePath: fullPath,
    };
  } catch {
    return null;
  }
}

// Get full post content with metadata
export function getPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const stats = readingTime(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      classification: data.classification || 'PUBLIC_ACCESS',
      author: data.author || 'void.dev',
      date: data.date || new Date().toISOString(),
      securityLevel: data.securityLevel || 'LOW',
      description: data.description || '',
      tags: data.tags || [],
      readingTime: stats.text,
      filePath: fullPath,
      content,
    };
  } catch {
    return null;
  }
}

// Search posts by title, content, or tags
export function searchPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Get related posts (by tags)
export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostMeta(slug);
  if (!currentPost) return [];
  
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(post => post.slug !== slug)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
    
  return relatedPosts;
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagSet = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}

// Pagination helper
export function getPaginatedPosts(page: number = 1, limit: number = 10) {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    }
  };
}
