"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function SuccessStep() {
  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      className="text-center py-12"
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Inscription réussie !
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Votre compte entreprise a été créé avec succès. Vous pouvez maintenant accéder à votre tableau de bord.
      </p>
      <button
        type="button"
        onClick={() => window.location.href = "/dashboard"}
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Accéder au tableau de bord
      </button>
    </motion.div>
  )
} 