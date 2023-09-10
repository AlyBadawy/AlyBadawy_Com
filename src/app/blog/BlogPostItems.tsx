import { allBlogPosts } from '@contentlayer/generated';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostItems() {
  return (
    <div>
      {allBlogPosts
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post) => (
          <article key={post._id} className='mb-4'>
            <Link href={post.fullSlug}>
              <h2 className=' font-semibold'>
                <LinkIcon className='inline-block' size={14} /> {post.title}
              </h2>
            </Link>
            {
              <p className='text-xs italic opacity-70 ml-4'>
                {post.date &&
                  new Date(post.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
              </p>
            }
            {post.description && (
              <p className='max-w-lg ml-4 text-sm'>{post.description}</p>
            )}
          </article>
        ))}
    </div>
  );
}
