import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link';
import avatar256 from '@/public/img/avatar-256.png'
import Image from 'next/image'

type Post = {
  title: string;
  description: string;
  href: string;
}

const blogPosts: Post[] = [
  { title: "Fast Times on Shoreline Drive", description: "Silicon Graphics Inc., rendered the impossible; then reality came crashing down.", href: "/blog/fast-times-on-shoreline-drive" },
  { title: "Design Systems Looking Forward", description: "Do we need governance in the age of AI, or is it just a matter of who has the tools?", href: "/blog/design-systems-looking-forward" },
  { title: "Spatial computing and node graph interfaces", description: "The future of design systems is in the intersection of these two fields.", href: "/blog/spatial-computing-and-node-graph-interfaces" },
  // Add more posts as needed
];

const RecentPostsSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60 py-8">
      <SectionHeader
        title="Recent blog posts"
        seeAllTitle="See all"
        visible={true}
        href="/blog"
      />
      <ul className="flex flex-col gap-4 text-primary">
        {blogPosts.map((post, index) => (
          <Link key={index} href={post.href}>
            <li className='flex flex-col gap-0 hover:bg-primary/10 px-4 py-4 rounded-xl transition-all duration-200'>
              <div className='flex flex-row gap-4'>
                <div className="hidden sm:block w-[128px] aspect-square">
                  <Image src={avatar256} alt="Fast Times on Shoreline Drive" width={128} height={128} className='rounded-lg' />
                </div>
                <div className='flex flex-col w-full sm:max-w-[80vh] gap-0'>
                  <h3 className='text-base font-semibold text-primary/80'>{post.title}</h3>
                  <p className='text-secondary-foreground/60'>{post.description}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default RecentPostsSection