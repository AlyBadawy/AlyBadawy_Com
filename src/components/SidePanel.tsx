import Link from "next/link";
import { allBlogPosts } from "@contentlayer/generated";
import { slugify } from "@/utils/Slugify";

export const SidePanel = () => {
  // Unique categories
  const categories = Array.from(
    new Set(
      allBlogPosts
        .map((post) => post.category)
        .filter((category) => category !== undefined)
    )
  );

  // Unique years
  const years = Array.from(new Set(allBlogPosts.map((post) => post.year))).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <aside className="space-y-6 pl-8 border-l border-slate-200 dark:border-slate-700">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/blog/category/${slugify(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Archive</h3>
        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
          {years.map((year) => (
            <li key={year}>
              <Link href={`/blog/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
