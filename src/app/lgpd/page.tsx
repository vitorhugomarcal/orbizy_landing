import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Download,
  Edit,
  Eye,
  FileText,
  Lock,
  Mail,
  Shield,
  Trash2,
  UserCheck,
} from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LGPD - Lei Geral de Proteção de Dados | Orbizy",
  description:
    "Conheça como a Orbizy protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD). Transparência total sobre coleta, uso e proteção de informações.",
  keywords:
    "LGPD, proteção de dados, privacidade, dados pessoais, Orbizy, lei geral proteção dados",
  robots: "index, follow",
}

export default function LGPDPage() {
  const dataTypes = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Dados de Identificação",
      description: "Nome, e-mail, telefone, CPF/CNPJ",
      purpose: "Criação e gerenciamento da conta",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Dados de Uso",
      description: "Informações sobre como você usa a plataforma",
      purpose: "Melhoria dos serviços e suporte",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Dados do Negócio",
      description: "Informações da empresa, clientes, produtos",
      purpose: "Funcionamento da plataforma de gestão",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Dados Técnicos",
      description: "IP, navegador, dispositivo utilizado",
      purpose: "Segurança e otimização técnica",
    },
  ]

  const rights = [
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Acesso",
      description: "Solicitar informações sobre seus dados pessoais",
    },
    {
      icon: <Edit className="h-5 w-5" />,
      title: "Correção",
      description: "Corrigir dados incompletos ou incorretos",
    },
    {
      icon: <Trash2 className="h-5 w-5" />,
      title: "Exclusão",
      description: "Solicitar a remoção de dados pessoais",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Portabilidade",
      description: "Receber seus dados em formato estruturado",
    },
  ]

  const securityMeasures = [
    "Criptografia SSL/TLS 256-bits em todas as transmissões",
    "Backup automático com redundância geográfica",
    "Controle de acesso baseado em funções (RBAC)",
    "Monitoramento 24/7 de atividades suspeitas",
    "Auditoria regular de segurança por terceiros",
    "Política de senhas fortes obrigatória",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Shield className="w-4 h-4 mr-1" />
            Proteção de Dados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lei Geral de Proteção de Dados
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparência total sobre como coletamos, usamos e protegemos seus
            dados pessoais na Orbizy
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nosso Compromisso com a LGPD
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Orbizy está totalmente comprometida com a proteção dos seus
                  dados pessoais e em conformidade com a Lei Geral de Proteção
                  de Dados (Lei nº 13.709/2018). Implementamos medidas técnicas
                  e organizacionais rigorosas para garantir a segurança,
                  privacidade e transparência no tratamento de todas as
                  informações pessoais.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dados que Coletamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coletamos apenas os dados necessários para fornecer nossos
              serviços com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    {type.description}
                  </p>
                  <div className="flex items-center text-sm">
                    <Badge variant="outline" className="text-xs">
                      Finalidade: {type.purpose}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Basis Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Base Legal para Tratamento
          </h2>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Execução de Contrato
                  </h3>
                  <p className="text-muted-foreground">
                    Tratamos seus dados para cumprir o contrato de prestação de
                    serviços da plataforma Orbizy, incluindo criação de conta,
                    processamento de pagamentos e suporte técnico.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Consentimento</h3>
                  <p className="text-muted-foreground">
                    Para comunicações de marketing, newsletter e funcionalidades
                    opcionais, solicitamos seu consentimento expresso, que pode
                    ser retirado a qualquer momento.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Legítimo Interesse
                  </h3>
                  <p className="text-muted-foreground">
                    Para melhorias na plataforma, prevenção de fraudes e
                    segurança dos dados, baseamos o tratamento em nosso legítimo
                    interesse, sempre respeitando seus direitos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Seus Direitos como Titular
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A LGPD garante diversos direitos sobre seus dados pessoais. Veja
              como exercê-los na Orbizy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {right.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{right.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {right.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Exercer Meus Direitos
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Entre em contato conosco para exercer qualquer um dos seus
              direitos
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medidas de Segurança</h2>
            <p className="text-lg text-muted-foreground">
              Implementamos as melhores práticas de segurança para proteger seus
              dados
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-primary" />
                  Proteções Técnicas
                </h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(0, 3).map((measure, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Proteções Organizacionais
                </h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(3).map((measure, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Retenção de Dados
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dados de Conta</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Mantidos enquanto a conta estiver ativa
              </p>
              <Badge variant="outline">Ativa + 5 anos</Badge>
            </Card>

            <Card className="p-6 text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dados de Uso</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Logs e métricas para melhoria dos serviços
              </p>
              <Badge variant="outline">24 meses</Badge>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dados Fiscais</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Documentos para cumprimento legal
              </p>
              <Badge variant="outline">5 anos</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Resposta a Incidentes
                </h2>
                <p className="text-gray-700 mb-4">
                  Em caso de violação de dados pessoais, seguimos rigorosamente
                  o protocolo da LGPD:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Notificação à ANPD em até 72 horas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Comunicação aos titulares afetados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Medidas imediatas de contenção
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Relatório detalhado do incidente
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encarregado de Dados (DPO)
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nosso Encarregado de Proteção de Dados está disponível para
            esclarecer dúvidas sobre LGPD
          </p>

          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold">dpo@orbizy.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Resposta em até 15 dias úteis</span>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">
                Para solicitações relacionadas aos seus direitos como titular de
                dados pessoais, entre em contato com nosso DPO através do e-mail
                acima.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Última atualização:</strong> Janeiro de 2025 •
            <Link
              href="/termos-de-uso-e-privacidade"
              className="text-primary hover:underline ml-1"
            >
              Ver Política de Privacidade Completa
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
