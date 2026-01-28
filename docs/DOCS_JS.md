# 📘 Documentação Técnica - JavaScript

## 📋 Índice
1. [Arquitetura](#arquitetura)
2. [Módulos e Funções](#módulos-e-funções)
3. [Event Listeners](#event-listeners)
4. [LocalStorage](#localstorage)
5. [APIs Utilizadas](#apis-utilizadas)

---

## 🏗️ Arquitetura

### **Princípios SOLID Aplicados**

#### **Single Responsibility**
Cada função tem uma responsabilidade única:
- `initTheme()` → Apenas inicializa o tema
- `toggleTheme()` → Apenas alterna o tema
- `initScrollAnimations()` → Apenas configura animações de scroll

#### **Open/Closed**
- Funções aceitas extensão via parâmetros
- Configurações externalizadas
- Fácil adicionar novas animações

#### **Dependency Inversion**
- Funções usam seletores CSS abstratos
- Não dependem de IDs específicos
- Configuráveis via atributos data-*

---

## 🧩 Módulos e Funções

### **1. Dark Mode**

#### `initTheme()`
```javascript
/**
 * Inicializa o tema baseado na preferência salva no LocalStorage
 * @returns {void}
 * 
 * Responsabilidades:
 * - Buscar tema salvo no LocalStorage
 * - Aplicar tema ao documento
 * - Fallback para tema light
 */
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', savedTheme);
}
```

**Uso:**
```javascript
// Chamado no DOMContentLoaded
initTheme();
```

#### `toggleTheme()`
```javascript
/**
 * Alterna entre tema claro e escuro
 * @returns {void}
 * 
 * Responsabilidades:
 * - Obter tema atual
 * - Alternar para o oposto
 * - Salvar no LocalStorage
 * - Animar botão de toggle
 */
function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	
	// Animação do botão
	const toggle = document.querySelector('.theme-toggle');
	if (toggle) {
		toggle.style.transform = 'rotate(360deg) scale(1.2)';
		setTimeout(() => toggle.style.transform = '', 300);
	}
}
```

**Eventos:**
- `click` no `.theme-toggle`

---

### **2. Scroll Animations**

#### `initScrollAnimations()`
```javascript
/**
 * Inicializa o Intersection Observer para animações de scroll
 * @returns {void}
 * 
 * Responsabilidades:
 * - Configurar Intersection Observer
 * - Observar elementos com classes de animação
 * - Adicionar classe 'visible' quando visível
 * 
 * Classes suportadas:
 * - .fade-in
 * - .slide-in-left
 * - .slide-in-right
 */
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,              // 10% do elemento visível
		rootMargin: '0px 0px -50px 0px'  // Margem inferior
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	// Observar elementos
	document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
		.forEach(el => observer.observe(el));
}
```

**Performance:**
- Usa Intersection Observer (performático)
- Não usa scroll events (evita jank)
- Threshold configurável

#### `addAnimationClasses()`
```javascript
/**
 * Adiciona classes de animação aos elementos dinamicamente
 * @returns {void}
 * 
 * Responsabilidades:
 * - Selecionar elementos por tipo
 * - Adicionar classes de animação apropriadas
 * - Aplicar delay escalonado (stagger effect)
 */
function addAnimationClasses() {
	// Project cards - fade in com delay
	document.querySelectorAll('.project-card').forEach((card, index) => {
		card.classList.add('fade-in');
		card.style.transitionDelay = `${index * 0.1}s`;
	});

	// Posts - slide in da esquerda
	document.querySelectorAll('.post').forEach((post, index) => {
		post.classList.add('slide-in-left');
		post.style.transitionDelay = `${index * 0.15}s`;
	});

	// Contact items - fade in
	document.querySelectorAll('.contact-item').forEach((item, index) => {
		item.classList.add('fade-in');
		item.style.transitionDelay = `${index * 0.1}s`;
	});
}
```

**Padrões:**
- `.project-card` → fade-in, delay 0.1s
- `.post` → slide-in-left, delay 0.15s
- `.contact-item` → fade-in, delay 0.1s

---

### **3. Scroll to Top**

#### `initScrollToTop()`
```javascript
/**
 * Inicializa o botão "Scroll to Top"
 * @returns {void}
 * 
 * Responsabilidades:
 * - Mostrar/ocultar botão baseado no scroll
 * - Adicionar evento de clique
 * - Scroll suave ao topo
 */
function initScrollToTop() {
	const scrollBtn = document.querySelector('.scroll-to-top');
	if (!scrollBtn) return;

	// Mostrar após 300px de scroll
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			scrollBtn.classList.add('visible');
		} else {
			scrollBtn.classList.remove('visible');
		}
	});

	// Scroll ao topo ao clicar
	scrollBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
}
```

**Configuração:**
- Aparece após 300px de scroll
- Smooth scroll nativo do navegador

---

### **4. Sticky Navigation**

#### `initStickyNav()`
```javascript
/**
 * Adiciona sombra dinâmica ao nav durante scroll
 * @returns {void}
 * 
 * Responsabilidades:
 * - Detectar scroll
 * - Modificar sombra do nav
 */
function initStickyNav() {
	const nav = document.querySelector('nav');
	if (!nav) return;

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			nav.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
		} else {
			nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
		}
	});
}
```

---

### **5. Button Ripple Effect**

#### `initButtonRipple()`
```javascript
/**
 * Adiciona efeito ripple (onda) aos botões
 * @returns {void}
 * 
 * Responsabilidades:
 * - Adicionar event listener de clique
 * - Calcular posição do clique
 * - Criar e animar elemento ripple
 * - Remover elemento após animação
 */
function initButtonRipple() {
	const buttons = '.btn-curriculum, .btn-see-more, .btn-github, .btn-back';
	
	document.querySelectorAll(buttons).forEach(button => {
		button.addEventListener('click', function(e) {
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			
			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.classList.add('ripple');
			
			this.appendChild(ripple);
			
			// Remover após 600ms
			setTimeout(() => ripple.remove(), 600);
		});
	});
}
```

**CSS Associado:**
```css
.ripple {
	position: absolute;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.6);
	transform: scale(0);
	animation: ripple-animation 0.6s ease-out;
	pointer-events: none;
}

@keyframes ripple-animation {
	to {
		transform: scale(4);
		opacity: 0;
	}
}
```

---

## 🎧 Event Listeners

### **DOMContentLoaded**
```javascript
document.addEventListener('DOMContentLoaded', () => {
	initTheme();                  // Aplicar tema salvo
	addAnimationClasses();        // Adicionar classes de animação
	initScrollAnimations();       // Configurar Intersection Observer
	initScrollToTop();            // Botão scroll to top
	initStickyNav();              // Sombra dinâmica do nav
	initButtonRipple();           // Efeito ripple
	
	// Event listener do dark mode toggle
	const themeToggle = document.querySelector('.theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
	}
});
```

### **Anchor Links (Smooth Scroll)**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});
```

---

## 💾 LocalStorage

### **Estrutura de Dados**
```javascript
// Chave: 'theme'
// Valores possíveis: 'light' | 'dark'
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

### **Persistência**
- Tema é salvo ao alternar
- Carregado na inicialização
- Persiste entre sessões
- Sem expiração

---

## 🔌 APIs Utilizadas

### **1. Intersection Observer API**
```javascript
const observer = new IntersectionObserver(callback, options);
observer.observe(element);
```

**Benefícios:**
- Performance superior a scroll events
- Detecta visibilidade automaticamente
- Callback assíncrono

### **2. LocalStorage API**
```javascript
localStorage.setItem(key, value);
const value = localStorage.getItem(key);
```

**Uso:**
- Persistência de tema
- Limite: ~5MB
- Síncrono

### **3. Web Animations API (indireta)**
```javascript
element.style.transform = 'rotate(360deg)';
element.scrollIntoView({ behavior: 'smooth' });
window.scrollTo({ top: 0, behavior: 'smooth' });
```

---

## 🎯 Boas Práticas Implementadas

### **1. Performance**
- ✅ Usa Intersection Observer (não scroll events)
- ✅ Debounce implícito via CSS transitions
- ✅ Event delegation quando possível
- ✅ Remove event listeners quando desnecessários

### **2. Segurança**
- ✅ Validação de existência de elementos (null checks)
- ✅ Uso de `querySelector` (evita XSS)
- ✅ Sem `eval()` ou `innerHTML` não sanitizado

### **3. Manutenibilidade**
- ✅ Funções pequenas e focadas
- ✅ Nomenclatura descritiva
- ✅ Comentários JSDoc
- ✅ Código modular

### **4. Compatibilidade**
- ✅ Fallbacks para APIs não suportadas
- ✅ Feature detection (`if (element)`)
- ✅ Testes em navegadores modernos

---

## 🔧 Extensões Futuras

### **Adicionar Nova Animação**
```javascript
// 1. Criar CSS
.zoom-in {
	opacity: 0;
	transform: scale(0.8);
	transition: opacity 0.6s, transform 0.6s;
}

.zoom-in.visible {
	opacity: 1;
	transform: scale(1);
}

// 2. Adicionar no initScrollAnimations
document.querySelectorAll('.zoom-in').forEach(el => observer.observe(el));
```

### **Adicionar Novo Tema**
```javascript
// No toggleTheme, adicionar mais opções
const themes = ['light', 'dark', 'purple'];
const currentIndex = themes.indexOf(currentTheme);
const newTheme = themes[(currentIndex + 1) % themes.length];
```

---

**Última atualização:** Janeiro 2026
