
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flower, ShoppingBasket, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryProps {
  title: string;
  description: string;
  images: string[];
  icon: JSX.Element;
  color: string;
}

const categories: CategoryProps[] = [
  {
    title: "Buquê de Flores",
    description: "Buquês de flores naturais com entrega rápida em Goiânia. Ideais para aniversários, declarações de amor ou surpresas inesquecíveis",
    images: [
      "/galeria/1322967455452254.jpeg",
      "/galeria/1744257336484288.jpeg",
      "/galeria/1600599350896481.jpeg"
    ],
    icon: <Flower size={24} />,
    color: "bg-pink-100 text-pink-700 border-pink-300"
  },
  {
    title: "Cestas",
    description: "Cestas com chocolates, flores e mimos personalizados sob encomenda. Entregamos em Goiânia com carinho em até 3 horas. Perfeitos para presentes",
    images: [
      "/galeria/1378690923277082.jpeg",
      "/galeria/1379703456612614.jpeg",
      "/galeria/1896782404474502.jpeg"
    ],
    icon: <ShoppingBasket size={24} />,
    color: "bg-yellow-100 text-yellow-700 border-yellow-300"
  },
  {
    title: "Coroas de Flores",
    description: "Coroas de flores para velório com entrega imediata em cemitérios de Goiânia e região. Homenagens com delicadeza, com respeito e pontualidade",
    images: [
      "/galeria/1436283747534662.jpeg",
      "/galeria/1277281734403665.jpeg",
      "/galeria/685492667537964.jpeg"
    ],
    icon: <Crown size={24} />,
    color: "bg-purple-100 text-purple-700 border-purple-300"
  }
];

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % category.images.length);
  };
  
  const handleGalleryNavigation = () => {
    // Create mapping for categories to hash values
    const categoryToHash: Record<string, string> = {
      "Buquê de Flores": "buques",
      "Cestas": "cestas",
      "Coroas de Flores": "coroas"
    };
    
    // Get the correct hash value for this category
    const hashValue = categoryToHash[category.title];
    
    if (!hashValue) {
      console.error(`No hash mapping found for category: ${category.title}`);
      return;
    }
    
    // Log the navigation intent
    console.log(`CategoryHighlights: Navigating to gallery with category: ${hashValue}`);
    
    // First, scroll to the gallery section
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Set the hash after a small delay to ensure smooth scrolling
    setTimeout(() => {
      // Navigate using the hash - this will trigger the hash change handler
      window.location.hash = `gallery-${hashValue}`;
      console.log(`CategoryHighlights: Set hash to #gallery-${hashValue}`);
    }, 100);
  };
  
  return (
    <Card className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 animate-on-scroll">
      <div className="relative h-64 overflow-hidden">
        {category.images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={category.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              currentImage === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <button 
          onClick={handleNext}
          className="absolute right-3 bottom-3 p-2 rounded-full bg-white/80 hover:bg-white text-floral-burgundy transition-all"
          aria-label="Next image"
        >
          <ArrowRight size={16} />
        </button>
        <div className="absolute top-0 left-0 m-3 px-3 py-1 rounded-full flex items-center gap-2 bg-white/90 shadow-md">
          <span className={cn("p-1 rounded-full", category.color.split(" ")[0])}>
            {category.icon}
          </span>
          <h3 className="font-medium text-floral-burgundy">{category.title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-700 mb-4">{category.description}</p>
        <Button 
          onClick={handleGalleryNavigation}
          variant="outline" 
          className={cn(
            "w-full flex items-center justify-between border-2 group",
            category.color.split(" ")[0].replace("bg-", "border-"),
            category.color.split(" ")[1]
          )}
        >
          <span>Ver Galeria</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

const CategoryHighlights = () => {
  return (
    <section id="category-highlights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-floral-burgundy mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Coroas de flores, buquês e cestas de presentes com entrega em Goiânia e região
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
