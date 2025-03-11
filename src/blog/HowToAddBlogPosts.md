# How to Add Blog Posts to Wax Eloquent

This guide explains how to add new blog posts to your Wax Eloquent website in 3 simple steps.

## Step 1: Create a New Blog Post Component

1. Copy the template file `src/pages/BlogPostTemplate.tsx` to a new file named `src/pages/BlogPost3.tsx` 
   (or whatever the next number in sequence would be)

2. Update the metadata at the top of the file:
   - title - The title of your post
   - date - The publication date (YYYY-MM-DD format)
   - author - The author's name
   - categories - An array of category names
   - excerpt - A brief description for SEO and blog listings
   - prevPostId - The ID of the previous post (for navigation)
   - nextPostId - The ID of the next post, or null if this is the newest

3. Replace the placeholder content in the blog post with your actual content
   - Your content should be placed between the comments `YOUR BLOG POST CONTENT STARTS HERE` and `YOUR BLOG POST CONTENT ENDS HERE`
   - Use Markdown-style formatting (h1, h2, h3, p, ul, li, etc.)

## Step 2: Add the Blog Post to App.tsx

1. Open `src/App.tsx`

2. Import your new blog post component at the top of the file:
   ```tsx
   import BlogPost3 from './pages/BlogPost3';
   ```

3. Add a new route in the Routes component:
   ```tsx
   <Route path="/blog/your-new-post-id" element={<BlogPost3 />} />
   ```
   
   Make sure the path matches the ID you'll use in the Blog.tsx file.

## Step 3: Add the Blog Post to the Blog Listing

1. Open `src/pages/Blog.tsx`

2. Add your new post to the `posts` array at the top of the file:
   ```tsx
   {
     id: 'your-new-post-id', // This should match the route path in App.tsx
     title: 'Your Blog Post Title',
     date: '2025-04-15',
     category: 'Category 1',
     excerpt: 'Brief description of your blog post that will appear in listings.',
     emoji: '📊', // Choose an emoji that represents your post
   },
   ```

3. Save all files and test locally:
   ```bash
   npm start
   ```

4. Once everything looks good, deploy to GitHub Pages:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Post Title"
   npm run deploy
   ```

## Blog Post Writing Tips

- **Keep it scannable**: Use clear headings, short paragraphs, and bullet points
- **Include visuals**: Add diagrams, screenshots, or other visuals to illustrate complex concepts
- **Be concise**: Aim for clarity and brevity
- **Consider SEO**: Include relevant keywords naturally in your content
- **Add a call to action**: Encourage comments, shares, or other engagement

## Example

Here's what the bare minimum changes would look like:

1. `src/pages/BlogPost3.tsx` - New file based on template
2. In `App.tsx`:
   ```tsx
   import BlogPost3 from './pages/BlogPost3';
   
   // In the Routes section:
   <Route path="/blog/effective-documentation" element={<BlogPost3 />} />
   ```
3. In `Blog.tsx`:
   ```tsx
   {
     id: 'effective-documentation',
     title: 'Effective Documentation Strategies for Agile Teams',
     date: '2025-04-15',
     category: 'Documentation',
     excerpt: 'Learn how to create and maintain effective documentation that works with agile methodologies.',
     emoji: '📝',
   },
   ```

After deployment, your new blog post will be available at:
`https://waxeloquent.github.io/waxeloquent/#/blog/effective-documentation`