import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import SEO from '../components/SEO'
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  BookOpen,
  Star,
  Award,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Sparkles,
  Shield,
  Rocket
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Sobre = () => {
  const containerRef = useRef()

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "12.000+", label: "Alunos Ativos", color: "neon-purple" },
    { icon: <BookOpen className="w-6 h-6" />, value: "50+", label: "eBooks Publicados", color: "neon-blue" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Avaliação Média", color: "neon-purple" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfação", color: "neon-blue" }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco na Prática",
      description: "Conteúdos criados para aplicação real imediata. Transformamos teoria complexa em resultados tangíveis.",
      color: "neon-purple"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Constante",
      description: "Atualizados semanalmente com as ferramentas e estratégias que estão moldando o futuro da IA.",
      color: "neon-blue"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ensino Humanizado",
      description: "Tecnologia acessível para todos. Facilitamos o aprendizado independente do seu nível técnico atual.",
      color: "neon-purple"
    }
  ]

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Founder",
      bio: "10+ anos em tecnologia, especialista em IA e automação de processos.",
      initials: "AS"
    },
    {
      name: "Carlos Santos",
      role: "CTO & Co-founder",
      bio: "Ex-Google, líder técnico com experiência em machine learning e desenvolvimento.",
      initials: "CS"
    },
    {
      name: "Maria Oliveira",
      role: "Head of Content",
      bio: "Educadora com 15+ anos de experiência, especializada em conteúdo digital.",
      initials: "MO"
    }
  ]

  const timeline = [
    {
      year: "2022",
      title: "Fundação",
      description: "Nascemos com o propósito de democratizar o acesso ao conhecimento avançado em IA."
    },
    {
      year: "2023",
      title: "Crescimento",
      description: "Lançamento do primeiro catálogo completo e expansão da comunidade para 5.000 membros."
    },
    {
      year: "2024",
      title: "Liderança",
      description: "Consolidação como a maior plataforma de eBooks de IA do Brasil, com 12.000+ alunos."
    },
    {
      year: "2025",
      title: "O Futuro",
      description: "Expansão para novos formatos e integração de IA generativa no processo de aprendizado."
    }
  ]

  useEffect(() => {
    // Reveal animations
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
        title="Nossa História - Ebooks IA"
        description="Conheça a missão e a equipe por trás da maior plataforma de conteúdos de Inteligência Artificial para empresas."
        url="/sobre"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-1.5 text-sm font-medium tracking-wide first-letter:uppercase mb-4">
              <Shield className="w-4 h-4 mr-2 inline" />
              CONHEÇA NOSSA JORNADA
            </Badge>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Transformando o futuro <br /> através da <span className="text-neon-purple">Educação e IA</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Dedicamos cada dia para capacitar profissionais e empresas com o conhecimento prático necessário para dominar as tecnologias que estão mudando o mundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats - Modern Glassmorphism */}
      <section className="reveal-section py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.05] hover:border-white/10 text-center group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.color === 'neon-purple' ? 'bg-neon-purple/10 text-neon-purple' : 'bg-neon-blue/10 text-neon-blue'
                  } group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission Section - High Impact */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[3rem] p-1 bg-gradient-to-br from-neon-purple/30 via-white/5 to-neon-blue/30 overflow-hidden group">
            <div className="absolute inset-0 bg-[#0a0a0f] m-[1px] rounded-[2.95rem] -z-10" />
            <div className="relative p-12 md:p-20 text-center space-y-8">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] pointer-events-none" />

              <h2 className="text-sm font-black text-neon-purple tracking-[0.3em] uppercase">Nossa Missão</h2>
              <p className="text-3xl md:text-5xl font-medium text-white leading-tight italic">
                "Democratizar o uso prático da Inteligência Artificial para quem busca <span className="text-neon-purple underline decoration-neon-purple/30 underline-offset-8">ganhar dinheiro, tempo e liberdade comercial.</span>"
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
              <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
                Acreditamos que a IA não deve ser uma barreira, mas sim a maior vantagem competitiva do profissional moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-left mb-16 space-y-4">
            <Badge className="bg-neon-blue/10 text-neon-blue border-neon-blue/20 px-4">FILOSOFIA</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Nossos Valores Fundamentais</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] transition-all hover:border-white/10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${value.color === 'neon-purple' ? 'bg-neon-purple/20 text-neon-purple' : 'bg-neon-blue/20 text-neon-blue'
                  } group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline - Modern Line */}
      <section className="reveal-section py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Nossa Jornada</h2>
            <p className="text-white/40">Evoluindo a cada passo junto com a tecnologia.</p>
          </div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-[120px_1fr] gap-8 items-start relative"
              >
                <div className="text-3xl font-black text-neon-purple/40">{item.year}</div>
                <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0f] hover:border-neon-purple/30 transition-all group">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    {item.title}
                    <div className="w-2 h-2 rounded-full bg-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20">TIME</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">As Mentes por Trás do Projeto</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative w-40 h-40 mx-auto group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full blur-[20px] opacity-0 group-hover:opacity-40 transition-all duration-700" />
                  <div className="relative w-full h-full rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
                    {member.initials}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-neon-purple font-black text-xs uppercase tracking-widest">{member.role}</p>
                  <p className="text-white/50 text-sm max-w-[250px] mx-auto leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bastidores/Craft Section */}
      <section className="reveal-section py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Como criamos <br /> <span className="text-neon-blue">nossos conteúdos</span></h2>
              <div className="space-y-6">
                {[
                  { id: "01", title: "Pesquisa de Ponta", desc: "Analisamos diariamente as atualizações nas APIs e ferramentas de IA (OpenAI, Anthropic, Google)." },
                  { id: "02", title: "Testes Rigorosos", desc: "Cada prompt e estratégia é testada em fluxos de trabalho reais antes de ir para o papel." },
                  { id: "03", title: "Design Instrucional", desc: "Transformamos conhecimento técnico complexo em guias simples de seguir." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-2xl font-black text-white/10 group-hover:text-neon-blue transition-colors duration-500">{step.id}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[3rem] flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <BookOpen size={120} className="text-neon-blue/20 group-hover:text-neon-blue/40 transition-all duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="reveal-section py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Pronto para começar?</h2>
              <p className="text-xl text-white/50 max-w-xl mx-auto">
                Junte-se a milhares de alunos e comece sua transformação com IA hoje mesmo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-[0_10px_30px_rgba(139,92,246,0.3)]">
                  <Link to="/assinatura">QUERO ME INSCREVER</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
