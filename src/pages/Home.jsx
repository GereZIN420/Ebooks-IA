import { useEffect, useRef } from 'react'
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
  Linkedin
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef()

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
  }, [])

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-neon-purple/30">
      <SEO 
        description="Domine a nova economia com IA. EBooks interativos para transformar conhecimento em resultados com Inteligência Artificial."
        url="/"
      />

      {/* 1. Hero Section - Pareto Style (Dark Roxo/Azul) */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left space-y-8">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-1.5 text-sm font-medium tracking-wide">
                #1 EM MARKETING E IA
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Cresça com a Maior <br /> em <span className="text-neon-purple">Marketing e IA</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
                Tenha acesso aos melhores profissionais de marketing, crescimento e IA para alcançar resultados reais.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 rounded-full h-14 text-base font-semibold">
                  TESTAR TESS AI
                </Button>
                <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white px-8 rounded-full h-14 text-base font-semibold">
                  FALAR COM EXPERT
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <div className="text-2xl font-bold">16+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Prêmios Globais</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$1B+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Gerenciados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Global AI Leader</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] flex items-center justify-center">
                <div className="text-white/20 text-center p-8 italic">
                   [Imagem Hero Principal - Foto Profissional / Mockup]
                </div>
                {/* Overlay Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção 3 Retângulos (Imagens) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 h-[500px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 italic">
                  [Imagem {i}]
                </div>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <h3 className="text-xl font-semibold mb-2">Ebook Especializado {i}</h3>
                  <p className="text-sm text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">Conteúdo técnico e prático.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bloco Azul (Texto Esquerda / Imagem Direita) */}
      <section className="reveal-section py-24 px-6 bg-[#080c14]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">SOLUÇÕES COM IA</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Implementamos e Operamos <span className="text-blue-500">Agentes de IA</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Nossa equipe entende cada particularidade do seu negócio para criar agentes personalizados que realmente geram valor.
              </p>
              <Link to="/assinatura" className="inline-flex items-center text-blue-400 font-semibold hover:underline">
                Saber mais sobre agentes <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative rounded-3xl overflow-hidden border border-blue-500/20 bg-blue-900/10 aspect-video flex items-center justify-center">
              <div className="text-blue-400/20 italic">[Imagem Futurista Azul]</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Grid de Cards com Blur (Gaussian Blur) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Especialidades em Marketing Digital</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MessageSquare />, title: 'Vendas no WhatsApp' },
              { icon: <Search />, title: 'SEO com IA' },
              { icon: <Layout />, title: 'UX & UI Design' },
              { icon: <Share2 />, title: 'Gestão de Tráfego' },
              { icon: <FileText />, title: 'Copywriting' },
              { icon: <ImageIcon />, title: 'Criativos em Massa' },
              { icon: <Bot />, title: 'Automações' },
              { icon: <Linkedin />, title: 'LinkedIn Marketing' }
            ].map((card, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] transition-all hover:border-white/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-neon-purple transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  Utilizamos as ferramentas mais avançadas para garantir performance máxima.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bloco Roxo (Texto Esquerda / Imagem Direita) */}
      <section className="reveal-section py-24 px-6 bg-[#0d0a14]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20">MARKETING SERVICES</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Estratégias de Crescimento <br /> <span className="text-neon-purple">Baseadas em Dados</span></h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Não é apenas sobre IA, é sobre resultados. Criamos o ecossistema perfeito para sua escala.
              </p>
              <Button className="bg-neon-purple text-white rounded-full px-8">Explorar Serviços</Button>
            </div>
            <div className="lg:w-1/2 relative rounded-3xl overflow-hidden border border-neon-purple/20 bg-neon-purple/10 aspect-video flex items-center justify-center">
              <div className="text-neon-purple/20 italic">[Imagem Profissional Roxa]</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Moodboard (Pareto Style) */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Universo Ebooks IA</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="rounded-2xl border border-white/5 bg-white/5 md:row-span-2 flex items-center justify-center italic text-white/10">[Img 1]</div>
            <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center italic text-white/10">[Img 2]</div>
            <div className="rounded-2xl border border-white/5 bg-white/5 md:col-span-2 flex items-center justify-center italic text-white/10">[Img 3]</div>
            <div className="rounded-2xl border border-white/5 bg-white/5 md:col-span-2 flex items-center justify-center italic text-white/10">[Img 4]</div>
            <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center italic text-white/10">[Img 5]</div>
            <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center italic text-white/10">[Img 6]</div>
          </div>
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
            Pronto para dominar o amanhã?
          </h2>
          <p className="text-xl text-white/60">
            Junte-se a centenas de alunos que já estão faturando alto com o poder da Inteligência Artificial.
          </p>
          <div className="pt-4">
             <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 h-16 text-lg font-bold">
               QUERO ACESSAR AGORA
             </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home