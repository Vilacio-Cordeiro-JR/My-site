# 🎨 CSS - Estilos do Projeto

Esta pasta contém todos os arquivos de estilo do projeto.

## 📂 Estrutura

```
css/
├── style.css              # Estilos principais (all pages)
├── curriculo-print.css    # Estilos de impressão (ABNT)
└── README.md              # Esta documentação
```

## 🎯 Arquivos Principais

### `style.css`
- **Propósito**: Estilos globais para todas as páginas
- **Responsabilidades**:
  - Variáveis CSS (cores, espaçamentos, tipografia)
  - Reset e configurações base
  - Componentes reutilizáveis (botões, cards, navegação)
  - Dark mode
  - Glassmorphism effects
  - Animações e transições
  - Media queries (responsividade)

### `curriculo-print.css`
- **Propósito**: Estilos específicos para impressão do currículo
- **Responsabilidades**:
  - Formatação ABNT (margens, espaçamentos)
  - Tipografia Times New Roman
  - Quebras de página
  - Ocultar elementos não imprimíveis

## 🎨 Sistema de Design

### Variáveis CSS
```css
--primary-color: #FF6B35    /* Laranja */
--secondary-color: #004E89   /* Azul */
--accent-color: #00A8E8      /* Azul Claro */
```

### Breakpoints
- Mobile: até 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

## 📖 Documentação Completa

Para detalhes completos sobre variáveis, componentes e padrões, consulte:
- [DOCS_CSS.md](../../docs/DOCS_CSS.md)
