import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostFrontmatter = {
  title: string;
  slug: string;
  description: string;
  date: string;
  image?: string;
};

export type Post = PostFrontmatter & { content: string };

/**
 * ANCHOR
 * getAllPosts
 * Reads all .mdx files in /posts, returns metadata + content, newest first.
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [] as Post[];
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx'));

  const posts: Post[] = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const fm = data as Partial<PostFrontmatter>;
    const slug = fileName.replace(/\.mdx$/, '');
    return {
      title: fm.title ?? slug,
      slug,
      description: fm.description ?? '',
      date: fm.date ?? new Date().toISOString(),
      image: fm.image,
      content,
    };
  });

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/**
 * ANCHOR
 * getPostBySlug
 * Reads single post by slug.
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const fm = data as Partial<PostFrontmatter>;
  return {
    title: fm.title ?? slug,
    slug: fm.slug ?? slug,
    description: fm.description ?? '',
    date: fm.date ?? new Date().toISOString(),
    image: fm.image,
    content,
  };
}
