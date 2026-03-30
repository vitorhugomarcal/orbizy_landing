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
import { motion } from "motion/react"

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

export function StatusContent({ dict, locale }: { dict: any; locale: string }) {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const services: Service[] = [
    {
      id: "web-app",
      name: dict.status.services.items[0].name,
      description: dict.status.services.items[0].description,
      status: "operational",
      uptime: 99.98,
      responseTime: 245,
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: "mobile-app",
      name: dict.status.services.items[1].name,
      description: dict.status.services.items[1].description,
      status: "operational",
      uptime: 99.95,
      responseTime: 180,
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: "api",
      name: dict.status.services.items[2].name,
      description: dict.status.services.items[2].description,
      status: "operational",
      uptime: 99.85,
      responseTime: 220,
      icon: <Server className="h-6 w-6" />,
    },
    {
      id: "database",
      name: dict.status.services.items[3].name,
      description: dict.status.services.items[3].description,
      status: "operational",
      uptime: 99.99,
      responseTime: 95,
      icon: <Database className="h-6 w-6" />,
    },
    {
      id: "auth",
      name: dict.status.services.items[4].name,
      description: dict.status.services.items[4].description,
      status: "operational",
      uptime: 99.97,
      responseTime: 156,
      icon: <Shield className="h-6 w-6" />,
    },
    {
      id: "payments",
      name: dict.status.services.items[5].name,
      description: dict.status.services.items[5].description,
      status: "operational",
      uptime: 99.92,
      responseTime: 312,
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: "notifications",
      name: dict.status.services.items[6].name,
      description: dict.status.services.items[6].description,
      status: "operational",
      uptime: 99.75,
      responseTime: 190,
      icon: <Bell className="h-6 w-6" />,
    },
    {
      id: "cdn",
      name: dict.status.services.items[7].name,
      description: dict.status.services.items[7].description,
      status: "operational",
      uptime: 99.99,
      responseTime: 45,
      icon: <Wifi className="h-6 w-6" />,
    },
  ]

  const incidents: Incident[] = []

  const maintenanceScheduled = [
    {
      id: "1",
      title: locale === "pt" ? "Manutenção Programada - Banco de Dados" : "Scheduled Maintenance - Database",
      description: locale === "pt" ? "Atualização de segurança e otimização de performance" : "Security update and performance optimization",
      scheduledTime: "2025-02-01T02:00:00Z",
      duration: "2h",
      impact: locale === "pt" ? "Indisponibilidade parcial" : "Partial unavailability",
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
    return dict.status.overall.service_statuses[status] || status
  }

  const getOverallStatus = () => {
    return { status: "operational", text: dict.status.overall.statuses.operational }
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const overallStatus = getOverallStatus()
  const averageUptime =
    services.reduce((acc, service) => acc + service.uptime, 0) / services.length

  return (
    <div className="min-h-screen bg-slate-50">
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Activity className="w-4 h-4 mr-1" />
            {dict.status.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.status.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.status.hero.subtitle}
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
                    {dict.status.overall.last_updated.replace('{time}', lastUpdated.toLocaleString(locale === 'pt' ? 'pt-BR' : 'en-US'))}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {averageUptime.toFixed(2)}%
                  </div>
                  <div className="text-sm opacity-80">{dict.status.overall.average_uptime}</div>
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
                  {dict.status.overall.refresh_button}
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
            <h2 className="text-3xl font-bold mb-4">{dict.status.services.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.status.services.subtitle}
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
                          {dict.status.services.uptime}
                        </span>
                        <span className="font-semibold">{service.uptime}%</span>
                      </div>
                      <Progress value={service.uptime} className="h-2" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          {dict.status.services.response_time}
                        </span>
                        <span className="font-semibold">
                          {service.responseTime}ms
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div
                          className="h-full rounded-full bg-green-500"
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduled Maintenance */}
      {maintenanceScheduled.length > 0 && (
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {dict.status.maintenance.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.status.maintenance.subtitle}
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
                          <span className="font-medium">{dict.status.maintenance.scheduled_for}</span>
                          <div>
                            {new Date(maintenance.scheduledTime).toLocaleString(
                              locale === 'pt' ? 'pt-BR' : 'en-US'
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">{dict.status.maintenance.estimated_duration}</span>
                          <div>{maintenance.duration}</div>
                        </div>
                        <div>
                          <span className="font-medium">{dict.status.maintenance.impact}</span>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.status.metrics.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.status.metrics.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{dict.status.metrics.items[0].title}</h3>
              <div className="text-2xl font-bold text-green-600">99.94%</div>
              <p className="text-sm text-muted-foreground">{dict.status.metrics.items[0].subtitle}</p>
            </Card>

            <Card className="p-6 text-center">
              <Activity className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{dict.status.metrics.items[1].title}</h3>
              <div className="text-2xl font-bold text-blue-600">245ms</div>
              <p className="text-sm text-muted-foreground">{dict.status.metrics.items[1].subtitle}</p>
            </Card>

            <Card className="p-6 text-center">
              <HardDrive className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{dict.status.metrics.items[2].title}</h3>
              <div className="text-2xl font-bold text-purple-600">1.2M</div>
              <p className="text-sm text-muted-foreground">{dict.status.metrics.items[2].subtitle}</p>
            </Card>

            <Card className="p-6 text-center">
              <Monitor className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{dict.status.metrics.items[3].title}</h3>
              <div className="text-2xl font-bold text-orange-600">2</div>
              <p className="text-sm text-muted-foreground">{dict.status.metrics.items[3].subtitle}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-linear-to-r from-blue-50 to-green-50 border-blue-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{dict.status.notification.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {dict.status.notification.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Bell className="w-5 h-5 mr-2" />
                {dict.status.notification.subscribe_button}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">
                  <Eye className="w-5 h-5 mr-2" />
                  {dict.status.notification.report_button}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}
