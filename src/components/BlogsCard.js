import React from 'react'
import { getMetaData } from '@/lib/getAllBlogs';
import Link from 'next/link';



const BlogsCard = ({Blogs}) => {
  return (
    <>
      {Blogs.map((blog, index) => {
        const {frontmatter, slug}= blog
        return (
          <Link href={`/Blogs/${slug}`}  key={index} className='block'>
          <div key={index} className='blogcontainer  max-w-[400px] h-[440px] flex flex-col gap-3 '>
            <div className='imgContainer rounded-2xl  w-full h-full overflow-hidden'>
              <img src={frontmatter.coverimage} alt="" className='w-full h-full object-cover rounded-t-lg' />
            </div>
            <div className='textContainer flex flex-col gap-2'>
              <div className='blogtag  w-fit p-1 bg-[#2a2a2a] text-[#FFF0B3] font-[Gabarito] font-bold text-[1rem] leading-none tracking-[-4%]'>{frontmatter.tag}</div>
              <div className='titleDescContainer text-[#2a2a2a] flex flex-col gap-2'>
                <h3 className='text-[2rem] leading-none tracking-[-4%] font-[DM_Serif_Text] '>{frontmatter.blogname}</h3>
                <p className=' text-[#2a2a2a]/50 text-[1rem] leading-none  tracking-[-4%] font-[Gabarito] '>{frontmatter.description}</p>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </>
  );
}

export default BlogsCard
