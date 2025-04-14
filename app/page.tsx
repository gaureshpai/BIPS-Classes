"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Award, Users, Briefcase, Clock } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: coursesRef, inView: coursesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-16">
        <div
          ref={heroRef}
          className={cn(
            "container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            heroInView ? "animate-fade-in" : "opacity-0",
          )}
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-primary">BIPS Classes</span>
            </h1>
            <p className="text-xl text-gray-700">
              Empowering Through Education | Creating 1,00,000 Professionals by 2025
            </p>
            <p className="text-gray-600">
              At BIPS Classes, we believe that education is the most powerful tool to transform lives and empower
              communities. Founded with a vision to bridge the gap between academic knowledge and industry skills, we
              offer both online and offline training in Digital Marketing, Spoken English, and Competitive Exam
              Preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">Join Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students learning at BIPS Classes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <div className="container">
          <div
            className={cn("text-center max-w-3xl mx-auto mb-12", whyChooseInView ? "animate-slide-up" : "opacity-0")}
            ref={whyChooseRef}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BIPS Classes?</h2>
            <p className="text-gray-600">
              We are committed to providing quality education that prepares you for real-world challenges and
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Experienced Trainers",
                description: "Learn from industry-certified professionals with years of practical experience.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Flexible Learning",
                description: "Choose between classroom and online options to fit your schedule and learning style.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                title: "Job-oriented Training",
                description: "Gain practical skills through real-time projects that employers are looking for.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Regular Assessments",
                description: "Track your progress with regular evaluations and personalized feedback.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Comprehensive Curriculum",
                description: "Our courses cover all essential topics and stay updated with industry trends.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Affordable Fees",
                description: "Quality education with flexible payment plans to make learning accessible.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={cn(
                  "border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full",
                  whyChooseInView ? `animate-slide-up [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={cn(
              "text-center mt-12",
              whyChooseInView ? "animate-slide-up [animation-delay:600ms]" : "opacity-0",
            )}
          >
            <p className="text-lg font-medium text-gray-700 italic">
              "Join our mission to become one among the 1,00,000 professionals we are shaping for tomorrow."
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-gray-50">
        <div className="container">
          <div
            className={cn("text-center max-w-3xl mx-auto mb-12", coursesInView ? "animate-slide-up" : "opacity-0")}
            ref={coursesRef}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-gray-600">
              Discover our carefully curated courses designed to help you succeed in today's competitive world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Spoken English Course",
                description:
                  "A comprehensive program designed to improve your fluency, vocabulary, grammar, and public speaking skills. Perfect for students, job seekers, and professionals.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Digital Marketing Course",
                description:
                  "Master SEO, Social Media Marketing, Google Ads, Email Marketing, Analytics, and more with real-time project experience. Ideal for freelancers, entrepreneurs, and marketing aspirants.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "IBPS Coaching",
                description:
                  "Comprehensive training for reasoning, quantitative aptitude, and English. Regular assessments and expert guidance included.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Entrepreneurship Program",
                description:
                  "Special program for aspiring entrepreneurs in collaboration with Chartered Accountants, Bank Managers, and Nodal Agencies.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className={cn(
                  "overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300",
                  coursesInView ? `animate-slide-up [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <div className="relative h-48 w-full">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/courses">Know More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-primary text-white">
        <div className="container" ref={statsRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years of Excellence" },
              { number: "1000+", label: "Students Trained" },
              { number: "95%", label: "Placement Rate" },
              { number: "20+", label: "Expert Trainers" },
            ].map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "text-center",
                  statsInView ? `animate-bounce-in [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <div className="container">
          <div
            className={cn("text-center max-w-3xl mx-auto mb-12", testimonialsInView ? "animate-slide-up" : "opacity-0")}
            ref={testimonialsRef}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600">Hear from our students about their learning experience at BIPS Classes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                course: "Digital Marketing",
                quote:
                  "The practical approach to teaching digital marketing helped me land a job within a month of completing the course. Highly recommended!",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Rahul Patel",
                course: "Spoken English",
                quote:
                  "BIPS Classes transformed my communication skills. The personalized attention and regular practice sessions boosted my confidence tremendously.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Ananya Desai",
                course: "IBPS Coaching",
                quote:
                  "The structured approach and mock tests were exactly what I needed to crack the IBPS exam. The faculty is knowledgeable and supportive.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={cn(
                  "border-none shadow-lg h-full",
                  testimonialsInView ? `animate-slide-up [animation-delay:${index * 100}ms]` : "opacity-0",
                )}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.course}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center" ref={ctaRef}>
          <div className={cn("max-w-3xl mx-auto", ctaInView ? "animate-fade-in" : "opacity-0")}>
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-white mb-8">Your journey to success begins here. Take the first step today!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
