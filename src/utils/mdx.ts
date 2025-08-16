'use server';

import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

// ANCHOR: Blog post metadata interface
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content: string;
}

// ANCHOR: Get all blog posts metadata
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const contentDirectory = path.join(process.cwd(), 'src/app/content');
    
    if (!fs.existsSync(contentDirectory)) {
      console.warn('Content directory not found:', contentDirectory);
      return [];
    }
    
    const files = fs.readdirSync(contentDirectory);
    
    const posts = files
      .filter((file: string) => file.endsWith('.mdx'))
      .map((file: string) => {
        try {
          const filePath = path.join(contentDirectory, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContent);
          
          return {
            slug: file.replace('.mdx', ''),
            title: data.title || 'Untitled',
            description: data.description || 'No description available',
            date: data.date || new Date().toISOString(),
            image: data.image || '/globe.svg',
            content,
          };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    return [];
  }
}

// ANCHOR: Get single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/content', `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || 'No description available',
      date: data.date || new Date().toISOString(),
      image: data.image || '/globe.svg',
      content,
    };
  } catch (error) {
    console.error(`Error in getBlogPost for slug ${slug}:`, error);
    return null;
  }
}
