import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPost1: React.FC = () => {
  // Post metadata
  const post = {
    title: "Welcome to Our Blog: Insights on Technical Writing and Communication",
    date: "2025-03-07",
    author: "Rebecca Traeger",
    categories: ["Communication", "Announcements"],
    excerpt: "Introducing our blog where we'll share insights, tips, and strategies for effective technical communication and content creation."
  };

  // Format date to a nice readable string
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
              {post.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-primary/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mr-2"
                >
                  {category}
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
            <article className="prose prose-lg max-w-none">
              <h1>Welcome to the Wax Eloquent Blog!</h1>

              <p>Communication is at the heart of every successful organization. However, in technical fields like software development, cloud infrastructure, and agile environments, communication can often be challenging. Technical concepts need to be explained clearly, complex ideas need to be made accessible, and messaging needs to resonate with diverse audiences.</p>

              <p>That's where we come in.</p>

              <h2>What You'll Find Here</h2>

              <p>Our blog is designed to be a valuable resource for technology professionals, agile teams, and organizations looking to elevate their communications. Here's what you can expect:</p>

              <h3>Practical Tips and Strategies</h3>

              <p>We'll share actionable advice for improving various types of technical content, from API documentation to executive presentations. Our focus will always be on practical strategies you can implement immediately.</p>

              <h3>Industry Insights</h3>

              <p>The world of technical communication is constantly evolving. We'll keep you updated on emerging trends, best practices, and innovative approaches to content creation and delivery.</p>

              <h3>Success Stories</h3>

              <p>Learn from real-world examples of effective technical communication. We'll break down what works, why it works, and how you can apply similar principles to your own content.</p>

              <h3>Tool Reviews and Recommendations</h3>

              <p>From documentation platforms to content management systems, we'll explore tools that can streamline your content creation process and enhance collaboration.</p>

              <h2>Why Effective Communication Matters in Technical Environments</h2>

              <p>In today's technology-driven world, the ability to communicate complex ideas clearly and persuasively is more valuable than ever. Here's why:</p>

              <ol>
                <li><strong>Bridge the Knowledge Gap</strong>: Technical experts often struggle to communicate with non-technical stakeholders. Effective communication bridges this gap, ensuring everyone understands the value and impact of technical work.</li>
                <li><strong>Drive Adoption</strong>: Whether you're launching a new product or implementing an internal tool, clear communication drives adoption and reduces resistance to change.</li>
                <li><strong>Build Trust and Credibility</strong>: Well-crafted content establishes your organization as trustworthy and credible, setting you apart from competitors.</li>
                <li><strong>Reduce Support Burden</strong>: Clear documentation and user guides reduce support tickets and empower users to solve problems independently.</li>
                <li><strong>Attract and Retain Talent</strong>: Strong communication within your organization improves collaboration, reduces friction, and contributes to a positive culture that attracts and retains top talent.</li>
              </ol>

              <h2>Join the Conversation</h2>

              <p>We believe that communication is a two-way street. We're not just here to share our expertise—we're here to learn from you as well. We encourage you to engage with our content, share your experiences, and let us know what topics you'd like us to explore in future posts.</p>

              <p>You can connect with us on <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>, or <a href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a> to stay updated on our latest posts and join the conversation.</p>

              <p>Thank you for joining us on this journey. We're excited to help you transform your technical communication and achieve your business objectives through the power of clear, compelling content.</p>

              <p>Here's to making the complex clear and the technical accessible!</p>

              <p><em>Rebecca Traeger</em><br />
              <em>Founder, Wax Eloquent</em></p>
            </article>
            
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <span className="text-xl font-bold">R</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-1">About {post.author}</h3>
                  <p className="text-gray-700">Founder of Wax Eloquent, helping technical professionals communicate with clarity and impact.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center">
              <div></div>
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              <Link to="/blog/technical-jargon-vs-clarity" className="inline-flex items-center text-primary hover:text-secondary transition-colors">
                Next Post
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost1;