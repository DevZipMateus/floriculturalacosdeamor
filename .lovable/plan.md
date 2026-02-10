

# Corrigir erro "Cannot find package 'sharp'" no build

## Problema
O plugin `vite-plugin-image-optimizer` depende do pacote `sharp` para comprimir imagens, mas o `sharp` nao esta instalado como dependencia do projeto.

## Solucao
Instalar o pacote `sharp` como dependencia de desenvolvimento no projeto.

## Alteracao

| Arquivo | O que muda |
|---------|-----------|
| `package.json` | Adicionar `sharp` em `devDependencies` |

Apos a alteracao, sera necessario rodar `npm install` (ou `bun install`) novamente no terminal local antes de executar o build.

