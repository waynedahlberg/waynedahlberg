"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import HomeButton from './HomeButton'
import { ModeToggle } from './ModeToggle'

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Concepts', href: '/concepts' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
]

const NavBar = () => {
  const pathname = usePathname()
  const navigationLinks = navigation.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn('font-semibold transition-colors hover:text-primary tracking-tight ',
        pathname === link.href
          ? 'text-primary/80'
          : 'text-secondary-foreground/50')}>
      {link.name}
    </Link>
  ))

  return (
    <div className="sm:px-8 w-full sm:max-w-screen-sm flex items-center justify-between max-w-screen-lg mx-auto">
      <div className="w-full h-16 flex items-center justify-between px-2 sm:px-0">
        <HomeButton />
        <div className="flex items-center justify-between space-x-4">          {navigationLinks}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default NavBar