import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/mdx-components';

interface MDXRendererProps {
  source: string;
}

// ANCHOR: MDX renderer component with custom styling
export default function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div className="mdx-content">
      <MDXRemote 
        source={source} 
        components={mdxComponents}
      />
    </div>
  );
}
