// src/blog/BlogList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from './BlogSystem';

const BlogList: React.FC = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Helmet>
        <title>Blog | Wax Eloquent</title>
        <meta name="description" content="Thoughts on effective communication in technical and agile environments." />
      </Helmet>
      
      <section className="bg-dark text-white text-center py-16">
        <div className="container mx-auto px-5">
          <h1 className="font-heading text-4xl mb-3">Writing Insights</h1>
          <p className="text-lg">Thoughts on effective communication in technical and agile environments</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl text-primary">{post.thumbnailEmoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 className="font-heading text-xl mb-3">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-dark hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;