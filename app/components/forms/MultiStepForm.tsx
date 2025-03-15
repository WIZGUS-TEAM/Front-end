"use client"
import { useState } from "react"
import UserAccountForm from "./steps/UserAccountForm"
import AssociationInfoForm from "./steps/AssociationInfoForm"
import EngagementForm from "./steps/EngagementForm"
import DonationConfigForm from "./steps/DonationConfigForm"
import PaymentMethodsForm from "./steps/PaymentMethodsForm"
import SuccessStep from "./steps/SuccessStep"

export type FormData = {
  // Étape 1 : Informations utilisateur
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  
  // Étape 2 : Informations association
  associationName: string
  city: string
  address: string
  
  // Étape 3 : Domaines d'engagement
  engagementAreas: string[]

  // Configuration des dons
  donationMethods: string[]
  allowDirectDonation: boolean

  // Méthodes de paiement
  paymentMethods: string[]
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  associationName: "",
  city: "",
  address: "",
  engagementAreas: [],
  donationMethods: [],
  allowDirectDonation: false,
  paymentMethods: []
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserAccountForm 
            {...formData} 
            updateFields={updateFields}
            onNext={nextStep}
          />
        )
      case 2:
        return (
          <AssociationInfoForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 3:
        return (
          <EngagementForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 4:
        return (
          <PaymentMethodsForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 5:
        return (
          <DonationConfigForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 6:
        return <SuccessStep />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  )
} 