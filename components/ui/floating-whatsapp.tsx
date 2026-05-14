'use client'
import { MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'

const WHATSAPP_NUMBER = '1234567890'
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in your services.'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-colors duration-200 cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="size-7 text-white" />
    </motion.a>
  )
}
