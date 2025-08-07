// import dynamic from 'next/dynamic';

import { Hero, ListBlog, Navbar } from '@components';

// Lazy load components
// const Navbar = dynamic(() => import('@/components/navbar'));

// LazyLoad wrapper component
// function LazyLoad({ children }: { children: React.ReactNode }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { rootMargin: '200px' }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return <div ref={ref}>{inView ? children : null}</div>;
// }

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <ListBlog />
    </main>
  );
}
