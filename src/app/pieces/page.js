import React from 'react';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';
import { blogListFetch } from '@/utils/blogListFetch';
import Piece from '@/components/Piece';
import Collage from '@/components/Collage';

export  const metadata = {
  title: 'blogs - Jacob Salvi',
}

export default async function BlogList() {


  const allBlogs = await blogListFetch()
      
      return(
        <>
                  <Collage content={allBlogs}/>

        {/* <div className='flex flex-col '>
        </div>
        <div className='grid grid-cols-3 '>
          <BlogsCard Blogs={allBlogs}/>
          <Collage content={allBlogs}/>
        </div> */}
        </>
      )
  
}