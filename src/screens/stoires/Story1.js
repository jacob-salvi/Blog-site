'use client'
import React, { use } from 'react'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Story1 = () => {

    const wrapperRef = useRef(null);

    useEffect(() => {

        let tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    containerAnimation: gsap.getById('outtercontainer'),
                    start: 'top top',
                    end: '+=1000',
                    scrub: true
                }
            }
        );
    
        
        tl.fromTo('.design-lable',{
                rotationX: -40,
                 transformOrigin: "top center",
                 opacity: 0,
                transformPerspective: 800
        },{
            rotationX: 0,
            duration: 1,
            opacity: 1,
            ease: ""
        })
        tl.fromTo('.code-label',{
                rotationX: -40,
                 transformOrigin: "top center",
                 opacity: 0,
                transformPerspective: 800
        },{
            rotationX: 0,
            duration: 1,
            opacity: 1,
            ease: "spring(2, 0.5, 0.5, 0.5)"
        })

         tl.fromTo('.life-label',{
                rotationX: -40,
                 transformOrigin: "top center",
                 opacity: 0,
                transformPerspective: 800
        },{
            rotationX: 0,
            duration: 0.5,
            opacity: 1,
            ease: "spring(2, 0.5, 0.5, 0.5)"
        })
        
   
    })
     


  return (
    <div ref={wrapperRef} className='w-[100vw] h-[100vh]  flex shrink-0 py-20 justify-between items-center '>
        <div className='  flex   flex-col w-full h-full justify-between items-center  px-20  '>
            <div className=' firstpart w-full  h-full flex  justify-center items-center gap-10 '>
            <div className=' heading1 h-1/2 w-fit  flex justify-center items-center  '>
                <h1 className='text-6xl font-[Gabarito] font-bold tracking-[-4%] text-[#2a2a2a] '> I'm learning — </h1>
            </div>
            <div className='flex justify-center items-center w-fit  '>

                    <div className=' design-lable animated-label p-5 bg-[#E4E1FF] rounded-3xl w-fit h-fit rotate-11 '>
                        <div className='p-4 bg-[#ACA1FF] rounded-2xl w-fit h-fit flex justify-center items-center gap-2'>
                             <h1 className='text-8xl italic font-[DM_Serif_Text] tracking-[-10%] text-[#0A0059]'>design</h1>
                        </div> 
                    </div>

                     <div className=' code-label backface-hidden p-5 -ml-10 animated-label bg-[#FFBD2F]/[14%] rounded-3xl w-fit h-fit -rotate-19 '>
                         <div className='p-4 bg-[#FFA82F] rounded-2xl w-fit h-fit flex justify-center items-center gap-2'>
                             <h1 className='text-8xl font-bold font-[Gabarito] tracking-[-2%] text-[#563405]'>code</h1>
                         </div> 
                     </div>

                    <div className=' life-label p-5 backface-hidden ml-10 animated-label bg-[#86FF64]/[45%] rounded-3xl w-fit h-fit rotate-10 '>
                        <div className='p-4 bg-[#04D350] rounded-2xl w-fit h-fit flex justify-center items-center gap-2'>
                            <h1 className='text-8xl font-bold font-[Gabarito] tracking-[-4%] text-[#033917]'>life</h1>
                        </div> 
                    </div>
            </div>   
        </div>
          
        </div>
    </div>
  )
}

export default Story1
