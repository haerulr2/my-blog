import { Footer, Hero, ListBlog, Navbar } from '@/components';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Navbar />
      <Hero />
      <ListBlog />
      <Footer />
    </main>
  );
}
