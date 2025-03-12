// src/pages/Blog.tsx - Updated Blog Component
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Blog post data - this is your centralized blog post management system
// Add new posts here and they'll automatically appear in the blog list
const posts = [
  {
    id: 'welcome-to-our-blog',
    title: 'Welcome to Our Blog: Insights on Technical Writing and Communication',
    date: '2025-03-07',
    category: 'Communication',
    tags: ['Communication', 'Announcements'],
    excerpt: 'Introducing our blog where we\'ll share insights, tips, and strategies for effective technical communication and content creation.',
    emoji: '📝',
    author: 'Rebecca Traeger',
    content: `
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
    `
  },
  {
    id: 'technical-jargon-vs-clarity',
    title: 'Technical Jargon vs. Clarity: Finding the Right Balance',
    date: '2025-02-15',
    category: 'Technical Writing',
    tags: ['Technical Writing', 'Best Practices'],
    excerpt: 'How to communicate complex technical concepts without losing your audience in unnecessary jargon.',
    emoji: '🔍',
    author: 'Rebecca Traeger',
    content: `
      <h1>Technical Jargon vs. Clarity: Finding the Right Balance</h1>

      <p>In the world of technical communication, one of the most persistent challenges is finding the right balance between technical precision and general clarity. Use too much jargon, and you risk alienating part of your audience. Oversimplify, and you might lose credibility with technical experts or fail to convey critical details.</p>

      <p>So how do you navigate this delicate balance? Let's explore strategies for striking the right balance in different contexts.</p>

      <h2>Understanding Your Audience</h2>

      <p>The first and most important step is to clearly define your audience. Ask yourself:</p>

      <ul>
        <li>What is their level of technical knowledge?</li>
        <li>What terminology are they already familiar with?</li>
        <li>What are they trying to accomplish?</li>
        <li>What prior knowledge can you assume?</li>
      </ul>

      <p>Different audiences require different approaches:</p>

      <h3>Technical Experts</h3>

      <p>When writing for developers, engineers, or other technical specialists:</p>

      <ul>
        <li>Technical terminology is expected and appreciated</li>
        <li>Precision is crucial</li>
        <li>Unnecessary explanations of industry-standard concepts can be frustrating</li>
      </ul>

      <h3>Mixed Technical and Non-Technical Audience</h3>

      <p>When writing for a mixed audience (e.g., product managers, executives with technical background):</p>

      <ul>
        <li>Define specialized terms on first use</li>
        <li>Include both technical details and business context</li>
        <li>Use visual aids to explain complex concepts</li>
      </ul>

      <h3>Non-Technical Stakeholders</h3>

      <p>When writing for business users, customers, or executives without technical backgrounds:</p>

      <ul>
        <li>Focus on benefits and outcomes rather than technical implementation</li>
        <li>Use analogies and metaphors to explain complex concepts</li>
        <li>Minimize jargon or explain it thoroughly when used</li>
      </ul>

      <h2>Conclusion: Clarity as a Competitive Advantage</h2>

      <p>In an increasingly complex technical landscape, clarity isn't just about good writing—it's a competitive advantage. Organizations that can explain their technology clearly stand out from those that hide behind unnecessary jargon.</p>

      <p>Remember that the goal of technical communication isn't to showcase your expertise or to use impressive terminology. It's to transfer understanding from one mind to another as efficiently as possible.</p>
    `
  },
  // You can add more blog posts here following the same structure
  // Example of how to add a new post:
  /*
  {
    id: 'your-post-slug',
    title: 'Your Post Title',
    date: '2025-04-15',
    category: 'Your Category',
    tags: ['Tag1', 'Tag2'],
    excerpt: 'Brief description of your post',
    emoji: '🚀',
    author: 'Author Name',
    content: `
      <h1>Your Post Title</h1>
      <p>Your content here...</p>
    `
  }
  */
];

// Blog page component (list of blog posts)
const Blog = () => {
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
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl text-primary">{post.emoji}</span>
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

export default Blog;