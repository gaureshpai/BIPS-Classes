"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true })
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true })
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      })

      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-16">
        <div className="container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch with Us</h1>
            <p className="text-xl text-gray-700">
              We would love to hear from you. Whether you want to join a course, ask a query, or collaborate with us,
              feel free to contact us.
            </p>
          </div>
        </div>
      </section>
      
      <section className="p-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={formRef} className={cn("space-y-6", formInView ? "animate-slide-in-left" : "opacity-0")}>
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interested In</Label>
                      <select
                        title="Select a course"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a course</option>
                        <option value="Spoken English">Spoken English</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="IBPS Coaching">IBPS Coaching</option>
                        <option value="Entrepreneurship">Entrepreneurship Program</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message or query"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {isSuccess && (
                    <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef} className={cn("space-y-8", infoInView ? "animate-slide-in-right" : "opacity-0")}>
            <h2 className="text-3xl font-bold">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p className="text-gray-600 mt-1">
                    BIPS Classes, Door No 3-116(1), 1st Floor, Ozanam Complex, Near St.Joseph's Church, Bajpe -
                    Mangalore, Karnataka 574142
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+917996721232" className="hover:text-primary">
                      +91 7996721232
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:bipsclasses@gmail.com" className="hover:text-primary">
                      bipsclasses@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Follow Us on Social Media</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-primary" />
                </Link>
                <Link
                  href="#"
                  className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </Link>
                <Link
                  href="#"
                  className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Youtube className="h-6 w-6 text-primary" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-16 bg-gray-50">
        <div className="container">
          <div
            ref={mapRef}
            className={cn("text-center max-w-3xl mx-auto mb-8", mapInView ? "animate-slide-up" : "opacity-0")}
          >
            <h2 className="text-3xl font-bold mb-4">Find Us on Google Maps</h2>
            <p className="text-gray-600">
              Our center is conveniently located near St.Joseph's Church in Bajpe, Mangalore.
            </p>
          </div>

          <div
            className={cn(
              "h-[400px] rounded-lg overflow-hidden shadow-lg",
              mapInView ? "animate-fade-in" : "opacity-0",
            )}
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">Your journey to success begins here</h2>
            <p className="text-xl text-black mb-8">Take the first step today!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
