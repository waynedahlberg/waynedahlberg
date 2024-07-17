import React from 'react'
import HelloLogo from '@/components/svg/HelloLogo'
import SocialIcons from '@/components/svg/SocialIcons'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Spacer from '@/components/Spacer'

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
    <div className="pt-20 sm:pt-20 flex-col justify-start items-start gap-5 inline-flex text-md selection:bg-amber-500 selection:text-primary px-4 sm:px-8 text-base leading-normal">
      <HelloLogo />
      <div className='text-secondary-foreground/70 leading-5 sm:leading-normal'>
        <p className="pb-4 sm:pb-4">
          my name is Wayne,
        </p>
        <p className="pb-4 sm:pb-4">
          I am a software designer, coder, and tinkerer. I am also the creator of <Link href="#" className="font-medium hover:underline decoration-indigo-400 decoration-2">Super Interesting</Link> is a small studio I created for developing apps, training, and resources for software designers.</p>
        <p className="pb-2 sm:pb-4">
          Previously, I was the founding team designer of <Link href="https://chatbooks.com" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-teal-400 decoration-2">Chatbooks</Link>, where, for more than a decade, I helped create and shape the photo book creation experience as ux, lead, and principal designer, while also architecting the <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-teal-400 decoration-2 transition-all duration-200">Breakfast</Link>, design system.
        </p>
        <p className="pb-2 sm:pb-4">
          My design philosophy and experience is centered around <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-indigo-400 decoration-2">simplicity</Link>, <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-indigo-400 decoration-2">proximity</Link>, and <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-indigo-400 decoration-2">humanity</Link>. These principles guide my approach to new ideas, challenges and problem solving. I also believe that code is the <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-indigo-400 decoration-2">ultimate fidelity of design</Link>.
        </p>
        <p className="pb-2 sm:pb-4">
          I am very passionate about building great things with great people — If this resonates with you and your team, <Link href="#" className="font-medium text-secondary-foreground sm:text-secondary-foreground/70 hover:underline decoration-sky-400 decoration-2">let&apos;s talk</Link>.
        </p>
        <p className="pb-2 sm:pb-4">
          Currently living in Utah with my family, where we love exploring the towering mountains and majestic red rocks in our trusty old Land Cruiser.
        </p>
      </div>
      <div className="w-full mx-auto max-w-screen-sm px-4 sm:px-8">
        <ul className="flex flex-row items-center justify-between sm:justify-center gap-6">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-primary/50 hover:text-primary" rel="noopener noreferrer" target="_blank">{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Spacer height="16" />
    </div>
  )
}