// Types pour les causes
export interface Cause {
  id: number;
  attributes: {
    name: string;
    description: string;
    state: string;
    createdAt?: string;
    updatedAt?: string;
  };
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
}

// Types pour les états des formulaires
export interface FormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
} 