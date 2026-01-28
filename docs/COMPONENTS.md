# 🧩 Biblioteca de Componentes

## 📋 Índice
1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Forms](#forms)
4. [Navigation](#navigation)
5. [Animations](#animations)

---

## 🔘 Buttons

### **Button Primary (Gradiente Laranja)**
```html
<a href="#" class="btn-curriculum">
	Ver Currículo Completo
</a>
```

**CSS:**
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
}
```

### **Button Secondary (Azul)**
```html
<a href="#" class="btn-see-more">
	Ver Mais
</a>
```

### **Button Back (Cinza)**
```html
<a href="3-projects.html" class="btn-back">
	← Voltar aos Projetos
</a>
```

### **Variantes**
- `.btn-curriculum` - Primário (laranja)
- `.btn-see-more` - Secundário (azul)
- `.btn-github` - Secundário (azul)
- `.btn-back` - Terciário (cinza)
- `.btn-print` - Especial para impressão

---

## 🎴 Cards

### **Project Card**
```html
<div class="project-card fade-in">
	<h3>
		<a href="#" class="project-link">Nome do Projeto</a>
	</h3>
	<p class="project-description">
		Descrição breve do projeto...
	</p>
	<div class="project-tech">
		<span class="tech-badge">Python</span>
		<span class="tech-badge">React</span>
		<span class="tech-badge">Node.js</span>
	</div>
	<div class="project-actions">
		<a href="#" class="btn-see-more">Ver Mais</a>
		<a href="#" class="btn-github">GitHub</a>
	</div>
</div>
```

**Estrutura:**
- `.project-card` - Container
- `.project-link` - Título clicável
- `.project-description` - Descrição
- `.project-tech` - Container de badges
- `.tech-badge` - Badge individual
- `.project-actions` - Botões de ação

### **Post Card**
```html
<article class="post slide-in-left">
	<div class="post-segment-1">
		<h3 class="post-title">Título do Post</h3>
	</div>
	
	<div class="post-segment-2">
		<img src="imagem.jpg" alt="Descrição" class="post-image">
		<p class="post-description">
			Descrição do post...
		</p>
	</div>
	
	<div class="post-segment-3">
		<span class="post-date">08 de Janeiro, 2026</span>
	</div>
</article>
```

**Estrutura:**
- `.post` - Container
- `.post-segment-1` - Cabeçalho
- `.post-segment-2` - Conteúdo (imagem + texto)
- `.post-segment-3` - Rodapé (data)

### **Contact Card**
```html
<a href="https://linkedin.com/..." target="_blank" class="contact-item fade-in">
	<div class="contact-icon-wrapper" style="background-image: url('icon.png');"></div>
	<div class="contact-info">
		<h3>LinkedIn</h3>
	</div>
</a>
```

---

## 📝 Forms

### **Input Text**
```html
<div class="form-group">
	<label for="nome">Nome:</label>
	<input type="text" id="nome" name="nome" class="form-input" required>
</div>
```

**CSS:**
```css
.form-group {
	margin-bottom: var(--spacing-md);
}

.form-input {
	width: 100%;
	padding: var(--spacing-sm);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-sm);
	font-size: var(--font-size-base);
	transition: border-color var(--transition-fast);
}

.form-input:focus {
	outline: none;
	border-color: var(--color-primary);
	box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}
```

### **Button Submit**
```html
<button type="submit" class="btn-submit">
	Enviar
</button>
```

---

## 🧭 Navigation

### **Main Navigation**
```html
<nav>
	<a href="1-MainPage.html" class="active">Principal</a>
	<a href="2-academic.html">Formação Acadêmica</a>
	<a href="3-projects.html">Projetos</a>
	<a href="4-about.html">Sobre mim</a>
	<a href="5-enterprises.html">Empresas</a>
	<a href="6-contact.html">Contato</a>
</nav>
```

**Estado Ativo:**
- Adicione classe `.active` ao link da página atual

### **Breadcrumbs** (Exemplo de implementação futura)
```html
<nav class="breadcrumbs">
	<a href="1-MainPage.html">Home</a>
	<span class="separator">/</span>
	<a href="3-projects.html">Projetos</a>
	<span class="separator">/</span>
	<span class="current">Sistema de Orçamentos</span>
</nav>
```

---

## 🎬 Animations

### **Classes de Animação**

#### **Fade In**
```html
<div class="fade-in">
	Conteúdo que aparece gradualmente
</div>
```

**CSS:**
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

#### **Slide In Left**
```html
<div class="slide-in-left">
	Conteúdo que desliza da esquerda
</div>
```

**CSS:**
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

#### **Slide In Right**
```html
<div class="slide-in-right">
	Conteúdo que desliza da direita
</div>
```

### **Delays (Stagger Effect)**
```javascript
// JavaScript
document.querySelectorAll('.item').forEach((item, index) => {
	item.classList.add('fade-in');
	item.style.transitionDelay = `${index * 0.1}s`;
});
```

```css
/* CSS alternativo */
.item:nth-child(1) { transition-delay: 0s; }
.item:nth-child(2) { transition-delay: 0.1s; }
.item:nth-child(3) { transition-delay: 0.2s; }
```

---

## 🎨 Utility Classes

### **Spacing**
```html
<div class="mt-lg">Margin top large</div>
<div class="mb-md">Margin bottom medium</div>
<div class="p-xl">Padding XL</div>
```

**CSS:**
```css
.mt-xs { margin-top: var(--spacing-xs); }
.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }
.mt-xl { margin-top: var(--spacing-xl); }

