import React from 'react'

import heroImage from '@/public/img/hero-image.png'
import Image from 'next/image'
import Link from 'next/link'

import SectionHeader from '@/components/SectionHeader'

type Concept = {
  title: string;
  imgUrl: string;
  slug: string;
}

const concepts: Concept[] = [
  { title: "Screen Recording on macOS for recording", imgUrl: "https://via.placeholder.com/600x400", slug: "screen-recording-on-macos" },
  { title: "Ebook Library Interface", imgUrl: "https://via.placeholder.com/600x400", slug: "ebook-library-interface" },
  { title: "Node UI for Design Tokens", imgUrl: "https://via.placeholder.com/600x400", slug: "node-ui-for-design-tokens" },
  { title: "Node UI for Design Tokens", imgUrl: "https://via.placeholder.com/600x400", slug: "node-ui-for-design-tokens" },
  // Add more posts as needed
];

const RecentConcepts = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60 py-8">
        <SectionHeader
          title="Recent concepts"
          seeAllTitle="See all"
          visible={true}
          href="/blog"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          {concepts.slice(0, 3).map((concept, index) => (
            <div key={index} className="sm:w-1/3 sm:mb-0 mb-4 hover:bg-accent transition-all duration-200 rounded-lg">
            <Link href={`/concepts/${concept.slug}`}>
                <Image src={heroImage} alt={concept.title} className="w-full aspect-16/9 rounded-lg" />
                <p className="sm:text-xs py-2 text-center font-semibold">{concept.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default RecentConcepts