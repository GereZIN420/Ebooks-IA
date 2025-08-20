import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Download, 
  Book,
  Zap,
  Target,
  Globe,
  Film,
  User,
  TrendingUp,
  Sparkles,
  Check,
  ExternalLink,
  Clock,
  Maximize,
  Minimize,
  Copy,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Code,
  Eye
} from 'lucide-react'
import React from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import SEO from '../components/SEO'

// Componente para prompts destacados
const PromptBox = ({ title, prompt, description, tips }) => {
  const [copied, setCopied] = useState(false)

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-slate-900/80 border border-slate-600/50 rounded-xl p-6 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
          <Code className="w-5 h-5" />
          {title}
        </h4>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={copyPrompt}
          className="text-xs"
        >
          {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copiado!' : 'Copiar'}
        </Button>
      </div>
      
      <div className="bg-black/40 rounded-lg p-4 mb-4 font-mono text-sm text-green-400 leading-relaxed">
        {prompt}
      </div>
      
      {description && (
        <p className="text-slate-300 text-sm mb-3">{description}</p>
      )}
      
      {tips && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="text-amber-300 text-sm">
              <strong>Dica:</strong> {tips}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente para alertas
const AlertBox = ({ type, children }) => {
  const styles = {
    info: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    success: "bg-green-500/10 border-green-500/30 text-green-300",
    danger: "bg-red-500/10 border-red-500/30 text-red-300"
  }

  const icons = {
    info: AlertCircle,
    warning: AlertCircle,
    success: CheckCircle,
    danger: AlertCircle
  }

  const Icon = icons[type]

  return (
    <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const VideosIA = () => {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState(new Set())
  const [fullScreen, setFullScreen] = useState(false)

  const modules = [
    {
      id: 'intro',
      title: 'Introdução',
      icon: Book,
      duration: '5 min',
      content: {
        title: 'O que você vai aprender',
        sections: [
          {
            title: '🚀 O poder da IA para criadores, agências e empreendedores',
            content: (
              <div className="space-y-6">
                <p className="text-lg text-slate-200 leading-relaxed">
                  A Inteligência Artificial revolucionou completamente a criação de conteúdo visual. 
                  Estamos vivendo uma era onde <strong className="text-blue-400">qualquer pessoa pode criar 
                  vídeos com qualidade de cinema</strong> usando apenas sua criatividade e os prompts certos.
                </p>

                <AlertBox type="success">
                  <strong>Resultado esperado:</strong> Ao final deste ebook, você será capaz de criar 
                  vídeos profissionais que competem com produções tradicionais, gastando apenas uma 
                  fração do tempo e dinheiro.
                </AlertBox>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-slate-600/30">
                  <h4 className="text-xl font-semibold text-white mb-4">📈 Oportunidades de mercado:</h4>
                  <ul className="space-y-3 text-slate-200">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-lg">•</span>
                      <span><strong>Criadores de conteúdo:</strong> Produza vídeos virais para TikTok, Instagram e YouTube</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-lg">•</span>
                      <span><strong>Agências:</strong> Ofereça serviços de vídeo premium com margem alta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-lg">•</span>
                      <span><strong>Empreendedores:</strong> Crie campanhas de marketing visual impactante</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: '🎯 Por que Veo 3 e Higgsfield são as ferramentas do momento',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Film className="w-8 h-8 text-blue-400" />
                      <h4 className="text-xl font-semibold text-white">Veo 3 (Google DeepMind)</h4>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>✓ Resolução até 4K</li>
                      <li>✓ Movimentos de câmera cinematográficos</li>
                      <li>✓ Física realista e iluminação natural</li>
                      <li>✓ Duração de até 2 minutos por clip</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <User className="w-8 h-8 text-purple-400" />
                      <h4 className="text-xl font-semibold text-white">Higgsfield</h4>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>✓ Sincronização labial perfeita</li>
                      <li>✓ Expressões faciais naturais</li>
                      <li>✓ Suporte a múltiplos idiomas</li>
                      <li>✓ Qualidade fotorealística</li>
                    </ul>
                  </div>
                </div>

                <AlertBox type="info">
                  Essas ferramentas combinadas permitem criar desde vídeos promocionais até 
                  documentários completos, tudo a partir de texto e imagens.
                </AlertBox>
              </div>
            )
          }
        ]
      }
    },
    {
      id: 'tools',
      title: 'Ferramentas Usadas',
      icon: Globe,
      duration: '3 min',
      content: {
        title: 'Arsenal de Ferramentas',
        sections: [
          {
            title: 'Ferramentas de Geração de Vídeo',
            content: `**Veo 3 (Google DeepMind)** – Para vídeos cinematográficos a partir de prompts
            
**Higgsfield** – Para vídeos realistas de pessoas falando (Lipsync + faces humanas)

**Runway ML** – Edição + geração de motion realista

**Pika Labs** – Animação de cenas mais artísticas`
          },
          {
            title: 'Ferramentas de Áudio e Finalização',
            content: `**ElevenLabs** – Vozes realistas para narração

**CapCut ou Descript** – Finalização e cortes manuais (opcional)

**Midjourney** – Para thumbnails e frames iniciais

**ChatGPT / Claude** – Para gerar roteiros, legendas e estruturas`
          }
        ]
      }
    },
    {
      id: 'module1',
      title: 'Módulo 1 — Fundamentos',
      icon: Target,
      duration: '10 min',
      content: {
        title: 'Fundamentos da Criação com IA',
        sections: [
          {
            title: '🎯 A anatomia de um prompt profissional',
            content: (
              <div className="space-y-6">
                <p className="text-lg text-slate-200 leading-relaxed">
                  Criar vídeos profissionais com IA não é sobre sorte - é sobre <strong className="text-blue-400">dominar 
                  a linguagem que a IA entende</strong>. Cada palavra no seu prompt influencia diretamente a qualidade final.
                </p>

                <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-xl p-6 border border-amber-500/30">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-amber-400" />
                    Fórmula MASTER para Prompts Profissionais
                  </h4>
                  <div className="text-slate-200 space-y-3">
                    <p><strong className="text-amber-400">M</strong>ovimento de câmera + <strong className="text-amber-400">A</strong>ção principal + <strong className="text-amber-400">S</strong>cenário + <strong className="text-amber-400">T</strong>écnica + <strong className="text-amber-400">E</strong>stilo + <strong className="text-amber-400">R</strong>esolução</p>
                    <p className="text-sm text-slate-400">Esta fórmula garantirá resultados consistentemente profissionais</p>
                  </div>
                </div>

                <PromptBox 
                  title="Exemplo: Vídeo Corporativo Premium"
                  prompt="slow push-in shot of confident business woman walking through modern glass office building, natural sunlight streaming through windows, shallow depth of field, cinematic color grading, professional corporate atmosphere, shot on RED camera, 4K resolution"
                  description="Este prompt combina todos os elementos da fórmula MASTER para criar um vídeo corporativo de alta qualidade"
                  tips="Observe como cada elemento tem uma função: 'slow push-in' define o movimento, 'confident business woman' define a ação, 'modern glass office' define o cenário, etc."
                />

                <div className="mt-6 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-400/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5 text-blue-400" />
                      <h5 className="font-semibold text-blue-400">🎬 Resultado Real do Prompt Acima</h5>
                    </div>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                      Veo 3
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <video 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full max-w-lg mx-auto rounded-xl border border-slate-500/50 shadow-2xl"
                      preload="auto"
                    >
                      <source src="/Slow_pushin_shot_202508071823_38buq.mp4" type="video/mp4" />
                      Seu navegador não suporta reprodução de vídeo.
                    </video>
                    
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      HD
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-slate-300 mb-2">
                      ✨ <strong>Resultado obtido com o prompt exato mostrado acima</strong>
                    </p>
                    <p className="text-xs text-slate-400 mb-1">
                      🔄 Reproduzindo automaticamente em loop
                    </p>
                    <p className="text-xs text-slate-400">
                      Tempo: ~2 min | Qualidade: Profissional | Custo: ~$0.10
                    </p>
                  </div>

                  <AlertBox type="success">
                    <strong>Prova real:</strong> Esta é a qualidade que você consegue aplicando a fórmula MASTER. 
                    Note o movimento cinematográfico, iluminação natural e profundidade de campo profissional.
                  </AlertBox>
                </div>
              </div>
            )
          },
          {
            title: '🎨 Estilos visuais que convertem',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                    <h5 className="font-semibold text-blue-400 mb-2">🎬 Cinematic</h5>
                    <p className="text-sm text-slate-300">Para vídeos premium e institucionais</p>
                    <code className="text-xs text-green-400">anamorphic lens, film grain, color graded</code>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                    <h5 className="font-semibold text-purple-400 mb-2">✨ Dreamy</h5>
                    <p className="text-sm text-slate-300">Para produtos de lifestyle e beleza</p>
                    <code className="text-xs text-green-400">soft focus, ethereal lighting, pastel colors</code>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                    <h5 className="font-semibold text-amber-400 mb-2">🔥 Dynamic</h5>
                    <p className="text-sm text-slate-300">Para esportes e energia</p>
                    <code className="text-xs text-green-400">high contrast, fast motion blur, dramatic lighting</code>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                    <h5 className="font-semibold text-green-400 mb-2">🌿 Natural</h5>
                    <p className="text-sm text-slate-300">Para produtos orgânicos e sustentabilidade</p>
                    <code className="text-xs text-green-400">natural lighting, earth tones, organic movement</code>
                  </div>
                </div>

                <AlertBox type="warning">
                  <strong>Erro comum:</strong> Misturar muitos estilos no mesmo prompt. Escolha UM estilo dominante 
                  e mantenha consistência em todo o vídeo.
                </AlertBox>
              </div>
            )
          },
          {
            title: '📐 Movimentos de câmera profissionais',
            content: (
              <div className="space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  O movimento de câmera é o que separa vídeos amadores de produções profissionais. 
                  Aqui estão os movimentos mais efetivos:
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      name: "Push-in / Pull-out",
                      description: "Aproxima ou afasta do assunto",
                      usage: "Revelações dramáticas, foco em detalhes",
                      prompt: "slow push-in shot"
                    },
                    {
                      name: "Pan left/right",
                      description: "Movimento horizontal da câmera",
                      usage: "Revelar paisagens, seguir movimento",
                      prompt: "smooth pan right"
                    },
                    {
                      name: "Tilt up/down",
                      description: "Movimento vertical da câmera",
                      usage: "Revelar grandeza, mudança de perspectiva",
                      prompt: "dramatic tilt up"
                    },
                    {
                      name: "Orbit/Circular",
                      description: "Movimento circular ao redor do objeto",
                      usage: "Produtos, retratos dinâmicos",
                      prompt: "360 degree orbit shot"
                    },
                    {
                      name: "Dolly track",
                      description: "Câmera se move junto com o assunto",
                      usage: "Seguir personagens, criar dinâmica",
                      prompt: "tracking shot following subject"
                    }
                  ].map((movement, index) => (
                    <div key={index} className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-blue-400">{movement.name}</h5>
                        <code className="text-xs bg-black/40 px-2 py-1 rounded text-green-400">{movement.prompt}</code>
                      </div>
                      <p className="text-sm text-slate-300 mb-1">{movement.description}</p>
                      <p className="text-xs text-slate-400">💡 {movement.usage}</p>
                    </div>
                  ))}
                </div>

                <PromptBox 
                  title="Exemplo: Movimento Cinematográfico Complexo"
                  prompt="slow dolly-in tracking shot of luxury car driving through mountain highway at golden hour, camera following from passenger side, cinematic depth of field, warm color temperature, anamorphic lens flares, 24fps motion blur"
                  description="Combina múltiplos elementos técnicos para um resultado cinematográfico"
                  tips="Use no máximo 2-3 movimentos por clip. Movimento demais pode deixar o vídeo mareante."
                />

                <div className="mt-6 p-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Film className="w-5 h-5 text-amber-400" />
                      <h5 className="font-semibold text-amber-400">🎬 Movimento Cinematográfico Real</h5>
                    </div>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                      Veo 3
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <video 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full max-w-lg mx-auto rounded-xl border border-amber-500/50 shadow-2xl"
                      preload="auto"
                    >
                      <source src="/Slow_dollyin_tracking_202508071833_2v11i.mp4" type="video/mp4" />
                      Seu navegador não suporta reprodução de vídeo.
                    </video>
                    
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      4K
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-slate-300 mb-2">
                      ✨ <strong>Dolly-in tracking shot em ação real</strong>
                    </p>
                    <p className="text-xs text-slate-400 mb-1">
                      🔄 Movimento complexo executado perfeitamente
                    </p>
                    <p className="text-xs text-slate-400">
                      Note: Profundidade de campo + Movimento fluido + Iluminação golden hour
                    </p>
                  </div>

                  <AlertBox type="info">
                    <strong>Análise técnica:</strong> Observe como o movimento da câmera acompanha o assunto 
                    mantendo foco perfeito, enquanto o fundo desfoca naturalmente. Isso é movimento cinematográfico 
                    profissional gerado apenas com prompt.
                  </AlertBox>
                </div>
              </div>
            )
          }
        ]
      }
    },
    {
      id: 'module2',
      title: 'Módulo 2 — Criando com Veo 3',
      icon: Film,
      duration: '15 min',
      content: {
        title: 'Dominando o Veo 3',
        sections: [
          {
            title: '🚀 Setup e configurações do Veo 3',
            content: (
              <div className="space-y-6">
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Especificações técnicas</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-2">Formatos</h5>
                      <ul className="space-y-1 text-slate-300">
                        <li>• 16:9 (paisagem)</li>
                        <li>• 9:16 (portrait)</li>
                        <li>• 1:1 (quadrado)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-2">Duração</h5>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Até 2 minutos</li>
                        <li>• Recomendado: 10-30s</li>
                        <li>• Optimal: 15s</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-2">Qualidade</h5>
                      <ul className="space-y-1 text-slate-300">
                        <li>• 4K máximo</li>
                        <li>• 1080p recomendado</li>
                        <li>• 30fps padrão</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <AlertBox type="info">
                  <strong>Dica Pro:</strong> Para melhores resultados, sempre especifique o formato no prompt: 
                  "16:9 aspect ratio" para landscape ou "9:16 vertical format" para stories/reels.
                </AlertBox>
              </div>
            )
          },
          {
            title: '🎬 Templates de prompts que sempre funcionam',
            content: (
              <div className="space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  Estes são os templates testados e aprovados que geram resultados consistentemente profissionais:
                </p>

                <div className="space-y-8">
                  <PromptBox 
                    title="🏢 Template: Vídeo Corporativo/Institucional"
                    prompt="elegant slow-motion tracking shot of confident professional woman in tailored business suit walking through modern glass office building with floor-to-ceiling windows, natural daylight streaming in, shallow depth of field creating cinematic bokeh, warm color temperature, shot with anamorphic lens, 4K cinematic quality, 16:9 aspect ratio"
                    description="Perfeito para vídeos institucionais, apresentações de empresa, LinkedIn"
                    tips="Substitua 'woman' por 'man' ou 'team of professionals' conforme necessário. Ajuste 'glass office' para outros ambientes corporativos."
                  />

                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-900/20 to-slate-900/20 border border-blue-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-400" />
                        <h5 className="font-semibold text-blue-400">🏢 Template Corporativo em Ação</h5>
                      </div>
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                        Veo 3
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      <video 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-lg mx-auto rounded-xl border border-blue-500/50 shadow-2xl"
                        preload="auto"
                      >
                        <source src="/Elegant_slowmotion_tracking_202508071842_owu.mp4" type="video/mp4" />
                        Seu navegador não suporta reprodução de vídeo.
                      </video>
                      
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        PRO
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-slate-300 mb-2">
                        ✨ <strong>Resultado do template corporativo acima</strong>
                      </p>
                      <p className="text-xs text-slate-400 mb-1">
                        📱 Perfeito para LinkedIn, apresentações e sites institucionais
                      </p>
                      <p className="text-xs text-slate-400">
                        Elegante • Profissional • Slow-motion • Bokeh cinematográfico
                      </p>
                    </div>

                    <AlertBox type="success">
                      <strong>Template profissional testado:</strong> Este é exatamente o tipo de vídeo que 
                      grandes corporações pagam milhares para produzir. Você pode criar o mesmo resultado 
                      copiando o prompt acima.
                    </AlertBox>
                  </div>

                  <PromptBox 
                    title="🛍️ Template: E-commerce/Produto"
                    prompt="luxurious 360-degree rotating product showcase of premium wireless headphones on minimalist white marble surface, dramatic directional lighting creating elegant shadows, macro lens capturing fine details and textures, gold and black color scheme, cinematic depth of field, commercial photography aesthetic, 1:1 square format for social media"
                    description="Ideal para mostrar produtos físicos com apelo premium"
                    tips="Adapte 'wireless headphones' para seu produto. Use 'marble surface' para produtos de luxo, 'wooden table' para orgânicos."
                  />

                  <div className="mt-6 p-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <h5 className="font-semibold text-amber-400">🛍️ Produto Premium em Ação</h5>
                      </div>
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                        Veo 3
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      <video 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-lg mx-auto rounded-xl border border-amber-500/50 shadow-2xl"
                        preload="auto"
                      >
                        <source src="/Luxurious_360degree_rotating_202508071845_ko.mp4" type="video/mp4" />
                        Seu navegador não suporta reprodução de vídeo.
                      </video>
                      
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                        360°
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-slate-300 mb-2">
                        ✨ <strong>Rotação 360° com iluminação comercial</strong>
                      </p>
                      <p className="text-xs text-slate-400 mb-1">
                        🏆 Qualidade de catálogo premium • Sombras dramáticas • Textura macro
                      </p>
                      <p className="text-xs text-slate-400">
                        Perfeito para: E-commerce • Amazon • Shopify • Redes sociais
                      </p>
                    </div>

                    <AlertBox type="success">
                      <strong>ROI comprovado:</strong> Este tipo de vídeo aumenta conversões em até 80% em e-commerce. 
                      Estúdios cobram R$ 800-2.000 por produto. Você cria em 3 minutos com o prompt acima.
                    </AlertBox>
                  </div>

                  <PromptBox 
                    title="🎭 Template: Storytelling Emocional"
                    prompt="intimate close-up portrait of elderly grandmother's weathered hands gently holding vintage family photograph, warm golden hour lighting filtering through lace curtains, emotional depth of field focusing on photograph details, nostalgic film grain texture, warm sepia color grading, humanistic documentary style, 16:9 cinematic frame"
                    description="Para conteúdos emotivos, histórias pessoais, documentários"
                    tips="Elementos-chave: close-up + objeto simbólico + iluminação dramática + textura emocional"
                  />

                  <div className="mt-6 p-6 bg-gradient-to-r from-rose-900/20 to-purple-900/20 border border-rose-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-rose-400" />
                        <h5 className="font-semibold text-rose-400">🎭 Storytelling Emocional Real</h5>
                      </div>
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                        Veo 3
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      <video 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-lg mx-auto rounded-xl border border-rose-500/50 shadow-2xl"
                        preload="auto"
                      >
                        <source src="/Intimate_closeup_portrait_202508071852_xrt26.mp4" type="video/mp4" />
                        Seu navegador não suporta reprodução de vídeo.
                      </video>
                      
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        STORY
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-slate-300 mb-2">
                        💫 <strong>Close-up intimista com profundidade emocional</strong>
                      </p>
                      <p className="text-xs text-slate-400 mb-1">
                        🎬 Iluminação golden hour • Film grain nostálgico • Foco seletivo
                      </p>
                      <p className="text-xs text-slate-400">
                        Ideal para: Documentários • Histórias pessoais • Conteúdo emocional
                      </p>
                    </div>

                    <AlertBox type="info">
                      <strong>Poder emocional:</strong> Este tipo de storytelling visual gera 3x mais engajamento 
                      que vídeos convencionais. Perfeito para marcas que querem criar conexão genuína com o público.
                    </AlertBox>
                  </div>

                  <PromptBox 
                    title="🏃‍♂️ Template: Ação/Esportes/Energia"
                    prompt="dynamic slow-motion sequence of athletic runner in premium sportswear sprinting through urban environment at sunrise, camera tracking alongside with kinetic energy, dramatic lens flares from morning sun, high contrast lighting, vibrant color saturation, Nike commercial aesthetic, sweat droplets visible in macro detail, 9:16 vertical format for social"
                    description="Para marcas esportivas, energia, motivação, lifestyle ativo"
                    tips="Combine movimento rápido + slow motion + iluminação dramática para máximo impacto"
                  />

                  <PromptBox 
                    title="🌿 Template: Lifestyle/Sustentabilidade"
                    prompt="serene overhead drone shot slowly descending toward woman in flowing white linen dress walking barefoot through organic lavender field at golden hour, gentle breeze creating natural movement, soft diffused lighting, earthy color palette with purple lavender accents, mindful living aesthetic, sustainable lifestyle vibe, 16:9 peaceful composition"
                    description="Perfeito para produtos orgânicos, wellness, sustentabilidade"
                    tips="Use cores naturais e movimentos suaves para transmitir tranquilidade e conexão com a natureza"
                  />

                  <PromptBox 
                    title="🍽️ Template: Food/Gastronomia"
                    prompt="mesmerizing macro time-lapse of master chef's hands expertly preparing artisanal pasta from scratch on rustic wooden cutting board, flour dancing in volumetric lighting rays, steam rising from hot ingredients, rich warm color temperature, shallow focus highlighting texture details, culinary artistry aesthetic, Instagram-worthy food styling, 1:1 square format"
                    description="Para restaurantes, food blogs, produtos alimentícios"
                    tips="Foque em textura, vapor, movimento das mãos e ingredientes frescos para despertar apetite"
                  />
                </div>

                <AlertBox type="success">
                  <strong>Fórmula secreta:</strong> Todos esses templates seguem a estrutura: 
                  <em>Movimento + Sujeito + Ambiente + Iluminação + Estilo + Formato</em>. 
                  Memorize essa ordem!
                </AlertBox>
              </div>
            )
          },
          {
            title: '⚡ Hacks avançados para resultados cinematográficos',
            content: (
              <div className="space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  Estes são os <strong className="text-blue-400">segredos dos profissionais</strong> que fazem 
                  a diferença entre um vídeo "bom" e um vídeo "uau":
                </p>

                <div className="grid gap-6">
                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-purple-400" />
                      Hack #1: Especificidade de Lente
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Em vez de "cinematic", especifique a lente exata:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-black/20 rounded p-2">
                        <span className="text-slate-400">Genérico:</span>
                        <code className="text-red-400">"cinematic shot"</code>
                      </div>
                      <div className="flex justify-between items-center bg-black/20 rounded p-2">
                        <span className="text-green-400">Profissional:</span>
                        <code className="text-green-400">"shot with 85mm portrait lens, f/1.4 aperture"</code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-400" />
                      Hack #2: Iluminação Profissional
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Termos que elevam drasticamente a qualidade:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <code className="bg-black/20 rounded p-2 text-green-400">"three-point lighting setup"</code>
                      <code className="bg-black/20 rounded p-2 text-green-400">"volumetric god rays"</code>
                      <code className="bg-black/20 rounded p-2 text-green-400">"rim lighting separation"</code>
                      <code className="bg-black/20 rounded p-2 text-green-400">"practical lighting sources"</code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-900/20 to-red-900/20 rounded-xl p-6 border border-amber-500/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      Hack #3: Referências de Câmera
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Mencionar equipamento específico melhora drasticamente o resultado:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-black/20 rounded p-2">
                        <span className="text-amber-400">Premium:</span>
                        <code className="text-slate-300 ml-2">"shot on RED Komodo 6K camera"</code>
                      </div>
                      <div className="bg-black/20 rounded p-2">
                        <span className="text-blue-400">Comercial:</span>
                        <code className="text-slate-300 ml-2">"Sony FX6 documentary style"</code>
                      </div>
                      <div className="bg-black/20 rounded p-2">
                        <span className="text-purple-400">Artístico:</span>
                        <code className="text-slate-300 ml-2">"16mm film grain texture"</code>
                      </div>
                    </div>
                  </div>
                </div>

                <PromptBox 
                  title="🔥 Prompt ULTRA Profissional - Combinando Todos os Hacks"
                  prompt="masterpiece cinematic sequence: slow-motion tracking shot of luxury sports car speeding through neon-lit Tokyo streets at midnight, shot with RED Komodo 6K camera using 35mm anamorphic lens at f/2.8 aperture, dramatic three-point lighting with volumetric fog creating god rays through headlight beams, rain droplets on camera lens creating natural bokeh, cyberpunk color grading with teal and orange contrast, motion blur on background neon signs, practical lighting from street lamps and car headlights, commercial automotive advertising aesthetic, 16:9 ultra-wide cinematic frame"
                  description="Este prompt combina todos os elementos profissionais: câmera específica, lente, iluminação, movimento, ambiente e pós-produção"
                  tips="Este é um prompt de nível Hollywood. Use como referência para construir seus próprios prompts profissionais."
                />

                <AlertBox type="warning">
                  <strong>Cuidado:</strong> Não sobrecarregue com muitos elementos técnicos. 
                  Use 3-4 elementos principais + 2-3 detalhes técnicos para melhores resultados.
                </AlertBox>
              </div>
            )
          }
        ]
      }
    },
    {
      id: 'module3',
      title: 'Módulo 3 — Higgsfield',
      icon: User,
      duration: '12 min',
      content: {
        title: 'Higgsfield: Humanos Falando com Realismo',
        sections: [
          {
            title: '🎭 Dominando a arte do Avatar Digital',
            content: (
              <div className="space-y-6">
                <p className="text-lg text-slate-200 leading-relaxed">
                  O Higgsfield revolucionou a criação de avatares digitais. Com ele, você pode transformar 
                  qualquer foto em um <strong className="text-purple-400">apresentador virtual indistinguível 
                  de uma gravação real</strong>.
                </p>

                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <User className="w-6 h-6 text-purple-400" />
                    Casos de uso profissionais
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Apresentadores de curso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Vendas em vídeo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Testimonials</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Assistentes virtuais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Dublagem multilíngue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span className="text-slate-200">Conteúdo em escala</span>
                      </div>
                    </div>
                  </div>
                </div>

                <AlertBox type="info">
                  <strong>Potencial de receita:</strong> Agências estão cobrando R$ 500-2.000 por vídeo 
                  de apresentador virtual. O investimento em tempo é de apenas 10-15 minutos por vídeo.
                </AlertBox>
              </div>
            )
          },
          {
            title: '📸 Preparação da imagem perfeita',
            content: (
              <div className="space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  A qualidade da imagem inicial determina 90% do sucesso do seu avatar. 
                  Aqui estão as especificações exatas para resultados profissionais:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      ✅ Faça assim
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Rosto centralizado e bem iluminado</li>
                      <li>• Resolução mínima: 512x512px</li>
                      <li>• Fundo neutro ou desfocado</li>
                      <li>• Expressão neutra ou sorriso sutil</li>
                      <li>• Olhando diretamente para a câmera</li>
                      <li>• Sem óculos escuros ou acessórios no rosto</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      ❌ Evite
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Imagens muito escuras ou claras</li>
                      <li>• Múltiplas pessoas na foto</li>
                      <li>• Ângulos muito laterais</li>
                      <li>• Cabelo cobrindo o rosto</li>
                      <li>• Expressões exageradas</li>
                      <li>• Qualidade baixa ou pixelizada</li>
                    </ul>
                  </div>
                </div>

                <PromptBox 
                  title="📝 Script para gerar foto perfeita com IA (se necessário)"
                  prompt="professional headshot portrait of confident business person, natural lighting, neutral expression, looking directly at camera, clean background, high resolution, studio quality, corporate photography style, 4K detail"
                  description="Use este prompt no Midjourney ou DALL-E se precisar gerar uma foto base"
                  tips="Adicione características específicas como 'woman in her 30s with brown hair' ou 'man with beard wearing suit' para personalizar"
                />
              </div>
            )
          },
          {
            title: '🎙️ Scripts profissionais que convertem',
            content: (
              <div className="space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  Um avatar perfeito com um script ruim = resultado ruim. Aqui estão os 
                  <strong className="text-blue-400"> templates de script testados e aprovados</strong> 
                  para diferentes objetivos:
                </p>

                <div className="space-y-8">
                  <PromptBox 
                    title="🏢 Script: Apresentação Corporativa"
                    prompt="Olá, sou [Nome], [Cargo] da [Empresa]. Com mais de [X] anos de experiência em [área], estou aqui para compartilhar insights valiosos que podem transformar seus resultados. Neste vídeo, você descobrirá as 3 estratégias que usamos para [benefício específico]. Vamos começar?"
                    description="Perfect para vídeos institucionais, apresentações de liderança"
                    tips="Substitua as variáveis entre colchetes. Mantenha tom profissional mas acessível."
                  />

                  <PromptBox 
                    title="🛒 Script: Venda Direta (VSL)"
                    prompt="Se você está cansado de [dor específica] e quer finalmente [resultado desejado] sem [objeção comum], este vídeo é para você. Nos próximos minutos, vou revelar o método exato que já ajudou mais de [número] pessoas a [transformação]. E o melhor: você pode começar hoje mesmo, mesmo que [objeção]. Quer saber como?"
                    description="Para produtos digitais, cursos, consultorias"
                    tips="Comece sempre com dor + promessa + prova social + objeção + curiosidade"
                  />

                  <PromptBox 
                    title="📚 Script: Educativo/Tutorial"
                    prompt="Hoje vou te ensinar como [habilidade específica] em apenas [tempo]. Este é o mesmo método que uso profissionalmente há [tempo] e que já ensinou para [número] pessoas. Ao final deste vídeo, você saberá exatamente como [resultado específico]. Vamos direto ao que interessa."
                    description="Para canais educativos, tutoriais, demonstrações"
                    tips="Prometa um resultado específico e um tempo definido. Seja direto e objetivo."
                  />

                  <PromptBox 
                    title="💬 Script: Depoimento/Testimonial"
                    prompt="Eu era uma pessoa que [situação anterior]. Tentei [soluções que não funcionaram] e nada parecia dar certo. Até que conheci [solução]. Em apenas [tempo], consegui [resultado específico]. Hoje, posso dizer que [transformação]. Se você está passando pelo que eu passei, recomendo muito que [call to action]."
                    description="Para casos de sucesso, testimonials, histórias de transformação"
                    tips="Estrutura: Antes + Tentativas frustradas + Solução + Resultado + Recomendação"
                  />

                  <PromptBox 
                    title="🎉 Script: Lançamento/Anúncio"
                    prompt="Finalmente chegou o dia! Depois de [tempo de desenvolvimento], estou lançando [produto/serviço]. Isso vai [benefício principal] para [público-alvo]. Durante esta semana especial, quem [ação] vai receber [bônus/desconto]. Mas atenção: são apenas [quantidade limitada] vagas. Não perca esta oportunidade única!"
                    description="Para lançamentos, ofertas limitadas, black friday"
                    tips="Crie urgência e escassez. Use números específicos e prazos definidos."
                  />
                </div>

                <AlertBox type="warning">
                  <strong>Duração ideal:</strong> Mantenha entre 30-90 segundos para melhor engajamento. 
                  Scripts muito longos perdem a atenção do espectador.
                </AlertBox>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/30">
                  <h4 className="text-lg font-semibold text-white mb-4">🎯 Dicas de ouro para scripts</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><strong className="text-blue-400">Hook nos primeiros 3 segundos:</strong> Comece com uma pergunta ou afirmação impactante</li>
                    <li><strong className="text-green-400">Use números específicos:</strong> "3 estratégias" é melhor que "algumas estratégias"</li>
                    <li><strong className="text-purple-400">Inclua pausas naturais:</strong> Use vírgulas e pontos para o avatar respirar</li>
                    <li><strong className="text-amber-400">CTA claro:</strong> Sempre termine com uma ação específica</li>
                    <li><strong className="text-red-400">Teste a pronúncia:</strong> Evite palavras difíceis que podem sair erradas</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]
      }
    },
    {
      id: 'module4',
      title: 'Módulo 4 — Storytelling',
      icon: TrendingUp,
      duration: '18 min',
      content: {
        title: 'Avançando com Storytelling e Efeitos',
        sections: [
          {
            title: '🎬 Montando vídeos com história',
            content: `**Sequência de prompts no Veo para múltiplos takes:**

**Take 1:** "A girl waking up in a sunlit room"
**Take 2:** "The same girl walking in a field of flowers, slow motion"
**Take 3:** "Close-up of her smiling to the sky"

Esta sequência cria uma narrativa visual coesa com começo, meio e fim.`
          },
          {
            title: 'Técnicas de Storytelling Visual',
            content: `**Estrutura em 3 atos:**
1. **Setup** - Estabelece personagem e contexto
2. **Confronto** - Apresenta desafio ou mudança
3. **Resolução** - Mostra resultado ou transformação

**Transições efetivas:**
- Match cut: mesmo movimento em cenas diferentes
- Cross dissolve: fusão suave entre cenas
- Jump cut: mudança abrupta para impacto`
          },
          {
            title: '🎨 Pós-produção profissional',
            content: `**Workflow de finalização:**
1. **Corte no CapCut/Descript**
   - Sincronização de áudio
   - Cortes no ritmo da música
   
2. **Música com IA**
   - Soundraw ou Epidemic Sound
   - Ajuste de volume e fade
   
3. **Legendas automáticas**
   - CapCut ou Nova AI
   - Personalização de estilo
   
4. **Exportação final**
   - 1080p para redes sociais
   - 4K para qualidade premium`
          }
        ]
      }
    },
    {
      id: 'module5',
      title: 'Módulo 5 — Laboratório',
      icon: Sparkles,
      duration: '20 min',
      content: {
        title: 'Laboratório de Criação',
        sections: [
          {
            title: '🧪 Exercícios práticos',
            content: `Coloque a mão na massa com estes projetos práticos:`
          },
          {
            title: '1. Vídeo poético: "Saudade"',
            content: `**Objetivo:** Criar um vídeo emotivo sobre saudade

**Prompts sugeridos:**
- "elderly man looking at old photographs, soft lighting, melancholic"
- "empty swing moving in the wind, golden hour"
- "handwritten letter on a wooden table, candle light"

**Técnicas:** Use transições suaves e música instrumental`
          },
          {
            title: '2. Vídeo promocional: Perfume fictício',
            content: `**Objetivo:** Criar anúncio de perfume

**Prompts sugeridos:**
- "elegant perfume bottle on marble surface, luxury lighting"
- "woman in flowing dress walking through lavender field"
- "close-up of perfume spray in slow motion, macro lens"

**Técnicas:** Foque em texturas, cores luxuosas e movimento fluido`
          },
          {
            title: '3. Vídeo com lipsync: Bebê cantando',
            content: `**Objetivo:** Criar vídeo viral divertido

**Processo:**
1. Escolha música clássica conhecida
2. Use foto de bebê sorrindo
3. No Higgsfield, configure expressividade alta
4. Ajuste sincronização labial

**Dica:** Use músicas com letra clara para melhor sincronização`
          },
          {
            title: '4. Cena de impacto: Ação cinematográfica',
            content: `**Objetivo:** Criar cena de ação dramática

**Prompts sugeridos:**
- "car chase scene in desert highway, cinematic, dust clouds"
- "explosion behind walking person, slow motion, orange flames"
- "helicopter flying over city at night, searchlight beams"

**Técnicas:** Use ângulos dinâmicos e contrastes visuais fortes`
          },
          {
            title: '5. Narrativa bíblica: Salmo 23',
            content: `**Objetivo:** Criar interpretação visual surreal

**Prompts sugeridos:**
- "shepherd walking with sheep in ethereal valley, divine light"
- "peaceful stream flowing through mystical landscape"
- "table set in the wilderness, heavenly atmosphere"

**Técnicas:** Use iluminação dramática e elementos simbólicos`
          }
        ]
      }
    },
    {
      id: 'commercial',
      title: 'Aplicações Comerciais',
      icon: Zap,
      duration: '15 min',
      content: {
        title: 'Módulo Extra — Aplicações Comerciais Reais',
        sections: [
          {
            title: 'Vídeos para social media',
            content: `**Instagram, TikTok, YouTube Shorts:**

**Formatos otimizados:**
- 9:16 para Stories e Reels
- 1:1 para posts do feed
- 16:9 para IGTV e YouTube

**Dicas de engajamento:**
- Hook nos primeiros 3 segundos
- Texto na tela para consumo sem som
- CTA claro no final`
          },
          {
            title: 'Vídeos institucionais e landing pages',
            content: `**Para empresas e serviços:**

**Estrutura efetiva:**
1. **Problema:** Apresente a dor do cliente
2. **Solução:** Mostre seu produto/serviço
3. **Benefícios:** Liste as vantagens
4. **CTA:** Chame para ação

**Estilo recomendado:** Profissional, clean, confiável`
          },
          {
            title: 'Videoclipes e lyric videos',
            content: `**Para músicos e artistas:**

**Videoclipes:**
- Sincronize movimentos com o beat
- Use múltiplas locações virtuais
- Crie narrativa visual coerente

**Lyric videos:**
- Tipografia animada
- Fundos que complementam a música
- Transições no ritmo da canção`
          },
          {
            title: 'Edições rápidas para produtos',
            content: `**E-commerce e vendas:**

**Showcase de produtos:**
- Close-ups em detalhes importantes
- Demonstrações de uso
- Before/after quando aplicável

**Testimonials:**
- Use Higgsfield para depoimentos
- Rostos confiáveis e expressivos
- Texto de apoio na tela`
          },
          {
            title: 'Vídeos de fundo para eventos',
            content: `**Eventos e apresentações:**

**Loops ambientais:**
- 30-60 segundos de duração
- Sem áudio ou áudio sutil
- Movimentos suaves e hipnóticos

**Backgrounds temáticos:**
- Corporativo: geometria, azul/cinza
- Festivo: cores vibrantes, movimento
- Espiritual: luz dourada, natureza`
          }
        ]
      }
    }
  ]

  const materials = [
    {
      name: '10 Prompts Prontos',
      description: 'Templates para copiar e colar no Veo 3',
      type: 'PDF'
    },
    {
      name: 'Lista de Ferramentas',
      description: 'Links e recursos para todas as plataformas',
      type: 'PDF'
    },
    {
      name: 'Checklist de Roteiro',
      description: 'Estrutura passo a passo para criar roteiros',
      type: 'PDF'
    },
    {
      name: 'Checklist de Áudio',
      description: 'Guia para geração e edição de áudio',
      type: 'PDF'
    },
    {
      name: 'Checklist de Vídeo',
      description: 'Processo completo de geração de vídeo',
      type: 'PDF'
    },
    {
      name: 'Checklist de Pós-produção',
      description: 'Finalização e exportação profissional',
      type: 'PDF'
    }
  ]

  const faqs = [
    {
      question: 'Qual a melhor ferramenta para vídeos longos?',
      answer: 'Runway ML combinado com edição manual oferece mais controle para projetos extensos.'
    },
    {
      question: 'Qual ferramenta renderiza mais rápido?',
      answer: 'Higgsfield e Veo 3 em modo fast (no Flow) são os mais ágeis.'
    },
    {
      question: 'Precisa de GPU potente?',
      answer: 'Não. Todo processamento é feito na nuvem, você só precisa de internet.'
    },
    {
      question: 'Dá pra usar no celular?',
      answer: 'Sim, especialmente com CapCut + Higgsfield para workflow mobile.'
    }
  ]

  const markAsCompleted = (moduleIndex) => {
    setCompletedModules(prev => new Set([...prev, moduleIndex]))
  }

  const goToModule = (index) => {
    setCurrentModule(index)
  }

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      markAsCompleted(currentModule)
      setCurrentModule(currentModule + 1)
    }
  }

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1)
    }
  }

  const downloadMaterial = (materialName) => {
    // Simulação de download - em produção, seria um link real
    alert(`Download iniciado: ${materialName}`)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 ${
      fullScreen ? 'fixed inset-0 z-50 overflow-auto' : ''
    }`}>
      <SEO 
        title="Vídeos Profissionais com IA - Ebook Interativo"
        description="O guia definitivo para criar conteúdos impressionantes com Inteligência Artificial, mesmo sem saber editar ou filmar."
        keywords="vídeos com IA, Veo 3, Higgsfield, criação de vídeo, inteligência artificial"
      />

      <div className={`${fullScreen ? 'max-w-4xl mx-auto' : 'container mx-auto'} px-4 py-8`}>
        {/* Header do Ebook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center mb-12 ${fullScreen ? 'mb-6' : ''}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Play className="w-4 h-4" />
                Ebook Interativo Gratuito
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFullScreen(!fullScreen)}
              className="flex items-center gap-2"
            >
              {fullScreen ? (
                <>
                  <Minimize className="w-4 h-4" />
                  Sair do Foco
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4" />
                  Modo Foco
                </>
              )}
            </Button>
          </div>
          
          {!fullScreen && (
            <>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">📽️ Vídeos Profissionais</span>
                <br />
                <span className="text-white">com IA</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                O guia definitivo para criar conteúdos impressionantes com Inteligência Artificial, 
                mesmo sem saber editar ou filmar.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  7 Módulos
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  ~90 minutos
                </span>
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  6 Materiais Extras
                </span>
              </div>
            </>
          )}
        </motion.div>

        <div className={fullScreen ? 'w-full' : 'grid lg:grid-cols-4 gap-8'}>
          {/* Sidebar de Navegação - oculta em tela cheia */}
          {!fullScreen && (
            <div className="lg:col-span-1">
              <Card className="glass-card sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Book className="w-5 h-5" />
                    Índice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {modules.map((module, index) => {
                    const Icon = module.icon
                    const isCompleted = completedModules.has(index)
                    const isCurrent = currentModule === index
                    
                    return (
                      <button
                        key={module.id}
                        onClick={() => goToModule(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          isCurrent 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'hover:bg-slate-800/50 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {isCompleted ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Icon className="w-4 h-4" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">{module.title}</div>
                            <div className="text-xs opacity-60">{module.duration}</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Conteúdo Principal */}
          <div className={fullScreen ? 'w-full' : 'lg:col-span-3'}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentModule}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {React.createElement(modules[currentModule].icon, { 
                          className: "w-8 h-8 text-blue-400" 
                        })}
                        <div>
                          <CardTitle className="text-2xl text-white">
                            {modules[currentModule].content.title}
                          </CardTitle>
                          <p className="text-slate-400 text-sm">
                            {modules[currentModule].title} • {modules[currentModule].duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {fullScreen && (
                          <div className="flex items-center gap-1 mr-2">
                            {modules.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => goToModule(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  index === currentModule
                                    ? 'bg-blue-400 w-6'
                                    : completedModules.has(index)
                                    ? 'bg-green-400'
                                    : 'bg-slate-600 hover:bg-slate-400'
                                }`}
                                title={modules[index].title}
                              />
                            ))}
                          </div>
                        )}
                        <Badge variant="secondary">
                          {currentModule + 1} de {modules.length}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {modules[currentModule].content.sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                          {section.title}
                        </h3>
                        <div className="prose prose-slate prose-invert max-w-none">
                          {typeof section.content === 'string' ? (
                            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </div>
                          ) : (
                            section.content
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {/* Materiais Extras (aparece no último módulo) */}
                    {currentModule === modules.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 pt-8 border-t border-slate-700"
                      >
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                          <Download className="w-6 h-6" />
                          📥 Materiais Incluídos
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {materials.map((material, index) => (
                            <Card key={index} className="glass-effect">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-white mb-1">
                                      {material.name}
                                    </h4>
                                    <p className="text-sm text-slate-400 mb-3">
                                      {material.description}
                                    </p>
                                  </div>
                                  <Badge variant="outline" className="ml-2">
                                    {material.type}
                                  </Badge>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="w-full"
                                  onClick={() => downloadMaterial(material.name)}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                          <h3 className="text-2xl font-semibold text-white mb-6">
                            ❓ Perguntas Frequentes
                          </h3>
                          <div className="space-y-4">
                            {faqs.map((faq, index) => (
                              <Card key={index} className="glass-effect">
                                <CardContent className="p-6">
                                  <h4 className="font-semibold text-white mb-2">
                                    {faq.question}
                                  </h4>
                                  <p className="text-slate-300">
                                    {faq.answer}
                                  </p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {/* Navegação */}
                <div className="flex items-center justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevModule}
                    disabled={currentModule === 0}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </Button>

                  <div className="flex items-center gap-2">
                    {modules.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToModule(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentModule
                            ? 'bg-blue-400'
                            : completedModules.has(index)
                            ? 'bg-green-400'
                            : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  {currentModule < modules.length - 1 ? (
                    <Button
                      onClick={nextModule}
                      className="flex items-center gap-2"
                    >
                      Próximo
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => markAsCompleted(currentModule)}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <Check className="w-4 h-4" />
                      Concluir
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideosIA