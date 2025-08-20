# 🚀 eBooks IA - Plataforma de eBooks Interativos

Uma plataforma moderna e responsiva para eBooks educacionais sobre Inteligência Artificial, desenvolvida com React e tecnologias cutting-edge.

## ✨ Características

- **Design Futurista**: Interface sci-fi com glassmorphism e tema escuro
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile  
- **Animações Avançadas**: GSAP e Framer Motion para experiências fluidas
- **SEO Otimizado**: Meta tags dinâmicas e estrutura otimizada para buscadores
- **Performance**: Code splitting e otimizações de build
- **Acessibilidade**: Componentes acessíveis e semânticos

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + Vite
- **Estilização**: TailwindCSS + CSS personalizado
- **UI Components**: ShadCN UI customizado
- **Animações**: GSAP + Anime.js + Framer Motion
- **Roteamento**: React Router DOM
- **SEO**: React Helmet Async
- **Ícones**: Lucide React

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface (Button, Card, etc.)
│   ├── Header.jsx      # Cabeçalho global
│   ├── Footer.jsx      # Rodapé global
│   ├── WhatsAppButton.jsx  # Botão flutuante do WhatsApp
│   └── SEO.jsx         # Componente para otimizações SEO
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Biblioteca.jsx  # Catálogo de eBooks
│   ├── EbookTemplate.jsx   # Template reutilizável para eBooks
│   ├── Assinatura.jsx  # Planos de assinatura
│   ├── Sobre.jsx       # Sobre a empresa
│   ├── Contato.jsx     # Formulário de contato
│   ├── TermosDeUso.jsx # Termos de uso
│   └── PoliticaDePrivacidade.jsx # Política de privacidade
├── lib/
│   └── utils.js        # Utilitários (cn function)
└── index.css           # Estilos globais e variáveis CSS
```

## 🎨 Design System

### Cores Principais
- **Primárias**: Azul (#3b82f6) e Roxo (#8b5cf6)
- **Neon**: Azul neon (#00d4ff), Roxo neon (#b47eff), Rosa neon (#ff6ec7)
- **Base**: Gradientes escuros com toques de glassmorphism

### Componentes
- **Cards**: Efeito glassmorphism com bordas suaves
- **Botões**: Gradientes com efeitos hover e animações
- **Inputs**: Backdrop blur com bordas animadas
- **Badges**: Versões coloridas para diferentes estados

## 📱 Páginas Implementadas

### 🏠 Home (/)
- Hero section com animações
- Seções: Sobre, Benefícios, Destaques, Depoimentos, CTA
- Partículas animadas em background

### 📚 Biblioteca (/biblioteca)
- Grid responsivo de eBooks
- Sistema de busca e filtros
- Cards interativos com informações dos eBooks

### 📖 eBook Individual (/ebook/[slug])
- Template reutilizável para todos os eBooks
- Barra de progresso animada
- Seções: Introdução, Ferramentas, Passo a Passo, etc.
- CTA flutuante

### 💎 Assinatura (/assinatura)
- Comparação de planos (Mensal vs Anual)
- Lista de benefícios
- FAQ integrado
- Animações de transição entre planos

### 👥 Sobre (/sobre)
- História da empresa
- Estatísticas animadas
- Timeline da jornada
- Apresentação da equipe

### 📞 Contato (/contato)
- Formulário funcional
- Informações de contato
- FAQ integrado
- Integração com WhatsApp

### 📄 Páginas Legais
- Termos de Uso (/termos-de-uso)
- Política de Privacidade (/politica-de-privacidade)

## 🚀 Instalação e Execução

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd ebooks-ia-platform
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🏗️ Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm run preview
```

## 📈 Otimizações Implementadas

### Performance
- Code splitting por chunks (vendor, router, animations, ui)
- Lazy loading de componentes
- Minificação com Terser
- Remoção de console.log em produção

### SEO
- Meta tags dinâmicas
- Open Graph tags
- Twitter Card tags
- URLs canônicas
- Estrutura semântica HTML5

### UX/UI
- Animações suaves e performáticas
- Loading states
- Estados de hover interativos
- Feedback visual em todas as interações
- Responsividade completa

## 🔧 Personalização

### Cores
As cores podem ser customizadas em `tailwind.config.js`:
```javascript
colors: {
  primary: { /* cores primárias */ },
  neon: { /* cores neon */ }
}
```

### Animações
Configurações de animação em `src/index.css`:
```css
@keyframes gradient-x { /* animações personalizadas */ }
```

## 📞 Contato e Suporte

- **WhatsApp**: +55 (11) 99999-9999
- **Email**: contato@ebooksIA.com
- **Site**: [merakigroup.site](https://merakigroup.site)

---

**Desenvolvido com ❤️ pela [Meraki Group](https://merakigroup.site)**

> "Democratizando o uso prático da IA para quem quer ganhar dinheiro, tempo e liberdade."