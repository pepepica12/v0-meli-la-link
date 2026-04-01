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
    const { title, description, price, imageUrl, productUrl, category, priority } = await request.json()

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO wishlist_items (title, description, price, image_url, product_url, category, priority)
      VALUES (${title}, ${description || null}, ${price || null}, ${imageUrl || null}, ${productUrl || null}, ${category || null}, ${priority || 0})
      RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error adding wishlist item:", error)
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 })
    }

    await sql`DELETE FROM wishlist_items WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting wishlist item:", error)
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 })
  }
}
