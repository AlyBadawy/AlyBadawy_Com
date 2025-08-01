import rehypePrettyCode from "rehype-pretty-code";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { BlogFullSlug, BlogSlugParam } from "./src/utils/ComputedSlugs";

/** Computed fields shared across documents */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => BlogSlugParam(doc),
  },
  fullSlug: {
    type: "string",
    resolve: (doc) => BlogFullSlug(doc),
  },
  year: {
    type: "string",
    resolve: (doc) => new Date(doc.date).getFullYear().toString(),
  },
};

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    category: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [BlogPost],
  mdx: {
    rehypePlugins: [rehypePrettyCode],
  },
});
