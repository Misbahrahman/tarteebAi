"use client"

import { Button } from "@/components/ui/button"
import { DemoRequestModal } from "./demo-request-modal"
import TarteebLogo from "./TarteebLogo"
import Link from "next/link"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -70 // Adjust this value based on your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <TarteebLogo className="w-10 h-10" />
          <span className="font-bold text-lg">Tarteeb AI</span>
        </a>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection("features")} className="transition-colors hover:text-primary">
            Features
          </button>
          <button onClick={() => scrollToSection("use-cases")} className="transition-colors hover:text-primary">
            Use Cases
          </button>
          <button onClick={() => scrollToSection("pricing")} className="transition-colors hover:text-primary">
            Pricing
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <DemoRequestModal />
        </div>
      </div>
    </header>
  )
}

