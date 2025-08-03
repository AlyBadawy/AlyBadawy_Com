import PostProps from '@/types/PostProps';
import { LocalDocument } from 'contentlayer/source-files';
import { allBlogPosts } from '@contentlayer/generated';

export const BlogFullSlug = (doc: LocalDocument) => {
  return `/${doc._raw.flattenedPath}`;
};

export const BlogSlugParam = (doc: LocalDocument) => {
  return doc._raw.flattenedPath.split('/').slice(2).join('/');
};

export const getPostFromSlug = async (params: PostProps['params']) => {
  const slug = params?.slug?.join('/');
  if (!slug) {
    return null;
  }

  const post = allBlogPosts.find((post) => post.slug === slug);
  return post ?? null;
};
