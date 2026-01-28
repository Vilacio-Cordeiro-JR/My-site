# 📄 Assets do Currículo

Esta pasta contém documentos e arquivos relacionados ao currículo.

## 📂 Conteúdo

Armazene aqui:
- PDFs do currículo
- Versões exportadas
- Certificados digitais
- Cartas de recomendação
- Portfólio em PDF

## 📋 Estrutura Sugerida

```
curriculo/
├── curriculo-pt-BR.pdf        # Currículo em português
├── curriculo-en-US.pdf        # Currículo em inglês
├── certificados/              # Certificados de cursos
├── cartas-recomendacao/       # Cartas de recomendação
└── README.md                  # Esta documentação
```

## 🎯 Formatos

### Currículo Principal
- **Formato**: PDF/A (para compatibilidade)
- **Tamanho**: Máximo 2 MB
- **Páginas**: 1-2 páginas idealmente
- **Nomenclatura**: `curriculo-idioma-versao.pdf`

### Certificados
- **Formato**: PDF ou imagem de alta qualidade
- **Organização**: Por categoria ou instituição
- **Nomenclatura**: `certificado-nome-instituicao-ano.pdf`

## 📝 Padrão ABNT (Currículo Impresso)

O arquivo `curriculo.html` segue as normas ABNT:

### Margens
- Superior: 3 cm
- Esquerda: 3 cm
- Direita: 2 cm
- Inferior: 2 cm

### Fonte
- Família: Times New Roman
- Tamanho: 12pt (corpo do texto)
- Tamanho: 14pt (títulos)
- Cor: Preta (#000000)

### Espaçamento
- Entrelinhas: 1.5
- Parágrafos: Justificado
- Títulos: Negrito, sem numeração

## 🖨️ Como Gerar PDF

### Método 1: Pelo Site
1. Acesse `curriculo.html` no navegador
2. Clique no botão "Imprimir / Salvar PDF"
3. Na janela de impressão, selecione "Salvar como PDF"
4. Escolha local e nome do arquivo
5. Salve na pasta `assets/curriculo/`

### Método 2: Ctrl+P
1. Abra `curriculo.html` no navegador
2. Pressione `Ctrl + P`
3. Selecione "Salvar como PDF"
4. Configure margens conforme ABNT
5. Salve o arquivo

## 📊 Versionamento

Mantenha histórico de versões:

```
curriculo-v1.0-2025-01.pdf
curriculo-v2.0-2026-01.pdf
curriculo-v2.1-2026-01.pdf
```

## 🔒 Segurança

**⚠️ IMPORTANTE:**
- NÃO commitar PDFs com dados sensíveis no Git
- Adicionar `*.pdf` ao `.gitignore` se necessário
- Manter cópias em armazenamento seguro (Google Drive, OneDrive)
- Remover informações pessoais de versões públicas

## 🌐 Versões Internacionais

Mantenha versões em diferentes idiomas:

### Português (pt-BR)
- `curriculo-pt-BR.pdf`
- Padrão ABNT

### Inglês (en-US)
- `curriculo-en-US.pdf`
- Formato americano (resume)

### Inglês (en-GB)
- `curriculo-en-GB.pdf`
- Formato britânico (CV)

## 📖 Recursos Úteis

### Ferramentas
- [PDF24 Creator](https://tools.pdf24.org/pt/) - Edição de PDF
- [SmallPDF](https://smallpdf.com/pt) - Compressão e conversão
- [Canva](https://www.canva.com/) - Templates de currículo

### Guias
- [ABNT - Formatação](https://www.abnt.org.br/)
- [Europass](https://europa.eu/europass) - Currículo europeu
- [LinkedIn](https://www.linkedin.com/) - Perfil profissional online
