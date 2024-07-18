import React from 'react'
import SectionHeader from '@/components/SectionHeader'

const blogPosts = [
  { title: "Post 1", date: "2022-01-01" },
  { title: "Post 2", date: "2022-01-02" },
  { title: "Post 3", date: "2022-01-03" },
  // Add more posts as needed
];

const RecentPostsSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60">
      <SectionHeader
        title="Recent blog posts"
        seeAllTitle="See all"
        visible={true}
        href="/blog"
      />
      <ul className="flex flex-col gap-4 text-primary">
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecentPostsSection