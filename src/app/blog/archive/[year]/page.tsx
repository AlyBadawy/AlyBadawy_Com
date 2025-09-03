import BlogArticle from "@/components/blog/BlogArticle";
import YearProps from "@/types/YearProps";
import { slugify } from "@/utils/Slugify";
import { allBlogPosts } from "@contentlayer/generated";

export default async function CategoryPage({ params }: YearProps) {
  const resolvedParams = await params;

  const years = Array.from(
    new Set(
      allBlogPosts.map((post) => post.year).filter((year) => year !== undefined)
    )
  );

  const year = years.find(
    (yr) => slugify(yr).toLowerCase() === resolvedParams.year.toLowerCase()
  );

  if (!year) {
    return <div className="container mx-auto p-4">No year specified.</div>;
  }
  const posts = allBlogPosts.filter(
    (p) => slugify(p.year || "").toLowerCase() === resolvedParams.year
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Year: {year}</h1>

      <section className="flex flex-col lg:flex-row gap-12 p-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((post, index) => (
              <BlogArticle key={post._id} post={post} index={index} />
            ))}
        </div>
      </section>
    </div>
  );
}
