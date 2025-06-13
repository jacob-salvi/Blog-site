import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { Gabarito, DM_Serif_Text } from 'next/font/google'
import { ReactLenis, useLenis } from 'lenis/react'


const blogBody = ({content}) => {
  return (
    <div className='blog-body-section py-20  h-screen grid grid-cols-[1fr_3fr_1fr] gap-4 px-12 '>
        <div className=''></div>
        <article>
          {/* <MDXRemote {...content}  /> */}
          {content}
        </article>
        <div className=''></div>
    </div>
  )
}

export default blogBody

