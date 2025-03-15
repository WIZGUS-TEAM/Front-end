"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, LogIn } from "lucide-react"
import { Button } from "../Button/Button"
import Link from "next/link"
import Image from 'next/image'
import { API_BASE_URL } from '../../config/api'

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
      className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-l from-[#2f01ad] to-[#0095de] text-white"
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          <motion.div 
            className="text-white font-bold text-2xl"
            animate={{
              scale: isAtTop ? 1 : 0.95
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <Image
                src="/noBgWhite.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-12 w-auto"
                priority
                quality={100}
              />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Accueil", href: "/" },
              { name: "Fonctionnalités", href: "/#features" },
              { name: "Pour qui ?", href: "/#for-whom" },
              { name: "Contact", href: "/#contact" }
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-white hover:text-white/80 transition-colors"
              >
                {name}
              </Link>
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
            <Link href="/company">
              <Button 
                variant="solid" 
                size="md"
                className="shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
              >
                Intégrez notre API
              </Button>
            </Link>
            <Link href="/inscription">
              <Button 
                variant="solid" 
                size="md"
                className="shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
              >
                Inscrivez votre cause
              </Button>
            </Link>
            <a 
              href={`${API_BASE_URL}/admin`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="md"
                className="border-white text-white hover:bg-white hover:text-[#2f01ad] transition-all duration-300 flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Connexion
              </Button>
            </a>
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
                {[
                  { name: "Accueil", href: "/" },
                  { name: "Fonctionnalités", href: "/#features" },
                  { name: "Pour qui ?", href: "/#for-whom" },
                  { name: "Contact", href: "/#contact" }
                ].map(({ name, href }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={href} className="block px-4 py-2 text-white hover:bg-white/10 rounded-md">
                      {name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="px-4 space-y-2"
                >
                  <Link href="/company">
                    <Button 
                      variant="solid" 
                      size="md"
                      className="w-full shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
                    >
                      Intégrez notre API
                    </Button>
                  </Link>
                  <Link href="/inscription">
                    <Button 
                      variant="solid" 
                      size="md"
                      className="w-full shadow-[0_0_15px_rgba(0,149,222,0.3)] hover:shadow-[0_0_20px_rgba(0,149,222,0.5)] transition-all duration-300"
                    >
                      Inscrivez votre cause
                    </Button>
                  </Link>
                  <a 
                    href={`${API_BASE_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="md"
                      className="w-full border-white text-white hover:bg-white hover:text-[#2f01ad] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      Connexion
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 