
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryHighlights from '@/components/CategoryHighlights';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animations a bit earlier (80% of viewport height instead of 90%)
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Permitir navegação por categoria via hash na URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('#gallery-')) {
        const category = hash.replace('#gallery-', '');
        const tabTrigger = document.querySelector(`[data-value="${category}"]`);
        if (tabTrigger) {
          // Primeiro role até a galeria
          const gallery = document.getElementById('gallery');
          if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
            
            // Depois de um pequeno atraso, clique na aba correta
            setTimeout(() => {
              (tabTrigger as HTMLElement).click();
            }, 800);
          }
        }
      }
    };
    
    // Verificar hash na carga inicial
    handleHashChange();
    // Adicionar listener para mudanças futuras de hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <CategoryHighlights />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
