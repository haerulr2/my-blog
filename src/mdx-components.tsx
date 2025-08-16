import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

// ANCHOR: Global MDX components with consistent styling
export const mdxComponents: MDXComponents = {
  // Headings with consistent typography
  h1: ({ children, ...props }) => (
    <h1 
      className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8 first:mt-0" 
      {...props}
    >
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }) => (
    <h2 
      className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8 first:mt-0" 
      {...props}
    >
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }) => (
    <h3 
      className="text-xl md:text-2xl font-semibold text-white mb-3 mt-6 first:mt-0" 
      {...props}
    >
      {children}
    </h3>
  ),
  
  h4: ({ children, ...props }) => (
    <h4 
      className="text-lg md:text-xl font-semibold text-white mb-3 mt-5 first:mt-0" 
      {...props}
    >
      {children}
    </h4>
  ),
  
  // Paragraphs with consistent spacing and color
  p: ({ children, ...props }) => (
    <p 
      className="text-neutral-300 leading-relaxed mb-4 last:mb-0" 
      {...props}
    >
      {children}
    </p>
  ),
  
  // Lists with consistent styling
  ul: ({ children, ...props }) => (
    <ul 
      className="list-disc list-inside text-neutral-300 mb-4 space-y-2 ml-4" 
      {...props}
    >
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }) => (
    <ol 
      className="list-decimal list-inside text-neutral-300 mb-4 space-y-2 ml-4" 
      {...props}
    >
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }) => (
    <li 
      className="text-neutral-300 leading-relaxed" 
      {...props}
    >
      {children}
    </li>
  ),
  
  // Links with hover effects
  a: ({ href, children, ...props }) => (
    <Link 
      href={href || '#'} 
      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200" 
      {...props}
    >
      {children}
    </Link>
  ),
  
  // Blockquotes with styling
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 border-neutral-500 pl-4 py-2 my-6 bg-neutral-800/50 rounded-r-lg italic text-neutral-300" 
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  // Code blocks with syntax highlighting styling
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code 
          className="bg-neutral-800 text-green-400 px-2 py-1 rounded text-sm font-mono" 
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return (
      <code 
        className={`${className} block bg-neutral-800 text-neutral-200 p-4 rounded-lg overflow-x-auto font-mono text-sm`} 
        {...props}
      >
        {children}
      </code>
    );
  },
  
  // Pre tags for code blocks
  pre: ({ children, ...props }) => (
    <pre 
      className="bg-neutral-800 text-neutral-200 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4" 
      {...props}
    >
      {children}
    </pre>
  ),
  
  // Images with Next.js optimization
  img: ({ src, alt, ...props }) => (
    <div className="my-6">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={props.width || 0}
        height={props.height || 0}
        sizes="100vw"
        className="w-full h-auto rounded-lg border border-neutral-600"
        {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    </div>
  ),
  
  // Tables with consistent styling
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table 
        className="w-full border-collapse border border-neutral-600 rounded-lg overflow-hidden" 
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children, ...props }) => (
    <thead 
      className="bg-neutral-800" 
      {...props}
    >
      {children}
    </thead>
  ),
  
  tbody: ({ children, ...props }) => (
    <tbody 
      className="bg-neutral-900" 
      {...props}
    >
      {children}
    </tbody>
  ),
  
  tr: ({ children, ...props }) => (
    <tr 
      className="border-t border-neutral-600 hover:bg-neutral-800 transition-colors duration-200" 
      {...props}
    >
      {children}
    </tr>
  ),
  
  th: ({ children, ...props }) => (
    <th 
      className="px-4 py-3 text-left text-white font-semibold border-r border-neutral-600" 
      {...props}
    >
      {children}
    </th>
  ),
  
  td: ({ children, ...props }) => (
    <td 
      className="px-4 py-3 text-neutral-300 border-r border-neutral-600" 
      {...props}
    >
      {children}
    </td>
  ),
  
  // Horizontal rule
  hr: ({ ...props }) => (
    <hr 
      className="border-t border-neutral-600 my-8" 
      {...props}
    />
  ),
  
  // Strong text
  strong: ({ children, ...props }) => (
    <strong 
      className="font-semibold text-white" 
      {...props}
    >
      {children}
    </strong>
  ),
  
  // Emphasis text
  em: ({ children, ...props }) => (
    <em 
      className="italic text-neutral-200" 
      {...props}
    >
      {children}
    </em>
  ),
} satisfies MDXComponents;

// ANCHOR: Export function for MDX provider
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
