// Types pour les causes
export interface Cause {
    id: number;
    name: string;
    description: string;
    state: string;
    createdAt?: string;
    updatedAt?: string;
    documentId: string;
}

// Types pour les dons
export interface Donation {
  amount: number;
  causeId: number;
  phoneNumber: string;
  type: 'fixed' | 'percentage';
}

// Types pour les réponses de l'API
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Types pour les props des composants
export interface DonationSectionProps {
  selectedAmount: number;
  phoneNumber: string;
  onDonationChange: (amount: number, causeId: string, isDonating: boolean) => void;
}

// Types pour les états des formulaires
export interface FormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

// Types pour le formulaire multi-étapes
export interface FormData {
  // Étape 1 : Informations utilisateur
  firstName: string;
  lastName: string;
  email: string;
  
  // Étape 2 : Informations association
  associationName: string;
  city: string;
  address: string;
  
  // Étape 3 : Domaines d'engagement
  engagementAreas: string[];

  // Étape 4 : Configuration des dons
  allowDirectDonation: boolean;
  donationMethods: string[];

  // Étape 5 : Méthodes de paiement
  paymentMethods: string[];
}

// Types pour les props des composants de formulaire
export interface FormStepProps {
  updateFields: (fields: Partial<FormData>) => void;
  onNext: () => void;
  onPrev?: () => void;
}

export interface UserAccountFormProps extends FormStepProps, Pick<FormData, 'firstName' | 'lastName' | 'email'> {}

export interface AssociationInfoFormProps extends FormStepProps, Pick<FormData, 'associationName' | 'city' | 'address'> {}

export interface EngagementFormProps extends FormStepProps, Pick<FormData, 'engagementAreas'> {}

export interface DonationConfigFormProps extends FormStepProps, Pick<FormData, 'allowDirectDonation' | 'donationMethods'> {}

export interface PaymentMethodsFormProps extends FormStepProps, Pick<FormData, 'paymentMethods'> {} 