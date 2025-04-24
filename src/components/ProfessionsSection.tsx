import React from 'react';

const ProfessionsSection: React.FC = () => {
  const professions = [
    {
      title: "Геолог-нефтяник",
      description: "Исследует породы на наличие нефтяных месторождений, анализирует данные для определения перспективных мест бурения.",
      education: "Геологический факультет, специализация в нефтяной геологии",
      career: "От младшего геолога до главного геолога компании"
    },
    {
      title: "Буровой инженер",
      description: "Разрабатывает планы бурения скважин, контролирует процесс и решает технические проблемы при бурении.",
      education: "Нефтегазовый факультет, специальность «Бурение нефтяных и газовых скважин»",
      career: "От помощника бурильщика до руководителя буровой установки"
    },
    {
      title: "Инженер-нефтяник",
      description: "Управляет процессами добычи нефти, оптимизирует методы извлечения, контролирует оборудование.",
      education: "Нефтегазовый факультет, специальность «Разработка нефтяных и газовых месторождений»",
      career: "От полевого инженера до технического директора"
    },
    {
      title: "Химик-технолог",
      description: "Разрабатывает и контролирует процессы переработки нефти, создаёт новые методы очистки и переработки.",
      education: "Химико-технологический факультет со специализацией в нефтехимии",
      career: "От лаборанта до главного технолога нефтеперерабатывающего завода"
    },
    {
      title: "Экологический инженер",
      description: "Предотвращает и минимизирует воздействие нефтедобычи на окружающую среду, разрабатывает природоохранные мероприятия.",
      education: "Экологический факультет или инженерная экология",
      career: "От специалиста по охране окружающей среды до директора по экологической безопасности"
    },
    {
      title: "Специалист по логистике",
      description: "Организует транспортировку нефти и нефтепродуктов, оптимизирует логистические цепочки.",
      education: "Логистика, управление цепями поставок",
      career: "От логиста до директора по логистике"
    }
  ];

  return (
    <section id="professions" className="py-16 bg-oil-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Основные профессии в нефтяной промышленности
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((profession, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-pink-300 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{profession.title}</h3>
                <p className="text-gray-700 mb-4">{profession.description}</p>
                
                <div className="border-t border-pink-100 pt-4 mt-4">
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 w-5 h-5 text-pink-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-800">
                      <strong>Образование:</strong> {profession.education}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 text-pink-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-800">
                      <strong>Карьерный путь:</strong> {profession.career}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionsSection;
