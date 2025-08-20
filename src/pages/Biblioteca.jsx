import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock,
  Star,
  ArrowRight,
  Image,
  Video,
  Presentation,
  Settings,
  Globe,
  Gift
} from 'lucide-react'
import gsap from 'gsap'

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const ebooks = [
    {
      id: 1,
      title: "Criando Imagens Profissionais com IA",
      subtitle: "Domine Midjourney, DALL-E e Stable Diffusion para criar visuais impressionantes",
      level: "Iniciante",
      category: "Design",
      icon: <Image className="w-6 h-6" />,
      duration: "2-3 horas",
      rating: 4.9,
      updated: "Dezembro 2024",
      slug: "imagens-com-ia",
      description: "Aprenda a criar imagens profissionais usando as principais ferramentas de IA do mercado."
    },
    {
      id: 2,
      title: "Vídeos Profissionais com IA",
      subtitle: "O guia definitivo para criar conteúdos impressionantes com Veo 3 e Higgsfield",
      level: "Iniciante",
      category: "Video",
      icon: <Video className="w-6 h-6" />,
      duration: "1-2 horas",
      rating: 5.0,
      updated: "Janeiro 2025",
      slug: "videos-profissionais-com-ia",
      description: "Crie vídeos com qualidade de cinema usando apenas prompts e IA. Disponível gratuitamente!",
      isFree: true
    },
    {
      id: 3,
      title: "Apresentações Impactantes com IA",
      subtitle: "Gamma, Tome e outras ferramentas para apresentações que convertem",
      level: "Iniciante",
      category: "Produtividade",
      icon: <Presentation className="w-6 h-6" />,
      duration: "1-2 horas",
      rating: 4.7,
      updated: "Dezembro 2024",
      slug: "apresentacoes-ia",
      description: "Transforme suas apresentações com o poder da inteligência artificial."
    },
    {
      id: 4,
      title: "Automações Inteligentes",
      subtitle: "Zapier, Make e outras ferramentas para automatizar seus processos",
      level: "Avançado",
      category: "Automação",
      icon: <Settings className="w-6 h-6" />,
      duration: "4-5 horas",
      rating: 4.9,
      updated: "Janeiro 2025",
      slug: "automacoes-ia",
      description: "Crie automações poderosas que trabalham 24/7 para você."
    },
    {
      id: 5,
      title: "Criando Sites com IA",
      subtitle: "Webflow, Framer e ferramentas de IA para desenvolvimento web",
      level: "Intermediário",
      category: "Desenvolvimento",
      icon: <Globe className="w-6 h-6" />,
      duration: "3-4 horas",
      rating: 4.6,
      updated: "Dezembro 2024",
      slug: "criando-sites-com-ia",
      description: "Desenvolva sites profissionais usando inteligência artificial."
    }
  ]

  const levels = ['all', 'Iniciante', 'Intermediário', 'Avançado']

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === 'all' || ebook.level === selectedLevel
    
    return matchesSearch && matchesLevel
  })

  useEffect(() => {
    // Animate cards on mount
    gsap.fromTo('.ebook-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, [filteredEbooks])

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
    <div className="min-h-screen pt-24 pb-12">
      <SEO 
        title="Biblioteca de eBooks"
        description="Explore nossa coleção completa de eBooks interativos sobre Inteligência Artificial. Aprenda Midjourney, ChatGPT, automações e muito mais."
        keywords="biblioteca ebooks, inteligência artificial, midjourney, chatgpt, automação, templates IA"
        url="/biblioteca"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Biblioteca de eBooks
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore nossa coleção completa de eBooks interativos sobre Inteligência Artificial
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Pesquisar eBooks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'Todos os níveis' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="mb-8">
          <p className="text-gray-400 text-center">
            {filteredEbooks.length} eBook{filteredEbooks.length !== 1 ? 's' : ''} encontrado{filteredEbooks.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* eBooks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              className="ebook-card hover-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                        {ebook.icon}
                      </div>
                      <Badge variant={getLevelColor(ebook.level)}>
                        {ebook.level}
                      </Badge>
                      {ebook.isFree && (
                        <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                          <Gift className="w-3 h-3 mr-1" />
                          Gratuito
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} className="fill-current" />
                      <span className="text-sm ml-1">{ebook.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight mb-2">
                    {ebook.title}
                  </CardTitle>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {ebook.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-300 text-sm">
                      {ebook.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {ebook.duration}
                      </div>
                      <span>Atualizado: {ebook.updated}</span>
                    </div>
                  </div>
                  
                  <Button asChild className={`w-full ${ebook.isFree ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                    <Link to={`/ebook/${ebook.slug}`}>
                      {ebook.isFree ? 'Ler Agora - Grátis' : 'Acessar Página'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredEbooks.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen size={64} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              Nenhum eBook encontrado
            </h3>
            <p className="text-gray-400 mb-6">
              Tente ajustar seus filtros ou termo de busca
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('')
                setSelectedLevel('all')
              }}
              variant="outline"
            >
              Limpar Filtros
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          className="text-center mt-20 py-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Quer acesso ilimitado?
          </h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Assine nosso plano premium e tenha acesso a todos os eBooks, novos lançamentos e conteúdos exclusivos.
          </p>
          <Button asChild size="lg">
            <Link to="/assinatura">
              Ver Planos de Assinatura
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  )
}

export default Biblioteca