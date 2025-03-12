// src/pages/BlogPost.tsx - Single Blog Post Component
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import the posts array
// In a real application, you'd likely use a context or store for this data
// For simplicity, we're importing directly from the Blog component
import { posts } from './Blog'; // Make sure to export posts from Blog.tsx

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  // Find the current post
  const post = posts.find(p => p.id === postId);
  
  // If post not found, redirect to blog index
  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    
    return <div className="container mx-auto px-5 py-20">Post not found. Redirecting...</div>;
  }
  
  // Find previous and next posts for navigation
  const currentIndex = posts.findIndex(p => p.id === postId);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{post.title} | Wax Eloquent</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8">
            <div className="mb-4">
              {post.tags.map((tag, index) => (
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
              <span>{formattedDate}</span>
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
              {/* Render HTML content safely */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <p className="mt-8 pt-4 border-t border-gray-200">
                <em>{post.author}</em><br />
                <em>Founder, Wax Eloquent</em>
              </p>
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
                  <Link to={`/blog/${prevPost.id}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
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
                  <Link to={`/blog/${nextPost.id}`} className="inline-flex items-center text-primary hover:text-secondary transition-colors">
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