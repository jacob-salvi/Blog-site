'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import CategoryNav from '../CategoryNav'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


const Header = ({frontmatter}) => {
const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBack = () => {
    if (!isClient) return;
    
    // Check if we have history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback to blog home if no history
      
      router.push('/blog');
    }
  };

  return (
        <div className='head-section w-full h-[50vh] px-25  pt-0 bg-[#FFFAE7] '>
               <div className='head-content w-full h-full flex flex-col justify-between '> 
                    <div className='text-contianer'>
                        
                        <div onClick={handleBack} className='back-btn w-fit flex justify-between items-center gap-3  mb-4'>
                            <div className=''><svg width="30" height="30" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 6.5H1M1 6.5C3.83333 5.83333 10 3.7 12 0.5M1 6.5C4.33333 7.16667 11.2 9.1 12 11.5" stroke="#2A2A2A"/>
                                </svg>
                            </div>
                            <button  className='font-[DM_Serif_Text] text-[1.5rem] italic'>Back</button>
                        </div>
                        <div className='title-container flex flex-col gap-2'>
                            <div className='tag-lable font-[Gabarito] font-bold capitalize p-1 bg-[#2a2a2a] w-fit text-[1rem] leading-none text-[#FFF0B3] '>{frontmatter.tag}</div>
                            <div className='title-description  flex flex-col justify-center items-start gap-2 '>
                                <h1 className='text-[2.5rem] max-w-2/3 font-[DM_Serif_Text] tracking-[-4%] leading-none text-[#2a2a2a]'>{frontmatter.blogname}</h1>
                                <p className='text-[1rem] max-w-2/3 font-[Gabarito] tracking-[-4%] font-extralight text-[#2a2a2a]    '>{frontmatter.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='author-readtime-contianer mb-10 flex justify-between items-center '>
                        <div className='flex gap-1 font-[Gabarito] font-bold capitalize tracking-[-4%] text-[#2a2a2a]'><span className='font-[DM_Serif_Text] italic text-[#2a2a2a]/50 lowercase font-light'>by</span>{frontmatter.author}<span className='font-[DM_Serif_Text] italic text-[#2a2a2a]/50 lowercase font-light'>on</span>{frontmatter.date}</div>
                        <div className='font-[DM_Serif_Text] italic font-light'>{frontmatter.readtime}</div>
                    </div>
                </div>
            </div>
  )
}

export default Header
