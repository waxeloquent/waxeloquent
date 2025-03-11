// src/blog/templates/BlogPostTemplate.tsx
// COPY THIS FILE TO CREATE A NEW BLOG POST

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogHeader, BlogFooter, BlogContent, blogPosts } from '../BlogSystem';

// STEP 1: Update these constants for your new blog post
const POST_ID = 'your-post-id'; // Should match what's in BlogSystem.tsx
const PREV_POST_ID = 'technical-jargon-vs-clarity'; // Or null if this is the first post
const NEXT_POST_ID = null; // Or the ID of the next post if available

// Don't edit below this line unless you need custom formatting
const postData = blogPosts.find(post => post.id === POST_ID)!;
const prevPost = PREV_POST_ID ? blogPosts.find(post => post.id === PREV_POST_ID) : undefined;
const nextPost = NEXT_POST_ID ? blogPosts.find(post => post.id === NEXT_POST_ID) : undefined;

const BlogPostTemplate: React.FC = () => {
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
        {/* STEP 2: Add your blog post content here */}
        <h1>Your Blog Post Title</h1>

        <p>Your introduction paragraph goes here.</p>

        <h2>First Section Heading</h2>

        <p>Content for the first section...</p>

        <h3>Subsection</h3>

        <p>Content for the subsection...</p>

        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>

        <h2>Second Section Heading</h2>

        <p>Content for the second section...</p>

        <p>Concluding paragraph...</p>

        <p><em>Author's Name</em><br />
        <em>Position, Wax Eloquent</em></p>
      </BlogContent>
      
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <BlogFooter 
            author={postData.author}
            prevPost={prevPost}
            nextPost={nextPost}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPostTemplate;