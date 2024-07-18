import Link from 'next/link'
import HatLogo from './svg/HatLogo'

export default function Divider({ showLogo }: { showLogo: boolean }) {
  return (
    <div className="relative w-full">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-500/30" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-4 text-primary/40 hover:text-primary transition duration-300">
          {showLogo && (
            <Link href="/">
              <HatLogo />
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}