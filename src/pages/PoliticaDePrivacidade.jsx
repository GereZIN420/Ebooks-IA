import { motion } from 'framer-motion'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft, Clock } from 'lucide-react'

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300">
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>
          
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Política de Privacidade
          </h1>
          
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>Última atualização: Janeiro de 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8 space-y-8">
              
              <section>
                <div className="mb-4 p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Compromisso com sua privacidade:</strong> A eBooks IA está comprometida em proteger sua privacidade e dados pessoais. Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">1. Informações que Coletamos</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1.1 Informações Fornecidas por Você</h3>
                    <ul className="text-gray-300 space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Nome completo e email (no cadastro)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Informações de pagamento (processadas por terceiros seguros)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Comunicações conosco (emails, mensagens de suporte)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Preferências de conteúdo e configurações de conta
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1.2 Informações Coletadas Automaticamente</h3>
                    <ul className="text-gray-300 space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Dados de uso da plataforma (páginas visitadas, tempo de navegação)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Informações do dispositivo (IP, navegador, sistema operacional)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cookies e tecnologias similares
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">2. Como Usamos suas Informações</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizamos suas informações pessoais para os seguintes propósitos:
                </p>
                <ul className="text-gray-300 space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Fornecimento de Serviços:</strong> Processar sua assinatura, fornecer acesso aos eBooks e suporte ao cliente
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Melhorias:</strong> Análise de uso para melhorar nossos conteúdos e experiência do usuário
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Comunicação:</strong> Envio de atualizações de conteúdo, newsletters e suporte técnico
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Segurança:</strong> Prevenção de fraudes e proteção da plataforma
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">3. Compartilhamento de Informações</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-600/10 border border-green-500/20 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Importante:</strong> NÃO vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais ou publicitários.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Podemos compartilhar informações limitadas apenas nas seguintes situações:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong className="text-white">Prestadores de Serviço:</strong> Processadores de pagamento, provedores de hospedagem (todos com contratos de confidencialidade)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong className="text-white">Obrigações Legais:</strong> Quando exigido por lei ou ordem judicial
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong className="text-white">Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">4. Cookies e Tecnologias Similares</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência. Os tipos de cookies que usamos:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Cookies Essenciais</h4>
                      <p className="text-gray-300 text-sm">Necessários para o funcionamento básico da plataforma</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Cookies de Performance</h4>
                      <p className="text-gray-300 text-sm">Ajudam-nos a entender como você usa a plataforma</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">5. Segurança dos Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Criptografia SSL/TLS para todas as transmissões de dados
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Armazenamento seguro em servidores protegidos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acesso restrito aos dados apenas para funcionários autorizados
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Monitoramento contínuo de segurança
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">6. Seus Direitos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Acesso:</strong>
                      <p className="text-gray-300 text-sm mt-1">Solicitar acesso aos seus dados pessoais</p>
                    </div>
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Correção:</strong>
                      <p className="text-gray-300 text-sm mt-1">Solicitar correção de dados incorretos</p>
                    </div>
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Exclusão:</strong>
                      <p className="text-gray-300 text-sm mt-1">Solicitar exclusão dos seus dados</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Portabilidade:</strong>
                      <p className="text-gray-300 text-sm mt-1">Solicitar portabilidade dos seus dados</p>
                    </div>
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Oposição:</strong>
                      <p className="text-gray-300 text-sm mt-1">Opor-se ao tratamento dos seus dados</p>
                    </div>
                    <div className="p-3 bg-slate-800/30 rounded-lg">
                      <strong className="text-white">Informações:</strong>
                      <p className="text-gray-300 text-sm mt-1">Obter informações sobre o tratamento</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">7. Retenção de Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fornecer nossos serviços enquanto você for usuário ativo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cumprir obrigações legais e contratuais
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Resolver disputas e fazer cumprir nossos contratos
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">8. Transferência Internacional</h2>
                <p className="text-gray-300 leading-relaxed">
                  Seus dados são processados principalmente no Brasil. Quando necessário transferir dados para outros países, garantimos que existam proteções adequadas através de contratos e outras salvaguardas aprovadas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">9. Menores de Idade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nossos serviços não são direcionados a menores de 18 anos. Se soubermos que coletamos dados de menores sem o consentimento apropriado, tomaremos medidas para excluir essas informações imediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">10. Alterações nesta Política</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Alterações significativas serão comunicadas por email ou através de avisos na plataforma. Recomendamos que você revise esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibond gradient-text mb-4">11. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco:
                </p>
                <div className="bg-slate-800/30 p-4 rounded-lg">
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Email:</strong> privacidade@ebooksIA.com</p>
                    <p><strong className="text-white">WhatsApp:</strong> +55 (11) 99999-9999</p>
                    <p><strong className="text-white">Horário de Atendimento:</strong> Segunda a sexta, 9h às 18h</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg text-center">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Seu controle, nossa responsabilidade:</strong> 
                    Você tem controle total sobre seus dados pessoais. Estamos comprometidos em proteger sua privacidade e ser transparentes sobre como usamos suas informações.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default PoliticaDePrivacidade