import React from 'react';
import fs from 'fs';          // Node.js file system module (To read files)
import path from 'path';      // Node.js path module (To handle file paths) 
import matter from 'gray-matter'; // gray-matter module (To parse front matter from markdown files)
import { serialize } from 'next-mdx-remote/serialize'; 

export default async function getBlogBySlug(slug) {

    const maindirpath = path.join(process.cwd(), 'src',  'Content')

    //get all categories folders 
    const categories = fs.readdirSync(maindirpath)

    //applying for of loop to go through each categories 
    for(const category of categories){
        const categorypath = path.join(maindirpath, category)
        const files = fs.readdirSync(categorypath)

        // checking for matching file 
        const  matchingfile = files.find((file)=>file.replace(".mdx", "") === slug)

        if(matchingfile){
            const filepath = path.join(categorypath, matchingfile);
            const fileContent = fs.readFileSync(filepath, 'utf-8');
            const {data, content}  = matter(fileContent)

            if (!data) {
                throw new Error(`Frontmatter missing in ${filepath}`);
            }
            const mdxSource = await serialize(content)

            return{
                slug,
                category,
                frontmatter : data,
                mdxSource
                
            }
        }
        
    }
    throw new Error(`Blog post with slug "${slug}" not found!`);
} 

getBlogBySlug();