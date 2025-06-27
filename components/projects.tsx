"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://res.cloudinary.com/dkgz4iamd/image/upload/v1751010311/Screenshot_2025-06-27_at_1.14.51_PM_n9dfnw.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe","Razorpay"],
      github: "https://github.com/Gulshan36/E-commerce",
      live: "https://e-commerce-frontend-delta-umber.vercel.app/",
      color: "coral-red",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      color: "bright-cyan",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      color: "lime-green",
    },
    {
      title: "Social Media App",
      description:
        "A social media platform with real-time messaging, post sharing, and user profiles. Built with modern web technologies.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      github: "https://github.com",
      live: "https://example.com",
      color: "deep-purple-light",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      image: "https://res.cloudinary.com/dkgz4iamd/image/upload/v1751017000/Screenshot_2025-06-27_at_3.06.00_PM_aeo8ca.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Gulshan36/Portfolio",
      live: "https://example.com",
      color: "coral-red",
    },
    {
      title: "AI Chat Bot",
      description:
        "An intelligent chatbot powered by OpenAI API with natural language processing and context-aware responses.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "OpenAI API", "Flask", "React"],
      github: "https://github.com",
      live: "https://example.com",
      color: "bright-cyan",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-l from-dark-red/20 to-deep-purple relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-bright-cyan/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-lime-green/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-coral-red">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 border-2 border-transparent hover:border-coral-red/40 transform hover:-translate-y-2 backdrop-blur-sm group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-20 ${
                        project.color === "coral-red"
                          ? "from-coral-red to-coral-red-light"
                          : project.color === "bright-cyan"
                            ? "from-bright-cyan to-bright-cyan-light"
                            : project.color === "lime-green"
                              ? "from-lime-green to-lime-green-light"
                              : "from-deep-purple-light to-deep-purple"
                      }`}
                    ></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs font-medium border ${
                            techIndex % 4 === 0
                              ? "bg-coral-red/20 text-coral-red border-coral-red/30"
                              : techIndex % 4 === 1
                                ? "bg-bright-cyan/20 text-bright-cyan border-bright-cyan/30"
                                : techIndex % 4 === 2
                                  ? "bg-lime-green/20 text-lime-green border-lime-green/30"
                                  : "bg-deep-purple-light/20 text-deep-purple-light border-deep-purple-light/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 text-bright-cyan border-bright-cyan/50 hover:bg-bright-cyan/20 hover:text-white transition-all duration-200"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-coral-red to-coral-red-light hover:from-coral-red-dark hover:to-coral-red text-white shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
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

export default Projects
