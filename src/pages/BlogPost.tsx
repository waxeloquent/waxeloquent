// File: src/pages/BlogPost.tsx

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MDXComponentsProvider } from '../components/mdx/MDXComponents';

// Import blog posts
import welcomeToOurBlog from '../blog/content/welcome-to-our-blog.mdx';
import technicalJargonVsClarity from '../blog/content/technical-jargon-vs-clarity.mdx';

// Define TypeScript interfaces
interface PostData {
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  Component: React.ComponentType;
  excerpt?: string;
}

interface PostsMap {
  [key: string]: PostData;
}

interface BlogPostParams {
  postId: string;
}

const BlogPost: React.FC = () => {
  const { postId } = useParams<BlogPostParams>();
  
  // Map of post ids to their MDX components and metadata
  const posts: PostsMap = {
    'welcome-to-our-blog': {
      title: 'Welcome to Our Blog: Insights on Technical Writing and Communication',
      date: 'March 7, 2025',
      author: 'Rebecca Traeger',
      category: 'Content Strategy',
      tags: ['Communication', 'Announcements'],
      Component: welcomeToOurBlog
    },
    'technical-jargon-vs-clarity': {
      title: 'Technical Jargon vs. Clarity: Finding the Right Balance',
      date: 'February 15, 2025',
      author: 'Rebecca Traeger',
      category: 'Technical Writing',
      tags: ['Technical Writing', 'Best Practices'],
      Component: technicalJargonVsClarity
    }
    // Add new posts here
  };
  
  // Get current post
  const post = postId ? posts[postId] : undefined;
  
  // If post not found, redirect to blog index
  if (!post) {
    return <Navigate to="/blog" />;
  }
  
  // Get post component
  const PostContent = post.Component;
  
  // Get post indexes for navigation
  const postIds = Object.keys(posts);
  const currentIndex = postIds.indexOf(postId || '');
  const prevPostId = currentIndex > 0 ? postIds[currentIndex - 1] : null;
  const nextPostId = currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null;
  
  const prevPost = prevPostId ? posts[prevPostId] : null;
  const nextPost = nextPostId ? posts[nextPostId] : null;
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Wax Eloquent</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8">
            <div className="mb-4">
              {post.tags && post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-primary/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-sm opacity-90">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
              <MDXComponentsProvider>
                <PostContent />
              </MDXComponentsProvider>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p><em>{post.author}</em><br />
                <em>Founder, Wax Eloquent</em></p>
              </div>
            </article>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <span className="text-xl font-bold">{post.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">About {post.author}</h3>
                    <p className="text-gray-700">Founder of Wax Eloquent, helping technical professionals communicate with clarity and impact.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between items-center">
                {prevPost ? (
                  <Link to={`/blog/${prevPostId}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Post
                  </Link>
                ) : <div></div>}
                
                <Link to="/blog" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
                
                {nextPost ? (
                  <Link to={`/blog/${nextPostId}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                    Next Post
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : <div></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;