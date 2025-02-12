import Apple from "@/assets/apple"
import Facebook from "@/assets/facebook"
import Instagram from "@/assets/instagram"
import Linkedin from "@/assets/linkedin"
import logo from "@/assets/logo.png"
import Playstore from "@/assets/playstore"
import Tiktok from "@/assets/tiktok"
import { CurrentYear } from "@/utils/currentYear"
import { Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white py-12">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Gerencie seu negócio de qualquer lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-12">
            <Button
              variant="secondary"
              className="w-full bg-white  hover:bg-orange-500 hover:text-white transition-colors"
              asChild
            >
              <Link href="https://my.orbizy.app">
                <Globe className="w-5 h-5 mr-2" />
                PC
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-white hover:bg-orange-500 hover:text-white transition-colors group"
            >
              <Playstore className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
              Google Play
            </Button>

            <Button
              variant="secondary"
              className="w-full bg-white hover:bg-orange-500 hover:text-white transition-colors group"
            >
              <Apple className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
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
            <a href="#" className="text-white group">
              <Facebook className="group-text-white group-hover:text-black h-5 w-5 transition-colors" />
            </a>
            <a href="#" className="text-white group">
              <Instagram className="group-text-white group-hover:text-black h-5 w-5 transition-colors" />
            </a>
            <a href="#" className="text-white group">
              <Tiktok className="group-text-white group-hover:text-black h-5 w-5 transition-colors" />
            </a>
            <a href="#" className="text-white group">
              <Linkedin className="group-text-white group-hover:text-black h-5 w-5 transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>
            &copy; <CurrentYear /> Orbizy. Todos os direitos reservados.
          </p>
          <div className="mt-4 space-x-4">
            <Link
              href="/termos-de-uso-e-privacidade"
              className="hover:underline"
            >
              Termos de Uso
            </Link>
            <Link
              href="/termos-de-uso-e-privacidade"
              className="hover:underline"
            >
              Política de Privacidade
            </Link>
            {/* <a href="#" className="hover:underline">
              Contato
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
