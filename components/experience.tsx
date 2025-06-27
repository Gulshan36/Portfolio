"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Create Web Applications 'Chat App' ",
      company: "Collage project",
      period: "2025 - Present",
      description:
        "Developed a real-time chat application using React, Node.js, and Socket.io. Implemented user authentication, message encryption, and responsive design for seamless user experience.",
      technologies: ["React", "Node.js", "AWS", "MongoDB","Socket.io"],
    },
    {
      type: "work",
      title: "Frontend Developer Intern",
      company: "OctaNet",
      period: "2023",
      description:
        "Created responsive web applications and improved website performance by 60%. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "React", "SASS", "Webpack"],
    },
  ]

  const education = [
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "Marwadi University, Rajkot",
      period: "2022 - 2026",
      description:
        "CGPA 6.71",
      technologies: [],
    },
    {
      type: "education",
      title: "Intermediate in Science",
      company: "Bihar School Examination Board, Patna",
      period: "2019-2020",
      description:
        "Percentage Performance 68.2%",
      technologies: ["Physics", "Chemistry", "Mathematics", "Hindi", "English"],
    },
    {
      type: "education",
      title: "Matriculation",
      company: "Bihar School Examination Board, Patna",
      period: "2018",
      description:
        "Percentage Performance 60%",
      technologies: ["Science", "Social Science","Hindi", "English", "Mathematics"],
    },
  ]

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = Number.parseInt(a.period.split(" - ")[0])
    const yearB = Number.parseInt(b.period.split(" - ")[0])
    return yearB - yearA
  })

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-r from-deep-purple-dark to-dark-red/20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-lime-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-bright-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & <span className="text-coral-red">Education</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">My professional journey and educational background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-coral-red via-bright-cyan to-lime-green"></div>

            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-coral-red to-bright-cyan rounded-full border-4 border-deep-purple shadow-lg shadow-coral-red/30 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-16 md:ml-0`}>
                  <div className="bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 rounded-xl p-6 shadow-xl transition-all duration-300 border-2 border-transparent hover:border-coral-red/40 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      {item.type === "work" ? (
                        <Briefcase className="h-5 w-5 text-coral-red mr-2" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-lime-green mr-2" />
                      )}
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <h4 className="text-lg text-bright-cyan mb-3">{item.company}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
