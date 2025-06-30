import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gulshan Kumar",
  description:
    "Personal portfolio of Gulshan Kumar, a passionate Full Stack Developer and UI/UX Designer specializing in React, Node.js, and modern web technologies.",
  keywords: "full stack developer, react developer, nodejs, web developer, ui ux designer, portfolio",
  authors: [{ name: "Gulshan Kumar" }],
  creator: "Gulshan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Gulshan36/Portfolio",
    title: "Gulshan Kumar - Full Stack Developer & UI/UX Designer",
    description: "Personal portfolio showcasing projects and skills in web development",
    siteName: "Gulshan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulshan Kumar - Full Stack Developer",
    description: "Personal portfolio showcasing projects and skills in web development",
    creator: "@gulshan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
