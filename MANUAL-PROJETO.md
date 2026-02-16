# 📘 MANUAL COMPLETO DO PROJETO
## Portfólio Vilácio Cordeiro Júnior

---

## 📑 SUMÁRIO

1. [Introdução](#1-introdução)
2. [Visão Geral do Projeto](#2-visão-geral-do-projeto)
3. [Estrutura de Arquivos](#3-estrutura-de-arquivos)
4. [Tecnologias Utilizadas](#4-tecnologias-utilizadas)
5. [Sistema de Cores e Temas](#5-sistema-de-cores-e-temas)
6. [Arquitetura CSS](#6-arquitetura-css)
7. [JavaScript - Funcionalidades](#7-javascript---funcionalidades)
8. [HTML - Estrutura das Páginas](#8-html---estrutura-das-páginas)
9. [Componentes Reutilizáveis](#9-componentes-reutilizáveis)
10. [Animações e Interações](#10-animações-e-interações)
11. [Responsividade](#11-responsividade)
12. [Deploy e Configuração](#12-deploy-e-configuração)
13. [Guia de Manutenção](#13-guia-de-manutenção)

---

## 1. INTRODUÇÃO

### 1.1 Sobre este Manual

Este manual documenta completamente o projeto de portfólio profissional, detalhando cada tecnologia, código, decisão de design e funcionalidade implementada. O objetivo é fornecer um guia completo para entender, manter e expandir o projeto.

### 1.2 Objetivo do Projeto

Criar um site de portfólio profissional moderno, responsivo e interativo que apresente:
- Informações profissionais
- Formação acadêmica
- Projetos desenvolvidos
- Experiência em empresas
- Currículo ABNT para impressão
- Sistema de contato

### 1.3 Público-Alvo

- Recrutadores e empresas
- Potenciais clientes
- Colaboradores e parceiros
- Desenvolvedores que desejam estudar o código

---

## 2. VISÃO GERAL DO PROJETO

### 2.1 Características Principais

**Design Moderno**
- Paleta de cores vibrante (Laranja #FF6B35 e Azul #004E89)
- Glassmorphism effects em cards
- Gradientes suaves e transições fluidas
- Tipografia moderna com Google Fonts (Poppins)

**Funcionalidades Interativas**
- Dark Mode com persistência em LocalStorage
- Animações de scroll (fade-in, slide-in)
- Navegação sticky com sombra dinâmica
- Botão scroll-to-top
- Hover effects elaborados

**Responsividade**
- Layout adaptável para desktop, tablet e mobile
- Imagens otimizadas
- Menu responsivo

**Performance**
- CSS e JS otimizados
- Carregamento rápido
- Animações com GPU acceleration

---

## 3. ESTRUTURA DE ARQUIVOS

### 3.1 Árvore de Diretórios Completa

```
projeto-curriculo-site/
│
├── index.html                     # Página inicial (redireciona)
├── vercel.json                    # Configuração do Vercel
├── README.md                      # Documentação básica
├── MANUAL-PROJETO.md             # Este manual
│
├── pages/                         # Todas as páginas HTML
│   ├── 1-MainPage.html           # Página principal
│   ├── 2-academic.html           # Formação acadêmica
│   ├── 3-projects.html           # Lista de projetos
│   ├── 3.1-projeto-cotacoes.html # Detalhe do projeto 1
│   ├── 3.2-my-site.html          # Detalhe do projeto 2
│   ├── 4-about.html              # Sobre mim
│   ├── 5-enterprises.html        # Empresas
│   ├── 5.1-victis.html          # Detalhe da empresa
│   ├── 6-contact.html            # Contatos
│   └── curriculo.html            # Currículo ABNT
│
├── src/                          # Código fonte
│   ├── css/
│   │   ├── style.css            # Estilos principais (1011 linhas)
│   │   └── curriculo-print.css  # Estilos para impressão
│   └── js/
│       └── script.js            # JavaScript principal (187 linhas)
│
├── assets/                       # Recursos estáticos
│   ├── images/                  # Imagens do site
│   │   ├── ProfileImage.png    # Foto de perfil
│   │   ├── Academic_formation/ # Imagens acadêmicas
│   │   ├── Contatos/           # Ícones de contato
│   │   ├── Empresas/           # Logos de empresas
│   │   ├── Posts/              # Imagens de posts
│   │   └── SobreMim/           # Imagens pessoais
│   └── curriculo/              # Documentos PDF
│
├── docs/                         # Documentação detalhada
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── COMPONENTS.md
│   ├── CONTRIBUTING.md
│   ├── DOCS_CSS.md
│   └── DOCS_JS.md
│
└── backup/                       # Backups
    └── style.css.backup
```

### 3.2 Propósito de Cada Diretório

**`/pages/`**: Contém todas as páginas HTML do site. Cada página representa uma seção diferente do portfólio.

**`/src/`**: Código fonte organizado por tipo (CSS e JS). Mantém o código principal separado dos recursos.

**`/assets/`**: Todos os recursos estáticos como imagens e documentos. Organizado por categoria para fácil localização.

**`/docs/`**: Documentação técnica detalhada do projeto. Útil para desenvolvedores.

**`/backup/`**: Versões antigas de arquivos importantes para rollback se necessário.

---

## 4. TECNOLOGIAS UTILIZADAS

### 4.1 HTML5

**Versão**: HTML5
**Por quê usar?**: Estrutura semântica moderna, melhor SEO, acessibilidade.

**Tags Semânticas Utilizadas**:
```html
<header>   - Cabeçalho da página
<nav>      - Menu de navegação
<main>     - Conteúdo principal
<section>  - Seções de conteúdo
<article>  - Posts e conteúdos independentes
<footer>   - Rodapé
<address>  - Informações de contato
```

**Exemplo de Estrutura Básica**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Curriculum</title>
	
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	
	<!-- CSS com versionamento -->
	<link rel="stylesheet" href="../src/css/style.css?v=2.0">
</head>
<body>
	<!-- Conteúdo -->
</body>
</html>
```

**Detalhes Importantes**:
- `lang="en"`: Define idioma (embora o conteúdo seja PT-BR)
- `?v=2.0`: Cache busting para forçar reload do CSS
- `preconnect`: Otimiza carregamento de fontes Google

### 4.2 CSS3

**Versão**: CSS3
**Abordagem**: Vanilla CSS com Custom Properties (CSS Variables)

**Por quê não usar frameworks como Bootstrap ou Tailwind?**
- Controle total sobre o código
- Menor tamanho de arquivo
- Aprendizado profundo de CSS
- Personalização completa
- Melhor performance

**Recursos CSS3 Utilizados**:
1. **CSS Variables (Custom Properties)**
2. **Flexbox**
3. **CSS Grid**
4. **Animations & Transitions**
5. **Media Queries**
6. **Pseudo-classes (:hover, :focus, :active)**
7. **Pseudo-elements (::before, ::after)**
8. **calc() function**
9. **rgba() colors**
10. **backdrop-filter (glassmorphism)**

### 4.3 JavaScript

**Versão**: ES6+ (ECMAScript 2015+)
**Abordagem**: Vanilla JavaScript (sem frameworks)

**Por quê não usar React, Vue ou Angular?**
- Projeto simples não requer framework complexo
- Carregamento mais rápido
- Menor curva de aprendizado
- Maior compatibilidade
- Zero dependências

**APIs JavaScript Utilizadas**:
```javascript
// LocalStorage API
localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');

// Intersection Observer API
const observer = new IntersectionObserver(callback, options);

// DOM Manipulation
document.querySelector('.element');
document.querySelectorAll('.elements');
element.classList.add('class');

// Event Listeners
window.addEventListener('scroll', callback);
button.addEventListener('click', callback);

// Smooth Scroll
window.scrollTo({ top: 0, behavior: 'smooth' });
```

### 4.4 Google Fonts

**Fonte Utilizada**: Poppins
**Pesos**: 300, 400, 500, 600, 700

**Por quê Poppins?**
- Moderna e clean
- Ótima legibilidade
- Suporte a múltiplos pesos
- Gratuita e open source

**Implementação**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 4.5 Vercel (Deploy)

**Plataforma**: Vercel
**Configuração**: `vercel.json`

**Por quê Vercel?**
- Deploy gratuito
- CDN global
- HTTPS automático
- Deploy contínuo com Git
- Performance otimizada

---

## 5. SISTEMA DE CORES E TEMAS

### 5.1 Paleta de Cores - Light Mode

```css
:root {
	/* Cores Primárias */
	--color-primary: #FF6B35;        /* Laranja vibrante */
	--color-primary-light: #FF8555;  /* Laranja claro */
	--color-primary-dark: #E55A2B;   /* Laranja escuro */
	
	/* Cores Secundárias */
	--color-secondary: #004E89;      /* Azul profundo */
	--color-secondary-light: #1A6BA5; /* Azul médio */
	--color-secondary-dark: #003A68;  /* Azul escuro */
	
	/* Cor Accent */
	--color-accent: #00A8E8;         /* Azul claro */
	--color-accent-light: #33BFEF;   /* Azul claro vibrante */
	
	/* Gradientes */
	--color-gradient-1: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
	--color-gradient-2: linear-gradient(135deg, #004E89 0%, #00A8E8 100%);
	--color-gradient-3: linear-gradient(135deg, #FF6B35 0%, #00A8E8 100%);
	
	/* Cores de Texto */
	--color-text: #2d3748;           /* Texto principal (cinza escuro) */
	--color-text-light: #718096;     /* Texto secundário */
	--color-text-muted: #a0aec0;     /* Texto desativado */
	
	/* Cores de Fundo */
	--color-bg-main: #f7fafc;        /* Fundo principal (branco azulado) */
	--color-bg-card: rgba(255, 255, 255, 0.85); /* Fundo de cards */
	--color-bg-section: rgba(247, 250, 252, 0.6); /* Fundo de seções */
	--color-bg-tag: #edf2f7;         /* Fundo de badges */
	
	/* Cores Utilitárias */
	--color-border: #e2e8f0;         /* Bordas */
	--color-link: #FF6B35;           /* Links */
	--color-link-hover: #004E89;     /* Links hover */
	--color-shadow: rgba(0, 0, 0, 0.1);       /* Sombras */
	--color-shadow-hover: rgba(0, 0, 0, 0.15); /* Sombras hover */
}
```

**Explicação das Escolhas**:
- **Laranja (#FF6B35)**: Energia, criatividade, destaque
- **Azul (#004E89)**: Profissionalismo, confiança, tecnologia
- **Combinação**: Equilíbrio entre criatividade e seriedade

### 5.2 Paleta de Cores - Dark Mode

```css
[data-theme="dark"] {
	/* Cores Primárias Ajustadas */
	--color-primary: #FF8555;        /* Laranja mais claro */
	--color-primary-light: #FFA07A;  /* Laranja suave */
	--color-primary-dark: #FF6B35;   /* Laranja original */
	
	/* Cores Secundárias Ajustadas */
	--color-secondary: #1A6BA5;      /* Azul mais claro */
	--color-secondary-light: #33BFEF; /* Azul vibrante */
	--color-secondary-dark: #004E89;  /* Azul original */
	
	/* Cor Accent Ajustada */
	--color-accent: #00D4FF;         /* Azul neon */
	--color-accent-light: #4DE0FF;   /* Azul neon claro */
	
	/* Cores de Texto Invertidas */
	--color-text: #e2e8f0;           /* Texto claro */
	--color-text-light: #a0aec0;     /* Texto secundário */
	--color-text-muted: #718096;     /* Texto desativado */
	
	/* Cores de Fundo Escuras */
	--color-bg-main: #0f172a;        /* Fundo principal (azul muito escuro) */
	--color-bg-card: rgba(30, 41, 59, 0.85); /* Cards escuros */
	--color-bg-section: rgba(51, 65, 85, 0.6); /* Seções escuras */
	--color-bg-tag: #1e293b;         /* Badges escuros */
	
	/* Cores Utilitárias Escuras */
	--color-border: #334155;         /* Bordas mais visíveis */
	--color-link: #FF8555;           /* Links laranjas */
	--color-link-hover: #00D4FF;     /* Links hover azul neon */
	--color-shadow: rgba(0, 0, 0, 0.3);       /* Sombras mais fortes */
	--color-shadow-hover: rgba(0, 0, 0, 0.5); /* Sombras hover fortes */
	
	/* Glassmorphism Ajustado */
	--glass-bg: rgba(30, 41, 59, 0.7);
	--glass-border: rgba(255, 255, 255, 0.1);
	--glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

**Por quê Ajustar as Cores no Dark Mode?**
- Cores saturadas em fundo escuro cansam a vista
- Versões mais claras das cores primárias mantêm contraste adequado
- Fundos escuros azulados são mais confortáveis que preto puro

### 5.3 Sistema de Espaçamentos

```css
:root {
	--spacing-xs: 0.4rem;    /* 6.4px */
	--spacing-sm: 0.8rem;    /* 12.8px */
	--spacing-md: 1.2rem;    /* 19.2px */
	--spacing-lg: 1.6rem;    /* 25.6px */
	--spacing-xl: 2rem;      /* 32px */
	--spacing-xxl: 3rem;     /* 48px */
}
```

**Como Usar**:
```css
.component {
	padding: var(--spacing-md);
	margin-bottom: var(--spacing-lg);
	gap: var(--spacing-sm);
}
```

### 5.4 Sistema de Tipografia

```css
:root {
	--font-base: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	--font-size-base: 0.95rem;   /* 15.2px */
	--font-size-sm: 0.85rem;     /* 13.6px */
	--font-size-md: 1rem;        /* 16px */
	--font-size-lg: 1.1rem;      /* 17.6px */
	--font-size-xl: 1.3rem;      /* 20.8px */
	--font-size-xxl: 1.8rem;     /* 28.8px */
	--line-height: 1.6;
}
```

### 5.5 Sistema de Border Radius

```css
:root {
	--radius-sm: 8px;
	--radius-md: 12px;
	--radius-lg: 16px;
	--radius-xl: 20px;
	--radius-full: 50%;
}
```

### 5.6 Sistema de Transições

```css
:root {
	--transition-fast: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	--transition-medium: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**cubic-bezier(0.4, 0, 0.2, 1)** = "ease-out"
- Início rápido, desaceleração suave
- Sensação natural e responsiva

### 5.7 Glassmorphism Variables

```css
:root {
	--glass-bg: rgba(255, 255, 255, 0.7);
	--glass-border: rgba(255, 255, 255, 0.18);
	--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
	--backdrop-blur: blur(10px);
}
```

**Como Criar Efeito Glass**:
```css
.glass-card {
	background: var(--glass-bg);
	backdrop-filter: var(--backdrop-blur);
	border: 1px solid var(--glass-border);
	box-shadow: var(--glass-shadow);
}
```

---

## 6. ARQUITETURA CSS

### 6.1 Organização do Arquivo style.css

O arquivo CSS é organizado em seções lógicas:

```css
/* ========== CSS VARIABLES ========== */
/* ========== DARK MODE VARIABLES ========== */
/* ========== BASE RESET & INHERITANCE ========== */
/* ========== SCROLL ANIMATIONS ========== */
/* ========== HEADER ========== */
/* ========== NAVIGATION ========== */
/* ========== MAIN CONTENT ========== */
/* ========== CARDS & COMPONENTS ========== */
/* ========== BUTTONS ========== */
/* ========== FORMS ========== */
/* ========== FOOTER ========== */
/* ========== UTILITY CLASSES ========== */
/* ========== DARK MODE TOGGLE ========== */
/* ========== SCROLL TO TOP BUTTON ========== */
/* ========== RESPONSIVE DESIGN ========== */
```

### 6.2 CSS Reset

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	font-family: var(--font-base);
	font-size: var(--font-size-base);
	line-height: var(--line-height);
	color: var(--color-text);
	background: var(--color-bg-main);
	transition: background var(--transition-medium), color var(--transition-fast);
	overflow-x: hidden;
}
```

**Explicação**:
- `box-sizing: border-box`: Padding e border incluídos no width/height
- `scroll-behavior: smooth`: Scroll suave em links âncora
- `overflow-x: hidden`: Previne scroll horizontal indesejado
- `transition`: Anima mudanças de tema

### 6.3 Header Styling

```css
header {
	background: var(--color-gradient-1);
	color: white;
	padding: var(--spacing-xl) var(--spacing-md);
	text-align: center;
	box-shadow: 0 4px 12px var(--color-shadow);
	position: relative;
	overflow: hidden;
}

header::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: url('data:image/svg+xml,...') repeat;
	opacity: 0.1;
	pointer-events: none;
}

header img {
	width: 140px;
	height: 140px;
	border-radius: var(--radius-full);
	border: 5px solid rgba(255, 255, 255, 0.3);
	object-fit: cover;
	margin-bottom: var(--spacing-md);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	transition: transform var(--transition-fast);
}

header img:hover {
	transform: scale(1.05) rotate(3deg);
}
```

**Técnicas Utilizadas**:
- Gradiente de fundo com `var(--color-gradient-1)`
- Pseudo-elemento `::before` para padrão decorativo
- Borda circular transparente na imagem
- Transformação em hover (scale + rotate)

### 6.4 Navigation Styling

```css
nav {
	background: var(--glass-bg);
	backdrop-filter: var(--backdrop-blur);
	padding: 0;
	box-shadow: 0 4px 12px var(--color-shadow);
	position: sticky;
	top: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	transition: box-shadow var(--transition-fast);
}

nav a {
	color: var(--color-text);
	text-decoration: none;
	padding: var(--spacing-md) var(--spacing-lg);
	display: inline-block;
	font-weight: 500;
	position: relative;
	transition: color var(--transition-fast);
}

nav a::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 0;
	height: 3px;
	background: var(--color-gradient-1);
	transition: width var(--transition-fast);
}

nav a:hover::after,
nav a.active::after {
	width: 80%;
}
```

**Técnicas Utilizadas**:
- `position: sticky`: Navegação fixa ao scrollar
- `backdrop-filter`: Efeito glassmorphism
- Pseudo-elemento `::after`: Underline animado
- Transição em `width` para animação suave

### 6.5 Cards & Glassmorphism

```css
.project-card {
	background: var(--glass-bg);
	backdrop-filter: var(--backdrop-blur);
	padding: var(--spacing-xl);
	border-radius: var(--radius-lg);
	border: 1px solid var(--glass-border);
	box-shadow: var(--glass-shadow);
	transition: all var(--transition-fast);
}

.project-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 12px 40px rgba(255, 107, 53, 0.25);
	border-color: rgba(255, 107, 53, 0.3);
}
```

**Efeito Glassmorphism**:
1. Fundo semi-transparente (`rgba`)
2. `backdrop-filter: blur()` para desfocar o fundo
3. Borda sutil transparente
4. Sombra suave

### 6.6 Buttons

```css
.btn-curriculum {
	display: block;
	width: fit-content;
	margin: 0 auto;
	background: var(--color-gradient-1);
	color: white;
	padding: var(--spacing-md) var(--spacing-xxl);
	border-radius: var(--radius-lg);
	text-decoration: none;
	font-size: var(--font-size-md);
	font-weight: 600;
	transition: all var(--transition-fast);
	box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
	position: relative;
	overflow: hidden;
}

.btn-curriculum::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	border-radius: var(--radius-full);
	background: rgba(255, 255, 255, 0.3);
	transform: translate(-50%, -50%);
	transition: width 0.6s, height 0.6s;
}

.btn-curriculum:hover::before {
	width: 300px;
	height: 300px;
}

.btn-curriculum:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}
```

**Efeito Ripple**:
- Pseudo-elemento `::before` com círculo
- Expansão em hover (`width` e `height`)
- Círculo posicionado no centro

---

## 7. JAVASCRIPT - FUNCIONALIDADES

### 7.1 Estrutura Geral do script.js

```javascript
// ========== DARK MODE TOGGLE ==========
function initTheme() { ... }
function toggleTheme() { ... }

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() { ... }

// ========== SCROLL TO TOP BUTTON ==========
function initScrollToTop() { ... }

// ========== STICKY NAV SHADOW ==========
function initStickyNav() { ... }

// ========== ADD ANIMATION CLASSES ==========
function addAnimationClasses() { ... }

// ========== MOBILE MENU TOGGLE ==========
function initMobileMenu() { ... }

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() { ... });
```

### 7.2 Dark Mode Toggle

**Código Completo**:
```javascript
// Inicialização do tema
function initTheme() {
	// Busca tema salvo ou usa 'light' como padrão
	const savedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', savedTheme);
}

// Alternar tema
function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	
	// Atualiza atributo HTML
	document.documentElement.setAttribute('data-theme', newTheme);
	
	// Salva preferência no localStorage
	localStorage.setItem('theme', newTheme);
	
	// Animação no botão
	const toggle = document.querySelector('.theme-toggle');
	if (toggle) {
		toggle.style.transform = 'rotate(360deg) scale(1.2)';
		setTimeout(() => {
			toggle.style.transform = '';
		}, 300);
	}
}
```

**Como Funciona**:
1. **initTheme()**: Executado ao carregar a página
   - Busca tema salvo no `localStorage`
   - Se não houver, usa 'light' como padrão
   - Aplica o atributo `data-theme` no `<html>`

2. **toggleTheme()**: Executado ao clicar no botão
   - Detecta tema atual
   - Alterna para o oposto
   - Salva nova preferência
   - Anima o botão

3. **LocalStorage**: Armazena preferência do usuário
   ```javascript
   localStorage.setItem('theme', 'dark');  // Salvar
   localStorage.getItem('theme');           // Buscar
   ```

4. **CSS Reage Automaticamente**:
   ```css
   /* Light mode */
   :root { --color-bg: white; }
   
   /* Dark mode */
   [data-theme="dark"] { --color-bg: black; }
   ```

### 7.3 Scroll Animations (Intersection Observer)

**Código Completo**:
```javascript
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,                    // 10% do elemento visível
		rootMargin: '0px 0px -50px 0px'   // Offset de 50px no bottom
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Adiciona classe 'visible' quando elemento entra na viewport
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	// Observa todos os elementos com classes de animação
	document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
		observer.observe(el);
	});
}
```

**Como Funciona**:
1. **IntersectionObserver**: API moderna que detecta quando elemento entra na viewport
2. **threshold: 0.1**: Dispara quando 10% do elemento está visível
3. **rootMargin**: Adiciona offset de 50px (anima antes do elemento aparecer)
4. **classList.add('visible')**: Adiciona classe que aciona animação CSS

**CSS das Animações**:
```css
/* Estado Inicial */
.fade-in {
	opacity: 0;
	transform: translateY(30px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Estado Animado */
.fade-in.visible {
	opacity: 1;
	transform: translateY(0);
}

/* Slide da Esquerda */
.slide-in-left {
	opacity: 0;
	transform: translateX(-50px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-in-left.visible {
	opacity: 1;
	transform: translateX(0);
}
```

### 7.4 Scroll to Top Button

**Código Completo**:
```javascript
function initScrollToTop() {
	const scrollBtn = document.querySelector('.scroll-to-top');
	if (!scrollBtn) return;  // Se não existir, sai da função

	// Mostra/esconde botão baseado no scroll
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			scrollBtn.classList.add('visible');
		} else {
			scrollBtn.classList.remove('visible');
		}
	});

	// Scroll suave ao clicar
	scrollBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
}
```

**CSS do Botão**:
```css
.scroll-to-top {
	position: fixed;
	bottom: var(--spacing-xl);
	right: var(--spacing-xl);
	width: 50px;
	height: 50px;
	background: var(--color-gradient-1);
	color: white;
	border: none;
	border-radius: var(--radius-full);
	font-size: var(--font-size-xl);
	cursor: pointer;
	box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
	opacity: 0;
	visibility: hidden;
	transform: scale(0);
	transition: all var(--transition-fast);
	z-index: 999;
}

.scroll-to-top.visible {
	opacity: 1;
	visibility: visible;
	transform: scale(1);
}
```

### 7.5 Sticky Navigation Shadow

**Código Completo**:
```javascript
function initStickyNav() {
	const nav = document.querySelector('nav');
	if (!nav) return;

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			// Aumenta sombra quando scrollar mais de 100px
			nav.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
		} else {
			// Sombra normal no topo
			nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
		}
	});
}
```

**Por quê fazer isso?**
- Feedback visual de que o usuário scrollou
- Destaca a navegação do conteúdo
- Melhora a percepção de profundidade

### 7.6 Add Animation Classes Dinamicamente

**Código Completo**:
```javascript
function addAnimationClasses() {
	// Adiciona fade-in aos cards de projeto
	document.querySelectorAll('.project-card').forEach((card, index) => {
		card.classList.add('fade-in');
		// Delay escalonado para efeito em cascata
		card.style.transitionDelay = `${index * 0.1}s`;
	});

	// Adiciona slide-in aos posts
	document.querySelectorAll('.post').forEach((post, index) => {
		post.classList.add('slide-in-left');
		post.style.transitionDelay = `${index * 0.15}s`;
	});

	// Adiciona fade-in aos itens de contato
	document.querySelectorAll('.contact-item').forEach((item, index) => {
		item.classList.add('fade-in');
		item.style.transitionDelay = `${index * 0.1}s`;
	});
}
```

**Por quê usar transitionDelay escalonado?**
- Cria efeito de cascata
- Mais interessante visualmente
- Permite ao usuário processar cada item

### 7.7 Mobile Menu Toggle

**Código Completo**:
```javascript
function initMobileMenu() {
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('nav');
	
	if (!menuToggle || !nav) return;

	menuToggle.addEventListener('click', () => {
		nav.classList.toggle('active');
		menuToggle.classList.toggle('active');
	});

	// Fecha menu ao clicar em link
	document.querySelectorAll('nav a').forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('active');
			menuToggle.classList.remove('active');
		});
	});
}
```

### 7.8 Inicialização Geral

**Código Completo**:
```javascript
// Executa quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
	// Inicializa tema (importante ser o primeiro)
	initTheme();
	
	// Adiciona classes de animação aos elementos
	addAnimationClasses();
	
	// Inicializa observers e listeners
	initScrollAnimations();
	initScrollToTop();
	initStickyNav();
	initMobileMenu();
	
	// Event listener para botão de tema
	const themeToggle = document.querySelector('.theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
	}
});
```

**Por quê usar DOMContentLoaded?**
- Garante que todos os elementos HTML foram carregados
- Evita erros de elementos não encontrados
- Mais rápido que `window.onload` (não espera imagens)

---

## 8. HTML - ESTRUTURA DAS PÁGINAS

### 8.1 Template Básico

Todas as páginas seguem esta estrutura:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Nome da Página - My Curriculum</title>
	
	<!-- Preconnect para Google Fonts (Performance) -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	
	<!-- CSS com cache busting -->
	<link rel="stylesheet" href="../src/css/style.css?v=2.0">
</head>
<body>
	<!-- ========== HEADER ========== -->
	<header>
		<img src="../assets/images/ProfileImage.png" alt="Profile Picture">
		<h1>Vilácio Cordeiro Júnior</h1>
		<address>CordeiroJuniorVilacio@gmail.com | (13) 9 9677-8306 | <span id="age"></span> anos | Bertioga - SP - Brasil</address>
	</header>
	
	<!-- ========== CÁLCULO DINÂMICO DA IDADE ========== -->
	<script>
		const birthDate = new Date('2006-11-14');
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		document.getElementById('age').textContent = age;
	</script>
	
	<!-- ========== NAVIGATION ========== -->
	<nav>
		<a href="1-MainPage.html" class="active">Principal</a>
		<a href="2-academic.html">Formação Acadêmica</a>
		<a href="3-projects.html">Projetos</a>
		<a href="4-about.html">Sobre mim</a>
		<a href="5-enterprises.html">Empresas</a>
		<a href="6-contact.html">Contato</a>
	</nav>
	
	<!-- ========== MAIN CONTENT ========== -->
	<main>
		<!-- Conteúdo específico de cada página -->
	</main>
	
	<!-- ========== FOOTER ========== -->
	<footer>
		<p>&copy; 2025 Vilácio Cordeiro Júnior. Todos os direitos reservados.</p>
	</footer>
	
	<!-- ========== DARK MODE TOGGLE ========== -->
	<button class="theme-toggle" aria-label="Toggle Dark Mode">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
		</svg>
	</button>
	
	<!-- ========== SCROLL TO TOP ========== -->
	<button class="scroll-to-top" aria-label="Scroll to Top">↑</button>
	
	<!-- ========== JAVASCRIPT ========== -->
	<script src="../src/js/script.js"></script>
</body>
</html>
```

### 8.2 Página Principal (1-MainPage.html)

**Seção de Boas-vindas**:
```html
<div class="welcome-section">
	<h2>Bem-vindo ao meu espaço profissional</h2>
	<p>Sou um profissional da área de tecnologia...</p>
	<a href="curriculo.html" target="_blank" class="btn-curriculum">Ver Currículo Completo</a>
</div>
```

**Seção de Posts**:
```html
<section class="posts-section">
	<h2>Últimas Atualizações</h2>
	
	<article class="post">
		<div class="post-segment-1">
			<h3 class="post-title">Título do Post</h3>
		</div>
		
		<div class="post-segment-2">
			<img src="../assets/images/Posts/imagem.png" alt="Imagem do Post" class="post-image">
			<p class="post-description">Descrição do post...</p>
		</div>
		
		<div class="post-segment-3">
			<span class="post-date">08 de Janeiro, 2026</span>
		</div>
	</article>
</section>
```

### 8.3 Página de Projetos (3-projects.html)

```html
<main>
	<section class="projects-container">
		<h2>Meus Projetos</h2>
		<p class="section-description">Confira alguns dos projetos que desenvolvi:</p>
		
		<div class="projects-grid">
			<!-- Card de Projeto -->
			<div class="project-card">
				<h3>
					<a href="3.1-projeto-cotacoes.html" class="project-link">
						Sistema de Orçamentos
					</a>
				</h3>
				<p class="project-description">
					Sistema completo para gerenciamento de orçamentos...
				</p>
				<div class="project-tech">
					<span class="tech-badge">Python</span>
					<span class="tech-badge">Tkinter</span>
					<span class="tech-badge">SQLite</span>
					<span class="tech-badge">ReportLab</span>
				</div>
				<div class="project-actions">
					<a href="3.1-projeto-cotacoes.html" class="btn-see-more">Ver Mais</a>
					<a href="https://github.com/..." class="btn-github">GitHub</a>
				</div>
			</div>
			
			<!-- Mais cards... -->
		</div>
	</section>
</main>
```

**Estrutura de um Card**:
- **Título**: Link para página de detalhes
- **Descrição**: Breve resumo do projeto
- **Tecnologias**: Badges com stack utilizada
- **Ações**: Botões para ver mais e acessar GitHub

### 8.4 Página de Contato (6-contact.html)

```html
<section class="contact-section">
	<h2>Entre em Contato</h2>
	<p class="section-description">Estou sempre aberto a novas oportunidades e conexões.</p>
	
	<div class="contact-grid">
		<!-- Item de Contato -->
		<div class="contact-item">
			<img src="../assets/images/Contatos/email.png" alt="Email" class="contact-icon">
			<h3>Email</h3>
			<a href="mailto:CordeiroJuniorVilacio@gmail.com">
				CordeiroJuniorVilacio@gmail.com
			</a>
		</div>
		
		<div class="contact-item">
			<img src="../assets/images/Contatos/linkedin.png" alt="LinkedIn" class="contact-icon">
			<h3>LinkedIn</h3>
			<a href="https://www.linkedin.com/in/..." target="_blank">
				linkedin.com/in/vilacio-cordeiro
			</a>
		</div>
		
		<!-- Mais itens... -->
	</div>
</section>
```

### 8.5 Currículo ABNT (curriculo.html)

**Estrutura Especial para Impressão**:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Currículo - Vilácio Cordeiro Júnior</title>
	<link rel="stylesheet" href="../src/css/curriculo-print.css">
</head>
<body>
	<div class="curriculum-container">
		<!-- Botão de Impressão (não aparece no print) -->
		<button class="btn-print" onclick="window.print()">
			🖨️ Imprimir / Salvar PDF
		</button>
		
		<!-- Conteúdo do Currículo -->
		<div class="curriculum-content">
			<header class="curriculum-header">
				<h1>VILÁCIO CORDEIRO JÚNIOR</h1>
				<p>Bertioga, SP | CordeiroJuniorVilacio@gmail.com | (13) 9 9677-8306</p>
			</header>
			
			<section>
				<h2>OBJETIVO</h2>
				<p>Atuar na área de tecnologia...</p>
			</section>
			
			<!-- Mais seções... -->
		</div>
	</div>
</body>
</html>
```

**CSS Específico para Impressão** (`curriculo-print.css`):
```css
@media print {
	.btn-print {
		display: none;  /* Esconde botão na impressão */
	}
	
	body {
		font-size: 11pt;
		line-height: 1.4;
	}
	
	h1 {
		font-size: 16pt;
		margin-bottom: 0.5cm;
	}
	
	section {
		page-break-inside: avoid;  /* Evita quebra no meio da seção */
	}
}
```

---

## 9. COMPONENTES REUTILIZÁVEIS

### 9.1 Buttons

**Button Primário**:
```html
<a href="#" class="btn-curriculum">Ver Currículo Completo</a>
```

**Button Secundário**:
```html
<a href="#" class="btn-see-more">Ver Mais</a>
<a href="#" class="btn-github">GitHub</a>
```

**Button Terciário**:
```html
<a href="#" class="btn-back">← Voltar aos Projetos</a>
```

**CSS Base dos Botões**:
```css
[class^="btn-"],
[class*=" btn-"] {
	display: inline-block;
	padding: var(--spacing-md) var(--spacing-xl);
	border-radius: var(--radius-lg);
	text-decoration: none;
	font-weight: 600;
	transition: all var(--transition-fast);
	cursor: pointer;
}
```

### 9.2 Cards

**Project Card**:
```html
<div class="project-card fade-in">
	<h3><a href="#" class="project-link">Nome do Projeto</a></h3>
	<p class="project-description">Descrição...</p>
	<div class="project-tech">
		<span class="tech-badge">Python</span>
		<span class="tech-badge">React</span>
	</div>
	<div class="project-actions">
		<a href="#" class="btn-see-more">Ver Mais</a>
		<a href="#" class="btn-github">GitHub</a>
	</div>
</div>
```

### 9.3 Badges de Tecnologia

```html
<div class="project-tech">
	<span class="tech-badge">Python</span>
	<span class="tech-badge">JavaScript</span>
	<span class="tech-badge">React</span>
</div>
```

**CSS**:
```css
.tech-badge {
	display: inline-block;
	background: var(--color-bg-tag);
	color: var(--color-text);
	padding: var(--spacing-xs) var(--spacing-sm);
	border-radius: var(--radius-sm);
	font-size: var(--font-size-sm);
	font-weight: 500;
	transition: all var(--transition-fast);
}

.tech-badge:hover {
	background: var(--color-primary);
	color: white;
	transform: scale(1.05);
}
```

### 9.4 Posts

```html
<article class="post slide-in-left">
	<div class="post-segment-1">
		<h3 class="post-title">Título</h3>
	</div>
	<div class="post-segment-2">
		<img src="image.png" alt="Post" class="post-image">
		<p class="post-description">Conteúdo...</p>
	</div>
	<div class="post-segment-3">
		<span class="post-date">Data</span>
	</div>
</article>
```

---

## 10. ANIMAÇÕES E INTERAÇÕES

### 10.1 Tipos de Animações

**Fade In** (Aparecer):
```css
.fade-in {
	opacity: 0;
	transform: translateY(30px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
	opacity: 1;
	transform: translateY(0);
}
```

**Slide In Left** (Deslizar da esquerda):
```css
.slide-in-left {
	opacity: 0;
	transform: translateX(-50px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-in-left.visible {
	opacity: 1;
	transform: translateX(0);
}
```

**Slide In Right** (Deslizar da direita):
```css
.slide-in-right {
	opacity: 0;
	transform: translateX(50px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-in-right.visible {
	opacity: 1;
	transform: translateX(0);
}
```

### 10.2 Hover Effects

**Cards**:
```css
.project-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 12px 40px rgba(255, 107, 53, 0.25);
}
```

**Botões**:
```css
.btn-curriculum:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}
```

**Links na Navegação**:
```css
nav a::after {
	content: '';
	width: 0;
	height: 3px;
	background: var(--color-gradient-1);
	transition: width var(--transition-fast);
}

nav a:hover::after {
	width: 80%;
}
```

### 10.3 Transições de Tema

```css
body {
	transition: background var(--transition-medium), 
	            color var(--transition-fast);
}

.project-card {
	transition: all var(--transition-fast);
}
```

---

## 11. RESPONSIVIDADE

### 11.1 Breakpoints Utilizados

```css
/* Mobile First Approach */

/* Tablets e acima */
@media (min-width: 768px) {
	/* ... */
}

/* Desktop e acima */
@media (min-width: 1024px) {
	/* ... */
}

/* Mobile (max-width) */
@media (max-width: 768px) {
	/* ... */
}

@media (max-width: 600px) {
	/* ... */
}
```

### 11.2 Ajustes Responsivos

**Navegação**:
```css
@media (max-width: 768px) {
	nav {
		flex-direction: column;
	}
	
	nav a {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid var(--color-border);
	}
}
```

**Grid de Projetos**:
```css
.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: var(--spacing-xl);
}
```

**Imagens**:
```css
img {
	max-width: 100%;
	height: auto;
}
```

---

## 12. DEPLOY E CONFIGURAÇÃO

### 12.1 Vercel Configuration

**Arquivo**: `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "/pages/1-MainPage.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Explicação**:
- **rewrites**: Redireciona raiz para a página principal
- **headers**: Configura cache para melhor performance

### 12.2 Como Fazer Deploy

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Fazer login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Deploy para produção:
```bash
vercel --prod
```

---

## 13. GUIA DE MANUTENÇÃO

### 13.1 Adicionar Nova Página

1. Criar arquivo HTML em `/pages/`
2. Copiar estrutura do template
3. Adicionar link na navegação
4. Testar responsividade

### 13.2 Adicionar Novo Projeto

1. Abrir `3-projects.html`
2. Duplicar um `.project-card`
3. Atualizar informações
4. Criar página de detalhes (opcional)

### 13.3 Modificar Cores

1. Abrir `src/css/style.css`
2. Modificar variáveis em `:root`
3. Testar em light e dark mode

### 13.4 Adicionar Nova Animação

1. Definir CSS da animação
2. Adicionar classe no HTML ou via JS
3. Adicionar no IntersectionObserver se necessário

### 13.5 Troubleshooting Comum

**CSS não atualiza**:
- Aumentar versão no `?v=2.0` para `?v=2.1`
- Limpar cache do navegador (Ctrl+Shift+R)

**Animações não funcionam**:
- Verificar se `script.js` está carregando
- Verificar console do navegador (F12)

**Dark mode não persiste**:
- Verificar localStorage no navegador
- Verificar se `initTheme()` está sendo chamado

---

## 📊 ESTATÍSTICAS DO PROJETO

- **Total de Páginas HTML**: 13
- **Linhas de CSS**: ~1011
- **Linhas de JavaScript**: ~187
- **Variáveis CSS**: 50+
- **Componentes Reutilizáveis**: 10+
- **Animações**: 6 tipos diferentes
- **Imagens**: 20+ organizadas por categoria

---

## 🔄 HISTÓRICO DE DESENVOLVIMENTO

### Fase 1: Estrutura Básica (Dezembro 2025)
- Criação das páginas HTML
- Estrutura de navegação
- Layout básico com CSS simples
- Cores neutras (cinza/preto)

### Fase 2: Design Moderno (Janeiro 2026)
- Implementação de nova paleta de cores
- Adição de Google Fonts (Poppins)
- Criação do sistema de CSS Variables
- Glassmorphism em cards

### Fase 3: Interatividade (Janeiro 2026)
- Dark Mode com LocalStorage
- Animações de scroll
- Intersection Observer
- Botão scroll-to-top
- Sticky navigation

### Fase 4: Documentação (Janeiro 2026)
- README.md completo
- Documentação técnica (DOCS_CSS, DOCS_JS)
- Guia de contribuição
- Biblioteca de componentes
- Changelog detalhado

### Fase 5: Deploy (Janeiro 2026)
- Configuração Vercel
- Otimizações de performance
- Cache busting
- Deploy em produção

---

## 🚀 PRÓXIMOS PASSOS

### Melhorias Planejadas

**Funcionalidades**:
- [ ] Sistema de busca
- [ ] Filtros em projetos
- [ ] Modal de imagens
- [ ] Timeline interativa
- [ ] Certificações

**Técnicas**:
- [ ] PWA (Progressive Web App)
- [ ] Service Worker
- [ ] Lazy loading de imagens
- [ ] Internacionalização (PT/EN)

**Backend (Futuro)**:
- [ ] Node.js + Express
- [ ] Sistema de comentários
- [ ] Analytics
- [ ] CMS para gerenciar conteúdo

---

## 📞 SUPORTE E CONTRIBUIÇÃO

Para contribuir com este projeto:
1. Leia `docs/CONTRIBUTING.md`
2. Crie uma branch para sua feature
3. Siga os padrões de código
4. Teste em diferentes navegadores
5. Faça um pull request

---

## 📝 CONCLUSÃO

Este manual documenta completamente o projeto de portfólio profissional. Ele serve como:
- Guia de referência para desenvolvimento
- Documentação técnica completa
- Material de estudo para desenvolvedores
- Base para expansões futuras

**Última Atualização**: 28 de Janeiro de 2026  
**Versão do Manual**: 1.0  
**Autor**: Vilácio Cordeiro Júnior

---

**FIM DO MANUAL**
