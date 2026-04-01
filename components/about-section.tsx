"use client"

import { MapPin, Calendar, Briefcase, Heart } from "lucide-react"

const skills = [
  "Creador de contenido",
  "Tecnologia",
  "Gaming",
  "Streaming",
  "Musica",
]

const interests = [
  "Videojuegos",
  "Gadgets",
  "Desarrollo web",
  "Anime",
  "Fitness",
]

export function AboutSection() {
  return (
    <section className="flex flex-col gap-8">
      {/* Bio */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-bold text-xl text-foreground">Sobre mi</h2>
        <p className="leading-relaxed text-muted-foreground">
          Hola! Soy VALDOCER, creador de contenido digital apasionado por la tecnologia, 
          los videojuegos y compartir experiencias con mi comunidad. Me encanta descubrir 
          nuevos gadgets y productos que hacen la vida mas facil y divertida.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Ubicacion</p>
            <p className="font-medium text-foreground text-sm">Mexico</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Activo desde</p>
            <p className="font-medium text-foreground text-sm">2020</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Ocupacion</p>
            <p className="font-medium text-foreground text-sm">Content Creator</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Comunidad</p>
            <p className="font-medium text-foreground text-sm">Creciendo juntos</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Lo que hago</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/10 px-3 py-1 text-primary text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Mis intereses</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-secondary-foreground text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
