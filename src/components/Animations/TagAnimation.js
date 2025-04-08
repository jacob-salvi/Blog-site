import React from 'react'
import FancyTag from '../FancyTag'
const TagAnimation = () => {
  return (
    
        <div className='h-[50vh] '>
        <FancyTag variant="blueCream" text="Animation" rotation="-14" top="1" left="12" />
        <FancyTag variant="blueBlack" text="Three.js" rotation="21" top="-1" left="20" />
        <FancyTag variant="blueCream" text="React" rotation="12" top="-2" left="10"/>
        <FancyTag variant="blueBlack" text="3D design" rotation="-12" top="-8"  left="14"/>
        <FancyTag variant="blueCream" text="Illustrations." rotation="12" top="-9" left="16" />
        <FancyTag variant="blueBlack" text="Figma" rotation="27" top="-11" left="10" />
        <FancyTag variant="blueCream" text="User Experience" rotation="-7" top="-12" left="12" />
        <FancyTag  variant='blueBlack' text="God" rotation="8"  top="-14" left="30" />
        <FancyTag variant="blueCream" text="Thoughts" rotation="30" top="-16" left="18" />
        <FancyTag variant="blueBlack" text="Life" rotation="5" top="-20" left="11" />

        </div>
  )
}

export default TagAnimation
