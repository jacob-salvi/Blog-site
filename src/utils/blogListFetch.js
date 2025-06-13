import { promises as fs } from 'fs'
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';


export async function blogListFetch(slug) {

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
          allBlogs.sort((a, b) => new Date(b.std_date) - new Date(a.std_date))

    return allBlogs
}