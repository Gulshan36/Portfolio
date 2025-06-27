"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our legacy system into a modern, scalable application.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with John was a game-changer for our startup. He not only delivered excellent code but also provided valuable insights that helped shape our product strategy. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at CreativeAgency",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "John has an incredible ability to translate design concepts into pixel-perfect, interactive experiences. His collaboration skills and technical expertise make him a pleasure to work with.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-l from-deep-purple to-deep-purple-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-coral-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-bright-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-lime-green/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What People <span className="text-coral-red">Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's what my clients and colleagues have to say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 border-2 border-transparent hover:border-coral-red/40 transform hover:-translate-y-1 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-coral-red mr-2 group-hover:text-bright-cyan transition-colors duration-300" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-bright-cyan fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-coral-red to-bright-cyan rounded-full blur-sm opacity-50"></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4 relative z-10 border-2 border-coral-red/30"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
