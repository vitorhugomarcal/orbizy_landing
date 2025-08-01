"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Apple,
  BarChart3,
  Calendar,
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  PlayCircle,
  Smartphone,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react"

export default function DownloadPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  // Capturar o plano selecionado da URL ou localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get("plan")
    if (plan) {
      setSelectedPlan(plan)
    }
  }, [])

  const appStoreUrl = "https://apps.apple.com/br/app/orbizy/id6670499792"
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.orbizy.app"
  const webAppUrl = "https://my.orbizy.app"

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Agendamentos",
      description: "Gerencie sua agenda em qualquer lugar",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clientes",
      description: "Acesso completo à base de clientes",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Orçamentos",
      description: "Crie e envie orçamentos na hora",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Relatórios",
      description: "Acompanhe seu desempenho",
    },
  ]

  const appBenefits = [
    "Funciona offline - sincroniza quando conectar",
    "Notificações push para não perder nada",
    "Interface otimizada para mobile",
    "Acesso rápido às funcionalidades principais",
    "Sincronização automática com a web",
    "Backup seguro na nuvem",
  ]

  const stats = [
    { label: "Usuários Ativos", value: "50.000+" },
    { label: "Avaliação", value: "4.8/5" },
    { label: "Downloads", value: "100.000+" },
    { label: "Países", value: "15+" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Smartphone className="w-4 h-4 mr-1" />
            App Mobile Disponível
          </Badge>

          {selectedPlan && (
            <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-yellow-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">
                  Plano{" "}
                  {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}{" "}
                  selecionado!
                </span>
              </div>
              <p className="text-white/80 text-sm mt-1">
                Baixe o app para ativar sua conta e começar a usar
              </p>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Baixe o App Orbizy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Gerencie seu negócio de qualquer lugar com nosso aplicativo
            completo. Disponível para iOS e Android.
          </p>

          <div className="flex items-center justify-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Grátis para baixar</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Funciona offline</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Sincronização automática</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Escolha Sua Plataforma</h2>
            <p className="text-lg text-muted-foreground">
              Escaneie o QR Code ou clique no botão para baixar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* iOS App Store */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-900 rounded-2xl">
                  <Apple className="h-12 w-12 text-white" />
                </div>
              </div>

              <h3 className="font-semibold text-xl mb-2">iOS - App Store</h3>
              <p className="text-muted-foreground mb-6">Para iPhone e iPad</p>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <QRCodeSVG
                    value={appStoreUrl}
                    size={120}
                    level="M"
                    includeMargin={false}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  asChild
                >
                  <Link href={appStoreUrl} target="_blank">
                    <Apple className="w-5 h-5 mr-2" />
                    Baixar na App Store
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <span>iOS 15.1+</span>
                  <span>•</span>
                  <span>59 MB</span>
                </div>
              </div>
            </Card>

            {/* Google Play Store */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              <h3 className="font-semibold text-xl mb-2">
                Android - Google Play
              </h3>
              <p className="text-muted-foreground mb-6">
                Para smartphones e tablets Android
              </p>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <QRCodeSVG
                    value={playStoreUrl}
                    size={120}
                    level="M"
                    includeMargin={false}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <Link href={playStoreUrl} target="_blank">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Baixar no Google Play
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <span>Android 6.0+</span>
                  <span>•</span>
                  <span>42 MB</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tudo na Palma da Sua Mão
            </h2>
            <p className="text-lg text-muted-foreground">
              O app Orbizy tem todas as funcionalidades da versão web
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Benefits */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Que Usar o App?</h2>
            <p className="text-lg text-muted-foreground">
              Vantagens exclusivas da versão mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {appBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-1 bg-green-100 rounded-full mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Confiado por Milhares</h2>
            <p className="text-lg text-muted-foreground">
              Números que comprovam a qualidade do nosso app
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O Que Dizem Nossos Usuários
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-lg font-semibold ml-2">4.8/5</span>
            </div>
            <p className="text-muted-foreground">
              Baseado em mais de 2.000 avaliações
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "App perfeito! Uso todos os dias para gerenciar minha clínica.
                Interface limpa e muito fácil de usar."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  J
                </div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "Revolucionou meu negócio! Agora consigo atender clientes mesmo
                quando estou fora do escritório."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Ana Costa</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "Sincronização perfeita entre celular e computador. Nunca mais
                perdi um agendamento!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Começar</h2>
            <p className="text-lg text-muted-foreground">
              Siga estes passos simples para começar a usar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Baixe o App</h3>
              <p className="text-muted-foreground">
                Escaneie o QR Code ou clique no botão da sua plataforma
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Crie sua Conta</h3>
              <p className="text-muted-foreground">
                Faça seu cadastro gratuito e configure seu perfil
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Comece a Usar</h3>
              <p className="text-muted-foreground">
                Adicione seus primeiros clientes e comece a gerenciar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você a configurar o app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contato">
                  <Download className="w-5 h-5 mr-2" />
                  Suporte para Instalação
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutoriais">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Ver Tutoriais
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
