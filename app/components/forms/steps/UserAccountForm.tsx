"use client"
import { FormData } from "../MultiStepForm"
import { motion } from "framer-motion"

type UserAccountFormProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  updateFields: (fields: Partial<FormData>) => void
  onNext: () => void
}

export default function UserAccountForm({
  firstName,
  lastName,
  email,
  password,
  updateFields,
  onNext
}: UserAccountFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
        <h2 className="text-2xl font-bold text-gray-900">Créez votre compte</h2>
        <p className="mt-2 text-sm text-gray-600">
          Commencez votre inscription en remplissant vos informations personnelles
        </p>
      </motion.div>

      <div className="space-y-4">
        <motion.div variants={itemAnimation}>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={e => updateFields({ firstName: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={e => updateFields({ lastName: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => updateFields({ password: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>
      </div>

      <motion.div 
        className="flex justify-end"
        variants={itemAnimation}
      >
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Suivant
        </button>
      </motion.div>
    </motion.form>
  )
} 