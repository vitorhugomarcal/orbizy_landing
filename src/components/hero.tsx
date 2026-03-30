import { ChevronsDown } from "lucide-react"

export function Hero() {
  return (
    <div className="w-full h-screen bg-linear-to-r from-purple-500 to-orange-500 flex items-center justify-center">
      <div className="w-[1024px] text-center px-4 space-y-4">
        <h1 className="sm:text-4xl text-2xl font-bold text-white">
          Termos de Uso & Política de Privacidade
        </h1>
      </div>
      <ChevronsDown className="w-8 h-8 text-white absolute bottom-10 animate-bounce" />
    </div>
  )
}
