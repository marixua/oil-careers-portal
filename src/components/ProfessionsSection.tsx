import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfessionsSection: React.FC = () => {
  const professions = [
    {
      title: 'Инженер-нефтяник',
      description: 'Разрабатывает и внедряет технологии для эффективной добычи нефти и газа, занимается проектированием скважин и оборудования.'
    },
    {
      title: 'Геолог-нефтяник',
      description: 'Изучает строение земной коры для поиска и оценки нефтяных и газовых месторождений, определяет места для бурения новых скважин.'
    },
    {
      title: 'Буровой мастер',
      description: 'Руководит процессом бурения скважин, контролирует соблюдение технологии, отвечает за безопасность на буровой площадке.'
    },
    {
      title: 'Оператор нефтепереработки',
      description: 'Управляет процессами переработки нефти в различные продукты, контролирует работу оборудования на нефтеперерабатывающих заводах.'
    },
    {
      title: 'Специалист по экологической безопасности',
      description: 'Обеспечивает соблюдение экологических норм при добыче и переработке нефти, разрабатывает меры по минимизации вреда окружающей среде.'
    },
    {
      title: 'Аналитик нефтяного рынка',
      description: 'Изучает тенденции нефтяного рынка, проводит экономический анализ и прогнозирование для принятия управленческих решений.'
    }
  ];

  return (
    <section id="professions" className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Основные профессии в нефтяной промышленности
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((profession, index) => (
            <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-pink-700">{profession.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-900">{profession.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionsSection;
