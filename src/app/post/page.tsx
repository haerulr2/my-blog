import { notFound } from 'next/navigation';

// ANCHOR: Direct /post should 404
export default function PostIndex() {
  notFound();
}
