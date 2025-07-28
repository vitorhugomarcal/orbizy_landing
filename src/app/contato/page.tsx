"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Bug,
  CheckCircle,
  Clock,
  CreditCard,
  ExternalLink,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    priority: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail Geral",
      description: "Para dúvidas gerais e informações",
      contact: "contato@orbizy.com",
      response: "Até 24 horas",
      color: "bg-blue-100 text-blue-700",
      href: "mailto:contato@orbizy.com",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Suporte Técnico",
      description: "Problemas técnicos e bugs",
      contact: "suporte@orbizy.com",
      response: "Até 4 horas",
      color: "bg-green-100 text-green-700",
      href: "mailto:suporte@orbizy.com",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Vendas",
      description: "Planos, preços e demonstrações",
      contact: "vendas@orbizy.com",
      response: "Até 2 horas",
      color: "bg-purple-100 text-purple-700",
      href: "mailto:vendas@orbizy.com",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Parcerias",
      description: "Oportunidades de negócio",
      contact: "parcerias@orbizy.com",
      response: "Até 48 horas",
      color: "bg-orange-100 text-orange-700",
      href: "mailto:parcerias@orbizy.com",
    },
  ]

  const supportChannels = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Chat ao Vivo",
      description: "Atendimento instantâneo durante horário comercial",
      availability: "Seg-Sex: 8h às 18h",
      action: "Iniciar Chat",
      href: "#chat",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      description: "Suporte por telefone para clientes premium",
      availability: "(11) 4000-0000",
      action: "Ligar Agora",
      href: "tel:+551140000000",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Central de Ajuda",
      description: "Artigos, tutoriais e perguntas frequentes",
      availability: "Disponível 24/7",
      action: "Acessar Central",
      href: "/ajuda",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Status do Sistema",
      description: "Acompanhe o status dos nossos serviços",
      availability: "Monitoramento em tempo real",
      action: "Ver Status",
      href: "/status",
    },
  ]

  const faqItems = [
    {
      question: "Como posso cancelar minha assinatura?",
      answer:
        "Você pode cancelar a qualquer momento através das configurações da conta ou entrando em contato conosco.",
    },
    {
      question: "Vocês oferecem treinamento?",
      answer:
        "Sim! Oferecemos treinamento gratuito para todos os planos pagos e materiais de apoio na central de ajuda.",
    },
    {
      question: "Como funciona o período de teste?",
      answer:
        "Você tem 30 dias para testar todas as funcionalidades sem compromisso. Não é necessário cartão de crédito.",
    },
    {
      question: "Posso migrar dados de outro sistema?",
      answer:
        "Sim! Nossa equipe oferece suporte completo para migração de dados de planilhas e outros sistemas.",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aqui você implementaria o envio real do formulário
      console.log("Formulário enviado:", formData)

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        priority: "normal",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

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
            <MessageSquare className="w-4 h-4 mr-1" />
            Atendimento Especializado
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como Podemos Ajudar?
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você. Escolha o canal mais
            adequado para sua necessidade
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canais de Atendimento</h2>
            <p className="text-lg text-muted-foreground">
              Escolha a melhor forma de entrar em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow text-center group cursor-pointer"
              >
                <Link href={method.href} className="block">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${method.color} group-hover:scale-110 transition-transform`}
                    >
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <div className="font-medium text-primary group-hover:underline">
                      {method.contact}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {method.response}
                    </Badge>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Envie sua Mensagem</h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato
            </p>
          </div>

          <Card className="p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">
                    Mensagem enviada com sucesso!
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Nossa equipe entrará em contato em breve.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-800">
                    Erro ao enviar mensagem
                  </span>
                </div>
                <p className="text-sm text-red-700 mt-1">
                  Tente novamente ou entre em contato por e-mail.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    placeholder="Nome da sua empresa"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="suporte">
                        <div className="flex items-center">
                          <Headphones className="w-4 h-4 mr-2" />
                          Suporte Técnico
                        </div>
                      </SelectItem>
                      <SelectItem value="vendas">
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Vendas e Planos
                        </div>
                      </SelectItem>
                      <SelectItem value="bug">
                        <div className="flex items-center">
                          <Bug className="w-4 h-4 mr-2" />
                          Reportar Bug
                        </div>
                      </SelectItem>
                      <SelectItem value="sugestao">
                        <div className="flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          Sugestão
                        </div>
                      </SelectItem>
                      <SelectItem value="parceria">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Parcerias
                        </div>
                      </SelectItem>
                      <SelectItem value="outro">
                        <div className="flex items-center">
                          <HelpCircle className="w-4 h-4 mr-2" />
                          Outro
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) =>
                      handleInputChange("priority", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">
                        <Badge variant="outline" className="text-green-600">
                          Baixa
                        </Badge>
                      </SelectItem>
                      <SelectItem value="normal">
                        <Badge variant="outline" className="text-blue-600">
                          Normal
                        </Badge>
                      </SelectItem>
                      <SelectItem value="alta">
                        <Badge variant="outline" className="text-orange-600">
                          Alta
                        </Badge>
                      </SelectItem>
                      <SelectItem value="urgente">
                        <Badge variant="outline" className="text-red-600">
                          Urgente
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Descreva sua dúvida ou solicitação em detalhes..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
                <p className="text-xs text-muted-foreground">
                  Quanto mais detalhes você fornecer, melhor poderemos ajudá-lo
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded"
                  required
                  disabled={isSubmitting}
                />
                <Label htmlFor="privacy" className="text-sm">
                  Concordo com a{" "}
                  <Link
                    href="/termos-de-uso-e-privacidade"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </Link>{" "}
                  e autorizo o uso dos meus dados para responder esta
                  solicitação
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Outros Canais de Suporte
            </h2>
            <p className="text-lg text-muted-foreground">
              Múltiplas formas de obter ajuda quando precisar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {channel.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {channel.description}
                </p>
                <div className="text-sm font-medium text-primary mb-4">
                  {channel.availability}
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={channel.href}>
                    {channel.action}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Talvez sua dúvida já tenha sido respondida
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-semibold mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  {item.question}
                </h3>
                <p className="text-muted-foreground pl-7">{item.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/faq">
                Ver Todas as Perguntas
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Informações da Empresa</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-semibold text-lg mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Endereço
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Orbizy Tecnologia Ltda.</p>
                <p>Rua das Inovações, 123 - Sala 456</p>
                <p>Vila Olímpia - São Paulo/SP</p>
                <p>CEP: 04551-000</p>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <Link href="tel:+551140000000" className="hover:underline">
                    (11) 4000-0000
                  </Link>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <Link
                    href="mailto:contato@orbizy.com"
                    className="hover:underline"
                  >
                    contato@orbizy.com
                  </Link>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-primary" />
                  <Link href="https://orbizy.com" className="hover:underline">
                    www.orbizy.com
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-lg mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Horários de Atendimento
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Suporte Técnico</span>
                  <Badge className="bg-green-100 text-green-700">24/7</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Chat ao Vivo</span>
                  <span className="text-sm">Seg-Sex: 8h às 18h</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Vendas</span>
                  <span className="text-sm">Seg-Sex: 9h às 17h</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium">Telefone</span>
                  <span className="text-sm">Seg-Sex: 8h às 18h</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">
                      Atendimento Prioritário
                    </p>
                    <p className="text-sm text-yellow-700">
                      Clientes dos planos Profissional e Empresarial têm
                      atendimento prioritário
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Guarantee */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Garantia de Resposta</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Comprometemo-nos a responder todas as solicitações dentro dos
              prazos estabelecidos. Sua satisfação é nossa prioridade!
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resposta garantida</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Suporte especializado</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Atendimento humanizado</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
