import React from 'react'
import Link from 'next/link'
import HatLogo from './svg/HatLogo'

const HomeButton = () => {
  return (
    <Link href='/' className='px-4 text-slate-500/80 hover:text-slate-800 transition duration-300'>
      <HatLogo />
    </Link>
  )
}

export default HomeButton