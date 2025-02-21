import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-20_at_4.00.46_PM__1_-removebg-preview-TsOZk101QPgfp417NOKm7a7B0qGCNR.png"
              alt="2nd Cycle"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <p className="text-gray-600">Turning trash into treasure, one cycle at a time! 🌍♻️</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "Products", "Team", "About"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-600 hover:text-apple-green transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal Stuff</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-600 hover:text-apple-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-apple-green transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect with Us</h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <Link key={index} href="#" className="text-gray-600 hover:text-apple-green transition-colors">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>© 2024 2nd Cycle. All rights reserved. Made with 💚 for the planet.</p>
        </div>
      </div>
    </footer>
  )
}

