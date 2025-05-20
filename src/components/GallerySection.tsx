
import React, { useState } from 'react';
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
import { ShoppingBag } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/button';

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
    
    
  ],
  
  // Buquês de flores - arranjos para segurar na mão, presentes
  "buques": [
    "4136915633234331.jpeg",
    "1744257336484288.jpeg",
    "1600599350896481.jpeg",
    "1032290782201299.jpeg",
    "1638596034198425.jpeg",
    "920803230103770.jpeg",
    "30626077246991276.jpeg",
    "626066910477203.jpeg",
    
    

  ],
  
  // Cestas e presentes - cestas, arranjos em vasos, presentes
  "cestas": [
    "1378690923277082.jpeg",
    "1379703456612614.jpeg",
    "625072200556953.jpeg",
    "4133203780233785.jpeg",
    "1022540286729732.jpeg",
    "1497434104563077.jpeg",
    "1570604174326565.jpeg",
    "10004239452945980.jpeg",
    "1896782404474502.jpeg",
    "1088807276410764.jpeg",
    "1715461362418119.jpeg",
    "2457499654597496.jpeg",
    "2447220618986222.jpeg",
    "1022411606210524.jpeg",
    "1322967455452254.jpeg",
    
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
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, category }) => {
  const handleClick = () => {
    const categoryName = {
      "coroas": "Coroa de Flores",
      "buques": "Buquê de Flores",
      "cestas": "Cesta/Presente"
    }[category];
    
    openWhatsApp(`Olá! Gostaria de saber mais sobre este produto: ${categoryName} (Ref: ${image.replace('.jpeg', '')})`);
  };

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
      onClick={handleClick}
    >
      <img 
        src={`/lovable-uploads/${image}`} 
        alt={`Produto: ${category}`}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <Button 
          size="sm" 
          className="w-full bg-floral-burgundy hover:bg-floral-burgundy/90 text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingBag size={16} />
          <span>Ver Detalhes</span>
        </Button>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("coroas");
  
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
                    <CardContent className="p-0">
                      <img 
                        src={`/lovable-uploads/${image}`} 
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
                          
                          openWhatsApp(`Olá! Gostaria de saber mais sobre este produto em destaque: ${categoryName} (Ref: ${image.replace('.jpeg', '')})`);
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
            <TabsTrigger value="coroas" data-value="coroas" className="text-lg">Coroas de Flores</TabsTrigger>
            <TabsTrigger value="buques" data-value="buques" className="text-lg">Buquês de Flores</TabsTrigger>
            <TabsTrigger value="cestas" data-value="cestas" className="text-lg">Cestas & Presentes</TabsTrigger>
          </TabsList>
          
          {/* Coroas de Flores */}
          <TabsContent value="coroas" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.coroas.map((image, index) => (
                <GalleryItem key={index} image={image} category="coroas" />
              ))}
            </div>
          </TabsContent>
          
          {/* Buquês de Flores */}
          <TabsContent value="buques" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.buques.map((image, index) => (
                <GalleryItem key={index} image={image} category="buques" />
              ))}
            </div>
          </TabsContent>
          
          {/* Cestas e Presentes */}
          <TabsContent value="cestas" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.cestas.map((image, index) => (
                <GalleryItem key={index} image={image} category="cestas" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
