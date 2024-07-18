import React from 'react';
import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
  seeAllTitle: string;
  visible: boolean;
  href: string;
};

function SectionHeader({ title, seeAllTitle, visible, href }: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-base font-semibold flex-grow">{title}</h2>
        {visible && (
          <Link href={href} className="text-base text-primary/60 hover:text-primary/80 flex-grow text-right font-medium hover:underline decoration-indigo-400 decoration-2">
            {seeAllTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
