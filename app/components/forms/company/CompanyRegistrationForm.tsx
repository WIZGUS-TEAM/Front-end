"use client"
import { useState } from "react"
import AdminAccountForm from "./steps/AdminAccountForm"
import CompanyInfoForm from "./steps/CompanyInfoForm"
import PaymentMethodsForm from "./steps/PaymentMethodsForm"
import DonationConfigForm from "./steps/DonationConfigForm"
import SuccessStep from "./steps/SuccessStep"

export type CompanyFormData = {
  // Étape 1 : Compte administrateur
  firstName: string
  lastName: string
  email: string
  
  // Étape 2 : Informations entreprise
  companyName: string
  sector: string
  city: string
  address: string
  
  // Étape 3 : Méthodes de rechargement
  paymentMethods: string[]

  // Étape 4 : Configuration des dons
  donationMethods: string[]
  allowDirectDonation: boolean
}

const INITIAL_DATA: CompanyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  sector: "",
  city: "",
  address: "",
  paymentMethods: [],
  donationMethods: [],
  allowDirectDonation: false
}

const ALGERIAN_CITIES = [
  'Alger', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif', 'Sidi Bel Abbès', 'Biskra',
  'Tébessa', 'El Oued', 'Skikda', 'Tiaret', 'Béjaïa', 'Tlemcen', 'Ouargla', 'Béchar', 'Mostaganem', 'Bordj Bou Arréridj',
  'Chlef', 'Souk Ahras', 'Médéa', 'El Eulma', 'Touggourt', 'Ghardaïa', 'Saïda', 'Laghouat', 'M\'Sila', 'Jijel'
];

export default function CompanyRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<CompanyFormData>) => {
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
          <AdminAccountForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
          />
        )
      case 2:
        return (
          <CompanyInfoForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 3:
        return (
          <PaymentMethodsForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 4:
        return (
          <DonationConfigForm 
            {...formData}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 5:
        return <SuccessStep />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {renderStep()}
    </div>
  )
} 