import Link from "next/link";
import { allBlogPosts } from "@contentlayer/generated";
import { slugify } from "@/utils/Slugify";
import { LinkIcon } from "lucide-react";

export const SidePanel = () => {
  // Unique categories
  const categories = Array.from(
    new Set(
      allBlogPosts
        .map((post) => post.category)
        .filter((category): category is string => category !== undefined)
    )
  );

  // Unique years
  const years = Array.from(new Set(allBlogPosts.map((post) => post.year))).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <aside className="bg-zinc-950 rounded-2xl shadow-xl border-2 border-cyan-400/20 p-8 space-y-8 w-full max-w-full mx-auto">
      <div>
        <h3
          className="text-xl font-bold mb-4 text-fuchsia-400 text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Categories
        </h3>
        <ul className="space-y-2 text-base">
          {categories.map((category) => (
            <li
              key={category}
              data-aos="flip-left"
              className="hover:text-cyan-400 transition-colors duration-150"
            >
              <LinkIcon size={16} className="text-cyan-400 inline mr-2" />
              <Link href={`/blog/category/${slugify(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3
          className="text-xl font-bold mb-4 text-fuchsia-400 text-center"
          data-aos="fade-up"
        >
          Archive
        </h3>
        <ul className="space-y-2 text-base">
          {years.map((year) => (
            <li
              key={year}
              data-aos="flip-left"
              className="hover:text-cyan-400 transition-colors duration-150"
            >
              <LinkIcon size={16} className="text-cyan-400 inline mr-2" />
              <Link href={`/blog/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
