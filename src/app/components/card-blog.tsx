'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/utils';

interface CardBlogProps {
  post: BlogPost;
}

export default function CardBlog({ post }: CardBlogProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className='bg-black/50 rounded-lg p-6 border border-neutral-500 relative cursor-pointer'>
        <Image
          src={post.image}
          loading='lazy'
          className='rounded-lg mb-2'
          alt={post.title}
          width={600}
          height={400}
        />
        <h3 className='text-lg font-bold mb-1'>{post.title}</h3>
        <p className='text-neutral-400 mb-2'>{post.description}</p>
        <div
          className='absolute bottom-2 right-2 text-sm text-white hover:text-neutral-400 transition-colors flex items-center gap-2'
        >
          Read more <ArrowRight className='w-4 h-4' />
        </div>
      </div>
    </Link>
  );
}
