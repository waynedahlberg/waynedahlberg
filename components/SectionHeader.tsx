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
        <h2 className="text-base font-semibold text-gray-600 flex-grow">{title}</h2>
        {visible && (
          <Link href={href} className="text-base text-gray-500 hover:text-gray-700 flex-grow text-right">
            {seeAllTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
