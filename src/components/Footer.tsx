
import { Button } from '@/components/ui/button';
import { ChevronUp, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-floral-burgundy text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1876c8f1-db0a-4056-b9db-c9234854c90c.png" 
                alt="Laços de Amor Logo" 
                className="h-16 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">
                <span className="text-floral-gold">Laços De Amor</span>
              </h3>
            </div>
            <p className="text-white/80 max-w-xs">
              Floricultura online com atendimento ágil, personalizado e humano, entregando flores com significado em todo o Brasil.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink 
                href="https://www.facebook.com/share/1FdsXn6kBx/" 
                aria-label="Facebook"
                icon={<Facebook className="h-4 w-4" />}
              />
              <FooterSocialLink 
                href="https://www.linkedin.com/in/la%C3%A7os-de-amor-92b1321b5" 
                aria-label="LinkedIn"
                icon={<Linkedin className="h-4 w-4" />}
              />
              <FooterSocialLink 
                href="https://www.instagram.com/floriculturalacosdeamorr" 
                aria-label="Instagram"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
              <FooterNavItem href="https://lacosdeamor.com.br/">Site Oficial</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Flores para Velórios</FooterNavItem>
              <FooterNavItem href="#services">Flores Expressas</FooterNavItem>
              <FooterNavItem href="#services">Buquês para Casamentos</FooterNavItem>
              <FooterNavItem href="#services">Arranjos Personalizados</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(62) 98146-4070</li>
              <li>soraia-irineia@hotmail.com</li>
              <li>Rua Manaus, Goiás</li>
              <li>Atendimento Online</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Floricultura Laços De Amor. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-floral-gold/80 border-floral-gold/20 hover:bg-floral-gold/90 text-floral-burgundy"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-floral-gold transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
  icon?: React.ReactNode;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => (
  <a
    {...props}
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-floral-gold/80 transition-colors duration-200"
  >
    {props.icon}
  </a>
);

export default Footer;
