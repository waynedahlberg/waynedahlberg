import React from 'react'
import NavBar from './NavBar'


const SiteHeader = () => {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:top-0 flex items-center justify-center'>
      <NavBar />
    </header>
  )
}

export default SiteHeader