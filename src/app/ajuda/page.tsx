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

export default function AjudaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const helpCategories: HelpCategory[] = [
    {
      id: "getting-started",
      name: "Primeiros Passos",
      description: "Configure sua conta e comece a usar",
      icon: <Zap className="h-6 w-6" />,
      articleCount: 15,
      color: "bg-green-100 text-green-700",
      popular: true,
    },
    {
      id: "account",
      name: "Conta e Perfil",
      description: "Gerencie sua conta e configurações",
      icon: <Settings className="h-6 w-6" />,
      articleCount: 12,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "billing",
      name: "Pagamentos e Planos",
      description: "Assinaturas, faturas e pagamentos",
      icon: <CreditCard className="h-6 w-6" />,
      articleCount: 18,
      color: "bg-purple-100 text-purple-700",
      popular: true,
    },
    {
      id: "clients",
      name: "Gestão de Clientes",
      description: "Organize e gerencie sua base de clientes",
      icon: <Users className="h-6 w-6" />,
      articleCount: 22,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "documents",
      name: "Documentos",
      description: "Orçamentos, contratos e notas fiscais",
      icon: <FileText className="h-6 w-6" />,
      articleCount: 25,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "financial",
      name: "Controle Financeiro",
      description: "Receitas, despesas e relatórios",
      icon: <BarChart3 className="h-6 w-6" />,
      articleCount: 20,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "scheduling",
      name: "Agendamentos",
      description: "Organize compromissos e serviços",
      icon: <Calendar className="h-6 w-6" />,
      articleCount: 14,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "inventory",
      name: "Estoque",
      description: "Controle de produtos e serviços",
      icon: <Package className="h-6 w-6" />,
      articleCount: 16,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "mobile",
      name: "App Mobile",
      description: "Use a Orbizy no seu smartphone",
      icon: <Smartphone className="h-6 w-6" />,
      articleCount: 10,
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      id: "integrations",
      name: "Integrações",
      description: "Conecte com outras ferramentas",
      icon: <Globe className="h-6 w-6" />,
      articleCount: 8,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "security",
      name: "Segurança",
      description: "Proteção de dados e privacidade",
      icon: <Shield className="h-6 w-6" />,
      articleCount: 11,
      color: "bg-red-100 text-red-700",
    },
    {
      id: "troubleshooting",
      name: "Solução de Problemas",
      description: "Resolva problemas técnicos",
      icon: <AlertCircle className="h-6 w-6" />,
      articleCount: 19,
      color: "bg-amber-100 text-amber-700",
    },
  ]

  const quickActions: QuickAction[] = [
    {
      id: "contact",
      title: "Falar com Suporte",
      description: "Entre em contato com nossa equipe",
      icon: <MessageCircle className="h-6 w-6" />,
      href: "/contato",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "tutorials",
      title: "Ver Tutoriais",
      description: "Aprenda com vídeos e guias",
      icon: <PlayCircle className="h-6 w-6" />,
      href: "/tutoriais",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: "status",
      title: "Status do Sistema",
      description: "Verifique se há problemas técnicos",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/status",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "community",
      title: "Comunidade",
      description: "Conecte-se com outros usuários",
      icon: <Users className="h-6 w-6" />,
      href: "#community",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  const popularFAQs: FAQItem[] = [
    {
      id: "1",
      question: "Como faço para cancelar minha assinatura?",
      answer:
        "Você pode cancelar sua assinatura a qualquer momento através das configurações da conta. Acesse 'Minha Conta' > 'Planos e Assinaturas' > 'Cancelar Assinatura'. O cancelamento será efetivo no final do período já pago.",
      category: "billing",
      helpful: 245,
      notHelpful: 12,
      tags: ["cancelamento", "assinatura", "conta"],
      popular: true,
    },
    {
      id: "2",
      question: "Como criar meu primeiro orçamento?",
      answer:
        "Para criar um orçamento: 1) Acesse 'Documentos' > 'Orçamentos', 2) Clique em 'Novo Orçamento', 3) Preencha os dados do cliente, 4) Adicione produtos/serviços, 5) Revise e envie. Você também pode usar nossos modelos prontos para agilizar o processo.",
      category: "documents",
      helpful: 189,
      notHelpful: 8,
      tags: ["orçamento", "documentos", "primeiros-passos"],
      popular: true,
    },
    {
      id: "3",
      question: "Como funciona o período de teste gratuito?",
      answer:
        "O teste gratuito dura 30 dias e inclui acesso a todas as funcionalidades da Orbizy. Não é necessário cartão de crédito para começar. Após o período, você pode escolher um plano pago ou continuar com o plano gratuito limitado.",
      category: "billing",
      helpful: 167,
      notHelpful: 5,
      tags: ["teste-gratuito", "planos", "gratuito"],
      popular: true,
    },
    {
      id: "4",
      question: "Posso usar a Orbizy no meu celular?",
      answer:
        "Sim! A Orbizy tem aplicativos nativos para iOS e Android, além da versão web responsiva. Baixe o app na App Store ou Google Play e faça login com sua conta existente.",
      category: "mobile",
      helpful: 134,
      notHelpful: 3,
      tags: ["mobile", "app", "celular"],
      popular: true,
    },
    {
      id: "5",
      question: "Como importar meus dados de outro sistema?",
      answer:
        "Oferecemos importação de dados de planilhas Excel/CSV e principais sistemas do mercado. Acesse 'Configurações' > 'Importar Dados' ou entre em contato com nosso suporte para migração assistida gratuita.",
      category: "getting-started",
      helpful: 98,
      notHelpful: 7,
      tags: ["importação", "migração", "dados"],
      popular: true,
    },
    {
      id: "6",
      question: "Como configurar notificações por email?",
      answer:
        "Vá em 'Configurações' > 'Notificações' e escolha quais eventos você quer receber por email: novos clientes, vencimentos, pagamentos recebidos, etc. Você pode personalizar completamente suas preferências.",
      category: "account",
      helpful: 76,
      notHelpful: 4,
      tags: ["notificações", "email", "configurações"],
    },
    {
      id: "7",
      question: "Meus dados estão seguros na Orbizy?",
      answer:
        "Sim! Usamos criptografia SSL 256-bits, backups automáticos, servidores seguros e somos certificados LGPD. Seus dados são protegidos com os mais altos padrões de segurança da indústria.",
      category: "security",
      helpful: 145,
      notHelpful: 2,
      tags: ["segurança", "dados", "privacidade"],
    },
    {
      id: "8",
      question: "Como gerar relatórios financeiros?",
      answer:
        "Acesse 'Relatórios' > 'Financeiro' e escolha o tipo de relatório: fluxo de caixa, receitas x despesas, inadimplência, etc. Você pode filtrar por período, cliente, categoria e exportar em PDF ou Excel.",
      category: "financial",
      helpful: 112,
      notHelpful: 6,
      tags: ["relatórios", "financeiro", "análise"],
    },
  ]

  const filteredFAQs = popularFAQs.filter((faq) => {
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
    // Implementar lógica de feedback
    console.log(`FAQ ${faqId} marcado como ${helpful ? "útil" : "não útil"}`)
  }

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
            <HelpCircle className="w-4 h-4 mr-1" />
            Central de Ajuda
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como podemos ajudar você?
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Encontre respostas rápidas, guias detalhados e soluções para todas
            as suas dúvidas
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Digite sua dúvida aqui..."
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
              Perguntas Mais Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              As dúvidas mais comuns dos nossos usuários
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
                Todas
              </Button>
              {helpCategories
                .filter((cat) =>
                  popularFAQs.some((faq) => faq.category === cat.id)
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
                        Popular
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {faq.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Feedback */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Esta resposta foi útil?
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleHelpful(faq.id, true)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Sim ({faq.helpful})
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleHelpful(faq.id, false)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        Não ({faq.notHelpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="h-4 w-4" />
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
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente usar outros termos de busca ou explore as categorias
                abaixo
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Limpar Busca
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-lg text-muted-foreground">
              Encontre ajuda específica para cada área da Orbizy
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
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {category.articleCount} artigos
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos Adicionais</h2>
            <p className="text-lg text-muted-foreground">
              Outras formas de obter ajuda e aprender sobre a Orbizy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Video className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tutoriais em Vídeo</h3>
              <p className="text-muted-foreground mb-4">
                Aprenda com nossos vídeos passo a passo
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/tutoriais">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Ver Tutoriais
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Download className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Guias em PDF</h3>
              <p className="text-muted-foreground mb-4">
                Baixe nossos manuais completos
              </p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Baixar Guias
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Comunidade</h3>
              <p className="text-muted-foreground mb-4">
                Conecte-se com outros usuários
              </p>
              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Participar
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Não encontrou o que procurava?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa equipe de suporte está pronta para ajudar você
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <MessageCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Chat ao Vivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Seg-Sex: 8h às 18h
                  </p>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <p className="text-sm text-muted-foreground">
                    Resposta em até 4h
                  </p>
                </div>
                <div className="text-center">
                  <Phone className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-sm text-muted-foreground">
                    Clientes Premium
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contato">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Suporte
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/status">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Ver Status do Sistema
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ajude-nos a Melhorar</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sua opinião é muito importante para aprimorarmos nossa central de
            ajuda
          </p>

          <Card className="p-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">
                  Como você avalia nossa central de ajuda?
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant="ghost"
                      size="sm"
                      className="p-1"
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium mb-2">
                  Sugestões ou comentários:
                </label>
                <textarea
                  className="w-full p-3 border rounded-md resize-none"
                  rows={3}
                  placeholder="Conte-nos como podemos melhorar..."
                />
              </div>

              <Button className="w-full">
                <Lightbulb className="w-4 h-4 mr-2" />
                Enviar Feedback
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
