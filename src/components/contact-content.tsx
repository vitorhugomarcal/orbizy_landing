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
import { motion } from "motion/react"

export function ContactContent({ dict, locale }: { dict: any; locale: string }) {
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
      title: dict.contact.methods.items[0].title,
      description: dict.contact.methods.items[0].description,
      contact: "contato@orbizy.com",
      response: dict.contact.methods.items[0].response,
      color: "bg-blue-100 text-blue-700",
      href: "mailto:contato@orbizy.com",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: dict.contact.methods.items[1].title,
      description: dict.contact.methods.items[1].description,
      contact: "suporte@orbizy.com",
      response: dict.contact.methods.items[1].response,
      color: "bg-green-100 text-green-700",
      href: "mailto:suporte@orbizy.com",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: dict.contact.methods.items[2].title,
      description: dict.contact.methods.items[2].description,
      contact: "vendas@orbizy.com",
      response: dict.contact.methods.items[2].response,
      color: "bg-purple-100 text-purple-700",
      href: "mailto:vendas@orbizy.com",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: dict.contact.methods.items[3].title,
      description: dict.contact.methods.items[3].description,
      contact: "parcerias@orbizy.com",
      response: dict.contact.methods.items[3].response,
      color: "bg-orange-100 text-orange-700",
      href: "mailto:parcerias@orbizy.com",
    },
  ]

  const supportChannels = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: dict.contact.channels.items[0].title,
      description: dict.contact.channels.items[0].description,
      availability: dict.contact.channels.items[0].availability,
      action: dict.contact.channels.items[0].action,
      href: "#chat",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: dict.contact.channels.items[1].title,
      description: dict.contact.channels.items[1].description,
      availability: dict.contact.channels.items[1].availability,
      action: dict.contact.channels.items[1].action,
      href: "tel:+551140000000",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: dict.contact.channels.items[2].title,
      description: dict.contact.channels.items[2].description,
      availability: dict.contact.channels.items[2].availability,
      action: dict.contact.channels.items[2].action,
      href: "/ajuda",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: dict.contact.channels.items[3].title,
      description: dict.contact.channels.items[3].description,
      availability: dict.contact.channels.items[3].availability,
      action: dict.contact.channels.items[3].action,
      href: "/status",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
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
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            {dict.contact.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.contact.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.contact.methods.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.contact.methods.subtitle}
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
            <h2 className="text-3xl font-bold mb-4">{dict.contact.form.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.contact.form.subtitle}
            </p>
          </div>

          <Card className="p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">
                    {dict.contact.form.success_title}
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  {dict.contact.form.success_subtitle}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-800">
                    {dict.contact.form.error_title}
                  </span>
                </div>
                <p className="text-sm text-red-700 mt-1">
                  {dict.contact.form.error_subtitle}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contact.form.fields.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={dict.contact.form.fields.name_placeholder}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{dict.contact.form.fields.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={dict.contact.form.fields.email_placeholder}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{dict.contact.form.fields.phone}</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={dict.contact.form.fields.phone_placeholder}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{dict.contact.form.fields.company}</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    placeholder={dict.contact.form.fields.company_placeholder}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">{dict.contact.form.fields.subject}</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={dict.contact.form.fields.subject_placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="suporte">
                        <div className="flex items-center">
                          <Headphones className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.support}
                        </div>
                      </SelectItem>
                      <SelectItem value="vendas">
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.sales}
                        </div>
                      </SelectItem>
                      <SelectItem value="bug">
                        <div className="flex items-center">
                          <Bug className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.bug}
                        </div>
                      </SelectItem>
                      <SelectItem value="sugestao">
                        <div className="flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.suggestion}
                        </div>
                      </SelectItem>
                      <SelectItem value="parceria">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.partnership}
                        </div>
                      </SelectItem>
                      <SelectItem value="outro">
                        <div className="flex items-center">
                          <HelpCircle className="w-4 h-4 mr-2" />
                          {dict.contact.form.subjects.other}
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">{dict.contact.form.fields.priority}</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) =>
                      handleInputChange("priority", value)
                    }
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={dict.contact.form.fields.priority_placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">
                        <Badge variant="outline" className="text-green-600">
                          {dict.contact.form.priorities.low}
                        </Badge>
                      </SelectItem>
                      <SelectItem value="normal">
                        <Badge variant="outline" className="text-blue-600">
                          {dict.contact.form.priorities.normal}
                        </Badge>
                      </SelectItem>
                      <SelectItem value="alta">
                        <Badge variant="outline" className="text-orange-600">
                          {dict.contact.form.priorities.high}
                        </Badge>
                      </SelectItem>
                      <SelectItem value="urgente">
                        <Badge variant="outline" className="text-red-600">
                          {dict.contact.form.priorities.urgent}
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{dict.contact.form.fields.message}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={dict.contact.form.fields.message_placeholder}
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
                <p className="text-xs text-muted-foreground">
                  {dict.contact.form.fields.message_hint}
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
                  {dict.contact.form.fields.privacy.replace('{link}', '')}
                  <Link
                    href="/termos-de-uso-e-privacidade"
                    className="text-primary hover:underline mx-1"
                  >
                    {dict.contact.form.fields.privacy_link}
                  </Link>
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
                    {dict.contact.form.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {dict.contact.form.button}
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
              {dict.contact.channels.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.contact.channels.subtitle}
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

      <Footer dict={dict} />
    </div>
  )
}
