import React from 'react';
import BlogPostItems from './BlogPostItems';
import { PageOgMeta } from '@/utils/ogMeta';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return await PageOgMeta({
    title: 'The Blog: Your Ever-Growing Knowledge Hub!',
    description:
      'From exploring the intricacies of software architecture to discussing the latest industry trends and sharing coding best practices, my blog aims tobe your go-to resource for staying informed and empowered in the digital landscape.',
  });
};

export default function Blog() {
  return (
    <section id='solutions' className='flex flex-col p-4 pt-14'>
      <h2 className='text-2xl md:text-4xl font-semibold text-gradient md:leading-normal'>
        The Blog: Your Ever-Growing Knowledge Hub!
      </h2>

      <div className='flex flex-col md:flex-row justify-between items-center my-4 gap-8'>
        <div className='flex-1 flex flex-col gap-4'>
          <p>
            I&apos;m thrilled to announce the launch of my blog section, which
            is now live and bustling with insightful content! As I continue to
            build a comprehensive platform for all things software development,
            I&apos;ve curated an initial collection of informative articles that
            delve into various facets of the field. From exploring the
            intricacies of software architecture to discussing the latest
            industry trends and sharing coding best practices, my blog aims to
            be your go-to resource for staying informed and empowered in the
            digital landscape.
          </p>
          <p>
            But that&apos;s not all – the excitement doesn&apos;t end here! My
            blog is designed to be a dynamic space, with new posts being added
            regularly to keep you engaged and informed. As the world of software
            development evolves, so will my content. Whether you&apos;re just
            starting out on your coding journey or you&apos;re a seasoned
            professional, you can count on finding valuable insights and fresh
            perspectives with each visit.
          </p>
          <p>
            Thank you for your continued support and enthusiasm. Your interest
            in my blog fuels my dedication to providing you with a continuously
            enriching experience. I&apos;m excited to accompany you on this
            journey of learning and growth, and I can&apos;t wait for you to
            explore the ever-expanding wealth of knowledge my blog has to offer.
            Stay tuned, as we embark on this exciting path of exploration and
            discovery together!
          </p>
        </div>
      </div>
      <BlogPostItems />
    </section>
  );
}
