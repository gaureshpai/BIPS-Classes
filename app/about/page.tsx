"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Compass } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div ref={heroRef} className={cn("container", heroInView ? "animate-fade-in" : "opacity-0")}>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About BIPS Classes</h1>
            <p className="text-xl text-gray-700 mb-4">Building Futures, Shaping Careers</p>
            <p className="text-gray-600 mb-8">
              BIPS Classes is an education initiative based in India, with a strong commitment to nurturing young minds
              and enabling them to become successful professionals. We specialize in providing quality training in
              high-demand fields such as Digital Marketing, Spoken English, and various government job entrance exams.
            </p>
            <p className="text-gray-600">
              We conduct both online and offline classes, with our offline center located at Bajpe, conveniently close
              to industrial hubs. Our institute serves a diverse range of learners – from high school students to
              final-year degree aspirants – offering practical, skills-based education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12" ref={visionRef}>
          <div className={cn("space-y-6", visionInView ? "animate-slide-in-left" : "opacity-0")}>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600">
              To become a leading institution for career-oriented education and to create 1,00,000 skilled professionals
              by 2025.
            </p>
            <div className="pt-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BIPS Classes Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className={cn("space-y-6", visionInView ? "animate-slide-in-right" : "opacity-0")}>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              To empower through education by delivering accessible, high-quality training that equips learners with
              essential skills for real-world success.
            </p>
            <div className="pt-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BIPS Classes Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div
            className={cn("text-center max-w-3xl mx-auto mb-12", valuesInView ? "animate-slide-up" : "opacity-0")}
            ref={valuesRef}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">These principles guide everything we do at BIPS Classes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence in teaching",
                description: "We strive for the highest standards in our teaching methodologies and content delivery.",
              },
              {
                title: "Integrity",
                description: "We maintain honesty, transparency, and ethical practices in our approach to education.",
              },
              {
                title: "Empowerment",
                description:
                  "We believe in enabling our students to achieve their full potential through skill development.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve our course design and delivery to incorporate the latest industry trends.",
              },
              {
                title: "Community-focused",
                description: "We are committed to contributing to the growth and development of our local community.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={cn(
                  "border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full",
                  valuesInView ? `animate-slide-up [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <CardHeader>
                  <div className="mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={cn("text-center max-w-3xl mx-auto mb-12", teamInView ? "animate-slide-up" : "opacity-0")}
            ref={teamRef}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our dedicated team of educators and professionals are committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Founder & Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Priya Sharma",
                position: "Digital Marketing Lead",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Anil Verma",
                position: "English Language Expert",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Meera Patel",
                position: "IBPS Coach",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={cn(
                  "text-center",
                  teamInView ? `animate-slide-up [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Learning Community</h2>
            <p className="text-xl mb-8">Take the first step towards a brighter future with BIPS Classes.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
