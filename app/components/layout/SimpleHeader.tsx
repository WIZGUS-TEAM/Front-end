"use client"
import { LogIn } from "lucide-react"
import { Button } from "../Button/Button"
import Link from "next/link"
import Image from 'next/image'

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-l from-[#2f01ad] to-[#0095de] text-white h-20">
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/noBgWhite.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-12 w-auto"
                priority
                quality={100}
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="md"
              className="border-white text-white hover:bg-white hover:text-[#2f01ad] transition-all duration-300 flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Connexion
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
} 