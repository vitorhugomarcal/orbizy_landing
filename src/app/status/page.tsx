"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Database,
  Eye,
  Globe,
  HardDrive,
  Info,
  Monitor,
  RefreshCw,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type ServiceStatus =
  | "operational"
  | "degraded"
  | "partial"
  | "major"
  | "maintenance"

interface Service {
  id: string
  name: string
  description: string
  status: ServiceStatus
  uptime: number
  responseTime: number
  icon: React.ReactNode
  lastIncident?: string
}

interface Incident {
  id: string
  title: string
  description: string
  status: "investigating" | "identified" | "monitoring" | "resolved"
  severity: "low" | "medium" | "high" | "critical"
  startTime: string
  resolvedTime?: string
  updates: {
    time: string
    message: string
    status: string
  }[]
}

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const services: Service[] = [
    {
      id: "web-app",
      name: "Aplicação Web",
      description: "Interface principal da plataforma Orbizy",
      status: "operational",
      uptime: 99.98,
      responseTime: 245,
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: "mobile-app",
      name: "Aplicativo Mobile",
      description: "Apps iOS e Android",
      status: "operational",
      uptime: 99.95,
      responseTime: 180,
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: "api",
      name: "API Principal",
      description: "Serviços de backend e integração",
      status: "degraded",
      uptime: 99.85,
      responseTime: 420,
      icon: <Server className="h-6 w-6" />,
    },
    {
      id: "database",
      name: "Banco de Dados",
      description: "Armazenamento e processamento de dados",
      status: "operational",
      uptime: 99.99,
      responseTime: 95,
      icon: <Database className="h-6 w-6" />,
    },
    {
      id: "auth",
      name: "Sistema de Autenticação",
      description: "Login e segurança de usuários",
      status: "operational",
      uptime: 99.97,
      responseTime: 156,
      icon: <Shield className="h-6 w-6" />,
    },
    {
      id: "payments",
      name: "Sistema de Pagamentos",
      description: "Processamento de transações",
      status: "operational",
      uptime: 99.92,
      responseTime: 312,
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: "notifications",
      name: "Notificações",
      description: "E-mails, SMS e push notifications",
      status: "partial",
      uptime: 98.75,
      responseTime: 890,
      icon: <Bell className="h-6 w-6" />,
    },
    {
      id: "cdn",
      name: "CDN e Assets",
      description: "Distribuição de conteúdo global",
      status: "operational",
      uptime: 99.99,
      responseTime: 45,
      icon: <Wifi className="h-6 w-6" />,
    },
  ]

  const incidents: Incident[] = [
    {
      id: "1",
      title: "Lentidão na API Principal",
      description:
        "Alguns usuários podem experimentar lentidão ao carregar dados",
      status: "monitoring",
      severity: "medium",
      startTime: "2025-01-28T14:30:00Z",
      updates: [
        {
          time: "2025-01-28T15:45:00Z",
          message: "Implementamos correções e estamos monitorando a situação",
          status: "monitoring",
        },
        {
          time: "2025-01-28T14:45:00Z",
          message:
            "Identificamos a causa raiz e estamos trabalhando na correção",
          status: "identified",
        },
        {
          time: "2025-01-28T14:30:00Z",
          message: "Investigando relatórios de lentidão na API",
          status: "investigating",
        },
      ],
    },
  ]

  const maintenanceScheduled = [
    {
      id: "1",
      title: "Manutenção Programada - Banco de Dados",
      description: "Atualização de segurança e otimização de performance",
      scheduledTime: "2025-02-01T02:00:00Z",
      duration: "2 horas",
      impact: "Indisponibilidade parcial durante o período",
    },
  ]

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-700 border-green-200"
      case "degraded":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "partial":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "major":
        return "bg-red-100 text-red-700 border-red-200"
      case "maintenance":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusIcon = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4" />
      case "degraded":
        return <AlertTriangle className="h-4 w-4" />
      case "partial":
        return <AlertCircle className="h-4 w-4" />
      case "major":
        return <XCircle className="h-4 w-4" />
      case "maintenance":
        return <Clock className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return "Operacional"
      case "degraded":
        return "Degradado"
      case "partial":
        return "Parcial"
      case "major":
        return "Indisponível"
      case "maintenance":
        return "Manutenção"
      default:
        return "Desconhecido"
    }
  }

  const getOverallStatus = () => {
    const hasOperational = services.some((s) => s.status === "operational")
    const hasDegraded = services.some((s) => s.status === "degraded")
    const hasPartial = services.some((s) => s.status === "partial")
    const hasMajor = services.some((s) => s.status === "major")
    const hasMaintenance = services.some((s) => s.status === "maintenance")

    if (hasMajor) return { status: "major", text: "Problemas Críticos" }
    if (hasPartial) return { status: "partial", text: "Problemas Parciais" }
    if (hasDegraded)
      return { status: "degraded", text: "Performance Degradada" }
    if (hasMaintenance)
      return { status: "maintenance", text: "Manutenção Programada" }
    return { status: "operational", text: "Todos os Sistemas Operacionais" }
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simular atualização
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const overallStatus = getOverallStatus()
  const averageUptime =
    services.reduce((acc, service) => acc + service.uptime, 0) / services.length

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Activity className="w-4 h-4 mr-1" />
            Monitoramento em Tempo Real
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Status do Sistema
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Acompanhe o status de todos os serviços da Orbizy em tempo real
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card
            className={`p-8 border-2 ${getStatusColor(
              overallStatus.status as ServiceStatus
            )}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/50 rounded-full">
                  {getStatusIcon(overallStatus.status as ServiceStatus)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{overallStatus.text}</h2>
                  <p className="text-sm opacity-80">
                    Última atualização: {lastUpdated.toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {averageUptime.toFixed(2)}%
                  </div>
                  <div className="text-sm opacity-80">Uptime Médio</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="bg-white/20 border-white/30 hover:bg-white/30"
                >
                  <RefreshCw
                    className={`w-4 h-4 mr-2 ${
                      isRefreshing ? "animate-spin" : ""
                    }`}
                  />
                  Atualizar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Status dos Serviços</h2>
            <p className="text-lg text-muted-foreground">
              Monitoramento detalhado de cada componente da plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {service.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(service.status)}>
                      {getStatusIcon(service.status)}
                      <span className="ml-1">
                        {getStatusText(service.status)}
                      </span>
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Uptime
                        </span>
                        <span className="font-semibold">{service.uptime}%</span>
                      </div>
                      <Progress value={service.uptime} className="h-2" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Tempo de Resposta
                        </span>
                        <span className="font-semibold">
                          {service.responseTime}ms
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div
                          className={`h-full rounded-full ${
                            service.responseTime < 200
                              ? "bg-green-500"
                              : service.responseTime < 500
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{
                            width: `${Math.min(
                              ((1000 - service.responseTime) / 1000) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {service.lastIncident && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center text-sm text-yellow-800">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Último incidente: {service.lastIncident}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Incidents */}
      {incidents.length > 0 && (
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Incidentes Ativos</h2>
              <p className="text-lg text-muted-foreground">
                Problemas que estamos investigando ou resolvendo
              </p>
            </div>

            <div className="space-y-6">
              {incidents.map((incident) => (
                <Card key={incident.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {incident.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {incident.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={
                            incident.severity === "critical"
                              ? "bg-red-100 text-red-700"
                              : incident.severity === "high"
                              ? "bg-orange-100 text-orange-700"
                              : incident.severity === "medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {incident.severity === "critical"
                            ? "Crítico"
                            : incident.severity === "high"
                            ? "Alto"
                            : incident.severity === "medium"
                            ? "Médio"
                            : "Baixo"}
                        </Badge>
                        <Badge variant="outline">
                          {incident.status === "investigating"
                            ? "Investigando"
                            : incident.status === "identified"
                            ? "Identificado"
                            : incident.status === "monitoring"
                            ? "Monitorando"
                            : "Resolvido"}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Iniciado:{" "}
                      {new Date(incident.startTime).toLocaleString("pt-BR")}
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <h4 className="font-medium">Atualizações:</h4>
                    {incident.updates.map((update, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <div className="p-1 bg-blue-100 rounded-full mt-1">
                          <Info className="w-3 h-3 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{update.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(update.time).toLocaleString("pt-BR")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scheduled Maintenance */}
      {maintenanceScheduled.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Manutenções Programadas
              </h2>
              <p className="text-lg text-muted-foreground">
                Próximas manutenções que podem afetar os serviços
              </p>
            </div>

            <div className="space-y-4">
              {maintenanceScheduled.map((maintenance) => (
                <Card
                  key={maintenance.id}
                  className="p-6 border-blue-200 bg-blue-50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {maintenance.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {maintenance.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Agendado para:</span>
                          <div>
                            {new Date(maintenance.scheduledTime).toLocaleString(
                              "pt-BR"
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">Duração estimada:</span>
                          <div>{maintenance.duration}</div>
                        </div>
                        <div>
                          <span className="font-medium">Impacto:</span>
                          <div>{maintenance.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Métricas de Performance</h2>
            <p className="text-lg text-muted-foreground">
              Dados históricos dos últimos 30 dias
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Uptime Geral</h3>
              <div className="text-2xl font-bold text-green-600">99.94%</div>
              <p className="text-sm text-muted-foreground">Últimos 30 dias</p>
            </Card>

            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
              <div className="text-2xl font-bold text-blue-600">245ms</div>
              <p className="text-sm text-muted-foreground">Média global</p>
            </Card>

            <Card className="p-6 text-center">
              <HardDrive className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Throughput</h3>
              <div className="text-2xl font-bold text-purple-600">1.2M</div>
              <p className="text-sm text-muted-foreground">Requests/dia</p>
            </Card>

            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Incidentes</h3>
              <div className="text-2xl font-bold text-orange-600">2</div>
              <p className="text-sm text-muted-foreground">Este mês</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Receba Notificações</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Seja notificado sobre incidentes e manutenções que podem afetar
              seu uso da plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Bell className="w-5 h-5 mr-2" />
                Inscrever-se nas Notificações
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">
                  <Eye className="w-5 h-5 mr-2" />
                  Reportar Problema
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>
                Dados atualizados automaticamente a cada 30 segundos •
                <Link
                  href="/contato"
                  className="text-primary hover:underline ml-1"
                >
                  Reportar Problema
                </Link>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/status/history" className="hover:text-primary">
                Histórico
              </Link>
              <Link href="/status/api" className="hover:text-primary">
                Status API
              </Link>
              <Link href="/status/rss" className="hover:text-primary">
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
