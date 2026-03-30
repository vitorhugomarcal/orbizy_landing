"use client"

import Apple from "@/assets/apple"
import Facebook from "@/assets/facebook"
import Instagram from "@/assets/instagram"
import Linkedin from "@/assets/linkedin"
import logo from "@/assets/logo.png"
import Playstore from "@/assets/playstore"
import Tiktok from "@/assets/tiktok"
import { CurrentYear } from "@/utils/currentYear"
import {
  Award,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  HelpCircle,
  Mail,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Separator } from "./ui/separator"

interface FooterProps {
  dict?: any
}

export function Footer({ dict }: FooterProps) {
  if (!dict?.footer) return null;

  return (
    <footer className="w-full bg-linear-to-br from-purple-600 via-purple-500 to-orange-500 text-white">
      {/* Newsletter Section */}
      <div className="bg-black/10 py-12">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {dict.footer.newsletter.title}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {dict.footer.newsletter.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={dict.footer.newsletter.placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-6">
              {dict.footer.newsletter.button}
            </Button>
          </div>

          <p className="text-center text-xs text-white/60 mt-3">
            {dict.footer.newsletter.disclaimer}
          </p>
        </div>
      </div>

      {/* Download Apps Section */}
      <div className="py-12 border-b border-white/20">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="text-center mb-8">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30 mb-4"
            >
              {dict.footer.apps.badge}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {dict.footer.apps.title}
            </h2>
            <p className="text-white/80">
              {dict.footer.apps.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button
              variant="secondary"
              className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all"
              asChild
            >
              <Link href="https://my.orbizy.app" rel="nofollow">
                <Globe className="w-5 h-5 mr-2" />
                {dict.footer.apps.web}
              </Link>
            </Button>

            <Button
              variant="secondary"
              className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all group"
            >
              <Playstore className="w-5 h-5 mr-2" />
              {dict.footer.apps.playstore}
            </Button>

            <Button
              variant="secondary"
              className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all"
              asChild
            >
              <Link href={"https://apps.apple.com/br/app/orbizy/id6670499792"}>
                <Apple className="w-5 h-5 mr-2" />
                {dict.footer.apps.appstore}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={logo}
                  alt="Logo Orbizy"
                  width={150}
                  height={50}
                  className="h-auto w-auto mb-4"
                />
                <p className="text-white/80 text-sm leading-relaxed">
                  {dict.footer.company.description}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2 text-green-300" />
                  <span>{dict.footer.company.trust[0]}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 mr-2 text-yellow-300" />
                  <span>{dict.footer.company.trust[1]}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2 text-blue-300" />
                  <span>{dict.footer.company.trust[2]}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{dict.footer.navigation.title}</h3>
              <ul className="space-y-3">
                {dict.footer.navigation.links.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{dict.footer.support.title}</h3>
              <ul className="space-y-3">
                {dict.footer.support.links.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors flex items-center group"
                    >
                      {link.name === "Tutoriais" || link.name === "Tutorials" ? <FileText className="w-4 h-4 mr-2" /> :
                        link.name === "Central de Ajuda" || link.name === "Help Center" ? <HelpCircle className="w-4 h-4 mr-2" /> :
                          link.name === "Contato" || link.name === "Contact" ? <Mail className="w-4 h-4 mr-2" /> :
                            <Zap className="w-4 h-4 mr-2" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                {/* <div className="flex items-center text-sm text-white/80">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 9999-9999</span>
                </div> */}
                <div className="flex items-center text-sm text-white/80">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>vhmarcal@orbizy.app</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{dict.footer.support.hours}</span>
                </div>
              </div>
            </div>

            {/* Business Types */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{dict.footer.segments.title}</h3>
              <div className="grid grid-cols-1 gap-2">
                {dict.footer.segments.items.map((type: string, index: number) => (
                  <Link
                    key={index}
                    href={"/"}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <Star className="w-3 h-3 mr-2 opacity-60" />
                    {type}
                  </Link>
                ))}
              </div>

              {/* Stats Card */}
              <Card className="mt-6 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-white/80">
                      {dict.footer.satisfaction}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="py-8 border-t border-white/20">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">{dict.footer.social.title}</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/orbizyapp"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/orbizyapp"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://tiktok.com/@orbizyapp"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors group"
                  aria-label="TikTok"
                >
                  <Tiktok className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/orbizy"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Rating Display */}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xs text-white/80">
                  {dict.footer.social.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-white/20 bg-black/20">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="mb-4 md:mb-0">
              <p>
                &copy; <CurrentYear /> Orbizy. {dict.footer.bottom.rights}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {dict.footer.bottom.legal.map((link: any, index: number) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Separator className="my-4 bg-white/20" />

          <div className="text-center text-xs text-white/60">
            <p>
              {dict.footer.bottom.developed} • VHMarcal •
              <Link href="/sitemap" className="hover:text-white/80 ml-1">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
