'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes('/post/')) {
      setIsBlog(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            {isBlog && (
              <>
              <Link
                href="/"
                aria-label="Back"
                className={cn(
                  'text-neutral-400 hover:text-white transition-colors p-1 focus:outline-none',
                  'flex items-center gap-1 cursor-pointer'
                )}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  Back
                </Link>
                <div className='h-7 w-px bg-neutral-400'></div>
              </>
            )}
            <Link
              href='https://haerulr2.dev'
              className='text-white font-bold text-2xl tracking-tighter'
            >
              Haerulr2<span className='text-neutral-400'>.</span>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='https://haerulr2.dev/#home'
              className='text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest'
            >
              Home
            </Link>
            <Link
              href='https://haerulr2.dev/#work'
              className='text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest'
            >
              Projects
            </Link>
            <Link
              href='https://haerulr2.dev/#about'
              className='text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest'
            >
              About
            </Link>
            <Link
              href='/'
              className='text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest'
            >
              Blog
            </Link>
          </nav>

          <div className='hidden md:block'>
            <button
              onClick={() =>
                (window.location.href = 'https://haerulr2.dev/#contact')
              }
              className={cn(
                'border border-white px-5 py-2 text-sm uppercase tracking-widest',
                'hover:bg-white hover:text-black transition-colors'
              )}
            >
              Contact
            </button>
          </div>

          <button
            className='md:hidden text-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-black'
        >
          <div className='container mx-auto px-4 py-8'>
            <nav className='flex flex-col space-y-6'>
              <Link
                href='#features'
                className='text-neutral-400 hover:text-white py-2 text-2xl font-light'
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href='#work'
                className='text-neutral-400 hover:text-white py-2 text-2xl font-light'
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href='#process'
                className='text-neutral-400 hover:text-white py-2 text-2xl font-light'
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                href='#pricing'
                className='text-neutral-400 hover:text-white py-2 text-2xl font-light'
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <button
                onClick={() =>
                  (window.location.href = 'https://haerulr2.dev/#contact')
                }
                className={cn(
                  'border border-white px-5 py-3 text-sm uppercase tracking-widest',
                  'hover:bg-white hover:text-black transition-colors w-full mt-4'
                )}
              >
                Contact
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
