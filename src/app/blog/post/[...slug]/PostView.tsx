import Mdx from "@/components/mdxComponents";
import ABDateFormatter from "@/utils/AbDateFormatter";
import { BlogPost } from "@contentlayer/generated";

type PostViewParams = {
  post: BlogPost;
};

const PostView = ({ post }: PostViewParams) => {
  return (
    <div className="container mx-auto">
      <section id="solutions" className="flex flex-col p-4 pt-14">
        <article className="prose prose-stone dark:prose-invert">
          <h1 className="text-2xl md:text-4xl font-semibold text-gradient md:leading-normal">
            {post.title}
          </h1>
          {
            <p className="text-xs italic opacity-70 mt-0">
              {post.category || "General"} •{" "}
              {post.date && ABDateFormatter(post.date || "")}
            </p>
          }
          {post.description && (
            <p className=" text-slate-500 mb-4 text-sm">{post.description}</p>
          )}
          <hr className="mt-0 mb-4 w-3/4 " />
          <Mdx code={post.body.code} />
        </article>
      </section>
    </div>
  );
};

export default PostView;
