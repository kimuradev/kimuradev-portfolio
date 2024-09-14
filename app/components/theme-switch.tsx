'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitchButton = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark';

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='cursor-pointer' onClick={() => isDarkMode ? setTheme("light") : setTheme("dark")}>
    {isDarkMode ?
      (<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:stroke-zinc-400" />) :
      (<Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  hover:stroke-zinc-400" />)}
  </button>
  )
}

export default ThemeSwitchButton