import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await Promise.all([
      sendWelcomeEmail(name, email),
      sendNotificationEmail(name, email, service, message),
      scheduleFollowUpEmail(name, email),
    ])

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

async function sendWelcomeEmail(name: string, email: string) {
  const subject = `Welcome to Epic Motion Group, ${name}!`
  const body = `Thank you for reaching out. We'll review your project and respond within 24 hours.`
  return { subject, body, to: email }
}

async function sendNotificationEmail(name: string, email: string, service: string, message: string) {
  return { type: 'notification', from: name, email, service, message }
}

async function scheduleFollowUpEmail(name: string, email: string) {
  const subject = `Following up on your project inquiry, ${name}`
  return { subject, to: email, scheduledIn: '3 days' }
}
