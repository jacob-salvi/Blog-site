// app/lib/mdxComponents.js
import { Gabarito, DM_Serif_Text } from "next/font/google";
import Callouts from "./MDXuiElements/callouts";
import { Children } from "react";
import Verse from "./MDXuiElements/verse";

// Import the font (optional — only if you're using next/font properly)
// const gabarito = Gabarito({ subsets: ["latin"] });

export const components = {

   //   ----------------- Typography Components -----------------  
  h1: (props) => (
    <h1 {...props} className="font-gabarito text-[2.5rem] tracking-[-4%] text-[#2a2a2a] leading-none" />
  ),
  h2: (props) => (
    <h2 {...props} className="font-dmSerifText text-[2.5rem] tracking-[-4%] my-6 text-[#2a2a2a] leading-none" />
  ),
  h3: (props) => (
    <h3 {...props} className="font-gabarito text-[2rem] tracking-[-4%] text-[#2a2a2a] leading-none" />
  ),
  h4: (props) => (
    <h4 {...props} className="font-dmSerifText text-[2rem] my-6 tracking-[-4%] text-[#2a2a2a] leading-none" />
  ),
  h5: (props) => (
    <h5 {...props} className="font-dmSerifText text-[1.5rem] my-6 tracking-[-4%] text-[#2a2a2a] leading-none" />
  ),
  h6: (props) => (
    <h6 {...props} className="font-dmSerifText italic text-[1rem] tracking-[-4%] text-[#2a2a2a]/50 leading-[32px]" />
  ),
  p: (props) => (
    <p {...props} className="font-gabarito text-[18px] leading-[1.8rem] tracking-[-1%]  mx-auto font-extralight text-[#2a2a2a] mb-4" />
  ),

QuoteText: (props) => (
    <p {...props} className="  italic border-l-3 pl-3 bor text-[1rem] my-12 font-[DM_Serif_Text] text-[#2a2a2a]/50 leading-[1rem]" />
  ),
  //   ----------------- MDX Components -----------------
  Callouts: Callouts,
  // Add more MDX elements as needed (blockquote, code, ul, li, a, etc.)
  Verse,

};

export default components;