import Image from "next/image";
import Divider from '@/components/Divider'

import IntroSection from "@/components/sections/IntroSection";
import RecentPostsSection from "@/components/sections/RecentPosts";
import RecentConceptsSection from "@/components/sections/RecentConcepts";
import RecentWorkSection from "@/components/sections/RecentWork";
import RecentProjectsSection from "@/components/sections/RecentProjects";
import BooksSection from "@/components/sections/BooksSection";

export default function Home() {
  return (
    <main className="w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
      <IntroSection />
      <RecentPostsSection />
      <RecentConceptsSection />
      <RecentWorkSection />
      <RecentProjectsSection />
      <BooksSection />
    </main>
  );
}