.mb-xs { margin-bottom: var(--spacing-xs); }
/* ... */

.p-xs { padding: var(--spacing-xs); }
/* ... */
```

### **Text Alignment**
```html
<p class="text-center">Texto centralizado</p>
<p class="text-justify">Texto justificado</p>
<p class="text-right">Texto à direita</p>
```

### **Display**
```html
<div class="d-none">Oculto</div>
<div class="d-block">Bloco</div>
<div class="d-flex">Flex</div>
```

---

## 🔧 Customização de Componentes

### **Cores Personalizadas**
```css
/* Override de cor do botão */
.btn-custom {
	background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
	box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}
```

### **Tamanhos**
```css
/* Botão pequeno */
.btn-sm {
	padding: var(--spacing-xs) var(--spacing-md);
	font-size: var(--font-size-sm);
}

/* Botão grande */
.btn-lg {
	padding: var(--spacing-lg) var(--spacing-xxl);
	font-size: var(--font-size-lg);
}
```

### **Variantes de Card**
```css
/* Card com borda colorida */
.card-accent {
	border-left: 4px solid var(--color-primary);
}

/* Card com sombra elevada */
.card-elevated {
	box-shadow: 0 12px 40px var(--color-shadow-hover);
}
```

---

## 📱 Componentes Responsivos

### **Grid Responsivo**
```html
<div class="grid-responsive">
	<div class="grid-item">Item 1</div>
	<div class="grid-item">Item 2</div>
	<div class="grid-item">Item 3</div>
</div>
```

**CSS:**
```css
.grid-responsive {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: var(--spacing-lg);
}

@media (max-width: 768px) {
	.grid-responsive {
		grid-template-columns: 1fr;
	}
}
```

### **Container**
```html
<div class="container">
	Conteúdo limitado a largura máxima
</div>
```

**CSS:**
```css
.container {
	max-width: var(--container-max);
	margin: 0 auto;
	padding: 0 var(--spacing-lg);
}
```

---

## ♿ Acessibilidade

### **Skip to Content**
```html
<a href="#main-content" class="skip-to-content">
	Pular para o conteúdo
</a>
```

**CSS:**
```css
.skip-to-content {
	position: absolute;
	top: -40px;
	left: 0;
	background: var(--color-primary);
	color: white;
	padding: var(--spacing-sm);
	z-index: 100;
}

.skip-to-content:focus {
	top: 0;
}
```

### **Focus Visible**
```css
/* Garantir foco visível em todos os elementos interativos */
a:focus-visible,
button:focus-visible,
input:focus-visible {
	outline: 3px solid var(--color-primary);
	outline-offset: 2px;
}
```

---

**Documentação completa de componentes - Janeiro 2026**
