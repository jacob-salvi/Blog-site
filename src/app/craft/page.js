import React from 'react'
import { Gabarito } from 'next/font/google'

const page = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className=' max-w-[40%] h-fit text-center font-[Gabarito] text-lg tarcking-[-4%] text-[#2a2a2a]/50 font-bold' >
        The work exists.<br/>
        I just haven’t found the right way to frame it yet.<br/>
        Give it a little time — it’ll show up when it’s ready.
        </div>

    </div>
  )
}

export default page
