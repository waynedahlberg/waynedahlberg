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
    <div className="px-4 sm:px-8 w-full sm:max-w-screen-sm flex items-center justify-between max-w-screen-lg mx-auto">
      <div className="w-full h-14 flex items-center justify-between">
        <HomeButton />
        <div className="flex items-center justify-end space-x-5 pr-4 sm:pr-0">
          {navigationLinks}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default NavBar