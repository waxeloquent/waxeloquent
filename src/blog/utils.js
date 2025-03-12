// File: src/blog/utils.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

// Directory where blog posts are stored
const postsDirectory = path.join(process.cwd(), 'src/blog/content');

// Get all blog post slugs
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''));
}

// Get blog post metadata by slug
export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  
  // Format the date if it exists
  const formattedDate = data.date 
    ? format(new Date(data.date), 'MMMM d, yyyy')
    : null;
  
  return {
    slug,
    content,
    ...data,
    formattedDate
  };
}

// Get all blog posts with metadata
export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => getPostData(slug))
    // Sort posts by date in descending order
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  
  return posts;
}