
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for the slideshow
  const backgroundImages = [
    "/lovable-uploads/0dd19fca-bf41-4be4-a013-62ec6a179982.png"
  ];

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }

    // Auto-rotate the slideshow
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
        {backgroundImages.map((img, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <img src={img} alt="Floral arrangements" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          </div>)}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms] drop-shadow-lg">
            Coroa de flores com entrega rápida em <span className="text-floral-gold">Goiania e regiao</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms] drop-shadow-md">
            Homenagens e presentes com delicadeza amor e pontualidade
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button size="lg" className="rounded-md shadow-md transition-all duration-300 bg-floral-burgundy hover:bg-floral-burgundy/90 text-white" onClick={() => scrollToGallerySection()}>
              Ver coroas e Buquês disponíveis
            </Button>
            <a 
              href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Gostaria de solicitar um orçamento para os serviços da Floricultura Laços de Amor.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="quote-btn hover:bg-green-500 hover:text-white group rounded-md shadow-md transition-all duration-300 flex gap-2 bg-floral-gold text-floral-burgundy px-8 py-3 text-lg font-medium inline-flex items-center justify-center"
            >
              <img src="/galeria/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" alt="WhatsApp" className="w-5 h-5 group-hover:animate-pulse" />
              <span>Solicitar Orçamento</span>
            </a>
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
