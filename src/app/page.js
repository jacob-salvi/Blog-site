import React from 'react';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';
import { blogListFetch } from '@/utils/blogListFetch';
import Piece from '@/components/Piece';
import Collage from '@/components/Collage';

export  const metadata = {
  title: 'Ode to everything for nothing',
}

export default async function BlogList() {


  const allBlogs = await blogListFetch()
      
      return(
        <>
        <div className='relative min-h-screen'>
          <div className='absolute -z-10 inset-0 bg-[var(--color-bg)] pointer-events-none select-none justify-center'>
          <img src='/textures/lines.svg' alt='' className='w-[100%] h-[100%] object-cover' />
          </div>
          <Collage content={allBlogs}/>
        </div>
                  

        {/* <div className='flex flex-col '>
        </div>
        <div className='grid grid-cols-3 '>
          <BlogsCard Blogs={allBlogs}/>
          <Collage content={allBlogs}/>
        </div> */}
        </>
      )
  
}