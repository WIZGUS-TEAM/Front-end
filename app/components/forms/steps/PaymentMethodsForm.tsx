"use client"
import { FormData } from "../MultiStepForm"
import { motion } from "framer-motion"
import { Wallet, Users, CreditCard } from "lucide-react"

type PaymentMethodsFormProps = {
  paymentMethods: string[]
  updateFields: (fields: Partial<FormData>) => void
  onNext: () => void
  onPrev: () => void
}

const PAYMENT_METHODS = [
  {
    id: "wallet",
    title: "Par wallet intégré",
    description: "Paiement en ligne via Dahabia ou autre",
    icon: Wallet
  },
  {
    id: "agents",
    title: "Par rechargement via agents",
    description: "Ex: Yassir, partenaires locaux",
    icon: Users
  },
  {
    id: "both",
    title: "Les deux méthodes",
    description: "Offrez plus de flexibilité à vos clients",
    icon: CreditCard
  }
]

export default function PaymentMethodsForm({
  paymentMethods,
  updateFields,
  onNext,
  onPrev
}: PaymentMethodsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const toggleMethod = (method: string) => {
    const newMethods = paymentMethods.includes(method)
      ? paymentMethods.filter(m => m !== method)
      : [...paymentMethods, method]
    updateFields({ paymentMethods: newMethods })
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
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={formAnimation}
    >
      <motion.div variants={itemAnimation}>
        <h2 className="text-2xl font-bold text-gray-900">Méthodes de rechargement</h2>
        <p className="mt-2 text-sm text-gray-600">
          Comment vos clients pourront-ils recharger leur compte ?
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={formAnimation}
      >
        {PAYMENT_METHODS.map(({ id, title, description, icon: Icon }) => (
          <motion.button
            key={id}
            type="button"
            onClick={() => toggleMethod(id)}
            className={`
              p-6 rounded-xl border-2 text-left transition-all relative overflow-hidden group
              ${
                paymentMethods.includes(id)
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
                paymentMethods.includes(id) ? "text-blue-500" : "text-gray-400"
              }`} />
              <h3 className={`font-semibold mb-2 ${
                paymentMethods.includes(id) ? "text-blue-700" : "text-gray-900"
              }`}>
                {title}
              </h3>
              <p className={`text-sm ${
                paymentMethods.includes(id) ? "text-blue-600" : "text-gray-500"
              }`}>
                {description}
              </p>
            </div>
            {paymentMethods.includes(id) && (
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
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
          disabled={paymentMethods.length === 0}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </motion.div>
    </motion.form>
  )
} 