import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const imageCache = new Map<string, string>()

export async function POST(request: Request) {
  try {
    const { prompt, key } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    if (key && imageCache.has(key)) {
      return NextResponse.json({ url: imageCache.get(key), cached: true })
    }

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid',
    })

    const imageUrl = response.data[0].url || ''

    if (key) {
      imageCache.set(key, imageUrl)
    }

    return NextResponse.json({ url: imageUrl, cached: false })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    )
  }
}
