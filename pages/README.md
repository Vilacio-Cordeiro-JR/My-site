# 📄 Páginas HTML do Projeto

Esta pasta contém todas as páginas HTML do site.

## 📂 Estrutura de Páginas

```
pages/
├── index.html                  # Página inicial (home)
├── 1-MainPage.html            # Página principal
├── 2-academic.html            # Formação acadêmica
├── 3-projects.html            # Projetos
│   ├── 3.1-projeto-cotacoes.html  # Projeto: Sistema de Cotações
│   └── 3.2-my-site.html           # Projeto: Meu Site
├── 4-about.html               # Sobre mim
├── 5-enterprises.html         # Empresas/Experiência
│   └── 5.1-victis.html           # Empresa: Victis
├── 6-contact.html             # Contato
└── curriculo.html             # Currículo (formato ABNT)
```

## 🗺️ Mapa do Site

### Navegação Principal
```
Home (index.html)
├── Main Page (1-MainPage.html)
├── Formação Acadêmica (2-academic.html)
├── Projetos (3-projects.html)
│   ├── Sistema de Cotações (3.1-projeto-cotacoes.html)
│   └── Meu Site (3.2-my-site.html)
├── Sobre Mim (4-about.html)
├── Empresas (5-enterprises.html)
│   └── Victis (5.1-victis.html)
├── Contato (6-contact.html)
└── Currículo (curriculo.html)
```

## 📋 Padrões de Nomenclatura

### Convenção Atual
- Numeração para ordem hierárquica (1-, 2-, 3-, etc.)
- Sub-páginas com numeração decimal (3.1-, 3.2-, 5.1-, etc.)
- Nomes descritivos em inglês (kebab-case)
- Arquivo especial: `curriculo.html` (sem numeração)

### Exemplo
```
3-projects.html          → Página principal de projetos
  ↳ 3.1-projeto-cotacoes.html  → Sub-projeto 1
  ↳ 3.2-my-site.html           → Sub-projeto 2
```

## 🏗️ Estrutura HTML Comum

Todas as páginas compartilham:

### 1. Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Título da Página</title>
```

### 2. Estilos
```html
<link rel="stylesheet" href="../src/css/style.css?v=2.0">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Navegação
```html
<nav>
    <!-- Links de navegação -->
</nav>
```

### 4. Container Principal
```html
<div class="main-container">
    <main>
        <!-- Conteúdo específico da página -->
    </main>
</div>
```

### 5. Footer
```html
<footer>
    <!-- Informações de rodapé -->
</footer>
```

### 6. Scripts
```html
<script src="../src/js/script.js"></script>
```

## ✨ Funcionalidades Compartilhadas

- ✅ Dark Mode (toggle persistente)
- ✅ Scroll-to-top button
- ✅ Animações de scroll (fade-in, slide-in)
- ✅ Navegação sticky com sombra dinâmica
- ✅ Glassmorphism effects
- ✅ Responsividade mobile-first

## 🎨 Classes CSS Comuns

### Containers
- `.main-container` - Container principal com glassmorphism
- `.section` - Seções de conteúdo

### Cards
- `.post` - Cards de posts/projetos
- `.academic-item` - Items de formação acadêmica

### Botões
- `.btn` - Botão padrão
- `.btn-primary` - Botão primário (laranja)
- `.btn-secondary` - Botão secundário (azul)

### Animações
- `.fade-in` - Fade in ao aparecer
- `.slide-in-left` - Desliza da esquerda
- `.slide-in-right` - Desliza da direita

## 📖 Documentação Adicional

- [COMPONENTS.md](../docs/COMPONENTS.md) - Biblioteca de componentes
- [README.md](../README.md) - Documentação principal do projeto
