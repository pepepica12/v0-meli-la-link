"use client"

import {
  Instagram,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  MessageCircle,
  ShoppingBag,
  Music2,
  Facebook
} from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/valdocer",
    icon: Instagram,
    color: "hover:text-pink-400",
  },
  {
    name: "X / Twitter",
    url: "https://twitter.com/valdocer",
    icon: Twitter,
    color: "hover:text-sky-400",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@valdocer",
    icon: Youtube,
    color: "hover:text-red-400",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@valdocer",
    icon: Music2,
    color: "hover:text-pink-400",
  },
  {
    name: "GitHub",
    url: "https://github.com/valdocer",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/valdocer",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/521XXXXXXXXXX", // sustituye con tu número real
    icon: MessageCircle,
    color: "hover:text-green-400",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/17GPgG4oWu/",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "Mercado Libre",
    url: "https://meli.la/2WHXTw6",
    icon: ShoppingBag,
    color: "hover:text-yellow-400",
  },
]

export function SocialLinks() {
  return (
    <section>
      <h2 className="mb-6 font-semibold">
        Redes Sociales
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center space-x-2 ${link.color}`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-muted-foreground group-hover:text-foreground">
                {link.name}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
