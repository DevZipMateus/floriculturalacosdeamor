
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { openWhatsApp } from '@/utils/whatsapp';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize the scroll state on mount
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
          <a href="#" className="relative z-20">
            <div className="flex items-center">
              <img 
                src="/galeria/1876c8f1-db0a-4056-b9db-c9234854c90c.png" 
                alt="Laços de Amor Logo"
                className="h-12 w-auto mr-2"
              />
              <h1 className="text-2xl font-display font-bold text-floral-burgundy hidden md:block">
                Floricultura Laços de Amor
              </h1>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
            <Button 
              className="quote-btn ml-4 text-white bg-floral-burgundy hover:bg-floral-burgundy/90 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
              onClick={() => openWhatsApp()}
            >
              <FileText size={18} />
              Falar com Vendas
            </Button>
          </nav>

          {/* Mobile Menu using Sheet from shadcn/ui */}
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
                    <Button 
                      className="quote-btn mt-4 w-full text-white bg-floral-burgundy hover:bg-floral-burgundy/90 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 py-3 text-base"
                      onClick={() => openWhatsApp()}
                    >
                      <FileText size={18} />
                      Falar com Vendas
                    </Button>
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
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Nossos Produtos', href: '#category-highlights' },
    { name: 'Coroa de flores', href: '#services' },
    { name: 'Buque e Presente', href: '#gallery' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-floral-burgundy hover:text-floral-gold mb-2 w-full text-center py-3' 
              : 'text-floral-burgundy hover:text-floral-gold hover:bg-secondary/50'
            }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
