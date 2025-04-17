import TagAnimation from "@/components/Animations/TagAnimation";
import React from 'react'
import BlogsCard from "@/components/BlogsCard";
import { DM_Serif_Text } from "next/font/google";
import { getMetaData } from "@/lib/getAllBlogs";




export default async function Page() {
  const blogsdata = await getMetaData()

  return (
    <div className="min-h-screen w-screen  bg-[#FFFAE7] p-25  flex-wrap justify-center">
      <div className="grid grid-cols-3 gap-5">

      <BlogsCard Blogs={blogsdata} />
      </div>
    </div>
  )
}