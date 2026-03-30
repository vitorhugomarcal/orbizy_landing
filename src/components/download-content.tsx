"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Apple,
  BarChart3,
  Calendar,
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  PlayCircle,
  Smartphone,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react"

export function DownloadContent({ dict, locale }: { dict: any; locale: string }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get("plan")
    if (plan) {
      setSelectedPlan(plan)
    }
  }, [])

  const appStoreUrl = "https://apps.apple.com/br/app/orbizy/id6670499792"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.orbizy.app"
  const webAppUrl = "https://my.orbizy.app"

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: dict.download.features.items[0].title,
      description: dict.download.features.items[0].description,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: dict.download.features.items[1].title,
      description: dict.download.features.items[1].description,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: dict.download.features.items[2].title,
      description: dict.download.features.items[2].description,
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: dict.download.features.items[3].title,
      description: dict.download.features.items[3].description,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-12 bg-linear-to-r from-green-600 to-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30 mb-4"
            >
              <Smartphone className="w-4 h-4 mr-1" />
              {dict.download.hero.badge}
            </Badge>
          </motion.div>

          {selectedPlan && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2 text-yellow-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">
                  {dict.download.hero.plan_selected.replace('{plan}', selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1))}
                </span>
              </div>
              <p className="text-white/80 text-sm mt-1">
                {dict.download.hero.activation_hint}
              </p>
            </motion.div>
          )}

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {dict.download.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            {dict.download.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Download Options */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.download.platforms.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.download.platforms.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* iOS App Store */}
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-900 rounded-2xl">
                    <Apple className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-2">iOS - App Store</h3>
                <p className="text-muted-foreground mb-6">{dict.download.platforms.ios}</p>

                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                    <QRCodeSVG
                      value={appStoreUrl}
                      size={120}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    asChild
                  >
                    <Link href={appStoreUrl} target="_blank">
                      <Apple className="w-5 h-5 mr-2" />
                      {dict.download.platforms.cta_ios}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <div className="text-xs text-muted-foreground pt-2">iOS 15.1+ • 59 MB</div>
                </div>
              </Card>
            </motion.div>

            {/* Google Play Store */}
            <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-linear-to-r from-green-500 to-blue-500 rounded-2xl">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-2">Android - Google Play</h3>
                <p className="text-muted-foreground mb-6">{dict.download.platforms.android}</p>

                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                    <QRCodeSVG
                      value={playStoreUrl}
                      size={120}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link href={playStoreUrl} target="_blank">
                      <PlayCircle className="w-5 h-5 mr-2" />
                      {dict.download.platforms.cta_android}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <div className="text-xs text-muted-foreground pt-2">Android 6.0+ • 42 MB</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* App Features */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {dict.download.features.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.download.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* App Benefits List */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.download.benefits.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.download.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dict.download.benefits.items.map((benefit: string, index: number) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-1 bg-green-100 rounded-full mt-1 shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Support CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-linear-to-r from-blue-50 to-purple-50 border-blue-200">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-blue-100 rounded-full">
                   <Smartphone className="h-8 w-8 text-blue-600" />
                 </div>
               </div>
               <h2 className="text-2xl font-bold mb-4">{dict.download.cta.title}</h2>
               <p className="text-lg text-muted-foreground mb-8">
                 {dict.download.cta.subtitle}
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="px-8 font-bold" asChild>
                   <Link href={webAppUrl} rel="nofollow">
                     <Download className="w-5 h-5 mr-2" />
                     {dict.download.cta.web_button}
                   </Link>
                 </Button>
                 <Button size="lg" variant="outline" className="px-8" asChild>
                   <Link href="/tutoriais">
                     <PlayCircle className="w-5 h-5 mr-2" />
                     {dict.download.cta.tutorial_button}
                   </Link>
                 </Button>
               </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer dict={dict} />
    </div>
  )
}
