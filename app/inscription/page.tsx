"use client"
import MultiStepForm from "../components/forms/MultiStepForm"
import Footer from "../components/layout/Footer"
import { Button } from "../components/Button/Button"
import Link from "next/link"
import { LogIn } from "lucide-react"
import SimpleHeader from "../components/layout/SimpleHeader"
import Image from "next/image"

export default function InscriptionPage() {
  return (
    <>
     <SimpleHeader />

      <main className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen items-center justify-center gap-8">
          {/* Colonne de gauche - Image */}
          <div className="hidden lg:block w-1/2">
            <div className="w-full h-[calc(100vh-5rem)] p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/form_image.png"
                  alt="Donation illustration"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
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