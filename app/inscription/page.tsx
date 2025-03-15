"use client"
import MultiStepForm from "../components/forms/MultiStepForm"
import Footer from "../components/layout/Footer"
import { Button } from "../components/Button/Button"
import Link from "next/link"
import { LogIn } from "lucide-react"
import Image from "next/image"

export default function InscriptionPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-l from-[#2f01ad] to-[#0095de] text-white h-20">
        <div className="container mx-auto px-4 h-full">
          <nav className="flex items-center justify-between h-full">
            <Link href="/" className="text-white font-bold text-2xl">
              Smart Donation
            </Link>

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

      <main className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen items-center justify-center gap-8">
          {/* Colonne de gauche - Image */}
          <div className="hidden lg:block w-1/2">
            <div className="w-full h-[calc(100vh-5rem)] p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/donation-hero.jpg"
                  alt="Donation illustration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2f01ad]/20 to-[#0095de]/20" />
              </div>
            </div>
          </div>

          {/* Colonne de droite - Contenu */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen pt-32 pb-16 px-4 md:px-12">
            <div className="w-full max-w-xl">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 