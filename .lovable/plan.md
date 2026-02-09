
# Otimizacao de Performance - Lighthouse

## Problema Principal
O **Total Blocking Time (TBT) de 2.120ms** e o pior indicador. Isso significa que o navegador fica bloqueado por mais de 2 segundos processando JavaScript antes da pagina ficar interativa. O CLS de 0,134 tambem esta acima do ideal (< 0,1).

## Causas Identificadas

1. **Todas as paginas carregam de uma vez** - CoroasPage, BuquesPage, CestasPage e SobreNosPage sao importadas sincronamente no App.tsx, mesmo que o usuario esteja na Home
2. **Google Fonts bloqueando renderizacao** - A fonte e carregada tanto no index.html quanto no index.css (duplicada), bloqueando o FCP
3. **Iframe do Google Maps carrega na Home** - O mapa do ContactSection carrega mesmo sem o usuario descer ate la
4. **Script externo do MonteSite** carrega sincronamente no index.html
5. **CLS causado pela imagem hero** - A imagem do hero nao tem dimensoes definidas, causando layout shift

## Solucao

### 1. Lazy Loading das rotas (maior impacto no TBT)
Usar `React.lazy()` e `Suspense` no App.tsx para que as paginas secundarias (Coroas, Buques, Cestas, Sobre) so carreguem quando acessadas.

### 2. Otimizar carregamento de fontes
- Remover o `@import` duplicado do Google Fonts no index.css (ja esta no index.html)
- Adicionar `font-display: swap` via parametro na URL da fonte
- Adicionar `<link rel="preload">` para a fonte principal

### 3. Lazy load do iframe do Google Maps
Carregar o iframe do mapa apenas quando o usuario rolar ate a secao de contato, usando Intersection Observer.

### 4. Tornar script MonteSite assincrono
Adicionar `async` ou `defer` ao script externo do Supabase no index.html.

### 5. Corrigir CLS
- Adicionar `aspect-ratio` ou dimensoes fixas na imagem hero
- Definir altura minima no container do hero

## Arquivos a editar

| Arquivo | Alteracao |
|---------|-----------|
| `src/App.tsx` | Lazy imports com React.lazy + Suspense |
| `src/index.css` | Remover @import duplicado do Google Fonts |
| `index.html` | Adicionar font-display=swap na URL, preload da fonte, defer no script MonteSite |
| `src/components/ContactSection.tsx` | Lazy load do iframe com Intersection Observer |
| `src/components/HeroSection.tsx` | Adicionar aspect-ratio/dimensoes para evitar CLS |

## Impacto esperado
- **TBT**: Reducao significativa ao nao carregar JS das paginas secundarias na Home
- **CLS**: Abaixo de 0,1 com dimensoes fixas no hero
- **Speed Index**: Melhora com fontes otimizadas e menos JS bloqueante
