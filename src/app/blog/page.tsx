import React from "react";
import BlogPostItems from "./BlogPostItems";
import { PageOgMeta } from "@/utils/ogMeta";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return await PageOgMeta({
    title: "The Blog: Insights on Modern Software Development",
    description:
      "A collection of hands-on insights, real-world problem-solving strategies, and lessons learned in full-stack development, system design, and scalable software solutions.",
  });
};

export default function Blog() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col p-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-gradient md:leading-normal">
          The Blog: Insights on Modern Software Development
        </h2>

        <div className="flex flex-col gap-8 my-4">
          <p>
            Welcome to my blog—a space where I share practical insights,
            problem-solving strategies, and lessons learned from real-world
            software engineering challenges. Each post is crafted to provide
            value not just as a tutorial, but as a glimpse into my approach to
            building scalable, reliable, and modern applications.
          </p>
          <p>
            Here, you'll find articles on full-stack development, system
            architecture, performance optimization, and the latest industry
            trends shaping the future of tech. My goal is to bridge theory and
            hands-on experience, showcasing how clean architecture, maintainable
            code, and efficient workflows come together to solve complex
            technical problems.
          </p>
          <p>
            Whether you're a fellow developer, a hiring manager, or a tech
            enthusiast, this blog demonstrates how I think, build, and deliver
            software solutions that last. Dive in, explore the articles, and see
            how I bring ideas to life through code.
          </p>
        </div>
        <BlogPostItems />
      </section>
    </div>
  );
}
