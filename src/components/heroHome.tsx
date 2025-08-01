import {
  ArrowRight,
  CheckCircle,
  ChevronsDown,
  Star,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

export function HeroHome() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-orange-500 flex items-center justify-center overflow-hidden pt-20 mb-2">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-[5] w-full max-w-6xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Trust Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                Avaliação 4.9/5 • +5.000 empresas
              </Badge>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme seu
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  negócio em dias
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-light text-white/90 max-w-2xl">
                A plataforma completa de gestão empresarial que
                <strong className="font-semibold">
                  {" "}
                  aumenta sua produtividade em 60%
                </strong>{" "}
                e profissionaliza sua administração
              </h2>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                "Controle financeiro completo",
                "Documentos profissionais",
                "Gestão de clientes integrada",
                "Relatórios em tempo real",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl"
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Grátis Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
              <Link
                href={"/download"}
                className="bg-white text-purple-600 hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl"
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Grátis Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              href={"/download"}{" "}
            </div>
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">30 dias</div>
                <div className="text-sm">Teste grátis</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">0%</div>
                <div className="text-sm">Taxa de setup</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block space-y-4 mb-16">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 mr-2 text-blue-300" />
                  <span className="font-semibold">Clientes</span>
                </div>
                <div className="text-2xl font-bold">+150%</div>
                <div className="text-sm text-white/80">Crescimento médio</div>
              </Card>

              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-300" />
                  <span className="font-semibold">Eficiência</span>
                </div>
                <div className="text-2xl font-bold">60%</div>
                <div className="text-sm text-white/80">Mais produtividade</div>
              </Card>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center mb-3">
                <Star className="w-6 h-6 mr-2 text-yellow-300" />
                <span className="font-semibold">Depoimento</span>
              </div>
              <blockquote className="text-sm italic mb-2">
                "A Orbizy revolucionou meu negócio. Agora tenho controle total e
                meu faturamento aumentou 40%!"
              </blockquote>
              <cite className="text-xs text-white/70">
                - Maria Silva, Salão Elegance
              </cite>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-xs mb-2 font-medium">Descubra mais</span>
        <ChevronsDown className="w-6 h-6 animate-bounce" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 hidden xl:block">
        <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-1/3 left-20 hidden xl:block">
        <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  )
}
