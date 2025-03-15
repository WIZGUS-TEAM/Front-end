export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choix du mode de don",
      description: "L'utilisateur choisit son mode de don.",
      bgColor: "[#0095de]",
    },
    {
      number: "2",
      title: "Traitement sécurisé",
      description: "L'API enregistre et transfère les fonds en toute sécurité.",
      bgColor: "[#c30ec3]",
    },
    {
      number: "3",
      title: "Suivi et impact",
      description: "L'association reçoit et suit ses dons en temps réel.",
      bgColor: "[#3100b7]",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-[#170e4f] sm:text-4xl md:text-5xl">
            Comment ça marche ?
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
            Un processus simple en trois étapes pour une expérience fluide.
          </p>
        </div>
        <div className="mx-auto max-w-5xl py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group transition-transform hover:translate-y-[-5px]">
                <div className={`w-16 h-16 rounded-full bg-${step.bgColor} text-white flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-[#170e4f] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 