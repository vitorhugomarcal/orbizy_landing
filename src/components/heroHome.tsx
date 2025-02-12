import { ChevronsDown } from "lucide-react"
import { Button } from "./ui/button"

export function HeroHome() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center">
      <div className="w-[1024px] text-center px-4 space-y-4">
        <h1 className="sm:text-4xl text-2xl font-bold text-white">
          Simplifique a Gestão do Seu Negócio com a Orbizy
        </h1>
        <h2 className="sm:text-xl text-lg font-light text-white">
          Aumente a produtividade e profissionalize sua administração
        </h2>
        <Button className="mt-8">Começar agora!</Button>
      </div>

      <ChevronsDown className="w-8 h-8 text-white absolute bottom-10 animate-bounce" />
    </div>
  )
}
