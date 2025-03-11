// src/blog/posts/WelcomePost.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogHeader, BlogFooter, BlogContent, blogPosts } from '../BlogSystem';

const postData = blogPosts.find(post => post.id === 'welcome-to-our-blog')!;
const nextPost = blogPosts.find(post => post.id === 'technical-jargon-vs-clarity');

const WelcomePost: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{postData.title} | Wax Eloquent</title>
        <meta name="description" content={postData.excerpt} />
      </Helmet>
      
      <BlogHeader 
        title={postData.title}
        date={postData.date}
        author={postData.author}
        category={postData.category}
        tags={postData.tags}
      />
      
      <BlogContent>
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
      </BlogContent>
      
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <BlogFooter 
            author={postData.author}
            nextPost={nextPost}
          />
        </div>
      </div>
    </>
  );
};

export default WelcomePost;