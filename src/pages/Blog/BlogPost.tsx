// src/pages/Blog/BlogPost.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../../utils/contentLoader';

interface PostData {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    categories: string[];
    image: string;
  };
  content: string;
  slug: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      
      try {
        setLoading(true);
        const postData = await getPostBySlug(slug);
        
        if (!postData) {
          setError('Post not found');
          return;
        }
        
        setPost(postData);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }
    
    loadPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading post...</p>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-heading mb-4">Error</h2>
        <p className="mb-8">{error || 'Post not found'}</p>
        <Link to="/blog" className="bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-secondary transition-all">
          Back to Blog
        </Link>
      </div>
    );
  }
  
  const { frontmatter, content } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <>
      {/* Hero Section with Featured Image */}
      <section className="pt-20">
        {frontmatter.image && (
          <div className="w-full h-96 relative">
            <img 
              src={frontmatter.image} 
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark bg-opacity-30"></div>
          </div>
        )}
        
        <div className={`container mx-auto px-5 ${frontmatter.image ? '-mt-32 relative z-10' : 'pt-12'}`}>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="mb-6">
              {frontmatter.categories && frontmatter.categories.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {frontmatter.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-semibold bg-primary bg-opacity-10 text-primary rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="font-heading text-3xl md:text-4xl mb-4">{frontmatter.title}</h1>
              
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <span>By {frontmatter.author || 'Rebecca Traeger'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md prose prose-lg prose-headings:font-heading prose-headings:text-dark prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary prose-a:transition-colors">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </section>
      
      {/* Author Bio */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto bg-light p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img 
                src="/images/profile/rebecca-traeger.jpg" 
                alt="Rebecca Traeger"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading text-xl mb-2">About the Author</h3>
                <h4 className="font-bold mb-4">Rebecca Traeger, Founder of Wax Eloquent</h4>
                <p className="text-gray-700 mb-4">
                  Rebecca is a seasoned content strategist and writer with over a decade of experience in technical communication and agile environments. She specializes in helping technology professionals and organizations communicate complex ideas with clarity and impact.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto bg-dark text-white p-8 md:p-12 rounded-lg text-center">
            <h2 className="font-heading text-2xl md:text-3xl mb-4">Need help with your content?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              From technical documentation to thought leadership content, we can help you communicate with clarity and impact.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}