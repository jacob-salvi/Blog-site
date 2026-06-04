import React from 'react';
import Navbar from '@/components/Navbar';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';
import { categoryFetch } from '@/utils/categoryFetch';


export default async function BlogPage({params}) {
    params = await params 
    const {category}= params

    const filteredBlogs = await categoryFetch(category)


    return(
        <>
        <Navbar/>
        <CategoryNav/>
        <div className='grid grid-cols-3 px-25'>
          <BlogsCard Blogs={filteredBlogs}/>
        </div>
        </>
    )
}


// export default async function BlogPage({params}) {
//     params = await params
//     const {category} = params

//     const rootdir = path.join(process.cwd(), 'src', 'Content')
//     const categories =  await fs.readdir(rootdir)

//     let fileContent = null;

//     for(const category of categories){
//         const categoryPath = path.join(rootdir, category)
//         const files = await fs.readdir(categoryPath)

//         if(files.includes(`${category}.mdx`)){
//             const filepath = path.join(categoryPath,  `${slug}.mdx`)
//             fileContent = await fs.readFile(filepath, 'utf-8')
//             break;
//         }
//     }

//     if(!fileContent){
//         return  <div>file data not found</div>
//     }

//     const {content, frontmatter} = await compileMDX({
//         source: fileContent,
//         options:{
//             parseFrontmatter: true
//         }
//     }) 

//     return (
//         <div className="">
//             <Navbar/>
//         <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
//         <p className="text-sm text-gray-500 mb-6">
//           By {frontmatter.author} on {frontmatter.date}
//         </p>
//         <div className="prose dark:prose-invert">{content}</div>
//       </div>
//       );
      
// }