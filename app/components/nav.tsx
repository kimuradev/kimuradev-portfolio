import Link from 'next/link'
import { navItems } from 'app/utils/constants'
import Logo from './logo'

export function Navbar() {
  return (
    <header className="hidden mb-16 tracking-tight lg:flex items-end justify-between">
      <Logo />
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }], index) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-zinc-400 dark:hover:text-zinc-700 flex align-middle relative py-1 px-2 m-1"
                >
                  <span className='flex gap-2'><strong>0{index + 1}.</strong>{name}</span>

                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
