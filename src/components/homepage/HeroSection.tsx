import Image from 'next/image';
import devops from '@/assets/images/devops.svg';

export default function HeroSection() {
  return (
    <section id='home' className='flex flex-col lg:flex-row mt-7 md:my-14 p-4'>
      <div className='flex justify-center items-start flex-col flex-1'>
        <h1 className='flex flex-col font-semibold text-3xl md:text-7xl'>
          <div>Crafting</div>
          <div className='text-gradient'>Practical Solutions</div>

          <div>as a Software Engineer</div>
        </h1>

        <div className='flex flex-col md:flex-row justify-between items-center my-4 gap-8'>
          <div className='flex-1 flex flex-col gap-2'>
            <div className='max-w-lg'>
              <p className='font-normal text-dimWhite mt-5'>
                Hi 👋 <br />I am Aly Badawy,{' '}
                <span className='text-xs'>(He/Him)</span>
              </p>
              <p className=''>
                I am a senior software engineer based in Wayne, NJ. Over the
                course of my 15-year career, I have immersed myself in the art
                of crafting software solutions that seamlessly align with
                real-world scenarios. <br />
                My expertise spans an array of programming languages and
                technologies, including C#, C++, Ruby on Rails, React, Swift,
                Python, and Java.
              </p>
              <p>
                By prioritizing security, collaboration, and continuous
                delivery, I ensure that the tailored software solutions I create
                are not only high-quality but also finely attuned to the dynamic
                challenges of the modern digital landscape.
              </p>
              <p>
                Welcome to my digital realm, where innovation meets
                practicality!
              </p>
            </div>
          </div>
          <div className='flex-1'>
            <Image
              src={devops}
              alt='DevOps Life Cycle Image'
              className='h-full w-full'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
