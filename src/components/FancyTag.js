import React from 'react'

const Colormap = {
    blueCream:{
        textColor: '#2A2A2A',
        bgColor:'#FFF0B3',
        cornerSqr:'#88B7BD',
        borderColor:'#2A2A2A',
    },

    blueBlack:{
        textColor:'#FFF0B3',
        bgColor:'#2A2A2A',
        cornerSqr:'#88B7BD',
        borderColor:'#FFF0B3',
    },

    greenCream:{
        textColor:'#2A2A2A',
        bgColor:'#FFF0B3',
        cornerSqr:'#B3FFB3',
        borderColor:'#2A2A2A',
    }
}

const FancyTag = ({ variant = "blueCream", text, rotation, top, left, right, bottom }) => {  
    const { textColor, bgColor, cornerSqr, borderColor}   = Colormap[variant] || Colormap.blueCream;      // destructuring the variant prop with a default value of "blueCream"
  return (
    <div className='outterdiv relative  w-fit h-auto  ' style={{borderColor: borderColor, transform: `rotate(${rotation}deg)`, top: `${top}rem`, left:`${left}rem`, right:`${right}rem`, bottom:`${bottom}rem`}} >
      {/* <div className='topright absolute w-[11px] h-[11px] right-[-5.5px] top-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='topleft absolute w-[11px] h-[11px] left-[-5.5px] top-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='bottomleft absolute w-[11px] h-[11px] left-[-5.5px] bottom-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='bottomright absolute w-[11px] h-[11px] right-[-5.5px] bottom-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div> */}

      <div className='w-fit h-auto flex justify-center items-center p-3 ' style={{backgroundColor: bgColor}}>
        <h1 className='text-5xl font-bold font-[Gabarito] tracking-[-4%] leading-[48px]'  style={{color: textColor}}>
          {text}
        </h1>
      </div>
    </div>
  )
}

export default FancyTag
