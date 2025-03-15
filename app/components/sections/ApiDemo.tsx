import { ChevronRight, Check } from "lucide-react"
import { Button } from "../Button/Button"
import RevealOnScroll from "../animations/RevealOnScroll"

export default function ApiDemo() {
  const features = [
    "Documentation détaillée et exemples de code",
    "SDK disponibles pour JavaScript, PHP, Python et plus",
    "Environnement de test et sandbox",
    "Support technique dédié",
  ]

  return (
    <section id="api" className="w-full py-12 md:py-24 lg:py-32 bg-[#e9f2f8]">
      <div className="container px-4 md:px-6">
        <RevealOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-md bg-[#3100b7]/20 px-3 py-1 text-sm font-medium text-[#3100b7]">
                Développeurs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#170e4f] sm:text-4xl md:text-5xl">
                Intégration & Démo API
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre API est conçue pour être simple à intégrer dans n'importe quelle plateforme.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll direction="left">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-[#170e4f]">
                  Une intégration en quelques minutes
                </h3>
                <p className="text-gray-600">
                  Notre documentation complète et nos SDK vous permettent d'intégrer notre solution rapidement et
                  efficacement.
                </p>
                <ul className="space-y-2 mt-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-[#3100b7]" />
                      <span className="text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button className="bg-[#3100b7] text-white hover:bg-[#3100b7]/90">
                    Voir la documentation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium">Requête API</div>
              </div>
              <pre className="mt-4 overflow-x-auto rounded bg-[#170e4f] p-4 text-sm text-white">
                <code>{`POST /donations
{
  "amount": 1000,
  "currency": "DZD",
  "companyId": "123",
  "causeId": "567"
}`}</code>
              </pre>
              <div className="mt-4 border-t pt-4">
                <div className="text-sm font-medium mb-2">Réponse</div>
                <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm text-gray-800">
                  <code>{`{
  "donationId": "don_12345",
  "status": "success",
  "amount": 1000,
  "currency": "DZD",
  "trackingUrl": "https://api.smartdonation.com/track/don_12345",
  "receipt": "https://api.smartdonation.com/receipts/don_12345.pdf"
}`}</code>
                </pre>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
} 