'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const CustomCursor = () => {
    const [coordinates, setCoordinates] = useState({x:0, y:0});
    useEffect(()=>{
        const handlemouse = (e)=>{
            setCoordinates({ x: e.clientX, y:e.clientY})
        }
        window.addEventListener('mousemove', handlemouse)

        return () => window.removeEventListener('mousemove', handlemouse)
    })
  return (
    <div 
    style={{
        left: coordinates.x - 4,
        top: coordinates.y - 4
    }}
    className='w-4 h-4 rounded-full bg-[#2a2a2a] fixed z-999   '>
      
    </div>
  )
}

export default CustomCursor

