import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { ShoppingBag, Image } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/button';
import LightboxDialog from './LightboxDialog';

// Categorias de imagens reorganizadas após análise visual
const categories = {
  // Coroas de flores - imagens que mostram arranjos circulares/ovais para funerais
  "coroas": [
    "1436283747534662.jpeg",
    "1277281734403665.jpeg",
    "685492667537964.jpeg",
    "722629856878437.jpeg",
    "2071026940064082.jpeg",
    "725832239870131.jpeg",
    "591988233337107.jpeg",
    "1194352558603841.jpeg",
    "1350057442775322.jpeg",
    "1277262153764645.jpeg",
    "1333631967727619.jpeg",
    "1947127676039578.jpeg",
    "566701519418918.jpeg",
    "1039514588126578.jpeg",
    "1211310727385237.jpeg",
    "1149602736833315.jpeg",
    "712547001297230.jpeg",
    "656723930462256.jpeg",
    "688949820752847.jpeg",
    "997127589251004.jpeg",
    "711578444721504.jpeg",
    "1267246988441755.jpeg",
    "677756168438687.jpeg",
    "1322423835484813.jpeg",
    "956824869722757.jpeg",
    "1338752984021341.jpeg",
    "1400186854324384.jpeg",
    "1213863113743969.jpeg",
    "1221306166442975.jpeg",
    "722094213661886.jpeg",
    "1444158630330084.jpeg",
    "1078517857501677.jpeg",
    "1855450545234363.jpeg",
    "1216088486633199.jpeg",
    "1879302432803728.jpeg",
    "1025678579199601.jpeg",
    "1066575648693097.jpeg",
    "589999074131900.jpeg",
    "1429297048080098.jpeg",
    "1411612573488350.jpeg",
    "4136915633234331.jpeg",
    "1022411606210524.jpeg",
    "1022540286729732.jpeg",
    // Imagens da pasta Coroa de Flores
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0116.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0117.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0118.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0119.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0121.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0122.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0123.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0128.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0129.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0130.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0131.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0132.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0134.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0135.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0136.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0137.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0138.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0139.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0140.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0141.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0142.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0144.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0145.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0146.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0147.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0148.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0149.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0150.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0151.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0152.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0153.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0154.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0156.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0157.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0158.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0159.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0160.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0161.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0162.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0163.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0164.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0165.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0166.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0167.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0168.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0169.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0170.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0171.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0172.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0173.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0174.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0175.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0176.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0177.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0178.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0179.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0180.jpg",
    "Coroa de Flores/Coroa de Flores/IMG-20250805-WA0181.jpg"
    
  ],
  
  // Buquês de flores - arranjos para segurar na mão, presentes
  "buques": [
    "1322967455452254.jpeg",
    "1744257336484288.jpeg",
    "1600599350896481.jpeg",
    "1032290782201299.jpeg",
    "1638596034198425.jpeg",
    "920803230103770.jpeg",
    "30626077246991276.jpeg",
    "626066910477203.jpeg",
    "2457499654597496.jpeg",
    "2447220618986222.jpeg",
    "4133203780233785.jpeg",
    "1497434104563077.jpeg",
    "1570604174326565.jpeg",
    "10004239452945980.jpeg",
    // Imagens da pasta Buque de flores
    "Buque de flores/Buque de flores/IMG-20250509-WA0054.jpg",
    "Buque de flores/Buque de flores/IMG-20250510-WA0036.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0032.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0038.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0040.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0041.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0042.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0043.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0044.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0045.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0046.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0047.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0051.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0052.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0053.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0054.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0058.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0059.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0060.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0061.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0063.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0064.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0065.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0069.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0079.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0080.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0081.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0082.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0083.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0084.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0086.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0087.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0088.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0089.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0090.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0091.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0092.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0093.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0094.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0095.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0096.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0097.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0098.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0099.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0100.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0102.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0103.jpg",
    "Buque de flores/Buque de flores/IMG-20250805-WA0104.jpg"
  ],
  
  // Cestas e presentes - cestas, arranjos em vasos, presentes
  "cestas": [
    "cestas/cestas-1.jpg",
    "cestas/cestas-13.jpg",
    "cestas/cestas-14.jpg",
    "cestas/cestas-25.jpg",
    "cestas/cestas-29.jpg",
    "cestas/cestas-47.jpg"
  ],
};

// Imagens em destaque para o carrossel superior - uma seleção das melhores de cada categoria
const featuredImages = [
  "1436283747534662.jpeg", // coroa
  "1211310727385237.jpeg", // buquê
  "4133203780233785.jpeg", // cesta
  "722629856878437.jpeg", // coroa
  "1378690923277082.jpeg", // buquê
  "1570604174326565.jpeg", // cesta
];

