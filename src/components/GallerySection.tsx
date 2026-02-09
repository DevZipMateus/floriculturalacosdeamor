import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGallery from '@/components/ProductGallery';
import { coroas } from '@/data/products';

const GallerySection = () => {
  const previewImages = coroas.slice(0, 8);

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-floral-burgundy mb-4">
            Coroas de Flores
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Entrega imediata em Goiânia e região. Escolha o modelo e peça pelo WhatsApp.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto mt-4 flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-900">
              As flores variam conforme a estação do ano e a disponibilidade dos produtores. Caso alguma flor específica não esteja disponível, realizamos substituições por flores equivalentes, sempre respeitando o mesmo padrão de qualidade, frescor e beleza, garantindo um arranjo final bonito, harmonioso e fiel ao estilo escolhido.
            </p>
          </div>
        </div>

        <ProductGallery images={previewImages} categoryName="Coroa de Flores" />

        <div className="text-center mt-10">
          <Link
            to="/coroas"
            className="inline-flex items-center gap-2 bg-floral-burgundy hover:bg-floral-burgundy/90 text-white py-3 px-8 rounded-md font-medium transition-colors text-lg"
          >
            Ver todas as coroas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
