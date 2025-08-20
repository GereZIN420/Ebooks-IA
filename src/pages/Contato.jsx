import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
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
  HelpCircle
} from 'lucide-react'
import gsap from 'gsap'

const Contato = () => {
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
    
    // Simular envio de formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contato@ebooksIA.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      description: "Atendimento de segunda a sexta"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "9h às 18h",
      description: "Fuso horário: GMT-3 (Brasília)"
    }
  ]

  const faqItems = [
    {
      question: "Como posso acessar os eBooks após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um email com o link de acesso à sua conta na plataforma."
    },
    {
      question: "Os conteúdos são atualizados regularmente?",
      answer: "Sim! Todos os eBooks são atualizados mensalmente com as ferramentas mais recentes do mercado."
    },
    {
      question: "Oferecem suporte técnico?",
      answer: "Claro! Nosso time está sempre disponível via WhatsApp e email para ajudar com qualquer dúvida."
    },
    {
      question: "Posso solicitar conteúdo sobre temas específicos?",
      answer: "Absolutamente! Adoramos sugestões da comunidade. Entre em contato conosco com suas ideias."
    }
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'
    const message = encodeURIComponent('Olá! Vim do site dos eBooks IA e gostaria de falar com vocês.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    gsap.fromTo('.animate-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out'
      }
    )

    gsap.fromTo('.contact-item', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0,
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5
      }
    )
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Estamos aqui para ajudar! Entre em contato conosco através de qualquer um dos canais abaixo.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Resposta garantida em até 24 horas</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-item animate-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-blue-300 font-medium mb-1">
                      {info.info}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp Agora
            </Button>
          </motion.div>
        </motion.section>

        {/* Contact Form and FAQ */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="animate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Send className="mr-3 w-6 h-6 text-blue-400" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-300">
                      Obrigado pelo contato. Responderemos em breve!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sobre o que gostaria de falar?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva sua dúvida ou sugestão..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-400 text-center">
                      * Campos obrigatórios. Seus dados estão seguros conosco.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="animate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <HelpCircle className="mr-3 w-6 h-6 text-blue-400" />
                  Perguntas Frequentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-gray-700 pb-4 last:border-b-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-white mb-2 leading-relaxed">
                        {item.question}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm text-center">
                    Não encontrou sua resposta? Entre em contato conosco!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Support Options */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Outros Canais de Suporte
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Comunidade</h3>
                  <p className="text-gray-300 text-sm text-center">
                    Participe do nosso Discord e tire dúvidas com outros alunos
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Base de Conhecimento</h3>
                  <p className="text-gray-300 text-sm text-center">
                    Artigos e tutoriais detalhados sobre cada ferramenta
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Suporte Premium</h3>
                  <p className="text-gray-300 text-sm text-center">
                    Para assinantes: atendimento prioritário via chamada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default Contato