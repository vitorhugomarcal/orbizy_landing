import heroBG from "@/assets/heroBG.jpg"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroHome } from "@/components/heroHome"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BarChart3,
  Briefcase,
  Building,
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Globe,
  MessageSquare,
  Package,
  PieChart,
  PlayCircle,
  Scissors,
  Shield,
  ShoppingBag,
  Star,
  Users,
  Wrench,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "Orbizy - Gestão Empresarial Completa para Pequenos Negócios | App de Gestão",
  description:
    "Transforme seu negócio com a Orbizy! Gestão completa: controle financeiro, clientes, estoque, agendamentos, emissão de documentos. Teste grátis por 30 dias!",
  keywords:
    "gestão empresarial, pequenos negócios, controle financeiro, gestão de clientes, emissão de notas, orçamentos, aplicativo de gestão, ERP pequenas empresas, sistema de gestão, controle de estoque, agenda online, recibos digitais",
  authors: [{ name: "Orbizy" }],
  openGraph: {
    title: "Orbizy - A Gestão Empresarial que seu Negócio Precisa",
    description:
      "Mais de 5.000 empreendedores já transformaram seus negócios com a Orbizy. Teste grátis!",
    type: "website",
    locale: "pt_BR",
    siteName: "Orbizy",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://orbizy.com",
  },
}

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestão de Clientes",
    description:
      "Catálogo completo com histórico de pedidos e relacionamento personalizado",
    details:
      "Mantenha todos os dados dos seus clientes organizados, com histórico completo de compras e preferências.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Controle Financeiro",
    description:
      "Monitore receitas, despesas e fluxo de caixa com relatórios detalhados",
    details:
      "Dashboards intuitivos com gráficos em tempo real para acompanhar a saúde financeira do seu negócio.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentos Profissionais",
    description:
      "Emita orçamentos, contratos, notas e recibos com layout profissional",
    details:
      "Templates personalizáveis com sua marca, enviados automaticamente por email ou WhatsApp.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Agendamento Inteligente",
    description: "Organize compromissos e serviços com agenda integrada",
    details:
      "Sistema de agendamento online com confirmações automáticas e lembretes por SMS.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Controle de Estoque",
    description: "Gerencie produtos e serviços com alertas automáticos",
    details:
      "Controle completo de entrada e saída, com alertas de estoque baixo e relatórios de giro.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Gestão de Parcelas",
    description: "Controle valores a receber com notificações automáticas",
    details:
      "Acompanhe pagamentos pendentes, envie lembretes automáticos e organize seu fluxo de caixa.",
  },
]

const businessTypes = [
  {
    icon: <Scissors className="h-8 w-8" />,
    name: "Salões de Beleza",
    count: "1.200+",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    name: "Assistência Técnica",
    count: "800+",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    name: "Consultoria",
    count: "600+",
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    name: "Comércio",
    count: "900+",
  },
  { icon: <Camera className="h-8 w-8" />, name: "Fotografia", count: "400+" },
  { icon: <Building className="h-8 w-8" />, name: "Serviços", count: "1.100+" },
]

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 50 clientes",
      "10 documentos/mês",
      "Relatórios básicos",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 24,90",
    period: "/mês",
    description: "Para negócios em crescimento",
    features: [
      "Acesso ao my.Orbizy web",
      "Adicione sua logomarca",
      "Personalização dos documentos",
      "Backup automático",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "R$ 49,90",
    period: "/mês",
    description: "Para empresas estabelecidas",
    features: [
      "Gerente de conta",
      "Múltiplos usuários",
      "Teste as novidades primeiro",
      "API personalizada",
    ],
    highlighted: false,
  },
]

const testimonials = [
  {
    name: "Maria Silva",
    business: "Salão de Beleza Elegance",
    content:
      "A Orbizy transformou completamente meu salão. Agora tenho controle total dos agendamentos e o faturamento aumentou 40% em 6 meses!",
    rating: 5,
    image: "/testimonial1.jpg",
    results: "+40% faturamento",
  },
  {
    name: "João Santos",
    business: "JS Consultoria",
    content:
      "Os relatórios financeiros são incríveis! Consigo tomar decisões baseadas em dados reais e meus clientes ficaram impressionados com os orçamentos profissionais.",
    rating: 5,
    image: "/testimonial2.jpg",
    results: "98% aprovação orçamentos",
  },
  {
    name: "Ana Costa",
    business: "TechRepair Assistência",
    content:
      "O controle de estoque me salvou muito dinheiro. Não tenho mais produtos parados e os alertas automáticos são perfeitos!",
    rating: 5,
    image: "/testimonial3.jpg",
    results: "-30% custos estoque",
  },
]

const faqs = [
  {
    question: "Como funciona o período de teste gratuito?",
    answer:
      "Você tem 30 dias para testar todas as funcionalidades da Orbizy sem compromisso. Não é necessário cartão de crédito para começar.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Seus dados ficam seguros por 90 dias após o cancelamento.",
  },
  {
    question: "A Orbizy funciona offline?",
    answer:
      "Sim! Você pode trabalhar offline e os dados são sincronizados automaticamente quando a conexão for restabelecida.",
  },
  {
    question: "Como é feita a migração dos meus dados?",
    answer:
      "Nossa equipe oferece suporte completo para migração. Você pode importar dados de planilhas ou outros sistemas facilmente.",
  },
  {
    question: "Há limite de documentos emitidos?",
    answer:
      "No plano gratuito são 10 documentos/mês. Nos planos pagos não há limites para emissão de orçamentos, contratos e recibos.",
  },
  {
    question: "Posso personalizar os documentos com minha marca?",
    answer:
      "Sim! Você pode adicionar sua logo, cores da marca e informações personalizadas em todos os documentos.",
  },
]

