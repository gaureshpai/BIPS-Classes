"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="w-full">
      <div className="bg-primary text-white py-2">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Bajpe, Mangalore, Karnataka 574142</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Mon-Sat: 9:00 AM to 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 7996721232</span>
            </div>
          </div>
        </div>
      </div>

      <nav className={cn("py-4 transition-all duration-300 z-50 w-full", scrolled ? "bg-white shadow-md" : "bg-white")}>
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">BIPS</span>
            <span className="text-2xl font-bold ml-1">Classes</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-gray-700",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white">Enroll Now</Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-[104px] left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-medium py-2 transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-gray-700",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">Enroll Now</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
