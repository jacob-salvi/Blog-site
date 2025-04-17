'use client'
import React from 'react'
import Link from "next/link";
import { useState, useEffect } from 'react';

const navlinks =[
    {
        name: "Work",
        linkto:"/work"
    },

    {
        name:"Blogs",
        linkto:"/blogs"
    },

    {
        name:"Who am I?",
        linkto:"/about"
    }
]


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);      // using usestate to track the scorll postion and setting the scrolled state to true or false
    useEffect(() => {                                     // useEffect is React’s way of handling:  "Do something after rendering" 

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);                // checking if the scroll is done or not if done the setScrolled will be ture
        }

        window.addEventListener('scroll',handleScroll);           // we are adding event listener to the window 
        return ()=> window.removeEventListener('scroll',handleScroll);
    }

    )
  return ( 
    <div className={` fixed  z-5 w-full py-8 px-25 navbar flex justify-between ${scrolled ? "backdrop-blur-sm" : ""}`} >                {/*here we check if the condition is true or not and hten adding background blur */}
        <div><p className='font-[Gabarito] font-bold text-2xl text-[#2a2a2a] '>jacob.</p></div>
        <div className='flex gap-20'>
            {
            navlinks.map((links,index) => (
                <Link  key={index} href="/work" className="group overflow-hidden  h-6  relative cursor-pointer block">
                    <div className=" flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-6 " >

                        <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] font-bold'>{links.name}</div>
                        <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] font-bold'>{links.name}</div>
                    </div>
                </Link>
                    ))
            }
        </div>
    </div> 
  )
}

export default Navbar
