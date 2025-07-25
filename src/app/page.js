import React from 'react';
import Story from "@/screens/story";
import Highlight from "@/screens/highlight";
import Footer from "@/screens/footer";
import Hero from "@/screens/hero";




export default function Home() {
  return (
    <div className="Main h-fit w-screen relative">
      <Hero/>
      <Story/>
      <Highlight/>
      <Footer/>
    </div>
      
  );
}
