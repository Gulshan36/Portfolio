"use client"

import { Github, Linkedin, Twitter, Heart, HeartCrack, HeartCrackIcon, DogIcon, HousePlugIcon, CodeIcon } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Gulshan36",
      label: "GitHub",
      color: "coral-red",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/gulshan-kumar-99489a250/",
      label: "LinkedIn",
      color: "bright-cyan",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "lime-green",
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-dark-red via-deep-purple-dark to-black text-white py-12 border-t border-coral-red/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-coral-red/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-bright-cyan/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-bright-cyan">Guls</span><span className="text-coral-red">han</span>
            </h3>
            <p className="text-gray-400">
              <span className="text-lime-green">Full Stack Developer</span> &{" "}
              <span className="text-bright-cyan">UI/UX Designer</span>
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-200 p-2 rounded-full transform hover:scale-110 ${
                  link.color === "coral-red"
                    ? "hover:text-coral-red hover:bg-coral-red/20"
                    : link.color === "bright-cyan"
                      ? "hover:text-bright-cyan hover:bg-bright-cyan/20"
                      : "hover:text-lime-green hover:bg-lime-green/20"
                }`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Gulshan Kumar. Made with{" "}
            <CodeIcon className="h-4 w-4 text-coral-red mx-1 fill-current animate-pulse" />
            and lots of<span className="text-bright-cyan"> Tea</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
