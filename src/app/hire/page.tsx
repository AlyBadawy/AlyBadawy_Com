import React from 'react';
import HireForm from './HireForm';

// export const generateMetadata = async (): Promise<Metadata> => {
//   return await PageOgMeta({
//     title: 'Hire me for your next project',
//     description:
//       'Whether you have a specific software challenge in mind, need assistance in optimizing your systems, or are venturing into uncharted digital territories, your insights will provide the foundation for a successful collaboration.',
//   });
// };

export default function Hire() {
  return (
    <section id='solutions' className='flex flex-col p-4 pt-14 '>
      <h2 className='text-2xl md:text-4xl font-semibold text-gradient md:leading-normal'>
        Hire me for your next project
      </h2>

      <div className='flex flex-col justify-between items-start my-4 gap-8'>
        <div className='flex-1 flex flex-col gap-4'>
          <p>Ready to take the next step?</p>
          <p>
            I&apos;m here to make your project a reality. To get started, please
            take a moment to fill out the form below. Your project details are
            invaluable in understanding your goals and requirements. Whether you
            have a specific software challenge in mind, need assistance in
            optimizing your systems, or are venturing into uncharted digital
            territories, your insights will provide the foundation for a
            successful collaboration. Rest assured that every piece of
            information you share will be handled with the utmost
            confidentiality.
          </p>
          <p>
            Once you&apos;ve submitted the form, I&apos;ll personally review
            your project details within the next 48 hours. This initial phase is
            essential in grasping the scope and potential of your project.
            Whether it&apos;s a software solution, system enhancement, or
            innovative concept, your vision is the driving force behind our
            collaboration. Be ready to embark on a journey where your
            aspirations meet my expertise. I&apos;m excited to connect with you
            and explore how we can together create solutions that reshape
            industries and exceed expectations. Thank you for considering me as
            a partner in your journey to digital excellence.
          </p>
        </div>
        <HireForm />
      </div>
    </section>
  );
}
