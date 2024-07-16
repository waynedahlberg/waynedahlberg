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
  // { name: 'Behance', href: siteConfig.links.behance, icon: <SocialIcons.behanceIcon width="24" height="24" fill="currentColor" /> },
  { name: 'Instagram', href: siteConfig.links.insta, icon: <SocialIcons.instagramIcon width="24" height="24" fill="currentColor" /> },
  // { name: 'Mastodon', href: siteConfig.links.mastodon, icon: <SocialIcons.mastodonIcon width="24" height="24" fill="currentColor" /> },
]

export default function IntroSection() {
  return (
    <div className="pt-8 sm:pt-20 flex-col justify-start items-start gap-5 inline-flex text-md selection:bg-amber-500 selection:text-primary px-4 sm:px-8 text-sm sm:text-base">
      <HelloLogo />
      <div className='text-secondary-foreground/70 leading-5 sm:leading-normal'>
        <p className="pb-4 sm:pb-4">
          my name is Wayne Dahlberg. I am a senior software designer, coder, and creator of <Link href="#" className="font-semibold hover:underline decoration-indigo-400 decoration-2">SuperInteresting</Link>, a studio developing apps and resources for product designers.</p>
        <p className="pb-2 sm:pb-4">
          Previously, I was the founding team designer of <Link href="https://chatbooks.com" className="font-semibold hover:underline decoration-indigo-400 decoration-2">Chatbooks</Link>, where, for more than a decade, I helped create and shape the photo book creation experience as ux, lead, and principal designer, while also architecting the <Link href="#" className="font-semibold hover:underline decoration-indigo-400 decoration-2 transition-all duration-200">Breakfast</Link>, design system.
        </p>
        <p className="pb-2 sm:pb-4">
          My design philosophy and experience is centered around <Link href="#" className="font-semibold hover:underline decoration-indigo-4000 decoration-2">simplicity</Link>, <Link href="#" className="font-semibold hover:underline decoration-indigo-4000 decoration-2">proximity</Link>, and <Link href="#" className="font-semibold hover:underline decoration-indigo-4000 decoration-2">humanity</Link>. These principles guide my approach to new ideas, challenges and problem solving. I also believe that code is the <Link href="#" className="font-semibold hover:underline decoration-indigo-4000 decoration-2">ultimate fidelity of design</Link>.
        </p>
        {/* use the following paragraph as the basis for the 'Ultimate Fidelity of Design' post */}
        <p className="pb-2 sm:pb-4">
          {/* The skill overlap between design and code is more important than ever. Static designs inform initial decisions, but largely remain artifacts of collaboration and reference points afterward. Having a seamless relationship with engineering partners allows designers to build with confidence in both platform capabilities and limitations. Creating prototypes in code, rather than simply marking designs as 'ready for dev', yields invaluable insights for critical product decisions. Interactive prototypes allow all stakeholders to experience the product firsthand, reducing unnecessary research and revealing hidden insights. A good prototype is worth countless meetings, saving resources, accelerating iteration, and empowering designers to utilize their full skill set beyond static tools. */}
          {/* Collaboration with engineering is key to my work. Once decisions are made, static designs are simply become reference points and artifacts of collaboration. This is why I believe so much is left on the table by designers who mark a design as &apos;ready for dev&apos;. For mission critical product decisions and solutions, so much can be learned by creating prototypes in the medium of the final deliverable, code. Much is lost in translation even with a good &apos;handoff&apos; meeting. I like to blur the lines and create prototypes to reduce uneccesary user research and hidden eureka moments by building interactive prototypes for all stakeholders and builders to use with their own hands. I firmly believe a good prototype is worth a hundred meetings, and saves business resources, accelerates iteration time by a factor of ten, and empowers designers to use more of their skills beyond a static tool. */}
        </p>
        <p className="pb-2 sm:pb-4">
          I am very passionate about building great things with great people — If this resonates with you and your team, <Link href="#" className="font-semibold hover:underline decoration-indigo-4000 decoration-2">let&apos;s talk</Link>.
        </p>
        <p className="pb-2 sm:pb-4">
          Utah is home. The clean air fills our lungs as the mountains and red rocks loom. When the outdoors call, we answer with anticipation and a gassed-up Land Cruiser.
        </p>
      </div>
      <div className="w-full mx-auto max-w-screen-sm px-4 sm:px-8">
        <ul className="flex flex-row items-center justify-between sm:justify-center gap-6">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-primary/50 hover:text-primary">{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Spacer height="16" />
    </div>
  )
}