'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X, Play, ArrowRight, Film, Camera, Clapperboard, Palette, Mail, MapPin, Phone, Sparkles, Award, Clock, Star } from 'lucide-react'
import { useScroll, motion, useInView, AnimatePresence } from 'motion/react'
import { ContactForm } from '@/components/ui/contact-form'
import { PortfolioGallery } from '@/components/blocks/portfolio-gallery'

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <HeroContent />
        <MarqueeSection />
        <ServicesSection />
        <PortfolioGallery />
        <ProcessSection />
        <ShowreelSection />
        <ImageBanner />
        <StatsSection />
        <TestimonialsSection />
        <ImageGrid />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

const navItems = [
  { name: 'SERVICES', href: '#services' },
  { name: 'WORK', href: '#showreel' },
  { name: 'TESTIMONIALS', href: '#testimonials' },
  { name: 'CONTACT', href: '#contact' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-50 w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={cn(
          'mx-auto max-w-7xl px-6 transition-all duration-500 lg:px-12',
          scrolled
            ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        )}>
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="home" className="flex items-center gap-3 cursor-pointer">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer tracking-wider uppercase"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-5 py-2 rounded-full bg-primary text-background text-sm font-semibold hover:bg-primary/90 transition-colors duration-200 cursor-pointer tracking-wider uppercase"
              >
                Start a Project
              </Link>
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuState}
              className="lg:hidden cursor-pointer p-2"
            >
              <AnimatePresence mode="wait">
                {menuState ? <X key="x" className="size-6" /> : <Menu key="menu" className="size-6" />}
              </AnimatePresence>
            </button>
          </div>

          <motion.div
            className={cn(
              'lg:hidden overflow-hidden',
              menuState ? 'block' : 'hidden'
            )}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: menuState ? 'auto' : 0, opacity: menuState ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuState(false)}
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuState(false)}
                className="block px-5 py-3 rounded-full bg-primary text-background text-center font-medium cursor-pointer"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

const HeroContent = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-40"
          src="/videos/Photographer_directing_fashion_p…_202605132020.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-sm text-primary mb-8 tracking-widest uppercase">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Cinematic Visual Experiences
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-display leading-[0.85] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          WE CRAFT
          <br />
          <span className="text-gradient">VISUAL STORIES</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Premium audiovisual production that captivates, inspires, and converts. From concept to final cut.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="#showreel"
            className="group h-12 px-8 rounded-full bg-primary text-background font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
          >
            <Play className="size-4" />
            WATCH SHOWREEL
          </Link>
          <Link
            href="#contact"
            className="group h-12 px-8 rounded-full border border-white/20 text-foreground font-medium flex items-center gap-2 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
          >
            START A PROJECT
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="size-6 border border-white/20 rounded-full flex items-center justify-center">
          <motion.div
            className="size-1.5 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

const marqueeItems = [
  'Video Production',
  'Photography',
  'Commercials',
  'Brand Identity',
  'Motion Design',
  'Color Grading',
  'Sound Design',
  'Creative Direction',
]

const MarqueeSection = () => {
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="text-2xl md:text-3xl font-display text-muted-foreground/30 flex items-center gap-12">
            {item}
            <span className="size-2 rounded-full bg-primary/40 flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const services = [
  {
    title: 'Video Production',
    image: '/images/generated/service-video-production-1778789242343.png',
  },
  {
    title: 'Photography',
    image: '/images/generated/service-photography-1778789269694.png',
  },
  {
    title: 'Commercials',
    image: '/images/generated/service-commercials-1778789293804.png',
  },
  {
    title: 'Brand Identity',
    image: '/images/generated/service-brand-identity-1778789317364.png',
  },
  {
    title: 'Motion Design',
    image: '/images/generated/service-motion-design-1778789340096.png',
  },
  {
    title: 'Color Grading',
    image: '/images/generated/service-color-grading-1778789367679.png',
  },
  {
    title: 'Sound Design',
    image: '/images/generated/service-sound-design-1778789391292.png',
  },
  {
    title: 'Creative Direction',
    image: '/images/generated/service-creative-direction-1778789412935.png',
  },
]

const ServicesSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto bg-secondary/20 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">What We Do</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 uppercase">
            SERVICES BUILT FOR{' '}
            <span className="text-gradient">IMPACT</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light">
            Every project is a masterpiece in the making. We bring your vision to life with cinematic excellence.
          </p>
        </div>

        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className="flex -space-x-72 md:-space-x-80 pb-8 pt-40 items-end justify-center">
            {services.map((service, index) => {
              const totalImages = services.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = 120 - distanceFromMiddle * 20

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
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-display text-white uppercase tracking-wider">{service.title}</h3>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="block md:hidden relative pb-8">
          <div className="grid grid-cols-2 gap-4 px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-sm font-display text-white uppercase tracking-wider">{service.title}</h3>
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

const processSteps = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Discovery',
    description: 'We dive deep into your brand, audience, and goals to craft the perfect creative strategy.',
  },
  {
    number: '02',
    icon: Clapperboard,
    title: 'Production',
    description: 'Our team brings the vision to life with cinematic equipment and expert direction.',
  },
  {
    number: '03',
    icon: Film,
    title: 'Post-Production',
    description: 'Precision editing, color grading, and sound design to polish every frame.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Delivery',
    description: 'Final assets optimized for every platform, ready to make an impact.',
  },
]

const ProcessSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 md:py-40 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display">
            OUR{' '}
            <span className="text-gradient">PROCESS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <span className="text-6xl font-display text-primary/10 block mb-4">{step.number}</span>
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-2 uppercase tracking-wider">{step.title}</h3>
              <p className="text-muted-foreground font-light text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ShowreelSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPlaying, setIsPlaying] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="showreel" ref={ref} className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Our Work</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display">
              FEATURED{' '}
              <span className="text-gradient">PROJECTS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 lg:mt-0 font-light">
            A curated selection of our most impactful cinematic work.
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden cinematic-border group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="size-full object-cover"
            src="/videos/Photographer_directing_fashion_p…_202605132020.mp4"
          />
          <div className={cn(
            'absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300',
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          )}>
            <motion.button
              onClick={togglePlay}
              className="size-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <div className="flex gap-2">
                  <div className="w-2 h-6 bg-background rounded" />
                  <div className="w-2 h-6 bg-background rounded" />
                </div>
              ) : (
                <Play className="size-8 text-background ml-1" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const stats = [
  { value: '150', label: 'Projects Delivered', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '12', label: 'Industry Awards', suffix: '' },
  { value: '8', label: 'Years of Excellence', suffix: '+' },
]

const ImageBanner = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[500px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden md:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/images/generated/banner-featured-1778789435291.png"
              alt="Behind the scenes photography session"
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Featured</span>
              <h3 className="text-2xl md:text-3xl font-display text-white mt-2 uppercase">Behind Every Shot</h3>
              <p className="text-white/70 text-sm mt-2">The art of capturing moments that tell your story</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/generated/banner-production-1778789456874.png"
                alt="Film production set"
                className="size-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-display text-white uppercase">Production</h4>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/generated/banner-commercial-1778789478000.png"
                alt="Commercial filming"
                className="size-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-display text-white uppercase">Commercials</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const StatsSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-display text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: 'Epic Motion transformed our brand vision into a cinematic masterpiece. The attention to detail is unmatched.',
    author: 'Alexandra Chen',
    role: 'CEO, Luxe Brands',
    image: 'AC',
  },
  {
    quote: 'Working with them felt like collaborating with artists who truly understand the power of visual storytelling.',
    author: 'Marcus Rivera',
    role: 'Creative Director, Studio X',
    image: 'MR',
  },
  {
    quote: 'The final product exceeded every expectation. Our conversion rate increased by 340% after the campaign.',
    author: 'Sarah Mitchell',
    role: 'Marketing Lead, Apex Co',
    image: 'SM',
  },
]

const TestimonialsSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-32 md:py-40 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display">
            CLIENT{' '}
            <span className="text-gradient">VOICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className={cn(
                'p-8 md:p-10 rounded-2xl transition-all duration-500 cursor-pointer',
                index === activeIndex
                  ? 'bg-primary/10 border border-primary/20 scale-[1.02]'
                  : 'glass-card'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="size-4 text-primary fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-8 font-light leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'size-2 rounded-full transition-all duration-300 cursor-pointer',
                index === activeIndex ? 'bg-primary w-8' : 'bg-white/20'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ImageGrid = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    { src: '/images/generated/grid-camera-equipment-1778789506103.png', alt: 'Camera equipment' },
    { src: '/images/generated/grid-event-coverage-1778789534067.png', alt: 'Event coverage' },
    { src: '/images/generated/grid-behind-scenes-1778789553721.png', alt: 'Behind the scenes' },
    { src: '/images/generated/grid-studio-setup-1778789574730.png', alt: 'Studio setup' },
    { src: '/images/generated/grid-cinematic-scene-1778789594140.png', alt: 'Cinematic scene' },
    { src: '/images/generated/grid-color-grading-1778789614429.png', alt: 'Color grading' },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Gallery</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase">
            Behind The{' '}
            <span className="text-gradient">Scenes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={cn(
                'relative rounded-xl overflow-hidden group',
                index === 0 || index === 3 ? 'row-span-2' : ''
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="size-8 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-primary tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">
              LET&apos;S CREATE{' '}
              <span className="text-gradient">TOGETHER</span>
            </h2>
            <p className="text-muted-foreground mb-12 font-light leading-relaxed">
              Ready to elevate your brand with cinematic excellence? Tell us about your project and we&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">hello@epicmotion.group</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-secondary/30 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="size-5 text-primary" />
                <span className="font-medium">Response Time</span>
              </div>
              <p className="text-muted-foreground text-sm">
                We typically respond within 24 hours during business days. For urgent inquiries, reach us via WhatsApp.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-8 md:p-10 rounded-2xl glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display mb-2 uppercase tracking-wider">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-8">Fill out the form and we&apos;ll get back to you shortly.</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: ['Video Production', 'Photography', 'Commercials', 'Brand Identity'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Work', 'Careers', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ]

  return (
    <footer className="pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground mt-6 max-w-sm font-light">
              Premium audiovisual production that captivates, inspires, and converts. Crafting visual stories since 2018.
            </p>
            <div className="flex gap-4 mt-8">
              {['Instagram', 'YouTube', 'Vimeo', 'LinkedIn'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="size-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer text-xs"
                  aria-label={social}
                >
                  {social[0]}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display uppercase tracking-wider mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Epic Motion Group. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 14L20 10L28 14V26L20 30L12 26V14Z" fill="currentColor" opacity="0.2" />
        <path d="M12 14L20 10L28 14V26L20 30L12 26V14Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
      </svg>
      <span className="font-display text-2xl tracking-[0.2em]">EPIC MOTION</span>
    </div>
  )
}
