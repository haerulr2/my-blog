import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] px-6 py-8 text-center text-xs text-[var(--color-text-tertiary)] md:flex-row md:px-12 md:text-left'>
      <div className='flex flex-col gap-1 sm:flex-row sm:gap-2'>
        <span>&copy; {new Date().getFullYear()} Haerul Fajar</span>
      </div>

      <a
        href='#'
        className='inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] no-underline'
        aria-label='Back to top'
      >
        <ArrowUp size={13} />
        Back to top
      </a>
    </footer>
  );
}
