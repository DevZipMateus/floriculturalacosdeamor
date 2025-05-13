
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-floral-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>,
      title: "Flores para Velórios",
      description: "Arranjos florais para homenagear momentos de despedida, feitos com respeito e delicadeza para transmitir conforto e carinho."
    }, 
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-floral-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>,
      title: "Flores Expressas",
      description: "Entrega rápida para surpresas de última hora ou momentos especiais que não podem esperar. Flores frescas com entrega ágil em todo Brasil."
    }, 
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-floral-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>,
      title: "Buquês para Casamentos",
      description: "Buquês personalizados para noivas, madrinhas e toda a cerimônia, com flores selecionadas para tornar o seu dia ainda mais especial."
    }, 
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-floral-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>,
      title: "Arranjos Personalizados",
      description: "Criações exclusivas para decoração, presentes ou eventos especiais. Flores cuidadosamente selecionadas e arranjadas com arte e criatividade."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-floral-gold/10 text-floral-gold rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-floral-burgundy animate-on-scroll">
            Dando Vida às Suas Memórias
          </h2>
          <p className="text-floral-burgundy/80 max-w-2xl mx-auto animate-on-scroll">
            Porque alguns momentos merecem ser lembrados para sempre, oferecemos um serviço de produção e entrega profissional que transforma seus momentos em momentos emocionantes e cheios de significado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ServiceCard 
            icon={services[0].icon}
            title="QUALIDADE ESPETACULAR"
            description="Produções impecáveis com os melhores produtos e flores para resultados incríveis."
            index={0}
          />
          <ServiceCard 
            icon={services[1].icon}
            title="EMOÇÕES"
            description="Proporcionamos não apenas momentos, mas também sentimentos, expressões e detalhes que fazem toda a diferença."
            index={1}
          />
          <ServiceCard 
            icon={services[2].icon}
            title="PRODUÇÃO PROFISSIONAL"
            description="Com técnica e criatividade, produzimos os melhores produtos para proporcionar momentos incríveis e emoções únicas."
            index={2}
          />
          <ServiceCard 
            icon={services[3].icon}
            title="QUANDO NOS CONTRATAR?"
            description="Em qualquer momento, estamos prontos para atender suas necessidades com produtos de qualidade e entregas pontuais."
            index={3}
          />
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Button 
            size="lg" 
            className="quote-btn bg-floral-burgundy hover:bg-floral-burgundy/90 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para os serviços da Floricultura Laços de Amor.')}
          >
            <FileText size={20} />
            <span>Solicitar Orçamento</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-floral-gold/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-floral-burgundy">{title}</h3>
      <p className="text-floral-burgundy/70">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
