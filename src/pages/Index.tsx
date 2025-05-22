
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
    
    // Handle navigation by category via hash in URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.includes('#gallery-')) {
        const category = hash.replace('#gallery-', '');
        // Map the hash value to the tab value used in the gallery
        const tabValueMap: Record<string, string> = {
          'buques': 'buques',
          'cestas': 'cestas',
          'coroas': 'coroas'
        };
        
        const tabValue = tabValueMap[category] || category;
        
        // First scroll to gallery section
        const gallery = document.getElementById('gallery');
        if (gallery) {
          gallery.scrollIntoView({ behavior: 'smooth' });
          
          // After a delay, click on the correct tab
          setTimeout(() => {
            const tabTrigger = document.querySelector(`[data-value="${tabValue}"]`);
            
            if (tabTrigger) {
              console.log(`Clicking on tab: ${tabValue}`);
              (tabTrigger as HTMLElement).click();
            } else {
              console.log(`Tab with data-value="${tabValue}" not found`);
            }
          }, 800);
        }
      }
    };
    
    // Check hash on initial page load
    setTimeout(handleHashChange, 500); // Adding a bit more delay for initial load
    
    // Add listener for future hash changes
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
