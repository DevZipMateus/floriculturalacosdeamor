import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-nav' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-20">
            <div className="flex items-center">
              <img 
                src="/galeria/1876c8f1-db0a-4056-b9db-c9234854c90c.png" 
                alt="Laços de Amor Logo"
                className="h-12 w-auto mr-2"
              />
              <h1 className="text-lg md:text-2xl font-display font-bold text-floral-burgundy">
                Floricultura Laços de Amor
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
            <a 
              href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Preciso de uma coroa de flores para velório com entrega imediata.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-white bg-[#25D366] hover:bg-[#20BD5C] rounded-md transition-colors shadow-md flex items-center gap-2 px-4 py-2 font-medium text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Atendimento Imediato
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-floral-burgundy">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=558001813000&text=Olá! Preciso de uma coroa de flores para velório com entrega imediata.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full text-white bg-[#25D366] hover:bg-[#20BD5C] rounded-md transition-colors shadow-md flex items-center justify-center gap-2 py-3 text-base font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Atendimento Imediato
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile }: NavLinksProps) => {
  const location = useLocation();
  
  const links = [
    { name: 'Início', to: '/' },
    { name: 'Coroas de Flores', to: '/coroas' },
    { name: 'Buquês Premium', to: '/buques' },
    { name: 'Cestas Premium', to: '/cestas' },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        
        if (mobile) {
          return (
            <SheetClose key={link.name} asChild>
              <Link
                to={link.to}
                className={`text-xl mb-2 w-full text-center py-3 font-medium transition-colors rounded-md
                  ${isActive ? 'text-floral-gold' : 'text-floral-burgundy hover:text-floral-gold'}`}
              >
                {link.name}
              </Link>
            </SheetClose>
          );
        }
        
        return (
          <Link
            key={link.name}
            to={link.to}
            className={`font-medium transition-colors px-3 py-2 rounded-md
              ${isActive ? 'text-floral-gold' : 'text-floral-burgundy hover:text-floral-gold hover:bg-secondary/50'}`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Header;
