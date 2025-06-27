"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "gulshan311604@gmail.com",
      link: "mailto:gulshan311604@gmail.com",
      color: "coral-red",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 9534311604",
      link: "tel:+91 9534311604",
      color: "bright-cyan",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Jamsari , Jamsar, Gopalganj, 841436 (Bihar)",
      link: "",
      color: "lime-green",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-dark-red/20 via-deep-purple to-deep-purple-dark relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-coral-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-bright-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-lime-green/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-coral-red">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's start a <span className="text-bright-cyan">conversation</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to
              hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 border-2 border-transparent hover:border-coral-red/40 transform hover:-translate-y-1 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div
                          className={`mr-4 group-hover:scale-110 transition-transform duration-300 ${
                            info.color === "coral-red"
                              ? "text-coral-red"
                              : info.color === "bright-cyan"
                                ? "text-bright-cyan"
                                : "text-lime-green"
                          }`}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-bright-cyan transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 border-2 border-coral-red/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <form
                  action="https://formspree.io/f/meokvaqz" // Replace with your Formspree endpoint
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-coral-red/30 rounded-lg focus:ring-2 focus:ring-bright-cyan focus:border-bright-cyan bg-deep-purple-dark/50 text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-coral-red/30 rounded-lg focus:ring-2 focus:ring-bright-cyan focus:border-bright-cyan bg-deep-purple-dark/50 text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-coral-red/30 rounded-lg focus:ring-2 focus:ring-bright-cyan focus:border-bright-cyan bg-deep-purple-dark/50 text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral-red to-coral-red-light hover:from-coral-red-dark hover:to-coral-red text-white py-3 text-lg font-medium transition-all duration-200 shadow-lg shadow-coral-red/30 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
