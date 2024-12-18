import { navItems } from 'app/utils/constants'
import Logo from './logo'
import NavLinks from './nav-links'
import ThemeSwitchButton from './theme-switch'

export function Navbar() {
  return (
      <header className="hidden lg:block mb-16 tracking-tight lg:flex items-end justify-between">
        <div className='transition-fadein-down'>
          <Logo />
        </div>
        <div className="lg:sticky lg:top-20">
          <nav
            className="flex items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              <NavLinks items={navItems} customStyle="transition-fadein-down opacity-0"/>
            </div>
            <div className='flex transition-fadein-down opacity-0' style={{ animationDelay: '500ms' }}>
                <ThemeSwitchButton />
            </div>
          </nav>
        </div>
      </header>
  )
}
