import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award, FileText } from 'lucide-react';

const SobreNosPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-16">
        {/* Sobre Nós */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Sobre Nós
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Floricultura em Goiânia que transforma homenagens e presentes em memórias inesquecíveis
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mais do que Floricultura, somos contadores de histórias que capturam a essência de cada instante com sensibilidade e perfeição.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {[
                'Experiência em homenagens fúnebres em Goiânia',
                'Faixa com mensagem personalizada',
                'Entrega direta em cemitérios e capelas',
                'Pontualidade e respeito ao momento',
                'Atendimento imediato via WhatsApp',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <a
                href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Gostaria de falar com a Floricultura Laços de Amor.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white py-3 px-8 rounded-md font-medium transition-colors text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com atendimento agora
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Nossa essência é transformar sentimentos em flores.
                  </h3>
                  <p className="text-muted-foreground">
                    Trabalhamos com paixão para oferecer mais do que arranjos. Criamos experiências que tocam o coração.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Qualidade e detalhes que fazem a diferença.
                  </h3>
                  <p className="text-muted-foreground">
                    Cada flor é escolhida com cuidado, nossos produtos são montados artesanalmente com acabamentos impecáveis.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Entrega rápida com carinho.
                  </h3>
                  <p className="text-muted-foreground">
                    Entregamos com pontualidade em Goiânia e região, inclusive em cemitérios, igrejas e locais de homenagem.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  title="ESTILO EXCLUSIVO E SOFISTICADO"
                  description="Nossos produtos são obras de arte que unem técnica e emoção em cada detalhe."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Serviços */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Nossos Serviços
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-floral-burgundy">
                Dando Vida às Suas Memórias
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Porque alguns momentos merecem ser lembrados para sempre, oferecemos um serviço de produção e entrega profissional que transforma seus momentos em experiências emocionantes e cheias de significado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceCard
                title="QUALIDADE ESPETACULAR"
                description="Produções impecáveis com os melhores produtos e flores para resultados incríveis."
              />
              <ServiceCard
                title="EMOÇÕES"
                description="Proporcionamos não apenas momentos, mas também sentimentos, expressões e detalhes que fazem toda a diferença."
              />
              <ServiceCard
                title="PRODUÇÃO PROFISSIONAL"
                description="Com técnica e criatividade, produzimos os melhores produtos para proporcionar momentos incríveis e emoções únicas."
              />
              <ServiceCard
                title="QUANDO NOS CONTRATAR?"
                description="Em qualquer momento, estamos prontos para atender suas necessidades com produtos de qualidade e entregas pontuais."
              />
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Gostaria de solicitar um orçamento para os serviços da Floricultura Laços de Amor.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-floral-burgundy hover:bg-floral-burgundy/90 text-white rounded-md px-8 py-3 text-lg font-medium transition-colors"
              >
                <FileText size={20} />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="border border-border/50 shadow-md">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

const ServiceCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="border border-border/50 shadow-md">
    <CardContent className="p-8 flex flex-col items-center text-center">
      <h3 className="text-xl font-bold mb-3 text-floral-burgundy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default SobreNosPage;
