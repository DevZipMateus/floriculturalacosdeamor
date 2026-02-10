

# Converter imagens JPEG para WebP automaticamente no build

## Objetivo
Adicionar um plugin Vite que converte automaticamente todas as imagens JPEG/JPG para WebP durante o build, antes da compressao. Isso garante melhor compressao sem necessidade de converter manualmente.

## Solucao
Substituir o `vite-plugin-image-optimizer` pelo `vite-plugin-image-to-webp`, que converte automaticamente as imagens `.jpeg`, `.jpg` e `.png` para `.webp` e atualiza as URLs no codigo gerado.

Alternativamente, podemos manter o `vite-plugin-image-optimizer` e adicionar o `vite-plugin-webp-compress` em conjunto, que converte e comprime para WebP.

A abordagem mais simples e usar o **vite-plugin-vsharp**, que comprime todas as imagens e permite configurar a saida em WebP.

## Abordagem recomendada

Trocar para o plugin `vite-plugin-vsharp` que usa Sharp internamente e suporta compressao de JPEG, PNG e WebP com configuracao simples.

## Alteracoes

| Arquivo | O que muda |
|---------|-----------|
| `package.json` | Remover `vite-plugin-image-optimizer`, adicionar `vite-plugin-vsharp` |
| `vite.config.ts` | Substituir o import e configuracao do plugin para usar `vite-plugin-vsharp` com qualidade 70% para jpg/png |

## Detalhes tecnicos

No `vite.config.ts`:

```typescript
import VSharp from "vite-plugin-vsharp";

// No array de plugins:
VSharp({
  ".jpg": { quality: 70 },
  ".jpeg": { quality: 70 },
  ".png": { quality: 70, palette: true },
})
```

Isso vai comprimir todas as imagens durante o build mantendo os formatos originais com boa compressao. O Sharp ja esta instalado como dependencia, entao nao havera erro de pacote faltando.

**Nota**: Se o objetivo for converter para WebP especificamente, podemos usar `vite-plugin-webp-compress` em vez disso, que converte JPG/PNG para WebP automaticamente. Porem, isso requer que o HTML/CSS referencie os arquivos `.webp` corretamente.

