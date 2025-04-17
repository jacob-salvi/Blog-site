// app/Blogs/[slug]/page.js
import { MDXRemote } from 'next-mdx-remote';
import getBlogBySlug from '@/lib/getBlogBySlug';
import React from 'react';


// app/Blogs/[slug]/page.js
export default async function BlogPage({ params }) {
   // Now properly awaited
  
  try {
    const blog = await getBlogBySlug(params.slug);
    
    if (!blog) {
      return <div>Blog post not found</div>;
    }

    return (
      <div className="max-w-3xl mx-auto py-10">
        <h1>{blog.frontmatter.blogname}</h1>
        <MDXRemote {...blog.mdxSource} />
      </div>
    );
  } catch (error) {
    return <div>Error loading blog post</div>;
  }
}
// // This MUST be a default export function
// export default async function page({params}) { // ← Must be async function
//   const blog = await getBlogBySlug(params.slug);
  
//   return (
//     <div className="max-w-3xl mx-auto py-10">
//       <h1>{blog.frontmatter.blogname}</h1>
//       <MDXRemote {...blog.mdxSource} />
//     </div>
//   );
// }









// import React from 'react'
// import { getAllBlogs } from '@/lib/getAllBlogs'
// import { MDXRemote } from 'next-mdx-remote';

// export default async function page(params) {
//   const {slug} = params
//   console.log(slug)
//   const blogdataArr = await getAllBlogs(slug)
  
//   const blogdata = blogdataArr[0]
  
//     if (!blogdata || blogdata.length === 0) {
//       return <div>Blog not found</div>;
//     }



//   const {frontmatter, mdxSource} = blogdata
  
//   return (
//     <div className="max-w-3xl mx-auto py-10">
//       <h1 className="text-4xl font-bold">{frontmatter.blogname}</h1>
//       <p className="text-sm text-gray-500 mb-6">{frontmatter.date}</p>
//       <img src={frontmatter.coverimage} className="rounded-lg mb-6" />
//       <div className="prose">
//         {blogdata.content} {/* This can be rendered with MDX if needed */}
//       </div>
      
//       <MDXRemote {...resolvedMdxSource} />
//     </div>
//   );

// }



