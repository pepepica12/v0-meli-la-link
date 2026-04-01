import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const { linkId, linkType, linkUrl } = await request.json()

    await sql`
      INSERT INTO link_clicks (link_id, link_type, link_url)
      VALUES (${linkId}, ${linkType}, ${linkUrl})
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error tracking click:", error)
    return NextResponse.json({ error: "Failed to track click" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const stats = await sql`
      SELECT link_id, link_type, COUNT(*) as clicks
      FROM link_clicks
      GROUP BY link_id, link_type
      ORDER BY clicks DESC
    `
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
