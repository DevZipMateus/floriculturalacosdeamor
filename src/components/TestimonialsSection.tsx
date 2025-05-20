
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Kalil Lichtle",
    date: "junho 2023",
    rating: 5,
    image: "/placeholder.svg",
    text: "Serviço muito bom, coroas de primeira qualidade, atendimento excelente, entrega rápida. Super indico! Produtos de qualidade e bom gosto!"
  },
  {
    name: "Gilmires Neto",
    date: "março 2023",
    rating: 5,
    image: "/placeholder.svg",
    text: "Excelente qualidade dos produtos, atendimento muito bom. Recomendo a todos! Entrega rápida e dentro do prazo. Coroas e buquês exuberantes."
  },
  {
    name: "Thiago Cruz",
    date: "janeiro 2024",
    rating: 5,
    image: "/placeholder.svg",
    text: "Empresa muito atenciosa e dedicada. Entregou excelentes resultados, forte em sua proposta e muito profissional! Recomendo muito!"
  },
  {
    name: "Fernanda Oliveira",
    date: "dezembro 2023",
    rating: 5,
    image: "/placeholder.svg",
    text: "Serviço de primeira qualidade, atendimento excelente e entrega rápida. Os arranjos são lindos e as flores são sempre muito frescas."
  },
  {
    name: "Ricardo Almeida",
    date: "fevereiro 2024",
    rating: 5,
    image: "/placeholder.svg",
    text: "Sempre que precisei tive um ótimo atendimento. Os arranjos são lindos e chegam no prazo. Floricultura de confiança, recomendo muito!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getVisibleTestimonials = () => {
    // For mobile, only show one testimonial
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    
    // For larger screens, show multiple testimonials
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-floral-burgundy/10 text-floral-burgundy rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-floral-burgundy">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Veja o que nossos clientes têm a dizer sobre nossas flores, arranjos e atendimento.
            Satisfação é nossa prioridade!
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="animate-on-scroll">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 testimonial-slider transform`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-floral-burgundy hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-floral-burgundy' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-floral-burgundy hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    date: string;
    rating: number;
    image: string;
    text: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="fill-floral-gold text-floral-gold" size={16} />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="fill-floral-gold text-floral-gold" size={16} />
      );
    }
    
    // Add empty stars to make total of 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-gray-300" size={16} />
      );
    }
    
    return stars;
  };

  return (
    <Card className="border border-floral-gold/20 shadow-md service-card h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="mb-6 text-floral-gold">
          <Quote size={32} />
        </div>
        
        <div className="flex items-center mb-4">
          {renderStars(testimonial.rating)}
          <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
        </div>
        
        <p className="text-foreground mb-6 flex-grow">{testimonial.text}</p>
        
        <div className="flex items-center mt-auto">
          <Avatar className="mr-4 border-2 border-floral-burgundy/10">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback className="bg-floral-burgundy/10 text-floral-burgundy">
              {testimonial.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-floral-burgundy">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">Cliente Laços de Amor</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
