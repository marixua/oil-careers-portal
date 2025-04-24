import React from 'react';

const CareerSection: React.FC = () => {
  const careerPaths = [
    {
      title: "Техническая карьера",
      description: "Развитие в качестве технического специалиста с углублением экспертизы в конкретной области нефтяной промышленности",
      levels: [
        "Младший специалист / техник",
        "Специалист / инженер",
        "Старший специалист / инженер",
        "Ведущий специалист / инженер",
        "Главный специалист / эксперт"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Управленческая карьера",
      description: "Развитие в сфере управления людьми и проектами, с фокусом на организаторские и лидерские навыки",
      levels: [
        "Руководитель группы / бригады",
        "Начальник участка / отдела",
        "Руководитель направления",
        "Директор департамента",
        "Топ-менеджмент компании"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Научно-исследовательская карьера",
      description: "Развитие в области разработки новых технологий и методов в нефтяной промышленности",
      levels: [
        "Лаборант / младший научный сотрудник",
        "Научный сотрудник",
        "Старший научный сотрудник",
        "Руководитель исследовательской группы",
        "Директор научно-исследовательского центра"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="career" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Карьерные возможности в нефтяной промышленности
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-oil-light rounded-lg overflow-hidden shadow-md border border-pink-200 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mb-3">
                    {path.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">{path.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6 text-center">{path.description}</p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200"></div>
                  <div className="space-y-4">
                    {path.levels.map((level, levelIndex) => (
                      <div key={levelIndex} className="relative pl-10">
                        <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-pink-400 transform -translate-x-1/2"></div>
                        <div className="bg-white rounded-md p-3 shadow-sm border border-pink-100">
                          <p className="text-gray-800">{level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-pink-50 rounded-lg shadow-sm border border-pink-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Важно знать о карьере в нефтяной отрасли:</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Карьерный рост требует постоянного повышения квалификации и обучения</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Готовность к переездам и работе в различных регионах дает преимущество</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Опыт работы в международных проектах ценится высоко</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Английский язык является почти обязательным требованием для высоких должностей</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
