"use client";
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from './ui/google-gemini-effect';
import { Education } from './Components/Education';
import { Experience } from './Components/Experience';


export default function page() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className='min-h-screen bg-[#09090B] overflow-hidden'>

      <div className='dark:bg-[#09090B] relative'>



        <div className='max-w-7xl mx-auto p-5' ref={ref}>
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />

          <Navbar />
          <Hero />


        </div>
      </div>
      <div className='h-10 xl:h-32 from-[#09090B] absolute -bottom-5 left-0 xl:bottom-0 w-full' />
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
