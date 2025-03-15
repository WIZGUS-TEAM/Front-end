import { Users, Heart } from "lucide-react"
import { Button } from "../Button/page"
import RevealOnScroll from "../animations/RevealOnScroll"

export default function ForWhom() {
  return (
    <section id="for-whom" className="w-full py-16 md:py-24 lg:py-32 bg-[#e9f2f8]">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#170e4f] sm:text-4xl md:text-5xl">Pour Qui ?</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Notre solution bénéficie à deux groupes clés dans l'écosystème de la générosité.
            </p>
          </div>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="flex flex-col p-8 bg-white rounded-xl shadow-lg">
              <div className="mb-6 rounded-full bg-[#0095de]/10 p-3 w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-[#0095de]" />
              </div>
              <h3 className="text-2xl font-bold text-[#170e4f] mb-4">Entreprises</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Offrez une dimension sociale à vos services et engagez vos clients dans une cause.
              </p>
              <Button className="bg-[#0095de] text-white hover:bg-[#0095de]/90 mt-auto transition-transform hover:translate-y-[-2px]">
                Intégrez notre API
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="flex flex-col p-8 bg-white rounded-xl shadow-lg">
              <div className="mb-6 rounded-full bg-[#c30ec3]/10 p-3 w-16 h-16 flex items-center justify-center">
                <Heart className="h-8 w-8 text-[#c30ec3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#170e4f] mb-4">Associations</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Accédez à un flux de dons régulier et transparent, sans complexité administrative.
              </p>
              <Button className="bg-[#c30ec3] text-white hover:bg-[#c30ec3]/90 mt-auto transition-transform hover:translate-y-[-2px]">
                Inscrivez votre cause
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
} 