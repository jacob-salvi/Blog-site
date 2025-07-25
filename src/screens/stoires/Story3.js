import React, { useEffect, useRef } from 'react'
import { SplitText, } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(SplitText);


const Story3 = () => {

  const unfinishref = useRef(null);
  const overwhelmedref = useRef(null);
  const unsureref = useRef(null);
  const leadingTextRef = useRef(null);
  const descref = useRef(null)
  const containerref = useRef(null)
  const sureref = useRef(null)

  useEffect(()=>{
    const lead = new SplitText(leadingTextRef.current, { type: 'words' });
    const unfinish = new SplitText(unfinishref.current, { type: 'chars' });
    const overwhelmed = new SplitText(overwhelmedref.current, { type: 'chars' });
    const unsure = new SplitText(unsureref.current, { type: 'words' });
    const desc = new SplitText(descref.current, {type:'words'})
    const container = new SplitText(containerref.current, {type: 'words'})
    const sure = new SplitText(sureref.current, {type:'words'})

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leadingTextRef.current,
        containerAnimation: gsap.getById('outtercontainer'),
        start: 'top center',
        end: 'bottom top',
        scrub: true,

        
      }
    })

    tl.from(lead.words, {
      y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 2.2, 
    ease: "back",
    stagger: 0.10
    })

    tl.from(unfinish.chars, {
       x: -100,
    opacity: 0,
    duration: 2.2, 
    ease: "power4",
    stagger: 0.04,
    color: '#EAE5D4'
    })

    tl.fromTo(overwhelmed.chars,
      {
        opacity:0,
        scale:0,
        duration:2.2      },
      {
        opacity:1,
        duration:2.2,
        y: (i)=> i % 2 == 0 ? "-10" : "10",
        stagger: 0.04,
        ease: "power4",
        scale: 1.025,
      }
    )

    tl.from(unsure.words, {
    y: -50,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 2.2, 
    ease: "power4",
    stagger: 0.04,
    })

    tl.to(sure.words,{
      duration:2.2,
      transformOrigin: "bottom left",
      color:"#EAE5D4"
    })

    tl.from(desc.words,{

   y: 50,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 2.2, 
    ease: "power4",
    stagger: 0.04,
    
    })


//  tl.fromTo(lead.words,{
//   y:20,
//   opacity:0,
//  },{
//   y:0,
//   opacity:1,
//   duration: 3,
//   stagger:0.7,

//  })

// tl.from(unfinish.chars,{
//   y:50,
//   opacity:0, 
//   duration:1.2
// })
// tl.to(overwhelmed.chars,
//   {
//   y:(i)=> i % 2 == 0 ? '-10': '10', 
//   rotation: () => gsap.utils.random(-10, 10),
//   duration: 2.1,
//   stagger:{
//     each: 0.15,
//     from: 'center'
//   }
  

// })

// tl.fromTo(unsure.words,{
//   y:200,
//   x:30,
//   ease:"back.inOut",
//   opacity:0,
//   rotate:20
// },{
//   y:0,
//   x:0,
//   duration:1,
//   opacity:1,
//   rotate:0
// })

// tl.from(desc.words,{
//   y:20,
//   opacity:0,
//   stagger: 1,
// })
    return () => tl.revert();

  })
  return (
    <div ref={containerref} className='w-[100vw] h-[100vh] flex flex-col shrink-0 items-center   justify-center z-10'>
      <div className=' bg-[#fffae7]  w-full leadingText text-6xl  font-gabarito font-bold tracking-[-4%] text-[#2a2a2a]'><span ref={leadingTextRef}  >I often left things</span> <span ref={unfinishref}> Unfinished, </span><span ref={overwhelmedref}> Overwhelmed, </span><span ref={unsureref}> and Un<span ref={sureref}>sure</span> </span></div>
      <div  ref={descref} className=' flex w-full justify-end font-dmSerifText italic text-[#2a2a2a] text-[1.2rem]'>So I started this — not to teach, but to share.</div>
    </div>
  )
}

export default Story3
