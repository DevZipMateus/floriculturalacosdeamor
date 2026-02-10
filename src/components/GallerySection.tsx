import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGallery from '@/components/ProductGallery';
import { coroas } from '@/data/products';

const GallerySection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const previewImages = coroas.slice(0, isMobile ? 4 : 8);

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
           <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl shadow-md p-5 max-w-2xl mx-auto mt-4 flex items-start gap-4 text-left">
             <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
               <Info className="w-5 h-5 text-white" />
             </div>
             <div>
               <p className="text-sm font-semibold text-amber-800 mb-1">Informação importante sobre as flores</p>
               <p className="text-sm text-amber-900/80 leading-relaxed">
                 As flores variam conforme a estação do ano e a disponibilidade dos produtores. Caso alguma flor específica não esteja disponível, realizamos substituições por flores equivalentes, sempre respeitando o mesmo padrão de qualidade, frescor e beleza.
               </p>
             </div>
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
