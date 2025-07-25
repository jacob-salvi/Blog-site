'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryNav = () => {

    const categories = ['All topics', 'frontend', 'design', 'casestudy', 'beliefs', 'animation']
    const pathname = usePathname()
  return (
    <nav className=' w-full flex gap-10 items-start px-25 pt-25 pb-10 '>
        {
            categories.map((category)=>{
                const isAlltopics = category === 'All topics'
                const herf = isAlltopics ? '/blogs' : `/blogs/categories/${category}`
                return(

        <Link  key={category} href={herf} className='group overflow-hidden  h-6  relative cursor-pointer block'>
                <div className=" flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-6 " >
                    <div className='text-[#2a2a2a] font-gabarito text-[1rem] tracking-[-4%] font-normal'>{category}</div>
                    <div className='text-[#2a2a2a] font-gabarito text-[1rem] tracking-[-4%]font-normal'>{category}</div>
                </div>

        </Link>
                )

            })
        }
    </nav>
  )
}

export default CategoryNav
