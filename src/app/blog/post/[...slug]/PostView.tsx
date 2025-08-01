import Mdx from "@/components/mdxComponents";
import ABDateFormatter from "@/utils/AbDateFormatter";
import { BlogPost } from "@contentlayer/generated";

type PostViewParams = {
  post: BlogPost;
};

export const PostView = ({ post }: PostViewParams) => {
  return (
    <article className="flex-1 pr-6">
      <h1 className="text-2xl md:text-4xl font-semibold text-gradient md:leading-normal">
        {post.title}
      </h1>
      <p className="text-xs italic opacity-70 mt-0">
        {post.category || "General"} •{" "}
        {post.date && ABDateFormatter(post.date || "")}
      </p>
      {post.description && (
        <p className="text-slate-500 mb-4 text-sm">{post.description}</p>
      )}
      <hr className="mt-0 mb-4 border-zinc-600" />
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostView;
