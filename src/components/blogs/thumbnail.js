import React from 'react'

const thumbnail = ({frontmatter}) => {
  return (
    <div>
        <div className='thumbnai-section w-full h-full object-cover'>
                <img src={frontmatter.coverimage} className='w-full h-[100vh] object-cover'/>
        </div>
    </div>
  )
}

export default thumbnail
