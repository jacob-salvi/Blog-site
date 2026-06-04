import React from 'react'

const Thumbnail = ({ frontmatter }) => {
  if (!frontmatter?.image) return null

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-5xl mt-20'>
        <img src={frontmatter.image} alt={frontmatter.title} className='w-full object-cover' />
      </div>
    </div>
  )
}

export default Thumbnail