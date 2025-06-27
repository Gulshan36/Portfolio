"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Palette } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "coral-red",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
      color: "bright-cyan",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
      ],
      color: "lime-green",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Git", level: 90 },
        { name: "Webpack", level: 75 },
      ],
      color: "deep-purple-light",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-deep-purple via-deep-purple-dark to-dark-red/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-coral-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-bright-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-lime-green/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & <span className="text-coral-red">Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-deep-purple-dark/80 to-deep-purple/60 rounded-xl p-6 shadow-xl transition-all duration-300 border-2 border-transparent hover:border-coral-red/40 transform hover:-translate-y-1 backdrop-blur-sm group"
            >
              <div
                className={`mb-4 ${
                  category.color === "coral-red"
                    ? "text-coral-red"
                    : category.color === "bright-cyan"
                      ? "text-bright-cyan"
                      : category.color === "lime-green"
                        ? "text-lime-green"
                        : "text-deep-purple-light"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-deep-purple-dark/50 rounded-full h-2 border border-gray-600/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${
                          category.color === "coral-red"
                            ? "bg-gradient-to-r from-coral-red to-coral-red-light"
                            : category.color === "bright-cyan"
                              ? "bg-gradient-to-r from-bright-cyan to-bright-cyan-light"
                              : category.color === "lime-green"
                                ? "bg-gradient-to-r from-lime-green to-lime-green-light"
                                : "bg-gradient-to-r from-deep-purple-light to-deep-purple"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
