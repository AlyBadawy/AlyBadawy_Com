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
      className="bg-zinc-950 border-2 border-cyan-400/20 hover:border-fuchsia-400/40 rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
    >
      <div>
        <Link href={post.fullSlug}>
          <h2 className="text-2xl font-bold text-fuchsia-400 hover:underline mb-2 flex items-center gap-2">
            {post.title}
          </h2>
        </Link>
        {post.date && (
          <p className="text-xs italic text-cyan-400 mb-2">
            {new Date(post.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
        {post.description && (
          <p className="text-base text-gray-300 mt-2 line-clamp-3">
            {post.description}
          </p>
        )}
      </div>

      <div className="mt-6">
        <Link
          href={post.fullSlug}
          className="inline-block text-sm font-semibold text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200 hover:underline"
        >
          <span className="flex items-center gap-2 justify-between">
            <LinkIcon
              size={16}
              className="text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-200"
            />{" "}
            Read More
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogArticle;
