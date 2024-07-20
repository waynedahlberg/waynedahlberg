import React from 'react'
import HelloLogo from '@/components/svg/HelloLogo'
import SocialIcons from '@/components/svg/SocialIcons'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Spacer from '@/components/Spacer'
import Divider from '@/components/Divider'
import HelloWavingHand from '../HelloWavingHand'

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
      <div className="pt-8 sm:pt-16 flex-col justify-start items-center sm:items-start gap-5 inline-flex text-md selection:bg-indigo-200 dark:selection:bg-indigo-800 selection:text-indigo-800 dark:selection:text-indigo-300 px-4 sm:px-8 text-base leading-normal">
        <HelloWavingHand />
        <div className='text-secondary-foreground/60 leading-normal'>
          <p className="pb-4 sm:pb-4">
            My name is Wayne, I&apos;m a software designer from Utah. I am the creator of <Link href="https://superinteresting.co" className="text-primary font-medium hover:underline decoration-indigo-400 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">Super Interesting</Link>, a studio creating apps + resources for designers.
          </p>
          <p className="pb-4 sm:pb-4">
            Simplicity, proximity, and humanity are keys to <Link href="https://chatbooks.com" className="text-primary font-medium hover:underline decoration-indigo-4000 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">my design thinking process</Link>. Experience has taught me <Link href="https://chatbooks.com" className="text-primary font-medium hover:underline decoration-indigo-400 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">code is the ultimate fidelity</Link> of software design.
          </p>
          <p className="pb-4 sm:pb-4">
            Previously, I was the founding team designer for <Link href="https://chatbooks.com" className="text-primary font-medium hover:underline decoration-indigo-400 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">Chatbooks</Link>, where I helped create and shape the photo book creation experience for nearly a decade.
          </p>
          <p className="pb-4 sm:pb-4">
            I live in Utah with my family. We enjoy scenic drives in our old Land Cruiser, jazz music, and Diet Coke. In my free time, I dabble in <Link href="https://chatbooks.com" className="text-primary font-medium hover:underline decoration-indigo-400 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">film photography</Link> and tinker with <Link href="https://chatbooks.com" className="text-primary font-medium hover:underline decoration-indigo-400 decoration-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200">electronics</Link>.
          </p>
          {/* <p className="pb-4 sm:pb-4">
            I value time with family and loved ones. We enjoy scenic drives in our old Land Cruiser. In my free time, I enjoy <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-indigo-400 decoration-2 text-primary">landscape photography</Link> with film cameras, and tinkering on a <Link href="https://chatbooks.com" className="font-medium hover:underline decoration-indigo-400 decoration-2 text-primary">robot</Link> in my home lab.
          </p> */}
        </div>
        <div className="w-full mx-auto max-w-screen-sm px-4 sm:px-8 pt-8">
          <ul className="flex flex-row items-center justify-between sm:justify-center gap-6 ">
            {socialLinks.map((item) => (
              <li key={item.name} className="hover:bg-accent p-2 transition-all duration-200 rounded-md">
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