import { cn } from '@/lib/utils';
import React from 'react';

export const Meteors = ({ number, className }: { number?: number; className?: string }) => {
  const meteors = new Array(number || 20).fill(true);
  
  // Function to generate a random number within a range
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      {meteors.map((el, idx) => {
        const randomLeft = getRandomNumber(-400, 400) + 'px';
        const randomDelay = (Math.random() * (0.8 - 0.2) + 0.2).toFixed(2) + 's';
        const randomDuration = getRandomNumber(2, 10) + 's';

        return (
          <span
            key={'meteor' + idx}
            className={cn(
              'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: 0,
              left: randomLeft,
              animationDelay: randomDelay,
              animationDuration: randomDuration,
            }}
          ></span>
        );
      })}
    </>
  );
};
