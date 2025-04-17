import Image from "next/image";
import { Gabarito, DM_Serif_Text } from 'next/font/google';
import FancyTag from "@/components/FancyTag";
import Navbar from "@/components/Navbar";
import TagAnimation from "@/components/Animations/TagAnimation";
import TimeTag from "@/components/TimeTag";




export default function Home() {
  return (
    <div className="Main bg-[#FFFAE7]h-screen w-screen">
      <div className="homecontent bg-[#88B7BD] w-full h-[85vh] bg-[url(/textures/noise.webp))] bg-blend-multiply bg-cover">
          <Navbar />
          <div className=" Text-Illustration flex justify-between items-center px-25 py-40 relative ">
            <img src="/assests/bigstar.svg"  className="absolute top-[14.5vw] left-[32.5vw] w-[4vw] h-[4vw] z-10" />
            <img src="/assests/bigstar.svg"  className="absolute top-[23.5vw] left-[5vw] w-[3vw] h-[3vw] z-10" />
            <div className="w-auto relative  -mt-10  font-[Gabarito] font-bold text-[11vw] leading-none tracking-[-4%] text-[#FFF0B3]">
             <h1>Creative</h1>
             <p className="font-[DM_Serif_Text] font-medium italic text-3xl absolute top-[1vw] left-[9vw]">journey of being</p>
             <div className="  my-[-10] w-auto flex   justify-between text-[#FFF0B3] font-[DM_Serif_Text] text-3xl italic  font-light tracking-[-8%] leading-none ">
              <h1>Human.</h1>

              <h1>Designer.</h1>
              <h1>Developer.</h1>

             </div>
            </div>
            <div className="w-1/2 -mt-10  "> <TagAnimation /></div>
           
          
          
          
          </div>
          <div className="flex w-full text-[#2a2a2a] gap-[25vw] items-start  px-25 -mt-15 ">
            <TimeTag />
            <p className="font-[Gabarito] text-[1.2rem] font-bold tracking-[-4%] leading-none text-center">A blog about sharing creativity, mistakes, and <br/>the process of figuring things out.</p>
          </div>

      </div>
    </div>
      
  );
}
