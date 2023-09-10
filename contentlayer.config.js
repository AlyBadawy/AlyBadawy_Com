import rehypePrettyCode from 'rehype-pretty-code';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { BlogFullSlug, BlogSlugParam } from './src/utils/ComputedSlugs';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => BlogSlugParam(doc),
  },
  fullSlug: {
    type: 'string',
    resolve: (doc) => BlogFullSlug(doc),
  },
};

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/post/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    category: {
      type: 'string',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [BlogPost],
  mdx: {
    rehypePlugins: [rehypePrettyCode],
  },
});
