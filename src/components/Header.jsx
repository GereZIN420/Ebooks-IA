import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/Button'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Assinatura', href: '/assinatura' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="w-full z-50 border-b border-white/10 bg-black/18 shadow-[0_10px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/14">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/Untitled design - 2026-04-01T191221.045.png"
              alt="MK Books"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${isActive(item.href) ? 'text-blue-400 neon-text' : 'text-gray-300'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              Explorar
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-base font-medium transition-all duration-300 hover:text-blue-400 ${isActive(item.href) ? 'text-blue-400 neon-text' : 'text-gray-300'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button size="sm" className="w-full">
                  Explorar
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
