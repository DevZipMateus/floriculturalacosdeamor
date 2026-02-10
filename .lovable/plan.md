
# Melhorar Performance Mobile (de 53 para 80+)

## Problemas Identificados

Os principais gargalos no mobile sao:

1. **TBT de 1000ms**: Todo o JavaScript da pagina carrega de uma vez -- Header, Hero, Galeria (8 imagens), Depoimentos, Contato, Footer. No mobile, isso e muito trabalho para a thread principal.
2. **LCP de 4.6s**: A imagem hero e um PNG de 163 KiB e as 8 imagens da galeria comecam a carregar simultaneamente.
3. **FCP de 3.0s**: O bundle JS e grande demais para o carregamento inicial.
4. **CSS problematico**: A regra global `a, button { min-h-[44px] flex items-center }` aplica `display: flex` em TODOS os links e botoes, causando reflows desnecessarios e possiveis problemas de layout.

## Solucao

### 1. Lazy load de secoes abaixo da dobra (maior impacto)
Carregar GallerySection, TestimonialsSection e ContactSection apenas quando o usuario rolar ate elas, usando `React.lazy` + `Suspense` + Intersection Observer.

### 2. Reduzir imagens na galeria inicial no mobile
Mostrar apenas 4 imagens no mobile (em vez de 8), reduzindo pela metade o peso da galeria na pagina inicial.

### 3. Corrigir CSS global problematico
Substituir a regra `a, button { min-h-[44px] flex items-center }` por uma regra mais especifica que nao force `display: flex` em todos os elementos interativos.

### 4. Defer do Google Tag Manager
Adicionar `defer` ao script do GTM para nao bloquear a renderizacao inicial.

## Alteracoes

| Arquivo | O que muda |
|---------|-----------|
| `src/pages/Index.tsx` | Lazy load de GallerySection, TestimonialsSection e ContactSection com Intersection Observer |
| `src/components/GallerySection.tsx` | Mostrar 4 imagens no mobile, 8 no desktop |
| `src/index.css` | Corrigir regra CSS global que aplica flex em todos os links/botoes |
| `index.html` | Adicionar `defer` no script do GTM |

## Detalhes tecnicos

Criar um componente `LazySection` reutilizavel que usa Intersection Observer para montar o conteudo apenas quando visivel:

```typescript
const LazySection = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : <div style={{minHeight: '400px'}} />}</div>;
};
```

Isso reduz significativamente o TBT porque o navegador nao precisa processar componentes que o usuario ainda nao viu, e reduz o LCP porque menos imagens competem pela largura de banda.
