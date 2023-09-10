import Image from 'next/image';
import HirePic from '../../assets/images/hire.svg';
import Link from 'next/link';

export default function HireSection() {
  return (
    <section id='solutions' className='flex flex-col p-4 pt-14 '>
      <h2 className='text-2xl md:text-5xl font-semibold'>
        Crafting Tailored systems?
      </h2>

      <div className='flex flex-col md:flex-row justify-between items-center my-4 gap-8'>
        <div className=''>
          <Image
            src={HirePic}
            alt='HireMe'
            className='w-full opacity-80 dark:opacity-100'
            width={500}
          />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <p className='flex-1'>
            Looking for a realm where software engineering that meets{' '}
            <span className='text-gradient'>your unique vision</span>?
          </p>
          <p>
            With an extensive 15-year journey under my belt, I offer more than
            just technical expertise – I provide a tailored approach that aligns
            precisely with your needs. I believe that every project deserves its
            own distinct solution, and my diverse skill set in programming
            languages and technologies ensures that your software is not only
            functional but also an innovative masterpiece.
          </p>
          <p>
            Passion is at the core of my approach. I thrive on the challenge of
            turning obstacles into opportunities, infusing every project with a
            spark of creativity. From conceptualization to execution, I&apos;m
            dedicated to delivering solutions that not only address problems but
            also push the boundaries of what&apos;s possible. Let&apos;s embark
            on a collaborative journey where your ideas meet my innovation,
            resulting in software that&apos;s not only impeccably crafted but
            also brimming with the potential to reshape industries
          </p>
          <Link href='/hire'>
            <div className='mt-2 cursor-pointer'>
              <p className='py-2 px-4 inline rounded-md border-2 border-cyan-700'>
                🤝🏻 <span className='text-gradient'>Hire me</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
