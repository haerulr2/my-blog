'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function Navbar() {
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const { theme, setTheme } = useTheme();

  useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/post/')) {
      setIsBlog(true);
    }
  });

  const links = [
    { href: 'https://haerulr2.dev/#about', label: 'about' },
    { href: 'https://haerulr2.dev/#projects', label: 'projects' },
    { href: 'https://haerulr2.dev/#contact', label: 'contact' },
    { href: '/', label: 'blog' },
  ];

  return (
    <nav className='sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-glass)] backdrop-blur-xl transition-colors'>
      <div className='mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 md:px-12'>
        {/* Logo with optional back button */}
        <div className='flex items-center gap-3'>
          {isBlog && (
            <>
              <Link
                href='/'
                aria-label='Back'
                className='flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] no-underline'
              >
                <svg width='18' height='18' fill='none' viewBox='0 0 24 24'>
                  <path d='M15 19l-7-7 7-7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
                Back
              </Link>
              <div className='h-5 w-px bg-[var(--color-border)]'></div>
            </>
          )}
          <Link
            href='https://haerulr2.dev'
            className='text-base font-semibold tracking-tight text-[var(--color-text-primary)] no-underline transition-opacity hover:opacity-80'
          >
            haerulr2<span className='text-[var(--color-accent)]'>.dev</span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className='hidden items-center gap-7 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-text-primary)] no-underline'
            >
              {link.label}
            </Link>
          ))}

          <a
            href='https://github.com/haerulr2'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] no-underline'
          >
            <FileText size={13} />
            CV / Resume
          </a>

          {/* Theme toggle */}
          {mounted ? (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] transition-all duration-150 hover:border-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] cursor-pointer'
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          ) : (
            <div className='h-9 w-9 rounded-[var(--radius-md)] border border-transparent' />
          )}
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className='flex items-center gap-2 md:hidden'>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] cursor-pointer'
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            className='flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-secondary)] cursor-pointer bg-transparent border-none'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle navigation menu'
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          id='mobile-menu'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-6 py-4 space-y-2 md:hidden'
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] no-underline'
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href='https://github.com/haerulr2'
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setIsOpen(false)}
            className='inline-flex items-center gap-2 py-2 text-sm font-medium text-[var(--color-accent)] no-underline'
          >
            <FileText size={15} />
            CV / Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}
