import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CardBlog() {
  return (
    <div className='bg-black/50 rounded-lg p-6 border border-neutral-500 relative'>
      <Image
        src='/ver1cel.svg'
        loading='lazy'
        onError={e => {
          e.currentTarget.src = '/globe.svg';
        }}
        className='rounded-lg mb-2'
        alt='Blog Post 1'
        width={600}
        height={400}
      />
      <h3 className='text-lg font-bold mb-1'>Blog Post 1</h3>
      <p className='text-neutral-400 mb-2'>
        This is a description of the blog postThis is a description of
      </p>
      <a
        href='/blog/1'
        className='absolute bottom-2 right-2 text-sm text-white hover:text-neutral-400 transition-colors flex items-center gap-2'
      >
        Read more <ArrowRight className='w-4 h-4' />
      </a>
    </div>
  );
}
