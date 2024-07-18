import React from 'react'

import heroImage from '@/public/img/hero-image.png'
import Image from 'next/image'
import Link from 'next/link'

import SectionHeader from '@/components/SectionHeader'

type Project = {
  title: string;
  imgUrl: string;
  slug: string;
}

const Projects: Project[] = [
  { title: "Life Size R2-D2", imgUrl: "https://via.placeholder.com/600x400", slug: "life-size-r2-d2" },
  { title: "Voron 3D Printer", imgUrl: "https://via.placeholder.com/600x400", slug: "voron-3d-printer" },
  { title: "Frasier TV", imgUrl: "https://via.placeholder.com/600x400", slug: "frasier-tv" },
  { title: "Figma Plugin", imgUrl: "https://via.placeholder.com/600x400", slug: "figma-plugin" },
  // Add more posts as needed
];

const RecentProjectss = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60 py-8">
        <SectionHeader
          title="Recent projects"
          seeAllTitle="See all"
          visible={true}
          href="/blog"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          {Projects.slice(0, 3).map((project, index) => (
            <div key={index} className="sm:w-1/3 sm:mb-0 mb-4 hover:bg-accent transition-all duration-200 rounded-lg">
            <Link href={`/works/${project.slug}`}>
                <Image src={heroImage} alt={project.title} className="w-full aspect-16/9 rounded-lg" />
                <p className="sm:text-xs py-2 text-center font-semibold">{project.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default RecentProjectss