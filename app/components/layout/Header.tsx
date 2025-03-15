"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "../Button/Button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: isAtTop ? "120px" : "80px"
      }}
      transition={{ 
        y: { type: "spring", stiffness: 100 },
        height: { duration: 0.3, ease: "easeInOut" }
      }}
      className="sticky top-0 z-50 w-full bg-gradient-to-l from-[#2f01ad] to-[#0095de] text-white"
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: isAtTop ? 1 : 0.95,
              y: isAtTop ? 0 : -2
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Heart className="h-6 w-6 text-white transition-all duration-300" />
            <span className="text-xl font-bold text-white transition-all duration-300">Smart Donation</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {["Accueil", "Fonctionnalités", "API", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: isAtTop ? 1 : 0.95
                }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.3
                }}
              >
                <Link 
                  href={item === "Accueil" ? "#" : `#${item.toLowerCase()}`} 
                  className="text-white hover:text-white/80 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="hidden md:flex items-center gap-3"
            animate={{
              scale: isAtTop ? 1 : 0.95,
              y: isAtTop ? 0 : -1
            }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              variant="solid" 
              size="md"
              className="shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
            >
              Inscrivez votre cause
            </Button>
            <Button 
              variant="solid" 
              size="md"
              className="shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
            >
              Intégrez notre API
            </Button>
          </motion.div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-white hover:text-white/80" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {["Accueil", "Fonctionnalités", "API", "Contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={item === "Accueil" ? "#" : `#${item.toLowerCase()}`} className="block px-4 py-2 text-white hover:bg-white/10 rounded-md">
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 