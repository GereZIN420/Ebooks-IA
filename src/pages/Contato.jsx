import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import SEO from '../components/SEO'
import {
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Phone,
  Globe,
  ExternalLink,
  Users,
  HelpCircle,
  Sparkles,
  MessageSquare,
  Zap,
  Crown
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contato = () => {
  const containerRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSubmitted(false), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contato@ebooksIA.com",
      description: "Respostas em até 24 horas",
      color: "neon-purple"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      description: "Atendimento imediato",
      color: "green-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "9h às 18h",
      description: "Segunda a Sexta",
      color: "neon-blue"
    }
  ]

  const faqItems = [
    {
      question: "Como recebo meus eBooks?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no seu email cadastrado."
    },
    {
      question: "Posso tirar dúvidas sobre os conteúdos?",
      answer: "Sim! Temos um canal direto no WhatsApp e Discord exclusivo para alunos tirarem dúvidas técnicas."
    },
    {
      question: "Os eBooks têm atualizações?",
      answer: "Sim, todos os nossos conteúdos são atualizados mensalmente sem custo adicional para assinantes."
    },
    {
      question: "Existe suporte para empresas?",
      answer: "Com certeza. Temos planos especiais para times e oferecemos suporte dedicado para implementação corporativa."
    }
  ]

  useEffect(() => {
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'
    const message = encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas sobre a plataforma de eBooks IA.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-neon-purple/30">
      <SEO
        title="Contato - Ebooks IA"
        description="Fale com nosso time de especialistas. Tire suas dúvidas sobre assinatura, conteúdos e parcerias."
        url="/contato"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-4xl z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-black uppercase tracking-widest mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              SUPORTE ESPECIALIZADO
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Como podemos <br /> <span className="text-neon-purple">te ajudar hoje?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mt-6">
              Nossa equipe está pronta para responder suas dúvidas sobre os conteúdos, planos e como aplicar IA no seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Cards */}
      <section className="reveal-section py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:bg-white/[0.06] transition-all hover:border-white/10"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${info.color === 'green-500' ? 'bg-green-500/20 text-green-500' :
                    info.color === 'neon-purple' ? 'bg-neon-purple/20 text-neon-purple' : 'bg-neon-blue/20 text-neon-blue'
                  } group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-white font-medium mb-1">{info.info}</p>
                <p className="text-white/40 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Form & FAQ */}
      <section className="reveal-section py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-20">
            {/* Form */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Envie uma mensagem</h2>
                <p className="text-white/40">Preencha o formulário abaixo e retornaremos em breve.</p>
              </div>

              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="p-0">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        className="p-12 text-center rounded-[3rem] border border-green-500/20 bg-green-500/5 backdrop-blur-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                          <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                        <p className="text-white/60">Obrigado pelo contato. Em até 24h um especialista entrará em contato.</p>
                      </motion.div>
                    ) : (
                      <form key="form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Nome Completo</label>
                            <Input
                              name="name"
                              required
                              placeholder="Seu nome"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="h-14 rounded-2xl bg-white/[0.02] border-white/5 focus:border-neon-purple focus:ring-neon-purple/20 transition-all placeholder:text-white/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Corporativo</label>
                            <Input
                              name="email"
                              type="email"
                              required
                              placeholder="seu@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="h-14 rounded-2xl bg-white/[0.02] border-white/5 focus:border-neon-purple focus:ring-neon-purple/20 transition-all placeholder:text-white/20"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Assunto</label>
                          <Input
                            name="subject"
                            required
                            placeholder="Como podemos ajudar?"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="h-14 rounded-2xl bg-white/[0.02] border-white/5 focus:border-neon-purple focus:ring-neon-purple/20 transition-all placeholder:text-white/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Sua Mensagem</label>
                          <Textarea
                            name="message"
                            required
                            placeholder="Descreva detalhadamente sua dúvida ou proposta..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="min-h-[200px] rounded-3xl bg-white/[0.02] border-white/5 focus:border-neon-purple focus:ring-neon-purple/20 transition-all placeholder:text-white/20 p-6"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-16 rounded-2xl bg-neon-purple hover:bg-neon-purple/90 text-white font-bold text-lg shadow-[0_10px_30px_rgba(139,92,246,0.3)] disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              ENVIANDO...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              ENVIAR MENSAGEM
                              <Send className="w-5 h-5" />
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar / FAQ */}
            <div className="space-y-12">
              <div className="p-10 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <HelpCircle className="text-neon-blue" />
                  FAQ Rápido
                </h3>
                <div className="space-y-8">
                  {faqItems.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-sm font-bold text-white group cursor-help">{item.question}</h4>
                      <p className="text-xs leading-relaxed text-white/40">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-[3rem] border border-white/5 bg-neon-purple/5 group cursor-pointer overflow-hidden relative" onClick={handleWhatsAppClick}>
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <MessageCircle className="w-32 h-32" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Suporte via WhatsApp</h3>
                  <p className="text-sm text-white/50">Clique para falar diretamente com um especialista agora mesmo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Support Grid */}
      <section className="reveal-section py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Canais de Ajuda</h2>
            <p className="text-white/40">Outras formas de tirar suas dúvidas e interagir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: "Comunidade", desc: "Acesse nosso Discord oficial e troque ideias com 12k+ alunos." },
              { icon: <Globe />, title: "Base de Conhecimento", desc: "Artigos detalhados e documentações de cada eBook IA." },
              { icon: <Crown />, title: "Suporte Concierge", desc: "Atendimento prioritário para alunos dos planos anuais." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center mx-auto text-neon-purple group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-[280px] mx-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="reveal-section py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative p-12 md:p-20 rounded-[4rem] border border-white/5 bg-gradient-to-tr from-neon-purple/20 via-transparent to-neon-blue/20 text-center overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">Pronto para acelerar?</h2>
              <p className="text-xl text-white/50 max-w-xl mx-auto">Não deixe para amanhã. Comece a dominar a IA agora e transforme sua empresa.</p>
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-black shadow-2xl">
                <a href="/assinatura">QUERO ME INSCREVER AGORA</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
