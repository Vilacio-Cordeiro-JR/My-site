# ⚡ JavaScript - Funcionalidades do Projeto

Esta pasta contém todos os arquivos JavaScript do projeto.

## 📂 Estrutura

```
js/
├── script.js      # Funcionalidades principais
└── README.md      # Esta documentação
```

## 🎯 Arquivo Principal

### `script.js`
Arquivo modular contendo todas as funcionalidades interativas do site.

**Módulos/Funções:**

#### 🌓 Dark Mode
- `initTheme()` - Inicializa o tema do LocalStorage
- `toggleTheme()` - Alterna entre light/dark mode

#### 🎬 Animações
- `initScrollAnimations()` - Configura Intersection Observer
- `addAnimationClasses()` - Adiciona classes de animação aos elementos

#### 🖱️ Interatividade
- `initScrollToTop()` - Botão "Voltar ao topo"
- `initButtonRipple()` - Efeito ripple em botões
- `updateScrollToTopButton()` - Visibilidade do botão scroll-to-top

## 🔧 APIs Utilizadas

### Intersection Observer API
```javascript
// Monitora elementos entrando no viewport
const observer = new IntersectionObserver(callback, options);
```

### LocalStorage API
```javascript
// Persiste preferências do usuário
localStorage.setItem('theme', 'dark');
```

### DOM APIs
- `document.querySelector()`
- `element.addEventListener()`
- `element.classList.toggle()`

## 📦 Dependências

**Nenhuma!** 🎉 O projeto usa **JavaScript Vanilla** sem frameworks ou bibliotecas externas.

## 🚀 Performance

- Event delegation para otimização
- Debounce em scroll events
- Lazy initialization
- Minimal DOM queries

## 📖 Documentação Completa

Para detalhes completos sobre funções, parâmetros e exemplos, consulte:
- [DOCS_JS.md](../../docs/DOCS_JS.md)
