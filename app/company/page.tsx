"use client"
import Image from "next/image"
import CompanyRegistrationForm from "../components/forms/company/CompanyRegistrationForm"
import SimpleHeader from "../components/layout/SimpleHeader"
import Footer from "../components/layout/Footer"

export default function CompanyRegistration() {
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
                  alt="SolidaryPay pour les entreprises"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2f01ad]/20 to-[#0095de]/20" />
              </div>
            </div>
          </div>

          {/* Colonne de droite - Formulaire */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen pt-32 pb-16 px-4 md:px-12">
            <div className="w-full max-w-xl">
              <CompanyRegistrationForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 