
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Floricultura em Goiania em transforma homenagens e presentes em memorias inesquecíveis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais do que Floricultura, somos contadores de histórias que capturam a essência de cada instante com sensibilidade e perfeição.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Produtos florais feitos com carinho, rapidez e excelência para presentear, homenagear ou marcar um momento especial em Goiânia
              </h3>
              <p className="text-muted-foreground mb-6">
                Nosso trabalho é guiado pela paixão em proporcionar o que há de mais especial na vida: emoções genuínas, conexões verdadeiras e a beleza única de cada detalhe. Acreditamos que os nossos produtos vão além de uma imagem; ela é um legado que atravessa o tempo, preservando lembranças e sentimentos.
              </p>
              <p className="text-muted-foreground mb-6">
                Com um olhar criativo, garantimos produtos personalizados que traduzem sua personalidade e estilo. Seja para um pedido de desculpas, datas especiais, eventos ou até mesmo um funeral, estamos aqui para criar imagens que falem por si e emocionem por gerações.
              </p>
              <ul className="space-y-3">
                {[
                  'Equipe de profissionais qualificados',
                  'Compromisso com prazos de entrega',
                  'Estilos exclusivos e sofisticados',
                  'Qualidade profissional nos produtos'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="POR QUE NÓS?"
              description="Imagine, sonhe, registre: seus momentos eternizados com perfeição."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="EQUIPE DE PROFISSIONAIS"
              description="Utilizamos mão de obra qualificada para garantir produtos vibrantes e de altíssima qualidade."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="COMPROMISSO COM PRAZOS"
              description="Temos uma equipe de entregadores qualificados para fazer sua entrega no prazo combinado."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="ESTILOS EXCLUSIVO E SOFISTICADO"
              description="Nossos produtos são obras de arte que unem técnica e emoção em cada detalhe."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">Profissionais que entendem sentimentos</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
