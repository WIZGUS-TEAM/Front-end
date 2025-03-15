import { Shield, Check } from "lucide-react"
import RevealOnScroll from "../animations/RevealOnScroll"

export default function ProblemSolution() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#e9f2f8]">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#170e4f] sm:text-4xl md:text-5xl">
              Problème & Solution
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Nous transformons la façon dont les dons sont effectués et suivis.
            </p>
          </div>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll direction="left">
            <div className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-[#f93232]/10 px-3 py-1 text-sm font-medium text-[#f93232]">
                  <Shield className="mr-1 h-4 w-4" />
                  Problème
                </div>
                <h3 className="text-2xl font-bold tracking-tighter text-[#170e4f] sm:text-3xl">
                  Le manque de transparence dans les dons freine la confiance et la générosité
                </h3>
                <p className="text-gray-600 md:text-lg/relaxed">
                  Les donateurs s'inquiètent de la destination réelle de leurs dons, tandis que les associations
                  peinent à démontrer l'impact de chaque contribution.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-[#439f6e]/10 px-3 py-1 text-sm font-medium text-[#439f6e]">
                  <Check className="mr-1 h-4 w-4" />
                  Solution
                </div>
                <h3 className="text-2xl font-bold tracking-tighter text-[#170e4f] sm:text-3xl">
                  Nous permettons aux entreprises et utilisateurs d'ajouter un don sécurisé à chaque transaction
                </h3>
                <p className="text-gray-600 md:text-lg/relaxed">
                  Notre API intègre un système de dons transparent et traçable dans n'importe quel parcours de
                  paiement, renforçant la confiance et simplifiant la générosité.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
} 