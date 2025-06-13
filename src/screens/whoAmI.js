import Navbar from '@/components/Navbar'
import React from 'react'

const whoAmI = () => {
  return (
    <div className='w-full h-[100vh] bg-[#8BBD88]  flex overflow-hidden'>
        <div className='w-1/3 h-full   relative'>
            <div className='w-[50vw] h-[50vh] object-cover absolute top-[45%] '>
            <img src= "/assests/me.png" className=' '/>
            </div>
            <img src="/assests/smallstar.svg" className='absolute top-[45%] left-[1%]'/>
            <img src="/assests/smallstar.svg" className=' w-15 h-15 absolute top-[70%] left-[70%]'/>
        </div>

        <div className='aboutContent w-full  h-full text-[#2a2a2a] pl-60  flex flex-col gap-12 justify-center items-start '>
            <div className='toughparttext flex flex-col gap-4'>
                <h1 className='font-[Gabarito] text-[3rem] font-bold leading-none tracking-[-4%] '>Hmm, Tough Part!</h1>
                <div className='hello flex gap-4  items-center '>
                    <h1 className='text-[2rem] font-[DM_Serif_Text] tracking-[-4%] leading-none italic'>Btw</h1>
                    <div className='outterdiv relative  w-fit h-auto p-2 border-2 border-[#2a2a2a]' >
             <div className='topright absolute w-[11px] h-[11px] right-[-5.5px] top-[-5.5px] border-2 bg-[#8BBD88] border-[#2a2a2a]' ></div>
             <div className='topleft absolute w-[11px] h-[11px] left-[-5.5px] top-[-5.5px] border-2 bg-[#8BBD88] border-[#2a2a2a]' ></div>
             <div className='bottomleft absolute w-[11px] h-[11px] left-[-5.5px] bottom-[-5.5px] border-2 bg-[#8BBD88] border-[#2a2a2a]' ></div>
             <div className='bottomright absolute w-[11px] h-[11px] right-[-5.5px] bottom-[-5.5px] border-2 bg-[#8BBD88] border-[#2a2a2a]' ></div>
             <div className='w-fit h-auto flex justify-center items-center px-8  bg-[#FFF0B3] ' >
               <h1 className='text-[2rem] font-bold font-[Gabarito] tracking-[-4%] leading-[48px]'  >
                 hello 
               </h1>
            </div>
                    </div>
                </div>
            </div>
            <div className='bioofme  max-w-[80%] text-[1.3rem] tracking-[-4%] leading-[2rem] font-[Gabarito] font-light'>
                <p>I’m Jacob Salvi — someone who’s still figuring things out.  Mostly about design, programming, faith, and a whole lot of overthinking.  I’m 19 (soon turning 20), and I don’t really consider myself a professional in anything — but definitely a learner.<br/>
I’m curious about building and designing creative things, and every day I try to learn something new that helps me make better stuff.
Since finishing my diploma, I’ve been freelancing — and it’s going pretty well. I get to work on the design side professionally, and in my free time, I dive into code. Programming helps me bring my own designs to life.
Whenever I feel stressed, I either ride my bike or take long walks with my IEMs on.  Lately, I’ve been putting more of my thoughts on paper — writing has helped me think more clearly.
I’m also trying to build a healthier relationship with God. I fail, I fall short, I sin — but I try, and I ask for forgiveness.
I love capturing moments — photos I can look back at, and remember what life felt like.</p>
            </div>
        </div>
       
       <h1 className='absolute bottom-10 left-55 translate-x-1/2   font-[DM_Serif_Text] italic text-[#2a2a2a]/50'>In case I don't see ya, good afternoon, good evening, and good night!</h1>

      
     
    </div>
  )
}

export default whoAmI
