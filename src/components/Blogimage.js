import React from 'react'

const Blogimage = ({src, alt, width, height}) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img src={src} alt={alt} width={width} height={height} className='w-full h-full object-cover rounded-lg' />
    </div>
  )
}

export default Blogimage
