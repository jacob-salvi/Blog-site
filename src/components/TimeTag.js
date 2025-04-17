'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const TimeTag = () => {
    const indiaTime = () => new Date().toLocaleTimeString( 'en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit',  } );
    const [time, setTime] = useState(indiaTime());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(indiaTime())
        },1000)
        return () => clearInterval(interval)
    })

  return (
    <div className='font-[Gabarito] w-fit  font-bold text-[1rem] text-[#2a2a2a] flex justify-center items-center '>
      <h1 className='uppercase leading-none tracking-[-4%]'>{time}, <span className='capitalize'>India</span></h1>
    </div>
  )
}

export default TimeTag
