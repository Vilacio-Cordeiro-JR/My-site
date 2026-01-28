# 💾 Backups do Projeto

Esta pasta contém backups de arquivos importantes antes de modificações significativas.

## 📂 Propósito

Manter versões antigas de arquivos críticos como:
- `style.css.backup` - Backup do CSS original
- Versões anteriores de HTML
- Scripts antigos
- Configurações anteriores

## 🎯 Quando Fazer Backup

Crie um backup ANTES de:
- ✅ Refatoração grande de código
- ✅ Mudanças na estrutura do projeto
- ✅ Atualização de frameworks/bibliotecas
- ✅ Alterações em estilos globais
- ✅ Mudanças na arquitetura

## 📝 Convenção de Nomenclatura

### Formato
```
nome-do-arquivo.extensao.backup
nome-do-arquivo-YYYY-MM-DD.extensao
nome-do-arquivo-v1.0.extensao
```

### Exemplos
```
style.css.backup
style-2026-01-27.css
script-v1.0.js
index-before-refactor.html
```

## 🗂️ Organização

### Por Data
```
backup/
├── 2025-12/
│   ├── style-2025-12-15.css
│   └── script-2025-12-20.js
└── 2026-01/
    ├── style-2026-01-27.css
    └── index-2026-01-27.html
```

### Por Versão
```
backup/
├── v1.0/
│   ├── style.css
│   └── script.js
└── v2.0/
    ├── style.css
    └── script.js
```

## ⚠️ Boas Práticas

### DO ✅
- Incluir data no nome do arquivo
- Adicionar descrição do motivo do backup
- Manter apenas backups relevantes
- Documentar mudanças no CHANGELOG.md
- Comprimir backups antigos (.zip)

### DON'T ❌
- Acumular backups desnecessários
- Fazer backup sem motivo claro
- Misturar backups com código ativo
- Esquecer de deletar backups muito antigos
- Commitar backups grandes no Git

## 📋 Registro de Backups

| Data | Arquivo | Motivo | Versão |
|------|---------|--------|---------|
| 2026-01-27 | style.css.backup | Refatoração completa (v2.0) | v1.0 |

## 🔄 Restauração

Para restaurar um backup:

### Método 1: Renomear
```bash
# Backup atual (se necessário)
mv style.css style-broken.css

# Restaurar backup
cp backup/style.css.backup style.css
```

### Método 2: Git
```bash
# Ver histórico
git log --follow style.css

# Restaurar versão específica
git checkout <commit-hash> -- style.css
```

## 🗑️ Limpeza

Limpe backups periodicamente:

```bash
# Deletar backups com mais de 90 dias
find backup/ -type f -mtime +90 -delete

# Comprimir backups antigos
zip -r backup-2025.zip backup/2025-*
```

## 📦 Compressão

Para backups grandes:

```bash
# Windows PowerShell
Compress-Archive -Path backup/* -DestinationPath backup-archive.zip

# Extrair
Expand-Archive -Path backup-archive.zip -DestinationPath backup/
```

## 🔒 .gitignore

Adicione ao `.gitignore`:
```gitignore
# Backups
backup/*.backup
backup/**/*.backup
*.backup
backup-*.zip
```

## 📖 Referências

- [Git Best Practices](https://git-scm.com/book/pt-br/v2)
- [Semantic Versioning](https://semver.org/lang/pt-BR/)
