import React from 'react';

const ProsConsSection: React.FC = () => {
  const advantages = [
    {
      title: "Высокая заработная плата",
      description: "Нефтяная отрасль известна одними из самых высоких зарплат среди промышленных секторов"
    },
    {
      title: "Карьерный рост",
      description: "Структурированная система карьерного продвижения с чёткими путями развития"
    },
    {
      title: "Социальные гарантии",
      description: "Расширенный социальный пакет, включающий медицинское страхование и пенсионные программы"
    },
    {
      title: "Стабильность",
      description: "Нефтяная промышленность менее подвержена экономическим кризисам, чем многие другие отрасли"
    },
    {
      title: "Международные перспективы",
      description: "Возможность работы в международных проектах и зарубежных командировках"
    }
  ];

  const disadvantages = [
    {
      title: "Сложные условия труда",
      description: "Работа часто связана с вахтовым методом в удалённых и климатически сложных регионах"
    },
    {
      title: "Высокие риски",
      description: "Повышенная опасность на производстве требует особой внимательности и дисциплины"
    },
    {
      title: "Строгие требования",
      description: "Необходимость соответствовать высоким профессиональным и медицинским требованиям"
    },
    {
      title: "Экологические проблемы",
      description: "Отрасль связана с воздействием на окружающую среду, что создаёт моральные дилеммы"
    },
    {
      title: "Зависимость от рынка",
      description: "Волатильность цен на нефть может влиять на стабильность некоторых проектов"
    }
  ];

  return (
    <section id="pros-cons" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Преимущества и недостатки трудоустройства в нефтяной отрасли
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-oil-light rounded-lg p-6 shadow-md border border-pink-200">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Преимущества
            </h3>
            <div className="space-y-4">
              {advantages.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-md shadow-sm border border-pink-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-oil-light rounded-lg p-6 shadow-md border border-pink-200">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Недостатки
            </h3>
            <div className="space-y-4">
              {disadvantages.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-md shadow-sm border border-pink-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;
