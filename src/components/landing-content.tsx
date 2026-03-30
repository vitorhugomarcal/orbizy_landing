"use client"

import heroBG from "@/assets/heroBG.jpg"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroHome } from "@/components/heroHome"
import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BarChart3,
  Briefcase,
  Building,
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Package,
  PieChart,
  PlayCircle,
  Scissors,
  Shield,
  ShoppingBag,
  Star,
  Users,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingContent({ dict, locale }: { dict: any; locale: string }) {
  const featureIcons = [
    <Users key="u" className="h-6 w-6" />,
    <BarChart3 key="b" className="h-6 w-6" />,
    <FileText key="f" className="h-6 w-6" />,
    <Calendar key="c" className="h-6 w-6" />,
    <Package key="p" className="h-6 w-6" />,
    <DollarSign key="d" className="h-6 w-6" />,
  ]

  const segmentIcons = [
    <Scissors key="s" className="h-8 w-8" />,
    <Wrench key="w" className="h-8 w-8" />,
    <Briefcase key="b" className="h-8 w-8" />,
    <ShoppingBag key="sh" className="h-8 w-8" />,
    <Camera key="ca" className="h-8 w-8" />,
    <Building key="bu" className="h-8 w-8" />,
  ]

  const statsIcons = [
    <Building key="bu" className="h-6 w-6" />,
    <Star key="s" className="h-6 w-6" />,
    <FileText key="f" className="h-6 w-6" />,
    <Clock key="cl" className="h-6 w-6" />,
  ]

  return (
    <div className="bg-slate-100 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Orbizy",
            description: dict.seo.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android, Windows, macOS",
            offers: dict.pricing.plans.map((plan: any) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.price.replace(/[^0-9.]/g, ""),
              priceCurrency: locale === "pt" ? "BRL" : "USD",
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
          }),
        }}
      />

      <Header dict={dict} locale={locale} />
      <HeroHome dict={dict} />

      {/* Hero Image Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-1 -mt-8 px-4"
      >
        <Image
          src={heroBG}
          alt={dict.seo.title}
          className="rounded-3xl w-full object-cover max-w-6xl mx-auto shadow-2xl"
          priority
        />
      </motion.section>

      {/* Value Proposition */}
      <section className="flex flex-1 px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full sm:max-w-xl mb-12 -mt-8 mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="font-semibold sm:text-lg text-sm text-center">
                {dict.hero.value_prop}
              </CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dict.stats.map((stat: any, index: number) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {statsIcons[index]}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Segments Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.segments.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {dict.segments.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.segments.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dict.segments.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 h-full cursor-default"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {segmentIcons[index]}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <Badge variant="outline">{item.count}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="funcionalidades"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.features.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {dict.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.features.description}
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
              <TabsTrigger value="overview">{dict.features.tabs.overview}</TabsTrigger>
              <TabsTrigger value="financial">{dict.features.tabs.financial}</TabsTrigger>
              <TabsTrigger value="documents">{dict.features.tabs.documents}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dict.features.items.map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="p-6 h-full hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg mr-3">
                          {featureIcons[index]}
                        </div>
                        <h3 className="font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {feature.description}
                      </p>
                      <p className="text-sm text-slate-600">{feature.details}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="financial" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                  <Card className="p-6 h-full">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <PieChart className="h-8 w-8 text-primary mr-3" />
                        <CardTitle>{dict.features.tabs.financial}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {dict.features.financial_details.map((detail: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                  <Card className="p-6 h-full">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <DollarSign className="h-8 w-8 text-primary mr-3" />
                        <CardTitle>{dict.features.items[1].title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {dict.features.receivables_details.map((detail: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FileText, ...dict.features.doc_types[0] },
                  { icon: Award, ...dict.features.doc_types[1] },
                  { icon: CreditCard, ...dict.features.doc_types[2] }
                ].map((doc, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center h-full hover:bg-slate-50 transition-colors">
                      <doc.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {doc.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>

      <motion.section 
        id="planos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.pricing.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {dict.pricing.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.pricing.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.pricing.plans.map((plan: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className={`p-6 h-full flex flex-col ${
                    index === 1
                      ? "ring-2 ring-primary shadow-xl scale-105 z-1"
                      : ""
                  }`}
                >
                  {index === 1 && (
                    <Badge className="mb-4 w-fit">{dict.pricing.popular}</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="flex items-baseline my-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{dict.pricing.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <Link
                    className={
                      index === 1
                        ? "bg-orange-400 hover:bg-orange-500 h-12 justify-center rounded-2xl text-white font-semibold transition-all flex items-center group shadow-lg hover:shadow-orange-200"
                        : "flex border border-orange-400 hover:bg-orange-50 w-full h-12 rounded-2xl font-medium justify-center items-center transition-colors"
                    }
                    href={"/download"}
                  >
                    {index === 0 ? dict.pricing.cta_free : dict.pricing.cta_paid}
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="depoimentos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.testimonials.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {dict.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.testimonials.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.testimonials.items.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="p-6 h-full hover:shadow-lg transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic text-slate-700 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.business}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                        {testimonial.results}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="faq"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {dict.faq.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">{dict.faq.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.faq.description}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {dict.faq.items.map((faq: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Trust Signals Section */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {dict.trust.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, ...dict.trust.items[0] },
              { icon: Award, ...dict.trust.items[1] },
              { icon: Clock, ...dict.trust.items[2] }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-8 bg-linear-to-r from-primary to-orange-600 text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {dict.final_cta.title}
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-10 opacity-90 font-light"
          >
            {dict.final_cta.subtitle}
          </motion.p>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Link
              href="/download"
              className="bg-white text-primary font-bold text-lg px-10 py-4 rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl inline-block"
            >
              {dict.final_cta.cta}
            </Link>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-80 font-medium">
            {[dict.final_cta.badge1, dict.final_cta.badge2, dict.final_cta.badge3].map((badge, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center"
              >
                <CheckCircle className="h-5 w-5 mr-2 text-white" />
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Separator className="my-8" />
      <Footer dict={dict} />
    </div>
  )
}
