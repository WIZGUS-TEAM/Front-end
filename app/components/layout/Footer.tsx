import Link from "next/link"
import { Heart } from "lucide-react"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-l from-[#2f01ad] to-[#0095de] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Image
                src="/noBgWhite.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-12 w-auto"
                priority
               
              />
            </div>
            <p className="text-white/80 max-w-xs">
              Transformez chaque paiement en un acte de solidarité avec notre solution innovante.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/80 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#api" className="text-white/80 hover:text-white transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <SocialLink href="#" network="linkedin" />
              <SocialLink href="#" network="twitter" />
              <SocialLink href="#" network="instagram" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white/80">© {new Date().getFullYear()} SolidaryPay. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  network: "linkedin" | "twitter" | "instagram"
}

function SocialLink({ href, network }: SocialLinkProps) {
  const icons = {
    linkedin: (
      <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.08-.93-2.08-2.08 0-1.15.93-2.08 2.08-2.08 1.15 0 2.08.93 2.08 2.08 0 1.15-.93 2.08-2.08 2.08zm14.63 12.34h-3.62v-5.56c0-1.35-.03-3.1-1.88-3.1-1.88 0-2.17 1.48-2.17 3v5.65H8.8V9.24h3.48v1.6h.05c.48-.92 1.65-1.88 3.4-1.88 3.65 0 4.32 2.4 4.32 5.52v5.62z" />
    ),
    twitter: (
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    ),
    instagram: (
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1"
      />
    ),
  }

  return (
    <Link href={href} className="text-white/80 hover:text-white transition-colors">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icons[network]}
      </svg>
      <span className="sr-only">{network.charAt(0).toUpperCase() + network.slice(1)}</span>
    </Link>
  )
} 