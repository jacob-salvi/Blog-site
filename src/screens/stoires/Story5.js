import React, { useEffect, useRef } from 'react'
import { Gabarito } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(SplitText, ScrollTrigger);

const Story5 = () => {

  const textref = useRef(null);

  useEffect(()=>{
    const text = new SplitText(textref.current, {type: 'lines'})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: textref.current,
        containerAnimation: gsap.getById('outtercontainer'),
        start:'top center',
        end: 'bottom bottom',
        scrub: true
      }
    })

    tl.from(text.lines,{
       rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8, 
    ease: "power3",
    stagger: 0.25
    })
    return ()=> tl.revert()
  })


  return (
    <div 
    ref={textref} 
    className=' text w-[100vw] h-[100vh] flex flex-col gap-5  shrink-0  justify-center items-center leadingText text-6xl font-[Gabarito] font-bold tracking-[-4%] text-[#2a2a2a]'>
      <h1 className='bg-amber-50 z-10 w-full flex justify-start pr-20'> Not from someone who knows it all,</h1>
      <h1 className='w-full bg-amber-50 flex justify-end pl-20'>but someone who's figuring it out.</h1>
      
    </div>
  )
}

export default Story5
