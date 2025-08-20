import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Vim do site dos eBooks IA e gostaria de mais informações.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 animate-pulse-neon"
      style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)'
      }}
    >
      <MessageCircle size={28} />
    </motion.button>
  )
}

export default WhatsAppButton