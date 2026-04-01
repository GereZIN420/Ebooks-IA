import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import SEO from '../components/SEO'
import {
  CheckCircle,
  Star,
  Zap,
  BookOpen,
  Download,
  Video,
  Users,
  Crown,
  Gift,
  Clock,
  Infinity,
  ArrowRight,
  Sparkles,
  MessageSquare,
  HelpCircle
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CHECKOUT_URL = 'https://pay.hotmart.com/W104672909E?checkoutMode=10'

const Assinatura = () => {
  const containerRef = useRef()
  const [selectedPlan, setSelectedPlan] = useState('anual')

  // ... (plans, benefits, faq arrays remain the same for now, but I'll update styles in the JSX)

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

  const plans = [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      price: '39',
      period: 'mês',
      totalPrice: 'R$ 39/mês',
      popular: false,
      color: 'neon-blue',
      features: [
        'Acesso a todos os eBooks',
        'Novos lançamentos mensais',
        'Templates e recursos',
        'Suporte via WhatsApp',
        'Atualizações automáticas'
      ]
    },
    {
      id: 'anual',
      name: 'Plano Anual',
      price: '390',
      period: 'ano',
      originalPrice: '468',
      totalPrice: 'R$ 32,50/mês',
      discount: '17% OFF',
      popular: true,
      color: 'neon-purple',
      features: [
        'Acesso a todos os eBooks',
        'Novos lançamentos mensais',
        'Templates e recursos',
        'Suporte via WhatsApp',
        'Atualizações automáticas',
        'Conteúdos exclusivos',
        'Masterclasses ao vivo',
        'Comunidade VIP no Discord'
      ]
    }
  ]

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Biblioteca Completa",
      description: "Acesso ilimitado a todos os eBooks e futuros lançamentos"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Templates Premium",
      description: "Recursos prontos para usar em seus projetos"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Vídeos Exclusivos",
      description: "Masterclasses e tutoriais detalhados em vídeo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade VIP",
      description: "Networking com outros profissionais da área"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Atualizações Contínuas",
      description: "Conteúdo sempre atualizado com as últimas tendências"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Suporte Prioritário",
      description: "Atendimento direto via WhatsApp com a equipe"
    }
  ]

  const faq = [
    {
      question: "Posso cancelar a assinatura a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais."
    },
    {
      question: "Os eBooks são atualizados regularmente?",
      answer: "Sim, todos os eBooks são constantemente atualizados com as ferramentas mais recentes do mercado."
    },
    {
      question: "Há garantia de reembolso?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor."
    },
    {
      question: "Quantos dispositivos posso usar?",
      answer: "Você pode acessar sua conta em até 3 dispositivos simultaneamente."
    }
  ]

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-neon-purple/30">
      <SEO
        title="Assinatura - Plataforma de eBooks IA"
        description="Escolha seu plano e tenha acesso ilimitado ao melhor conteúdo de Inteligência Artificial para empresas."
        url="/assinatura"
      />

      {/* 1. Hero Section - Design Home Style */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] text-left space-y-8">
              <Badge className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-4 py-1.5 text-sm font-medium tracking-wide first-letter:uppercase">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                OFERTA ESPECIAL DE ACESSO
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Desbloqueie o <br /> poder da <span className="text-neon-purple">IA hoje</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
                Acesso ilimitado a todos os eBooks, atualizações semanais e conteúdos exclusivos projetados para transformar sua empresa.
              </p>

              <div className="flex items-center gap-12 pt-4">
                <div className="flex flex-col">
                  <div className="flex items-center text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-white/40 uppercase tracking-widest font-medium">4.9/5 Avaliações</span>
                </div>
                <div className="w-px h-12 bg-white/5" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold">12.000+</div>
                  <span className="text-sm text-white/40 uppercase tracking-widest font-medium">Membros Ativos</span>
                </div>
              </div>
            </div>

            <div className="lg:w-[45%] flex justify-center items-center">
              <div className="relative group w-full scale-[1.1]">
                <div className="absolute -inset-20 bg-gradient-to-r from-neon-purple/20 to-neon-blue/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
                <video
                  src="/videos/02177144766111100000000000000000000ffffc0a8ac5d9121c4.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative w-full h-auto rounded-[2.5rem] border border-white/10 shadow-2xl object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Plan Toggle - Modern Style */}
      <section className="reveal-section py-12 px-6">
        <div className="flex justify-center">
          <motion.div
            className="inline-flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setSelectedPlan('mensal')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 text-sm tracking-wider uppercase ${selectedPlan === 'mensal'
                ? 'bg-neon-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                : 'text-white/40 hover:text-white/60'
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setSelectedPlan('anual')}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 text-sm tracking-wider uppercase relative ${selectedPlan === 'anual'
                ? 'bg-neon-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                : 'text-white/40 hover:text-white/60'
                }`}
            >
              Anual
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
                17% OFF
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. Pricing Cards - Home Style */}
      <section className="reveal-section py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group h-full"
              >
                <div className={`relative h-full rounded-[2.5rem] p-1 transition-all duration-500 ${plan.popular
                  ? 'bg-gradient-to-b from-neon-purple/40 to-transparent shadow-[0_0_50px_rgba(139,92,246,0.1)]'
                  : 'bg-gradient-to-b from-white/10 to-transparent'
                  }`}>
                  <div className="bg-[#0a0a0f] rounded-[2.4rem] h-full p-8 md:p-12 flex flex-col relative overflow-hidden">
                    {plan.popular && (
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Crown className="w-24 h-24 text-neon-purple" />
                      </div>
                    )}

                    <div className="mb-8">
                      <div className={`inline-flex items-center gap-2 ${plan.id === 'anual' ? 'text-neon-purple' : 'text-neon-blue'} text-xs font-black tracking-widest uppercase mb-4`}>
                        {plan.popular ? <Sparkles className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                        {plan.name}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-white/40">R$</span>
                        <span className="text-5xl md:text-6xl font-bold tracking-tighter">{plan.price}</span>
                        <span className="text-white/40 font-medium">/{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-white/30 line-through text-sm">R$ {plan.originalPrice}</span>
                          <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded border border-green-500/20">ECONOMIZE {plan.discount}</span>
                        </div>
                      )}
                      <p className="mt-4 text-white/50 text-sm font-medium italic">
                        {plan.totalPrice} {plan.id === 'anual' ? '(cobrado anualmente)' : ''}
                      </p>
                    </div>

                    <div className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${plan.id === 'anual' ? 'text-neon-purple' : 'text-neon-blue'} flex-shrink-0 mt-0.5`} />
                          <span className="text-white/70 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full h-16 rounded-2xl text-base font-bold transition-all duration-500 ${plan.popular
                        ? 'bg-neon-purple hover:bg-neon-purple/90 text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                        }`}
                    >
                      <a href={CHECKOUT_URL}>
                        {plan.popular ? 'ASSINAR AGORA' : 'ESCOLHER PLANO'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>

                    {plan.popular && (
                      <p className="text-center text-[11px] text-white/30 uppercase tracking-widest font-bold mt-4">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Garantia incondicional de 7 dias
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section - Grid with Blur Style */}
      <section className="reveal-section py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Por que assinar a plataforma?</h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Muito mais que simples eBooks: um ecossistema completo para sua evolução com Inteligência Artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent backdrop-blur-xl hover:bg-white/[0.07] transition-all hover:border-neon-purple/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/30 via-neon-purple/10 to-transparent flex items-center justify-center mb-8 text-neon-purple group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section - Minimal Style */}
      <section className="reveal-section py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes</h2>
            <p className="text-white/50">Tudo o que você precisa saber sobre sua assinatura.</p>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                </div>
                <p className="text-white/50 leading-relaxed pl-12">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Final - Clean Mode */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-t from-neon-purple/10 to-transparent border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-black uppercase tracking-widest mb-8">
            <Crown className="w-4 h-4" />
            JUNTE-SE AOS MELHORES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Domine a IA e mude <br /> <span className="text-neon-purple">o jogo hoje mesmo.</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Garantia total de 7 dias: se você não gostar do conteúdo, devolvemos seu dinheiro sem perguntas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 h-16 text-lg font-black shadow-2xl">
              <a href={CHECKOUT_URL}>QUERO ACESSAR AGORA</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white px-12 h-16 text-lg font-bold rounded-full">
              <Link to="/contato">FALAR COM SUPORTE</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Assinatura
