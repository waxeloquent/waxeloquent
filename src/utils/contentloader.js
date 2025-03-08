// src/utils/contentLoader.ts - Place this file in the src/utils folder

import matter from 'gray-matter';

export async function getPostBySlug(slug: string) {
  try {
    // Use PUBLIC_URL for GitHub Pages compatibility
    const response = await fetch(`${process.env.PUBLIC_URL}/content/blog/${slug}.md`);
    const markdown = await response.text();
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

export async function getAllPosts() {
  // In a real implementation, you'd need to handle this dynamically
  // For now, we can use a list of known posts
  const slugs = ['welcome-to-our-blog', 'technical-jargon-vs-clarity'];
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );
  
  // Sort posts by date
  return posts
    .filter(Boolean)
    .sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
}

// Similar functions for services and portfolio items could be added here