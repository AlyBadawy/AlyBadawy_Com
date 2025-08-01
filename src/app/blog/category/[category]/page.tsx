import BlogArticle from "@/components/blog/BlogArticle";
import CategoryProps from "@/types/CategoryProp";
import { slugify } from "@/utils/Slugify";
import { allBlogPosts } from "@contentlayer/generated";

export default function CategoryPage({ params }: CategoryProps) {
  const categories = Array.from(
    new Set(
      allBlogPosts
        .map((post) => post.category)
        .filter((category) => category !== undefined)
    )
  );

  const category = categories.find(
    (cat) => slugify(cat).toLowerCase() === params.category.toLowerCase()
  );

  if (!category) {
    return <div className="container mx-auto p-4">No category specified.</div>;
  }
  const posts = allBlogPosts.filter(
    (p) => slugify(p.category || "").toLowerCase() === params.category
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Category: {category}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post, index) => (
            <BlogArticle key={post._id} post={post} index={index} />
          ))}
      </div>
    </div>
  );
}
