'use client';

import { useState, useEffect } from 'react';
import { Cause, DonationType } from './types';

interface DonationSectionProps {
  selectedAmount: number;
  phoneNumber: string;
}

export default function DonationSection({ selectedAmount, phoneNumber }: DonationSectionProps) {
  const [wantsToDonate, setWantsToDonate] = useState(false);
  const [donationType, setDonationType] = useState<DonationType>('percentage');
  const [percentage, setPercentage] = useState(1);
  const [fixedAmount, setFixedAmount] = useState(100);
  const [selectedCause, setSelectedCause] = useState<number | null>(null);
  const [causes, setCauses] = useState<Cause[]>([]);

  // Simuler le chargement des causes (à remplacer par un vrai appel API)
  useEffect(() => {
    // Exemple de causes
    setCauses([
      {
        id: 27,
        documentId: "df7rbn1wqciast39xsdbyxeu",
        name: "Iftar",
        createdAt: "2025-03-14T21:41:11.823Z",
        updatedAt: "2025-03-15T12:00:20.981Z",
        publishedAt: "2025-03-15T12:00:20.974Z",
        description: "Un iftar c'est cool !",
        state: "En attente de retrait",
        donationGoal: 30000,
        currentDonations: 3990,
        endDate: "2025-03-19"
      }
    ]);
  }, []);

  const calculateDonationAmount = () => {
    if (!wantsToDonate) return 0;
    if (donationType === 'percentage') {
      return (selectedAmount * percentage) / 100;
    }
    return fixedAmount;
  };

  const handleDonationSubmit = async () => {
    if (!selectedCause) return;

    const donationAmount = calculateDonationAmount();
    const donationRequest = {
      identifier: phoneNumber,
      amount: donationAmount,
      companyId: "votre_company_id", // À remplacer par votre vrai ID
      causeId: selectedCause
    };

    try {
      // Appel API à implémenter
      console.log('Donation request:', donationRequest);
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <div className="mt-8 p-4 border border-[#E5E5E5] rounded-lg">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={wantsToDonate}
          onChange={(e) => setWantsToDonate(e.target.checked)}
          className="form-checkbox text-[#E30613] focus:ring-[#E30613] rounded"
        />
        <span className="ml-2 text-[#333333] font-medium">
          Souhaitez-vous faire un don ?
        </span>
      </div>

      {wantsToDonate && (
        <>
          <div className="mb-4">
            <div className="flex space-x-4 mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="donationType"
                  value="percentage"
                  checked={donationType === 'percentage'}
                  onChange={() => setDonationType('percentage')}
                  className="form-radio text-[#E30613] focus:ring-[#E30613]"
                />
                <span className="ml-2 text-[#666666]">Pourcentage</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="donationType"
                  value="fixed"
                  checked={donationType === 'fixed'}
                  onChange={() => setDonationType('fixed')}
                  className="form-radio text-[#E30613] focus:ring-[#E30613]"
                />
                <span className="ml-2 text-[#666666]">Montant fixe</span>
              </label>
            </div>

            {donationType === 'percentage' ? (
              <div className="flex items-center">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="w-48 mr-2"
                />
                <span className="text-[#666666]">{percentage}% ({calculateDonationAmount()} DZD)</span>
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  type="number"
                  value={fixedAmount}
                  onChange={(e) => setFixedAmount(Number(e.target.value))}
                  min="1"
                  className="w-24 border border-[#E5E5E5] rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
                />
                <span className="ml-2 text-[#666666]">DZD</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <h4 className="text-[#333333] font-medium mb-2">Choisissez une cause :</h4>
            <div className="space-y-2">
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedCause === cause.id
                      ? 'border-[#E30613] bg-red-50'
                      : 'border-[#E5E5E5] hover:border-[#E30613]'
                  }`}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-medium text-[#333333]">{cause.name}</h5>
                      <p className="text-sm text-[#666666]">{cause.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#666666]">
                        {cause.currentDonations} / {cause.donationGoal} DZD
                      </div>
                      <div className="text-xs text-[#999999]">
                        Fin le {new Date(cause.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#E30613] h-2 rounded-full"
                      style={{
                        width: `${(cause.currentDonations / cause.donationGoal) * 100}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 