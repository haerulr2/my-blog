import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

// ANCHOR: Global MDX components with consistent styling (synced with portfolio design system)
export const mdxComponents: MDXComponents = {
  // Headings with consistent typography
  h1: ({ children, ...props }) => (
    <h1 
      className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 mt-8 first:mt-0 tracking-tight" 
      {...props}
    >
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }) => (
    <h2 
      className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4 mt-8 first:mt-0 tracking-tight" 
      {...props}
    >
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }) => (
    <h3 
      className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] mb-3 mt-6 first:mt-0" 
      {...props}
    >
      {children}
    </h3>
  ),
  
  h4: ({ children, ...props }) => (
    <h4 
      className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] mb-3 mt-5 first:mt-0" 
      {...props}
    >
      {children}
    </h4>
  ),
  
  // Paragraphs with consistent spacing and color
  p: ({ children, ...props }) => (
    <p 
      className="text-[var(--color-text-secondary)] leading-relaxed mb-4 last:mb-0" 
      {...props}
    >
      {children}
    </p>
  ),
  
  // Lists with consistent styling
  ul: ({ children, ...props }) => (
    <ul 
      className="list-disc list-inside text-[var(--color-text-secondary)] mb-4 space-y-2 ml-4" 
      {...props}
    >
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }) => (
    <ol 
      className="list-decimal list-inside text-[var(--color-text-secondary)] mb-4 space-y-2 ml-4" 
      {...props}
    >
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }) => (
    <li 
      className="text-[var(--color-text-secondary)] leading-relaxed" 
      {...props}
    >
      {children}
    </li>
  ),
  
  // Links with hover effects
  a: ({ href, children, ...props }) => (
    <Link 
      href={href || '#'} 
      className="text-[var(--color-accent)] hover:opacity-80 underline transition-all duration-200" 
      {...props}
    >
      {children}
    </Link>
  ),
  
  // Blockquotes with styling
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 border-[var(--color-accent)] pl-4 py-2 my-6 bg-[var(--color-accent-light)] rounded-r-[var(--radius-md)] italic text-[var(--color-text-secondary)]" 
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
          className="bg-[var(--color-bg-secondary)] text-[var(--color-accent)] px-2 py-1 rounded-[var(--radius-md)] text-sm font-mono border border-[var(--color-border-light)]" 
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return (
      <code 
        className={`${className} block bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] p-4 rounded-[var(--radius-lg)] overflow-x-auto font-mono text-sm`} 
        {...props}
      >
        {children}
      </code>
    );
  },
  
  // Pre tags for code blocks
  pre: ({ children, ...props }) => (
    <pre 
      className="bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] p-4 rounded-[var(--radius-lg)] overflow-x-auto font-mono text-sm mb-4 border border-[var(--color-border)]" 
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
        className="w-full h-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]"
        {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    </div>
  ),
  
  // Tables with consistent styling
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table 
        className="w-full border-collapse border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden" 
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children, ...props }) => (
    <thead 
      className="bg-[var(--color-bg-secondary)]" 
      {...props}
    >
      {children}
    </thead>
  ),
  
  tbody: ({ children, ...props }) => (
    <tbody 
      className="bg-[var(--color-bg-primary)]" 
      {...props}
    >
      {children}
    </tbody>
  ),
  
  tr: ({ children, ...props }) => (
    <tr 
      className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200" 
      {...props}
    >
      {children}
    </tr>
  ),
  
  th: ({ children, ...props }) => (
    <th 
      className="px-4 py-3 text-left text-[var(--color-text-primary)] font-semibold border-r border-[var(--color-border)]" 
      {...props}
    >
      {children}
    </th>
  ),
  
  td: ({ children, ...props }) => (
    <td 
      className="px-4 py-3 text-[var(--color-text-secondary)] border-r border-[var(--color-border)]" 
      {...props}
    >
      {children}
    </td>
  ),
  
  // Horizontal rule
  hr: ({ ...props }) => (
    <hr 
      className="border-t border-[var(--color-border)] my-8" 
      {...props}
    />
  ),
  
  // Strong text
  strong: ({ children, ...props }) => (
    <strong 
      className="font-semibold text-[var(--color-text-primary)]" 
      {...props}
    >
      {children}
    </strong>
  ),
  
  // Emphasis text
  em: ({ children, ...props }) => (
    <em 
      className="italic text-[var(--color-text-secondary)]" 
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
