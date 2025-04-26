import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Navbar from '@/components/Navbar';
import BlogsCard from '@/components/BlogsCard';
import CategoryNav from '@/components/CategoryNav';


export default async function BlogPage({params}) {
    params = await params 
    const {category}= params

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