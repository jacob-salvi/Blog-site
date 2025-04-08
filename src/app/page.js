import Image from "next/image";
import { Gabarito, DM_Serif_Text } from 'next/font/google';
import FancyTag from "@/components/FancyTag";
import Navbar from "@/components/Navbar";
import TagAnimation from "@/components/Animations/TagAnimation";



export default function Home() {
  return (
    <div className="Main bg-[#FFFAE7]h-screen w-screen">
      <div className="homecontent bg-[#88B7BD] w-full h-[90vh] bg-[url(/textures/noise.png))] bg-blend-multiply bg-cover">
          <Navbar />
          <div className="flex justify-between items-center px-25 py-40 relative ">
            <img src="/assests/bigstar"/>
            <div className="w-auto relative   font-[Gabarito] font-bold text-[11vw] leading-none tracking-[-4%] text-[#FFF0B3]">
             <h1>Creative</h1>
             <p className="font-[DM_Serif_Text] italic text-3xl absolute top-[1vw] left-[9vw]">journey of being</p>
             <div className="  my-[-10] w-auto flex \  justify-between text-[#FFF0B3] font-[DM_Serif_Text] text-3xl italic  font-bold tracking-[-8%] leading-none ">
              <h1>Human.</h1>
              <h1>Designer.</h1>
              <h1>Developer.</h1>

             </div>
            </div>
            <div className="w-1/2  "> <TagAnimation /></div>
           
          
          </div>


      </div>
    </div>
      
  );
}
