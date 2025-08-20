import { Link } from 'react-router-dom'
import { ExternalLink, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-slate-900/90 to-transparent border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <span className="font-bold text-xl gradient-text">eBooks IA</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Democratizando o uso prático da IA para quem quer ganhar dinheiro, tempo e liberdade através de eBooks interativos e conteúdo premium.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contato@ebooksIA.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+5511999999999" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/biblioteca" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link to="/assinatura" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Assinatura
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos-de-uso" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} eBooks IA. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Feito por{' '}
            <a
              href="https://merakigroup.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
            >
              Meraki Group
              <ExternalLink size={14} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer