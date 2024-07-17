'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import SocialIcons from './svg/SocialIcons'

import Divider from './Divider'
import { ModeToggle } from './ModeToggle'

type SocialLink = {
  name: string
  href: string
  icon: React.ReactNode
}

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Concepts', href: '/concepts' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
]

const socialLinks: SocialLink[] = [
  { name: 'X', href: siteConfig.links.x, icon: <SocialIcons.xIcon width="24" height="24" fill="currentColor" /> },
  { name: 'GitHub', href: siteConfig.links.github, icon: <SocialIcons.githubIcon width="24" height="24" fill="currentColor" /> },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: <SocialIcons.linkedinIcon width="24" height="24" fill="currentColor" /> },
  { name: 'Figma', href: siteConfig.links.figma, icon: <SocialIcons.figmaIcon width="24" height="24" fill="currentColor" /> },
  // { name: 'Behance', href: siteConfig.links.behance, icon: <SocialIcons.behanceIcon width="24" height="24" fill="currentColor" /> },
  { name: 'Instagram', href: siteConfig.links.insta, icon: <SocialIcons.instagramIcon width="24" height="24" fill="currentColor" /> },
  // { name: 'Mastodon', href: siteConfig.links.mastodon, icon: <SocialIcons.mastodonIcon width="24" height="24" fill="currentColor" /> },
]


const SiteFooter = () => {
  const pathname = usePathname()
  const navigationLinks = navigation.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn('font-medium text-regular transition-colors hover:text-primary',
        pathname === link.href
          ? 'text-primary/80'
          : 'text-secondary-foreground/50')}
    >
      {link.name}
    </Link>
  ))

  const currentYear = new Date().getFullYear()
  const isHome = pathname === '/'

  return (
    <footer className="w-full mx-auto max-w-screen-sm px-4 sm:px-8">
      <Divider />
      <div className="pb-8">
        <ul className="flex flex-row items-start justify-between sm:justify-center pt-8 pb-16 gap-8 sm:gap-4 text-secondary-foreground/20 hover:text-primary">
          {navigationLinks}
        </ul>
        <ul className="flex flex-row items-center justify-between sm:justify-center gap-6">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-primary/50 hover:text-primary" rel="noopener noreferrer" target="_blank">{item.icon}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center sm:items-center sm:justify-center pt-12">
          <p className="text-secondary-foreground/50">Appearance:</p>
          <ModeToggle />
        </div>
        <p className="text-xs text-center text-secondary-foreground/40 pt-2">© 2024 {siteConfig.author}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter