import { LinkIcon } from "lucide-react";
import Link from "next/link";

type BlogArticleProps = {
  post: {
    _id: string;
    title: string;
    date?: string;
    description?: string;
    fullSlug: string;
  };
  index: number;
};

export const BlogArticle = ({ post, index }: BlogArticleProps) => {
  return (
    <article
      key={post._id}
      className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
    >
      <div>
        <Link href={post.fullSlug}>
          <h2 className="text-lg font-semibold text-cyan-500 hover:underline flex items-center gap-2">
            {post.title}
          </h2>
        </Link>
        {post.date && (
          <p className="text-xs italic opacity-70 mt-1">
            {new Date(post.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
        {post.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
            {post.description}
          </p>
        )}
      </div>

      <div className="mt-4">
        <Link
          href={post.fullSlug}
          className="inline-block text-sm font-medium text-primary hover:underline"
        >
          <span>
            <LinkIcon size={16} className="text-gray-400" /> Read More →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogArticle;
