"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GradientCard } from "@/components/ui/gradient-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Green",
    role: "Founder & CEO",
    bio: "Passionate about sustainability and technology",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sam Rivers",
    role: "Head of Product",
    bio: "Building products that make a difference",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jordan Lee",
    role: "Lead Developer",
    bio: "Turning ideas into reality through code",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Taylor Swift",
    role: "Marketing Director",
    bio: "Creating impactful stories that inspire change",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Morgan Chase",
    role: "Sustainability Expert",
    bio: "Making eco-friendly choices accessible to all",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Casey Oak",
    role: "Community Manager",
    bio: "Building bridges between people and planet",
    image: "/placeholder.svg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function TeamPage() {
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
            Meet Our Team
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            We're a passionate group of individuals dedicated to making the world a greener place, one cycle at a time.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-white to-apple-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GradientCard>
                  <div className="relative group">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-sm mb-4">{member.bio}</p>
                      <div className="flex gap-4">
                        <motion.a
                          href={member.social.twitter}
                          className="hover:text-apple-green transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={member.social.linkedin}
                          className="hover:text-apple-green transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={member.social.github}
                          className="hover:text-apple-green transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-green/10 via-mint/10 to-white" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Join Our Team</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
              We're always looking for passionate individuals who want to make a difference. Check out our open
              positions and become part of our mission.
            </p>
            <GradientButton>View Open Positions</GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

