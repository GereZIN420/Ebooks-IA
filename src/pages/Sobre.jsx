import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
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
  ArrowRight
} from 'lucide-react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Sobre = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "12.000+", label: "Alunos Ativos" },
    { icon: <BookOpen className="w-6 h-6" />, value: "50+", label: "eBooks Publicados" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Avaliação Média" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfação" }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco na Prática",
      description: "Todos os nossos conteúdos são criados pensando na aplicação real. Nada de teoria sem utilidade."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Constante",
      description: "Estamos sempre atualizados com as últimas ferramentas e tendências do mercado de IA."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ensino Humanizado",
      description: "Acreditamos que tecnologia deve ser acessível e compreensível para todos."
    }
  ]

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Founder",
      bio: "10+ anos em tecnologia, especialista em IA e automação de processos.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Carlos Santos",
      role: "CTO & Co-founder",
      bio: "Ex-Google, líder técnico com experiência em machine learning e desenvolvimento.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Maria Oliveira",
      role: "Head of Content",
      bio: "Educadora com 15+ anos de experiência, especializada em conteúdo digital.",
      image: "/api/placeholder/150/150"
    }
  ]

  const timeline = [
    {
      year: "2022",
      title: "Início da Jornada",
      description: "Nascemos com a missão de democratizar o conhecimento em IA"
    },
    {
      year: "2023",
      title: "Primeiro Marco",
      description: "Alcançamos 1.000 alunos e lançamos 10 eBooks"
    },
    {
      year: "2024",
      title: "Expansão",
      description: "12.000+ alunos, parcerias estratégicas e novos formatos de conteúdo"
    },
    {
      year: "2025",
      title: "O Futuro",
      description: "Expansão internacional e novas tecnologias educacionais"
    }
  ]

  useEffect(() => {
    gsap.fromTo('.fade-up', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.fade-up',
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.stat-card', 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }
    )
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Nossa História
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Somos uma equipe apaixonada por tecnologia e educação, dedicada a transformar a forma como as pessoas aprendem e aplicam Inteligência Artificial em suas vidas profissionais.
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-sm">
              <Globe className="w-4 h-4 mr-2" />
              Impactando vidas desde 2022
            </Badge>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift">
                  <CardContent className="pt-6 pb-4">
                    <div className="text-blue-400 flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="fade-up mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Nossa Missão
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-white">"Democratizar o uso prático da IA para quem quer ganhar dinheiro, tempo e liberdade."</strong>
                <br /><br />
                Acreditamos que a Inteligência Artificial não deve ser privilégio de grandes corporações. 
                Nosso objetivo é tornar essas ferramentas acessíveis e compreensíveis para profissionais 
                de todas as áreas, independente do nível técnico.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="fade-up mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada conteúdo que criamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover-lift">
                  <CardHeader>
                    <div className="mx-auto mb-4 text-blue-400">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="fade-up mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              De uma ideia simples a uma plataforma que impacta milhares de vidas
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="fade-up mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Conheça o Time
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              As mentes por trás da revolução educacional em IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover-lift">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <Badge variant="outline" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bastidores Section */}
        <motion.section
          className="fade-up mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">
                    Como Criamos os eBooks
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <strong className="text-white">Pesquisa Intensiva:</strong> Analisamos as últimas tendências e ferramentas do mercado
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <strong className="text-white">Teste Prático:</strong> Cada ferramenta é testada exaustivamente por nossa equipe
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <strong className="text-white">Criação de Conteúdo:</strong> Desenvolvemos materiais práticos e aplicáveis
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <strong className="text-white">Revisão e Atualização:</strong> Conteúdo sempre atual com as mudanças do mercado
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <BookOpen size={80} className="text-blue-400" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Processo rigoroso de criação e atualização contínua
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Faça Parte da Nossa História
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de profissionais que já transformaram suas carreiras com nossos conteúdos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <Link to="/biblioteca">
                    <BookOpen className="mr-2 w-5 h-5" />
                    Explorar Biblioteca
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link to="/contato">
                    <Users className="mr-2 w-5 h-5" />
                    Falar Conosco
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default Sobre