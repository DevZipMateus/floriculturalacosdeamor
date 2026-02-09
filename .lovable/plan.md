

# Correção de Acentuação - "Goiânia" e outras palavras

## Problema Encontrado
A palavra "Goiânia" aparece **sem acento** ("Goiania") em 2 arquivos. Além disso, há outras palavras sem acentuação correta nas mesmas frases.

## Correções Necessárias

### 1. HeroSection.tsx (linha 50)
- **De:** `Goiania e regiao`
- **Para:** `Goiânia e região`

### 2. AboutSection.tsx (linha 37)
- **De:** `Floricultura em Goiania em transforma homenagens e presentes em memorias inesquecíveis`
- **Para:** `Floricultura em Goiânia que transforma homenagens e presentes em memórias inesquecíveis`
- Nota: além do acento em "Goiânia", corrige-se "memorias" para "memórias" e "em transforma" para "que transforma" (erro gramatical)

### Arquivos que ja estao corretos (nenhuma alteracao necessaria)
- Footer.tsx: "Goiânia - GO"
- ContactSection.tsx: "Goiânia-GO"
- TestimonialsSection.tsx: "Goiânia"
- CategoryHighlights.tsx: "Goiânia" (4 ocorrencias)
- AboutSection.tsx linha 71: "Goiânia" (ja correto)

## Detalhes Tecnicos
- Serao editadas apenas 2 linhas, uma em cada arquivo
- Nenhuma mudanca de estilo ou funcionalidade

