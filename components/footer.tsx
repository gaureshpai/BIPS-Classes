import Link from "next/link"
import { Facebook, Instagram, Youtube, Send, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-black">
      <div className="container p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">BIPS</span>
              <span className="text-2xl font-bold ml-1">Classes</span>
            </div>
            <p className="text-black/90">
              Empowering Through Education | Creating 1,00,000 Professionals by 2025
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-black/80 text-black transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-black/80 text-black transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-black/80 text-black transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black/90 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black/90 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-black/90 hover:text-black transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/90 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Contact Info</h3>
            <ul className="space-y-3 text-black/90">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-black" />
                <span>
                  BIPS Classes, Door No 3-116(1), 1st Floor, Ozanam Complex,
                  Near St.Joseph's Church, Bajpe - Mangalore,
                  Karnataka 574142
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-black" />
                <span>+91 7996721232</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-black" />
                <span>bipsclasses@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container p-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <p className="text-black/80">
            &copy; {new Date().getFullYear()} BIPS Classes. All rights reserved.
          </p>
          <p className="text-black/60 text-sm">
            Designed and developed by <Link href="https://kreekarvat.in" rel="noopener noreferrer" target="_blank" className="text-black hover:text-black/80 transition-colors">Kreekarvat Technologies</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}