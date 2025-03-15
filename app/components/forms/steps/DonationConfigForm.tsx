"use client"
import { FormData } from "../MultiStepForm"
import { motion } from "framer-motion"
import { Coins, Percent, PiggyBank, ArrowUpDown } from "lucide-react"

type DonationConfigFormProps = {
  allowDirectDonation: boolean
  donationMethods: string[]
  updateFields: (fields: Partial<FormData>) => void
  onNext: () => void
  onPrev: () => void
}

const DONATION_METHODS = [
  {
    id: "roundup",
    title: "Arrondi automatique",
    description: "Les paiements sont arrondis et la différence est reversée",
    icon: ArrowUpDown
  },
  {
    id: "percentage",
    title: "Pourcentage du montant",
    description: "Ex: 1% du montant d'un achat va à une cause",
    icon: Percent
  },
  {
    id: "custom",
    title: "Don libre",
    description: "Le client choisit combien donner",
    icon: Coins
  },
  {
    id: "fixed",
    title: "Montant fixe",
    description: "Ex: 5 DA par achat reversé à une cause",
    icon: PiggyBank
  }
]

export default function DonationConfigForm({
  allowDirectDonation,
  donationMethods,
  updateFields,
  onNext,
  onPrev
}: DonationConfigFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const toggleMethod = (method: string) => {
    const newMethods = donationMethods.includes(method)
      ? donationMethods.filter(m => m !== method)
      : [...donationMethods, method]
    updateFields({ donationMethods: newMethods })
  }

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={formAnimation}
    >
      <motion.div variants={itemAnimation}>
        <h2 className="text-2xl font-bold text-gray-900">Configuration des dons</h2>
        <p className="mt-2 text-sm text-gray-600">
          Définissez comment vos clients pourront faire des dons
        </p>
      </motion.div>

      <motion.div variants={itemAnimation} className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Options de don direct</h3>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => updateFields({ allowDirectDonation: true })}
            className={`
              flex-1 p-4 rounded-xl border-2 text-left transition-all
              ${
                allowDirectDonation
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <h4 className={`font-medium mb-1 ${
              allowDirectDonation ? "text-blue-700" : "text-gray-900"
            }`}>
              Oui
            </h4>
            <p className={`text-sm ${
              allowDirectDonation ? "text-blue-600" : "text-gray-500"
            }`}>
              Les clients peuvent faire un don sans achat
            </p>
          </button>

          <button
            type="button"
            onClick={() => updateFields({ allowDirectDonation: false })}
            className={`
              flex-1 p-4 rounded-xl border-2 text-left transition-all
              ${
                !allowDirectDonation
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <h4 className={`font-medium mb-1 ${
              !allowDirectDonation ? "text-blue-700" : "text-gray-900"
            }`}>
              Non
            </h4>
            <p className={`text-sm ${
              !allowDirectDonation ? "text-blue-600" : "text-gray-500"
            }`}>
              Les dons sont uniquement liés aux achats
            </p>
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemAnimation} className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Modes de dons possibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DONATION_METHODS.map(({ id, title, description, icon: Icon }) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => toggleMethod(id)}
              className={`
                p-6 rounded-xl border-2 text-left transition-all relative overflow-hidden group
                ${
                  donationMethods.includes(id)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10">
                <Icon className={`h-8 w-8 mb-4 ${
                  donationMethods.includes(id) ? "text-blue-500" : "text-gray-400"
                }`} />
                <h4 className={`font-medium mb-2 ${
                  donationMethods.includes(id) ? "text-blue-700" : "text-gray-900"
                }`}>
                  {title}
                </h4>
                <p className={`text-sm ${
                  donationMethods.includes(id) ? "text-blue-600" : "text-gray-500"
                }`}>
                  {description}
                </p>
              </div>
              {donationMethods.includes(id) && (
                <motion.div
                  className="absolute inset-0 bg-blue-500 opacity-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="flex justify-between pt-4"
        variants={itemAnimation}
      >
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Précédent
        </button>
        <button
          type="submit"
          disabled={donationMethods.length === 0}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Finaliser l&apos;inscription
        </button>
      </motion.div>
    </motion.form>
  )
} 