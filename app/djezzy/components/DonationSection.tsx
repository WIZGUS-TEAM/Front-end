'use client';

import { useState, useEffect, useCallback } from 'react';
import { Cause, DonationSectionProps, ApiResponse } from '../../types';
import { API_ENDPOINTS, API_FILTERS, fetchConfig } from '../../config/api';

const FIXED_AMOUNTS = [50, 100, 200] as const;
const PERCENTAGE_VALUES = [5, 10, 15] as const;

type DonationType = 'fixed' | 'percentage';
type FixedAmount = typeof FIXED_AMOUNTS[number] | null;
type PercentageValue = typeof PERCENTAGE_VALUES[number] | null;

export default function DonationSection({ selectedAmount, phoneNumber, onDonationChange }: DonationSectionProps) {
  const [wantToDonate, setWantToDonate] = useState(false);
  const [causes, setCauses] = useState<Cause[]>([]);
  const [selectedCause, setSelectedCause] = useState<string>('');
  const [selectedCauseId, setSelectedCauseId] = useState<string>('');
  const [isLoadingCauses, setIsLoadingCauses] = useState(true);
  const [donationType, setDonationType] = useState<DonationType>('fixed');
  const [donationAmount, setDonationAmount] = useState<FixedAmount>(FIXED_AMOUNTS[0]);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPercentage, setSelectedPercentage] = useState<PercentageValue>(PERCENTAGE_VALUES[0]);
  const [customPercentage, setCustomPercentage] = useState('');

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINTS.causes}${API_FILTERS.validatedCauses}`,
          fetchConfig
        );
        const data: ApiResponse<Cause[]> = await response.json();
        setCauses(data.data || []);
        if (data.data && data.data.length > 0) {
          setSelectedCause(data.data[0].name);
          setSelectedCauseId(data.data[0].documentId);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des causes:', error);
      } finally {
        setIsLoadingCauses(false);
      }
    };

    fetchCauses();
  }, []);

  const calculateDonationAmount = useCallback(() => {
    if (!wantToDonate) return 0;

    switch (donationType) {
      case 'fixed':
        return customAmount ? Number(customAmount) : (donationAmount || 0);
      case 'percentage':
        const percentValue = customPercentage ? Number(customPercentage) : (selectedPercentage || 0);
        return Math.round((selectedAmount * percentValue) / 100);
      default:
        return 0;
    }
  }, [wantToDonate, donationType, customAmount, donationAmount, customPercentage, selectedPercentage, selectedAmount]);

  const handleOpenDonation = () => {
    setWantToDonate(true);
    const amount = calculateDonationAmount();
    onDonationChange(amount, selectedCauseId, true);
  };

  const handleCloseDonation = () => {
    setWantToDonate(false);
    setDonationAmount(null);
    setCustomAmount('');
    setSelectedPercentage(null);
    setCustomPercentage('');
    onDonationChange(0, '', false);
  };

  const handleAmountChange = (newAmount: FixedAmount) => {
    setDonationAmount(newAmount);
    setCustomAmount('');
    if (wantToDonate) {
      onDonationChange(newAmount || 0, selectedCauseId, true);
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setDonationAmount(null);
    if (wantToDonate) {
      onDonationChange(Number(value) || 0, selectedCauseId, true);
    }
  };

  const handlePercentageChange = (percent: PercentageValue) => {
    setSelectedPercentage(percent);
    setCustomPercentage('');
    if (wantToDonate) {
      const amount = percent ? Math.round((selectedAmount * percent) / 100) : 0;
      onDonationChange(amount, selectedCauseId, true);
    }
  };

  const handleCustomPercentageChange = (value: string) => {
    setCustomPercentage(value);
    setSelectedPercentage(null);
    if (wantToDonate) {
      const percent = Number(value) || 0;
      const amount = Math.round((selectedAmount * percent) / 100);
      onDonationChange(amount, selectedCauseId, true);
    }
  };

  const handleCauseChange = (causeName: string) => {
    const cause = causes.find(c => c.name === causeName);
    setSelectedCause(causeName);
    if (cause && wantToDonate) {
      setSelectedCauseId(cause.documentId);
      onDonationChange(calculateDonationAmount(), cause.documentId, true);
    }
  };

  const totalAmount = selectedAmount + calculateDonationAmount();

  return (
    <div className="mt-8 flex justify-center">
      {!wantToDonate && (
        <button
          type="button"
          onClick={handleOpenDonation}
          className="bg-gradient-to-r from-[#e44b1f] to-[#f4721f] text-white px-6 py-2.5 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium text-base flex items-center space-x-2"
        >
          <span>Faire un don</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {wantToDonate && (
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#E5E7EB]">
              <h3 className="text-lg font-bold text-[#1F2937]">Votre don</h3>
              <button
                type="button"
                onClick={handleCloseDonation}
                className="text-[#666666] hover:text-[#e44b1f] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Mode de don */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-3">
                  Comment souhaitez-vous contribuer ?
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    onClick={() => setDonationType('fixed')}
                    className={`px-4 py-2 text-sm rounded-md border transition-all ${
                      donationType === 'fixed'
                        ? 'bg-[#e44b1f] text-white border-[#e44b1f]'
                        : 'bg-white text-[#1F2937] border-[#E5E7EB] hover:border-[#e44b1f]'
                    }`}
                  >
                    Somme prédéfinie
                  </button>
                  <button
                    onClick={() => setDonationType('percentage')}
                    className={`px-4 py-2 text-sm rounded-md border transition-all ${
                      donationType === 'percentage'
                        ? 'bg-[#e44b1f] text-white border-[#e44b1f]'
                        : 'bg-white text-[#1F2937] border-[#E5E7EB] hover:border-[#e44b1f]'
                    }`}
                  >
                    Pourcentage
                  </button>
                </div>

                {donationType === 'fixed' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {FIXED_AMOUNTS.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountChange(amount)}
                          className={`px-4 py-2 text-sm rounded-md border transition-all ${
                            donationAmount === amount && !customAmount
                              ? 'bg-[#e44b1f] text-white border-[#e44b1f]'
                              : 'bg-white text-[#1F2937] border-[#E5E7EB] hover:border-[#e44b1f]'
                          }`}
                        >
                          {amount} DZD
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Autre montant"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#e44b1f] focus:border-[#e44b1f] text-[#1F2937] placeholder-[#9CA3AF] bg-[#F9FAFB]"
                        min="1"
                      />
                      <span className="text-sm text-[#1F2937]">DZD</span>
                    </div>
                  </div>
                )}

                {donationType === 'percentage' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {PERCENTAGE_VALUES.map((percent) => (
                        <button
                          key={percent}
                          onClick={() => handlePercentageChange(percent)}
                          className={`px-4 py-2 text-sm rounded-md border transition-all ${
                            selectedPercentage === percent && !customPercentage
                              ? 'bg-[#e44b1f] text-white border-[#e44b1f]'
                              : 'bg-white text-[#1F2937] border-[#E5E7EB] hover:border-[#e44b1f]'
                          }`}
                        >
                          {percent}% ({Math.round((selectedAmount * percent) / 100)} DZD)
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Autre pourcentage"
                        value={customPercentage}
                        onChange={(e) => handleCustomPercentageChange(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm rounded-md border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#e44b1f] focus:border-[#e44b1f] text-[#1F2937] placeholder-[#9CA3AF] bg-[#F9FAFB]"
                        min="1"
                        max="100"
                      />
                      <span className="text-sm text-[#1F2937]">%</span>
                      {customPercentage && (
                        <span className="text-sm text-[#6B7280]">
                          ({Math.round((selectedAmount * Number(customPercentage)) / 100)} DZD)
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Choix de la cause */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  À quelle cause souhaitez-vous donner ?
                </label>
                <div className="relative">
                  {isLoadingCauses ? (
                    <div className="w-full bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] rounded-md px-3 py-2 text-sm">
                      Chargement des causes...
                    </div>
                  ) : (
                    <select
                      value={selectedCause}
                      onChange={(e) => handleCauseChange(e.target.value)}
                      className="w-full appearance-none bg-[#F9FAFB] text-[#1F2937] border border-[#E5E7EB] rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#e44b1f] focus:border-[#e44b1f]"
                    >
                      {causes.map((cause) => (
                        <option key={cause.id} value={cause.name}>
                          {cause.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#6B7280]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="bg-[#FFF8F6] p-3 rounded-md border border-[#E5E7EB]">
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-[#1F2937]">
                    <span>Montant initial :</span>
                    <span>{selectedAmount} DZD</span>
                  </div>
                  <div className="flex justify-between text-[#1F2937]">
                    <span>Don pour {selectedCause} :</span>
                    <span>{calculateDonationAmount()} DZD</span>
                  </div>
                  <div className="flex justify-between font-medium text-[#e44b1f] pt-1 border-t border-[#E5E7EB]">
                    <span>Total après don :</span>
                    <span>{totalAmount} DZD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 