import Image from 'next/image';
import finish from '@/assets/images/finish.svg';
import sys4 from '@/assets/images/sys4.svg';
import shoppy from '@/assets/images/shoppy.svg';
import lapis from '@/assets/images/lapis.png';
import dailyCoins from '@/assets/images/dailyCoins.jpg';

export default function PortfolioSection() {
  return (
    <section id='solutions' className='flex flex-col p-4 pt-14 '>
      <h2 className='text-2xl md:text-5xl font-semibold'>My work</h2>

      <div className='flex flex-col md:flex-row items-center my-4 justify-evenly'>
        <div className='flex-1 flex flex-col md:flex-row gap-8 text-sm'>
          <div className='flex-1'>
            <Image
              src={finish}
              alt=''
              className='h-32 w-32 p-1 border-2 border-slate-700 bg-black rounded-lg mx-auto opacity-80 dark:opacity-50'
            />
            <p className='my-4'>
              FinishIO, a web application that allows users to create and manage
              their own tasks and projects. It also allows users to collaborate
              on projects with other users
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={sys4}
              alt=''
              className='h-32 w-32 p-1 border-2 border-slate-700 bg-black rounded-lg mx-auto opacity-80 dark:opacity-50'
            />
            <p className='my-4'>
              SYS4, a comprehensive solutions for different domains that cater
              to different areas of interest, including development, health,
              games, social activities, and more
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={shoppy}
              alt=''
              className='h-32 w-32 p-1 border-2 border-slate-700 bg-black rounded-lg mx-auto opacity-80 dark:opacity-50'
            />
            <p className='my-4'>
              Shoppy, a CMS for online stores that allows users to manage their
              inventory and orders, and can be used with a wide-range of
              frontend applications
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={dailyCoins}
              alt=''
              className='h-32 w-32 p-1 border-2 border-slate-700 bg-black rounded-lg mx-auto opacity-80 dark:opacity-50'
            />
            <p className='my-4'>
              Daily Coins, an iOS mobile application that allows users to track
              their favorite cyrpto-currencies and get daily updates on their
              value
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={lapis}
              alt=''
              className='h-32 w-32 p-1 border-2 border-slate-700 bg-black rounded-lg mx-auto opacity-80 dark:opacity-50'
            />
            <p className='my-4'>
              Lapis, an ultimate software companion for streamlined workflow and
              enhanced productivity that unlocks the power of innovation and
              efficiency in a single tool
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
