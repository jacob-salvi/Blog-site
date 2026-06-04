'use client'
import React from 'react'
import Piece from './Piece'
import useMasonry from '@/hooks/useMasonry'
import GridItem from './gridItem'


// for custom links/pages i want to show 
const navPieces = [
  { title: '/who am i ?', slug: 'who-am-i', type: 'nav', date:'Luanch day', route: '/whoAmi' },
  { title: '/my Story', slug: 'craft', type: 'nav', date: 'Luanch day', route: '/my-story' }, // need to make page for it
]



const getColSpan = (piece) => {
  if (piece.type === 'artwork' || piece.type === 'writing') {
    const size = piece.size || 1
    if (size === 2) return 'col-span-2'
    if (size === 3) return 'col-span-3'
    return 'col-span-1'
  }
  return 'col-span-1'
}

const Collage = ({ content }) => {
    const allpieces = [...content, ...navPieces]
  return (
    
    <div  className=' w-full grid grid-cols-1 md:grid-cols-4 gap-0 auto-rows-[8px]'
    style={{ gridAutoRows: '1px', alignItems: 'start' }} >
      {allpieces.map((piece) => (
  <GridItem
    key={piece.slug}
    colSpan={getColSpan(piece)}
  >
    <Piece piece={piece} />
  </GridItem>
))}
    </div>
  )
}

export default Collage