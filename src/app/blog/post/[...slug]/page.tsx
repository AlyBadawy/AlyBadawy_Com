import PostProps from "@/types/PostProps";
import { getPostFromSlug } from "@/utils/ComputedSlugs";
import { PostOgMeta } from "@/utils/ogMeta";
import { allBlogPosts } from "@contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostView } from "./PostView";
import { SidePanel } from "../../../../components/SidePanel";

export const generateMetadata = async ({
  params,
}: PostProps): Promise<Metadata> => {
  const post = await getPostFromSlug(params);
  if (!post) return {};

  return await PostOgMeta(post);
};

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post.slug.split("/"),
  }));
};

export const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromSlug(params);
  if (!post) notFound();

  return (
    <div className="container mx-auto">
      <section
        id="solutions"
        className="flex flex-col lg:flex-row gap-12 p-4 pt-14"
      >
        <PostView post={post} />
      </section>
    </div>
  );
};
export default PostPage;
