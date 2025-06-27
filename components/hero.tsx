"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-deep-purple-dark to-dark-red">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-coral-red/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-bright-cyan/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-lime-green/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red via-bright-cyan to-lime-green animate-pulse-glow">
                Gulshan Kumar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-8">
              <span className="text-bright-cyan">Full Stack Web Developer</span> &{" "}
              <span className="text-lime-green">UI/UX Designer</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              I create beautiful, responsive web applications with modern technologies. Passionate about clean code,
              user experience, and bringing ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:gulshan311604@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-coral-red to-coral-red-light hover:from-coral-red-dark hover:to-coral-red text-white px-8 py-3 shadow-lg shadow-coral-red/40 transform hover:scale-105 transition-all duration-200 animate-pulse-glow"
              >
                Hire Me
              </Button>
            </a>
            <a
              // href="https://drive.google.com/file/d/17QKEoFtRDMd9TGz1rBgsuNBoeujneljm/view?usp=sharing"
              href="/Gulshan Kuma.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-bright-cyan/20 to-lime-green/20 text-white border-bright-cyan/50 hover:bg-bright-cyan/30 hover:border-bright-cyan px-8 py-3 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-bright-cyan animate-bounce" />
      </motion.div>
    </section>
  )
}

export default Hero
