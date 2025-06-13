import React from 'react'
import Navbar from '../components/Navbar'
import TagAnimation from '../components/Animations/TagAnimation'
import TimeTag from '../components/TimeTag'
import { Gabarito, DM_Serif_Text } from 'next/font/google';
import { Contrast } from 'lucide-react';

const hero = () => {
  return (
<div className="Main bg-[#FFFAE7] h-fit w-screen relative">
      
      <div className="homecontent bg-[#88B7BD] relative overflow-hidden  w-full h-[85vh]   bg-cover">
        {/* <div 
            style={{
              
                backgroundImage: `url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            className='absolute inset-0 rounded-[.8rem] mix-blend-multiply'></div> */}
          
          
          <div className=" Text-Illustration flex justify-between items-center px-25 py-40 relative ">
            <img src="/assests/bigstar.svg"  className="absolute top-[14.5vw] left-[32.5vw] w-[4vw] h-[4vw] z-1" />
            <img src="/assests/bigstar.svg"  className="absolute top-[23.5vw] left-[5vw] w-[3vw] h-[3vw] z-1" />
            <div className="w-auto relative z-10 -mt-10  font-[Gabarito] font-bold text-[11vw] leading-none tracking-[-4%] text-[#FFF0B3]">
             <h1>Creative</h1>
             <p className="font-[DM-Serif-Text] font-light italic text-3xl absolute top-[1vw] left-[9vw]">journey of being</p>
             <div className="  my-[-10] w-auto flex   justify-between text-[#FFF0B3] font-[DM-Serif-Text] text-3xl italic  font-light tracking-[-6%] leading-none ">
              <h1>Human.</h1>
              <h1>Designer.</h1>
              <h1>Developer.</h1>

             </div>
            </div>
            <div className="w-1/2 -mt-10  "> <TagAnimation /></div>
           
          
          
          
          </div>
          <div className="flex w-full text-[#2a2a2a] gap-[25vw] items-start z-11 px-25 -mt-15 ">
            <TimeTag />
            <p className="font-[Gabarito] text-[1.2rem] font-bold tracking-[-4%] leading-none text-center">A blog about sharing creativity, mistakes, and <br/>the process of figuring things out.</p>
          </div>

      </div>
      
    </div>
  )
}

export default hero
