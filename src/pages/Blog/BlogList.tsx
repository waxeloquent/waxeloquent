// src/pages/Blog/BlogList.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllPosts } from '../../utils/contentLoader';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    categories: string[];
    excerpt: string;
    image: string;
  };
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadPosts();
  }, []);
  
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
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4">Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p>No blog posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                  {post.frontmatter.image ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.frontmatter.image} 
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-primary/10 flex items-center justify-center">
                      <span className="text-5xl text-primary">📝</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex gap-4 text-sm text-gray-600 mb-3">
                      <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      {post.frontmatter.categories && post.frontmatter.categories.length > 0 && (
                        <span>{post.frontmatter.categories[0]}</span>
                      )}
                    </div>
                    
                    <h2 className="font-heading text-xl mb-3">
                      <Link to={`/blog/${post.slug}`} className="text-dark hover:text-primary transition-colors">
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-700 mb-4">{post.frontmatter.excerpt}</p>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}