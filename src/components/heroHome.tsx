"use client"

import {
  ArrowRight,
  CheckCircle,
  ChevronsDown,
  Star,
  Users,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

interface HeroHomeProps {
  dict: any
}

export function HeroHome({ dict }: HeroHomeProps) {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-purple-600 via-purple-500 to-orange-500 flex items-center justify-center overflow-hidden pt-20 mb-2">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                {dict.hero.badge}
              </Badge>
            </motion.div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                {dict.hero.title_part1}
                <span className="block bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {dict.hero.title_highlight}
                </span>
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl font-light text-white/90 max-w-2xl"
              >
                {dict.hero.subtitle}
              </motion.h2>
            </div>

            {/* Key Benefits */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-3 my-6"
            >
              {dict.hero.benefits.map((benefit: string, index: number) => (
                <motion.div 
                  key={index} 
                  className="flex items-center text-white/90"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href={"/download"}
                className="flex flex-row gap-4 rounded-2xl items-center bg-white text-purple-600 hover:bg-white/90 font-semibold text-lg px-8 py-4 shadow-xl transition-transform hover:scale-105 active:scale-95"
              >
                <Zap className="w-5 h-5 mr-2" />
                {dict.hero.cta_primary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-6 text-white/80"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">30 dias</div>
                <div className="text-sm">{dict.hero.stats.trial}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">0%</div>
                <div className="text-sm">{dict.hero.stats.setup}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">{dict.hero.stats.support}</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block space-y-4 mb-16"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 mr-2 text-blue-300" />
                    <span className="font-semibold">Clientes</span>
                  </div>
                  <div className="text-2xl font-bold">+150%</div>
                  <div className="text-sm text-white/80">Crescimento médio</div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 mr-2 text-green-300" />
                    <span className="font-semibold">Eficiência</span>
                  </div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm text-white/80">Mais produtividade</div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-xs mb-2 font-medium">{dict.common.discover_more}</span>
        <ChevronsDown className="w-6 h-6 animate-bounce" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 hidden xl:block">
        <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-1/3 left-20 hidden xl:block">
        <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  )
}
