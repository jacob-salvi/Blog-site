import { promises as fs } from 'fs'
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import BlogsCard from '@/components/BlogsCard';

export default async function BlogList() {
  const rootdir = path.join(process.cwd(), 'src', 'Content')
      const categories =  await fs.readdir(rootdir)
  
      let allBlogs = [];
  
      for(const category of categories){
          const categoryPath = path.join(rootdir, category)
          const files = await fs.readdir(categoryPath)

          const filesData = await Promise.all(files.map(async (filename)=>{
            const data = await fs.readFile(path.join(categoryPath, filename), 'utf-8')

            const {frontmatter} = await compileMDX({
              source:data,
              options: {
                parseFrontmatter: true
              }
            })

            return{
              filename,
              slug: filename.replace('.mdx', ''),
              ... frontmatter
            }
          }))
          allBlogs.push(... filesData)
      }
      
      return(
        <div className='grid grid-cols-3 p-25'>
          <BlogsCard Blogs={allBlogs}/>


        </div>
      )
  
}