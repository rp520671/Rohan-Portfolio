
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/src/app/ui/infinite-moving-cards";
import Title from './Title';

export function Education() {


    return (
        <div className=" bg-transparent h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <Title text='Education 📚' className='flex flex-col items-center justify-center rotate-6 ' />
            <div className='pt-20 gap-5'>

            <InfiniteMovingCards
                items={grades}
                direction="right"
                speed="normal"
            />
        </div>
        </div >
        );

}

const grades = [
    {
        board: "Mumbai University",
        institute: "Saraswati College of Engineering",
        title: "B.E in Computer Engineering, Undergraduate",
        location:"Kharghar, Navi Mumbai",
        duration: "August 2019 - July 2023",
        percentage : "GPA: 8.44 , Percentage: 74.18%",


    },
    {
        board: "Maharashtra State Board",
        institute:"St Mary's Convent High School and Jr.College",
        title: "10 + 2 ,12th Science",
        location:"Uran, Navi Mumbai",
        duration:"2019",
        percentage:"Percentage : 57.69%",
       
        
    },
    {
        board: "Maharashtra State Board",
        institute:"Rotary English Medium high School & Jr.College",
        title: "10th",
        location:"Uran, Navi Mumbai",
        duration: "2017",
        percentage:"Percentage : 74.40%",
       
    },

];
