
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Navbar from '@/components/Navbar';
import CategoryNav from '@/components/CategoryNav';
import { DM_Serif_Text, Gabarito } from 'next/font/google';

export default async function BlogPage({params}) {
    params = await params
    const {slug} = params

    const rootdir = path.join(process.cwd(), 'src', 'Content')
    const categories =  await fs.readdir(rootdir)

    let fileContent = null;

    for(const category of categories){
        const categoryPath = path.join(rootdir, category)
        const files = await fs.readdir(categoryPath)

        if(files.includes(`${slug}.mdx`)){
            const filepath = path.join(categoryPath,  `${slug}.mdx`)
            fileContent = await fs.readFile(filepath, 'utf-8')
            break;
        }
    }

    if(!fileContent){
        return  <div>file data not found</div>
    }

    const {content, frontmatter} = await compileMDX({
        source: fileContent,
        options:{
            parseFrontmatter: true
        }
    }) 

    return (

        <div className='main w-[100vw] h-full flex flex-col'>
            <Navbar/>
            <CategoryNav/>
            <div className='head-section w-full h-[50vh] px-25  pt-0 bg-[#FFFAE7] '>
                <div className='head-content w-full h-full flex flex-col justify-between '>
                    <div className='text-contianer'>
                        <div className='back-btn w-fit flex justify-between items-center gap-3  mb-4'>
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
            <div className='thumbnai-section w-full h-full object-cover'>
                <img src={frontmatter.coverimage} className='w-full h-[100vh] object-cover'/>
            </div>

        </div>
    //     <div className="">
    //         <Navbar/>
    //     <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
    //     <p className="text-sm text-gray-500 mb-6">
    //       By {frontmatter.author} on {frontmatter.date}
    //     </p>
    //     <div className="prose dark:prose-invert">{content}</div>
    //   </div>
      );
      
}