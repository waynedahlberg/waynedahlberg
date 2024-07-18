import React from 'react'
import SectionHeader from '@/components/SectionHeader'

const BooksSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-8 text-primary/60 py-8">
      <SectionHeader
        title="Recently reading..."
        seeAllTitle="See all"
        visible={true}
        href="/books"
      />
    </section>
  )
}

export default BooksSection