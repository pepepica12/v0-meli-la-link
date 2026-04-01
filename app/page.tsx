"use client"

import { useState } from "react"
import { ProfileHeader } from "@/components/profile-header"
import { SocialLinks } from "@/components/social-links"
import { FeaturedLinks } from "@/components/featured-links"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { WishlistSection } from "@/components/wishlist-section"

export default function LinkPage() {
  const [activeSection, setActiveSection] = useState("links")

  return (
    <main className="min-h-screen bg-background">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--primary)_0%,transparent_50%)] opacity-10" />
      
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <ProfileHeader />
            <Navigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            
            {/* Stats preview (only on desktop) */}
            <div className="hidden rounded-xl border border-border bg-card p-4 md:block">
              <h3 className="mb-3 font-medium text-foreground text-sm">Mis redes</h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-secondary p-2">
                  <p className="font-bold text-foreground">9</p>
                  <p className="text-muted-foreground text-xs">Redes</p>
                </div>
                <div className="rounded-lg bg-secondary p-2">
                  <p className="font-bold text-foreground">3</p>
                  <p className="text-muted-foreground text-xs">Enlaces</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {activeSection === "links" && (
              <>
                <SocialLinks />
                <FeaturedLinks />
              </>
            )}

            {activeSection === "about" && <AboutSection />}

            {activeSection === "wishlist" && <WishlistSection />}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Hecho con amor por VALDOCER
          </p>
        </footer>
      </div>
    </main>
  )
}
