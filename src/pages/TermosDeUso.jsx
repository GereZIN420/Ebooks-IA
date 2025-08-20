import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft, Clock } from 'lucide-react'

const TermosDeUso = () => {
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
          
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Termos de Uso
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
                <h2 className="text-2xl font-semibold gradient-text mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ao acessar e utilizar a plataforma eBooks IA, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">2. Descrição dos Serviços</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  A eBooks IA oferece:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acesso a eBooks educacionais sobre Inteligência Artificial
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Templates e recursos complementares
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Suporte educacional via WhatsApp e email
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Atualizações contínuas de conteúdo
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">3. Elegibilidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade ou ter o consentimento dos pais ou responsáveis legais. Ao criar uma conta, você garante que as informações fornecidas são verdadeiras e atualizadas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">4. Contas de Usuário</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Ao criar uma conta, você concorda em:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fornecer informações precisas e completas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manter a confidencialidade de suas credenciais de acesso
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ser responsável por todas as atividades que ocorrem em sua conta
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Notificar-nos imediatamente sobre qualquer uso não autorizado
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">5. Propriedade Intelectual</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Todo o conteúdo disponibilizado na plataforma, incluindo mas não limitado a textos, imagens, vídeos, templates e materiais educacionais, é de propriedade exclusiva da eBooks IA ou de seus licenciadores.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  É <strong className="text-white">expressamente proibido</strong>: compartilhar, redistribuir, revender, modificar, reproduzir ou usar comercialmente qualquer conteúdo sem autorização prévia e por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">6. Assinaturas e Pagamentos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">6.1 Planos de Assinatura</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Oferecemos planos mensais e anuais com acesso completo aos conteúdos. Os preços estão claramente indicados no momento da contratação.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">6.2 Renovação Automática</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Assinaturas são renovadas automaticamente no final de cada período, exceto se canceladas antes da data de renovação.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">6.3 Política de Reembolso</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Oferecemos garantia de reembolso de 7 dias para novos usuários. Após este período, não há reembolso para assinaturas parcialmente utilizadas.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">7. Uso Aceitável</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Você concorda em NÃO usar nossos serviços para:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Atividades ilegais ou que violem direitos de terceiros
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compartilhamento não autorizado de conteúdo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tentativas de hackear ou comprometer a segurança da plataforma
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Criar contas falsas ou usar informações de terceiros
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">8. Privacidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar nossos serviços, você concorda com nossa política de privacidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-gray-300 leading-relaxed">
                  A eBooks IA não será responsável por danos indiretos, incidentais, especiais ou consequenciais resultantes do uso ou impossibilidade de usar nossos serviços, mesmo que tenhamos sido alertados sobre a possibilidade de tais danos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">10. Modificações dos Termos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas por email ou através da plataforma. O uso continuado após as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">11. Cancelamento</h2>
                <p className="text-gray-300 leading-relaxed">
                  Você pode cancelar sua assinatura a qualquer momento através das configurações da conta ou entrando em contato conosco. O acesso permanece ativo até o final do período pago.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">12. Lei Aplicável</h2>
                <p className="text-gray-300 leading-relaxed">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold gradient-text mb-4">13. Contato</h2>
                <p className="text-gray-300 leading-relaxed">
                  Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="mt-3 space-y-1 text-gray-300">
                  <p>Email: contato@ebooksIA.com</p>
                  <p>WhatsApp: +55 (11) 99999-9999</p>
                </div>
              </section>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <p className="text-center text-gray-400 text-sm">
                  Ao continuar usando nossos serviços, você confirma que leu, compreendeu e concorda com estes Termos de Uso.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default TermosDeUso