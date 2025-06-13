import React from 'react'
import WhoAmI from '@/screens/whoAmI'

export const metadata = {
  title: 'Who am i? - Jacob Salvi',
  description: 'Learn more about Jacob and this blog.',
};

const page = () => {
  return (
    <div className='w-full h-full'>
      <WhoAmI/>
    </div>
  )
}

export default page
