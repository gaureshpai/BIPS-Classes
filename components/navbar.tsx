"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
  ]

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1.5" />
              <span>Bajpe, Mangalore, Karnataka 574142</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              <span>Mon-Sat: 9:00 AM to 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1.5" />
              <Link
                href="tel:+917996721232"
                className="hover:underline text-white flex items-center"
              >
                +91 7996721232
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className={cn(
        "bg-white transition-all duration-300 justify-center text-center flex border-b",
        scrolled ? "shadow-md py-2" : "py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between max-w-7xl items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo1.png"
              alt="BIPS Classes Logo"
              width={1080}
              height={1080}
              className="w-8 h-8 md:w-10 md:h-10"
              priority
            />
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-primary">BIPS </span>
              <span className="text-2xl font-bold">Classes</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary py-1 px-1",
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-800 hover:text-primary/90"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium
                         px-6 py-2 rounded-lg transition-all shadow hover:shadow-md"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fade-in-down">
            <div className="container px-4 py-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-medium py-3 px-2 rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-medium
                           py-3 rounded-lg mt-2 shadow hover:shadow-md"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}