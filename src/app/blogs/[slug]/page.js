import React from 'react';
import { fetchMdxData } from '@/utils/fetchMdxData';
import CategoryNav from '@/components/CategoryNav';
import Header from '@/components/blogs/header';
import Thumbnail from '@/components/blogs/thumbnail';
import Blogbody from '@/components/blogs/blogBody';

export async function generateMetadata({params}) {
     const { slug } = await params;
  const { frontmatter } = await fetchMdxData(slug);

  return {
    title: frontmatter.blogname,
    description: frontmatter.description || '',
  };
}

export default async function BlogPage({params}) {
    params = await params
    const {slug} = params

    const {content, frontmatter} = await fetchMdxData(slug)

    return (
       
        <div className='main w-[100vw] h-full flex flex-col'>
            <CategoryNav/>
            <Header frontmatter={frontmatter}/>
            <Thumbnail frontmatter={frontmatter}/>
            <Blogbody content={content}/>
        </div>
      );
      
}