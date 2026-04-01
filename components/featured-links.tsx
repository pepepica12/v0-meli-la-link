"use client"

import { ExternalLink, Mail, Globe, Sparkles } from "lucide-react"

const featuredLinks = [
  {
    id: "website",
    title: "Mi Sitio Web",
    description: "Portfolio y proyectos personales",
    url: "https://valdocer.com",
    icon: Globe,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "contact",
    title: "Contacto",
    description: "Escribeme un email",
    url: "mailto:hola@valdocer.com",
    icon: Mail,
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "wishlist-meli",
    title: "Wishlist en Mercado Libre",
    description: "Mis productos favoritos",
    url: "https://meli.la/2WHXTw6",
    icon: Sparkles,
    gradient: "from-yellow-500/20 to-yellow-500/5",
  },
]

export function FeaturedLinks() {
  const trackClick = async (linkId: string, url: string) => {
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          linkId: `featured-${linkId}`,
          linkType: "featured",
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
        Enlaces Destacados
      </h2>
      <div className="flex flex-col gap-3">
        {featuredLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick(link.id, link.url)}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-gradient-to-r ${link.gradient} p-4 transition-all hover:border-primary/30 hover:shadow-lg`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-card shadow-sm">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
