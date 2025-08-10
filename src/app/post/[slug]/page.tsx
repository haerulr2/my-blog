import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';

// ANCHOR: Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

// ANCHOR: Post detail page using MDXRemote RSC
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, description, date, image, content } = post;

  return (
    <main className='mx-auto max-w-3xl px-6 py-12'>
      <header className='mb-8'>
        <h1 className='mb-2 text-4xl font-bold'>{title}</h1>
        <p className='text-neutral-400'>
          {new Date(date).toLocaleDateString()}
        </p>
        {description ? (
          <p className='mt-3 text-neutral-300'>{description}</p>
        ) : null}
      </header>
      <article className='prose prose-invert max-w-none'>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
