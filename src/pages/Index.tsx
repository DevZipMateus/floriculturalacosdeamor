import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LazySection from '@/components/LazySection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const GallerySection = lazy(() => import('@/components/GallerySection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <LazySection minHeight="600px">
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <GallerySection />
        </Suspense>
      </LazySection>
      <LazySection minHeight="400px">
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>
      <LazySection minHeight="400px">
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <ContactSection />
        </Suspense>
      </LazySection>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
