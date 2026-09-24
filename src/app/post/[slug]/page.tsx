import { getBlogPost, getBlogPosts } from '@/utils';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import MDXRenderer from '@/app/components/mdx-renderer';

// ANCHOR: Blog detail page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className='relative'>
      <article>
        <div className='mx-auto max-w-[1100px] px-6 py-16 md:px-12 md:py-20'>
          {/* Back button */}
          <div className='max-w-3xl mx-auto mb-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] no-underline'
            >
              <ArrowLeft size={13} />
              Back to blog
            </Link>
          </div>

          {/* Header */}
          <div className='max-w-3xl mx-auto mb-12'>
            <div className='flex flex-col gap-3 mb-8'>
              <div className='flex items-center gap-3 text-xs font-medium text-[var(--color-text-tertiary)]'>
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              </div>
              <h1 className='text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl md:text-4xl'>
                {post.title}
              </h1>
              <p className='text-[var(--color-text-secondary)] leading-relaxed text-base'>
                {post.description}
              </p>
            </div>
            
            {/* Featured Image */}
            <div className='mb-8 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]'>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
          
          {/* Content */}
          <div className='max-w-3xl mx-auto'>
            <MDXRenderer source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}

// ANCHOR: Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
