import Link from 'next/link'
import HatLogo from './svg/HatLogo'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-500/30" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-4 text-slate-500/80 hover:text-slate-800 transition duration-300">
          <Link href="/">
            <HatLogo />
          </Link>
        </span>
      </div>
    </div>
  )
}