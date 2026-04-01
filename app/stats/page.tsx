"use client"

import { BarChart3, ExternalLink, MousePointerClick, TrendingUp } from "lucide-react"
import useSWR from "swr"

interface ClickStat {
  link_id: string
  link_name: string
  click_count: number
  last_clicked: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function StatsPage() {
  const { data: stats, error, isLoading } = useSWR<ClickStat[]>("/api/track-click", fetcher)

  const totalClicks = stats?.reduce((sum, stat) => sum + Number(stat.click_count), 0) || 0
  const topLink = stats?.[0]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-MX", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--primary)_0%,transparent_50%)] opacity-10" />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-foreground">Estadisticas de Clics</h1>
            <p className="text-muted-foreground text-sm">Seguimiento de tus enlaces</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <MousePointerClick className="h-8 w-8 text-primary" />
              <div>
                <p className="text-muted-foreground text-sm">Total Clics</p>
                <p className="font-bold text-2xl text-foreground">{totalClicks}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-muted-foreground text-sm">Enlaces Activos</p>
                <p className="font-bold text-2xl text-foreground">{stats?.length || 0}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <ExternalLink className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-muted-foreground text-sm">Mas Popular</p>
                <p className="truncate font-bold text-foreground text-lg">
                  {topLink?.link_name || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Table */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-center">
            <p className="text-destructive">Error al cargar las estadisticas</p>
          </div>
        )}

        {!isLoading && stats && stats.length > 0 && (
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-foreground text-sm">Enlace</th>
                  <th className="px-4 py-3 text-center font-medium text-foreground text-sm">Clics</th>
                  <th className="hidden px-4 py-3 text-right font-medium text-foreground text-sm sm:table-cell">
                    Ultimo Clic
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, index) => (
                  <tr key={stat.link_id} className="border-t border-border">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                          {index + 1}
                        </span>
                        <span className="truncate font-medium text-foreground text-sm">
                          {stat.link_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary text-sm">
                        {stat.click_count}
                      </span>
                    </td>
                    <td className="hidden px-4 py-3 text-right text-muted-foreground text-sm sm:table-cell">
                      {formatDate(stat.last_clicked)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && (!stats || stats.length === 0) && (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <MousePointerClick className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-muted-foreground">
              Aun no hay clics registrados. Comparte tus enlaces para comenzar a ver estadisticas.
            </p>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
          >
            Volver al perfil
          </a>
        </div>
      </div>
    </main>
  )
}
