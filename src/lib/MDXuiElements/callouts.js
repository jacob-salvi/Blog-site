import React from 'react'


const calloutVariants ={
    default:{
        color: "#2a2a2a",
        textColor: "#FFFAE7",
        

    },
    warning:{
        color : "linear-gradient(180deg, rgba(255,168,47,1), rgba(255,118,0,1))",
        textColor: "#FFFAE7",
         
    },

    success:{
        color: "linear-gradient(180deg, rgba(72,255,114,1), rgba(138,255,216,1))",
        textColor: "#2A2A2A"
    },
    info:{
        color:"linear-gradient(-90deg, rgba(107,245,253,1), rgba(69,142,255,1))",
        textColor: "#2a2a2a",
        
    },
    error:{
        color:"linear-gradient(264deg, rgba(255,116,181,1), rgba(255,46,46,1))",
        textColor: "#FFFAE7",
        
    }
}

export default function Callouts({type = "default", children}) {
    const variant = calloutVariants[type] || calloutVariants.default;
    const {color, textColor,} = variant;

    return (
        <div 
        className="callout relative my-12  p-3 flex flex-col items-start justify-center w-full h-fit gap-2 rounded-[.8rem]" 
        style={{background: color, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)", }}>
            <div 
            style={{
                color: textColor,
            }}
            className={`w-full flex justify-start px-4 h-fit text-[1.5rem] text-[${textColor}] font-bold font-[Gabarito]`}><h1>j.</h1></div>
            <div 
            style={{
                color: textColor,
            }}
            className={`w-full h-full z-10 text-[1.1rem] p-2 bg-[#FFFAE7]/15   rounded-md text-[${textColor}]/10 italic font-[DM_Serif_Text] tracking-[-4%] leading-[1.5rem]`}>
                {children}
            </div>
            <div 
            style={{
                backgroundImage: `url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            className='absolute inset-0 rounded-[.8rem] mix-blend-multiply'></div>
        </div>
    );
}
