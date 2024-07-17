import React from 'react'
import Link from 'next/link'
import { Icons } from '@/components/svg/Icons'
import { Button } from '@/components/ui/button'
import FeaturedBlogCard from '@/components/FeaturedBlogCard'

export default async function BlogPage() {
  return (
    <main className="w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
      {/* <TitleSection /> */}
      <section className="w-full flex flex-col gap-4 px-4 sm:px-8">
        <div className="w-full max-w-screen-sm flex flex-row items-center justify-between pt-8 sm:pt-12">
          <h1 className="text-title font-semibold text-primary">Featured Post</h1>
          <div className="flex flex-row items-center">
            <Link href="/rss">
              <Button
                variant="outline"
                size="sm"
              >
                Subscribe
                <Icons.rss className="w-4 h-4 pl-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full px-4 sm:px-8">
        <FeaturedBlogCard title="Retro Calculator" description="Build a retro calculator in SwiftUI for iOS, macOS, and visionOS." />
      </section>
    </main>
  )
}
