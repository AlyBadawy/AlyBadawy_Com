import { BsAppIndicator, BsBraces, BsHddNetwork } from 'react-icons/bs';

export default function SolutionsSection() {
  return (
    <section id='solutions' className='flex flex-col p-4 pt-14 '>
      <h2 className='text-2xl md:text-5xl font-semibold'>Solutions</h2>
      <div className='grid grid-flow-row lg:grid-flow-col auto-cols-auto gap-8 py-4'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg md:text-2xl text-gradient'>Web development</h3>
          <p>
            <BsBraces className='text-5xl text-bold float-left mr-2 text-cyan-600' />
            My passion for developing web applications stems from the ability to
            create powerful, immersive and highly functional software that can
            run on a wide range of devices. I find the challenge of creating a
            seamless user experience on a web platform to be incredibly
            rewarding.
          </p>
          <p>
            I enjoy the process of designing and building applications that are
            optimized for performance and usability, and the satisfaction of
            seeing users interact with and benefit from the software I&apos;ve
            created. I am constantly seeking to improve my skills and stay
            current with the latest technologies and trends in web development,
            and I look forward to continuing to build innovative and impactful
            applications in the future.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg md:text-2xl text-gradient'>
            Mobile Application
          </h3>
          <p>
            <BsAppIndicator className='text-5xl text-bold float-left mr-2 text-cyan-600' />
            Mobile app development is an exciting field, where I can leverage my
            creativity, technical skills and passion to create intuitive and
            user-friendly apps that enhance people&apos;s daily lives.
          </p>
          <p>
            I have developed a wide range of apps, from simple utility apps to
            complex apps that integrate with various web services and backend
            systems. I have a deep understanding of iOS platform and its
            specific requirements, such as design principles, Human Interface
            Guidelines and App Store submission process. I have also experience
            in using various mobile development frameworks and libraries such as
            UIKit, CoreData, CoreLocation and more.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg md:text-2xl text-gradient'>
            System Administration
          </h3>
          <p>
            <BsHddNetwork className='text-5xl text-bold float-left mr-2 text-cyan-600' />
            As a system administrator, my goal is to ensure an efficient
            operation of the organization&apos;s IT infrastructure by
            maintaining, troubleshooting, and optimizing systems and networks.
          </p>
          <p>
            Mastering Unix infrastructure, I excel in seamless CI/CD pipelines
            for software excellence. Proficient in Linux and macOS, I ensure
            both intricacy navigation and robust security. Crafting strict
            access controls and advanced security protocols, I deliver solutions
            blending innovation with unwavering integrity. This harmonious
            approach represents the fusion of cutting-edge development and
            secure practices, ensuring a landscape where advancement and safety
            coexist seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
