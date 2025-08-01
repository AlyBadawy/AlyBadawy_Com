import { BlogArticle } from "@/components/blog/BlogArticle";
import { allBlogPosts } from "@contentlayer/generated";

export default function BlogPostItems() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {allBlogPosts
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post, index) => (
          <BlogArticle key={post._id} post={post} index={index} />
        ))}
    </div>
  );
}
