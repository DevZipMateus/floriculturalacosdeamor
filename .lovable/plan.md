

# Aviso de Disponibilidade de Flores

## O que sera feito
Adicionar um bloco de texto informativo em destaque nas 3 paginas de produto (Coroas, Buques, Cestas) e na secao de galeria da Home, informando sobre a substituicao de flores conforme disponibilidade sazonal.

## Texto a inserir
"As flores variam conforme a estacao do ano e a disponibilidade dos produtores. Caso alguma flor especifica nao esteja disponivel, realizamos substituicoes por flores equivalentes, sempre respeitando o mesmo padrao de qualidade, frescor e beleza, garantindo um arranjo final bonito, harmonioso e fiel ao estilo escolhido."

## Onde sera inserido

### 1. CoroasPage.tsx
- Abaixo do botao "Atendimento Imediato" e acima da galeria de fotos
- Estilo: caixa com fundo suave, borda e icone de informacao

### 2. BuquesPage.tsx
- Abaixo do botao "Encomendar pelo WhatsApp" e acima da galeria
- Mesmo estilo visual

### 3. CestasPage.tsx
- Abaixo do botao "Encomendar pelo WhatsApp" e acima da galeria
- Mesmo estilo visual

### 4. GallerySection.tsx (Home)
- Abaixo do subtitulo e acima da galeria preview de coroas

## Estilo visual
Caixa com fundo `bg-amber-50`, borda `border-amber-200`, texto `text-amber-900`, com icone de informacao (Lucide `Info`), centralizada com `max-w-2xl`. Estilo semelhante ao aviso de "sob encomenda" ja existente nas paginas de buques e cestas.

## Detalhes tecnicos
- 4 arquivos editados: `CoroasPage.tsx`, `BuquesPage.tsx`, `CestasPage.tsx`, `GallerySection.tsx`
- Importar icone `Info` do `lucide-react` em cada arquivo
- Nenhum componente novo necessario - o bloco e simples o suficiente para ser inline
