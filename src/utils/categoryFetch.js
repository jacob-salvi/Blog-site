import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export async function categoryFetch(category) {

     const rootdir = path.join(process.cwd(), 'src', 'Content')
        const categories =  await fs.readdir(rootdir)
    
        let categoryBlogs = [];
    
        for(const cat of categories){
            const categorypath = path.join(rootdir, cat)
            const files = await fs.readdir(categorypath)
    
            const filedata = await Promise.all(files.map(async(filename)=>{
                const data = await fs.readFile(path.join(categorypath, filename), 'utf-8')
    
                const {frontmatter} = await compileMDX({
                    source:data,
                    options:{
                        parseFrontmatter:true,
                    }
                })
                return{
                    filename,
                    slug: filename.replace('.mdx', ''),
                    ...frontmatter
                }
            }))
            categoryBlogs.push(...filedata)
    
            
        }
    
        const filteredBlogs = categoryBlogs.filter((blogs)=>blogs.category.toLowerCase() === category.toLowerCase())
        
    return filteredBlogs
}