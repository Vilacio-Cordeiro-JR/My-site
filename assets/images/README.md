# 🖼️ Imagens do Projeto

Esta pasta contém todas as imagens e assets visuais do site.

## 📂 Estrutura

```
images/
├── Academic_formation/    # Imagens da formação acadêmica
├── Contatos/             # Ícones de contato (email, LinkedIn, etc.)
├── Empresas/             # Logos de empresas
├── Posts/                # Imagens de posts/projetos
├── SobreMim/            # Fotos pessoais e perfil
└── README.md            # Esta documentação
```

## 🎯 Subpastas

### 📚 `Academic_formation/`
Imagens relacionadas à formação acadêmica:
- Logos de instituições de ensino
- Certificados
- Diplomas
- Ícones de cursos

### 📧 `Contatos/`
Ícones de canais de contato:
- Email
- LinkedIn
- GitHub
- Telefone
- WhatsApp
- Redes sociais

### 🏢 `Empresas/`
Logos e imagens de empresas:
- Logos corporativos
- Fotos de projetos empresariais
- Capturas de tela de trabalhos

### 📝 `Posts/`
Imagens de projetos e posts:
- Screenshots de projetos
- Mockups
- Banners de posts
- Thumbnails

### 👤 `SobreMim/`
Fotos pessoais e profissionais:
- Foto de perfil
- Foto de capa
- Imagens de apresentação
- Background images

## 📏 Padrões de Imagem

### Formatos Recomendados
- **Fotos**: `.jpg`, `.webp`
- **Logos/Ícones**: `.png`, `.svg`
- **Animações**: `.gif`, `.webp`

### Tamanhos Sugeridos
- **Foto de perfil**: 400x400px (1:1)
- **Banners**: 1200x630px (1.91:1)
- **Thumbnails**: 600x400px (3:2)
- **Logos**: 200x200px ou SVG
- **Ícones**: 64x64px ou SVG

### Otimização
- Comprimir imagens antes de adicionar
- Usar WebP quando possível
- Manter tamanho de arquivo < 500KB
- Usar SVG para ícones e logos

## 🔗 Como Referenciar

### HTML
```html
<!-- Caminho relativo da raiz -->
<img src="assets/images/SobreMim/perfil.jpg" alt="Foto de perfil">

<!-- Caminho relativo de páginas -->
<img src="../assets/images/Posts/projeto1.jpg" alt="Projeto 1">
```

### CSS
```css
/* Background image */
.hero {
    background-image: url('../images/SobreMim/capa.jpg');
}
```

## 📝 Convenções de Nomenclatura

### Padrão
- Usar kebab-case: `meu-projeto.jpg`
- Nome descritivo: `logo-empresa-victis.png`
- Sem espaços ou caracteres especiais
- Incluir dimensões se necessário: `banner-1200x630.jpg`

### Exemplos
```
✅ Bom:
- perfil-profissional.jpg
- logo-victis-200x200.png
- projeto-cotacoes-thumbnail.webp

❌ Evitar:
- IMG_1234.jpg
- foto 1.jpg
- Imagem%20sem%20nome.png
```

## 🎨 Paleta de Cores do Projeto

Para manter consistência visual:
- **Primária**: #FF6B35 (Laranja)
- **Secundária**: #004E89 (Azul)
- **Accent**: #00A8E8 (Azul Claro)

## 📖 Ferramentas Recomendadas

### Edição
- GIMP (gratuito)
- Photoshop
- Figma (UI/UX)
- Canva (templates)

### Otimização
- TinyPNG (compressão)
- Squoosh (WebP conversion)
- ImageOptim (macOS)
- SVGO (otimização SVG)

### Recursos
- Unsplash (fotos gratuitas)
- Flaticon (ícones)
- Font Awesome (ícones)
- Heroicons (ícones SVG)
