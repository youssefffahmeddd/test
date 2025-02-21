"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "About", path: "/about" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-apple-green/90 backdrop-blur-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-20_at_4.00.46_PM__1_-removebg-preview-TsOZk101QPgfp417NOKm7a7B0qGCNR.png"
                alt="2nd Cycle"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
                priority
              />
            </motion.div>
            <span className="text-2xl font-bold text-white">2nd Cycle</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-lg font-medium text-white hover:text-mint transition-colors"
              >
                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
          <motion.div
            className="bg-white text-apple-green px-4 py-2 rounded-full cursor-pointer font-bold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get the App 📱
          </motion.div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/10 backdrop-blur-md mt-4 p-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block py-2 text-lg font-medium text-white hover:text-mint transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

