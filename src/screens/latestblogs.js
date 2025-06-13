import React from 'react'
import { Gabarito } from 'next/font/google'
import { DM_Serif_Text } from 'next/font/google'
import Link from 'next/link'

const SingleBlogPost = ({latest}) =>{
  return(
        <div className='w-full h-[100vh] bg-[#2a2a2a] py-[2rem] relative'>
        <div  className='   w-full h-full object-cover  mt-[1.5rem]'>
            <img src={'/blogimages/bg.png'} className='w-full h-full absolute top-0 left-0 '/>
          <Link href={`/blogs/${latest.slug}`}>
            <div className='blogdetails  w-full h-full  flex flex-col  p-20 justify-between  absolute z-10 top-0 left-0'>
              <div className='blogname flex  max-w-[80%] flex-col gap-2'>
                <div className='flex w-fit h-fit px-1 text-[#2a2a2a]  font-[Gabarito] tracking-[-4%] font-semibold bg-[#FFF0B3] text-[.9rem]'>{latest.tag}</div>
                <div className='font-[DM_Serif_Text] text-[3rem] leading-[3.1rem] tracking-[-4%]  text-[#FFFAE7]'>{latest.blogname}</div>
              </div>
              <div className='coverimage-desc  flex justify-between items-end '>
                <div className='font-[Gabarito] font-normal max-w-[30%] tracking-[-4%] text-[#FFFAE7] leading-[1.3rem] text-[1.1rem]'>{latest.description}</div>
                <div className='  h-[300px] object-cover '><img src={latest.coverimage} className='w-full h-full'/></div>
              </div>
            </div>
          </Link>
         </div>
      </div>
  )
  

}

const MultipleBlogPost = ({recent, latest})=>{
  return(

 
  <div className='blogcontainer flex justify-between mt-12 '>
      <Link href={`/blogs/${latest.slug}`}>
        <div className='latestblog w-[850px] h-auto text-[#2a2a2a] flex flex-col gap-2 '>
          <div className='flex w-full justify-between items-center '>
           <div className='flex w-fit h-fit px-1 bg-[#2a2a2a]  font-[Gabarito] text-[#FFF0B3] font-semibold  text-[.9rem]'>{latest.tag}</div>
            <h1 className=' text-[0.9rem] text-[#2a2a2a]/80 font-[DM_Serif_Text]  tracking-[-4%] '>{latest.date}</h1>
          </div>
          <div className='font-[DM_Serif_Text] text-[2rem] leading-none tracking-[-4%]'>{latest.blogname}</div>
          <div className='w-full '><img className='w-full h-auto' src={latest.coverimage}/></div>
          <div className='font-[Gabarito] font-bold tracking-[-4%] text-[#2a2a2a] leading-none text-[1.1rem]'>{latest.description}</div>
        </div>
      </Link>
        

        <div className='recentblogs grid grid-cols-2 gap-6 w-fit h-full '>
          {
            recent.map((blogs, i)=>{
              return(
                <Link key={i} href={`/blogs/${blogs.slug}`}>
          <div  className=' w-fit h-fit flex flex-col gap-4   '>
          <div className='w-[210px] h-[210px] object-cover'><img className='w-full h-full' src={blogs.coverimage}/></div>
          <div className='textcontainer gap-2 max-w-[210px]'>
            <div className='flex w-fit h-fit px-1 bg-[#2a2a2a] text-[#FFF0B3] font-[Gabarito] font-semibold  text-[.9rem]'>{blogs.tag}</div>
            <h1 className=' w-full text-[1.2rem] text-[#2a2a2a] font-[DM_Serif_Text]  tracking-[-4%] '>{blogs.blogname}</h1>
            <h1 className=' text-[0.9rem] text-[#2a2a2a]/30 font-[DM_Serif_Text]  tracking-[-4%] '>{blogs.date}</h1>
          </div>
        </div>
        </Link>
              )
             
            })
          }
        </div>
       
  </div>
  ) 

}


const latestblogs = ({latest, recent}) => {
  return (
<    div className='w-full h-full py-20 px-[1.5rem] flex flex-col'>
      <div className='header flex '>
        <div className='text flex flex-col gap-0'>
            <h1 className='text-[9rem] font-[Gabarito] font-bold tracking-[-4%] text-[#2a2a2a] leading-none'>Blogs.</h1>
            <p className='text-[1.5rem] font-[DM_Serif_Text] tracking-[-4%] text-[#2a2a2a]/80 -mt-4 '>the Latest</p>
        </div>
      </div>
      {recent.length === 0
        ? <SingleBlogPost latest={latest} />
        : <MultipleBlogPost latest={latest} recent={recent} />
      }

      {/* <div className='w-full h-[100vh] py-[1.5rem]'>
        <div  className=' relative  w-full h-full object-cover bg-green-800 mt-[1.5rem]'>
            <img src={latest[0].coverimage} className='w-full h-full opacity-90 blur-xl'/>
          <Link href={`/blogs/${latest[0].slug}`}>
            <div className='blogdetails  w-full h-full  flex flex-col  p-10 justify-between  absolute z-10 top-0 left-0'>
              <div className='blogname flex  max-w-[80%] flex-col gap-2'>
                <div className='flex w-fit h-fit px-1 bg-[#2a2a2a]  font-[Gabarito] text-lime-200 font-semibold  text-[.9rem]'>{latest[0].tag}</div>
                <div className='font-[DM_Serif_Text] text-[3rem] leading-[3.1rem] tracking-[-4%]  text-lime-200'>{latest[0].blogname}</div>
              </div>
              <div className='coverimage-desc  flex justify-between items-end '>
                <div className='font-[Gabarito] font-normal max-w-[30%] tracking-[-4%] text-lime-200 leading-[1.3rem] text-[1.1rem]'>{latest[0].description}</div>
                <div className=' w-[400px] h-[400px] object-cover drop-shadow-2xl'><img src={latest[0].coverimage} className='w-full h-full'/></div>
              </div>
            </div>
          </Link>
         </div>
      </div> */}

      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>       
        <img className='w-[50%] h-[50%]' src={'/assests/illustration.svg'}/>
      </div>
      
    </div>
  )
}

export default latestblogs
