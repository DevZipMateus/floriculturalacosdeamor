
import React from 'react';
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

interface LightboxDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  category: string;
}

const categoryNames: Record<string, string> = {
  "coroas": "Coroa de Flores",
  "buques": "Buquê de Flores",
  "cestas": "Cesta/Presente"
};

const LightboxDialog: React.FC<LightboxDialogProps> = ({ 
  open, 
  onOpenChange, 
  image, 
  category 
}) => {
  const handleWhatsAppClick = () => {
    const categoryName = categoryNames[category] || "Produto";
    // Use the original URL construction but the openWhatsApp function will mask it
    const imageUrl = `https://floriculturalacosdeamor.com.br/lovable-uploads/${image}`;
    const message = `Olá! Gostaria de comprar esta ${categoryName}:`;
    
    openWhatsApp(message, imageUrl);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-white/95 backdrop-blur-sm border-none">
        <button 
          onClick={() => onOpenChange(false)} 
          className="absolute right-4 top-4 z-10 bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white hover:text-black transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-h-[70vh] overflow-hidden">
            <img 
              src={`/lovable-uploads/${image}`} 
              alt={`${categoryNames[category]} ampliado`}
              className="w-full h-auto object-contain max-h-[70vh]"
            />
          </div>
          
          <DialogFooter className="w-full p-4 bg-white/90">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left">
                <h3 className="font-semibold text-floral-burgundy text-lg">
                  {categoryNames[category]}
                </h3>
                <p className="text-gray-700">
                  Entre em contato para mais informações e preços
                </p>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BD5C] flex gap-2 min-w-[200px]"
              >
                <ShoppingBag size={18} />
                <span>Comprar pelo WhatsApp</span>
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LightboxDialog;
