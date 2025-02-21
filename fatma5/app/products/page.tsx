"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Filter, Star } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { GradientCard } from "../../components/ui/gradient-card"

const categories = [
  {
    id: "compost",
    name: "Compost & Soil",
    description: "Premium organic materials for your garden",
    image: "/placeholder.svg",
  },
  {
    id: "planters",
    name: "Planters & Pots",
    description: "Sustainable containers for your plants",
    image: "/placeholder.svg",
  },
  {
    id: "tools",
    name: "Gardening Tools",
    description: "Eco-friendly equipment for your needs",
    image: "/placeholder.svg",
  },
]

const products = [
  {
    id: 1,
    name: "EcoBoost Compost",
    category: "compost",
    price: 19.99,
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 128,
    description: "Premium quality organic compost for your garden",
  },
  {
    id: 2,
    name: "GreenGrow Soil Mix",
    category: "compost",
    price: 15.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 95,
    description: "Nutrient-rich soil blend for optimal plant growth",
  },
  {
    id: 3,
    name: "Upcycled Planters",
    category: "planters",
    price: 24.99,
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 67,
    description: "Eco-friendly pots made from recycled materials",
  },
  {
    id: 4,
    name: "Biodegradable Seed Pots",
    category: "planters",
    price: 12.99,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 42,
    description: "Decomposable pots perfect for seedlings",
  },
  {
    id: 5,
    name: "Bamboo Garden Tools Set",
    category: "tools",
    price: 34.99,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    description: "Complete set of sustainable gardening tools",
  },
  {
    id: 6,
    name: "Recycled Plastic Watering Can",
    category: "tools",
    price: 18.99,
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 89,
    description: "Durable watering can made from recycled materials",
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-apple-green/10 via-mint/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Discover our range of sustainable products designed to help you make a positive impact on the environment.
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-green/5 via-mint/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Browse Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className="cursor-pointer"
              >
                <GradientCard>
                  <div className="relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80">{category.description}</p>
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-white to-apple-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold gradient-text">Featured Products</h2>
            <GradientButton variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </GradientButton>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <AnimatePresence>
              {(isFilterOpen || !window.matchMedia("(max-width: 768px)").matches) && (
                <motion.div
                  className="md:w-64"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GradientCard className="sticky top-24">
                    <h3 className="font-semibold mb-4 text-gray-800">Categories</h3>
                    <div className="space-y-2">
                      <GradientButton
                        variant={selectedCategory === "all" ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory("all")}
                      >
                        All Products
                      </GradientButton>
                      {categories.map((category) => (
                        <GradientButton
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </GradientButton>
                      ))}
                    </div>
                  </GradientCard>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <GradientCard>
                        <div className="relative group">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                          <motion.button
                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ShoppingCart className="w-5 h-5 text-apple-green" />
                          </motion.button>
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-apple-green font-bold text-xl">${product.price.toFixed(2)}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Star className="w-4 h-4 fill-apple-green text-apple-green" />
                              <span>{product.rating}</span>
                              <span className="text-gray-400">({product.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </GradientCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

