'use client'
import React, { use } from 'react'
import { Gabarito, DM_Serif_Text } from 'next/font/google';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Story1 from './stoires/Story1';
import Story2 from './stoires/Story2';
import Story3 from './stoires/Story3';
import Story4 from './stoires/Story4';
import { useGSAP } from '@gsap/react'; 
import { MotionPathHelper } from 'gsap/MotionPathHelper';
import { MotionPathPlugin } from 'gsap/src/all';
import { DrawSVGPlugin } from 'gsap/all';
import Story5 from './stoires/Story5';

gsap.registerPlugin(ScrollTrigger, MotionPathHelper, MotionPathPlugin, DrawSVGPlugin);
gsap.registerPlugin(useGSAP);


const Story = () => {
  const outer = useRef(null);
  const inner = useRef(null);
  const svgref = useRef(null);
  const pathref = useRef(null)
  const svgcontainer = useRef(null)
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      
    const checkReady = () => {
      if (
        outer.current && 
        inner.current && 
        pathref.current &&
        inner.current.scrollWidth > 0
      ) {
        setIsReady(true);
      }
    };

    checkReady();
    window.addEventListener('load', checkReady);
    
    return () => window.removeEventListener('load', checkReady);
  }, []);
  


  useGSAP(()=>{
   
    gsap.to(inner.current,{
      id:'outtercontainer',
      x: ()=> -(inner.current.scrollWidth - outer.current.clientWidth),
      ease: 'none',
      scrollTrigger:{
        trigger: outer.current,
        start: 'top top',
        end: () => `+=${inner.current.scrollWidth - outer.current.clientWidth}`,
        scrub: 1,
        pin: true,
      }
    })

const path = pathref.current;
  const pathLength = path.getTotalLength();
  

  // Set up the stroke style manually
  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  // Scroll animation
  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: svgref.current,
      containerAnimation: gsap.getById("outtercontainer"),
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  }); 
  ScrollTrigger.refresh(); 
  },)

  
  
  return (

   <div ref={outer} className='outercontainer  relative story w-full h-[100vh] overflow-hidden'>
    <div className='w-full absolute  pt-20 pb-3 italic px-20 font-[DM_Serif_Text] text-[1.9rem] tracking-[-4%] leading-none  '>
      Why i started this?
    </div>
   
    <div ref={inner} className=' innercontainer  w-[full] h-full flex shrink-0  '>
       <div ref={svgcontainer} className=' absolute left-[60%] '>
        <svg ref={svgref} width="6700" height="778" viewBox="0 0 7385 778" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathref} d="M0.5 217.19C61.9327 157.56 202.687 82.3979 249.697 118.593C296.708 154.787 267.17 217.19 218.08 216.358C168.989 215.526 122.561 116.096 314.597 62.8452C554.642 -3.71852 557.97 145.218 636.183 185.571C708.42 222.843 790.802 239.267 887.043 217.19C985.64 194.573 1160.79 96.1274 1102.96 74.0785C1063.44 59.0093 931.557 208.454 1136.24 163.523C1340.92 118.593 1136.24 -7.47509 1050.96 1.69051C986.056 8.66537 920.741 138.977 1080.49 200.548C1240.25 262.12 1287.67 -13.2868 1200.31 12.9226C1112.94 39.132 1188.24 204.708 1271.86 139.393C1355.48 74.0784 1374.21 124.832 1405.82 139.393C1437.44 153.954 1704.11 139.393 1863.03 139.393C2060.99 139.393 2098.92 211.367 2219.56 190.981C2367.12 166.049 2668.84 147.519 2899 284.5C3091.52 399.08 2967 688.5 3244.5 619.5C3522 550.5 3571.53 596.445 3673.87 664.673C3776.22 732.901 3812.75 771.813 3917.25 776.583C4119.91 785.835 4113.4 276.452 4288.5 174C4657.68 -42.004 5159 824.526 5413.5 631C5577.99 505.916 5633.5 280.5 5799.5 166C5965.5 51.5 6301.27 267.5 6199 524.5C6096.73 781.5 6812.5 779.5 7007 541.5C7062.67 452.833 7226.5 312.1 7436.5 458.5" stroke="#2A2A2A" strokeWidth="0.832046" />
</svg>
</div>
      <Story1/>
      <Story2/>
      <Story3/>
      <Story4/>
      <Story5/>
    </div>

   </div>

  )
}

export default Story








