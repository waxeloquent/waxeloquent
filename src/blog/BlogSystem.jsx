// src/blog/BlogSystem.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// This is a centralized blog post registry
// Add new blog posts to this array when you create them
export const blogPosts = [
  {
    id: 'welcome-to-our-blog',
    title: 'Welcome to Our Blog: Insights on Technical Writing and Communication',
    date: '2025-03-07',
    author: 'Rebecca Traeger',
    category: 'Communication',
    tags: ['Announcements', 'Communication'],
    excerpt: 'Introducing our blog where we\'ll share insights, tips, and strategies for effective technical communication and content creation.',
    thumbnailEmoji: '📝',
    // The component will be imported in the routes file
  },
  {
    id: 'technical-jargon-vs-clarity',
    title: 'Technical Jargon vs. Clarity: Finding the Right Balance',
    date: '2025-02-15',
    author: 'Rebecca Traeger',
    category: 'Technical Writing',
    tags: ['Technical Writing', 'Best Practices'],
    excerpt: 'How to communicate complex technical concepts without losing your audience in unnecessary jargon.',
    thumbnailEmoji: '🔍',
    // The component will be imported in the routes file
  },
];

// Helper components for consistent blog styling
export const BlogHeader: React.FC<{
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}> = ({ title, date, author, category, tags }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="bg-dark text-white py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-8">
          <div className="mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-primary/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h1>
          <div className="flex items-center justify-center text-sm opacity-90">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BlogFooter: React.FC<{
  author: string;
  prevPost?: { id: string, title: string };
  nextPost?: { id: string, title: string };
}> = ({ author, prevPost, nextPost }) => {
  return (
    <>
      <div className="border-t border-gray-200 mt-12 pt-8">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
            <span className="text-xl font-bold">{author.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-heading text-xl mb-1">About {author}</h3>
            <p className="text-gray-700">Founder of Wax Eloquent, helping technical professionals communicate with clarity and impact.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center">
        {prevPost ? (
          <Link to={`/blog/${prevPost.id}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Post
          </Link>
        ) : (
          <div></div> // Empty div to maintain spacing
        )}
        
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        
        {nextPost ? (
          <Link to={`/blog/${nextPost.id}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
            Next Post
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div></div> // Empty div to maintain spacing
        )}
      </div>
    </>
  );
};

// Template for creating new blog posts quickly
export const BlogContent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <section className="py-16">
    <div className="container mx-auto px-5">
      <div className="max-w-3xl mx-auto">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </div>
    </div>
  </section>
);