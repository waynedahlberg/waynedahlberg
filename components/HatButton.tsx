import React from 'react'
import Link from 'next/link'
import HatLogo from './svg/HatLogo'

const HomeButton = () => {
  return (
    <Link href='/' className='px-4 text-primary/80 hover:text-primary transition duration-300'>
      <HatLogo />
    </Link>
  )
}

export default HomeButton