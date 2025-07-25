'use client'
import React, { useEffect, useRef } from 'react'
import { SplitText, } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Gabarito, DM_Serif_Display } from 'next/font/google';

gsap.registerPlugin(SplitText);



const Story4 = () => {
  const lineref = useRef(null);
const containerref = useRef(null)
const wrapperRef = useRef(null)

useEffect(()=>{
  const leadtxt = new SplitText(lineref.current, {type:'lines', })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger:  containerref.current,
      containerAnimation: gsap.getById('outtercontainer'),
      start: 'top center',
      end: 'bottom center',
      scrub:true
    }
  })

  tl.from(leadtxt.lines, {
    duration: 2.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
  })

  tl.from(wrapperRef.current.querySelectorAll('.tag'),{
        y: "random(-100, 100)",
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 2.9, 
    ease: "power4",
    stagger: {
      each: 0.2,
      
    },
  })

  

  
     return () => tl.revert();
})



  return (
    <div className='w-[100vw] h-[100vh] flex flex-col shrink-0 justify-center items-center  '>
      <div ref={containerref} className='w-fit h-fit p-10  bg-[#fffae7]  relative'>
        <h1 ref={lineref} className='  text-[7rem] font-gabarito font-normal leading-[5.5rem] tracking-[-4%] text-[#2a2a2a]'>A place to <br/>Collect my</h1>
        <div ref={wrapperRef}>
        <div className=' tag absolute  top-0 left-[-6%] w-fit h-fit p-3 bg-[#FEB1FF] rounded-3xl drop-shadow-2xl -rotate-12 '>
          <h1 className='text-[#5F0095] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>learnings</h1>
        </div>
         <div className=' tag absolute  top-0 left-[30%] w-fit h-fit p-3  bg-[#FFB1B1] rounded-3xl drop-shadow-2xl rotate-17 '>
          <h1 className='text-[#950000] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>errors</h1>
        </div>
        <div className=' tag absolute  top-[10%] left-[75%] w-fit h-fit p-3  bg-[#FFF18A] rounded-3xl drop-shadow-2xl rotate-10 '>
          <h1 className='text-[#955000] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>belief</h1>
        </div>
        <div className=' tag absolute  top-[40%] left-[50%] w-fit h-fit p-3  bg-[#91C4FF] rounded-3xl drop-shadow-2xl rotate-6 '>
          <h1 className='text-[#1A5BBC] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>ideas</h1>
        </div>
         <div className=' tag absolute  top-[70%] left-[-8%] w-fit h-fit p-3  bg-[#FFD191] rounded-3xl drop-shadow-2xl -rotate-12 '>
          <h1 className='text-[#952F00] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>drafts</h1>
        </div>

         <div className=' tag absolute  top-[70%] left-[25%] w-fit h-fit p-3  bg-[#FFA7D6] rounded-3xl drop-shadow-2xl rotate-12 '>
          <h1 className='text-[#BC1A1C] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>problems</h1>
        </div>

        <div className=' tag absolute  top-[70%] left-[70%] w-fit h-fit p-3  bg-[#B5FF8A] rounded-3xl drop-shadow-2xl -rotate-12 '>
          <h1 className='text-[#096A43] font-gabarito font-bold text-[2.5rem] leading-none tracking-[-6%]'>buildings</h1>
        </div>
        </div>
        
        
      </div>
      <div className=''> 
        <h1 className='font-dmSerifText italic text-[#2a2a2a] text-[1.2rem]'>Not a guidebook. A journal. </h1>
      </div>
      
    </div>
  )
}

export default Story4
