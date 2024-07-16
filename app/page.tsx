import Image from "next/image";

import IntroSection from "@/components/sections/IntroSection";

export default function Home() {
  return (
    <main className="w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
      <IntroSection />
    </main>
  );
}
