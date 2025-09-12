import Mdx from "@/components/mdxComponents";
import ABDateFormatter from "@/utils/AbDateFormatter";
import { BlogPost } from "@contentlayer/generated";

type PostViewParams = {
  post: BlogPost;
};

export const PostView = ({ post }: PostViewParams) => {
  return (
    <article className="w-full max-w-full mx-auto bg-zinc-950 rounded-2xl shadow-xl border-2 border-cyan-400/20 p-8 flex flex-col gap-4">
      <header className="mb-2">
        <h1 className="text-3xl md:text-5xl font-bold text-fuchsia-400 mb-4 text-center">
          {post.title}
        </h1>
      </header>
      {/* Meta subsection as small cards */}
      <section className="flex flex-wrap gap-4 justify-start mb-2">
        <div className="bg-cyan-900 text-cyan-300 font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow">
          <svg
            className="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {post.category || "General"}
        </div>
        <div className="bg-zinc-800 text-cyan-400 font-medium px-4 py-2 rounded-xl flex items-center gap-2 shadow">
          <svg
            className="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {post.date && ABDateFormatter(post.date || "")}
        </div>
        {post.description && (
          <div className="bg-cyan-900 text-cyan-200 px-4 py-2 rounded-xl shadow text-sm font-medium flex items-center gap-2">
            <svg
              className="w-4 h-4 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <span>TL;DR: {post.description}</span>
          </div>
        )}
      </section>
      <hr className="my-4 border-cyan-800" />
      <div className="prose prose-invert prose-lg max-w-none">
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
};

export default PostView;
