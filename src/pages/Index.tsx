import React from 'react';
import OilIndustryHeader from '@/components/OilIndustryHeader';
import ProsConsSection from '@/components/ProsConsSection';
import ProfessionsSection from '@/components/ProfessionsSection';
import CareerSection from '@/components/CareerSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Функция для плавного скролла к секциям
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <OilIndustryHeader scrollToSection={scrollToSection} />
      
      <main>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              О проекте
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-center">
              Этот информационный ресурс создан для школьников и их родителей, чтобы помочь разобраться 
              в различных аспектах нефтяной промышленности и возможностях построения карьеры в этой отрасли.
            </p>
            <p className="text-lg text-gray-800 text-center">
              Нефтяная промышленность остаётся одной из ключевых отраслей мировой экономики, предлагая 
              широкие возможности для профессионального роста и самореализации.
            </p>
          </div>
        </div>
        
        <ProsConsSection />
        <ProfessionsSection />
        <CareerSection />
        <EducationSection />
        <SkillsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
