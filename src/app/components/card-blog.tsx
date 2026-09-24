"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/utils";

interface CardBlogProps {
  post: BlogPost;
}

export default function CardBlog({ post }: CardBlogProps) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-text-tertiary)] hover:shadow-md no-underline"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={post.image}
          loading="lazy"
          className="w-full aspect-3/2 object-cover transition-transform duration-300 group-hover:scale-105"
          alt={post.title}
          width={600}
          height={400}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5">
          {post.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)] mb-4 flex-1">
          {post.description}
        </p>
        <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-text-primary)]">
          Read more <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
