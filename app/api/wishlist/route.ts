import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const items = await sql`
      SELECT * FROM wishlist_items
      ORDER BY priority ASC, created_at DESC
    `
    return NextResponse.json(items)
  } catch (error) {
    console.error("Error fetching wishlist:", error)
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, price, imageUrl, productUrl, priority } = await request.json()

    const result = await sql`
      INSERT INTO wishlist_items (title, description, price, image_url, product_url, priority)
      VALUES (${title}, ${description}, ${price || null}, ${imageUrl || null}, ${productUrl}, ${priority || 999})
      RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error adding wishlist item:", error)
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 })
  }
}
