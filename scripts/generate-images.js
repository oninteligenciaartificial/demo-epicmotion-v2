const OpenAI = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const imagePrompts = {
  services: {
    videoProduction: 'Cinematic film set with professional camera equipment, dramatic lighting, dark moody atmosphere, luxury brand commercial style, premium audiovisual production',
    photography: 'Professional fashion photography session, model in elegant pose, studio lighting with soft shadows, high-end editorial style, luxury aesthetic',
    commercials: 'High-end commercial filming setup, cinematic lighting, luxury product showcase, premium brand advertisement style, dramatic shadows and highlights',
    brandIdentity: 'Luxury brand identity design process, mood board with premium materials, gold accents on dark background, sophisticated creative workspace',
    motionDesign: 'Motion graphics workstation, 3D animation software on screen, cinematic color grading interface, creative studio environment',
    colorGrading: 'Professional color grading suite, multiple calibrated monitors showing film frames, dark room with ambient lighting, post-production studio',
    soundDesign: 'Professional recording studio with high-end audio equipment, mixing console, cinematic atmosphere, dark moody lighting',
    creativeDirection: 'Creative director reviewing storyboards on large screen, cinematic lighting, luxury agency office, premium workspace aesthetic',
  },
  portfolio: {
    filmProduction: 'Behind the scenes of a luxury fashion film production, director working with camera crew, cinematic lighting, professional equipment',
    fashionShoot: 'High-end fashion photoshoot, elegant model in dramatic lighting, luxury brand campaign style, premium photography',
    commercialSet: 'Luxury car commercial filming, cinematic lighting setup, professional crew, high-end production value',
    cameraWork: 'Close-up of professional cinema camera with lens flare, dramatic lighting, premium equipment showcase',
    eventCoverage: 'Luxury event coverage, professional photographer capturing moments, elegant venue, cinematic atmosphere',
    behindScenes: 'Behind the scenes of premium video production, crew setting up lighting equipment, cinematic workspace',
    studioSetup: 'Professional photography studio with premium lighting equipment, dark moody atmosphere, luxury brand aesthetic',
    cinematicScene: 'Cinematic scene with dramatic lighting, film-grade color grading, luxury brand commercial style',
    editingSuite: 'Professional video editing suite, multiple monitors showing timeline, dark room with ambient lighting',
    finalProduct: 'Premium final product showcase, cinematic presentation, luxury brand aesthetic, high-end visual storytelling',
  },
  banner: {
    behindScenes: 'Behind every shot - professional photographer directing a luxury fashion shoot, cinematic lighting, dramatic atmosphere',
    production: 'Film production set with professional crew, cameras and lighting equipment, cinematic atmosphere, premium production value',
    commercials: 'High-end commercial filming, luxury product showcase, dramatic lighting, premium brand advertisement style',
  },
  grid: {
    cameraEquipment: 'Professional cinema camera equipment showcase, lenses and accessories, dramatic lighting, premium gear',
    eventCoverage: 'Professional event photography, capturing luxury moments, cinematic style, high-end coverage',
    behindScenesWork: 'Behind the scenes creative work, storyboards and planning, cinematic atmosphere, agency workspace',
    studioEnvironment: 'Professional studio environment, premium lighting setup, dark moody atmosphere, luxury aesthetic',
    cinematicScene2: 'Cinematic scene with dramatic shadows and highlights, film-grade quality, luxury brand style',
    colorGradingWork: 'Color grading work in progress, professional monitors showing before and after, post-production suite',
  },
}

async function generateAllImages() {
  const results = {}
  const totalImages = Object.values(imagePrompts).reduce((acc, section) => acc + Object.keys(section).length, 0)
  let current = 0

  console.log(`🎬 Generating ${totalImages} images with DALL-E 3...\n`)

  for (const [section, prompts] of Object.entries(imagePrompts)) {
    results[section] = {}
    console.log(`📁 Section: ${section}`)

    for (const [key, prompt] of Object.entries(prompts)) {
      current++
      console.log(`  [${current}/${totalImages}] ${key}...`)

      try {
        const response = await openai.images.generate({
          model: 'dall-e-3',
          prompt,
          size: '1024x1024',
          quality: 'hd',
          style: 'vivid',
        })

        const url = response.data[0].url
        results[section][key] = url
        console.log(`    ✅ Done`)
      } catch (error) {
        console.error(`    ❌ Error: ${error.message}`)
        results[section][key] = null
      }

      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    console.log('')
  }

  const fs = require('fs')
  fs.writeFileSync('lib/generated-images.json', JSON.stringify(results, null, 2))
  console.log('✅ All images saved to lib/generated-images.json')
}

generateAllImages().catch(console.error)
