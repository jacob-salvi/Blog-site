import React from 'react';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';
import { blogListFetch } from '@/utils/blogListFetch';

export  const metadata = {
  title: 'blogs - Jacob Salvi',
}

export default async function BlogList() {


  const allBlogs = await blogListFetch()
      
      return(
        <>
        <div className='flex flex-col '>

        <CategoryNav/>
        </div>
        <div className='grid grid-cols-3 px-25'>
          <BlogsCard Blogs={allBlogs}/>
        </div>
        </>
      )
  
}