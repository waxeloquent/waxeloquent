// src/utils/contentLoader.ts
import matter from 'gray-matter';

// Function to get a post by its slug
export async function getPostBySlug(slug: string) {
  try {
    // Fetch the markdown file
    const response = await fetch(`${process.env.PUBLIC_URL}/content/blog/${slug}.md`);
    
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
  // For now, we'll use a list of known slugs
  // In a real implementation, you'd want to fetch this dynamically
  const slugs = ['welcome-to-our-blog', 'technical-jargon-vs-clarity'];
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );
  
  // Filter out any null posts and sort by date (most recent first)
  return posts
    .filter(Boolean)
    .sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
}