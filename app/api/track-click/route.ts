import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const { linkId, linkName, linkUrl } = await request.json()

    if (!linkId || !linkName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await sql`
      INSERT INTO link_clicks (link_id, link_name, link_url)
      VALUES (${linkId}, ${linkName}, ${linkUrl || null})
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
      SELECT 
        link_id,
        link_name,
        COUNT(*) as click_count,
        MAX(clicked_at) as last_clicked
      FROM link_clicks
      GROUP BY link_id, link_name
      ORDER BY click_count DESC
    `

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
