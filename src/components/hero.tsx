'use client';

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-[500px] mb-20 mt-40 px-15 relative'>
      <div className='px-50 h-20 border-x-1 border-neutral-500 border-dashed relative opacity-30'></div>
      <div className='flex flex-col items-center justify-center relative min-w-2/3'>
        {/* Divider */}
        <div className='absolute -top-[60px] left-0 w-0 h-[calc(100%+120px)] border-s-1 border-neutral-500 border-dashed opacity-30'></div>
        <div className='absolute -top-[60px] right-0 w-0 h-[calc(100%+120px)] border-s-1 border-neutral-500 border-dashed opacity-30'></div>
        <div className='absolute bottom-0 -left-[60px] h-0 w-[calc(100%+120px)] border-t-1 border-neutral-500 border-dashed opacity-30'></div>

        <div className='p-7 px-12 relative w-full'>
          {/* Divider */}
          <div className='absolute top-0 -left-[60px] h-full w-[calc(100%+120px)] border-t-1 border-neutral-500 border-dashed opacity-30'></div>
          <div className='absolute bottom-0 -left-[60px] h-0 w-[calc(100%+120px)] border-t-1 border-neutral-500 border-dashed opacity-30'></div>

          {/* Title */}
          <h1 className='text-6xl font-bold text-center'>
            A Dev&apos;s Playground in the Wild
          </h1>
        </div>

        <div className='flex p-10 w-full relative'>
          {/* Divider */}
          <div className='absolute bottom-0 -left-[60px] h-0 w-[calc(100%+120px)] border-t-1 border-neutral-500 border-dashed opacity-30'></div>

          {/* Description */}
          <p className='text-xl m-auto text-neutral-400'>
            I build. I break. I document.
            <br />
            Welcome to the corner of the web where code meets chaos and clarity.
          </p>
        </div>

        <div className='p-5 md:px-8 relative'>
          {/* Divider */}
          <div className='absolute top-0 left-0 w-0 h-[calc(100%+60px)] border-s-1 border-neutral-500 border-dashed opacity-30'></div>
          <div className='absolute top-0 right-0 w-0 h-[calc(100%+60px)] border-s-1 border-neutral-500 border-dashed opacity-30'></div>

          {/* Terminal command */}
          <div className='bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 pb-4 max-w-md mx-auto'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <span className='text-sm text-neutral-500'>Terminal</span>
            </div>
            <div className='mt-3 text-neutral-300 font-mono text-sm px-3'>
              ~$ running on self-hosted node & public chaos
              <br />
              {/* Animated loading dots */}
              <span>
                &gt; <span className='inline-block animate-pulse'>.</span>
                <span className='inline-block animate-pulse [animation-delay:0.2s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:0.4s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:0.6s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:0.8s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:1s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:1.2s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:1.4s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:1.6s]'>
                  .
                </span>
                <span className='inline-block animate-pulse [animation-delay:1.8s]'>
                  .
                </span>
              </span>
              <br />
              &gt; Haerul Fajar
              <br />
              &gt; Web Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
