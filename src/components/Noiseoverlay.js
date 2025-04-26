import React from 'react'

const Noiseoverlay = () => {
  return (
    <svg className=' fixed top-0 left-0 w-full h-full pointer-events-none z-1  mix-blend-multiply' xmlns="http://www.w3.org/2000/svg" >
        <filter id='noise'>
            <feTurbulence
            type="fractalNoise"
             baseFrequency={3}
             numOctaves={3}
             seed={2} 
             stitchTiles="stitch"
            />
            <feColorMatrix
            type='saturate'
            values='0.1'
            />
        </filter>
        <rect width="100%" height="100%" filter='url(#noise)'/>
    </svg>
  )
}

export default Noiseoverlay
