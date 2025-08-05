import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="relative">
      <div className="flex flex-col items-center justify-center h-[500px] my-20 px-15">
        <div className="w-100 h-20 bg-red-500"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-7 border-1 border-b-0 border-red-500 border-dashed">
            <h1 className="text-6xl font-bold">A Dev&apos;s Playground in the Wild</h1>
          </div>
          <div className="flex p-10 border-1 border-red-500 border-dashed w-full">
            <p className="text-xl m-auto">
              I build. I break. I document.
              <br />
              Welcome to the corner of the web where code meets chaos — and clarity.
            </p>
          </div>
          <div className="p-5 border-1 border-t-0 border-red-500 border-dashed">
            {/* ANCHOR: Terminal command */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 pb-4 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-neutral-500">Terminal</span>
              </div>
              <div className="mt-3 text-neutral-300 font-mono text-sm px-3">
                ~$ running on self-hosted node & public chaos
                <br />
                {/* ANCHOR: Animated loading dots */}
                <span>
                  &gt; <span className="inline-block animate-pulse">.</span>
                  <span className="inline-block animate-pulse [animation-delay:0.2s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:0.4s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:0.6s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:0.8s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:1s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:1.2s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:1.4s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:1.6s]">.</span>
                  <span className="inline-block animate-pulse [animation-delay:1.8s]">.</span>
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
    </main>
  );
}

// <div className="relative z-10 max-w-4xl mx-auto">
//         <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent">
//           A Dev&apos;s Playground
//           <span className="block text-4xl md:text-5xl text-neutral-400 font-normal mt-2">
//             in the Wild
//           </span>
//         </h1>

//         <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-12">
//           I build. I break. I document.
//           <br />
//           Welcome to the corner of the web where code meets chaos — and clarity.
//         </p>

//         {/* ANCHOR: Action buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//           <a
//             href="/blog"
//             className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-neutral-200 transition-all duration-200 transform hover:scale-105"
//           >
//             Read the Blog
//           </a>
//           <a
//             href="/about"
//             className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105"
//           >
//             About Me
//           </a>
//         </div>

//         {/* ANCHOR: Terminal command */}
//         <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 max-w-md mx-auto">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//             <span className="text-sm text-neutral-500">Terminal</span>
//           </div>
//           <div className="mt-3 text-neutral-300 font-mono text-sm">
//             ~ running on self-hosted node & public chaos
//           </div>
//         </div>
//       </div>