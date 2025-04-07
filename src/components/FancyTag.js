import React from 'react'

const Colormap = {
    blueCream:{
        textColor: '#2A2A2A',
        bgColor:'#FFF0B3',
        cornerSqr:'#88B7BD',
        borderColor:'#2A2A2A',
    },

    blueBalck:{
        textColor:'#FFF0B3',
        bgColor:'#2A2A2A',
        cornerSqr:'#88B7BD',
        borderColor:'#FFF0B3',
    },

    greenCream:{
        textColor:'#2A2A2A',
        bgColor:'#B3FFB3',
        cornerSqr:'#8BBD88',
        borderColor:'#2A2A2A',
    }
}

const FancyTag = ({ variant = "blueCream"}) => {  
    const { textColor, bgColor, cornerSqr, borderColor}   = Colormap[variant] || Colormap.blueCream;      // destructuring the variant prop with a default value of "blueCream"
  return (
    <div className='outterdiv relative border-2 w-auto h-auto p-2 ' style={{borderColor: borderColor}} >
      <div className='topright absolute w-[11px] h-[11px] right-[-5.5px] top-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='topleft absolute w-[11px] h-[11px] left-[-5.5px] top-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='bottomleft absolute w-[11px] h-[11px] left-[-5.5px] bottom-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>
      <div className='bottomright absolute w-[11px] h-[11px] right-[-5.5px] bottom-[-5.5px] border-2' style={{ borderColor:borderColor, backgroundColor:cornerSqr}}></div>

      <div className='w-auto h-auto flex justify-center items-center p-1 ' style={{backgroundColor: bgColor}}>
        <h1 className='text-5xl font-bold font-[Gabarito] tracking-none leading-[48px]'  style={{color: textColor}}>
          Animation
        </h1>
      </div>
    </div>
  )
}

export default FancyTag
