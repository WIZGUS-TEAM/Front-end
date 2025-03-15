"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function SuccessStep() {
  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="text-center py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Inscription réussie !
      </h2>
      
      <div className="space-y-4 text-gray-600">
        <p className="text-lg">
          Merci de vous être inscrit sur notre plateforme.
        </p>
        <p>
          Un email de confirmation a été envoyé à votre adresse email.
          Veuillez cliquer sur le lien dans l'email pour activer votre compte.
        </p>
        <p className="text-sm">
          Si vous ne recevez pas l'email dans les prochaines minutes, 
          veuillez vérifier votre dossier spam.
        </p>
      </div>

      <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>Votre compte sera activé après vérification de l'email</span>
      </div>
    </motion.div>
  )
} 