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

export default function TutoriaisPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const categories: Category[] = [
    {
      id: "getting-started",
      name: "Primeiros Passos",
      description: "Configure sua conta e comece a usar",
      icon: <Zap className="h-6 w-6" />,
      count: 12,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "clients",
      name: "Gestão de Clientes",
      description: "Organize e gerencie sua base de clientes",
      icon: <Users className="h-6 w-6" />,
      count: 8,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "financial",
      name: "Controle Financeiro",
      description: "Monitore receitas, despesas e fluxo de caixa",
      icon: <BarChart3 className="h-6 w-6" />,
      count: 15,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "documents",
      name: "Documentos",
      description: "Crie orçamentos, contratos e notas",
      icon: <FileText className="h-6 w-6" />,
      count: 10,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: "scheduling",
      name: "Agendamentos",
      description: "Organize compromissos e serviços",
      icon: <Calendar className="h-6 w-6" />,
      count: 6,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: "inventory",
      name: "Estoque",
      description: "Controle produtos e serviços",
      icon: <Package className="h-6 w-6" />,
      count: 7,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "mobile",
      name: "App Mobile",
      description: "Use a Orbizy no seu smartphone",
      icon: <Smartphone className="h-6 w-6" />,
      count: 5,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: "advanced",
      name: "Recursos Avançados",
      description: "Funcionalidades para usuários experientes",
      icon: <Settings className="h-6 w-6" />,
      count: 9,
      color: "bg-red-100 text-red-700",
    },
  ]

  const featuredTutorials: Tutorial[] = [
    {
      id: "1",
      title: "Como Começar na Orbizy - Guia Completo",
      description:
        "Aprenda a configurar sua conta e dar os primeiros passos na plataforma",
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
      description:
        "Passo a passo para criar orçamentos que impressionam seus clientes",
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

  const allTutorials: Tutorial[] = [
    ...featuredTutorials,
    {
      id: "4",
      title: "Configurando Notificações por E-mail",
      description:
        "Personalize as notificações para não perder nenhuma informação importante",
      category: "getting-started",
      type: "article",
      duration: "5 min",
      difficulty: "beginner",
      views: 5430,
      likes: 234,
      thumbnail: "/tutorial-4.jpg",
      tags: ["notificações", "email", "configuração"],
    },
    {
      id: "5",
      title: "Gestão Avançada de Clientes",
      description:
        "Segmente clientes, crie tags personalizadas e automatize o relacionamento",
      category: "clients",
      type: "video",
      duration: "18 min",
      difficulty: "advanced",
      views: 3210,
      likes: 187,
      thumbnail: "/tutorial-5.jpg",
      tags: ["clientes", "segmentação", "automação"],
    },
    {
      id: "6",
      title: "Integrando com WhatsApp Business",
      description:
        "Conecte sua conta do WhatsApp e envie documentos automaticamente",
      category: "advanced",
      type: "guide",
      duration: "10 min",
      difficulty: "intermediate",
      views: 7890,
      likes: 456,
      thumbnail: "/tutorial-6.jpg",
      tags: ["whatsapp", "integração", "automação"],
    },
    {
      id: "7",
      title: "Usando a Orbizy no Celular",
      description:
        "Aproveite todos os recursos da plataforma no seu smartphone",
      category: "mobile",
      type: "video",
      duration: "8 min",
      difficulty: "beginner",
      views: 9120,
      likes: 623,
      thumbnail: "/tutorial-7.jpg",
      tags: ["mobile", "app", "produtividade"],
    },
    {
      id: "8",
      title: "Relatórios Personalizados",
      description: "Crie relatórios sob medida para seu negócio",
      category: "financial",
      type: "guide",
      duration: "20 min",
      difficulty: "advanced",
      views: 4560,
      likes: 298,
      thumbnail: "/tutorial-8.jpg",
      tags: ["relatórios", "personalização", "análise"],
    },
  ]

  const filteredTutorials = allTutorials.filter((tutorial) => {
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
    switch (difficulty) {
      case "beginner":
        return "Iniciante"
      case "intermediate":
        return "Intermediário"
      case "advanced":
        return "Avançado"
      default:
        return "Todos"
    }
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
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 mb-4"
          >
            <BookOpen className="w-4 h-4 mr-1" />
            Centro de Aprendizado
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tutoriais Orbizy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Aprenda a dominar todas as funcionalidades da Orbizy com nossos
            guias completos e vídeos explicativos
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
                placeholder="Buscar tutoriais..."
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
                <option value="all">Todas as Categorias</option>
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
                <option value="all">Todos os Níveis</option>
                <option value="beginner">Iniciante</option>
                <option value="intermediate">Intermediário</option>
                <option value="advanced">Avançado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tutoriais em Destaque</h2>
            <p className="text-lg text-muted-foreground">
              Os guias mais populares para começar com a Orbizy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  {tutorial.new && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      Novo
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
                      Assistir
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
            <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-lg text-muted-foreground">
              Encontre tutoriais específicos para cada área da plataforma
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
                      {category.count} tutoriais
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
              <h2 className="text-3xl font-bold mb-2">Todos os Tutoriais</h2>
              <p className="text-muted-foreground">
                {filteredTutorials.length} tutoriais encontrados
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Baixar Guia PDF
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
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    {getTypeIcon(tutorial.type)}
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {tutorial.duration}
                  </div>
                  {tutorial.featured && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500">
                      <Star className="h-3 w-3 mr-1" />
                      Destaque
                    </Badge>
                  )}
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
                      Ver mais
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
                Nenhum tutorial encontrado
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar os filtros ou termos de busca
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedDifficulty("all")
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trilhas de Aprendizado</h2>
            <p className="text-lg text-muted-foreground">
              Sequências organizadas de tutoriais para dominar a Orbizy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-green-200 bg-green-50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">
                    Iniciante Completo
                  </h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    6 tutoriais • 1h 30min
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-green-700 mb-4">
                Do zero ao primeiro orçamento enviado. Perfeito para quem está
                começando.
              </p>
              <Button size="sm" className="w-full">
                Começar Trilha
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-6 border-blue-200 bg-blue-50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">
                    Crescimento do Negócio
                  </h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    8 tutoriais • 2h 15min
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-blue-700 mb-4">
                Estratégias para escalar seu negócio usando recursos avançados
                da Orbizy.
              </p>
              <Button size="sm" className="w-full">
                Começar Trilha
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-6 border-purple-200 bg-purple-50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">
                    Especialista Orbizy
                  </h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    12 tutoriais • 3h 45min
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-purple-700 mb-4">
                Domine todos os recursos e torne-se um especialista na
                plataforma.
              </p>
              <Button size="sm" className="w-full">
                Começar Trilha
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Precisa de Ajuda Personalizada?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você a aproveitar ao máximo a
              Orbizy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Video className="w-5 h-5 mr-2" />
                Agendar Treinamento
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">
                  <Mail className="w-5 h-5 mr-2" />
                  Falar com Suporte
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Treinamento gratuito</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Suporte especializado</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Materiais exclusivos</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Novos Tutoriais Toda Semana
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inscreva-se para receber os novos tutoriais e dicas exclusivas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
            />
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Inscrever-se
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            Não enviamos spam. Cancele quando quiser.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
