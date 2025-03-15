'use client';

import { Cause } from '../types';
import Image from 'next/image';
import { useState } from 'react';
import Tooltip from './components/Tooltip';
import { EFlexyTooltipContent, CCPTooltipContent, CIBTooltipContent } from './components/TooltipContents';
import DonationSection from './components/DonationSection';
import Header from './components/Header';
import './globals.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://1595fdnf-1337.uks1.devtunnels.ms';

export default function EFlexy() {
  const [phoneNumber, setPhoneNumber] = useState('07');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentType, setPaymentType] = useState('creditcard');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [selectedCauseId, setSelectedCauseId] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [wantToDonate, setWantToDonate] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const getCurrentAmount = () => {
    if (amount === 'other') {
      return Number(customAmount) || 0;
    }
    return Number(amount);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isProcessing) return;

    // Vérifier si un don est demandé mais qu'aucune cause n'est sélectionnée
    if (wantToDonate && !selectedCauseId) {
      console.error('Aucune cause sélectionnée');
      return;
    }

    setIsProcessing(true);

    try {
      // Si un don est fait, envoyer d'abord le don
      if (wantToDonate && donationAmount > 0 && selectedCauseId) {
        const donationResponse = await fetch(`${API_BASE_URL}/api/dcf/donate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: donationAmount,
            donatorId: phoneNumber.replace(/\s/g, ''),
            causeId: selectedCauseId,
            companyCode: "lq8n4cwqttequ245pggdhdnd",
            date: new Date().toISOString().split('T')[0]
          }),
        });

        if (!donationResponse.ok) {
          throw new Error('Erreur lors de l\'envoi du don');
        }
      }

      // Réinitialiser le formulaire après succès
      setPhoneNumber('07');
      setAmount('1000');
      setCustomAmount('');
      setPaymentType('creditcard');
      setWantToDonate(false);
      setDonationAmount(0);
      setSelectedCauseId('');
      alert('Opération réussie !');

    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors du traitement. Veuillez réessayer.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDonationChange = (amount: number, causeId: string, isDonating: boolean) => {
    setDonationAmount(amount);
    setSelectedCauseId(causeId);
    setWantToDonate(isDonating);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="container mx-auto px-4 py-8 pt-20">
        <section>
          <div className="flex items-center mb-8">
            <div className="bg-[#e44b1f] px-6 py-2 rounded-md">
              <h1 className="text-2xl font-bold text-white">E-Flexy</h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E5E5E5]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#333333]">Numéro de Téléphone</h3>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#F9FAFB] border border-[#E5E5E5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent text-black"
                    placeholder="07********"
                    minLength={9}
                    required
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#333333]">Montant de rechargement en (DZD)</h3>
                  <div className="space-y-3">
                    {[100, 200, 500, 1000].map((value) => (
                      <label key={value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="amount"
                          value={value}
                          checked={amount === String(value)}
                          onChange={(e) => setAmount(e.target.value)}
                          className="form-radio text-[#E30613] focus:ring-[#E30613]"
                        />
                        <span className="ml-2 text-[#666666]">{value}</span>
                      </label>
                    ))}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="amount"
                        value="other"
                        checked={amount === 'other'}
                        onChange={(e) => setAmount(e.target.value)}
                        className="form-radio text-[#E30613] focus:ring-[#E30613]"
                      />
                      <span className="ml-2 text-[#666666]">autre</span>
                      <input
                        type="text"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="ml-2 bg-[#F9FAFB] border border-[#E5E5E5] rounded-md px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent text-black"
                        placeholder="100"
                      />
                    </label>
                  </div>

                  <h3 className="text-lg font-semibold mt-6 mb-2 text-[#333333]">Sélectionner un moyen de paiement</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="payment_type"
                        value="postcard"
                        checked={paymentType === 'postcard'}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="form-radio text-[#E30613] focus:ring-[#E30613]"
                      />
                      <Image
                        src="/AlgeriePoste.svg"
                        alt="Algérie Poste"
                        width={40}
                        height={40}
                        className="ml-2"
                      />
                      <Tooltip content={<CCPTooltipContent />}>
                        <div className="ml-2 w-5 h-5 rounded-full border border-[#E30613] text-[#E30613] text-xs flex items-center justify-center hover:bg-[#E30613] hover:text-white transition-colors cursor-pointer">
                          ?
                        </div>
                      </Tooltip>
                    </label>
                    
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="payment_type"
                        value="creditcard"
                        checked={paymentType === 'creditcard'}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="form-radio text-[#E30613] focus:ring-[#E30613]"
                      />
                      <Image
                        src="/cib.png"
                        alt="CIB"
                        width={40}
                        height={40}
                        className="ml-2"
                      />
                      <Tooltip content={<CIBTooltipContent />}>
                        <div className="ml-2 w-5 h-5 rounded-full border border-[#E30613] text-[#E30613] text-xs flex items-center justify-center hover:bg-[#E30613] hover:text-white transition-colors cursor-pointer">
                          ?
                        </div>
                      </Tooltip>
                    </label>
                  </div>
                </div>
              </div>

              <DonationSection
                selectedAmount={getCurrentAmount()}
                phoneNumber={phoneNumber}
                onDonationChange={handleDonationChange}
              />

              <div className="mt-8 flex items-center">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="form-checkbox text-[#E30613] focus:ring-[#E30613] rounded"
                  required
                />
                <span className="ml-2 text-[#666666]">
                  J'accepte les{' '}
                  <a
                    href="/eflexy/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E30613] hover:text-[#B30000] underline"
                  >
                    termes et conditions d'utilisation
                  </a>
                </span>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={getCurrentAmount() === 0 || isProcessing || (wantToDonate && !selectedCauseId)}
                  className="bg-[#e44b1f] text-white px-8 py-3 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span>Traitement en cours...</span>
                  ) : (
                    <span>Valider le paiement {wantToDonate ? 'et le don' : ''}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
} 