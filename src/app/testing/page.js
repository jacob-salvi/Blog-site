import { promises as fs } from 'fs'
import path from 'path';

import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';
import Navbar from '@/components/Navbar';
import Hero from '@/screens/hero';
import Story from '@/screens/story';
import { Gabarito, DM_Serif_Text, DM_Serif_Display } from 'next/font/google';
import Header from '@/components/blogs/header';
import Thumbnail from '@/components/blogs/thumbnail';
import Blogbody from '@/components/blogs/blogBody';
import { fetchMdxData } from '@/utils/fetchMdxData';
import Highlight from '@/screens/highlight';
import Story2 from '@/screens/stoires/Story2';
import Story4 from '@/screens/stoires/Story4';
import Callouts from '@/lib/MDXuiElements/callouts';
import CodeBlock from '@/lib/MDXuiElements/codeblock';
import WhoAmI from '@/screens/whoAmI';
import Footer from '@/screens/footer';



export default async function BlogList() {

   const slug = 'my-first-code'
    const {content, frontmatter} = await fetchMdxData(slug)
    

  // const rootdir = path.join(process.cwd(), 'src', 'Content')
  //     const categories =  await fs.readdir(rootdir)
  
  //     let allBlogs = [];
  
  //     for(const category of categories){
  //         const categoryPath = path.join(rootdir, category)
  //         const files = await fs.readdir(categoryPath)

  //         const filesData = await Promise.all(files.map(async (filename)=>{
  //           const data = await fs.readFile(path.join(categoryPath, filename), 'utf-8')

  //           const {frontmatter} = await compileMDX({
  //             source:data,
  //             options: {
  //               parseFrontmatter: true
  //             }
  //           })

  //           return{
  //             filename,
  //             slug: filename.replace('.mdx', ''),
  //             ... frontmatter
  //           }
  //         }))
  //         allBlogs.push(... filesData)
  //     }
      
      return(
        <>
        
        {/* <Header frontmatter={frontmatter}/>
        <Thumbnail frontmatter={frontmatter}/>
        <Blogbody content={content}/> */}
        <main className='w-full h-full '>
          <Highlight/>
          <Story2/>
          <Story4/>
          <Callouts type='default'>Smartphones are no longer a thing for communication only: today, they cover multiple needs and  help us to solve a variety of problems. Mobile applications let us study and entertain, do a lot of basic operations in seconds,   </Callouts>
          <span className='h-12'>h11</span>
          <Callouts type='info'>Smartphones are no longer a thing for communication only: today, they cover multiple needs and  help us to solve a variety of problems. Mobile applications let us study and entertain, do a lot of basic operations in seconds,   </Callouts>
        <CodeBlock/>
        <WhoAmI/>
        
        
        {/* <Story/>
        <Story1/> */}
        </main>
        <Footer/>



        

          {/* <CategoryNav/>
          <svg width="550" height="517" viewBox="0 0 550 517" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54 124.502C-9.66664 140.502 -33.9998 222.501 86.0001 222.502M127.5 243C95 246 100.5 292 143.5 287.5M373.5 374.001C411.5 441.501 535.5 425 513 332.501M250.558 41.9337C283.058 -22.0663 395.5 -11.9999 391.5 79.5002M306.5 117C272.442 104.066 245 113.5 228.5 134.5M261 191C237 203 238 220.5 279 231M247.5 336.501C254.267 346.035 249.419 359.276 242.5 371C224.608 401.315 180.5 347.5 157.5 341M341 363.501C310.333 355.167 209.501 402.901 230.057 454.934C246.057 495.434 223.057 524.934 134.557 513.434M475 101.5C512.333 93 576.5 93.7 534.5 164.5M388.5 278C394.5 286.833 397.9 306.3 363.5 313.5" stroke="#2A2A2A" stroke-width="2" strokeDasharray="6 6"/>
</svg>
          
        <div className='grid grid-cols-3 p-25'>
          <BlogsCard Blogs={allBlogs}/>
  

        </div> */}
        </>
      )
  
}