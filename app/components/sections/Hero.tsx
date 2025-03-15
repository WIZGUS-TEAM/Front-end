import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../Button/page"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#170e4f] leading-tight"
            >
              Transformez chaque paiement en un acte de solidarité
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Une solution innovante pour rendre les dons transparents, traçables et accessibles à tous.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="h-12 px-8 bg-[#0095de] text-white hover:bg-[#0095de]/90 font-medium shadow-lg transition-transform hover:translate-y-[-2px]">
                Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center"
          >
            <Image
              src="/Hero_image.jpg?height=600&width=600"
              width={600}
              height={600}
              alt="Donation Illustration"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 