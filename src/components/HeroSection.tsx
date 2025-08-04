
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Wedding couple images for the slideshow
  const weddingImages = [
    "/galeria/1211310727385237.jpeg",
    "/galeria/1322967455452254.jpeg",
    "/galeria/1600599350896481.jpeg",
    "/galeria/4133203780233785.jpeg",
  ];
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
    
    // Auto-rotate the slideshow
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % weddingImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [weddingImages.length]);
  
  const scrollToGallerySection = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {weddingImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt="Floral arrangements" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/galeria/1876c8f1-db0a-4056-b9db-c9234854c90c.png" 
            alt="Floricultura Laços De Amor"
            className="w-64 h-auto mx-auto mb-6 animate-slide-up [animation-delay:300ms] drop-shadow-lg" 
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms] drop-shadow-lg">
            Floricultura <span className="text-floral-gold">Laços De Amor</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms] drop-shadow-md">
            Florindo histórias com carinho e atenção para momentos especiais da sua vida
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-md transition-all duration-300 bg-floral-burgundy hover:bg-floral-burgundy/90 text-white"
              onClick={() => scrollToGallerySection()}
            >
              Nossos Arranjos
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="quote-btn hover:border-floral-gold hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2 bg-floral-gold text-floral-burgundy hover:text-floral-burgundy"
              onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para os serviços da Floricultura Laços de Amor.')}
            >
              <img 
                src="/galeria/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" 
                alt="WhatsApp"
                className="w-5 h-5 group-hover:animate-pulse" 
              />
              <span>Solicitar Orçamento</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Adjusted to be lower */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToGallerySection}>
        <ChevronDown size={32} className="drop-shadow-lg" />
      </div>
    </section>;
};

export default HeroSection;
