"use client"

import { useState } from "react"
import { ProfileHeader } from "@/components/profile-header"
import { SocialLinks } from "@/components/social-links"
import { FeaturedLinks } from "@/components/featured-links"
import { Navigation } from "@/components/navigation"

export default function LinkPage() {
  const [activeSection, setActiveSection] = useState("links")

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            <ProfileHeader />
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </aside>

          {/* Main Content */}
          <div className="flex flex-col gap-12">
            {activeSection === "links" && (
              <>
                <SocialLinks />
                <FeaturedLinks />
              </>
            )}
            {activeSection === "about" && (
              <section>
                <h2 className="mb-6 font-semibold text-2xl text-foreground">
                  Sobre mi
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Bienvenido a mi espacio digital. Aqui encontraras todos mis enlaces,
                  redes sociales y contenido favorito en un solo lugar.
                </p>
              </section>
            )}
            {activeSection === "wishlist" && (
              <section>
                <h2 className="mb-6 font-semibold text-2xl text-foreground">
                  Mi Wishlist
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Productos y cosas que me gustaria tener. Proximamente mas detalles.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
