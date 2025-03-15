export interface Cause {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  state: string;
  donationGoal: number;
  currentDonations: number;
  endDate: string;
}

export interface DonationRequest {
  identifier: string; // numéro de téléphone
  amount: number; // montant calculé
  companyId: string; // ID fixe
  causeId: number; // ID de la cause choisie
}

export type DonationType = 'percentage' | 'fixed'; 