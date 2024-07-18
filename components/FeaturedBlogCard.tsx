import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import heroImage from '@/public/img/hero-image.png';

const FeaturedBlogCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <>
      <Link href={`/blog/`}>
        <div className="flex flex-col sm:flex-row items-start gap-4 bg-secondary hover:bg-primary/10 sm:py-6 py-4 mt-4 sm:rounded-xl rounded-none px-4 sm:px-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-primary font-semibold">{title}</h1>
            <p className="text-primary/80">{description}</p>
          </div>
          <Image src={heroImage} alt="Hero Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </Link>
    </>
  );
}

export default FeaturedBlogCard