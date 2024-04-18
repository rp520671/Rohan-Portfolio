import React from 'react';
import {
  SiAnaconda,
  SiCss3,
  SiFlask,
  SiHtml5,
  SiJupyter,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPython,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/src/app/ui/direction-aware-hover';

const Projects = () => {
  const projects = [
    {
      title: '2D to 3D Dicom Image Conversion',
      tech: [SiPython, SiCss3, SiHtml5, SiJupyter, SiNumpy, SiPlotly, SiScikitlearn, SiAnaconda],
      link: 'https://github.com/rp520671/2D-to-3D-DICOM-Project',
      cover: '/images/2dto3d.png',
      background: 'bg-indigo-500',
    },
    {
      title: 'Crime Rate Prediction and Analysis',
      tech: [SiAnaconda,SiPandas, SiNumpy,SiFlask,SiScikitlearn, SiPlotly, SiPython, SiJupyter, SiHtml5, SiCss3],
      link: 'https://github.com/rp520671/Crime',
      cover: '/images/crime2.png',
      background: 'bg-green-500',
    },
    {
      title: 'BlueJay Task',
      tech: [SiAnaconda, SiJupyter, SiPython, SiPandas],
      link: 'https://github.com/rp520671/Bluejay_Assignment',
      cover: '/images/bluejay.png',
      background: 'bg-purple-500',
    },
    {
      title: 'Hexleap Task',
      tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel],
      link: 'https://rohan-patil-hexleap-assignment-coral.vercel.app/',
      cover: '/images/hexleap.png',
      background: 'bg-indigo-500',
    },
  ];

  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title text='Projects 📦' className='flex flex-col items-center justify-center rotate-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return (
            
            <Link href={project.link} key={index}>
              <div className={cn('p-3 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='w-full space-y-5 cursor-pointer'
                >
                  <div className='space-y-5 bg-black p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className='w-8 h-8' />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
