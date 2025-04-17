import fs from 'fs';          // Node.js file system module (To read files)
import path from 'path';      // Node.js path module (To handle file paths) 
import matter from 'gray-matter'; // gray-matter module (To parse front matter from markdown files)
import { serialize } from 'next-mdx-remote/serialize'; // next-mdx-remote module (To serialize MDX content)


export async function getAllBlogs(slug) {
  const blogsPath = path.join(process.cwd(), 'src','Content');
  const categories = fs.readdirSync(blogsPath);

  let BlogData = [];

  for (const category of categories) {
    const categoryPath = path.join(blogsPath, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith('.mdx'));

    for (const file of files) {
      const cleanSlug = file.replace('.mdx', '');

      console.log(`Checking file: ${file} in ${category}`);
      if (cleanSlug === slug) {
        const filePath = path.join(categoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        const mdxSource = await serialize(content);

        BlogData.push({
          slug: cleanSlug,
          frontmatter: data,
          mdxSource,
        });
      }
    }
  }

  return BlogData;
}
  
// export async function getAllBlogs(slug){
//     const pathtoBlogs = path.join(process.cwd(), 'src', 'Content');        // it joins the path to the blogs, which is /src/content
//     const blogCategories = fs.readdirSync(pathtoBlogs);           // it reads the content folder and it contains the three category

//     let BlogData =[];
 
//     blogCategories.forEach((category)=>{             
//         /**
//         as the blogcategories has read 3 folders, which is nothing but Content(design,code,life)
//         if we break due to foreach there will be one folder instead of Content and the path kinda of breaks too, the content will be
//         no more in the path rather that the first folder. and so we need to join that path to the main path.
//         (1folder + 1folder + 1folder = Content Folder)
//          */

//         const categorypath = path.join(pathtoBlogs, category)     // categorypath == \src\content\designblog(which is a directory not a file ) hence readdirsync
//         const blogfiles = fs.readdirSync(categorypath).filter((file)=> file.endsWith('.mdx'))  // as it reads the folder it gives a file name and checks if it ends with a .max-h-dvh

//         blogfiles.forEach((file)=>{                               // blogfiles contains multiple blogfile.mdx now we have to check the slugs and make the path to it.  
//             if ( file.replace('.mdx','') === slug){
                
//                 const filepath = path.join(categorypath, file)
//                 const fileContent = fs.readFileSync(filepath, 'utf-8')    //contains the data of the file

//                 const {data, content} = matter(fileContent)           // destructuring
//                 const mdxSource = await serialize(content)                 // making react component

//                 BlogData.push({                                      //pushing data into array
//                     slug: file.replace('.mdx', ''),
//                     frontmatter: data,                              
//                     mdxSource
//                 })
//             }
//          })
//     }) 
//     return BlogData;
// }


export async function getMetaData() {
    let allblogs =[]
    const pathToBlogs = path.join(process.cwd(),'src', 'Content')
    const blogsCategries = fs.readdirSync(pathToBlogs)    // contains 3 folders 

    blogsCategries.forEach(blogcategory => {
        const pathtoCategory = path.join(pathToBlogs, blogcategory)
        const files = fs.readdirSync(pathtoCategory)

        const blogs = files.map((file) =>{
            const filepath = path.join(pathtoCategory, file )
            const fileContent = fs.readFileSync(filepath, 'utf-8') 
            const {data} = matter(fileContent)

            return {
                slug : file.replace(".mdx", ""),
                frontmatter : data,
                blogcategory
            }
        })
         allblogs = [...allblogs, ...blogs]

        
    });
    return allblogs
}



getAllBlogs();
getMetaData();


































// import fs from 'fs';          // Node.js file system module (To read files)
// import path from 'path';      // Node.js path module (To handle file paths)


// export async function getAllBlogs() {
//     const blogsdirpath = path.join(process.cwd(),'src','BlogData',);
//     // the o/p is C:\Users\LENOVO\Documents\Coding workspace\blog-site\src\BlogData


//     const blogCategories = fs.readdirSync(blogsdirpath)
//     // now it will read inside the path of C:\Users\LENOVO\Documents\Coding workspace\blog-site\src\BlogData
//     // eg:- ['DesignBlogs', 'codeBlogs', 'TravelBlogs']

//     const allblogs = blogCategories.flatMap((category)=>{              // we are passing a category of blogs eg design blogs,
//     const categoryPath = path.join(blogsdirpath, category)             // we will join the design blogs path to the main path to acess the blogs
//     const blogFiles = fs.readdirSync(categoryPath)                     // blogfiles contians all the blogs folder eg; ['why i started this', 'my first blog']
//     const blogData = blogFiles.map((blogFile)=>{                       
//         const blogPath = path.join(categoryPath, blogFile)
//         const blogData = fs.readFileSync(blogPath, 'utf-8')
//         const { data } = matter(fileContent);
        
//     })

//     console.log(blogData)
//     })  

//     return 
// }

// getAllBlogs()