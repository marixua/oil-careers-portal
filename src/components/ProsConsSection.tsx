import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProsConsSection: React.FC = () => {
  const pros = [
    {
      title: 'Высокая заработная плата',
      description: 'Специалисты нефтяной отрасли получают одну из самых высоких зарплат в промышленном секторе'
    },
    {
      title: 'Стабильность',
      description: 'Нефтяная промышленность остаётся одной из самых стабильных отраслей экономики'
    },
    {
      title: 'Социальный пакет',
      description: 'Компании предлагают расширенные социальные пакеты, включая медицинское страхование и пенсионные программы'
    }
  ];

  const cons = [
    {
      title: 'Сложные условия труда',
      description: 'Работа часто происходит в удаленных регионах с суровым климатом или на морских платформах'
    },
    {
      title: 'Вахтовый метод',
      description: 'Многие должности требуют длительного отсутствия дома, что может влиять на личную жизнь'
    },
    {
      title: 'Экологические риски',
      description: 'Работа связана с экологически опасной деятельностью, что создает дополнительную ответственность'
    }
  ];

  return (
    <section id="pros-cons" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Преимущества и недостатки трудоустройства в нефтяной отрасли
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-600 text-center">Преимущества</h3>
            <div className="space-y-4">
              {pros.map((item, index) => (
                <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-pink-700">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pink-900">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-600 text-center">Недостатки</h3>
            <div className="space-y-4">
              {cons.map((item, index) => (
                <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-pink-700">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pink-900">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;
