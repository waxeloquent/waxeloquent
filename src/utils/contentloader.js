// src/utils/contentLoader.ts
import matter from 'gray-matter';

// Function to get the base URL for GitHub Pages or Netlify
const getBaseUrl = () => {
  // When deployed to GitHub Pages or Netlify, this will handle the path correctly
  return '';
};

// Function to get a post by its slug
export async function getPostBySlug(slug: string) {
  try {
    // Use the correct path for content
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/content/blog/${slug}.md`);
    
    if (!response.ok) {
      console.error(`Failed to fetch post ${slug}: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const markdown = await response.text();
    
    // Parse front matter and content
    const { data, content } = matter(markdown);
    
    return {
      frontmatter: data,
      content,
      slug
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Function to get all posts (for the blog listing page)
export async function getAllPosts() {
  try {
    // Fetch the index of all blog posts
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/content/blog/index.json`);
    
    if (!response.ok) {
      // Fall back to hard-coded list if no index file
      return getFallbackPosts();
    }
    
    const index = await response.json();
    
    const posts = await Promise.all(
      index.posts.map(async (post: { slug: string }) => {
        const postData = await getPostBySlug(post.slug);
        return postData;
      })
    );
    
    // Filter out any null posts and sort by date (most recent first)
    return posts
      .filter(Boolean)
      .sort((a, b) => 
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      );
  } catch (error) {
    console.error('Error fetching blog index:', error);
    // Fall back to hard-coded list if there's an error
    return getFallbackPosts();
  }
}

// Fallback function to return hardcoded posts
async function getFallbackPosts() {
  const slugs = ['welcome-to-our-blog', 'technical-jargon-vs-clarity'];
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );
  
  return posts
    .filter(Boolean)
    .sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
}