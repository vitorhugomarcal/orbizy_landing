"use client"

import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed z-10 w-full transition-colors duration-300 ${
        isScrolled ? "bg-slate-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Orbrizy Innovate and Grow"
              className="h-14 w-auto hover:scale-110 transition-all"
            />
          </Link>
        </div>
        <nav className="hidden sm:flex space-x-4">
          <Button
            variant="ghost"
            className={`${
              isScrolled ? "text-foreground" : "text-white"
            } hover:bg-slate-100/10`}
            asChild
          >
            <Link href="https://my.orbizy.app">my.Orbizy</Link>
          </Button>
          <Button
            className={`${
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-slate-100 text-foreground"
            } hover:bg-slate-100/90`}
          >
            Teste grátis
          </Button>
        </nav>
        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
