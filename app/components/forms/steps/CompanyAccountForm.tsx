"use client"
import { FormData } from "../MultiStepForm"
import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

type CompanyAccountFormProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  updateFields: (fields: Partial<FormData>) => void
  onNext: () => void
}

export default function CompanyAccountForm({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  updateFields,
  onNext
}: CompanyAccountFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) return
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

  const isPasswordValid = password.length >= 8
  const doPasswordsMatch = password === confirmPassword
  const isFormValid = firstName && lastName && email && isPasswordValid && doPasswordsMatch

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={formAnimation}
    >
      <motion.div variants={itemAnimation}>
        <h2 className="text-2xl font-bold text-gray-900">Créez votre compte administrateur</h2>
        <p className="mt-2 text-sm text-gray-600">
          Ces informations permettront de gérer les dons et l&apos;intégration de l&apos;API
        </p>
      </motion.div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email professionnel
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

        <motion.div variants={itemAnimation} className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={e => updateFields({ password: e.target.value })}
              required
              minLength={8}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center"
            >
              {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
            </button>
          </div>
          {password && !isPasswordValid && (
            <p className="mt-1 text-sm text-red-600">Le mot de passe doit contenir au moins 8 caractères</p>
          )}
        </motion.div>

        <motion.div variants={itemAnimation} className="relative">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmer le mot de passe
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={e => updateFields({ confirmPassword: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
            </button>
          </div>
          {confirmPassword && !doPasswordsMatch && (
            <p className="mt-1 text-sm text-red-600">Les mots de passe ne correspondent pas</p>
          )}
        </motion.div>
      </div>

      <motion.div 
        className="flex justify-end"
        variants={itemAnimation}
      >
        <button
          type="submit"
          disabled={!isFormValid}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Créer mon compte
        </button>
      </motion.div>
    </motion.form>
  )
} 