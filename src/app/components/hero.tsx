'use client';

export default function Hero() {
  return (
    <section className='border-b border-[var(--color-border)]'>
      <div className='mx-auto max-w-[1100px] px-6 py-14 md:px-12 md:py-24'>
        <div className='flex flex-col items-center text-center gap-6'>
          {/* Label */}
          <span className='inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-tertiary)]'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75'></span>
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green'></span>
            </span>
            Sharing what I learn
          </span>

          {/* Title */}
          <h1 className='text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl animate-fade-in-up'>
            A Dev&apos;s <span className='gradient-text'>Playground</span> in the Wild
          </h1>

          {/* Description */}
          <p className='max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] animate-fade-in-up delay-100'>
            I build. I break. I document.
            <br />
            Welcome to the corner of the web where code meets chaos and clarity.
          </p>

          {/* Terminal widget */}
          <div className='w-full max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden animate-fade-in-up delay-200'>
            <div className='flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-border)]'>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                <div className='w-3 h-3 bg-green-400 rounded-full'></div>
              </div>
              <span className='text-xs text-[var(--color-text-tertiary)]'>Terminal</span>
            </div>
            <div className='p-4 text-[var(--color-text-secondary)] font-mono text-sm space-y-1 text-start'>
              <p>~$ running on self-hosted node &amp; public chaos</p>
              <p>
                &gt;{' '}
                <span className='inline-block animate-pulse'>.</span>
                <span className='inline-block animate-pulse [animation-delay:0.2s]'>.</span>
                <span className='inline-block animate-pulse [animation-delay:0.4s]'>.</span>
                <span className='inline-block animate-pulse [animation-delay:0.6s]'>.</span>
                <span className='inline-block animate-pulse [animation-delay:0.8s]'>.</span>
              </p>
              <p>&gt; Haerul Fajar</p>
              <p>&gt; Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
