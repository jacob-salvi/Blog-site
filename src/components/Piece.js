// components/Piece.js
import React from "react";
import Link from 'next/link'


const customLinks = (piece) => {
    if (piece.type === 'nav') return piece.route
    return `/pieces/${piece.slug}`
}

const Piece = ({ piece }) => {
  const { title, date, slug, type, image } = piece

  return (
    <Link href={customLinks(piece)} className='block h-fit cursor-pointer '>
      <div className=' w-full  p-6 bg-[var(--color-bg)] gap-4 outline-1 outline-[var(--color-border)] flex flex-col  overflow-hidden'>

        {/* top — content changes based on type */}
        {type === 'artwork' ? (
          <div className='w-full h-full'>
            <img src={image} alt={title} className='w-full h-full object-cover' />
          </div>
        ) : (
          <h3 className='
            font-dmSerifText 
            text-[2.5rem] 
            leading-[120%] 
            tracking-[-4%] 
            text-[var(--color-text)]
            text-center
            '> 
            {title}
          </h3>
        )}

        {/* bottom — date always shows */}
        <div className="font-gabarito  text-lg tracking-[-4%] font-bold text-[var(--color-text)] text-center ">
            <span className="font-dmSerifText italic  mr-1 text-[var(--color-text)]/50">on</span>
            {date}
        </div>
        

      </div>
    </Link>
  )
}

export default Piece