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
  Building,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Package,
  Star,
  Users,
} from "lucide-react"
import { getLocale } from "@/i18n/get-locale"
import { getDictionary } from "@/i18n/get-dictionary"
import Image from "next/image"
import Link from "next/link"

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

export default async function Home() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return (
    <div className="bg-slate-100">
      <Header />
      <HeroHome dict={dict} />

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

      {/* Features Section with Tabs */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.features.title}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Tudo que seu negócio precisa em um só lugar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <CardTitle>{dict.features.budget.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {dict.features.budget.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Templates profissionais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Envio por WhatsApp
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-primary mr-3" />
                  <CardTitle>{dict.features.invoice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {dict.features.invoice.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conversão em um clique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Controle de recebimentos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-8 bg-linear-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            {dict.hero.cta_primary}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 5.000 empreendedores que já revolucionaram sua
            gestão com a Orbizy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/download"
              className="bg-white text-primary font-semibold text-lg px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors inline-block"
            >
              Começar Teste Grátis
            </Link>
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
          </div>
        </div>
      </section>

      <Separator className="my-4" />
      <Footer />
    </div>
  )
}
