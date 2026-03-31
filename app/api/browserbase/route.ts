import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.BROWSERBASE_API_KEY
  const projectId = process.env.BROWSERBASE_PROJECT_ID

  return NextResponse.json({
    success: true,
    apiKey: apiKey ? "OK" : "MISSING",
    projectId: projectId ? "OK" : "MISSING",
  })
}
