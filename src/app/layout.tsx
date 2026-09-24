import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blog | Haerulr2',
  description: 'I build. I break. I document. Welcome to the corner of the web where code meets chaos and clarity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${dmSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className='antialiased'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
