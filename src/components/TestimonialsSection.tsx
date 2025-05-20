
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Josueuda Medeiros",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Estão de parabéns pelo atendimento e presteza do serviço! Sou do Rio Grande do Norte e pude realizar minha última homenagem à minha tia aí em Goiânia."
  },
  {
    name: "Keila Maia",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Nesse momento difícil, a Floricultura Laços de Amor cuida com profissionalismo e sensibilidade de atender um último gesto de honra, com atenção, pontualidade..."
  },
  {
    name: "Mariana Moreira",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Gostei do serviço prestado e o atendimento durante todo o período. Foram pacientes e atenciosos. As flores chegaram lindas, bem como prometido."
  },
  {
    name: "Kethruyn Covas",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Atendimento humanizado de excelência. Compreendem o momento que estamos passando e fazem de tudo para que possamos ser bem até atendidos apesar..."
  },
  {
    name: "Carla Brandão",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Atendimento excelente, muito atenciosos. Tudo excelente."
  },
  {
    name: "Michele Fernandes",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Muito bacana. Estava com pressa para coroa de flores, entregaram em 30 minutos. Muito satisfeita. Obrigada."
  },
  {
    name: "Ulisses e Izabella",
    date: "fevereiro 2025", 
    rating: 5,
    image: "/placeholder.svg",
    text: "Atendimento rápido e cuidadoso!"
  },
  {
    name: "Henrique Lemos",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Empatia e agilidade no atendimento!"
  },
  {
    name: "Luciana Toledo",
    date: "fevereiro 2025",
    rating: 5, 
    image: "/placeholder.svg",
    text: "Atendimento rápido e eficiente, no momento mais difícil necessitamos de agilidade e compreensão. Quero deixar aqui minha gratidão à Laços de Amor por..."
  },
  {
    name: "Mitema Produções",
    date: "fevereiro 2025",
    rating: 5,
    image: "/placeholder.svg",
    text: "Sempre muito amáveis e respeitosos. A empresa tem responsabilidade, padrão e qualidade! Entrega no horário como combinado. Atendimento atencioso. Flore..."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    // Para telas menores, mostrar apenas um depoimento
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    
    // Para telas maiores, mostrar múltiplos depoimentos
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
            Opiniões de Clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-floral-burgundy">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Veja avaliações reais de clientes sobre nossos produtos, serviços e atendimento.
            Seu momento de homenagem merece todo nosso cuidado e atenção.
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
  // Gerar estrelas com base na classificação
  const renderStars = (rating: number) => {
    const stars = [];
    
    // Adicionar estrelas completas
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Star key={`full-${i}`} className="fill-floral-gold text-floral-gold" size={16} />
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
