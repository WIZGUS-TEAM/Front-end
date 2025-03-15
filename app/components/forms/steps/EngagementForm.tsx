"use client"
import { EngagementFormProps } from "../../../types"
import { motion } from "framer-motion"

const ENGAGEMENT_AREAS = [
  "Éducation",
  "Santé",
  "Environnement",
  "Culture",
  "Sport",
  "Social",
  "Humanitaire",
  "Autre"
]

export default function EngagementForm({
  engagementAreas,
  updateFields,
  onNext,
  onPrev
}: EngagementFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const toggleArea = (area: string) => {
    const newAreas = engagementAreas.includes(area)
      ? engagementAreas.filter(a => a !== area)
      : [...engagementAreas, area]
    updateFields({ engagementAreas: newAreas })
  }

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05
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
        <h2 className="text-2xl font-bold text-gray-900">Domaines d&apos;engagement</h2>
        <p className="mt-2 text-sm text-gray-600">
          Sélectionnez les domaines dans lesquels votre association est engagée
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={formAnimation}
      >
        {ENGAGEMENT_AREAS.map(area => (
          <motion.button
            key={area}
            type="button"
            onClick={() => toggleArea(area)}
            className={`
              p-4 rounded-lg border-2 text-left transition-all
              ${
                engagementAreas.includes(area)
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300 text-gray-900"
              }
            `}
            variants={itemAnimation}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {area}
          </motion.button>
        ))}
      </motion.div>

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
          disabled={engagementAreas.length === 0}
        >
          Terminer
        </button>
      </motion.div>
    </motion.form>
  )
} 