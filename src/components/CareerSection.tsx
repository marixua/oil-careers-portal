import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const CareerSection: React.FC = () => {
  const careerPaths = [
    {
      title: 'Технический путь',
      description: 'Развитие от младшего специалиста до главного инженера или технического директора',
      steps: [
        'Младший инженер/техник',
        'Инженер',
        'Старший инженер',
        'Ведущий инженер',
        'Главный инженер'
      ]
    },
    {
      title: 'Управленческий путь',
      description: 'Рост от линейного руководителя до топ-менеджера компании',
      steps: [
        'Мастер/бригадир',
        'Начальник участка',
        'Начальник отдела',
        'Директор департамента',
        'Топ-менеджер'
      ]
    },
    {
      title: 'Научно-исследовательский путь',
      description: 'Развитие в сфере научных исследований и разработок',
      steps: [
        'Инженер-исследователь',
        'Научный сотрудник',
        'Ведущий научный сотрудник',
        'Руководитель исследовательского направления',
        'Научный директор'
      ]
    }
  ];

  return (
    <section id="career" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Карьерные возможности в нефтяной промышленности
        </h2>

        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-lg text-center text-pink-800 mb-6">
            Нефтяная отрасль предлагает разнообразные пути карьерного роста с возможностью как вертикального, 
            так и горизонтального развития. Вот основные карьерные направления, которые доступны специалистам:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-pink-700">{path.title}</CardTitle>
                <CardDescription className="text-pink-600">{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-pink-800 mb-2">Ступени карьерного роста:</h4>
                <ul className="space-y-1 list-disc pl-5">
                  {path.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-pink-900">{step}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 p-6 bg-white rounded-lg border border-pink-200 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-pink-700 mb-3">Международные перспективы</h3>
          <p className="text-pink-900">
            Специалисты нефтяной отрасли востребованы по всему миру. Крупные международные компании предлагают 
            возможности для работы в разных странах, что позволяет получить уникальный опыт и значительно 
            повысить свою ценность на рынке труда.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