const integrations = [
  { name: "WhatsApp Business", icon: <MessageSquare className="h-6 w-6" /> },
  { name: "Mercado Pago", icon: <CreditCard className="h-6 w-6" /> },
  { name: "PagSeguro", icon: <DollarSign className="h-6 w-6" /> },
  { name: "Google Calendar", icon: <Calendar className="h-6 w-6" /> },
  { name: "Dropbox", icon: <Download className="h-6 w-6" /> },
  { name: "Gmail", icon: <Globe className="h-6 w-6" /> },
]

const stats = [
  {
    number: "5.000+",
    label: "Empresas Ativas",
    icon: <Building className="h-6 w-6" />,
  },
  { number: "98%", label: "Satisfação", icon: <Star className="h-6 w-6" /> },
  {
    number: "150K+",
    label: "Documentos Emitidos",
    icon: <FileText className="h-6 w-6" />,
  },
  { number: "24/7", label: "Suporte", icon: <Clock className="h-6 w-6" /> },
]

export default function Home() {
  return (
    <div className="bg-slate-100">
      {/* Enhanced Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Orbizy",
            description:
              "Plataforma completa de gestão empresarial para pequenos negócios",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android, Windows, macOS",
            offers: [
              {
                "@type": "Offer",
                name: "Plano Gratuito",
                price: "0",
                priceCurrency: "BRL",
              },
              {
                "@type": "Offer",
                name: "Plano Profissional",
                price: "29.90",
                priceCurrency: "BRL",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
            featureList: [
              "Gestão de Clientes",
              "Controle Financeiro",
              "Emissão de Documentos",
              "Agendamento Online",
              "Controle de Estoque",
            ],
          }),
        }}
      />

      <Header />
      <HeroHome />

      {/* Hero Image Section */}
      <section className=" flex flex-1 -mt-8">
        <Image
          src={heroBG}
          alt="Interface do aplicativo Orbizy mostrando dashboard de gestão empresarial com gráficos financeiros e lista de clientes"
          className="rounded-3xl w-full object-cover"
          priority
        />
      </section>

      {/* Value Proposition */}
      <section className="flex flex-1 px-16">
        <Card className="w-full sm:max-w-xl mb-12 -mt-8 mx-auto">
          <CardHeader>
            <CardTitle className="font-semibold sm:text-lg text-sm text-center">
              Descubra a simplicidade de um aplicativo moderno, projetado para
              tornar a gestão do seu negócio intuitiva e eficiente.
            </CardTitle>
          </CardHeader>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Segmentos Atendidos
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Perfeito para o seu tipo de negócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Orbizy atende diversos segmentos com soluções personalizadas
              para cada necessidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {businessTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {type.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{type.name}</h3>
                <Badge variant="outline">{type.count}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Funcionalidades
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Tudo que seu negócio precisa em um só lugar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas completas para gestão empresarial, desenvolvidas
              especialmente para empreendedores que querem crescer de forma
              organizada.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="financial">Financeiro</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {feature.description}
                    </p>
                    <p className="text-sm text-slate-600">{feature.details}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="financial" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <PieChart className="h-8 w-8 text-primary mr-3" />
                      <CardTitle>Relatórios Inteligentes</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Fluxo de caixa em tempo real
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Análise de lucratividade
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Projeções financeiras
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Comparativos mensais
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-8 w-8 text-primary mr-3" />
                      <CardTitle>Controle de Recebimentos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Gestão de parcelas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Lembretes automáticos
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Múltiplas formas de pagamento
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Conciliação bancária
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Orçamentos</h3>
                  <p className="text-sm text-muted-foreground">
                    Templates profissionais com aprovação digital
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Contratos</h3>
                  <p className="text-sm text-muted-foreground">
                    Modelos jurídicos validados e personalizáveis
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Recibos</h3>
                  <p className="text-sm text-muted-foreground">
                    Emissão automática com validade fiscal
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integrations Section */}
      {/* <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Integrações
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Conecte com suas ferramentas favoritas
            </h2>
            <p className="text-lg text-muted-foreground">
              A Orbizy se integra perfeitamente com os serviços que você já usa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  {integration.icon}
                </div>
                <h3 className="font-medium">{integration.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Planos
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-lg text-muted-foreground">
              Comece gratuitamente e evolua conforme seu crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  plan.highlighted
                    ? "ring-2 ring-primary shadow-xl scale-105"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <Badge className="mb-4">Mais Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.price === "R$ 0"
                      ? "Começar Grátis"
                      : "Escolher Plano"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Histórias de sucesso reais
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja como a Orbizy transformou negócios como o seu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.business}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre a Orbizy
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Segurança e Confiabilidade
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dados Protegidos</h3>
              <p className="text-sm text-muted-foreground">
                Criptografia SSL 256-bits e backup automático em nuvem
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Certificações</h3>
              <p className="text-sm text-muted-foreground">
                Compliance com LGPD e certificações de segurança
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground">
                Disponibilidade garantida com infraestrutura robusta
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transforme seu negócio hoje mesmo!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 5.000 empreendedores que já revolucionaram sua
            gestão com a Orbizy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold text-lg px-8"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Teste Grátis por 30 Dias
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Cancelamento gratuito
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Suporte especializado
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-4" />
      <Footer />
    </div>
  )
}
