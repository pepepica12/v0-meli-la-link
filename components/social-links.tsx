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
    color: "hover:text-pink-400 hover:border-pink-400/30",
    bgHover: "hover:bg-pink-400/10",
  },
  {
    name: "X / Twitter",
    url: "https://twitter.com/valdocer",
    icon: Twitter,
    color: "hover:text-sky-400 hover:border-sky-400/30",
    bgHover: "hover:bg-sky-400/10",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@valdocer",
    icon: Youtube,
    color: "hover:text-red-400 hover:border-red-400/30",
    bgHover: "hover:bg-red-400/10",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@valdocer",
    icon: Music2,
    color: "hover:text-pink-400 hover:border-pink-400/30",
    bgHover: "hover:bg-pink-400/10",
  },
  {
    name: "GitHub",
    url: "https://github.com/valdocer",
    icon: Github,
    color: "hover:text-foreground hover:border-foreground/30",
    bgHover: "hover:bg-foreground/10",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/valdocer",
    icon: Linkedin,
    color: "hover:text-blue-400 hover:border-blue-400/30",
    bgHover: "hover:bg-blue-400/10",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/521XXXXXXXXXX",
    icon: MessageCircle,
    color: "hover:text-green-400 hover:border-green-400/30",
    bgHover: "hover:bg-green-400/10",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/17GPgG4oWu/",
    icon: Facebook,
    color: "hover:text-blue-600 hover:border-blue-600/30",
    bgHover: "hover:bg-blue-600/10",
  },
  {
    name: "Mercado Libre",
    url: "https://meli.la/2WHXTw6",
    icon: ShoppingBag,
    color: "hover:text-yellow-400 hover:border-yellow-400/30",
    bgHover: "hover:bg-yellow-400/10",
  },
]

export function SocialLinks() {
  const trackClick = async (linkName: string, url: string) => {
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          linkId: `social-${linkName.toLowerCase().replace(/\s+/g, "-")}`,
          linkName: linkName,
          linkUrl: url,
        }),
      })
    } catch (e) {
      console.error("Failed to track click:", e)
    }
  }

  return (
    <section>
      <h2 className="mb-6 font-semibold text-lg text-foreground">
        Redes Sociales
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick(link.name, link.url)}
              className={`group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all ${link.color} ${link.bgHover}`}
            >
              <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:scale-110" />
              <span className="text-muted-foreground text-xs transition-colors">
                {link.name}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
