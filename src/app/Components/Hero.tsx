'use client';
import React from 'react';
import { MovingBorderBtn } from '@/src/app/ui/moving-border';
import { Meteors } from '@/src/app/ui/meteors';
import { SiReact, SiTemporal, SiTypescript, SiPython, SiMysql, SiNextdotjs, SiAmazonaws } from 'react-icons/si';
import { HoverBorderGradient } from '@/src/app/ui/hover-border-gradient';


const Hero = () => {
  const currentStack = [
    { icon: SiTypescript },
    { icon: SiMysql },
    { icon: SiNextdotjs },
    { icon: SiReact },
    { icon: SiPython },
    { icon: SiAmazonaws}
  ];
  return (
    <div className='min-h-[60vh] flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
          Hi! 👋
          <br />
          <span className='underline underline-offset-8 decoration-green-500'>{"I'm Rohan Patil"}</span>
        </h1>

        <p className='md:w-96 text-lg text-gray-300'>
          {
            "I'm a software developer passionate about building a modern web application that users love."
          }
        </p>

        {/* <Link href={'mailto:rp520671@gmail.com'} className='inline-block group'>
          <Title text='Contact Me 📭' />
        </Link> */}
      </div>
      <div className='relative'>
        <div className=''>
          <div className=' w-full relative max-w-xs'>
            <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />
            <div className='relative shadow-xl bg-[#09090B] border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
              <div className='flex items-center justify-center mb-4 gap-3'>
                {currentStack.map((current, index) => {
                  const Icon = current.icon;
                  return <Icon key={index} className='w-7 h-7' />;
                })}
              </div>

              <div className='flex items-end mb-4 gap-1'>
                <h1 className='font-bold text-xl text-white relative z-50'>Ready to get Hired</h1>

              </div>

              <div className="flex justify-center gap-4">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="p-4 font-semibold dark:bg-black bg-white text-black dark:text-white"
                >
                  My Resume 📃
                </HoverBorderGradient>
                <MovingBorderBtn
                  borderRadius="0.5rem"
                  className="p-4 font-semibold"
                >
                  <p>Contact me</p>
                </MovingBorderBtn>
              </div>


              <Meteors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
