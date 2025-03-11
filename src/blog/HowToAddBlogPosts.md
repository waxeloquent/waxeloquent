# How to Add Blog Posts to Wax Eloquent

This guide explains how to add new blog posts to your Wax Eloquent website.

## Overview of the Blog System

The blog system uses a component-based approach where each blog post is its own React component. This approach works reliably with GitHub Pages and makes it easy to maintain consistency across all blog posts.

## Adding a New Blog Post

Follow these steps to add a new blog post:

### Step 1: Update the Blog Registry

1. Open `src/blog/BlogSystem.tsx`
2. Add your new blog post to the `blogPosts` array:

```typescript
export const blogPosts = [
  // Existing blog posts...
  
  {
    id: 'your-new-post-slug',
    title: 'Your New Post Title',
    date: '2025-04-15', // Use YYYY-MM-DD format
    author: 'Rebecca Traeger',
    category: 'Content Strategy',
    tags: ['Content Strategy', 'Writing Tips'],
    excerpt: 'A brief description of your post that will appear in the blog list.',
    thumbnailEmoji: '📊', // Choose an emoji that represents your post
  },
];
```

### Step 2: Create the Blog Post Component

1. Copy the template file from `src/blog/templates/BlogPostTemplate.tsx`
2. Create a new file in `src/blog/posts/` with a descriptive name (e.g., `ContentStrategyPost.tsx`)
3. Edit the file according to the instructions in the template:
   - Update the POST_ID constant to match the id you used in Step 1
   - Update the PREV_POST_ID to link to the previously published post
   - Add your blog post content in the BlogContent section

Here's an example of what your new post file should look like:

```typescript
// src/blog/posts/ContentStrategyPost.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogHeader, BlogFooter, BlogContent, blogPosts } from '../BlogSystem';

const POST_ID = 'your-new-post-slug';
const PREV_POST_ID = 'technical-jargon-vs-clarity';
const NEXT_POST_ID = null;

const postData = blogPosts.find(post => post.id === POST_ID)!;
const prevPost = PREV_POST_ID ? blogPosts.find(post => post.id === PREV_POST_ID) : undefined;
const nextPost = NEXT_POST_ID ? blogPosts.find(post => post.id === NEXT_POST_ID) : undefined;

const ContentStrategyPost: React.FC = () => {
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
        <h1>Your Blog Post Title</h1>
        
        <p>Your blog content goes here...</p>
        
        {/* Rest of your blog content... */}
        
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

export default ContentStrategyPost;
```

### Step 3: Add the Route to App.tsx

1. Open `src/App.tsx`
2. Import your new blog post component:

```typescript
import ContentStrategyPost from './blog/posts/ContentStrategyPost';
```

3. Add a new route inside the Routes component:

```typescript
<Route path="blog/your-new-post-slug" element={<ContentStrategyPost />} />
```

### Step 4: Deploy Your Changes

1. Commit your changes to Git:

```bash
git add .
git commit -m "Add new blog post: Your Post Title"
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

## Blog Post Writing Guidelines

### Formatting

- Use heading levels appropriately (h1 for the title, h2 for main sections, h3 for subsections)
- Use short paragraphs for better readability
- Use lists and code blocks to break up text and highlight important points
- Include relevant links to other resources

### Content Structure

A good blog post typically includes:

1. **Introduction**: What the post is about and why it matters
2. **Main Content**: Organized into logical sections with clear headings
3. **Conclusion**: Summary of key points and next steps or call to action

### Images

If you want to include images in your blog posts:

1. Add the image to the `public/images/blog/` directory
2. Reference the image in your post using:

```jsx
<img src="/images/blog/your-image.jpg" alt="Descriptive alt text" className="w-full h-auto rounded-lg my-6" />
```

## Updating Existing Blog Posts

To update an existing blog post:

1. Find the post component in `src/blog/posts/`
2. Make your changes to the content
3. Deploy the changes as described above

## Need Help?

If you have any questions about adding or editing blog posts, refer to the example posts in the `src/blog/posts/` directory or contact the website administrator.