'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

interface PortfolioGalleryProps {
  title?: string
  archiveButton?: {
    text: string
    href: string
  }
  images?: Array<{
    src: string
    alt: string
    title?: string
  }>
  className?: string
  maxHeight?: number
  spacing?: string
  onImageClick?: (index: number) => void
  pauseOnHover?: boolean
  marqueeRepeat?: number
}

export function PortfolioGallery({
  title = 'Our Portfolio',
  archiveButton = {
    text: 'View all work',
    href: '#showreel',
  },
  images: customImages,
  className = '',
  maxHeight = 120,
  spacing = '-space-x-72 md:-space-x-80',
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const defaultImages = [
    {
      src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80',
      alt: 'Film Production',
    },
    {
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80',
      alt: 'Photography Session',
    },
    {
      src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&q=80',
      alt: 'Commercial Shoot',
    },
    {
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&q=80',
      alt: 'Camera Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
      alt: 'Event Coverage',
    },
    {
      src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&q=80',
      alt: 'Behind the Scenes',
    },
    {
      src: 'https://images.unsplash.com/photo-1535016120720-40c646be5520?w=800&h=600&fit=crop&q=80',
      alt: 'Studio Setup',
    },
    {
      src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80',
      alt: 'Cinematic Scene',
    },
    {
      src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop&q=80',
      alt: 'Color Grading',
    },
    {
      src: 'https://images.unsplash.com/photo-1524712245354-73ad03ade66c?w=800&h=600&fit=crop&q=80',
      alt: 'Creative Direction',
    },
  ]

  const images = customImages || defaultImages

  return (
    <section
      ref={sectionRef}
      aria-label={title}
      className={`relative min-h-screen py-20 px-4 ${className}`}
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto bg-secondary/20 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 uppercase">{title}</h2>

          <Link
            href={archiveButton.href}
            className="inline-flex items-center gap-3 bg-primary text-background px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors group mb-20 cursor-pointer"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20

              const zIndex = totalImages - index

              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ zIndex }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                          opacity: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
              'flex-row'
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex shrink-0 justify-around [gap:var(--gap)]',
                    'animate-marquee flex-row',
                    {
                      'group-hover:[animation-play-state:paused]': pauseOnHover,
                    }
                  )}
                >
                  {images.map((image, index) => (
                    <motion.div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          className="w-full h-full object-cover object-left-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
