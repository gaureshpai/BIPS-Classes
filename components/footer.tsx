import Link from "next/link"
import { Facebook, Instagram, Youtube, Send, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-black w-full">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Brand Info Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-black">BIPS</span>
              <span className="text-3xl font-bold ml-1 text-black">Classes</span>
            </div>
            <p className="text-black/80 text-lg leading-relaxed">
              Empowering Through Education | Creating 1,00,000 Professionals by 2025
            </p>
            <div className="flex space-x-5">
              <Link
                href="#"
                className="hover:text-black/80 text-black transition-colors hover:scale-110 duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-black/80 text-black transition-colors hover:scale-110 duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-black/80 text-black transition-colors hover:scale-110 duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black/80 hover:text-black transition-colors text-lg flex items-center group"
                  >
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black mb-4">Contact Info</h3>
            <ul className="space-y-5 text-black/80">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-black" />
                <span className="text-lg">
                  BIPS Classes, Door No 3-116(1), 1st Floor, Ozanam Complex,
                  Near St.Joseph's Church, Bajpe - Mangalore,
                  Karnataka 574142
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0 text-black" />
                <Link
                  href="tel:+917996721232"
                  className="text-lg text-black/80 hover:text-black transition-colors"
                >
                  +91 7996721232
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 mr-3 flex-shrink-0 text-black" />
                <Link
                  href="mailto:bipsclasses@gmail.com"
                  className="text-lg text-black/80 hover:text-black transition-colors"
                >
                  bipsclasses@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="container px-6 py-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            <p className="text-black/80 text-base">
              &copy; {new Date().getFullYear()} BIPS Classes. All rights reserved.
            </p>
            <p className="text-black/60 text-[12px] md:text-base">
              Designed and developed by{' '}
              <Link
                href="https://kreekarvat.in"
                rel="noopener noreferrer"
                target="_blank"
                className="text-black hover:text-black/80 transition-colors hover:underline"
              >
                Kreekarvat Technologies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}