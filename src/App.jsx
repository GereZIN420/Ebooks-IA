import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import EbookTemplate from './pages/EbookTemplate'
import VideosIA from './pages/VideosIA'
import Assinatura from './pages/Assinatura'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
          <Header />
          
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biblioteca" element={<Biblioteca />} />
              <Route path="/ebook/:slug" element={<EbookTemplate />} />
              <Route path="/ebook/videos-profissionais-com-ia" element={<VideosIA />} />
              <Route path="/assinatura" element={<Assinatura />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />
              <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App