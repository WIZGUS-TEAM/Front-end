"use client"
import { CompanyFormData } from "../CompanyRegistrationForm"
import { motion } from "framer-motion"

type CompanyInfoFormProps = {
  companyName: string
  sector: string
  city: string
  address: string
  updateFields: (fields: Partial<CompanyFormData>) => void
  onNext: () => void
  onPrev: () => void
}

const SECTORS = [
  "Commerce de détail",
  "Restauration",
  "Services",
  "Transport",
  "E-commerce",
  "Autre"
]

export default function CompanyInfoForm({
  companyName,
  sector,
  city,
  address,
  updateFields,
  onNext,
  onPrev
}: CompanyInfoFormProps) {
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
    visible: { 
      opacity: 1, 
      y: 0 
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
        <h2 className="text-2xl font-bold text-gray-900">Informations de l&apos;entreprise</h2>
        <p className="mt-2 text-sm text-gray-600">
          Renseignez les informations de votre entreprise
        </p>
      </motion.div>

      <motion.div variants={itemAnimation}>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Nom de l&apos;entreprise
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={e => updateFields({ companyName: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </motion.div>

      <motion.div variants={itemAnimation}>
        <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
          Secteur d&apos;activité
        </label>
        <select
          id="sector"
          value={sector}
          onChange={e => updateFields({ sector: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Sélectionnez un secteur</option>
          {SECTORS.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={itemAnimation}>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Ville
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={e => updateFields({ city: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </motion.div>

      <motion.div variants={itemAnimation}>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Adresse
        </label>
        <textarea
          id="address"
          value={address}
          onChange={e => updateFields({ address: e.target.value })}
          required
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </motion.div>

      <motion.div variants={itemAnimation} className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Précédent
        </button>
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