

# Reestruturação do Site - Foco em Conversão de Coroas de Flores

## Resumo
Reorganizar completamente o site para priorizar a conversão de **Coroas de Flores para velório com entrega imediata**, criando páginas separadas para cada categoria de produto e otimizando performance e velocidade.

---

## 1. Nova Estrutura de Rotas

O site atual tem apenas uma pagina (single page). Sera reestruturado para ter 4 rotas:

- `/` - Home focada em coroas de flores para velorio
- `/coroas` - Pagina exclusiva com galeria de coroas + botao WhatsApp em cada modelo
- `/buques` - Pagina exclusiva para buques premium (sob encomenda)
- `/cestas` - Pagina exclusiva para cestas premium (sob encomenda)

---

## 2. Home - Primeira Dobra Redesenhada

**Titulo principal:** "Coroas de flores para velorio com entrega imediata em Goiania"

**Botao principal:** Link direto para WhatsApp com texto "Atendimento Imediato - Coroas para Velorio"

**Remover da Home:**
- CategoryHighlights (destaques de buques e cestas)
- PlansSection (planos de precos - conteudo irrelevante de outro template)
- Carrossel de destaques misturando categorias

**Manter na Home (simplificado):**
- Header com navegacao atualizada
- Hero focado em coroas
- Galeria rapida com 6-8 coroas principais + link "Ver todas"
- Depoimentos (prova social)
- Contato
- Footer
- WhatsApp flutuante

---

## 3. Paginas de Produto

### /coroas (Produto Principal)
- Galeria completa com todas as imagens de coroas
- Cada imagem tera botao WhatsApp individual com link direto (href)
- Sem lightbox complexo - clique abre WhatsApp direto ou mostra imagem ampliada com botao WhatsApp
- Texto: "Entrega imediata em Goiania e regiao"

### /buques (Premium - Sob Encomenda)
- Banner de aviso: "Produto Premium - Sob encomenda com pedido antecipado"
- Galeria de buques
- Botao WhatsApp em cada modelo
- Prazo de entrega destacado

### /cestas (Premium - Sob Encomenda)
- Mesmo padrao dos buques
- Aviso de sob encomenda

---

## 4. Performance e Velocidade

- Adicionar `loading="lazy"` em todas as imagens da galeria
- Remover o import de `embla-carousel-autoplay` (carrossel automatico pesado)
- Remover animacoes `animate-on-scroll` que atrasam a renderizacao do conteudo
- Simplificar CSS removendo animacoes desnecessarias (ripple, pulse, service-card hover)
- Remover fontes nao essenciais (Dancing Script que nao e usada no conteudo principal)

---

## 5. WhatsApp Flutuante Atualizado

- Texto: "Atendimento imediato - Coroas para velorio"
- Visivel sempre (remover condicao de scroll > 300px)
- Link direto via `href` (sem JavaScript no click, conforme requisito de tracking GTM)

---

## 6. Navegacao Atualizada

O Header tera os links:
- Inicio (/)
- Coroas de Flores (/coroas)
- Buques Premium (/buques)
- Cestas Premium (/cestas)
- Contato (#contact)
- Botao WhatsApp "Atendimento Imediato"

---

## Detalhes Tecnicos

### Arquivos a criar:
- `src/pages/CoroasPage.tsx` - Pagina de coroas com galeria + WhatsApp por modelo
- `src/pages/BuquesPage.tsx` - Pagina de buques com aviso de encomenda
- `src/pages/CestasPage.tsx` - Pagina de cestas com aviso de encomenda
- `src/components/ProductGallery.tsx` - Componente reutilizavel de galeria com botao WhatsApp por item
- `src/data/products.ts` - Dados centralizados das imagens por categoria

### Arquivos a modificar:
- `src/App.tsx` - Adicionar novas rotas
- `src/pages/Index.tsx` - Simplificar home, remover CategoryHighlights e PlansSection
- `src/components/Header.tsx` - Atualizar navegacao com links para novas paginas
- `src/components/HeroSection.tsx` - Foco total em coroas, texto e CTA atualizado
- `src/components/WhatsAppButton.tsx` - Texto e comportamento atualizados, sempre visivel
- `src/components/Footer.tsx` - Links atualizados para novas paginas
- `src/components/GallerySection.tsx` - Simplificar para mostrar apenas preview de coroas na home
- `src/index.css` - Remover animacoes desnecessarias
- `index.html` - Atualizar meta tags para SEO focado em coroas

### Arquivos que podem ser removidos:
- `src/components/CategoryHighlights.tsx` - Substituido pela navegacao por paginas
- `src/components/PlansSection.tsx` - Conteudo irrelevante (planos de contabilidade)
- `src/components/AnimatedScrollObserver.tsx` - Animacoes removidas para performance

### Todos os botoes WhatsApp usarao `href` direto:
```text
href="https://api.whatsapp.com/send/?phone=558001813000&text=...&type=phone_number&app_absent=0"
```
Sem funcoes JavaScript no click, garantindo rastreamento via GTM.

