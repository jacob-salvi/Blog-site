import Link from 'next/link'
import React from 'react'

const LatestBlogCard = ({latest}) => {
  return (
    <div className='w-full h-1/3  flex gap-5  p-3  items-center hover:bg-black/5  '>
        <div className='h-[14vh] w-[12vw] overflow-hidden '>
            <img src={latest.coverimage} className=' w-full h-full object-cover'/>
        </div>
        <div className='w-full h-full'>
          <Link href={`/blogs/${latest.slug}`} className='block '>
          <div className='textContainer flex flex-col gap-2 w-fit h-fit'>
              <div className='blogtag  w-fit h-fit  p-1 bg-[#2a2a2a] text-[#FFF0B3] font-[Gabarito] font-light text-[0.9rem] leading-none tracking-[-2%]'>{latest.tag}</div>
              <div className='titleDescContainer text-[#2a2a2a] flex flex-col gap-2'>
                <h3 className='text-[1.2rem] leading-none tracking-[-4%] line-clamp-2 font-[DM_Serif_Text] '>{latest.blogname}</h3>
                <p className=' text-[#2a2a2a]/50 text-[1rem] leading-none  tracking-[-4%] font-[Gabarito] '>{latest.description}</p>
              </div>
            </div>
          </Link>

        </div>
      
    </div>
  )
}



export default LatestBlogCard  
