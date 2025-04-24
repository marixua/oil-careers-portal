import React from 'react';

const EducationSection: React.FC = () => {
  const educationOptions = [
    {
      level: "Среднее профессиональное образование",
      duration: "3-4 года",
      positions: "Техник, оператор оборудования, лаборант",
      examples: [
        "Нефтяные техникумы",
        "Колледжи нефти и газа",
        "Технические колледжи с профильными отделениями"
      ]
    },
    {
      level: "Бакалавриат",
      duration: "4 года",
      positions: "Инженер, геолог, технолог",
      examples: [
        "Нефтегазовое дело",
        "Геология нефти и газа",
        "Химическая технология нефти и газа",
        "Разработка и эксплуатация нефтяных и газовых месторождений"
      ]
    },
    {
      level: "Магистратура",
      duration: "2 года",
      positions: "Ведущий инженер, руководитель проекта, научный сотрудник",
      examples: [
        "Инновационные технологии в нефтегазовом деле",
        "Моделирование нефтегазовых процессов",
        "Экономика нефтегазовой отрасли",
        "Управление нефтегазовыми проектами"
      ]
    },
    {
      level: "Аспирантура",
      duration: "3-4 года",
      positions: "Научный работник, преподаватель, ведущий специалист",
      examples: [
        "Научные исследования в нефтегазовой сфере",
        "Разработка новых методов добычи и переработки"
      ]
    }
  ];

  const topUniversities = [
    "Российский государственный университет нефти и газа имени И.М. Губкина",
    "Уфимский государственный нефтяной технический университет",
    "Тюменский индустриальный университет",
    "Санкт-Петербургский горный университет",
    "Казанский (Приволжский) федеральный университет",
    "Московский государственный университет имени М.В. Ломоносова (геологический факультет)",
    "Томский политехнический университет"
  ];

  const additionalEducation = [
    {
      type: "Профессиональная переподготовка",
      description: "Получение новой квалификации, дает право работать в нефтяной отрасли специалистам из других сфер",
      duration: "от 250 часов"
    },
    {
      type: "Повышение квалификации",
      description: "Обновление знаний и навыков, изучение новых технологий",
      duration: "от 16 до 249 часов"
    },
    {
      type: "Корпоративное обучение",
      description: "Программы подготовки и развития персонала внутри нефтяных компаний",
      duration: "варьируется"
    },
    {
      type: "Онлайн-курсы и вебинары",
      description: "Дистанционное изучение отдельных аспектов нефтяной промышленности",
      duration: "гибкая"
    }
  ];

  return (
    <section id="education" className="py-16 bg-oil-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Получение образования в нефтяной промышленности
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
            <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            Уровни образования
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {educationOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-pink-100">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">{option.level}</h4>
                <div className="mb-3 flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Продолжительность: {option.duration}</span>
                </div>
                <div className="mb-3 flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Возможные должности: {option.positions}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Популярные направления:</p>
                  <ul className="space-y-1">
                    {option.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
            <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            Ведущие университеты России
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-100">
            <div className="grid md:grid-cols-2 gap-3">
              {topUniversities.map((university, index) => (
                <div key={index} className="flex items-center p-3 bg-pink-50 rounded-md">
                  <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-800">{university}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
            <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Дополнительное образование
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalEducation.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 border border-pink-100">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.type}</h4>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Длительность: {item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
