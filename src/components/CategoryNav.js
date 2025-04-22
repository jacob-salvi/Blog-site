import Link from 'next/link'
import React from 'react'

const CategoryNav = () => {

    const categories = ['All topics', 'frontend', 'design', 'casestudy', 'beliefs', 'animation']
  return (
    <nav className=' w-full flex gap-10 items-start p-25'>
        {
            categories.map((category)=>{
                return(

        <Link  key={category} href={`/blogs/categories/${category}`} className='group overflow-hidden  h-6  relative cursor-pointer block'>
                <div className=" flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-6 " >
                    <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] tracking-[-4%] font-normal'>{category}</div>
                    <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] tracking-[-4%]font-normal'>{category}</div>
                </div>

        </Link>
                )

            })
        }
    </nav>
  )
}

export default CategoryNav
