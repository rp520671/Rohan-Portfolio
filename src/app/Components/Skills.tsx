'use client';

import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/src/app/ui/card-hover-effect';
import {
  SiAmazonaws,
  SiAngular,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { text:'Python', Icon: SiPython},
    { text: 'Mysql', Icon: SiMysql },
    { text: 'Mongo', Icon: SiMongodb },
    { text: 'React', Icon: SiReact },
    { text: 'Node', Icon: SiNodedotjs },
    { text: 'Tailwind', Icon: SiTailwindcss },
    { text: 'Next', Icon: SiNextdotjs },
    { text: 'Angular', Icon: SiAngular },
    { text: 'Material UI', Icon: SiMui },
    {text:'Html5', Icon: SiHtml5},
    {text: 'Css3', Icon:SiCss3},
    {text:'Aws', Icon: SiAmazonaws}

    
  ];

  return (
    <div className='max-w-5xl mx-auto mt-20 px-8'>
      <Title text='Skills 🧠' className='flex flex-col items-center justify-center -rotate-6' />
      <HoverEffect items={skills}></HoverEffect>
    </div>
  );
};

export default Skills;
