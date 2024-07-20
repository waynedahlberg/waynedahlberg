'use client'

import React, { useState } from 'react'
import HelloLogo from '@/components/svg/HelloLogo'

const HelloWavingHand = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='flex items-center justify-center text-secondary-foreground/70 leading-5 sm:leading-normal pl-8 sm:pl-0 pb-2 sm:pb-8'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HelloLogo />
      <div className={`text-2xl ml-3 pr-2 transition-all duration-300 repeat-infinite origin-[5%_75%] cursor-default @apply wiggle 
      ${isHovered ? 'opacity-100' : 'opacity-0'}
      ${isHovered ? 'rotate-[-30deg]' : 'rotate-[0deg]'}
      `}>
        <p style={{ transform: 'scaleX(-1)' }}>👋</p>
      </div>
    </div>
  )
}

export default HelloWavingHand