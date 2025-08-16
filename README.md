# Blog Haerulr2 - Personal Blog & Tech Journal

A modern, fast, and beautifully designed personal blog built with Next.js, MDX, and Tailwind CSS. This project serves as the blog subdomain for [haerulr2.dev](https://haerulr2.dev).

## 🌟 About

**Developer:** Haerul Fajar  
**Main Domain:** [haerulr2.dev](https://haerulr2.dev)  
**Blog Domain:** [blog.haerulr2.dev](https://blog.haerulr2.dev)  
**Role:** Web Developer

This blog showcases technical articles, build logs, thought dumps, and digital debris from my development journey. Built with modern web technologies and designed for optimal reading experience.

## ✨ Features

- **🚀 Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **📝 MDX Support**: Write content with JSX in Markdown
- **🎨 Beautiful Design**: Consistent styling with Tailwind CSS
- **📱 Responsive**: Mobile-first design approach
- **⚡ Performance**: Static generation for fast loading
- **🔍 SEO Optimized**: Proper metadata and structured content
- **🌙 Dark Theme**: Easy on the eyes for long reading sessions
- **📊 Gray-matter**: Frontmatter parsing for blog metadata

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Content Management
- **MDX** - Markdown with JSX support
- **Gray-matter** - Frontmatter parsing
- **next-mdx-remote** - MDX rendering in Next.js

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds

## 📁 Project Structure

```
blog-haerulr2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Blog routes
│   │   │   └── [slug]/        # Dynamic blog post routes
│   │   ├── components/        # React components
│   │   │   ├── navbar.tsx     # Navigation component
│   │   │   ├── hero.tsx       # Hero section
│   │   │   ├── list-blog.tsx  # Blog list component
│   │   │   ├── card-blog.tsx  # Blog card component
│   │   │   └── mdx-renderer.tsx # MDX content renderer
│   │   ├── content/           # MDX blog posts
│   │   │   ├── welcome.mdx    # Welcome post
│   │   │   ├── about.mdx      # About post
│   │   │   └── getting-started.mdx # Getting started guide
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── mdx-components.tsx     # MDX component overrides
│   └── utils/                 # Utility functions
│       ├── mdx.ts             # MDX file processing
│       └── merge-class.ts     # CSS class merging utility
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haerulr2/blog-haerulr2.git
   cd blog-haerulr2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Creating Blog Posts

### 1. Add New MDX File
Create a new `.mdx` file in `src/app/content/` directory.

### 2. Add Frontmatter
```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-01-20"
image: "/path/to/image.jpg"
---
```

### 3. Write Content
Use standard Markdown syntax with MDX features:

```markdown
# Main Heading

## Sub Heading

- List item 1
- List item 2

**Bold text** and *italic text*

```jsx
function Example() {
  return <div>JSX in MDX!</div>
}
```

> Blockquote example
```

### 4. Automatic Updates
The blog list and routing will automatically update when you add new MDX files.

## 🎨 Customization

### Styling
- **Global Styles**: Modify `src/app/globals.css`
- **Component Styles**: Update individual component files
- **MDX Components**: Customize `src/mdx-components.tsx`

### Layout
- **Main Layout**: Edit `src/app/layout.tsx`
- **Blog Layout**: Modify `src/app/blog/[slug]/layout.tsx`
- **Components**: Update components in `src/app/components/`

### Content
- **Blog Posts**: Add/edit MDX files in `src/app/content/`
- **Images**: Place in `public/` directory
- **Metadata**: Update frontmatter in MDX files

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **AWS Amplify**: Connect repository and deploy
- **Self-hosted**: Build and serve static files

### Domain Configuration
- **Main Domain**: Point `haerulr2.dev` to main site
- **Blog Subdomain**: Point `blog.haerulr2.dev` to this project
- **SSL**: Enable HTTPS for both domains

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BLOG_URL=http://localhost:3000
```

### Production Environment
Set these in your hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://haerulr2.dev
NEXT_PUBLIC_BLOG_URL=https://blog.haerulr2.dev
```

## 📱 Responsive Design

The blog is designed to work seamlessly across all devices:

- **Mobile**: Optimized for small screens
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured experience on large screens

## 🎯 Performance Features

- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic bundle optimization
- **SEO**: Meta tags and structured data

## 🤝 Contributing

While this is a personal blog, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Personal Website**: [haerulr2.dev](https://haerulr2.dev)
- **Blog**: [blog.haerulr2.dev](https://blog.haerulr2.dev)
- **GitHub**: [github.com/haerulr2](https://github.com/haerulr2)

## 📞 Contact

- **Email**: [contact@haerulr2.dev](mailto:contact@haerulr2.dev)
- **GitHub**: [@haerulr2](https://github.com/haerulr2)

---

Built with ❤️ by Haerul Fajar using Next.js, React, and modern web technologies.
