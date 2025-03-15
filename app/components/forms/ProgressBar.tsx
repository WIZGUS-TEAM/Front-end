import { motion } from "framer-motion"
import { User, Building2, Target, CheckCircle } from "lucide-react"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const steps = [
  { icon: User, label: "Compte" },
  { icon: Building2, label: "Association" },
  { icon: Target, label: "Mission" },
  { icon: CheckCircle, label: "Confirmation" }
]

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div className="relative">
      {/* Barre de progression */}
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2f01ad] to-[#0095de]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>

      {/* Points d'étape */}
      <div className="absolute -top-2 w-full flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index + 1 <= currentStep
          const isCompleted = index + 1 < currentStep

          return (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                className={`w-5 h-5 rounded-full flex items-center justify-center
                  ${isActive 
                    ? "bg-gradient-to-r from-[#2f01ad] to-[#0095de] text-white" 
                    : "bg-gray-200"
                  }`}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor: isCompleted ? "#0095de" : undefined
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-3 h-3" />
              </motion.div>
              <span className={`absolute -bottom-6 text-xs whitespace-nowrap
                ${isActive ? "text-[#2f01ad] font-medium" : "text-gray-500"}`}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
} 