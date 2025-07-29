"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Award,
  BarChart3,
  Briefcase,
  Calendar,
  Car,
  CheckCircle,
  Download,
  FileText,
  GraduationCap,
  Home,
  MessageCircle,
  PaintBucket,
  PenTool,
  PlayCircle,
  Scissors,
  Smartphone,
  Star,
  Stethoscope,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { useState } from "react"

interface ServiceType {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  examples: string[]
  color: string
}

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  benefit: string
}

interface Testimonial {
  id: string
  name: string
  business: string
  service: string
  content: string
  rating: number
  results: string
  avatar: string
}

export default function ServicosPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const serviceTypes: ServiceType[] = [
    {
      id: "consulting",
      name: "Consultoria",
      description: "Consultores e especialistas",
      icon: <Briefcase className="h-6 w-6" />,
      examples: [
        "Consultoria empresarial",
        "Consultoria financeira",
        "Consultoria de marketing",
        "Consultoria jurídica",
      ],
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "technical",
      name: "Assistência Técnica",
      description: "Técnicos e reparadores",
      icon: <PenTool className="h-6 w-6" />,
      examples: [
        "Assistência de celulares",
        "Técnico em informática",
        "Assistência de eletrodomésticos",
        "Técnico automotivo",
      ],
      color: "bg-green-100 text-green-700",
    },
    {
      id: "creative",
      name: "Serviços Criativos",
      description: "Profissionais criativos",
      icon: <PaintBucket className="h-6 w-6" />,
      examples: [
        "Design gráfico",
        "Fotografia",
        "Marketing digital",
        "Produção de conteúdo",
      ],
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "personal",
      name: "Serviços Pessoais",
      description: "Cuidados pessoais e bem-estar",
      icon: <Scissors className="h-6 w-6" />,
      examples: [
        "Cabeleireiro",
        "Esteticista",
        "Personal trainer",
        "Massoterapia",
      ],
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "health",
      name: "Saúde e Bem-estar",
      description: "Profissionais da saúde",
      icon: <Stethoscope className="h-6 w-6" />,
      examples: ["Fisioterapia", "Psicologia", "Nutrição", "Odontologia"],
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "education",
      name: "Educação",
      description: "Professores e instrutores",
      icon: <GraduationCap className="h-6 w-6" />,
      examples: [
        "Aulas particulares",
        "Cursos online",
        "Treinamentos",
        "Coaching",
      ],
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "home",
      name: "Serviços Domésticos",
      description: "Serviços para casa",
      icon: <Home className="h-6 w-6" />,
      examples: [
        "Limpeza residencial",
        "Jardinagem",
        "Encanador",
        "Eletricista",
      ],
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "automotive",
      name: "Automotivo",
      description: "Serviços para veículos",
      icon: <Car className="h-6 w-6" />,
      examples: ["Mecânica", "Estética automotiva", "Auto elétrica", "Guincho"],
      color: "bg-red-100 text-red-700",
    },
  ]

  const features: Feature[] = [
    {
      id: "scheduling",
      title: "Agendamento Inteligente",
      description:
        "Sistema completo de agendamentos com calendário integrado, lembretes automáticos e gestão de horários",
      icon: <Calendar className="h-8 w-8" />,
      benefit: "Reduza faltas em 60% e organize melhor sua agenda",
    },
    {
      id: "clients",
      title: "Gestão de Clientes",
      description:
        "Cadastro completo de clientes com histórico de serviços, preferências e dados de contato organizados",
      icon: <Users className="h-8 w-8" />,
      benefit: "Atendimento personalizado que fideliza clientes",
    },
    {
      id: "quotes",
      title: "Orçamentos Profissionais",
      description:
        "Crie orçamentos detalhados com descrição de serviços, valores e condições de forma profissional",
      icon: <FileText className="h-8 w-8" />,
      benefit: "Aumente sua taxa de conversão em 40%",
    },
    {
      id: "financial",
      title: "Controle Financeiro",
      description:
        "Monitore receitas, despesas, fluxo de caixa e tenha relatórios completos do seu negócio",
      icon: <BarChart3 className="h-8 w-8" />,
      benefit: "Tenha visão clara da saúde financeira do seu negócio",
    },
    {
      id: "mobile",
      title: "App Mobile Completo",
      description:
        "Acesse tudo pelo celular: agenda, clientes, orçamentos e financeiro sempre na palma da mão",
      icon: <Smartphone className="h-8 w-8" />,
      benefit: "Trabalhe de qualquer lugar com total mobilidade",
    },
    {
      id: "automation",
      title: "Automação de Processos",
      description:
        "Automatize lembretes, follow-ups, cobranças e comunicação com clientes",
      icon: <Zap className="h-8 w-8" />,
      benefit: "Economize 3 horas por dia em tarefas administrativas",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Carlos Mendes",
      business: "CM Consultoria Empresarial",
      service: "Consultoria",
      content:
        "A Orbizy transformou minha consultoria. Antes eu perdia muito tempo com planilhas e agora tenho tudo organizado. Meus clientes ficaram impressionados com a profissionalização dos orçamentos.",
      rating: 5,
      results: "Aumento de 45% no faturamento em 6 meses",
      avatar: "/avatar-carlos.jpg",
    },
    {
      id: "2",
      name: "Ana Silva",
      business: "TechFix Assistência",
      service: "Assistência Técnica",
      content:
        "O sistema de agendamentos da Orbizy acabou com a bagunça da minha agenda. Agora meus clientes recebem lembretes automáticos e praticamente não há mais faltas.",
      rating: 5,
      results: "Redução de 70% nas faltas de clientes",
      avatar: "/avatar-ana.jpg",
    },
    {
      id: "3",
      name: "Roberto Costa",
      business: "Costa Design",
      service: "Design Gráfico",
      content:
        "Como freelancer, sempre tive dificuldade para organizar projetos e cobranças. A Orbizy me deu o controle total do meu negócio e agora posso focar no que faço de melhor: criar.",
      rating: 5,
      results: "Organização completa de 50+ projetos ativos",
      avatar: "/avatar-roberto.jpg",
    },
  ]

  const useCases = [
    {
      title: "Agendamento de Consultas",
      description:
        "Cliente agenda online, recebe confirmação automática e lembretes por WhatsApp",
      steps: [
        "Cliente acessa link de agendamento",
        "Escolhe data e horário disponível",
        "Recebe confirmação por email/SMS",
        "Lembrete automático 1 dia antes",
      ],
    },
    {
      title: "Orçamento Rápido",
      description:
        "Crie e envie orçamentos profissionais em minutos, direto do celular",
      steps: [
        "Cadastre o serviço no sistema",
        "Selecione cliente e serviços",
        "Gere orçamento automaticamente",
        "Envie por email ou WhatsApp",
      ],
    },
    {
      title: "Controle de Recebimentos",
      description:
        "Monitore pagamentos, envie cobranças e tenha relatórios financeiros completos",
      steps: [
        "Registre serviços prestados",
        "Acompanhe status dos pagamentos",
        "Envie lembretes automáticos",
        "Gere relatórios mensais",
      ],
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Grátis",
      description: "Para quem está começando",
      features: [
        "Até 50 clientes",
        "Agendamentos básicos",
        "3 orçamentos/mês",
        "Suporte por email",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "R$ 29,90/mês",
      description: "Para profissionais estabelecidos",
      features: [
        "Clientes ilimitados",
        "Agendamentos avançados",
        "Orçamentos ilimitados",
        "Relatórios financeiros",
        "App mobile",
        "Suporte prioritário",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      price: "R$ 49,90/mês",
      description: "Para negócios em crescimento",
      features: [
        "Tudo do Professional",
        "Múltiplos usuários",
        "Automações avançadas",
        "Integrações",
        "Suporte telefônico",
      ],
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 mb-4"
              >
                <Briefcase className="w-4 h-4 mr-1" />
                Especializado em Serviços
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Orbizy para
                <span className="block text-yellow-300">
                  Prestadores de Serviços
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                A plataforma completa para quem trabalha com serviços. Gerencie
                agendamentos, clientes, orçamentos e financeiro de forma simples
                e profissional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 font-semibold"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Teste Grátis por 30 Dias
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Suporte especializado</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg">
                      <Calendar className="w-6 h-6 text-yellow-300" />
                      <div>
                        <div className="font-semibold">Próximo Atendimento</div>
                        <div className="text-sm opacity-80">
                          João Silva - 14:00
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg">
                      <FileText className="w-6 h-6 text-green-300" />
                      <div>
                        <div className="font-semibold">Orçamento Aprovado</div>
                        <div className="text-sm opacity-80">
                          R\$ 850,00 - Maria Costa
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-blue-300" />
                      <div>
                        <div className="font-semibold">Faturamento do Mês</div>
                        <div className="text-sm opacity-80">
                          R\$ 12.450,00 (+23%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ideal Para Todos os Tipos de Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seja qual for seu segmento, a Orbizy tem as ferramentas certas
              para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service) => (
              <Card
                key={service.id}
                className="p-6 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${service.color} group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.examples.map((example, index) => (
                    <div
                      key={index}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Funcionalidades Pensadas Para Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa para profissionalizar e fazer seu negócio
              crescer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-center text-green-700 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Como Funciona na Prática
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja como a Orbizy simplifica seu dia a dia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  {useCase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Histórias de Sucesso</h2>
            <p className="text-lg text-muted-foreground">
              Veja como outros prestadores de serviços transformaram seus
              negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-700 text-sm font-medium">
                    <Award className="w-4 h-4 mr-2" />
                    {testimonial.results}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Planos Que Cabem no Seu Bolso
            </h2>
            <p className="text-lg text-muted-foreground">
              Comece grátis e evolua conforme seu negócio cresce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  plan.highlighted ? "ring-2 ring-primary border-primary" : ""
                }`}
              >
                {plan.highlighted && (
                  <Badge className="mb-4">Mais Popular</Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlighted ? "" : "variant-outline"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.name === "Starter"
                    ? "Começar Grátis"
                    : "Escolher Plano"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto Para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de prestadores de serviços que já usam a Orbizy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-white/90 font-semibold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Começar Teste Grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>30 dias grátis</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Recursos Para Seu Sucesso
            </h2>
            <p className="text-lg text-muted-foreground">
              Materiais gratuitos para ajudar você a crescer
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <PlayCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Webinar Gratuito</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Como aumentar seu faturamento em 50%
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Assistir Agora
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Download className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-book Grátis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Guia completo para prestadores de serviços
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Baixar PDF
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MessageCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Consultoria Grátis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                30 min com especialista em negócios
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Agendar
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Comunidade</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conecte-se com outros prestadores
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Participar
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
