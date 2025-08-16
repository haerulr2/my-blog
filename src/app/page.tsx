import { Footer, Hero, ListBlog, Navbar } from '@/components';

export default function Home() {
  return (
    <main className='relative'>
    <Navbar />
    <Hero />
    <ListBlog />
    <Footer />
  </main>
  );
}
