import React from 'react';

const SkillsSection: React.FC = () => {
  const technicalSkills = [
    "Знание основ геологии и геофизики",
    "Понимание процессов добычи нефти и газа",
    "Умение работать со специализированным ПО (например, Petrel, Eclipse)",
    "Знание технологий бурения и обслуживания скважин",
    "Навыки работы с технической документацией",
    "Понимание процессов нефтепереработки",
    "Знание основ нефтехимии",
    "Навыки сбора и анализа полевых данных"
  ];

  const softSkills = [
    "Умение работать в команде",
    "Ответственность и дисциплинированность",
    "Стрессоустойчивость",
    "Готовность к обучению",
    "Аналитическое мышление",
    "Внимательность к деталям",
    "Навыки решения проблем",
    "Эффективная коммуникация"
  ];

  const personalQualities = [
    {
      quality: "Выносливость",
      description: "Работа в полевых условиях и на производстве требует физической выносливости и готовности к физическим нагрузкам"
    },
    {
      quality: "Внимательность",
      description: "Необходимо тщательно следить за показаниями приборов, состоянием оборудования и соблюдением технологических процессов"
    },
    {
      quality: "Техническая грамотность",
      description: "Понимание принципов работы сложного оборудования и технологических процессов"
    },
    {
      quality: "Ответственность",
      description: "Ошибки в нефтяной промышленности могут иметь серьезные последствия, поэтому требуется высокий уровень ответственности"
    },
    {
      quality: "Адаптивность",
      description: "Готовность работать в разных условиях, включая удаленные локации и сложные климатические условия"
    },
    {
      quality: "Непрерывное обучение",
      description: "Стремление постоянно обновлять свои знания и осваивать новые технологии"
    }
  ];

  const additionalSkills = [
    {
      skill: "Иностранные языки",
      description: "Английский язык является международным языком нефтяной промышленности. Его знание открывает возможности для работы в международных проектах и компаниях"
    },
    {
      skill: "Экологическая грамотность",
      description: "Понимание принципов защиты окружающей среды и методов минимизации негативного влияния нефтедобычи"
    },
    {
      skill: "Экономические знания",
      description: "Понимание экономики нефтяной отрасли помогает в принятии решений и оценке эффективности проектов"
    },
    {
      skill: "Управление проектами",
      description: "Навыки планирования, координации и контроля проектов ценятся на руководящих позициях"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Навыки, знания и качества для работы в нефтяной промышленности
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-oil-light rounded-lg p-6 shadow-md border border-pink-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Технические навыки
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-start bg-white p-3 rounded-md shadow-sm border border-pink-100">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-oil-light rounded-lg p-6 shadow-md border border-pink-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Гибкие навыки (Soft skills)
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-start bg-white p-3 rounded-md shadow-sm border border-pink-100">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Личные качества
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {personalQualities.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-pink-100">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.quality}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Дополнительные навыки, повышающие конкурентоспособность
          </h3>
          
          <div className="bg-oil-light rounded-lg p-6 shadow-md border border-pink-200">
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalSkills.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-pink-100">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item.skill}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
