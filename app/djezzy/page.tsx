'use client';

import Image from 'next/image';
import { useState } from 'react';
import Tooltip from './components/Tooltip';
import { EFlexyTooltipContent, CCPTooltipContent, CIBTooltipContent } from './components/TooltipContents';
import DonationSection from './components/DonationSection';
import './globals.css';

export default function EFlexy() {
  const [phoneNumber, setPhoneNumber] = useState('07');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentType, setPaymentType] = useState('creditcard');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [wantToDonate, setWantToDonate] = useState(false);

  const getCurrentAmount = () => {
    if (amount === 'other') {
      return Number(customAmount) || 0;
    }
    return Number(amount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gérer la soumission du formulaire
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="text-[#E30613] text-2xl cursor-pointer">☰</span>
              <Image
                src="/Djezzy_logo.png"
                alt="Djezzy"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center">
              <div className="relative">
                <select className="appearance-none bg-white border border-[#E5E5E5] rounded-md py-2 pl-3 pr-8 text-sm text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent">
                  <option>Français</option>
                  <option>العربيّة</option>
                  <option>English</option>
                </select>
              </div>
              <a href="/accounts/login" className="ml-4 text-[#E30613] hover:text-[#B30000] font-medium">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
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
                    className="w-full bg-[#F9FAFB] border border-[#E5E5E5] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
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
                        className="ml-2 bg-[#F9FAFB] border border-[#E5E5E5] rounded-md px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
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
                  className="bg-[#e44b1f] text-white px-8 py-3 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium text-lg"
                >
                  Valider le paiement {wantToDonate ? 'et le don' : ''}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
} 