// src/pages/Blog/BlogPost.tsx
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../../utils/contentLoader';

interface PostData {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    categories: string[];
    excerpt: string;
    image: string;
  };
  content: string;
}

export default function BlogPost() {
  // Get slug from URL parameters
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Log the slug for debugging
  console.log('Current slug:', slug);
  
  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        console.error('No slug provided');
        setError('Post not found');
        setLoading(false);
        return;
      }
      
      try {
        console.log('Fetching post with slug:', slug);
        const postData = await getPostBySlug(slug);
        
        if (!postData) {
          console.error('Post not found for slug:', slug);
          setError('Post not found');
          // After a short delay, redirect to the blog list
          setTimeout(() => navigate('/blog'), 3000);
        } else {
          console.log('Post loaded successfully:', postData);
          setPost(postData as unknown as PostData);
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }
    
    loadPost();
  }, [slug, navigate]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-5 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading post...</p>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="container mx-auto px-5 py-20 text-center">
        <h2 className="font-heading text-2xl mb-4">Error</h2>
        <p>{error || 'Post not found'}</p>
        <p className="mt-4">Redirecting to blog list...</p>
      </div>
    );
  }
  
  const { title, date, author, categories, image } = post.frontmatter;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <>
      <Helmet>
        <title>{title} | Wax Eloquent</title>
        <meta name="description" content={post.frontmatter.excerpt} />
      </Helmet>
      
      {/* Hero Section with Featured Image */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8">
            {categories && categories.length > 0 && (
              <div className="mb-4">
                {categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-primary/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h1>
            <div className="flex items-center justify-center text-sm opacity-90">
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <span>By {author}</span>
            </div>
          </div>
          
          {image && (
            <div className="max-w-4xl mx-auto">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
            
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

            <div className="mt-12">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}