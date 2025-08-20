import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import SEO from '../components/SEO'
import { 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight,
  Bot,
  Sparkles,
  Target
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef()
  const particlesRef = useRef()

  useEffect(() => {
    const hero = heroRef.current
    const particles = particlesRef.current

    // Hero animations
    gsap.fromTo(hero.querySelector('.hero-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )

    gsap.fromTo(hero.querySelector('.hero-subtitle'), 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    )

    gsap.fromTo(hero.querySelector('.hero-cta'), 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
    )

    // Floating animation for hero elements
    gsap.to('.floating-book', {
      y: -20,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

    // Section animations on scroll
    gsap.utils.toArray('.fade-in-section').forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Cards hover animations
    gsap.utils.toArray('.hover-card').forEach((card) => {
      gsap.set(card, { scale: 1 })
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const benefits = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automatize Tudo",
      description: "Aprenda a criar automações inteligentes que trabalham por você 24/7"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Escale com IA",
      description: "Multiplique seus resultados usando ferramentas de IA para crescer exponencialmente"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Aprenda Fazendo",
      description: "Conteúdo prático com templates e exemplos reais para aplicar imediatamente"
    }
  ]

  const featuredEbooks = [
    {
      title: "Criando Imagens Profissionais com IA",
      description: "Domine as principais ferramentas de IA para criar imagens impressionantes",
      level: "Iniciante",
      slug: "imagens-com-ia"
    },
    {
      title: "Vídeos Profissionais com IA",
      description: "Aprenda a produzir vídeos de alta qualidade usando inteligência artificial",
      level: "Intermediário",
      slug: "videos-profissionais-com-ia"
    },
    {
      title: "Automações Inteligentes",
      description: "Crie sistemas automatizados que otimizam seu tempo e produtividade",
      level: "Avançado",
      slug: "automacoes-ia"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor Digital",
      content: "Os eBooks me ajudaram a automatizar 80% das minhas tarefas. Minha produtividade explodiu!",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Designer Freelancer",
      content: "Aprendi a criar designs incríveis com IA. Meus clientes ficaram impressionados com a qualidade.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      role: "Consultor de Marketing",
      content: "Conteúdo prático e direto ao ponto. Já estou aplicando tudo em meus projetos.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <SEO 
        description="Domine a nova economia com IA. EBooks interativos para transformar conhecimento em resultados com Inteligência Artificial. Acesso a todos os conteúdos, templates e automações."
        keywords="inteligência artificial, ebooks, IA, automação, midjourney, chatgpt, cursos online, templates, negócios digitais"
        url="/"
      />
      
      {/* Particles Background */}
      <div ref={particlesRef} className="particle-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="hero-title text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Domine a Nova Economia com IA
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              EBooks interativos para transformar conhecimento em resultados com Inteligência Artificial.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link to="/biblioteca">
                  Explorar Biblioteca
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Floating Books Animation */}
            <div className="relative mt-16">
              <motion.div 
                className="floating-book absolute left-1/4 top-0 opacity-20"
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BookOpen size={60} className="text-blue-400" />
              </motion.div>
              
              <motion.div 
                className="floating-book absolute right-1/4 top-10 opacity-20"
                animate={{ 
                  y: [20, -20, 20],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Sparkles size={50} className="text-purple-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="fade-in-section py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              A Plataforma do Futuro
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Criamos conteúdo premium e prático para você dominar as ferramentas de IA que estão revolucionando o mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="hover-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 text-blue-400">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured eBooks Section */}
      <section className="fade-in-section py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Destaques do Catálogo
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossos eBooks mais populares para você começar sua jornada com IA hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEbooks.map((ebook, index) => (
              <motion.div
                key={index}
                className="hover-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{ebook.level}</Badge>
                      <Badge>Atualizado</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{ebook.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-300 mb-6">{ebook.description}</p>
                    <Button asChild className="w-full">
                      <Link to={`/ebook/${ebook.slug}`}>
                        Acessar Página
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-in-section py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram seus negócios com IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="hover-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="fade-in-section py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Assine o Acesso Total e Desbloqueie o Futuro
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tenha acesso ilimitado a todos os eBooks, novos lançamentos e conteúdos exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link to="/assinatura">
                  Ver Planos
                  <Zap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/biblioteca">
                  Explorar Grátis
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home