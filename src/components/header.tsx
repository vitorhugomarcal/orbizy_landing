"use client"

import { Menu, Globe } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  dict?: any
  locale?: string
}

export function Header({ dict, locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<string>(locale || 'pt')

  useEffect(() => {
    // Get current locale from cookie if exists
    const match = document.cookie.match(/next-locale=([^;]+)/)
    if (match) {
      setCurrentLocale(match[1])
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [locale])

  const toggleLanguage = () => {
    const nextLocale = currentLocale === 'pt' ? 'en' : 'pt'
    document.cookie = `next-locale=${nextLocale};path=/;max-age=31536000`
    setCurrentLocale(nextLocale)
    window.location.reload() // Reload to apply server-side translations
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed z-10 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Orbizy Innovate and Grow"
              className="h-14 w-auto hover:scale-110 transition-all"
            />
          </Link>
        </div>
        <nav className="hidden sm:flex space-x-4 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={`${
              isScrolled ? "text-foreground" : "text-white"
            } hover:bg-slate-100/10 flex items-center gap-1 uppercase font-semibold text-xs`}
          >
            <Globe className="w-4 h-4" />
            {currentLocale}
          </Button>

          <Button
            variant="ghost"
            className={`${
              isScrolled ? "text-foreground" : "text-white"
            } hover:bg-slate-100/10`}
            asChild
          >
            <Link href="https://my.orbizy.app" rel="nofollow">my.Orbizy</Link>
          </Button>
          <Button
            className={`${
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-slate-100 text-foreground"
            } hover:bg-slate-100/90`}
          >
            {dict?.header?.cta || "Free Trial"}
          </Button>
        </nav>
        <div className="sm:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            <Globe className="w-5 h-5 mr-1" />
            {currentLocale.toUpperCase()}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
