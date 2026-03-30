"use client"

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
import Link from "next/link"
import { motion } from "motion/react"

export function CookiesContent({ dict, locale }: { dict: any; locale: string }) {
  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: dict.cookies.types.items[0].title,
      description: dict.cookies.types.items[0].description,
      examples: dict.cookies.types.items[0].examples,
      required: true,
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: dict.cookies.types.items[1].title,
      description: dict.cookies.types.items[1].description,
      examples: dict.cookies.types.items[1].examples,
      required: false,
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: dict.cookies.types.items[2].title,
      description: dict.cookies.types.items[2].description,
      examples: dict.cookies.types.items[2].examples,
      required: false,
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: dict.cookies.types.items[3].title,
      description: dict.cookies.types.items[3].description,
      examples: dict.cookies.types.items[3].examples,
      required: false,
      color: "bg-orange-100 text-orange-700",
    },
  ]

  const cookieDetails = [
    {
      name: "orbizy_session",
      purpose: locale === "pt" ? "Autenticação e segurança da sessão" : "Authentication and session security",
      type: dict.cookies.table.types.essential,
      duration: locale === "pt" ? "Sessão" : "Session",
      provider: "Orbizy",
    },
    {
      name: "_ga",
      purpose: locale === "pt" ? "Análise de tráfego e comportamento" : "Traffic and behavior analysis",
      type: dict.cookies.table.types.analytic,
      duration: locale === "pt" ? "2 anos" : "2 years",
      provider: "Google Analytics",
    },
    {
      name: "_fbp",
      purpose: locale === "pt" ? "Rastreamento para publicidade" : "Tracking for advertising",
      type: dict.cookies.table.types.marketing,
      duration: locale === "pt" ? "90 dias" : "90 days",
      provider: "Facebook",
    },
    {
      name: "orbizy_preferences",
      purpose: locale === "pt" ? "Configurações do usuário" : "User settings",
      type: dict.cookies.table.types.preference,
      duration: locale === "pt" ? "1 ano" : "1 year",
      provider: "Orbizy",
    },
  ]

  const browserInstructions = [
    {
      browser: "Google Chrome",
      steps: locale === "pt" ? [
        "Clique nos três pontos no canto superior direito",
        "Selecione 'Configurações'",
        "Clique em 'Privacidade e segurança'",
        "Selecione 'Cookies e outros dados do site'",
        "Escolha suas preferências",
      ] : [
        "Click the three dots in the top right corner",
        "Select 'Settings'",
        "Click on 'Privacy and security'",
        "Select 'Cookies and other site data'",
        "Choose your preferences",
      ],
    },
    {
      browser: "Mozilla Firefox",
      steps: locale === "pt" ? [
        "Clique no menu (três linhas) no canto superior direito",
        "Selecione 'Configurações'",
        "Clique em 'Privacidade e Segurança'",
        "Na seção 'Cookies e dados do site'",
        "Configure suas preferências",
      ] : [
        "Click the menu (three lines) in the top right corner",
        "Select 'Settings'",
        "Click on 'Privacy & Security'",
        "In the 'Cookies and Site Data' section",
        "Configure your preferences",
      ],
    },
    {
      browser: "Safari",
      steps: locale === "pt" ? [
        "No menu Safari, clique em 'Preferências'",
        "Selecione a aba 'Privacidade'",
        "Na seção 'Cookies e dados do site'",
        "Escolha suas configurações preferidas",
      ] : [
        "In the Safari menu, click 'Preferences'",
        "Select the 'Privacy' tab",
        "In the 'Cookies and website data' section",
        "Choose your preferred settings",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Cookie className="w-4 h-4 mr-1" />
            {dict.cookies.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.cookies.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.cookies.hero.subtitle}
          </p>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-linear-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Info className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.cookies.what_are.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {dict.cookies.what_are.description}
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {dict.cookies.what_are.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
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
              {dict.cookies.types.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.cookies.types.subtitle}
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
                          {dict.cookies.types.items[0].badge_required}
                        </Badge>
                      ) : (
                        <Badge variant="outline">{dict.cookies.types.items[0].badge_optional}</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">{dict.cookies.types.examples_title}</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example: string, idx: number) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0"></div>
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
              {dict.cookies.preferences.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.cookies.preferences.subtitle}
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h3 className="font-semibold text-green-800">
                    {dict.cookies.types.items[0].title}
                  </h3>
                  <p className="text-sm text-green-600">
                    {dict.cookies.types.items[0].description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-green-700">{dict.cookies.preferences.always_active}</span>
                  <Switch checked disabled />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">{dict.cookies.types.items[1].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.cookies.types.items[1].description}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">{dict.cookies.types.items[2].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.cookies.types.items[2].description}
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                <div>
                  <h3 className="font-semibold">{dict.cookies.types.items[3].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.cookies.types.items[3].description}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {dict.cookies.preferences.save_button}
                </Button>
                <Button variant="outline" className="flex-1">
                  <X className="w-4 h-4 mr-2" />
                  {dict.cookies.preferences.reject_button}
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
              {dict.cookies.table.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.cookies.table.subtitle}
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      {dict.cookies.table.headers.name}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      {dict.cookies.table.headers.purpose}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">{dict.cookies.table.headers.type}</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      {dict.cookies.table.headers.duration}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      {dict.cookies.table.headers.provider}
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
                            cookie.type === dict.cookies.table.types.essential
                              ? "border-green-300 text-green-700"
                              : cookie.type === dict.cookies.table.types.analytic
                              ? "border-blue-300 text-blue-700"
                              : cookie.type === dict.cookies.table.types.marketing
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
              {dict.cookies.browsers.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.cookies.browsers.subtitle}
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
                        <span className="shrink-0 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">
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

      {/* Tools */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{dict.cookies.tools.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Trash2 className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="font-semibold">{dict.cookies.tools.clear.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-left">
                {dict.cookies.tools.clear.description}
              </p>
              <Button variant="outline" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                {dict.cookies.tools.clear.button}
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="font-semibold">{dict.cookies.tools.reset.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-left">
                {dict.cookies.tools.reset.description}
              </p>
              <Button variant="outline" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                {dict.cookies.tools.reset.button}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-yellow-200 bg-linear-to-r from-yellow-50 to-orange-50">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.cookies.important.title}
                </h2>
                <div className="space-y-3 text-gray-700">
                  {dict.cookies.important.notes.map((note: string, index: number) => (
                    <p key={index}>
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{dict.cookies.footer.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {dict.cookies.footer.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Cookie className="w-5 h-5 mr-2" />
              {dict.cookies.footer.pref_center_button}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">{dict.cookies.footer.contact_button}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}
