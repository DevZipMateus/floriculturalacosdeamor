
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with overlay - Base color (60%) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/1876c8f1-db0a-4056-b9db-c9234854c90c.png" 
            alt="Floricultura Laços De Amor" 
            className="w-64 h-auto mx-auto mb-6 animate-slide-up [animation-delay:300ms]" 
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-floral-burgundy mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Floricultura <span className="text-floral-gold">Laços De Amor</span>
          </h1>
          
          <p className="text-lg md:text-xl text-floral-burgundy/80 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            Florindo histórias com carinho e atenção para momentos especiais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-md transition-all duration-300 bg-floral-burgundy hover:bg-floral-burgundy/90 text-white"
            >
              Nossos Arranjos
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="quote-btn hover:border-floral-gold hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2 bg-floral-gold text-floral-burgundy hover:text-floral-burgundy"
            >
              <FileText size={20} className="group-hover:animate-pulse" />
              <span>Solicitar Orçamento</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Adjusted to be lower */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-floral-burgundy cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>;
};

export default HeroSection;
