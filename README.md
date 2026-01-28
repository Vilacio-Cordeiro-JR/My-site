# 🎯 Portfólio Vilácio Cordeiro Júnior

Site pessoal e portfólio profissional com design moderno, dark mode e animações.

## 🚀 Acesso Rápido

- **Site Principal**: Abra `index.html` no navegador
- **Deploy**: [Seu site no Vercel](https://seu-site.vercel.app)
- **Documentação**: Veja [docs/README.md](docs/README.md)

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página de entrada (redireciona para pages/)
├── vercel.json             # Configuração de deploy
│
├── docs/                   # 📚 Documentação completa
├── pages/                  # 📄 Todas as páginas HTML
├── src/                    # 🎨 Código fonte (CSS + JS)
│   ├── css/               # Arquivos de estilo
│   └── js/                # Scripts JavaScript
├── assets/                 # 🖼️ Recursos estáticos
│   ├── images/            # Imagens organizadas
│   └── curriculo/         # Documentos do currículo
└── backup/                 # 💾 Backups de versões antigas
```

## 🎨 Tecnologias

- HTML5 + CSS3 + JavaScript (Vanilla)
- Google Fonts (Poppins)
- Intersection Observer API
- LocalStorage API
- Dark Mode System
- Glassmorphism Effects
- Scroll Animations

## 🌈 Paleta de Cores

- **Primária**: `#FF6B35` (Laranja)
- **Secundária**: `#004E89` (Azul)
- **Accent**: `#00A8E8` (Azul Claro)

## ✨ Funcionalidades

- ✅ Dark Mode persistente
- ✅ Animações de scroll (fade-in, slide-in)
- ✅ Glassmorphism em cards
- ✅ Navegação sticky
- ✅ Scroll-to-top button
- ✅ Ripple effect em botões
- ✅ Currículo ABNT para impressão
- ✅ Design responsivo (mobile-first)

## 🚀 Como Executar

### Localmente
1. Clone ou baixe o repositório
2. Abra `index.html` no navegador
3. Ou use Live Server no VS Code

### Deploy no Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📖 Documentação

Para informações detalhadas, consulte:

- [📚 Documentação Principal](docs/README.md)
- [🎨 Documentação CSS](docs/DOCS_CSS.md)
- [⚡ Documentação JavaScript](docs/DOCS_JS.md)
- [🧩 Biblioteca de Componentes](docs/COMPONENTS.md)
- [🤝 Guia de Contribuição](docs/CONTRIBUTING.md)
- [📝 Changelog](docs/CHANGELOG.md)
- [📁 Estrutura de Pastas](.folder-structure.md)

## 🔧 Configuração

### Personalização
1. Edite as variáveis CSS em `src/css/style.css`
2. Modifique o conteúdo das páginas em `pages/`
3. Atualize informações pessoais nos arquivos HTML

### Adicionar Novas Páginas
1. Crie o arquivo HTML em `pages/`
2. Siga o padrão de nomenclatura (número-nome.html)
3. Use caminhos relativos: `../src/css/`, `../assets/images/`
4. Adicione link no menu de navegação

## 🐛 Resolução de Problemas

### CSS não carrega
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se os caminhos estão corretos
- Certifique-se que o arquivo está em `src/css/`

### Imagens não aparecem
- Verifique se estão em `assets/images/`
- Use caminhos relativos corretos
- Verifique extensão e nome do arquivo

### Dark mode não persiste
- Verifique se o JavaScript está carregando
- Teste o LocalStorage no console do navegador
- Certifique-se que `src/js/script.js` está sendo carregado

## 📝 Notas Importantes

- **Caminhos relativos**: Páginas em `/pages` usam `../` para acessar recursos
- **Versionamento CSS**: Use `?v=X.X` para forçar atualização
- **Google Fonts**: Carregadas via `<link>` no HTML, não no CSS
- **ABNT**: Currículo segue formatação ABNT para impressão

## 🔗 Links Úteis

- [Vercel](https://vercel.com/)
- [Google Fonts](https://fonts.google.com/)
- [Can I Use](https://caniuse.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licença

© 2026 Vilácio Cordeiro Júnior. Todos os direitos reservados.

---

**Última atualização**: Janeiro 2026  
**Versão**: 2.0
