import React from 'react';
import { Button } from '@/components/ui/button';

interface OilIndustryHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const OilIndustryHeader: React.FC<OilIndustryHeaderProps> = ({ scrollToSection }) => {
  return (
    <div className="relative bg-oil-light">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-oil-darkest">
              Нефтяное дело: <span className="text-pink-500">как начать путь</span>
            </h1>
            <p className="text-lg text-gray-800 mb-6">
              Информативный гид по профессиям нефтяной отрасли для школьников и их родителей. 
              Узнайте о карьерных возможностях, необходимом образовании и навыках в одной из 
              ключевых отраслей экономики.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => scrollToSection('pros-cons')}
                className="bg-pink-400 hover:bg-pink-500 text-black"
              >
                Преимущества и недостатки
              </Button>
              <Button 
                onClick={() => scrollToSection('professions')}
                className="bg-pink-400 hover:bg-pink-500 text-black"
              >
                Профессии
              </Button>
              <Button 
                onClick={() => scrollToSection('career')}
                className="bg-pink-400 hover:bg-pink-500 text-black"
              >
                Карьера
              </Button>
              <Button 
                onClick={() => scrollToSection('education')}
                className="bg-pink-400 hover:bg-pink-500 text-black"
              >
                Образование
              </Button>
              <Button 
                onClick={() => scrollToSection('skills')}
                className="bg-pink-400 hover:bg-pink-500 text-black"
              >
                Необходимые навыки
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="bg-pink-200 rounded-lg p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-300 rounded-bl-full"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Проектная работа 2025</h3>
                <p className="text-gray-800 mb-4">
                  Цель проекта — создать информативную и доступную статью для школьного 
                  сайта о профессиях нефтяной промышленности, которая поможет разобраться 
                  в различных аспектах отрасли.
                </p>
                <div className="flex items-center text-sm text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>irinapodlesnaa76@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default OilIndustryHeader;
