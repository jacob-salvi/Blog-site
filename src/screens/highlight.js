import React from 'react'
import { DM_Serif_Text, Gabarito } from 'next/font/google'
import  {blogListFetch}  from '@/utils/blogListFetch'
import LatestBlogCard from '@/components/LatestBlogCard'
import BlogsCard from '@/components/BlogsCard'
import Latestblogs from '@/screens/latestblogs'

export default async function Highlight() {

    const allBlogs = await blogListFetch()
    const latestBlogs = allBlogs[0]
    const recentBlogs = allBlogs.slice(1, 4)
    return (
        <Latestblogs latest={latestBlogs} recent={recentBlogs}/>
    )
}
