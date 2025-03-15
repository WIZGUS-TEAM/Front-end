"use client"
import { FormData } from "../MultiStepForm"
import { motion } from "framer-motion"
import { Building2, Phone, Mail, Globe } from "lucide-react"

const BUSINESS_SECTORS = [
  "E-commerce",
  "Transport",
  "Services",
  "Restauration",
  "Hôtellerie",
  "Santé",
  "Éducation",
  "Finance",
  "Technologie",
  "Autre"
]

type CompanyInfoFormProps = {
  companyName: string
  sector: string
  city: string
  address: string
  phone: string
  companyEmail: string
  website: string
  updateFields: (fields: Partial<FormData>) => void
  onNext: () => void
  onPrev: () => void
}

export default function CompanyInfoForm({
  companyName,
  sector,
  city,
  address,
  phone,
  companyEmail,
  website,
  updateFields,
  onNext,
  onPrev
}: CompanyInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const formAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
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
          Renseignez les informations de votre entreprise pour faciliter l&apos;intégration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemAnimation} className="space-y-4 md:col-span-2">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Nom de l&apos;entreprise
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={e => updateFields({ companyName: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 pl-10 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Ex: Smart Solutions SARL"
            />
          </div>
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
            {BUSINESS_SECTORS.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
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
            placeholder="Ex: Alger"
          />
        </motion.div>

        <motion.div variants={itemAnimation} className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse complète
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={e => updateFields({ address: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ex: 123 Rue des Entrepreneurs"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={e => updateFields({ phone: e.target.value })}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 pl-10 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Ex: +213 XX XX XX XX"
            />
          </div>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
            Email de l&apos;entreprise
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="companyEmail"
              value={companyEmail}
              onChange={e => updateFields({ companyEmail: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 pl-10 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="contact@entreprise.com"
            />
          </div>
        </motion.div>

        <motion.div variants={itemAnimation} className="md:col-span-2">
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            Site web
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="url"
              id="website"
              value={website}
              onChange={e => updateFields({ website: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 pl-10 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="https://www.entreprise.com"
            />
          </div>
        </motion.div>
      </div>

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
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Suivant
        </button>
      </motion.div>
    </motion.form>
  )
} 