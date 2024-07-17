import React from 'react'
import HelloLogo from '@/components/svg/HelloLogo'

const TitleSection = () => {
  return (
    <div className="pt-8 sm:pt-20 flex-col justify-start items-start gap-5 inline-flex text-md selection:bg-amber-500 selection:text-primary px-4 sm:px-8 text-sm sm:text-base">
      <HelloLogo />
    </div>
  )
}

export default TitleSection