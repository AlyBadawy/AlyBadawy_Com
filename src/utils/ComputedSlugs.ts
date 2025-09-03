import PostProps from "@/types/PostProps";
import { allBlogPosts } from "@contentlayer/generated";

// Temporary type for contentlayer2 compatibility
type LocalDocument = {
  _raw: {
    flattenedPath: string;
  };
};

export const BlogFullSlug = (doc: LocalDocument) => {
  return `/${doc._raw.flattenedPath}`;
};

export const BlogSlugParam = (doc: LocalDocument) => {
  return doc._raw.flattenedPath.split("/").slice(2).join("/");
};

export const getPostFromSlug = async (params: PostProps["params"]) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/");
  if (!slug) {
    return null;
  }

  const post = allBlogPosts.find((post) => post.slug === slug);
  return post ?? null;
};
