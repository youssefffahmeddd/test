"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GradientCard } from "../../components/ui/gradient-card"
import { Leaf, RefreshCcw, Users, ArrowDown } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-apple-green/10 via-mint/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-8 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About 2nd Cycle
          </motion.h1>
          <motion.div
            className="floating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-20_at_4.00.46_PM__1_-removebg-preview-TsOZk101QPgfp417NOKm7a7B0qGCNR.png"
              alt="2nd Cycle Logo"
              width={300}
              height={300}
              className="mx-auto mb-8"
            />
          </motion.div>
          <p className="text-2xl max-w-3xl mx-auto mb-12 text-gray-700">
            2nd Cycle is on a mission to revolutionize the way we think about waste and sustainability. We believe that
            with the right tools and community, everyone can make a significant impact on our planet.
          </p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="w-8 h-8 mx-auto text-apple-green" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-white to-apple-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly Solutions",
                description: "We provide sustainable products that help reduce environmental impact.",
                color: "from-green-400/20 to-green-500/20",
              },
              {
                icon: RefreshCcw,
                title: "Circular Economy",
                description: "Our app facilitates a circular economy, turning waste into valuable resources.",
                color: "from-blue-400/20 to-blue-500/20",
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "We're building a network of environmentally conscious individuals and businesses.",
                color: "from-purple-400/20 to-purple-500/20",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GradientCard className="h-full">
                  <div className="relative z-10">
                    <feature.icon className="w-12 h-12 text-apple-green mb-4 transform group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-green/10 via-mint/10 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Our Story</h2>
            <GradientCard className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Founded in 2024, 2nd Cycle started as a small group of friends passionate about making a difference.
                  We saw the growing problem of waste and decided to create a solution that would not only help the
                  environment but also make sustainability accessible and rewarding for everyone.
                </p>
                <p>
                  Today, we're proud to have helped thousands of users reduce their carbon footprint, recycle more
                  effectively, and contribute to a cleaner, greener planet. But our journey is just beginning, and with
                  your help, we can create a world where waste is not the end, but a new beginning.
                </p>
              </div>
            </GradientCard>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-mint/10 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50K+", label: "Items Recycled" },
              { number: "100+", label: "Community Events" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GradientCard className="text-center">
                  <h3 className="text-5xl font-bold gradient-text mb-2">{stat.number}</h3>
                  <p className="text-xl text-gray-600">{stat.label}</p>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

