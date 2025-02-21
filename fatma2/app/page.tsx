"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, RefreshCcw, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const products = [
  {
    name: "EcoBoost Compost 🌱",
    price: "$19.99",
    image: "/placeholder.svg",
    description: "Supercharge your garden with our premium organic compost!",
  },
  {
    name: "Upcycled Planters 🪴",
    price: "$24.99",
    image: "/placeholder.svg",
    description: "Trendy pots made from 100% recycled materials. Plants love 'em!",
  },
  {
    name: "GreenGrow Soil Mix 🌿",
    price: "$15.99",
    image: "/placeholder.svg",
    description: "The secret sauce for lush, Insta-worthy plants!",
  },
]

export default function Home() {
  const [quizStep, setQuizStep] = useState(0)
  const [score, setScore] = useState(0)

  const quizQuestions = [
    {
      question: "How much waste does the average person produce daily?",
      answers: ["1 lb", "3 lbs", "5 lbs", "7 lbs"],
      correct: 1,
    },
    {
      question: "What percentage of plastic is recycled globally?",
      answers: ["9%", "25%", "50%", "75%"],
      correct: 0,
    },
    {
      question: "How long does it take for a plastic bottle to decompose?",
      answers: ["50 years", "100 years", "450 years", "1000 years"],
      correct: 2,
    },
  ]

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[quizStep].correct) {
      setScore(score + 1)
    }
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setQuizStep(quizQuestions.length)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poster%20-%20Copy.jpg-jSP3bcZQTDjH1ltnJMBAwX4PGBILZM.jpeg"
          alt="Earth as planter"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-white max-w-2xl mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Trash to Treasure: <br />
              <span className="text-apple-green">Join the Eco Revolution! 🌍♻️</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Ready to save the planet and look cool doing it? Let's go! 🚀
            </p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="https://apps.apple.com"
                target="_blank"
                className="w-[180px] h-[60px] relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
              >
                <Image src="/app-store-badge.png" alt="Download on App Store" fill className="object-cover" />
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                className="w-[200px] h-[60px] relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
              >
                <Image src="/google-play-badge.png" alt="Get it on Google Play" fill className="object-cover" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-20_at_4.00.46_PM__1_-removebg-preview-TsOZk101QPgfp417NOKm7a7B0qGCNR.png"
              alt="2nd Cycle Logo"
              width={400}
              height={400}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Test Your Eco-IQ! 🧠♻️</h2>
          <div className="max-w-2xl mx-auto">
            {quizStep < quizQuestions.length ? (
              <div>
                <h3 className="text-2xl font-semibold mb-4">{quizQuestions[quizStep].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizQuestions[quizStep].answers.map((answer, index) => (
                    <motion.button
                      key={index}
                      className="p-4 bg-mint text-apple-green rounded-lg font-semibold text-lg hover:bg-apple-green hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(index)}
                    >
                      {answer}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Quiz Complete! 🎉</h3>
                <p className="text-xl mb-4">
                  You scored {score} out of {quizQuestions.length}!
                </p>
                <p className="text-lg">
                  {score === quizQuestions.length
                    ? "You're an eco-warrior! 🌟 Time to save the planet!"
                    : "Great effort! Keep learning and growing your eco-knowledge!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-br from-mint to-apple-green">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Eco-Chic Products 🛍️🌿</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-apple-green font-bold text-xl">{product.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why 2nd Cycle Rocks 🤘</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Planet-Friendly Vibes 🌍",
                description: "Our products are so eco-friendly, even Mother Nature is jealous!",
              },
              {
                icon: RefreshCcw,
                title: "Waste Not, Want Not ♻️",
                description: "We turn trash into treasure faster than you can say 'recycling'",
              },
              {
                icon: Users,
                title: "Squad Goals 👥",
                description: "Join a community of eco-warriors making the planet cooler (literally and figuratively)",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-mint to-apple-green text-white hover:shadow-xl transition-shadow">
                  <feature.icon className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-apple-green to-mint text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Save the World? 🦸‍♀️🦸‍♂️</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Download the 2nd Cycle app and start your eco-adventure today! It's like having a superhero cape, but
              cooler. 😎🌿
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="https://apps.apple.com"
              target="_blank"
              className="w-[200px] h-[60px] relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
            >
              <Image src="/app-store-badge.png" alt="Download on App Store" fill className="object-cover" />
            </Link>
            <Link
              href="https://play.google.com"
              target="_blank"
              className="w-[220px] h-[60px] relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
            >
              <Image src="/google-play-badge.png" alt="Get it on Google Play" fill className="object-cover" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

