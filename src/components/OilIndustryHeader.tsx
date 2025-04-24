import React from 'react';
import { Button } from '@/components/ui/button';

interface OilIndustryHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const OilIndustryHeader: React.FC<OilIndustryHeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="py-8 bg-gradient-to-r from-pink-50 to-pink-100 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-700">
          Нефтяное дело: как начать путь
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-pink-800">
          Информативный гид по карьере в нефтяной промышленности для школьников и их родителей
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Button 
            onClick={() => scrollToSection('pros-cons')} 
            variant="secondary" 
            className="bg-pink-200 hover:bg-pink-300 text-pink-900"
          >
            Преимущества и недостатки
          </Button>
          <Button 
            onClick={() => scrollToSection('professions')} 
            variant="secondary" 
            className="bg-pink-200 hover:bg-pink-300 text-pink-900"
          >
            Основные профессии
          </Button>
          <Button 
            onClick={() => scrollToSection('career')} 
            variant="secondary" 
            className="bg-pink-200 hover:bg-pink-300 text-pink-900"
          >
            Карьерные возможности
          </Button>
          <Button 
            onClick={() => scrollToSection('education')} 
            variant="secondary" 
            className="bg-pink-200 hover:bg-pink-300 text-pink-900"
          >
            Образование
          </Button>
          <Button 
            onClick={() => scrollToSection('skills')} 
            variant="secondary" 
            className="bg-pink-200 hover:bg-pink-300 text-pink-900"
          >
            Необходимые навыки
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OilIndustryHeader;
