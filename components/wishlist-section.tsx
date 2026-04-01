"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Gift, ShoppingCart, Sparkles } from "lucide-react"
import useSWR from "swr"

interface WishlistItem {
  id: number
  title: string
  description: string | null
  price: number | null
  image_url: string | null
  product_url: string
  priority: number
  created_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

// Default items to show if database is empty
const defaultItems: WishlistItem[] = [
  {
    id: 1,
    title: "Audifonos Inalambricos Gaming",
    description: "Audifonos con sonido envolvente 7.1 y microfono",
    price: 1299,
    image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_911398-MLM51559383638_092022-F.webp",
    product_url: "https://meli.la/2WHXTw6",
    priority: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Teclado Mecanico RGB",
    description: "Teclado gaming con switches mecanicos y retroiluminacion RGB",
    price: 899,
    image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_783902-MLM48659965498_122021-F.webp",
    product_url: "https://meli.la/2WHXTw6",
    priority: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Webcam Full HD 1080p",
    description: "Camara web con microfono integrado para streaming",
    price: 649,
    image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_677652-MLM49472713795_032022-F.webp",
    product_url: "https://meli.la/2WHXTw6",
    priority: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Mouse Gaming Ergonomico",
    description: "Mouse con sensor de alta precision y luces RGB",
    price: 499,
    image_url: "https://http2.mlstatic.com/D_NQ_NP_2X_770282-MLM50870199382_072022-F.webp",
    product_url: "https://meli.la/2WHXTw6",
    priority: 4,
    created_at: new Date().toISOString(),
  },
]

export function WishlistSection() {
  const { data, error, isLoading } = useSWR<WishlistItem[]>("/api/wishlist", fetcher)
  const [trackingClick, setTrackingClick] = useState<number | null>(null)

  const items = data && data.length > 0 ? data : defaultItems

  const handleClick = async (item: WishlistItem) => {
    setTrackingClick(item.id)
    
    // Track the click
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          linkId: `wishlist-${item.id}`,
          linkName: item.title,
          linkUrl: item.product_url,
        }),
      })
    } catch (e) {
      console.error("Failed to track click:", e)
    }

    // Open the link
    window.open(item.product_url, "_blank")
    setTrackingClick(null)
  }

  const formatPrice = (price: number | null) => {
    if (!price) return null
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price)
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-foreground">Mi Wishlist</h2>
          <p className="text-muted-foreground text-sm">
            Productos que me gustaria tener
          </p>
        </div>
      </div>

      {/* Mercado Libre Link */}
      <a
        href="https://meli.la/2WHXTw6"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/20"
        onClick={() => {
          fetch("/api/track-click", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              linkId: "meli-wishlist-main",
              linkName: "Ver toda mi lista en Mercado Libre",
              linkUrl: "https://meli.la/2WHXTw6",
            }),
          })
        }}
      >
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-yellow-500" />
          <div>
            <p className="font-semibold text-foreground">Ver toda mi lista en Mercado Libre</p>
            <p className="text-muted-foreground text-sm">Lista completa de productos</p>
          </div>
        </div>
        <ExternalLink className="h-5 w-5 text-yellow-500 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>

      {/* Items Grid */}
      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse rounded-xl border border-border bg-card p-4">
              <div className="mb-3 h-32 rounded-lg bg-secondary" />
              <div className="mb-2 h-4 w-3/4 rounded bg-secondary" />
              <div className="h-3 w-1/2 rounded bg-secondary" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              disabled={trackingClick === item.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-primary/30 hover:shadow-lg disabled:opacity-70"
            >
              {/* Image */}
              {item.image_url && (
                <div className="relative h-36 w-full overflow-hidden bg-secondary">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="h-full w-full object-contain p-2 transition-transform group-hover:scale-105"
                    crossOrigin="anonymous"
                  />
                  {item.price && (
                    <div className="absolute bottom-2 right-2 rounded-full bg-primary px-2 py-1 font-semibold text-primary-foreground text-xs">
                      {formatPrice(item.price)}
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 font-medium text-foreground text-sm line-clamp-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mb-3 text-muted-foreground text-xs line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-2 text-primary text-xs">
                  <Gift className="h-4 w-4" />
                  <span>Ver en Mercado Libre</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 opacity-0 transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-muted-foreground text-xs">
        Si quieres regalarme algo de mi lista, te lo agradecere mucho
      </p>
    </section>
  )
}
