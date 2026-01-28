# 📚 Projeto Portfolio - Vilácio Cordeiro Júnior

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Arquitetura SOLID](#arquitetura-solid)
3. [Estrutura de Pastas](#estrutura-de-pastas)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Funcionalidades](#funcionalidades)
6. [Como Executar](#como-executar)
7. [Padrões de Código](#padrões-de-código)

---

## 🎯 Visão Geral

Site profissional de portfólio e currículo desenvolvido com HTML5, CSS3 e JavaScript puro. O projeto apresenta informações profissionais, projetos, formação acadêmica e empresas de forma moderna e responsiva.

**URL:** [Em produção via Vercel]

---

## 🏗️ Arquitetura SOLID

Este projeto segue os princípios SOLID adaptados para desenvolvimento web front-end:

### **S - Single Responsibility Principle (Responsabilidade Única)**
Cada arquivo tem uma responsabilidade específica:
- `style.css` → Estilos principais do site
- `curriculo-print.css` → Estilos específicos para impressão do currículo
- `script.js` → Funcionalidades JavaScript (dark mode, animações, scroll)
- Cada página HTML representa uma seção específica do portfólio

### **O - Open/Closed Principle (Aberto/Fechado)**
- CSS utiliza variáveis CSS (Custom Properties) para fácil extensão de temas
- Sistema de cores modular permite adicionar novos temas sem modificar código existente
- Classes reutilizáveis facilitam extensão de componentes

### **L - Liskov Substitution Principle (Substituição de Liskov)**
- Componentes de layout mantêm estrutura consistente
- Cards e seções podem ser substituídos sem quebrar o layout
- Classes base como `.btn-*` podem ser estendidas

### **I - Interface Segregation Principle (Segregação de Interface)**
- CSS separado por concerns (print, tema, layout)
- JavaScript modularizado por funcionalidade
- Não há arquivos "gordos" com múltiplas responsabilidades

### **D - Dependency Inversion Principle (Inversão de Dependência)**
- Uso de variáveis CSS para abstrair valores específicos
- JavaScript usa seletores abstratos, não IDs hardcoded
- Configurações centralizadas em `:root`

---

## 📁 Estrutura de Pastas

```
projeto-curriculo-site/
│
├── index.html                  # Página de entrada (redirect)
├── 1-MainPage.html            # Página principal
├── 2-academic.html            # Formação acadêmica
├── 3-projects.html            # Lista de projetos
├── 3.1-projeto-cotacoes.html  # Detalhe: Sistema de Orçamentos
├── 3.2-my-site.html           # Detalhe: Este site
├── 4-about.html               # Sobre mim
├── 5-enterprises.html         # Empresas
├── 5.1-victis.html           # Detalhe: Victis Creative
├── 6-contact.html             # Contatos
├── curriculo.html             # Currículo ABNT para impressão
│
├── style.css                  # Estilos principais
├── curriculo-print.css        # Estilos para impressão
├── script.js                  # Funcionalidades JavaScript
├── vercel.json               # Configuração de deploy
│
├── Images/                    # Assets de imagens
│   ├── ProfileImage.png
│   ├── Academic_formation/
│   ├── Contatos/
│   ├── Empresas/
│   ├── Posts/
│   └── SobreMim/
│
├── Curriculo/                 # Recursos do currículo
│
└── .git/                      # Controle de versão
```

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna
  - CSS Variables (Custom Properties)
  - Flexbox & Grid Layout
  - Glassmorphism effects
  - Media Queries (Responsive)
- **JavaScript ES6+**: Funcionalidades interativas
  - Intersection Observer API
  - LocalStorage API
  - DOM Manipulation

### **Tipografia**
- Google Fonts: Poppins (300, 400, 500, 600, 700)
- Times New Roman (currículo ABNT)

### **Design**
- Paleta de cores: Laranja (#FF6B35) e Azul (#004E89)
- Gradientes vibrantes
- Efeitos glassmorphism
- Animações CSS e JavaScript

### **Deploy**
- Vercel (Hosting)
- Git (Controle de versão)

---

## ⚡ Funcionalidades

### **1. Dark Mode**
- Toggle persistente (salva preferência no LocalStorage)
- Transições suaves entre temas
- Paleta otimizada para ambos os modos

### **2. Animações de Scroll**
- Fade-in elements
- Slide-in (left/right)
- Intersection Observer para performance

### **3. Navegação**
- Menu sticky com sombra dinâmica
- Indicador visual de página ativa
- Smooth scrolling

### **4. Currículo Profissional**
- Formatação ABNT
- Impressão otimizada
- Download como PDF (via Print to PDF)

### **5. Responsividade**
- Mobile-first approach
- Breakpoints otimizados
- Layout adaptativo

### **6. Interações**
- Hover effects em cards
- Ripple effect em botões
- Scroll to top button
- Card elevation on hover

---

## 🚀 Como Executar

### **Localmente**
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até a pasta:
   ```bash
   cd "Projeto Corriculo Site"
   ```

3. Abra no navegador:
   - Abra `index.html` ou `1-MainPage.html` diretamente
   - Ou use Live Server (VS Code extension)

### **Produção**
Deploy automático via Vercel ao fazer push no repositório Git.

---

## 📝 Padrões de Código

### **HTML**
- Uso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Atributos `alt` em todas as imagens
- ARIA labels para acessibilidade
- Meta tags para SEO

### **CSS**
```css
/* Nomenclatura BEM-like */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Organização */
:root { /* Variáveis */ }
/* Reset */
/* Layout */
/* Components */
/* Utilities */
/* Responsive */
```

### **JavaScript**
```javascript
// Funções puras e modulares
// Nomenclatura camelCase
// Comentários descritivos
// Event delegation quando possível
```

---

## 🎨 Sistema de Cores

### **Modo Claro**
- Primary: `#FF6B35` (Laranja)
- Secondary: `#004E89` (Azul)
- Accent: `#00A8E8` (Azul claro)
- Background: `#f7fafc`
- Text: `#2d3748`

### **Modo Escuro**
- Primary: `#FF8555`
- Secondary: `#1A6BA5`
- Accent: `#00D4FF`
- Background: `#0f172a`
- Text: `#e2e8f0`

---

## 🔄 Versionamento

- **Git**: Controle de versão
- **Branches**: 
  - `main`: Produção
  - `dev`: Desenvolvimento
  - `feature/*`: Novas funcionalidades

---

## 📄 Licença

Projeto pessoal © 2026 Vilácio Cordeiro Júnior

---

## 👤 Autor

**Vilácio Cordeiro Júnior**
- Email: CordeiroJuniorVilacio@gmail.com
- Telefone: (13) 9 9677-8306
- Localização: Bertioga - SP - Brasil

---

## 📈 Melhorias Futuras

- [ ] Implementar i18n (Português/Inglês)
- [ ] Adicionar filtros dinâmicos em projetos
- [ ] Implementar busca no site
- [ ] Adicionar blog/artigos
- [ ] Integrar analytics
- [ ] PWA (Progressive Web App)
- [ ] Performance optimizations (lazy loading)
- [ ] Adicionar testes automatizados

---

**Última atualização:** Janeiro 2026
