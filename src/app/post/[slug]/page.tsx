import { getBlogPost, getBlogPosts } from '@/utils';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
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
      <article className='pb-20 pt-40'>
        <div className='container mx-auto px-4 md:px-8'>
          {/* Header */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='flex flex-col gap-1 mb-12'>
              <h1 className='text-3xl md:text-4xl font-bold text-start mb-4'>
                {post.title}
              </h1>
              <p className='text-neutral-400 mb-4 text-start text-lg'>
                {post.description}
              </p>
              <div className='flex items-center gap-4 text-sm text-neutral-500'>
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className='mb-8'>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
          
          {/* Content */}
          <div className='max-w-4xl mx-auto'>
            <div className='prose prose-invert prose-lg max-w-none'>
              <MDXRenderer source={post.content} />
            </div>
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