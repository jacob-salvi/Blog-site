'use client'
import React from 'react'
import { useEffect, useRef } from 'react'
import { ScrollTrigger,  } from 'gsap/all'
import { gsap } from "gsap";  
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
import { useGSAP } from '@gsap/react';


const Story2 = () => {
 const storyref = useRef(null);
  const leadingTextRef = useRef(null);
  const trailingTextRef = useRef(null);
  const figureref = useRef(null);

    useEffect(() => {
      const splittext = new SplitText(leadingTextRef.current, { type: 'words' });
      const splittext2 = new SplitText(trailingTextRef.current, { type: 'lines' });
      const tl = gsap.timeline({
         scrollTrigger: {
           trigger: leadingTextRef.current,
           containerAnimation: gsap.getById('outtercontainer'),
           start: 'top center',
           end: 'bottom top',
           scrub: true,
          
    }
      })
      tl.from(splittext.words, {
         duration: 1,
         opacity: 0,
         y: 50,
          ease: 'power2.out',
          stagger: 0.1,
        });
      tl.fromTo(figureref.current, {
        y:-50,
        rotate: -10,
        opacity: 0,
        ease: 'power2.out',
      },{
        y:20,
        opacity: 1,
        rotate:10,
        transformOrigin: 'left',
        
      })
      tl.from(splittext2.lines, {
        
        opacity: 0,
        y: 50,
        ease: 'power2.out',
      }, )
       return () => tl.revert();
},)


  return (
    <div ref={storyref} className=' story w-[100vw] h-[100vh] flex shrink-0 flex-col gap-8  items-start justify-center '>
      <div className='w-fit flex gap-0 justify-between items-center bg-[#fffae7] '>
        <div
        className=' leadingText text-6xl font-gabarito font-bold tracking-[-4%] text-[#2a2a2a]'><h1 ref={leadingTextRef}>And most days, I'm just trying to </h1></div>
          <div className=' UiElement w-fit'>
            <div ref={figureref} className='relative '>
              <svg width="350" height="94" viewBox="0 0 320 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M278.384 32.1094C284.361 26.8226 291.838 22.7257 297.888 22.7256C310.024 22.7256 319.863 34.3648 319.863 48.7217C319.863 63.0784 310.024 74.7168 297.888 74.7168C291.838 74.7167 284.361 70.9346 278.384 65.8066V93.7002L0.125 93.7002L0.125 71.0098C2.83832 71.8969 5.50528 72.4062 7.94922 72.4062C20.5733 72.4062 30.8076 62.0612 30.8076 49.2998C30.8076 36.5384 20.5733 26.1934 7.94922 26.1934C5.5054 26.1934 2.83819 26.7434 0.125 27.6904L0.125 0.290039L278.384 0.290039V32.1094Z" fill="#8BBD88"/>
              </svg>
              <div  className='absolute z-10 top-1/2 left-[47%]  whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 text-[3.3rem] font-gabarito font-bold tracking-[-4%] text-[#2a2a2a] '>
                Figure out
              </div>
          </div>
        </div>
      </div>
        <div
        ref={trailingTextRef}
         className=' trainlingTExt w-full  text-6xl font-gabarito font-bold tracking-[-4%] text-[#2a2a2a]  flex justify-end pr-20  '>
          <h1>how to learn.</h1>
        </div>
    </div>
  )
}

export default Story2

