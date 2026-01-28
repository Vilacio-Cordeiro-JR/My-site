# 📘 Documentação Técnica - CSS

## 📋 Índice
1. [Variáveis CSS](#variáveis-css)
2. [Componentes](#componentes)
3. [Padrões de Design](#padrões-de-design)
4. [Responsividade](#responsividade)

---

## 🎨 Variáveis CSS

### **Sistema de Cores**

#### Modo Claro
```css
--color-primary: #FF6B35;        /* Laranja - Cor principal */
--color-secondary: #004E89;      /* Azul - Cor secundária */
--color-accent: #00A8E8;         /* Azul claro - Destaque */
--color-text: #2d3748;           /* Texto principal */
--color-bg-main: #f7fafc;        /* Background principal */
```

#### Modo Escuro
```css
--color-primary: #FF8555;        /* Laranja mais claro */
--color-secondary: #1A6BA5;      /* Azul mais claro */
--color-accent: #00D4FF;         /* Azul brilhante */
--color-text: #e2e8f0;           /* Texto claro */
--color-bg-main: #0f172a;        /* Background escuro */
```

### **Espaçamento**
```css
--spacing-xs: 0.4rem;    /* 6.4px */
--spacing-sm: 0.8rem;    /* 12.8px */
--spacing-md: 1.2rem;    /* 19.2px */
--spacing-lg: 1.6rem;    /* 25.6px */
--spacing-xl: 2rem;      /* 32px */
--spacing-xxl: 3rem;     /* 48px */
```

### **Tipografia**
```css
--font-base: 'Poppins', sans-serif;
--font-size-base: 0.95rem;   /* 15.2px */
--font-size-sm: 0.85rem;     /* 13.6px */
--font-size-md: 1rem;        /* 16px */
--font-size-lg: 1.1rem;      /* 17.6px */
--font-size-xl: 1.3rem;      /* 20.8px */
--font-size-xxl: 1.8rem;     /* 28.8px */
--line-height: 1.6;
```

### **Border Radius**
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 50%;
```

### **Transições**
```css
--transition-fast: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-medium: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### **Glassmorphism**
```css
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.18);
--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
--backdrop-blur: blur(10px);
```

---

## 🧩 Componentes

### **1. Header**
```css
header {
  background: var(--color-gradient-3);
  /* Gradiente laranja → azul */
  padding: var(--spacing-xl);
  position: relative;
  overflow: hidden;
}
```

**Características:**
- Gradiente dinâmico
- Overlay com radial-gradient
- Imagem com hover effect (scale + rotate)

### **2. Navigation**
```css
nav {
  background: var(--color-secondary);
  position: sticky;
  top: 0;
  z-index: 100;
}
```

**Características:**
- Sticky positioning
- Underline animado nos links
- Shadow dinâmico no scroll

### **3. Cards**
```css
.project-card,
.post {
  background: var(--glass-bg);
  backdrop-filter: var(--backdrop-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

**Características:**
- Glassmorphism effect
- Hover elevation
- Border left accent on hover

### **4. Buttons**
```css
.btn-curriculum {
  background: var(--color-gradient-1);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  position: relative;
  overflow: hidden;
}
```

**Características:**
- Gradiente de fundo
- Shimmer effect (::before)
- Ripple effect (JavaScript)
- Scale on hover

---

## 🎭 Padrões de Design

### **Glassmorphism**
Efeito de vidro fosco aplicado em:
- Cards de projetos
- Posts
- Main container
- Contact items

**Propriedades chave:**
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

### **Gradientes**
```css
--color-gradient-1: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
--color-gradient-2: linear-gradient(135deg, #004E89 0%, #00A8E8 100%);
--color-gradient-3: linear-gradient(135deg, #FF6B35 0%, #00A8E8 100%);
```

**Uso:**
- Gradient 1: Botões principais (laranja)
- Gradient 2: Footer (azul)
- Gradient 3: Header (laranja → azul)

### **Sombras**
```css
/* Elevação baixa */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Elevação média */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

/* Elevação alta */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
```

---

## 📱 Responsividade

### **Breakpoint Principal: 768px**

```css
@media (max-width: 768px) {
  /* Ajustes de spacing */
  --spacing-md: 1rem;
  --spacing-lg: 1.2rem;
  
  /* Ajustes de tipografia */
  --font-size-xxl: 1.5rem;
  --font-size-xl: 1.2rem;
  
  /* Layout changes */
  .contacts-container {
    grid-template-columns: 1fr;
  }
  
  .post-segment-2 {
    flex-direction: column;
  }
}
```

### **Estratégia Mobile-First**
- Base styles para mobile
- Media queries para desktop
- Imagens responsivas
- Touch-friendly targets (44px min)

---

## 🎯 Boas Práticas Implementadas

### **1. Performance**
- CSS Variables para runtime theming
- Transições com `cubic-bezier` para suavidade
- `will-change` para animações pesadas
- `backdrop-filter` com fallback

### **2. Acessibilidade**
- Contraste adequado (WCAG AA)
- Focus states visíveis
- Tamanhos mínimos de toque
- Semântica HTML

### **3. Manutenibilidade**
- Variáveis centralizadas
- Nomenclatura consistente
- Comentários descritivos
- Organização por seções

### **4. Cross-browser**
- Prefixos vendor quando necessário
- Fallbacks para `backdrop-filter`
- Testes em Chrome, Firefox, Safari

---

## 🔧 Customização

### **Alterar Cores Primárias**
```css
:root {
  --color-primary: #SEU_LARANJA;
  --color-secondary: #SEU_AZUL;
}

[data-theme="dark"] {
  --color-primary: #SEU_LARANJA_CLARO;
  --color-secondary: #SEU_AZUL_CLARO;
}
```

### **Adicionar Novo Tema**
```css
[data-theme="purple"] {
  --color-primary: #8B5CF6;
  --color-secondary: #6366F1;
  /* ... demais cores */
}
```

### **Ajustar Glassmorphism**
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.5); /* Menos opaco */
  --backdrop-blur: blur(20px);           /* Mais blur */
}
```

---

**Última atualização:** Janeiro 2026
