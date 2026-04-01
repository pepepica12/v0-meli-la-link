"use client"

import { ExternalLink, Mail, Globe, Sparkles } from "lucide-react"

const featuredLinks = [
  {
    title: "Mi Sitio Web",
    description: "Portfolio y proyectos personales",
    url: "https://valdocer.com",
    icon: Globe,
  },
  {
    title: "Contacto",
    description: "Escribeme un email",
    url: "mailto:hola@valdocer.com",
    icon: Mail,
  },
  {
    title: "Wishlist en Mercado Libre",
    description: "Mis productos favoritos",
    url: "https://meli.la/2WHXTw6",
    icon: Sparkles,
  },
]

export function FeaturedLinks() {
  return (
    <section>
      <h2 className="mb-6 font-semibold text-2xl text-foreground">
        Enlaces Destacados
      </h2>
      <div className="flex flex-col gap-3">
        {featuredLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground text-sm">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
