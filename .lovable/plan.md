

# Otimizar Performance do Site - Corrigir Imagens e Lighthouse

## Problema Principal
As imagens na pasta `public/galeria/` nao estao sendo comprimidas porque o `vite-plugin-vsharp` so processa arquivos importados pelo JavaScript/CSS -- arquivos na pasta `public/` sao copiados diretamente para `dist/` sem nenhum processamento.

Por isso o Lighthouse mostra imagens de 300-390 KiB sendo servidas sem compressao e em tamanho muito maior que o necessario (1200x1260px para exibicao em 244x325px).

## Solucao

### 1. Criar um plugin Vite customizado para processar imagens do public/
Criar um plugin que usa `sharp` diretamente para comprimir e redimensionar todas as imagens JPEG/JPG/PNG na pasta de saida (`dist/`) apos o build. Isso inclui:
- Redimensionar para no maximo 800px de largura (suficiente para telas retina)
- Comprimir JPEG com qualidade 70
- Comprimir PNG com qualidade 70

### 2. Adicionar width/height nas imagens da galeria
O Lighthouse aponta que as imagens nao tem `width` e `height` explicitas, causando CLS (mudanca de layout). Adicionar essas propriedades no componente `ProductGallery`.

### 3. Adicionar atributo sizes para imagens responsivas
Informar ao navegador o tamanho real de exibicao para que ele baixe uma versao mais adequada quando possivel.

## Alteracoes

| Arquivo | O que muda |
|---------|-----------|
| `src/plugins/imageOptimizer.ts` | Novo - Plugin Vite customizado que usa sharp para comprimir imagens na pasta dist/ apos o build |
| `vite.config.ts` | Importar e usar o novo plugin customizado |
| `src/components/ProductGallery.tsx` | Adicionar `width`, `height` e `sizes` nas tags `img` |
| `src/components/HeroSection.tsx` | Adicionar `sizes` na imagem hero |

## Detalhes tecnicos

O plugin customizado funciona no hook `closeBundle` do Vite, que executa apos todos os arquivos serem escritos em `dist/`. Ele varre a pasta de saida buscando arquivos `.jpg`, `.jpeg` e `.png`, e usa a biblioteca `sharp` (ja instalada) para redimensionar e comprimir cada imagem in-place.

```text
Build Flow:
  Vite copia public/ para dist/
  --> vsharp comprime assets importados
  --> plugin customizado comprime TODAS as imagens em dist/
  --> resultado final com imagens otimizadas
```

Isso deve reduzir o tamanho das imagens de ~300-390 KiB para ~30-60 KiB cada, uma economia de mais de 80%.

