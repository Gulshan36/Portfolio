"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-deep-purple-dark to-deep-purple relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-coral-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-lime-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-coral-red">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coral-red to-bright-cyan rounded-2xl blur-lg opacity-30"></div>
              <Image
                src="https://res.cloudinary.com/dkgz4iamd/image/upload/v1750151593/ofpbf3zae0prtbigtufk.jpg"
                alt="Profile"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto relative z-10 border-4 border-gradient-to-r from-coral-red to-bright-cyan"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-bright-cyan">Full Stack </span> Web{" "}
              <span className="text-lime-green">Developer</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate and hardworking Full Stack Web Developer. I have
              learned how to build websites and web applications using modern
              tools and technologies. I enjoy creating websites that look good
              and work well.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Even though I’m just starting my career, I have built some
              personal and college projects using React, Node.js, and other
              tools. I love learning new things, solving problems, and improving
              my skills every day.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              In my free time, I explore new technologies, read about web
              development trends, or try small side projects to learn by doing.{" "}
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                My <span className="text-coral-red">Skills</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 cursor-default hover:scale-105 ${
                      index % 4 === 0
                        ? "bg-coral-red/20 text-coral-red border-coral-red/30 hover:bg-coral-red/30"
                        : index % 4 === 1
                        ? "bg-bright-cyan/20 text-bright-cyan border-bright-cyan/30 hover:bg-bright-cyan/30"
                        : index % 4 === 2
                        ? "bg-lime-green/20 text-lime-green border-lime-green/30 hover:bg-lime-green/30"
                        : "bg-deep-purple-light/20 text-deep-purple-light border-deep-purple-light/30 hover:bg-deep-purple-light/30"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="/Gulshan Kuma.pdf"
              download
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              <Button className="bg-gradient-to-r from-coral-red to-dark-red hover:from-coral-red-dark hover:to-dark-red-light text-white shadow-lg shadow-coral-red/30 transform hover:scale-105 transition-all duration-200">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
