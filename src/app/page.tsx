import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Hero />
      <div className="h-16 w-full text-center pt-4">
        <h2 className="sm:text-2xl text-xl font-medium text-foreground">
          Somos a solução definitiva em gestão para negócios de todos os
          setores.
        </h2>
      </div>
      <Separator className="my-4" />
      <Footer />
    </div>
  )
}
