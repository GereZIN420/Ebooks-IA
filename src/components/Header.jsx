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
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IA</span>
            </div>
            <span className="font-bold text-xl gradient-text">eBooks IA</span>
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