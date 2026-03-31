"use client"

import { ProfileHeader } from "@/components/profile-header"
import { BentoCard } from "@/components/bento-card"
import { SocialLinkCard } from "@/components/social-link-card"
import {
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
  SpotifyIcon,
  GitHubIcon,
  DiscordIcon,
  TwitchIcon,
  WebsiteIcon,
  EmailIcon,
} from "@/components/social-icons"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Instagram",
    username: "@tuusuario",
    icon: <InstagramIcon className="h-6 w-6" />,
    href: "https://instagram.com",
    color: "#E4405F",
    followers: "125K",
  },
  {
    name: "X (Twitter)",
    username: "@tuusuario",
    icon: <TwitterIcon className="h-5 w-5" />,
    href: "https://twitter.com",
    color: "#000000",
    followers: "89K",
  },
  {
    name: "YouTube",
    username: "Tu Canal",
    icon: <YouTubeIcon className="h-6 w-6" />,
    href: "https://youtube.com",
    color: "#FF0000",
    followers: "250K",
  },
  {
    name: "TikTok",
    username: "@tuusuario",
    icon: <TikTokIcon className="h-5 w-5" />,
    href: "https://tiktok.com",
    color: "#000000",
    followers: "500K",
  },
  {
    name: "LinkedIn",
    username: "Tu Nombre",
    icon: <LinkedInIcon className="h-5 w-5" />,
    href: "https://linkedin.com",
    color: "#0A66C2",
    followers: "15K",
  },
  {
    name: "GitHub",
    username: "@tuusuario",
    icon: <GitHubIcon className="h-5 w-5" />,
    href: "https://github.com",
    color: "#181717",
    followers: "2.5K",
  },
]

const quickLinks = [
  { name: "Spotify", icon: <SpotifyIcon className="h-5 w-5" />, href: "#", color: "#1DB954" },
  { name: "Discord", icon: <DiscordIcon className="h-5 w-5" />, href: "#", color: "#5865F2" },
  { name: "Twitch", icon: <TwitchIcon className="h-5 w-5" />, href: "#", color: "#9146FF" },
  { name: "Web", icon: <WebsiteIcon className="h-5 w-5" />, href: "#", color: "#10B981" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <ProfileHeader
            name="Tu Nombre"
            username="tuusuario"
            bio="Creador de contenido digital. Compartiendo mi pasión por la tecnología, el diseño y la creatividad. Conecta conmigo en todas mis redes."
            avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
            verified
          />
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Stats Card */}
          <BentoCard className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Total Seguidores</h3>
              <p className="mt-2 text-4xl font-bold text-foreground">982K</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-primary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium">+12.5% este mes</span>
            </div>
          </BentoCard>

          {/* Quick Links */}
          <BentoCard colSpan={2}>
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/50 hover:bg-secondary"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: link.color }}
                  >
                    {link.icon}
                  </div>
                  <span className="text-xs font-medium text-foreground">{link.name}</span>
                </a>
              ))}
            </div>
          </BentoCard>

          {/* Social Networks */}
          <BentoCard colSpan={2} className="md:col-span-2">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Mis Redes Sociales</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.slice(0, 4).map((social) => (
                <SocialLinkCard
                  key={social.name}
                  name={social.name}
                  username={social.username}
                  icon={social.icon}
                  href={social.href}
                  color={social.color}
                  followers={social.followers}
                />
              ))}
            </div>
          </BentoCard>

          {/* Contact Card */}
          <BentoCard className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Contacto</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Colaboraciones, negocios y consultas profesionales
              </p>
            </div>
            <Button className="mt-4 w-full gap-2">
              <EmailIcon className="h-4 w-4" />
              Enviar Email
            </Button>
          </BentoCard>

          {/* More Links */}
          <BentoCard colSpan={2} className="md:col-span-2">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Más Conexiones</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.slice(4).map((social) => (
                <SocialLinkCard
                  key={social.name}
                  name={social.name}
                  username={social.username}
                  icon={social.icon}
                  href={social.href}
                  color={social.color}
                  followers={social.followers}
                />
              ))}
            </div>
          </BentoCard>

          {/* Latest Content Preview */}
          <BentoCard className="md:row-span-1">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Último Video</h3>
            <div className="aspect-video overflow-hidden rounded-lg bg-secondary">
              <div className="flex h-full items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Hecho con <span className="text-primary">♥</span> • Conecta todas tus redes en un solo lugar
          </p>
        </footer>
      </div>
    </main>
  )
}
