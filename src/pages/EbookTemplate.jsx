import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { 
  BookOpen, 
  Play, 
  Download, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Zap,
  FileText,
  Video,
  Settings,
  HelpCircle,
  ArrowRight
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EbookTemplate = () => {
  const { slug } = useParams()
  const sectionsRef = useRef([])
  const progressBarRef = useRef()

  // eBook data (em uma aplicação real, isso viria de uma API)
  const ebooksData = {
    'imagens-com-ia': {
      title: "Criando Imagens Profissionais com IA",
      subtitle: "Domine Midjourney, DALL-E e Stable Diffusion para criar visuais impressionantes",
      level: "Iniciante",
      duration: "2-3 horas",
      rating: 4.9,
      students: 2847,
      price: "R$ 97",
      tools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Canva AI"],
      sections: [
        {
          id: 1,
          title: "Introdução ao Mundo das IAs Generativas",
          description: "Entenda o panorama atual e as oportunidades disponíveis",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: 2,
          title: "Ferramentas Essenciais",
          description: "Conheça as principais plataformas e como configurá-las",
          icon: <Settings className="w-5 h-5" />
        },
        {
          id: 3,
          title: "Passo a Passo Prático",
          description: "Aprenda técnicas avançadas com exemplos reais",
          icon: <Play className="w-5 h-5" />
        },
        {
          id: 4,
          title: "Templates e Recursos",
          description: "Acesse nossa biblioteca de prompts e templates",
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: 5,
          title: "Vídeos Complementares",
          description: "Assista tutoriais práticos em vídeo",
          icon: <Video className="w-5 h-5" />
        },
        {
          id: 6,
          title: "Automação e Workflows",
          description: "Integre IA ao seu fluxo de trabalho",
          icon: <Zap className="w-5 h-5" />
        },
        {
          id: 7,
          title: "FAQ e Soluções",
          description: "Respostas para as dúvidas mais comuns",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    'videos-profissionais-com-ia': {
      title: "Vídeos Profissionais com IA",
      subtitle: "Produção completa usando Runway, Pika Labs e outras ferramentas",
      level: "Intermediário",
      duration: "3-4 horas",
      rating: 4.8,
      students: 1923,
      price: "R$ 147",
      tools: ["Runway ML", "Pika Labs", "Luma AI", "HeyGen", "ElevenLabs"],
      sections: [
        {
          id: 1,
          title: "Fundamentos da Produção de Vídeo com IA",
          description: "Base teórica e conceitos essenciais",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: 2,
          title: "Configuração das Ferramentas",
          description: "Setup completo de todas as plataformas",
          icon: <Settings className="w-5 h-5" />
        },
        {
          id: 3,
          title: "Criação de Vídeos do Zero",
          description: "Processo completo de produção",
          icon: <Play className="w-5 h-5" />
        },
        {
          id: 4,
          title: "Scripts e Storyboards",
          description: "Templates para planejamento",
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: 5,
          title: "Masterclass em Vídeo",
          description: "Casos práticos detalhados",
          icon: <Video className="w-5 h-5" />
        },
        {
          id: 6,
          title: "Automação de Processos",
          description: "Workflows automáticos de produção",
          icon: <Zap className="w-5 h-5" />
        },
        {
          id: 7,
          title: "Troubleshooting",
          description: "Soluções para problemas comuns",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    'apresentacoes-ia': {
      title: "Apresentações Impactantes com IA",
      subtitle: "Gamma, Tome e outras ferramentas para apresentações que convertem",
      level: "Iniciante",
      duration: "1-2 horas",
      rating: 4.7,
      students: 3421,
      price: "R$ 67",
      tools: ["Gamma", "Tome", "Canva AI", "Beautiful.AI", "Pitch"],
      sections: [
        {
          id: 1,
          title: "Psicologia das Apresentações",
          description: "Como capturar e manter a atenção",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: 2,
          title: "Ferramentas de IA para Slides",
          description: "Configuração e primeiros passos",
          icon: <Settings className="w-5 h-5" />
        },
        {
          id: 3,
          title: "Criação Automatizada",
          description: "Do briefing ao resultado final",
          icon: <Play className="w-5 h-5" />
        },
        {
          id: 4,
          title: "Templates Profissionais",
          description: "Biblioteca de modelos prontos",
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: 5,
          title: "Cases de Sucesso",
          description: "Exemplos reais de apresentações",
          icon: <Video className="w-5 h-5" />
        },
        {
          id: 6,
          title: "Integração com Workflows",
          description: "Conecte com suas ferramentas",
          icon: <Zap className="w-5 h-5" />
        },
        {
          id: 7,
          title: "Perguntas Frequentes",
          description: "Dúvidas e soluções práticas",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    'automacoes-ia': {
      title: "Automações Inteligentes",
      subtitle: "Zapier, Make e outras ferramentas para automatizar processos",
      level: "Avançado",
      duration: "4-5 horas",
      rating: 4.9,
      students: 1567,
      price: "R$ 197",
      tools: ["Zapier", "Make", "Microsoft Power Automate", "N8N", "Bubble"],
      sections: [
        {
          id: 1,
          title: "Arquitetura de Automações",
          description: "Fundamentos e melhores práticas",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: 2,
          title: "Setup Completo das Plataformas",
          description: "Configuração avançada de ferramentas",
          icon: <Settings className="w-5 h-5" />
        },
        {
          id: 3,
          title: "Construção de Workflows",
          description: "Passo a passo detalhado",
          icon: <Play className="w-5 h-5" />
        },
        {
          id: 4,
          title: "Templates de Automação",
          description: "Workflows prontos para usar",
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: 5,
          title: "Masterclass Avançada",
          description: "Técnicas profissionais",
          icon: <Video className="w-5 h-5" />
        },
        {
          id: 6,
          title: "IA + Automação",
          description: "Integração com ferramentas de IA",
          icon: <Zap className="w-5 h-5" />
        },
        {
          id: 7,
          title: "Solução de Problemas",
          description: "Debug e otimização",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    },
    'criando-sites-com-ia': {
      title: "Criando Sites com IA",
      subtitle: "Webflow, Framer e ferramentas de IA para desenvolvimento web",
      level: "Intermediário",
      duration: "3-4 horas",
      rating: 4.6,
      students: 2134,
      price: "R$ 127",
      tools: ["Webflow", "Framer", "10Web", "Durable", "GitHub Copilot"],
      sections: [
        {
          id: 1,
          title: "Web Design com IA",
          description: "Princípios e ferramentas essenciais",
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: 2,
          title: "Configuração de Ambiente",
          description: "Setup das ferramentas de desenvolvimento",
          icon: <Settings className="w-5 h-5" />
        },
        {
          id: 3,
          title: "Criação do Primeiro Site",
          description: "Do conceito ao deploy",
          icon: <Play className="w-5 h-5" />
        },
        {
          id: 4,
          title: "Componentes e Templates",
          description: "Biblioteca de elementos reutilizáveis",
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: 5,
          title: "Tutoriais em Vídeo",
          description: "Desenvolvimento ao vivo",
          icon: <Video className="w-5 h-5" />
        },
        {
          id: 6,
          title: "Deploy Automático",
          description: "CI/CD com ferramentas de IA",
          icon: <Zap className="w-5 h-5" />
        },
        {
          id: 7,
          title: "Suporte e Manutenção",
          description: "Como resolver problemas comuns",
          icon: <HelpCircle className="w-5 h-5" />
        }
      ]
    }
  }

  const ebook = ebooksData[slug]

  useEffect(() => {
    if (!ebook) return

    // Progress bar animation
    let progress = 0
    const updateProgress = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      progress = (scrolled / maxScroll) * 100
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`
      }
    }

    window.addEventListener('scroll', updateProgress)

    // Section animations
    gsap.utils.toArray('.section-item').forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Floating CTA animation
    gsap.to('.floating-cta', {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [ebook])

  if (!ebook) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">eBook não encontrado</h1>
          <Button asChild>
            <a href="/biblioteca">Voltar à Biblioteca</a>
          </Button>
        </div>
      </div>
    )
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Iniciante':
        return 'success'
      case 'Intermediário':
        return 'default'
      case 'Avançado':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-800 z-40">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200"
        />
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center items-center gap-4 mb-6">
                <Badge variant={getLevelColor(ebook.level)} className="text-sm">
                  {ebook.level}
                </Badge>
                <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                  Atualizado com as últimas ferramentas de IA
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 leading-tight">
                {ebook.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {ebook.subtitle}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {ebook.duration}
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                  {ebook.rating} ({ebook.students} alunos)
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {ebook.students.toLocaleString()} estudantes
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {ebook.tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold gradient-text text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              O que você vai aprender
            </motion.h2>

            <div className="space-y-4">
              {ebook.sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="section-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                          {section.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {index + 1}. {section.title}
                          </h3>
                          <p className="text-gray-300">
                            {section.description}
                          </p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforme seu conhecimento em IA e comece a ver resultados ainda hoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Comprar este eBook por {ebook.price}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Download className="mr-2 w-5 h-5" />
                Amostra Grátis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <motion.div
        className="floating-cta fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button size="lg" className="shadow-2xl">
          Comprar este eBook
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  )
}

export default EbookTemplate