import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-floral-gold" />,
      title: "Telefone",
      details: "0800 181 3000",
      link: "tel:08001813000"
    },
    {
      icon: <Mail className="h-5 w-5 text-floral-gold" />,
      title: "E-mail",
      details: "soraia-irineia@hotmail.com",
      link: "mailto:soraia-irineia@hotmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-floral-gold" />,
      title: "Endereço",
      details: "Rua Armogaste José da Silva, Setor Centro-Oeste, Goiânia-GO, 74560-475",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-floral-gold" />,
      title: "Horário",
      details: "Atendimento Online 24 horas",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-floral-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-floral-gold/10 text-floral-gold rounded-full text-sm font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-floral-burgundy">
            Estamos Prontos para Atender Você
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Entre em contato conosco através de WhatsApp, telefone ou e-mail.
            Nossa equipe está à disposição para oferecer o suporte que você precisa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-floral-burgundy">Informações de Contato</h3>
                  <p className="text-foreground/70 mb-8">
                    Para solicitar orçamentos, tirar dúvidas ou agendar uma consulta, 
                    utilize um dos canais de atendimento abaixo.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <ContactInfoItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-floral-burgundy">Siga-nos</h4>
                    <div className="flex space-x-3">
                      <a href="https://www.facebook.com/share/1FdsXn6kBx/" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-floral-gold/10 text-floral-gold hover:bg-floral-burgundy hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                      <a href="https://www.instagram.com/floriculturalacosdeamor.flores?utm_source=qr&igsh=dzRleHR0djIwMGpj" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                      <a href="https://www.linkedin.com/in/la%C3%A7os-de-amor-92b1321b5" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-floral-gold/10 text-floral-gold hover:bg-floral-burgundy hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-floral-gold/5 rounded-xl max-w-md">
                    <div className="mb-4 text-floral-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-floral-burgundy">Prefere atendimento via WhatsApp?</h3>
                    <p className="text-foreground/70 mb-6">
                      Clique no botão do WhatsApp para iniciar uma conversa diretamente com nossa equipe de atendimento.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Preciso de uma coroa de flores para velório com entrega imediata.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white py-3 px-6 rounded-md font-medium transition-colors"
                    >
                      Falar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16" ref={mapRef}>
          <Card className="border border-border/50 shadow-md overflow-hidden">
            <div className="h-[400px] w-full">
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6961218218976!2d-49.2621!3d-16.6778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19fa1a3d5fb%3A0xe1b826d96047944!2sRua%20Manaus%20-%20Vila%20Nova%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1627909542948!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa de localização"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  Carregando mapa...
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-floral-burgundy">{title}</h4>
        <p className="text-foreground/70 mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:text-floral-gold transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactSection;
