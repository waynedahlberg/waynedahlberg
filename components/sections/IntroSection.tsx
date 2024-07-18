import React from 'react'
import HelloLogo from '@/components/svg/HelloLogo'
import SocialIcons from '@/components/svg/SocialIcons'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Spacer from '@/components/Spacer'
import Divider from '@/components/Divider'

type SocialLink = {
  name: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  { name: 'X', href: siteConfig.links.x, icon: <SocialIcons.xIcon width="24" height="24" fill="currentColor" /> },
  { name: 'GitHub', href: siteConfig.links.github, icon: <SocialIcons.githubIcon width="24" height="24" fill="currentColor" /> },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: <SocialIcons.linkedinIcon width="24" height="24" fill="currentColor" /> },
  { name: 'Figma', href: siteConfig.links.figma, icon: <SocialIcons.figmaIcon width="24" height="24" fill="currentColor" /> },
  { name: 'Instagram', href: siteConfig.links.insta, icon: <SocialIcons.instagramIcon width="24" height="24" fill="currentColor" /> },
]

export default function IntroSection() {
  return (
    <>
      <div className="pt-8 sm:pt-16 flex-col justify-start items-start gap-5 inline-flex text-md selection:bg-amber-500 selection:text-primary px-4 sm:px-8 text-base leading-normal">
        <div className='flex items-center justify-center text-secondary-foreground/70 leading-5 sm:leading-normal pb-2 sm:pb-8'>
          <div className='text-2xl sm:-ml-10 sm:pr-2 hover:rotate-45 transition-all duration-300 repeat-infinite cursor-default @apply wiggle'>
            <p className="hidden sm:block">👋</p>
          </div>
          <HelloLogo />
        </div>
        <div className='text-secondary-foreground/60 leading-5 leading-normal'>
          <p className="pb-4 sm:pb-4">
            I’m Wayne Dahlberg — a software designer from Utah. I’m the creator of <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-teal-400 decoration-2 text-primary">Super Interesting</Link>, a studio creating apps and resources for designers.
          </p>
          <p className="pb-4 sm:pb-4">
            Previously, I was the founding team designer of <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-teal-400 decoration-2 text-primary/70">Chatbooks</Link>, where I helped create and shape the photo book creation experience for nearly a decade.
          </p>
          <p className="pb-4 sm:pb-4">
            Simplicity, proximity, and humanity and key to my <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-teal-400 decoration-2 text-primary/70">design thinking and process</Link>. I firmly believe code is the <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-teal-400 decoration-2 text-primary/70">ultimate fidelity of software design</Link>.
          </p>
          <p className="pb-4 sm:pb-4">
            In my spare time I enjoy robotics, 3D design, film photography, and scenic drives with my family in our old Land Cruiser.
          </p>
        </div>
        <div className="w-full mx-auto max-w-screen-sm px-4 sm:px-8 pt-8">
          <ul className="flex flex-row items-center justify-between sm:justify-center gap-6">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-primary/50 hover:text-primary" rel="noopener noreferrer" target="_blank">{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full mx-auto max-w-screen-sm px-4 sm:px-8 pt-16 pb-8'>
        <Divider showLogo={false} />
      </div>
    </>
  )
}