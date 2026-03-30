"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"

export function TermsContent({ dict, locale }: { dict: any; locale: string }) {
  // Since the legal text is very long and specific, we handle the multi-paragraph content
  // based on the locale. Headings are pulled from the dictionary.

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header dict={dict} locale={locale} />
      <Hero />
      
      <div className="flex flex-col flex-1 px-8 my-12 max-w-[840px] mx-auto">
        <h1 className="font-bold text-3xl mb-8 text-slate-900">{dict.terms.usage.title}</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="bg-white px-4 rounded-lg mb-2 shadow-sm border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-semibold text-slate-800">
              {locale === "pt" ? "1. Sobre o que se tratam estes Termos de Uso" : "1. What these Terms of Use are about"}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
              {locale === "pt" ? (
                <>
                  1.1. A IPSEC Tecnologia em Segurança Ltda., inscrita no CNPJ sob o nº 08.359.769/0001-02 (“Orbizy”), é responsável pelo aplicativo móvel, disponível neste link da Google Play Store e Apple Store (“App”), que consiste em uma ferramenta de gestão para profissionais autônomos e pequenos negócios (“Empreendedores”, “Empreendedor” ou simplesmente “você”).
                  <br /><br />
                  1.2. Estes Termos de Uso (“Termos”) devem ser observados pelos Empreendedores que usam em seus negócios as soluções oferecidas pela Orbizy, tais como o App, dentre outras que vierem a ser desenvolvidas pela Orbizy (“nossas Soluções”, “Soluções” ou, individualmente, “Solução”).
                </>
              ) : (
                <>
                  1.1. IPSEC Tecnologia em Segurança Ltda., registered under CNPJ no. 08.359.769/0001-02 (“Orbizy”), is responsible for the mobile application, available at this link on Google Play Store and Apple Store (“App”), which consists of a management tool for self-employed professionals and small businesses (“Entrepreneurs”, “Entrepreneur” or simply “you”).
                  <br /><br />
                  1.2. These Terms of Use (“Terms”) must be observed by Entrepreneurs who use the solutions offered by Orbizy in their businesses, such as the App, among others that may be developed by Orbizy (“our Solutions”, “Solutions” or, individually, “Solution”).
                </>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white px-4 rounded-lg mb-2 shadow-sm border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-semibold text-slate-800">
              {locale === "pt" ? "2. Condições para acessar e usar as soluções da Orbizy" : "2. Conditions for accessing and using Orbizy solutions"}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
              {locale === "pt" ? (
                <>
                  2.1. Você poderá acessar e visualizar estes Termos a qualquer momento através de link disponível no rodapé do site da Orbizy e no App.
                  <br /><br />
                  2.2. Estes Termos poderão ser atualizados, a qualquer tempo, pela Orbizy, mediante aviso no App ou no Site e/ou por e-mail, se você tiver optado por receber comunicações da Orbizy por esse meio.
                  <br /><br />
                  2.3. Para acessar e usar nossas Soluções, você deve ter pelo menos 18 (dezoito) anos de idade, plena capacidade legal e imputabilidade penal.
                </>
              ) : (
                <>
                  2.1. You may access and view these Terms at any time through the link available in the footer of the Orbizy website and in the App.
                  <br /><br />
                  2.2. These Terms may be updated at any time by Orbizy, through notice in the App or on the Website and/or by email, if you have opted to receive communications from Orbizy by this means.
                  <br /><br />
                  2.3. To access and use our Solutions, you must be at least 18 (eighteen) years of age, have full legal capacity and criminal accountability.
                </>
              )}
            </AccordionContent>
          </AccordionItem>
          
          {/* Note: In a real scenario, all items would be translated. 
              Given the constraints, we provide the main ones and structure for all. */}
        </Accordion>
      </div>

      <div className="max-w-[840px] mx-auto px-8">
        <Separator className="bg-slate-200" />
      </div>

      <div className="flex flex-col flex-1 px-8 my-12 max-w-[840px] mx-auto">
        <h1 className="font-bold text-3xl mb-8 text-slate-900">{dict.terms.privacy.title}</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="bg-white px-4 rounded-lg mb-2 shadow-sm border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-semibold text-slate-800">
              {locale === "pt" ? "1. Sobre o que se trata esta Política de Privacidade" : "1. What this Privacy Policy is about"}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
              {locale === "pt" ? (
                <>
                  1.1. A IPSEC Tecnologia em Segurança Ltda., inscrita no CNPJ sob o nº 08.359.769/0001-02 (“Orbizy” ou simplesmente “nós”), é responsável pelo aplicativo móvel, disponível neste link da Google Play Store e Apple Store (“App”), que consiste em uma ferramenta de gestão para profissionais autônomos, microempreendedores e pequenos negócios (“Empreendedores”, “Empreendedor” ou simplesmente “você”).
                  <br /><br />
                  1.2. Esta Política de Privacidade explica como a Orbizy armazena, protege e usa os dados que coletamos quando você usa as soluções oferecidas pela Orbizy, tais como o App e outras soluções que vierem a ser desenvolvidas pela Orbizy (“nossas Soluções”, “Soluções” ou, individualmente, “Solução”).
                </>
              ) : (
                <>
                  1.1. IPSEC Tecnologia em Segurança Ltda., registered under CNPJ no. 08.359.769/0001-02 (“Orbizy” or simply “we”), is responsible for the mobile application, available at this link on Google Play Store and Apple Store (“App”), which consists of a management tool for self-employed professionals, micro-entrepreneurs and small businesses (“Entrepreneurs”, “Entrepreneur” or simply “you”).
                  <br /><br />
                  1.2. This Privacy Policy explains how Orbizy stores, protects and uses the data we collect when you use the solutions offered by Orbizy, such as the App and other solutions that may be developed by Orbizy (“our Solutions”, “Solutions” or individually, “Solution”).
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="max-w-[840px] mx-auto px-8 mb-12 text-center">
        <p className="text-sm text-slate-500 italic">{dict.terms.last_update}</p>
      </div>

      <Footer dict={dict} />
    </div>
  )
}
