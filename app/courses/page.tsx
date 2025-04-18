"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function CoursesPage() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Courses</h1>
            <p className="text-xl text-gray-700">
              At BIPS Classes, we offer a carefully curated set of courses that are aligned with today's job market and
              future career opportunities.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-8">
              <TabsTrigger value="english" className="py-3 cursor-pointer">
                Spoken English
              </TabsTrigger>
              <TabsTrigger value="digital" className="py-3 cursor-pointer">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger value="ibps" className="py-3 cursor-pointer">
                IBPS Coaching
              </TabsTrigger>
              <TabsTrigger value="entrepreneur" className="py-3 cursor-pointer">
                Entrepreneurship
              </TabsTrigger>
            </TabsList>

            <TabsContent value="english">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Spoken English Course</h2>
                  <p className="text-gray-600">
                    A comprehensive program designed to improve your fluency, vocabulary, grammar, and public speaking
                    skills. Perfect for students, job seekers, and professionals.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {[
                        "Basic to advanced English grammar",
                        "Vocabulary building techniques",
                        "Pronunciation and accent reduction",
                        "Conversational English for daily situations",
                        "Business English and professional communication",
                        "Public speaking and presentation skills",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Course Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span>Duration: 3 months</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <span>Batch Size: 15 students</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Spoken English Course"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="digital">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Digital Marketing Course</h2>
                  <p className="text-gray-600">
                    Master SEO, Social Media Marketing, Google Ads, Email Marketing, Analytics, and more with real-time
                    project experience. Ideal for freelancers, entrepreneurs, and marketing aspirants.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {[
                        "Search Engine Optimization (SEO)",
                        "Social Media Marketing",
                        "Google Ads and PPC campaigns",
                        "Content Marketing strategies",
                        "Email Marketing",
                        "Analytics and performance tracking",
                        "Real-time project implementation",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Course Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span>Duration: 4 months</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <span>Certification included</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Digital Marketing Course"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ibps">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">IBPS Coaching</h2>
                  <p className="text-gray-600">
                    Comprehensive training for reasoning, quantitative aptitude, and English. Regular assessments and
                    expert guidance included.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {[
                        "Quantitative Aptitude",
                        "Reasoning Ability",
                        "English Language",
                        "General Awareness",
                        "Computer Knowledge",
                        "Test-taking strategies",
                        "Regular mock tests and assessments",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Course Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span>Duration: 6 months</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <span>Personalized attention</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="IBPS Coaching"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="entrepreneur">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Entrepreneurship Program</h2>
                  <p className="text-gray-600">
                    Special program for aspiring entrepreneurs in collaboration with Chartered Accountants, Bank
                    Managers, and Nodal Agencies.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {[
                        "Business planning and strategy",
                        "Financial management and accounting",
                        "Marketing and customer acquisition",
                        "Legal aspects of business",
                        "Funding options and pitching to investors",
                        "Operational management",
                        "Networking with industry experts",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Course Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span>Duration: 3 months</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <span>Mentorship included</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Entrepreneurship Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>

      <section className="p-8 md:p-16 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features of Our Courses</h2>
            <p className="text-gray-600">What makes our training programs stand out from the rest.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
          >
            {[
              {
                title: "Expert Trainers",
                description: "Learn from industry professionals with years of practical experience.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Flexible Learning",
                description: "Choose between online and offline classes based on your convenience.",
                icon: <Clock className="h-10 w-10 text-primary" />,
              },
              {
                title: "Practical Approach",
                description: "Hands-on training with real-world projects and case studies.",
                icon: <Award className="h-10 w-10 text-primary" />,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={slideUp}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">Ready to Enhance Your Skills?</h2>
            <p className="text-xl mb-8">Join BIPS Classes today and take a step towards a successful career.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}