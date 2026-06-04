'use client'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { Gabarito, DM_Serif_Text } from 'next/font/google'
import { ReactLenis, useLenis } from 'lenis/react'
import { useRouter } from 'next/navigation'


const blogBody = ({content}) => {
    const router = useRouter();

  const handleBack = () => {
    window.history.length > 1 ? router.back() : router.push('/')
  }

  return (
    <div className='w-full  my-14  px-3 md:px-0  flex flex-col items-center gap-10 '>
        <article>
          {/* <MDXRemote {...content}  /> */}
          {content}
        </article>
        <div onClick={handleBack} className='back-btn w-fit mr-5  cursor-pointer flex justify-between items-center gap-3'>
            <div>
                <svg width="30" height="30" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27 6.5H1M1 6.5C3.83333 5.83333 10 3.7 12 0.5M1 6.5C4.33333 7.16667 11.2 9.1 12 11.5" stroke="#2A2A2A"/>
                </svg>
             </div>
          <button  className='font-dmSerifText text-[1.5rem] italic cursor-pointer '>Back</button>
         </div>
    </div>
  )
}

export default blogBody

