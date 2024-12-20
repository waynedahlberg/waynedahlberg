import React from 'react'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate voluptates culpa eligendi. Hic ve',
    href: '/',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ',
    imageUrl: '/img/hero-image.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Wayne Dahlberg',
      role: 'Founder / CEO',
      href: '/',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-background pt-6 sm:pt-10 w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl sm:max-w-4xl">
          <h2 className="text-title font-medium tracking-tight text-gray-900">Wayne&apos;s blog</h2>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            My thoughts on design, code, tools, 3D, AI, spatial computing, and more.
          </p>
          <div className="my-12 space-y-20 sm:my-16 sm:space-y-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 sm:flex-row">
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-1 text-base font-medium leading-5 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                </div>
                <div className="hidden sm:block relative aspect-video sm:w-64">
                  <Image
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    width={256}
                    height={256}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-9000/10" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
