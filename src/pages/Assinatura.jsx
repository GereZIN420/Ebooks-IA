import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
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
  Sparkles
} from 'lucide-react'
import gsap from 'gsap'

const Assinatura = () => {
  const [selectedPlan, setSelectedPlan] = useState('anual')

  const plans = [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      price: '39',
      period: 'mês',
      totalPrice: 'R$ 39/mês',
      popular: false,
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

  useEffect(() => {
    // Animate cards on mount
    gsap.fromTo('.plan-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out'
      }
    )

    gsap.fromTo('.benefit-card', 
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
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Oferta Especial
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Desbloqueie Tudo
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Acesso ilimitado a todos os eBooks, novos lançamentos mensais e conteúdos extras exclusivos.
          </p>

          <div className="flex justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span>4.9/5 (2.847 avaliações)</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>12.000+ alunos ativos</span>
            </div>
          </div>
        </motion.div>

        {/* Plan Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700">
            <div className="flex">
              <button
                onClick={() => setSelectedPlan('mensal')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPlan === 'mensal' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setSelectedPlan('anual')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                  selectedPlan === 'anual' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  17% OFF
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`plan-card ${plan.id === selectedPlan ? 'block' : 'hidden md:block opacity-50'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: plan.id === selectedPlan ? 1 : 0.5, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className={`relative h-full ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Crown className="w-4 h-4 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold gradient-text">R$ {plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    {plan.originalPrice && (
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-gray-500 line-through">R$ {plan.originalPrice}</span>
                        <Badge variant="success" className="text-xs">
                          {plan.discount}
                        </Badge>
                      </div>
                    )}
                    
                    <p className="text-gray-400 mt-2">{plan.totalPrice}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'text-lg py-4' : ''}`}
                    size={plan.popular ? 'lg' : 'default'}
                  >
                    {plan.popular ? 'Assinar Agora' : 'Escolher Plano'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  {plan.popular && (
                    <p className="text-center text-sm text-gray-400 mt-3">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Garantia de 7 dias ou seu dinheiro de volta
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos muito mais que simples eBooks. É um ecossistema completo para sua evolução com IA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover-lift">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas antes de assinar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-300">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Pronto para dominar a IA?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a mais de 12.000 profissionais que já transformaram seus negócios com nossos conteúdos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <Zap className="mr-2 w-5 h-5" />
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Gift className="mr-2 w-5 h-5" />
                Ver Conteúdo Grátis
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                Garantia de 7 dias
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                Cancele quando quiser
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                Suporte 24/7
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Assinatura