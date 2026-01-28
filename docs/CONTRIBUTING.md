# 🤝 Guia de Contribuição

## 📋 Índice
1. [Configuração do Ambiente](#configuração-do-ambiente)
2. [Padrões de Código](#padrões-de-código)
3. [Estrutura de Commits](#estrutura-de-commits)
4. [Pull Requests](#pull-requests)
5. [Testes](#testes)

---

## 💻 Configuração do Ambiente

### **Requisitos**
- Git instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### **Extensões VS Code Recomendadas**
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ritwickdey.liveserver"
  ]
}
```

### **Setup**
```bash
# Clone o repositório
git clone <url-do-repo>

# Entre na pasta
cd "Projeto Corriculo Site"

# Abra com VS Code
code .

# Abra o Live Server (Alt+L+O)
```

---

## 📝 Padrões de Código

### **HTML**

#### **Estrutura Básica**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Título da Página</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/..." rel="stylesheet">
	<link rel="stylesheet" href="style.css?v=2.0">
</head>
<body>
	<!-- Conteúdo -->
	<script src="script.js"></script>
</body>
</html>
```

#### **Regras**
- ✅ Use indentação com TAB
- ✅ Sempre inclua `alt` em imagens
- ✅ Use tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Atributos `aria-*` para acessibilidade
- ❌ Não use estilos inline
- ❌ Não use IDs para CSS (apenas para JS quando necessário)

### **CSS**

#### **Nomenclatura**
```css
/* Componente */
.component-name { }

/* Elemento do componente */
.component-name__element { }

/* Modificador */
.component-name--modifier { }

/* Estado */
.component-name.is-active { }
.component-name.is-visible { }
```

#### **Organização**
```css
/* ========== SEÇÃO ========== */

/* Seletor */
.exemplo {
	/* Layout */
	display: flex;
	position: relative;
	
	/* Box Model */
	margin: 1rem;
	padding: 1rem;
	width: 100%;
	
	/* Visual */
	background: white;
	border: 1px solid black;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	
	/* Typography */
	font-size: 1rem;
	color: black;
	
	/* Other */
	transition: all 0.3s;
}
```

#### **Regras**
- ✅ Use variáveis CSS para cores e espaçamentos
- ✅ Mobile-first (base styles para mobile, media queries para desktop)
- ✅ Agrupe propriedades relacionadas
- ✅ Use comentários para seções
- ❌ Não use `!important` (exceto overrides necessários)
- ❌ Não use seletores muito específicos (#id .class .class)

### **JavaScript**

#### **Nomenclatura**
```javascript
// camelCase para variáveis e funções
const myVariable = 'valor';
function myFunction() {}

// PascalCase para classes
class MyClass {}

// UPPER_CASE para constantes
const API_URL = 'https://api.exemplo.com';
```

#### **Funções**
```javascript
/**
 * Descrição da função
 * @param {string} param1 - Descrição do parâmetro
 * @param {number} param2 - Descrição do parâmetro
 * @returns {boolean} Descrição do retorno
 */
function minhaFuncao(param1, param2) {
	// Implementação
	return true;
}
```

#### **Regras**
- ✅ Use `const` por padrão, `let` quando necessário
- ✅ Arrow functions para callbacks
- ✅ Template literals para strings
- ✅ Destructuring quando apropriado
- ✅ Comentários JSDoc
- ❌ Não use `var`
- ❌ Não use `eval()`
- ❌ Não modifique protótipos nativos

---

## 📦 Estrutura de Commits

### **Formato**
```
tipo(escopo): mensagem curta

Descrição detalhada (opcional)

Closes #issue
```

### **Tipos**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Manutenção

### **Exemplos**
```bash
feat(dark-mode): adiciona toggle de tema escuro

Implementa sistema de dark mode com persistência em localStorage

Closes #15

---

fix(nav): corrige scroll suave em Safari

---

docs(readme): atualiza instruções de instalação

---

style(css): ajusta indentação e espaçamento
```

---

## 🔀 Pull Requests

### **Checklist**
Antes de abrir um PR, verifique:

- [ ] Código segue os padrões estabelecidos
- [ ] Sem erros no console do navegador
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Testado em mobile (DevTools responsive mode)
- [ ] Documentação atualizada se necessário
- [ ] Commits seguem o formato estabelecido
- [ ] Branch nomeada adequadamente

### **Template de PR**
```markdown
## Descrição
Breve descrição das mudanças

## Tipo de mudança
- [ ] Nova funcionalidade
- [ ] Correção de bug
- [ ] Breaking change
- [ ] Documentação

## Como testar
1. Passo 1
2. Passo 2
3. ...

## Screenshots
(Se aplicável)

## Checklist
- [ ] Código segue os padrões
- [ ] Testado em múltiplos navegadores
- [ ] Documentação atualizada
```

---

## 🧪 Testes

### **Testes Manuais**

#### **Navegadores**
Testar em:
- ✅ Chrome (última versão)
- ✅ Firefox (última versão)
- ✅ Safari (última versão)
- ✅ Edge (última versão)

#### **Dispositivos**
Testar em:
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667, 414x896)

#### **Funcionalidades**
- [ ] Dark mode funciona corretamente
- [ ] Animações suaves sem jank
- [ ] Links funcionam
- [ ] Botões têm feedback visual
- [ ] Imagens carregam
- [ ] Scroll suave funciona
- [ ] Impressão do currículo está formatada

### **Performance**

#### **Lighthouse**
Abrir DevTools → Lighthouse → Run Audit

**Metas:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

#### **Otimizações**
- ✅ Imagens otimizadas (WebP quando possível)
- ✅ CSS minificado em produção
- ✅ JS minificado em produção
- ✅ Lazy loading de imagens
- ✅ Preconnect para Google Fonts

---

## 🐛 Reportando Bugs

### **Template de Issue**
```markdown
## Descrição do Bug
Descrição clara e concisa

## Como Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

## Comportamento Esperado
O que deveria acontecer

## Screenshots
(Se aplicável)

## Ambiente
- Navegador: [Chrome 120]
- OS: [Windows 11]
- Resolução: [1920x1080]
```

---

## 💡 Sugerindo Melhorias

### **Template de Feature Request**
```markdown
## Funcionalidade Sugerida
Descrição clara da funcionalidade

## Motivação
Por que essa funcionalidade é útil?

## Solução Proposta
Como você imagina que funcione?

## Alternativas Consideradas
Outras formas de resolver o problema
```

---

## 📚 Recursos

### **Documentação**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### **Ferramentas**
- [Can I Use](https://caniuse.com/) - Compatibilidade de navegadores
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoria
- [WebAIM](https://webaim.org/) - Acessibilidade

---

**Obrigado por contribuir! 🎉**
