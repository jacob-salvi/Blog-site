
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { fetchMdxData } from '@/utils/fetchMdxData';
import Navbar from '@/components/Navbar';
import CategoryNav from '@/components/CategoryNav';
import { DM_Serif_Text, Gabarito } from 'next/font/google';
import Header from '@/components/blogs/header';
import Thumbnail from '@/components/blogs/thumbnail';
import Blogbody from '@/components/blogs/blogBody';

export async function generateMetadata({params}) {
      const { slug } = params;
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