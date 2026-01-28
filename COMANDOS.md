# 🚀 Guia Rápido de Comandos

## 📂 Navegação

```powershell
# Ir para a raiz do projeto
cd "c:\Users\WINDOWS10\OneDrive\Área de Trabalho\00 EU'UE\Site\Projeto Corriculo Site"

# Listar estrutura
tree /F /A

# Listar apenas pastas
Get-ChildItem -Directory
```

## 🌐 Desenvolvimento Local

### Abrir no Navegador
```powershell
# Abrir index.html
Start-Process "index.html"

# Abrir página específica
Start-Process "pages\1-MainPage.html"
```

### Live Server (VS Code)
1. Instale extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Ou use atalho: `Alt+L Alt+O`

## 🔍 Buscar no Projeto

```powershell
# Buscar em todos os HTML
Select-String -Path "pages\*.html" -Pattern "palavra"

# Buscar em CSS
Select-String -Path "src\css\*.css" -Pattern "class-name"

# Buscar em JS
Select-String -Path "src\js\*.js" -Pattern "function"
```

## 📝 Git

### Inicializar Git
```powershell
git init
git add .
git commit -m "feat: projeto inicial com estrutura organizada"
```

### Commits Convencionais
```bash
# Nova funcionalidade
git commit -m "feat: adicionar novo componente"

# Correção de bug
git commit -m "fix: corrigir caminho das imagens"

# Refatoração
git commit -m "refactor: reorganizar estrutura de pastas"

# Documentação
git commit -m "docs: atualizar README"

# Estilo/Formatação
git commit -m "style: ajustar espaçamento do CSS"
```

### Status e Histórico
```bash
# Ver mudanças
git status

# Ver histórico
git log --oneline

# Ver diferenças
git diff
```

## 🚀 Deploy Vercel

### Primeira vez
```powershell
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### Atualizações
```bash
# Deploy de produção
vercel --prod

# Ver logs
vercel logs
```

## 🧹 Limpeza

### Cache do Navegador
```
Chrome: Ctrl + Shift + Delete
Firefox: Ctrl + Shift + Delete
Edge: Ctrl + Shift + Delete
```

### Hard Refresh
```
Windows: Ctrl + F5
Chrome: Ctrl + Shift + R
```

### Limpar Backups Antigos
```powershell
# Deletar backups com mais de 90 dias
Get-ChildItem "backup\" -Recurse | Where-Object {$_.LastWriteTime -lt (Get-Date).AddDays(-90)} | Remove-Item

# Comprimir backups
Compress-Archive -Path "backup\*" -DestinationPath "backup-$(Get-Date -Format 'yyyy-MM-dd').zip"
```

## 📊 Análise

### Contar Linhas de Código
```powershell
# HTML
(Get-Content pages\*.html | Measure-Object -Line).Lines

# CSS
(Get-Content src\css\*.css | Measure-Object -Line).Lines

# JavaScript
(Get-Content src\js\*.js | Measure-Object -Line).Lines

# Total
$total = 0
$total += (Get-Content pages\*.html | Measure-Object -Line).Lines
$total += (Get-Content src\css\*.css | Measure-Object -Line).Lines
$total += (Get-Content src\js\*.js | Measure-Object -Line).Lines
Write-Host "Total de linhas: $total"
```

### Listar Imagens
```powershell
# Todas as imagens
Get-ChildItem "assets\images\" -Recurse -Include *.png,*.jpg,*.jpeg,*.gif,*.svg

# Por tipo
Get-ChildItem "assets\images\" -Recurse -Filter "*.png" | Measure-Object
```

## 🔧 Manutenção

### Verificar Links Quebrados
```powershell
# Buscar referências a Images/ (antiga estrutura)
Select-String -Path "pages\*.html" -Pattern 'src="Images/'
Select-String -Path "pages\*.html" -Pattern "url\('/Images/"

# Buscar referências a style.css sem caminho
Select-String -Path "pages\*.html" -Pattern 'href="style\.css'
```

### Atualizar Versão do CSS
```powershell
# Incrementar versão (substituir v=2.0 por v=2.1)
Get-ChildItem -Recurse -Filter "*.html" | ForEach-Object {
    (Get-Content $_.FullName -Raw) -replace 'style\.css\?v=2\.0', 'style.css?v=2.1' | 
    Set-Content $_.FullName -NoNewline
}
```

## 📦 Backup Manual

### Criar Backup Completo
```powershell
# Com data
$date = Get-Date -Format "yyyy-MM-dd"
Compress-Archive -Path "." -DestinationPath "..\backup-projeto-$date.zip" -Force

Write-Host "Backup criado: backup-projeto-$date.zip"
```

### Restaurar Backup
```powershell
# Extrair
Expand-Archive -Path "..\backup-projeto-2026-01-27.zip" -DestinationPath "." -Force
```

## 🧪 Testes Rápidos

### Verificar se CSS Carrega
```powershell
# Abrir DevTools do Chrome
Start-Process "chrome" -ArgumentList "--auto-open-devtools-for-tabs", "index.html"
```

### Testar Responsividade
```powershell
# Chrome com diferentes tamanhos
Start-Process "chrome" -ArgumentList "--window-size=375,667", "index.html"  # Mobile
Start-Process "chrome" -ArgumentList "--window-size=768,1024", "index.html" # Tablet
Start-Process "chrome" -ArgumentList "--window-size=1920,1080", "index.html" # Desktop
```

## 📚 Documentação

### Gerar Documentação
```powershell
# Estrutura do projeto
tree /F /A > docs\estrutura-projeto.txt

# Lista de arquivos
Get-ChildItem -Recurse -File | Select-Object FullName, Length, LastWriteTime | Export-Csv docs\lista-arquivos.csv
```

## 💡 Dicas

### Atalhos VS Code
- `Ctrl + P` - Buscar arquivo
- `Ctrl + Shift + F` - Buscar no projeto
- `Alt + Click` - Múltiplos cursores
- `Ctrl + /` - Comentar linha
- `Shift + Alt + F` - Formatar documento

### Extensões Recomendadas
- Live Server
- Prettier
- Auto Rename Tag
- CSS Peek
- HTML CSS Support

---

**Referências:**
- [README.md](README.md) - Documentação principal
- [docs/](docs/) - Documentação técnica
- [REORGANIZACAO.md](REORGANIZACAO.md) - Log de mudanças
