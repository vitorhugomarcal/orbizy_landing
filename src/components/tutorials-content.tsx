"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Filter,
  Mail,
  MessageCircle,
  Package,
  PlayCircle,
  Search,
  Settings,
  Smartphone,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

interface Tutorial {
  id: string
  title: string
  description: string
  category: string
  type: "video" | "article" | "guide"
  duration: string
  difficulty: "beginner" | "intermediate" | "advanced"
  views: number
  likes: number
  thumbnail: string
  tags: string[]
  featured?: boolean
  new?: boolean
}

interface Category {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  count: number
  color: string
}

export function TutorialsContent({ dict, locale }: { dict: any; locale: string }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const categories: Category[] = [
    {
      id: "getting-started",
      name: locale === "pt" ? "Primeiros Passos" : "Getting Started",
      description: locale === "pt" ? "Configure sua conta e comece a usar" : "Set up your account and get started",
      icon: <Zap className="h-6 w-6" />,
      count: 12,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "clients",
      name: locale === "pt" ? "Gestão de Clientes" : "Customer Management",
      description: locale === "pt" ? "Organize e gerencie sua base de clientes" : "Organize and manage your customer base",
      icon: <Users className="h-6 w-6" />,
      count: 8,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "financial",
      name: locale === "pt" ? "Controle Financeiro" : "Financial Control",
      description: locale === "pt" ? "Monitore receitas, despesas e fluxo de caixa" : "Monitor revenue, expenses and cash flow",
      icon: <BarChart3 className="h-6 w-6" />,
      count: 15,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "documents",
      name: locale === "pt" ? "Documentos" : "Documents",
      description: locale === "pt" ? "Crie orçamentos, contratos e notas" : "Create quotes, contracts and notes",
      icon: <FileText className="h-6 w-6" />,
      count: 10,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "scheduling",
      name: locale === "pt" ? "Agendamentos" : "Scheduling",
      description: locale === "pt" ? "Organize compromissos e serviços" : "Organize appointments and services",
      icon: <Calendar className="h-6 w-6" />,
      count: 6,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "inventory",
      name: locale === "pt" ? "Estoque" : "Inventory",
      description: locale === "pt" ? "Controle produtos e serviços" : "Product and service control",
      icon: <Package className="h-6 w-6" />,
      count: 7,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "mobile",
      name: locale === "pt" ? "App Mobile" : "Mobile App",
      description: locale === "pt" ? "Use a Orbizy no seu smartphone" : "Use Orbizy on your smartphone",
      icon: <Smartphone className="h-6 w-6" />,
      count: 5,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "advanced",
      name: locale === "pt" ? "Recursos Avançados" : "Advanced Resources",
      description: locale === "pt" ? "Funcionalidades para usuários experientes" : "Features for experienced users",
      icon: <Settings className="h-6 w-6" />,
      count: 9,
      color: "bg-red-100 text-red-700",
    },
  ]

  const ptTutorials: Tutorial[] = [
    {
      id: "1",
      title: "Como Começar na Orbizy - Guia Completo",
      description: "Aprenda a configurar sua conta e dar os primeiros passos na plataforma",
      category: "getting-started",
      type: "video",
      duration: "15 min",
      difficulty: "beginner",
      views: 15420,
      likes: 892,
      thumbnail: "/tutorial-1.jpg",
      tags: ["iniciante", "configuração", "primeiros-passos"],
      featured: true,
      new: true,
    },
    {
      id: "2",
      title: "Criando seu Primeiro Orçamento Profissional",
      description: "Passo a passo para criar orçamentos que impressionam seus clientes",
      category: "documents",
      type: "video",
      duration: "12 min",
      difficulty: "beginner",
      views: 12350,
      likes: 743,
      thumbnail: "/tutorial-2.jpg",
      tags: ["orçamento", "documentos", "vendas"],
      featured: true,
    },
    {
      id: "3",
      title: "Controle Financeiro: Do Básico ao Avançado",
      description: "Domine todas as ferramentas financeiras da Orbizy",
      category: "financial",
      type: "guide",
      duration: "25 min",
      difficulty: "intermediate",
      views: 8760,
      likes: 521,
      thumbnail: "/tutorial-3.jpg",
      tags: ["financeiro", "relatórios", "fluxo-caixa"],
      featured: true,
    },
  ]

  const enTutorials: Tutorial[] = [
    {
      id: "1",
      title: "How to Start on Orbizy - Complete Guide",
      description: "Learn how to set up your account and take the first steps on the platform",
      category: "getting-started",
      type: "video",
      duration: "15 min",
      difficulty: "beginner",
      views: 15420,
      likes: 892,
      thumbnail: "/tutorial-1.jpg",
      tags: ["beginner", "setup", "getting-started"],
      featured: true,
      new: true,
    },
    {
      id: "2",
      title: "Creating your First Professional Quote",
      description: "Step-by-step to create quotes that impress your clients",
      category: "documents",
      type: "video",
      duration: "12 min",
      difficulty: "beginner",
      views: 12350,
      likes: 743,
      thumbnail: "/tutorial-2.jpg",
      tags: ["quote", "documents", "sales"],
      featured: true,
    },
    {
      id: "3",
      title: "Financial Control: From Basic to Advanced",
      description: "Master all financial tools of Orbizy",
      category: "financial",
      type: "guide",
      duration: "25 min",
      difficulty: "intermediate",
      views: 8760,
      likes: 521,
      thumbnail: "/tutorial-3.jpg",
      tags: ["financial", "reports", "cash-flow"],
      featured: true,
    },
  ]

  const tutorials = locale === "pt" ? ptTutorials : enTutorials;

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const matchesCategory =
      selectedCategory === "all" || tutorial.category === selectedCategory
    const matchesDifficulty =
      selectedDifficulty === "all" || tutorial.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-700"
      case "intermediate":
        return "bg-yellow-100 text-yellow-700"
      case "advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getDifficultyText = (difficulty: string) => {
    return dict.tutorials.search.levels[difficulty] || difficulty;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-4 w-4" />
      case "article":
        return <FileText className="h-4 w-4" />
      case "guide":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header dict={dict} locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <BookOpen className="w-4 h-4 mr-1" />
            {dict.tutorials.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.tutorials.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {dict.tutorials.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={dict.tutorials.search.placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="all">{dict.tutorials.search.categories_label}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="all">{dict.tutorials.search.difficulties_label}</option>
                <option value="beginner">{dict.tutorials.search.levels.beginner}</option>
                <option value="intermediate">{dict.tutorials.search.levels.intermediate}</option>
                <option value="advanced">{dict.tutorials.search.levels.advanced}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.tutorials.featured.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.tutorials.featured.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.filter(t => t.featured).map((tutorial) => (
              <Card
                key={tutorial.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="aspect-video bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  {tutorial.new && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      {dict.tutorials.featured.new_badge}
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {tutorial.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getTypeIcon(tutorial.type)}
                    <Badge
                      variant="outline"
                      className={getDifficultyColor(tutorial.difficulty)}
                    >
                      {getDifficultyText(tutorial.difficulty)}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {tutorial.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {tutorial.likes}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      {dict.tutorials.featured.cta}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.tutorials.categories.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.tutorials.categories.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {category.count} {dict.tutorials.categories.badge}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tutorials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">{dict.tutorials.all.title}</h2>
              <p className="text-muted-foreground">
                {filteredTutorials.length} {dict.tutorials.all.found}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                {dict.tutorials.all.filters}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                {dict.tutorials.all.download}
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="aspect-video bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    {getTypeIcon(tutorial.type)}
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {tutorial.duration}
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={getDifficultyColor(tutorial.difficulty)}
                    >
                      {getDifficultyText(tutorial.difficulty)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {categories.find((c) => c.id === tutorial.category)?.name}
                    </Badge>
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {tutorial.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {tutorial.likes}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-xs"
                    >
                      {dict.tutorials.all.more}
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {dict.tutorials.all.empty}
              </h3>
              <p className="text-muted-foreground mb-4">
                {dict.tutorials.all.empty_subtitle}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedDifficulty("all")
                }}
              >
                {dict.tutorials.all.clear_button}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dict.tutorials.paths.title}</h2>
            <p className="text-lg text-muted-foreground">
              {dict.tutorials.paths.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.tutorials.paths.items.map((path: any, index: number) => (
              <Card key={index} className={`p-6 border-${index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}-200 bg-${index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}-50`}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 bg-${index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}-100 rounded-lg mr-3`}>
                    {index === 0 ? <Target className="h-6 w-6 text-green-600" /> : index === 1 ? <TrendingUp className="h-6 w-6 text-blue-600" /> : <Award className="h-6 w-6 text-purple-600" />}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-${index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}-800`}>
                      {path.title}
                    </h3>
                    <Badge variant="outline" className="text-xs mt-1">
                      {path.subtitle}
                    </Badge>
                  </div>
                </div>
                <p className={`text-sm text-${index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}-700 mb-4`}>
                  {path.description}
                </p>
                <Button size="sm" className="w-full">
                  {dict.tutorials.paths.button}
                  <ArrowRight className="h-4 w-4 ml-2" />
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
