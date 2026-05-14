# Epic Motion Group — Image Generation Guide

## Brand Identity

Epic Motion Group is a **premium audiovisual production agency** based in Los Angeles.
Visual style: cinematic, dark, moody, professional. Think high-end film production.

---

## Core Visual Style

### Mood
- Dark backgrounds (near-black, deep charcoal)
- Dramatic single-source lighting (golden hour, practical lights, rim lighting)
- Shallow depth of field — bokeh, lens flares welcome
- Cinematic color grading: teal shadows, warm highlights (teal & orange palette)
- Film grain texture adds authenticity

### Forbidden
- Bright white backgrounds
- Stock-photo smiling people
- Flat / cartoon / illustration styles
- Colorful or pastel palettes
- Generic corporate imagery

---

## Prompt Formula

```
[Subject], [Lighting], cinematic photography, teal and orange color grading,
shallow depth of field, film grain, dark moody atmosphere, professional production,
8K, photorealistic, Epic Motion Group aesthetic
```

---

## Image Catalog

### Services Section (aspect: 16:9 → 1536x1024)

| slug | subject |
|------|---------|
| `service-video-production` | Professional cinema camera on tripod, film set with dramatic backlighting, teal-orange grade |
| `service-photography` | Photographer with medium format camera, golden backlight, studio environment |
| `service-commercials` | Commercial film crew on urban location, night shoot, neon reflections |
| `service-brand-identity` | Luxury brand moodboard flat lay, dark surface, editorial lighting |
| `service-motion-design` | Abstract light trails and particle effects, dark background, digital art in real space |
| `service-color-grading` | Split-screen color grading monitor in dark edit suite, warm and cool tones |
| `service-sound-design` | Professional audio mixing board, studio dim lighting, waveform visualizations |
| `service-creative-direction` | Director in dark set pointing at camera, dramatic silhouette, film clapperboard |

### Image Banner (aspect: mixed)

| slug | size | subject |
|------|------|---------|
| `banner-featured` | 1536x1024 | Behind-the-scenes fashion photography session, large format camera, dramatic studio lighting |
| `banner-production` | 1024x1536 | Film production grip equipment and cinema cameras on set, golden practical lights |
| `banner-commercial` | 1024x1536 | Commercial video shoot in modern location, crew visible, cinematic framing |

### Image Grid / Gallery (aspect: mixed)

| slug | size | subject |
|------|------|---------|
| `grid-camera-equipment` | 1024x1536 | Cinema camera closeup with anamorphic lens, dark background, dramatic light |
| `grid-event-coverage` | 1536x1024 | Live event aerial shot, stage lights, crowd silhouettes |
| `grid-behind-scenes` | 1536x1024 | Film crew behind the scenes, director's monitor showing take |
| `grid-studio-setup` | 1024x1536 | Professional video studio with lighting rigs and cyclorama wall |
| `grid-cinematic-scene` | 1536x1024 | Cinematic wide shot of actor in dramatic location, golden hour backlight |
| `grid-color-grading` | 1536x1024 | Color grading station with multiple monitors, dark edit suite, warm glow |

### Portfolio Gallery (aspect: 1536x1024)

| slug | subject |
|------|---------|
| `portfolio-01` | Aerial drone shot of city at golden hour, cinematic framing |
| `portfolio-02` | Fashion model shoot, high fashion editorial, dramatic backlight |
| `portfolio-03` | Concert live performance, stage lights, cinematic motion blur |
| `portfolio-04` | Product commercial shoot, luxury watch on dark surface, macro lens |
| `portfolio-05` | Corporate brand video shoot in glass office building |
| `portfolio-06` | Documentary style interview setup, window light, shallow DOF |
| `portfolio-07` | Underwater camera housing shoot, abstract light patterns |
| `portfolio-08` | Behind scenes of car commercial, desert location, golden hour |
| `portfolio-09` | Food commercial shoot with steam effects, dramatic side lighting |
| `portfolio-10` | Architecture video shoot of modern building, blue hour |
| `portfolio-11` | Sports action photography, high speed freeze frame, dramatic lighting |
| `portfolio-12` | Music video production, elaborate set design, smoke effects |

---

## How to Generate (for Claude Code)

When asked to generate or replace an image, use the `generate_image` tool with:

```
prompt: "[subject from catalog above], cinematic photography, teal and orange color grading, shallow depth of field, film grain, dark moody atmosphere, professional production, 8K photorealistic"
slug: "[slug from catalog]"
size: "[size from catalog]"
```

Images land in `public/images/generated/` and are committed to git.
Replace the corresponding Unsplash URL in the component with the returned `webPath`.
