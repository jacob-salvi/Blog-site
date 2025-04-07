import Image from "next/image";
import { Gabarito, DM_Serif_Text } from 'next/font/google';
import FancyTag from "@/components/FancyTag";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div className="bg-[#88B7BD] h-[90vh] relative w-screen flex  justify-center  ">
    <div className="w-full h-full bg-[url('/textures/frame38.png')] bg-cover absolute "></div>
     <Navbar />
    {/* <h1 className=" font-[DM_Serif_Text] italic text-[160px] font-bold tracking-[-8%] leading-0 text-[#FFF0B3] ">Creative</h1>
    <div>

    <FancyTag variant="blueCream" />
    <FancyTag variant="blueBalck" />
    </div> */}
   </div>
  );
}
