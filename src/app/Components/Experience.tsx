"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/src/app/ui/3d-card";
import Title from './Title';


export function Experience() {
  return (

    <CardContainer className="inter-var grid-flex flex-col gap-10">
      <Title text='Experience 💼' className='flex flex-col items-center justify-center -rotate-6' />
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl font-bold normal-case italic text-neutral-600 dark:text-neutral-400"
        >
          Teravista.io
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <a href="https://teravista.io">
            <Image
              src="/Teravista.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"

            />
          </a>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-2xl max-w-sm mt-2 mx-auto text-center dark:text-neutral-300 "
        >
          Trainee Software Developer
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-neutral-500 text-xl max-w sm mt-2 mx-auto text-center dark:text-neutral-600">
          April 2023 - June 2023
        </CardItem>


      </CardBody>
    </CardContainer>
  );
}
