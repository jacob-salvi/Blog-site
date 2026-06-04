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
    title: frontmatter.title,
    description: frontmatter.description || '',
  };
}

export default async function BlogPage({params}) {
    params = await params
    const {slug} = params

    const {content, frontmatter} = await fetchMdxData(slug)

    return (
       
        <div className='main w-[100vw] min-h-screen flex flex-col bg-[var(--color-bg)]  '>
          <div className='max-w-[700px] mx-auto'>
            <Header frontmatter={frontmatter}/>
            <Thumbnail frontmatter={frontmatter}/>
            <Blogbody content={content}/>
          </div>

        </div>
      );
      
}