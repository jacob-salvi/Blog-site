import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import {components} from '@/lib/mdxComponent.js';

export  async function fetchMdxData(slug) {
    
    // join the path to the content directory where the mdx files are stored
    const rootdir = path.join(process.cwd(), 'src', 'Content') 

    // then read the directory to get the categories
    const categories =  await fs.readdir(rootdir)

    // this is for storing the file content
    let fileContent = null;

    // loop through the categories to find the file, as we have multiple categories
    // and each category has its own directory
    // we need to check each category for the file

    for(const category of categories){
            const categoryPath = path.join(rootdir, category)
            const files = await fs.readdir(categoryPath)
    
            if(files.includes(`${slug}.mdx`)){
                const filepath = path.join(categoryPath,  `${slug}.mdx`)
                fileContent = await fs.readFile(filepath, 'utf-8')
                break;
            }
        }

    if(!fileContent)
    {
        return  <div>file data not found</div>
    }
    
    const {content, frontmatter} = await compileMDX({
            source: fileContent,
            options:{
                parseFrontmatter: true
            },
            components: components// pass the components to the compileMDX function
        }) 
   
        return (
        {content, frontmatter} // return the content and frontmatter as an object
    )
}