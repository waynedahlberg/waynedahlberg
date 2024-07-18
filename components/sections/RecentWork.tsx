import React from 'react'

import heroImage from '@/public/img/hero-image.png'
import Image from 'next/image'
import Link from 'next/link'

import SectionHeader from '@/components/SectionHeader'

type Work = {
  title: string;
  imgUrl: string;
  slug: string;
}

const Works: Work[] = [
  { title: "Mocks+", imgUrl: "https://via.placeholder.com/600x400", slug: "mocks-plus" },
  { title: "SwiftUI Design", imgUrl: "https://via.placeholder.com/600x400", slug: "swiftui-design" },
  { title: "Lunar UI", imgUrl: "https://via.placeholder.com/600x400", slug: "lunar-ui" },
  { title: "Chatbooks", imgUrl: "https://via.placeholder.com/600x400", slug: "chatbooks" },
  // Add more posts as needed
];

const RecentWork = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60 py-8">
        <SectionHeader
          title="Recent work"
          seeAllTitle="See all"
          visible={true}
          href="/blog"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          {Works.slice(0, 3).map((work, index) => (
            <div key={index} className="sm:w-1/3 sm:mb-0 mb-4 hover:bg-accent transition-all duration-200 rounded-lg">
              <Link href={`/works/${work.slug}`} className="relative z-0">
                <Image src={heroImage} alt={work.title} className="w-full aspect-16/9 rounded-lg transition-all duration-200" />
                <p className="sm:text-xs py-2 text-center font-semibold">
                  {work.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default RecentWork