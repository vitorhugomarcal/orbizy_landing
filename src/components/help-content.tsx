"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  AlertCircle,
  BarChart3,
  Calendar,
  ChevronRight,
  CreditCard,
  Download,
  FileText,
  Flag,
  Globe,
  HelpCircle,
  Lightbulb,
  Mail,
  MessageCircle,
  Package,
  Phone,
  PlayCircle,
  Search,
  Settings,
  Shield,
  Smartphone,
  Star,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  helpful: number
  notHelpful: number
  tags: string[]
  popular?: boolean
}

interface HelpCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  articleCount: number
  color: string
  popular?: boolean
}

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
}

export function HelpContent({ dict, locale }: { dict: any; locale: string }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const helpCategories: HelpCategory[] = [
    {
      id: "getting-started",
      name: locale === "pt" ? "Primeiros Passos" : "Getting Started",
      description: locale === "pt" ? "Configure sua conta e comece a usar" : "Set up your account and get started",
      icon: <Zap className="h-6 w-6" />,
      articleCount: 15,
      color: "bg-green-100 text-green-700",
      popular: true,
    },
    {
      id: "account",
      name: locale === "pt" ? "Conta e Perfil" : "Account and Profile",
      description: locale === "pt" ? "Gerencie sua conta e configurações" : "Manage your account and settings",
      icon: <Settings className="h-6 w-6" />,
      articleCount: 12,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "billing",
      name: locale === "pt" ? "Pagamentos e Planos" : "Billing and Plans",
      description: locale === "pt" ? "Assinaturas, faturas e pagamentos" : "Subscriptions, invoices and payments",
      icon: <CreditCard className="h-6 w-6" />,
      articleCount: 18,
      color: "bg-purple-100 text-purple-700",
      popular: true,
    },
    {
      id: "clients",
      name: locale === "pt" ? "Gestão de Clientes" : "Customer Management",
      description: locale === "pt" ? "Organize e gerencie sua base de clientes" : "Organize and manage your customer base",
      icon: <Users className="h-6 w-6" />,
      articleCount: 22,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "documents",
      name: locale === "pt" ? "Documentos" : "Documents",
      description: locale === "pt" ? "Orçamentos, contratos e notas fiscais" : "Quotes, contracts and invoices",
      icon: <FileText className="h-6 w-6" />,
      articleCount: 25,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "financial",
      name: locale === "pt" ? "Controle Financeiro" : "Financial Control",
      description: locale === "pt" ? "Receitas, despesas e relatórios" : "Revenue, expenses and reports",
      icon: <BarChart3 className="h-6 w-6" />,
      articleCount: 20,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "scheduling",
      name: locale === "pt" ? "Agendamentos" : "Scheduling",
      description: locale === "pt" ? "Organize compromissos e serviços" : "Organize appointments and services",
      icon: <Calendar className="h-6 w-6" />,
      articleCount: 14,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "inventory",
      name: locale === "pt" ? "Estoque" : "Inventory",
      description: locale === "pt" ? "Controle de produtos e serviços" : "Product and service control",
      icon: <Package className="h-6 w-6" />,
      articleCount: 16,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "mobile",
      name: locale === "pt" ? "App Mobile" : "Mobile App",
      description: locale === "pt" ? "Use a Orbizy no seu smartphone" : "Use Orbizy on your smartphone",
      icon: <Smartphone className="h-6 w-6" />,
      articleCount: 10,
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      id: "integrations",
      name: locale === "pt" ? "Integrações" : "Integrations",
      description: locale === "pt" ? "Conecte com outras ferramentas" : "Connect with other tools",
      icon: <Globe className="h-6 w-6" />,
      articleCount: 8,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "security",
      name: locale === "pt" ? "Segurança" : "Security",
      description: locale === "pt" ? "Proteção de dados e privacidade" : "Data protection and privacy",
      icon: <Shield className="h-6 w-6" />,
      articleCount: 11,
      color: "bg-red-100 text-red-700",
    },
    {
      id: "troubleshooting",
      name: locale === "pt" ? "Solução de Problemas" : "Troubleshooting",
      description: locale === "pt" ? "Resolva problemas técnicos" : "Resolve technical issues",
      icon: <AlertCircle className="h-6 w-6" />,
      articleCount: 19,
      color: "bg-amber-100 text-amber-700",
    },
  ]

  const quickActions: QuickAction[] = [
    {
      id: "contact",
      title: dict.help.quick_actions[0].title,
      description: dict.help.quick_actions[0].description,
      icon: <MessageCircle className="h-6 w-6" />,
      href: "/contato",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "tutorials",
      title: dict.help.quick_actions[1].title,
      description: dict.help.quick_actions[1].description,
      icon: <PlayCircle className="h-6 w-6" />,
      href: "/tutoriais",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: "status",
      title: dict.help.quick_actions[2].title,
      description: dict.help.quick_actions[2].description,
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/status",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "community",
      title: dict.help.quick_actions[3].title,
      description: dict.help.quick_actions[3].description,
      icon: <Users className="h-6 w-6" />,
      href: "#community",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  const ptFAQs: FAQItem[] = [
    {
      id: "1",
      question: "Como faço para cancelar minha assinatura?",
      answer: "Você pode cancelar sua assinatura a qualquer momento através das configurações da conta. Acesse 'Minha Conta' > 'Planos e Assinaturas' > 'Cancelar Assinatura'. O cancelamento será efetivo no final do período já pago.",
      category: "billing",
      helpful: 245,
      notHelpful: 12,
      tags: ["cancelamento", "assinatura", "conta"],
      popular: true,
    },
    {
        id: "2",
        question: "Como criar meu primeiro orçamento?",
        answer: "Para criar um orçamento: 1) Acesse 'Documentos' > 'Orçamentos', 2) Clique em 'Novo Orçamento', 3) Preencha os dados do cliente, 4) Adicione produtos/serviços, 5) Revise e envie. Você também pode usar nossos modelos prontos para agilizar o processo.",
        category: "documents",
        helpful: 189,
        notHelpful: 8,
        tags: ["orçamento", "documentos", "primeiros-passos"],
        popular: true,
      },
      {
        id: "3",
        question: "Como funciona o período de teste gratuito?",
        answer: "O teste gratuito dura 30 dias e inclui acesso a todas as funcionalidades da Orbizy. Não é necessário cartão de crédito para começar. Após o período, você pode escolher um plano pago ou continuar com o plano gratuito limitado.",
        category: "billing",
        helpful: 167,
        notHelpful: 5,
        tags: ["teste-gratuito", "planos", "gratuito"],
        popular: true,
      },
      {
        id: "4",
        question: "Posso usar a Orbizy no meu celular?",
        answer: "Sim! A Orbizy tem aplicativos nativos para iOS e Android, além da versão web responsiva. Baixe o app na App Store ou Google Play e faça login com sua conta existente.",
        category: "mobile",
        helpful: 134,
        notHelpful: 3,
        tags: ["mobile", "app", "celular"],
        popular: true,
      },
      {
        id: "5",
        question: "Como importar meus dados de outro sistema?",
        answer: "Oferecemos importação de dados de planilhas Excel/CSV e principais sistemas do mercado. Acesse 'Configurações' > 'Importar Dados' ou entre em contato com nosso suporte para migração assistida gratuita.",
        category: "getting-started",
        helpful: 98,
        notHelpful: 7,
        tags: ["importação", "migração", "dados"],
        popular: true,
      },
      {
        id: "6",
        question: "Como configurar notificações por email?",
        answer: "Vá em 'Configurações' > 'Notificações' e escolha quais eventos você quer receber por email: novos clientes, vencimentos, pagamentos recebidos, etc. Você pode personalizar completamente suas preferências.",
        category: "account",
        helpful: 76,
        notHelpful: 4,
        tags: ["notificações", "email", "configurações"],
      },
      {
        id: "7",
        question: "Meus dados estão seguros na Orbizy?",
        answer: "Sim! Usamos criptografia SSL 256-bits, backups automáticos, servidores seguros e somos certificados LGPD. Seus dados são protegidos com os mais altos padrões de segurança da indústria.",
        category: "security",
        helpful: 145,
        notHelpful: 2,
        tags: ["segurança", "dados", "privacidade"],
      },
      {
        id: "8",
        question: "Como gerar relatórios financeiros?",
        answer: "Acesse 'Relatórios' > 'Financeiro' e escolha o tipo de relatório: fluxo de caixa, receitas x despesas, inadimplência, etc. Você pode filtrar por período, cliente, categoria e exportar em PDF ou Excel.",
        category: "financial",
        helpful: 112,
        notHelpful: 6,
        tags: ["relatórios", "financeiro", "análise"],
      },
  ]

  const enFAQs: FAQItem[] = [
    {
      id: "1",
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. Go to 'My Account' > 'Plans and Subscriptions' > 'Cancel Subscription'. Cancellation will be effective at the end of the already paid period.",
      category: "billing",
      helpful: 245,
      notHelpful: 12,
      tags: ["cancellation", "subscription", "account"],
      popular: true,
    },
    {
        id: "2",
        question: "How to create my first quote?",
        answer: "To create a quote: 1) Go to 'Documents' > 'Quotes', 2) Click 'New Quote', 3) Fill in the client data, 4) Add products/services, 5) Review and send. You can also use our ready-made templates to speed up the process.",
        category: "documents",
        helpful: 189,
        notHelpful: 8,
        tags: ["quote", "documents", "getting-started"],
        popular: true,
      },
      {
        id: "3",
        question: "How does the free trial work?",
        answer: "The free trial lasts 30 days and includes access to all Orbizy features. No credit card is required to start. After the period, you can choose a paid plan or continue with the limited free plan.",
        category: "billing",
        helpful: 167,
        notHelpful: 5,
        tags: ["free-trial", "plans", "free"],
        popular: true,
      },
      {
        id: "4",
        question: "Can I use Orbizy on my phone?",
        answer: "Yes! Orbizy has native apps for iOS and Android, plus the responsive web version. Download the app from the App Store or Google Play and log in with your existing account.",
        category: "mobile",
        helpful: 134,
        notHelpful: 3,
        tags: ["mobile", "app", "phone"],
        popular: true,
      },
      {
        id: "5",
        question: "How to import my data from another system?",
        answer: "We offer data import from Excel/CSV spreadsheets and leading market systems. Go to 'Settings' > 'Import Data' or contact our support for free assisted migration.",
        category: "getting-started",
        helpful: 98,
        notHelpful: 7,
        tags: ["import", "migration", "data"],
        popular: true,
      },
      {
        id: "6",
        question: "How to configure email notifications?",
        answer: "Go to 'Settings' > 'Notifications' and choose which events you want to receive by email: new customers, expirations, payments received, etc. You can completely customize your preferences.",
        category: "account",
        helpful: 76,
        notHelpful: 4,
        tags: ["notifications", "email", "settings"],
      },
      {
        id: "7",
        question: "Is my data safe with Orbizy?",
        answer: "Yes! We use 256-bit SSL encryption, automatic backups, secure servers and are LGPD certified. Your data is protected with the highest security standards in the industry.",
        category: "security",
        helpful: 145,
        notHelpful: 2,
        tags: ["security", "data", "privacy"],
      },
      {
        id: "8",
        question: "How to generate financial reports?",
        answer: "Go to 'Reports' > 'Financial' and choose the report type: cash flow, revenue x expenses, delinquency, etc. You can filter by period, customer, category and export in PDF or Excel.",
        category: "financial",
        helpful: 112,
        notHelpful: 6,
        tags: ["reports", "financial", "analysis"],
      },
  ]

  const faqs = locale === "pt" ? ptFAQs : enFAQs;

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleHelpful = (faqId: string, helpful: boolean) => {
    console.log(`FAQ ${faqId} marked as ${helpful ? "helpful" : "not helpful"}`)
  }

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
            <HelpCircle className="w-4 h-4 mr-1" />
            {dict.help.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.help.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {dict.help.hero.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={dict.help.hero.placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white text-black"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-all ${action.color} text-white border-0`}
                asChild
              >
                <Link href={action.href}>
                  {action.icon}
                  <div className="text-center">
                    <div className="font-semibold">{action.title}</div>
                    <div className="text-xs opacity-90">
                      {action.description}
                    </div>
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {dict.help.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.help.faq.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                {dict.help.faq.all}
              </Button>
              {helpCategories
                .filter((cat) =>
                  faqs.some((faq) => faq.category === cat.id)
                )
                .map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    {faq.popular && (
                      <Badge className="bg-yellow-100 text-yellow-700">
                        <Star className="h-3 w-3 mr-1" />
                        {dict.help.faq.popular}
                      </Badge>
                    )}
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Feedback */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {dict.help.faq.helpful_question}
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleHelpful(faq.id, true)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {dict.help.faq.helpful_yes} ({faq.helpful})
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleHelpful(faq.id, false)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        {dict.help.faq.helpful_no} ({faq.notHelpful})
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {dict.help.faq.empty_title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {dict.help.faq.empty_subtitle}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                {dict.help.faq.empty_button}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.help.categories.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.help.categories.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {helpCategories.map((category) => (
              <Card
                key={category.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    {category.popular && (
                      <Badge variant="outline" className="text-xs mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {dict.help.faq.popular}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {category.articleCount} {dict.help.categories.articles}
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}
