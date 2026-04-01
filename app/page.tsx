"use client"

import { useState, useEffect } from "react"
import Botones from "@/components/Botones"
import { ProfileHeader } from "@/components/profile-header"
import { SocialLinks } from "@/components/social-links"
import { FeaturedLinks } from "@/components/featured-links"
import { Navigation } from "@/components/navigation"

export default function LinkPage() {
  const [activeSection, setActiveSection] = useState("links")
  const [mensaje, setMensaje] = useState("")

  // Llamada real a tu backend en Railway
  useEffect(() => {
    if (activeSection === "links") {
      fetch("https://telemetria-node-production-0641.up.railway.app/api/ejemplo")
        .then(res => res.json())
        .then(data => setMensaje(data.mensaje))
        .catch(err => console.error("Error al conectar:", err))
    }
  }, [activeSection])

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-12 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <ProfileHeader />
            <Navigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </aside>

          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {activeSection === "links" && (
              <>
                <SocialLinks />
                <FeaturedLinks />
                <Botones />
                {/* Aquí se muestra la respuesta real del backend */}
                <p className="text-sm text-gray-400">
                  Respuesta del backend: {mensaje}
                </p>
              </>
            )}

            {activeSection === "about" && (
              <section>
                <h2 className="mb-6 font-bold text-xl">Sobre mí</h2>
                <p className="leading-relaxed">
                  Bienvenido a mi espacio personal donde comparto mis redes sociales y contenido.
                </p>
              </section>
            )}

            {activeSection === "wishlist" && (
              <section>
                <h2 className="mb-6 font-bold text-xl">Mi Wishlist</h2>
                <p className="leading-relaxed">
                  Productos y cosas que me gustaría tener en el futuro.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
