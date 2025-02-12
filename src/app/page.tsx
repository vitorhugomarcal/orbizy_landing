import heroBG from "@/assets/heroBG.jpg"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Hero />

      <div className="flex flex-1 px-8 -mt-8">
        <Image src={heroBG} alt="" className="rounded-3xl" />
      </div>
      <div className="flex flex-1 px-16">
        <Card className="w-full sm:max-w-xl mb-12 -mt-8 mx-auto">
          <CardHeader>
            <CardTitle className="font-semibold sm:text-lg text-sm">
              Descubra a simplicidade de um aplicativo moderno, projetado para
              tornar a gestão do seu negócio intuitiva e eficiente.
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <Separator className="my-4" />
      <Footer />
    </div>
  )
}
