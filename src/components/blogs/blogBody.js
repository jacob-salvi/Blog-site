import React from 'react'

const blogBody = ({content}) => {
  return (
    <div className='blog-body-section  h-screen grid grid-cols-[1fr_3fr_1fr] gap-4 px-12 '>
        <div className=''>left side</div>
        <div className='mt-12 '>{content}</div>
        <div className=''> right side</div>
    </div>
  )
}

export default blogBody

