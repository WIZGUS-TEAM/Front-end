"use client"
import { AssociationInfoFormProps } from "../../../types"
import { motion } from "framer-motion"

const ALGERIAN_CITIES = [
  "Alger",
  "Oran",
  "Constantine",
  "Annaba",
  "Blida",
  "Batna",
  "Sétif",
  "Sidi Bel Abbès",
  "Biskra",
  "Tébessa",
  "Tlemcen",
  "Béchar",
  "Tiaret",
  "Béjaïa",
  "Tizi Ouzou",
  "Skikda",
  "Chlef",
  "Bordj Bou Arréridj",
  "Mostaganem",
  "Médéa"
]

export default function AssociationInfoForm({
  associationName,
  city,
  address,
  updateFields,
  onNext,
  onPrev
}: AssociationInfoFormProps) {
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
        <h2 className="text-2xl font-bold text-gray-900">Informations de l&apos;association</h2>
        <p className="mt-2 text-sm text-gray-600">
          Renseignez les informations de votre association
        </p>
      </motion.div>

      <div className="space-y-4">
        <motion.div variants={itemAnimation}>
          <label htmlFor="associationName" className="block text-sm font-medium text-gray-700">
            Nom de l&apos;association
          </label>
          <input
            type="text"
            id="associationName"
            value={associationName}
            onChange={e => updateFields({ associationName: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Ville
          </label>
          <select
            id="city"
            value={city}
            onChange={e => updateFields({ city: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Sélectionnez une ville</option>
            {ALGERIAN_CITIES.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={e => updateFields({ address: e.target.value })}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </motion.div>
      </div>

      <motion.div 
        className="flex justify-between"
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