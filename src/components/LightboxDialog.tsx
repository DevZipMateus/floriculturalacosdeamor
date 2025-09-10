
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
  const getWhatsAppUrl = () => {
    const categoryName = categoryNames[category] || "Produto";
    const imageUrl = new URL(`/galeria/${image}`, window.location.origin).toString();
    const message = `Olá! Gostaria de comprar esta ${categoryName}: ${imageUrl}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=558001813000&text=${encodedMessage}&type=phone_number&app_absent=0`;
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
              src={`/galeria/${image}`} 
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
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenChange(false)}
                className="bg-[#25D366] hover:bg-[#20BD5C] flex gap-2 min-w-[200px] px-4 py-2 rounded-md text-white font-medium inline-flex items-center justify-center transition-colors"
              >
                <ShoppingBag size={18} />
                <span>Comprar pelo WhatsApp</span>
              </a>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LightboxDialog;
