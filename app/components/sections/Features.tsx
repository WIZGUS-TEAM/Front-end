import { Gift, Eye, RefreshCw, LineChart, Code } from "lucide-react"
import RevealOnScroll from "../animations/RevealOnScroll"

const features = [
  {
    icon: Gift,
    title: "Dons intégrés",
    description: "Ajoutez un don en un clic lors de votre paiement.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    description: "Chaque don est enregistré et traçable.",
  },
  {
    icon: RefreshCw,
    title: "Flexibilité",
    description: "Donnez via un arrondi, un pourcentage ou un montant fixe.",
  },
  {
    icon: LineChart,
    title: "Suivi en temps réel",
    description: "Les associations accèdent à leurs dons instantanément.",
  },
  {
    icon: Code,
    title: "Facile à intégrer",
    description: "Une API modulable et prête à l'emploi.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#170e4f] sm:text-4xl md:text-5xl">
              Fonctionnalités Clés
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Découvrez ce qui rend notre plateforme unique et puissante.
            </p>
          </div>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div
                className="group flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all hover:shadow-md hover:border-[#0095de]"
              >
                <div className="mb-4 rounded-full bg-[#0095de]/10 p-3 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[#0095de]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#170e4f]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
} 