'use client'

import React, { use } from 'react'
import FancyTag from '../FancyTag'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react' 


const TagAnimation = () => {

  const [offset, setoffset] = useState({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (e)=>{
      const centerX = window.innerWidth/2;
      const centerY = window.innerHeight/2;

      const moveX = (e.clientX - centerX)/25;
      const moveY = (e.clientY - centerY)/25;

      const rotateX = (e.clientY - centerY)/50;
      const rotateY = (e.clientX - centerX)/50;

      setoffset({x:moveX, y:moveY});
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  },[]);



  return (
    
        <div className='h-[50vh]  relative  '>
        <svg className='absolute left-[3rem] top-[1rem]' width="550" height="517" viewBox="0 0 550 517" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M54 124.502C-9.66664 140.502 -33.9998 222.501 86.0001 222.502M127.5 243C95 246 100.5 292 143.5 287.5M373.5 374.001C411.5 441.501 535.5 425 513 332.501M250.558 41.9337C283.058 -22.0663 395.5 -11.9999 391.5 79.5002M306.5 117C272.442 104.066 245 113.5 228.5 134.5M261 191C237 203 238 220.5 279 231M247.5 336.501C254.267 346.035 249.419 359.276 242.5 371C224.608 401.315 180.5 347.5 157.5 341M341 363.501C310.333 355.167 209.501 402.901 230.057 454.934C246.057 495.434 223.057 524.934 134.557 513.434M475 101.5C512.333 93 576.5 93.7 534.5 164.5M388.5 278C394.5 286.833 397.9 306.3 363.5 313.5" stroke="#2a2a2a" strokeWidth="2" strokeDasharray="6 6"/>
        </svg>

        <motion.div
                animate={{x: -offset.x, y: -offset.y}}
                transition={{duration: 0.5}} className='z-3'>
        <FancyTag variant="blueBlack" text="Animation" rotation="-5" top="2" left="12" zindex={3} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x *0.1, y: -offset.y *1.1}}
        transition={{duration: 0.5, }} className='z-1'>
        <FancyTag variant="blueBlack" text="Three.js" rotation="10" top="1" left="24" zindex={1} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*0.5 , y: -offset.y *1.5}}
        transition={{duration: 0.5}} className='z-5'>
        <FancyTag variant="blueCream" text="React" rotation="-10" top="-2" left="7" zindex={5}/>
        </motion.div>

        <motion.div 
        animate={{x: -offset.x, y: -offset.y}}
        transition={{duration: 0.5}} className='z-1'>
        <FancyTag variant="blueCream" text="3D design" rotation="-4" top="-5"  left="14" zindex={1}/>
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*0.5, y: -offset.y*1.5}}
        transition={{duration: 0.5}} className='z-5'>
        <FancyTag variant="blueCream" text="Illustrations." rotation="-9" top="-8" left="24" zindex={5} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*1.2, y: -offset.y*1.2}}
        transition={{duration: 0.5}} className='z-6'>  
        <FancyTag variant="blueBlack" text="Figma" rotation="9" top="-10" left="9" zindex={6} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x, y: -offset.y,}}
        transition={{duration: 0.5}} className='z-1'>   
        <FancyTag variant="blueBlack" text="User Experience" rotation="-2" top="-12" left="12" zindex={1} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*0.5, y: -offset.y*1.1}}
        transition={{duration: 0.5}} className='z-6'>   
        <FancyTag  variant='blueBlack' text="Faith" rotation="7"  top="-14" left="32" zindex={6} />
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*0.6, y: -offset.y*1.6}}
        transition={{duration: 0.5}} className='z-1'>
        <FancyTag variant="blueCream" text="Thoughts" rotation="8" top="-16" left="18"  zindex={1}/>   
        </motion.div>

        <motion.div 
        animate={{x: -offset.x*0.2, y: -offset.y*1.2}}
        transition={{duration: 0.5}} className='z-1'>
        <FancyTag variant="blueCream" text="Life" rotation="-7" top="-21" left="10" zindex={1} />    
        </motion.div>
        </div>
  )
}

export default TagAnimation
