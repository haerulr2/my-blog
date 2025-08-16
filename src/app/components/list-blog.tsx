import CardBlog from './card-blog';
import { getBlogPosts } from '@/utils';

// ANCHOR: Blog list component that displays blog posts in a card layout
export default async function ListBlog() {
  const posts = await getBlogPosts();
  
  return (
    <section id='blog' className='py-20'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex flex-col gap-1 min-w-1/2 max-w-2/3 mb-10 mx-auto'>
          <h2 className='text-xl font-bold text-start'>
            Build Logs, Thought Dumps, & Digital Debris.
          </h2>
          <p className='text-neutral-400 mb-4 text-start'>
            Unfiltered thoughts, build logs, and dev breakdowns. Straight from
            my terminal to yours.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <CardBlog key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
 