import React from 'react'
import Link from "next/link";

const navlinks =[
    {
        name: "Work",
        linkto:"/work"
    },

    {
        name:"Blogs",
        linkto:"/blogs"
    },

    {
        name:"Who am I?",
        linkto:"/about"
    }
]
const Navbar = () => {
  return (
    <div className=' w-full py-8 px-25 navbar flex justify-between'>

        <div><p className='font-[Gabarito] font-bold text-2xl '>jacob.</p></div>
        <div className='flex gap-20'>
            {
            navlinks.map((links,index) => (
                <Link  key={index} href="/work" className="group overflow-hidden  h-6  relative cursor-pointer block">
                    <div className=" flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-6 " >
                        <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] font-bold'>{links.name}</div>
                        <div className='text-[#2a2a2a] font-[Gabarito] text-[1rem] font-bold'>{links.name}</div>
                    </div>
                </Link>
                    ))
            }
        </div>
    </div> 
  )
}

export default Navbar
