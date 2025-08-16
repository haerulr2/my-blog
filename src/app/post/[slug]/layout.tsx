import { Footer, Navbar } from '@/components';

// ANCHOR: Blog detail layout component
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
