import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Leaf, RefreshCcw, Users } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="2nd Cycle" width={32} height={32} className="w-8 h-8" />
            <span className="font-semibold text-xl">2nd Cycle</span>
          </div>
          <Button variant="ghost">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-mint/50 to-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable Living, <span className="text-apple-green">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Join our community of eco-conscious individuals making a difference through sustainable choices and
            recycling.
          </p>
          <Button size="lg" className="bg-apple-green hover:bg-apple-green/90 text-white">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-2 border-mint hover:border-apple-green transition-colors">
              <Leaf className="w-12 h-12 text-apple-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Make sustainable choices that benefit our planet</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-mint hover:border-apple-green transition-colors">
              <RefreshCcw className="w-12 h-12 text-apple-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Recycling</h3>
              <p className="text-gray-600">Simple and efficient recycling process</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-mint hover:border-apple-green transition-colors">
              <Users className="w-12 h-12 text-apple-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Connect with like-minded individuals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mint/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Make a Difference?</h2>
          <Button size="lg" className="bg-apple-green hover:bg-apple-green/90 text-white">
            Join 2nd Cycle Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="2nd Cycle" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm">© 2024 2nd Cycle</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-apple-green">
                Terms
              </a>
              <a href="#" className="hover:text-apple-green">
                Privacy
              </a>
              <a href="#" className="hover:text-apple-green">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