interface GalleryItemProps {
  image: string;
  category: string;
  onImageClick: (image: string, category: string) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, category, onImageClick }) => {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
      onClick={() => onImageClick(image, category)}
    >
      <img 
        src={`/galeria/${image}`} 
        alt={`Produto: ${category}`}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <Button 
          size="sm" 
          className="w-full bg-floral-burgundy hover:bg-floral-burgundy/90 text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Image size={16} />
          <span>Ampliar Imagem</span>
        </Button>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("coroas");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("coroas");
  
  // Add effect to listen for URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.includes('#gallery-')) {
        const category = hash.replace('#gallery-', '');
        
        // Validate that the category exists
        if (["coroas", "buques", "cestas"].includes(category)) {
          console.log(`GallerySection: Setting active tab to ${category} from hash`);
          setActiveTab(category);
        } else {
          console.warn(`GallerySection: Unknown category in hash: ${category}`);
        }
      }
    };
    
    // Check hash on component mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  // Logging when active tab changes for debugging
  useEffect(() => {
    console.log(`GallerySection: Active tab is now ${activeTab}`);
  }, [activeTab]);

  const handleImageClick = (image: string, category: string) => {
    setCurrentImage(image);
    setCurrentCategory(category);
    setLightboxOpen(true);
    console.log(`Opening lightbox for image: ${image} from category: ${category}`);
  };
  
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-floral-burgundy mb-4">
            Galeria de Produtos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça nossos produtos e escolha o que melhor combina com o seu momento especial
          </p>
        </div>

        {/* Lightbox Dialog */}
        <LightboxDialog 
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          image={currentImage}
          category={currentCategory}
        />

        {/* Featured carousel */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold text-floral-burgundy mb-6 text-center">
            Destaques Especiais
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0 cursor-pointer" onClick={() => {
                      let category = "outros";
                      if (categories.coroas.includes(image)) category = "coroas";
                      else if (categories.buques.includes(image)) category = "buques";
                      else if (categories.cestas.includes(image)) category = "cestas";
                      
                      handleImageClick(image, category);
                    }}>
                      <img 
                        src={`/galeria/${image}`} 
                        alt={`Destaque ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                    <CardFooter className="p-4 bg-floral-burgundy text-white">
                      <Button 
                        variant="outline" 
                        className="w-full bg-transparent border-white text-white hover:bg-white hover:text-floral-burgundy"
                        onClick={() => {
                          let category = "outros";
                          if (categories.coroas.includes(image)) category = "coroas";
                          else if (categories.buques.includes(image)) category = "buques";
                          else if (categories.cestas.includes(image)) category = "cestas";
                          
                          const categoryName = {
                            "coroas": "Coroa de Flores",
                            "buques": "Buquê de Flores",
                            "cestas": "Cesta/Presente",
                            "outros": "Produto"
                          }[category];
                          
                          const imageUrl = `/galeria/${image}`;
                          const message = `Olá! Gostaria de saber mais sobre este produto em destaque: ${categoryName}`;
                          
                          openWhatsApp(message, imageUrl);
                        }}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Ver Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>

        {/* Category tabs */}
        <Tabs 
          defaultValue="coroas" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="animate-on-scroll"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger 
              value="coroas" 
              data-value="coroas" 
              className="text-sm md:text-base flex flex-col items-center justify-center h-full py-3"
              data-active={activeTab === "coroas"}
            >
              <span className="line-clamp-2">Coroas de Flores</span>
            </TabsTrigger>
            <TabsTrigger 
              value="buques" 
              data-value="buques" 
              className="text-sm md:text-base flex flex-col items-center justify-center h-full py-3"
              data-active={activeTab === "buques"}
            >
              <span className="line-clamp-2">Buquês de Flores</span>
            </TabsTrigger>
            <TabsTrigger 
              value="cestas" 
              data-value="cestas" 
              className="text-sm md:text-base flex flex-col items-center justify-center h-full py-3"
              data-active={activeTab === "cestas"}
            >
              <span className="line-clamp-2">Cestas & Presentes</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Coroas de Flores */}
          <TabsContent value="coroas" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.coroas.map((image, index) => (
                <GalleryItem 
                  key={index} 
                  image={image} 
                  category="coroas" 
                  onImageClick={handleImageClick} 
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Buquês de Flores */}
          <TabsContent value="buques" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.buques.map((image, index) => (
                <GalleryItem 
                  key={index} 
                  image={image} 
                  category="buques" 
                  onImageClick={handleImageClick} 
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Cestas e Presentes */}
          <TabsContent value="cestas" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.cestas.map((image, index) => (
                <GalleryItem 
                  key={index} 
                  image={image} 
                  category="cestas" 
                  onImageClick={handleImageClick} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
