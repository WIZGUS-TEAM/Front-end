"use client"
import { useState } from "react"
import { FormData } from "../../types"
import UserAccountForm from "./steps/UserAccountForm"
import AssociationInfoForm from "./steps/AssociationInfoForm"
import EngagementForm from "./steps/EngagementForm"
import DonationConfigForm from "./steps/DonationConfigForm"
import PaymentMethodsForm from "./steps/PaymentMethodsForm"
import SuccessStep from "./steps/SuccessStep"

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  associationName: "",
  city: "",
  address: "",
  engagementAreas: [],
  allowDirectDonation: false,
  donationMethods: [],
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
          <DonationConfigForm
            allowDirectDonation={formData.allowDirectDonation}
            donationMethods={formData.donationMethods}
            updateFields={updateFields}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )
      case 5:
        return (
          <PaymentMethodsForm
            paymentMethods={formData.paymentMethods}
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