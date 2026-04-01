import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Zap,
  Bot,
  Sparkles,
  Layout,
  MessageSquare,
  Search,
  FileText,
  Share2,
  Image as ImageIcon,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef()
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    // Reveal animations for sections
    gsap.utils.toArray('.reveal-section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    const id = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-neon-purple/30">
      <SEO
        description="Catálogo completo de conteúdos de IA para empresas. Aprenda do básico ao avançado e aplique na prática."
        url="/"
      />

      {/* 1. Hero Section - Pareto Style (Dark Roxo/Azul) */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left space-y-8">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-1.5 text-sm font-medium tracking-wide">
                CATÁLOGO COMPLETO DE IA
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Catálogo completo <br /> de <span className="text-neon-purple">IA para empresas</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
                Uma plataforma com conteúdos de IA do básico ao avançado para sua empresa aprender, aplicar e crescer.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 rounded-full h-14 text-base font-semibold">
                  <Link to="/assinatura">CONHECER PLANOS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white px-8 rounded-full h-14 text-base font-semibold">
                  <Link to="/contato">FALAR COM ESPECIALISTA</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Ebooks e Guias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Semanal</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Atualizações</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Trilhas por Área</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] flex items-center justify-center">
                <video
                  src="/videos/hero.mp4"
                  poster="/thumbs/hero.jpg"
                  className="w-full h-full object-contain p-3"
                  controls
                />
                {/* Overlay Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção 3 Retângulos (Imagens) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O conhecimento que transforma IA em resultado</h2>
            <p className="text-white/60 mt-3">Veja exemplos de eBooks exclusivos do nosso catálogo.</p>
          </div>
          <div className="relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {(() => {
                  const cards = [
                    { title: 'IA na Prática: Automação Total para Empresas', image: '/ebooks/ebook1.png' },
                    { title: 'Chatbots que Vendem: Atendimento e Vendas com IA', image: '/ebooks/ebook2.png' },
                    { title: 'Design e Criativos com IA: Imagens, Anúncios e Identidade', image: '/ebooks/ebook3.png' },
                    { title: 'Criação de Conteúdo com IA: Produção Automática para Escalar', image: '/ebooks/ebook4.png' },
                    { title: 'Vídeos com IA: Scripts, Edição e Escala de Conteúdo', image: '/ebooks/ebook5.png' },
                    { title: 'Marketing 10x: Conteúdo, SEO e Tráfego com IA', image: '/ebooks/ebook6.png' }
                  ]
                  const totalPages = Math.ceil(cards.length / 3)
                  const start = (carouselIndex % totalPages) * 3
                  return cards.slice(start, start + 3).map((card, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <div className="h-0.5 w-12 bg-neon-purple mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <h3 className="text-lg font-bold leading-tight text-white group-hover:text-neon-purple transition-colors duration-300">
                          {card.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCarouselIndex(prev => (prev - 1 + 2) % 2)}
              className="absolute left-[-2rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCarouselIndex(prev => (prev + 1) % 2)}
              className="absolute right-[-2rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`transition-all duration-500 rounded-full ${i === carouselIndex
                  ? 'w-8 h-2.5 bg-neon-purple'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bloco Azul (Texto Esquerda / Imagem Direita) */}
      <section className="reveal-section py-24 px-6 bg-[#080c14]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">PLATAFORMA DE EBOOKS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Seu catálogo de eBooks de IA, <span className="text-blue-500">do básico ao avançado</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Conteúdos organizados para você aprender, aplicar e escalar com IA.
              </p>
              <Link to="/assinatura" className="inline-flex items-center text-blue-400 font-semibold hover:underline">
                Conhecer nossos planos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative rounded-[36px] overflow-hidden border border-blue-500/20 bg-blue-900/10 aspect-video flex items-center justify-center">
              <img src="/section/section2.png" alt="Seção catálogo de eBooks" className="w-full h-full object-contain p-3" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Grid de Cards com Blur (Gaussian Blur) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">O que você encontra no catálogo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Bot />, title: 'Automação e Processos' },
              { icon: <MessageSquare />, title: 'Vendas e Atendimento com IA' },
              { icon: <Search />, title: 'Marketing e SEO com IA' },
              { icon: <Share2 />, title: 'Tráfego e Aquisição' },
              { icon: <FileText />, title: 'Copywriting e Conteúdo' },
              { icon: <ImageIcon />, title: 'Design e Criativos' },
              { icon: <Layout />, title: 'Sites e Landing Pages' },
              { icon: <Linkedin />, title: 'Social e LinkedIn' }
            ].map((card, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent backdrop-blur-xl hover:bg-white/[0.05] transition-all hover:border-neon-purple/30 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple/40 via-neon-blue/30 to-transparent flex items-center justify-center mb-6 text-white/80 shadow-[0_0_30px_rgba(180,126,255,0.25)]">
                  <span className="text-neon-purple">{card.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  Conteúdos práticos com exemplos reais para aplicar na sua empresa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Oferta de Acesso (entre catálogo e plataforma) */}
      <section className="reveal-section py-20 px-6 bg-gradient-to-b from-[#06060a] via-[#090812] to-[#07070b] border-y border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-[60%] w-full">
              <div className="text-left mb-8 flex flex-col items-start px-0">
                <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-1.5">OFERTA DOS EBOOKS</Badge>
                <h2 className="text-2xl md:text-4xl font-bold mt-5 leading-tight">
                  Acesso completo à plataforma <span className="text-neon-purple">ou compra avulsa</span>
                </h2>
                <p className="text-white/60 mt-4 text-sm md:text-base leading-relaxed max-w-2xl">
                  Você pode assinar no plano mensal ou anual e liberar todos os eBooks com atualizações semanais exclusivas.
                  Se preferir, também pode conferir o catálogo e comprar conteúdos separadamente.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white rounded-full px-10 h-14 text-base">
                  <Link to="/assinatura">Quero assinar a plataforma <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-10 h-14 text-base">
                  <Link to="/assinatura">Ver planos e benefícios</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-[40%] flex justify-center items-center">
              <div className="relative group w-full scale-[1.1]">
                <div className="absolute -inset-20 bg-gradient-to-r from-neon-purple/20 to-neon-blue/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
                <video
                  src="/videos/Capivara%20Lendo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bloco Roxo (Texto Esquerda / Imagem Direita) */}
      <section className="reveal-section py-24 px-6 bg-[#0d0a14]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20">PLATAFORMA DE IA</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Tudo sobre IA <br /> <span className="text-neon-purple">em um só lugar</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Do básico ao avançado: marketing, vendas, operações e produto com aplicação prática.
              </p>
              <Button asChild className="bg-neon-purple text-white rounded-full px-8">
                <Link to="/assinatura">Conhecer Planos</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative rounded-3xl overflow-hidden border border-neon-purple/20 bg-neon-purple/10 aspect-video flex items-center justify-center">
              <img src="/section/section3.png" alt="Imagem seção plataforma" className="w-full h-full object-contain p-3" />
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Sessão Convite */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-r from-[#0b0b12] to-[#0a0a0f]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative rounded-3xl overflow-hidden border border-neon-purple/20 bg-neon-purple/10 aspect-[16/10] flex items-center justify-center">
              <img src="/section/section4.png" alt="Seção convite IA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20">PLATAFORMA DE EBOOKS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">IA aplicada ao seu negócio, <span className="text-neon-purple">com método e clareza</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Conteúdos organizados e fáceis de entender para você usar IA e gerar resultados na sua empresa.
              </p>
              <Button asChild className="bg-neon-purple text-white rounded-full px-8">
                <Link to="/assinatura">Conhecer Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5.8 Logos IA */}
      <section className="reveal-section py-24 px-6 border-y border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-9">
            <h2 className="text-[2.1rem] md:text-4xl font-bold">As IAs mais usadas do mercado, explicadas passo a passo para você gerar resultados.</h2>
            <p className="text-white/60 mt-4 text-base">Conteúdo atualizado semanalmente e um blog que acompanha as novidades do mercado.</p>
          </div>
          <div className="overflow-hidden">
            <div className="logo-marquee flex gap-12 items-center">
              {[
                'ChatGPT',
                'Claude',
                'Gemini',
                'Midjourney',
                'Perplexity',
                'Runway',
                'Leonardo AI',
                'Notion',
                'Canva',
                'ElevenLabs'
              ].map((name, i) => (
                <div key={i} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition">
                  <span className="text-base text-white/70">{name}</span>
                </div>
              ))}
              {[
                'ChatGPT',
                'Claude',
                'Gemini',
                'Midjourney',
                'Perplexity',
                'Runway',
                'Leonardo AI',
                'Notion',
                'Canva',
                'ElevenLabs'
              ].map((name, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition">
                  <span className="text-base text-white/70">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-marquee { animation: marquee 25s linear infinite; width: max-content; }
        `}</style>
      </section>

      {/* 5.9 Vídeos Virais */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Veja alguns dos vídeos virais que nossos membros criaram com nossos eBooks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/videos/viral/v1.mp4',
              '/videos/viral/v2.mp4',
              '/videos/viral/v3.mp4',
              '/videos/viral/v4.mp4',
              '/videos/viral/v5.mp4',
              '/videos/viral/v6.mp4',
              '/videos/viral/v7.mp4',
              '/videos/viral/v8.mp4'
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[9/16]">
                <video src={src} autoPlay muted loop playsInline className="w-full h-full object-contain p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Moodboard (imagem final do Lucas) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-[85rem]">
          <img
            src="/moodboard/moodboard-lucas.png"
            alt="Moodboard atualizado da seção de conteúdo do eBooks IA"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* 7. Parceiros (Logos) */}
      <section className="reveal-section py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-30 hover:opacity-50 transition-opacity">
            <div className="text-xl font-bold tracking-tighter">HOTMART</div>
            <div className="text-xl font-bold tracking-tighter">KIWIFY</div>
            <div className="text-xl font-bold tracking-tighter">GOOGLE ADS</div>
            <div className="text-xl font-bold tracking-tighter">META PARTNER</div>
            <div className="text-xl font-bold tracking-tighter">PERPLEXITY</div>
            <div className="text-xl font-bold tracking-tighter">STRIPE</div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-transparent to-neon-purple/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Pronto para acessar o catálogo completo?
          </h2>
          <p className="text-xl text-white/60">
            Aprenda tudo sobre IA e implemente na sua empresa com conteúdo prático e atualizado.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 h-16 text-lg font-bold">
              <Link to="/assinatura">QUERO ACESSAR AGORA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home