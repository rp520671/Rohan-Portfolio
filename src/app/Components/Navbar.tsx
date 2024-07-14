import React from 'react';
import { SiGithub } from 'react-icons/si';
import { SiX } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/rohan-patil-ra960097/',
      label: 'LinkedIn',
      Icon: SiLinkedin,
    },
    {
      link: 'https://twitter.com/RohanPatil52067',
      label: 'X',
      Icon: SiX,
    },
    {
      link: 'https://github.com/rp520671',
      label: 'GitHub',
      Icon: SiGithub,
    },
  ];
  

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'
          onClick={() => window.open('https://www.linkedin.com/in/rohan-patil-ra960097/')}>
        Rohan Patil 🧑🏻‍💻
      </h1>
      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
