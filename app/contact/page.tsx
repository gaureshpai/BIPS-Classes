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
import { motion } from "framer-motion"
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

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
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-16">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch with Us</h1>
            <p className="text-xl text-gray-700">
              We would love to hear from you. Whether you want to join a course, ask a query, or collaborate with us,
              feel free to contact us.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
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

                  <Button type="submit" className="w-full cursor-pointer bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-100 text-green-700 rounded-md text-center"
                    >
                      Thank you for your message! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h2 className="text-3xl font-bold">Contact Information</h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
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
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600 mt-1">
                    <Link href="tel:+917996721232" className="hover:text-primary">
                      +91 7996721232
                    </Link>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600 mt-1">
                    <Link href="mailto:bipsclasses@gmail.com" className="hover:text-primary">
                      bipsclasses@gmail.com
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <h2 className="text-3xl font-bold mb-4">Find Us on Google Maps</h2>
            <p className="text-gray-600">
              Our center is conveniently located near St.Joseph's Church in Bajpe, Mangalore.
            </p>
          </motion.div>

          <motion.div
            className="h-[400px] rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Google Maps would be embedded here</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}