"use client"

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
import Link from "next/link"
import { motion } from "motion/react"

export function LGPDContent({ dict, locale }: { dict: any; locale: string }) {
  const dataTypes = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: dict.lgpd.data_types.items[0].title,
      description: dict.lgpd.data_types.items[0].description,
      purpose: dict.lgpd.data_types.items[0].purpose,
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: dict.lgpd.data_types.items[1].title,
      description: dict.lgpd.data_types.items[1].description,
      purpose: dict.lgpd.data_types.items[1].purpose,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: dict.lgpd.data_types.items[2].title,
      description: dict.lgpd.data_types.items[2].description,
      purpose: dict.lgpd.data_types.items[2].purpose,
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: dict.lgpd.data_types.items[3].title,
      description: dict.lgpd.data_types.items[3].description,
      purpose: dict.lgpd.data_types.items[3].purpose,
    },
  ]

  const rights = [
    {
      icon: <Eye className="h-5 w-5" />,
      title: dict.lgpd.rights.items[0].title,
      description: dict.lgpd.rights.items[0].description,
    },
    {
      icon: <Edit className="h-5 w-5" />,
      title: dict.lgpd.rights.items[1].title,
      description: dict.lgpd.rights.items[1].description,
    },
    {
      icon: <Trash2 className="h-5 w-5" />,
      title: dict.lgpd.rights.items[2].title,
      description: dict.lgpd.rights.items[2].description,
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: dict.lgpd.rights.items[3].title,
      description: dict.lgpd.rights.items[3].description,
    },
  ]

  const securityMeasures = dict.lgpd.security.items

  return (
    <div className="min-h-screen bg-slate-50">
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <Shield className="w-4 h-4 mr-1" />
            {dict.lgpd.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.lgpd.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.lgpd.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-linear-to-r from-green-50 to-blue-50 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.lgpd.commitment.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {dict.lgpd.commitment.description}
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
            <h2 className="text-3xl font-bold mb-4">{dict.lgpd.data_types.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.lgpd.data_types.subtitle}
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
                      {dict.lgpd.data_types.purpose_badge.replace('{purpose}', type.purpose)}
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
            {dict.lgpd.legal_basis.title}
          </h2>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {dict.lgpd.legal_basis.items[0].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.lgpd.legal_basis.items[0].description}
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
                  <h3 className="font-semibold text-lg mb-2">{dict.lgpd.legal_basis.items[1].title}</h3>
                  <p className="text-muted-foreground">
                    {dict.lgpd.legal_basis.items[1].description}
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
                    {dict.lgpd.legal_basis.items[2].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.lgpd.legal_basis.items[2].description}
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
              {dict.lgpd.rights.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.lgpd.rights.subtitle}
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
            <Button size="lg" className="font-semibold" asChild>
              <Link href="/contato">
                <Mail className="w-5 h-5 mr-2" />
                {dict.lgpd.rights.button}
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              {dict.lgpd.rights.hint}
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.lgpd.security.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.lgpd.security.subtitle}
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-primary" />
                  {dict.lgpd.security.technical_title}
                </h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(0, 3).map((measure: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  {dict.lgpd.security.organizational_title}
                </h3>
                <ul className="space-y-3">
                  {securityMeasures.slice(3).map((measure: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
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
            {dict.lgpd.retention.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.lgpd.retention.items.map((item: any, index: number) => (
              <Card key={index} className="p-6 text-center">
                {index === 0 ? <Clock className="h-12 w-12 text-primary mx-auto mb-4" /> :
                 index === 1 ? <Database className="h-12 w-12 text-primary mx-auto mb-4" /> :
                 <FileText className="h-12 w-12 text-primary mx-auto mb-4" />}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <Badge variant="outline">{item.period}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-orange-200 bg-linear-to-r from-orange-50 to-red-50">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.lgpd.incident.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {dict.lgpd.incident.subtitle}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {dict.lgpd.incident.steps.map((step: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {step}
                    </li>
                  ))}
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
            {dict.lgpd.dpo.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {dict.lgpd.dpo.subtitle}
          </p>

          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold">{dict.lgpd.dpo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{dict.lgpd.dpo.response_time}</span>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">
                {dict.lgpd.dpo.footer_hint}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Última atualização:</strong> {dict.lgpd.last_update.text} •
            <Link
              href="/termos-de-uso-e-privacidade"
              className="text-primary hover:underline ml-1"
            >
              {dict.lgpd.last_update.policy_link}
            </Link>
          </p>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}
