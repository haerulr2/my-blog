// ANCHOR: Blog post data for the list blog component

export interface BlogPost {
  title: string;
  description: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'How I Deployed an API on a 10-Year-Old Laptop',
    description:
      'Turning an old Celeron laptop into a self-hosted backend with domain, tunnel, and zero port forwarding.',
    href: '/blog/self-hosted-api-on-purba',
  },
  {
    title: 'The Anatomy of My DevConnect UI',
    description:
      'Breaking down the decisions behind typography, spacing, and interaction in my latest frontend dashboard.',
    href: '/blog/devconnect-ui-breakdown',
  },
  {
    title: 'I Let My Blog Automate Itself with n8n',
    description:
      'How I built a system that monitors my Git commits, pings me on Telegram, and publishes blog drafts.',
    href: '/blog/blog-automation-n8n',
  },
];
