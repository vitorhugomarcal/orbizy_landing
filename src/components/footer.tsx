import Apple from "@/assets/apple.png"
import Facebook from "@/assets/facebook.png"
import Instagram from "@/assets/instagram.png"
import Linkedin from "@/assets/linkedin.png"
import logo from "@/assets/logo.png"
import Playstore from "@/assets/playstore.png"
import Tiktok from "@/assets/tiktok.png"
import { Globe } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-600 to-orange-600 text-white py-12">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Gerencie seu negócio de qualquer lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-12">
            <Button
              variant="secondary"
              className="w-full bg-white  hover:bg-orange-100 transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              Acessar plataforma
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-white hover:bg-orange-100 transition-colors"
            >
              <Image src={Playstore} alt="Playstore" className="w-5 h-5 mr-2" />
              Google Play
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-white hover:bg-orange-100 transition-colors"
            >
              <Image src={Apple} alt="Apple" className="w-5 h-5 mr-2" />
              Apple Store
            </Button>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <Image
              src={logo}
              alt="Logo Orbizy"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Image src={Facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Image src={Instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Image src={Tiktok} alt="TikTok" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Image src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; 2025 Orbizy. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
