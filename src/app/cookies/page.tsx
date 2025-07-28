import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  BarChart3,
  CheckCircle,
  Cookie,
  Globe,
  Info,
  RefreshCw,
  Settings,
  Shield,
  Target,
  Trash2,
  X,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies | Orbizy - Gestão Empresarial",
  description:
    "Entenda como a Orbizy utiliza cookies para melhorar sua experiência. Gerencie suas preferências de cookies e saiba mais sobre nossa política de privacidade.",
  keywords:
    "cookies, política de cookies, privacidade, Orbizy, gestão de cookies, preferências",
  robots: "index, follow",
}

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cookies Essenciais",
      description: "Necessários para o funcionamento básico da plataforma",
      examples: [
        "Autenticação de usuário",
        "Segurança da sessão",
        "Preferências de idioma",
      ],
      required: true,
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Cookies Analíticos",
      description: "Nos ajudam a entender como você usa nossa plataforma",
      examples: [
        "Google Analytics",
        "Métricas de uso",
        "Relatórios de performance",
      ],
      required: false,
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Cookies de Marketing",
      description: "Utilizados para personalizar anúncios e conteúdo",
      examples: ["Facebook Pixel", "Google Ads", "Remarketing"],
      required: false,
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Cookies de Preferências",
      description: "Lembram suas configurações e preferências",
      examples: [
        "Tema escuro/claro",
        "Layout preferido",
        "Configurações salvas",
      ],
      required: false,
      color: "bg-orange-100 text-orange-700",
    },
  ]

  const cookieDetails = [
    {
      name: "orbizy_session",
      purpose: "Autenticação e segurança da sessão",
      type: "Essencial",
      duration: "Sessão",
      provider: "Orbizy",
    },
    {
      name: "_ga",
      purpose: "Análise de tráfego e comportamento",
      type: "Analítico",
      duration: "2 anos",
      provider: "Google Analytics",
    },
    {
      name: "_fbp",
      purpose: "Rastreamento para publicidade",
      type: "Marketing",
      duration: "90 dias",
      provider: "Facebook",
    },
    {
      name: "orbizy_preferences",
      purpose: "Configurações do usuário",
      type: "Preferências",
      duration: "1 ano",
      provider: "Orbizy",
    },
    {
      name: "_gid",
      purpose: "Identificação de sessões únicas",
      type: "Analítico",
      duration: "24 horas",
      provider: "Google Analytics",
    },
    {
      name: "orbizy_theme",
      purpose: "Preferência de tema (claro/escuro)",
      type: "Preferências",
      duration: "6 meses",
      provider: "Orbizy",
    },
  ]

  const browserInstructions = [
    {
      browser: "Google Chrome",
      steps: [
        "Clique nos três pontos no canto superior direito",
        "Selecione 'Configurações'",
        "Clique em 'Privacidade e segurança'",
        "Selecione 'Cookies e outros dados do site'",
        "Escolha suas preferências",
      ],
    },
    {
      browser: "Mozilla Firefox",
      steps: [
        "Clique no menu (três linhas) no canto superior direito",
        "Selecione 'Configurações'",
        "Clique em 'Privacidade e Segurança'",
        "Na seção 'Cookies e dados do site'",
        "Configure suas preferências",
      ],
    },
    {
      browser: "Safari",
      steps: [
        "No menu Safari, clique em 'Preferências'",
        "Selecione a aba 'Privacidade'",
        "Na seção 'Cookies e dados do site'",
        "Escolha suas configurações preferidas",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Cookie className="w-4 h-4 mr-1" />
            Política de Cookies
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como Utilizamos Cookies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparência total sobre como coletamos e utilizamos cookies para
            melhorar sua experiência na Orbizy
          </p>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Info className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  O que são Cookies?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Cookies são pequenos arquivos de texto armazenados no seu
                  dispositivo quando você visita um site. Eles nos ajudam a
                  lembrar suas preferências, melhorar sua experiência e fornecer
                  funcionalidades personalizadas na plataforma Orbizy.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Melhoram a experiência</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Lembram preferências</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Garantem segurança</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tipos de Cookies que Utilizamos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Classificamos nossos cookies em diferentes categorias para maior
              transparência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${type.color}`}>
                        {type.icon}
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      {type.required ? (
                        <Badge className="bg-red-100 text-red-700">
                          Obrigatório
                        </Badge>
                      ) : (
                        <Badge variant="outline">Opcional</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Exemplos:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Gerencie suas Preferências
            </h2>
            <p className="text-lg text-muted-foreground">
              Você tem controle total sobre quais cookies aceitar
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h3 className="font-semibold text-green-800">
                    Cookies Essenciais
                  </h3>
                  <p className="text-sm text-green-600">
                    Necessários para o funcionamento básico
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-green-700">Sempre ativo</span>
                  <Switch checked disabled />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">Cookies Analíticos</h3>
                  <p className="text-sm text-muted-foreground">
                    Nos ajudam a melhorar nossos serviços
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">Cookies de Marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Para personalizar anúncios e conteúdo
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">Cookies de Preferências</h3>
                  <p className="text-sm text-muted-foreground">
                    Lembram suas configurações pessoais
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Salvar Preferências
                </Button>
                <Button variant="outline" className="flex-1">
                  <X className="w-4 h-4 mr-2" />
                  Rejeitar Todos (Exceto Essenciais)
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Detailed Cookie List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Lista Detalhada de Cookies
            </h2>
            <p className="text-lg text-muted-foreground">
              Informações completas sobre cada cookie utilizado
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Nome do Cookie
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Finalidade
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">Tipo</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Duração
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Provedor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4 font-mono text-sm">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4">
                        <Badge
                          variant="outline"
                          className={
                            cookie.type === "Essencial"
                              ? "border-green-300 text-green-700"
                              : cookie.type === "Analítico"
                              ? "border-blue-300 text-blue-700"
                              : cookie.type === "Marketing"
                              ? "border-purple-300 text-purple-700"
                              : "border-orange-300 text-orange-700"
                          }
                        >
                          {cookie.type}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm">{cookie.duration}</td>
                      <td className="px-6 py-4 text-sm">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Browser Instructions */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Como Gerenciar Cookies no seu Navegador
            </h2>
            <p className="text-lg text-muted-foreground">
              Instruções para os principais navegadores
            </p>
          </div>

          <Tabs defaultValue="chrome" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chrome">Chrome</TabsTrigger>
              <TabsTrigger value="firefox">Firefox</TabsTrigger>
              <TabsTrigger value="safari">Safari</TabsTrigger>
            </TabsList>

            {browserInstructions.map((instruction, index) => (
              <TabsContent
                key={index}
                value={instruction.browser.toLowerCase().replace(" ", "")}
                className="mt-6"
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    {instruction.browser}
                  </h3>
                  <ol className="space-y-3">
                    {instruction.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cookies de Terceiros
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Google Analytics</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Análise de tráfego e comportamento dos usuários
              </p>
              <Link
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline text-sm"
              >
                Política de Privacidade
              </Link>
            </Card>

            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Facebook Pixel</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Rastreamento para publicidade direcionada
              </p>
              <Link
                href="https://www.facebook.com/privacy/policy/"
                className="text-primary hover:underline text-sm"
              >
                Política de Privacidade
              </Link>
            </Card>

            <Card className="p-6 text-center">
              <Settings className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hotjar</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Análise de experiência do usuário
              </p>
              <Link
                href="https://www.hotjar.com/legal/policies/privacy/"
                className="text-primary hover:underline text-sm"
              >
                Política de Privacidade
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Management Tools */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ferramentas de Gerenciamento
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Trash2 className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="font-semibold">Limpar Cookies</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Remove todos os cookies armazenados pelo site Orbizy
              </p>
              <Button variant="outline" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Todos os Cookies
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="font-semibold">Redefinir Preferências</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Volta às configurações padrão de cookies
              </p>
              <Button variant="outline" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Redefinir Configurações
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Importante Saber
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Desabilitar cookies essenciais</strong> pode afetar
                    o funcionamento da plataforma Orbizy.
                  </p>
                  <p>
                    <strong>Cookies analíticos</strong> nos ajudam a melhorar
                    nossos serviços, mas são opcionais.
                  </p>
                  <p>
                    <strong>Suas preferências</strong> são respeitadas e podem
                    ser alteradas a qualquer momento.
                  </p>
                  <p>
                    <strong>Atualizações</strong> nesta política serão
                    comunicadas através do banner de cookies.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas sobre Cookies?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nossa equipe está pronta para esclarecer qualquer questão sobre
            nossa política de cookies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Cookie className="w-5 h-5 mr-2" />
              Abrir Central de Preferências
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Última atualização:</strong> Janeiro de 2025 •
            <Link href="/lgpd" className="text-primary hover:underline ml-1">
              Ver Política LGPD
            </Link>{" "}
            •
            <Link
              href="/termos-de-uso-e-privacidade"
              className="text-primary hover:underline ml-1"
            >
              Termos de Uso
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
