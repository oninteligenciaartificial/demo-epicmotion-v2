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
}

export function PortfolioGallery({
  title = 'Our Portfolio',
  archiveButton = {
    text: 'View all work',
    href: '#showreel',
  },
  images: customImages,
  className = '',
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const defaultImages = [
    { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80', alt: 'Film Production' },
    { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80', alt: 'Photography Session' },
    { src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&q=80', alt: 'Commercial Shoot' },
    { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&q=80', alt: 'Camera Equipment' },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80', alt: 'Event Coverage' },
    { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&q=80', alt: 'Behind the Scenes' },
    { src: 'https://images.unsplash.com/photo-1535016120720-40c646be5520?w=800&h=600&fit=crop&q=80', alt: 'Studio Setup' },
    { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80', alt: 'Cinematic Scene' },
    { src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop&q=80', alt: 'Color Grading' },
    { src: 'https://images.unsplash.com/photo-1524712245354-73ad03ade66c?w=800&h=600&fit=crop&q=80', alt: 'Creative Direction' },
    { src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&q=80', alt: 'Sound Design' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80', alt: 'Brand Identity' },
  ]

  const images = customImages || defaultImages

  const scatteredPositions = [
    { top: '5%', left: '5%', rotate: -8, scale: 0.9, zIndex: 3 },
    { top: '10%', left: '25%', rotate: 5, scale: 1.0, zIndex: 5 },
    { top: '0%', left: '45%', rotate: -3, scale: 1.1, zIndex: 7 },
    { top: '15%', left: '65%', rotate: 12, scale: 0.85, zIndex: 2 },
    { top: '5%', left: '82%', rotate: -6, scale: 0.95, zIndex: 4 },
    { top: '35%', left: '12%', rotate: 8, scale: 1.05, zIndex: 6 },
    { top: '30%', left: '35%', rotate: -10, scale: 0.9, zIndex: 3 },
    { top: '40%', left: '55%', rotate: 4, scale: 1.0, zIndex: 5 },
    { top: '25%', left: '75%', rotate: -7, scale: 0.95, zIndex: 4 },
    { top: '55%', left: '20%', rotate: 6, scale: 1.1, zIndex: 7 },
    { top: '50%', left: '45%', rotate: -4, scale: 0.85, zIndex: 2 },
    { top: '60%', left: '70%', rotate: 10, scale: 0.9, zIndex: 3 },
  ]

  return (
    <section
      ref={sectionRef}
      aria-label={title}
      className={`relative min-h-screen py-20 px-4 ${className}`}
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center pt-16 pb-12 px-8">
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 uppercase">{title}</h2>

          <Link
            href={archiveButton.href}
            className="inline-flex items-center gap-3 bg-primary text-background px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors group cursor-pointer"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="hidden md:block relative h-[700px] -mb-[100px]">
          {images.map((image, index) => {
            const pos = scatteredPositions[index % scatteredPositions.length]
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  top: pos.top,
                  left: pos.left,
                  zIndex: isHovered ? 20 : pos.zIndex,
                }}
                initial={{
                  opacity: 0,
                  rotate: pos.rotate,
                  scale: pos.scale * 0.8,
                  y: 50,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        rotate: isHovered ? 0 : pos.rotate,
                        scale: isHovered ? 1.15 : pos.scale,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div
                  className="relative w-48 md:w-56 lg:w-64 rounded-lg overflow-hidden transition-shadow duration-300"
                  style={{
                    boxShadow: isHovered
                      ? '0 20px 60px rgba(202, 138, 4, 0.3), 0 0 0 2px rgba(202, 138, 4, 0.5)'
                      : `rgba(0, 0, 0, 0.3) 0px 10px 30px`,
                  }}
                >
                  <img
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    className="w-full h-40 md:h-44 lg:h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs font-medium uppercase tracking-wider">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="block md:hidden relative pb-8">
          <div className="grid grid-cols-2 gap-4 px-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-video">
                  <img
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-xs font-display text-white uppercase tracking-wider">{image.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
