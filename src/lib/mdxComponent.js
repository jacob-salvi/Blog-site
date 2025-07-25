// app/lib/mdxComponents.js
import { Gabarito, DM_Serif_Text } from "next/font/google";
import Callouts from "./MDXuiElements/callouts";
import { Children } from "react";

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
    <h5 {...props} className="font-gabarito  italic text-[1.1rem] tracking-[-4%] text-[#2a2a2a] leading-none" />
  ),
  h6: (props) => (
    <h6 {...props} className="font-dmSerifText italic text-[1.1rem] tracking-[-4%] text-[#2a2a2a]/50 leading-none" />
  ),
  p: (props) => (
    <p {...props} className="font-gabarito text-[1.2rem] leading-[2rem] tracking-[-4%] font-light text-[#2a2a2a] mb-4" />
  ),

QuoteText: (props) => (
    <p {...props} className="  italic border-l-3 pl-3 bor text-[1rem] my-12 font-[DM_Serif_Text] text-[#2a2a2a]/50 leading-[1rem]" />
  ),
  //   ----------------- MDX Components -----------------
  Callouts: Callouts,
  // Add more MDX elements as needed (blockquote, code, ul, li, a, etc.)
};

export default components;