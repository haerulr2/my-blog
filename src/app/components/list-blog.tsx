import CardBlog from './card-blog';
import { getBlogPosts } from '@/utils';

// ANCHOR: Blog list component that displays blog posts in a card layout
export default async function ListBlog() {
  const posts = await getBlogPosts();
  
  return (
    <section id='blog' className='border-b border-[var(--color-border)]'>
      <div className='mx-auto max-w-[1100px] px-6 py-16 md:px-12 md:py-20'>
        <div className='mb-10'>
          <span className='mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)]'>
            Blog
          </span>
          <h2 className='text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl mb-2'>
            Build Logs, Thought Dumps, & Digital Debris.
          </h2>
          <p className='text-[var(--color-text-secondary)] leading-relaxed max-w-xl'>
            Unfiltered thoughts, build logs, and dev breakdowns. Straight from
            my terminal to yours.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post, index) => (
            <CardBlog key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
