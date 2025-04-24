import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Технические навыки',
      skills: [
        'Знание физических и химических свойств нефти и газа',
        'Понимание процессов бурения, добычи и переработки',
        'Умение работать со специализированным оборудованием',
        'Знание технологий увеличения нефтеотдачи пластов',
        'Владение методами геофизических исследований'
      ]
    },
    {
      title: 'Цифровые компетенции',
      skills: [
        'Работа с программным обеспечением для моделирования месторождений',
        'Анализ больших данных (Big Data)',
        'Использование систем автоматизированного проектирования (САПР)',
        'Применение технологий искусственного интеллекта',
        'Владение геоинформационными системами (ГИС)'
      ]
    },
    {
      title: 'Личные качества',
      skills: [
        'Ответственность и дисциплинированность',
        'Стрессоустойчивость',
        'Способность принимать решения в нестандартных ситуациях',
        'Готовность работать в сложных климатических условиях',
        'Внимательность к деталям'
      ]
    }
  ];

  const languages = [
    'Английский язык (для работы с международной документацией и в иностранных компаниях)',
    'Технический английский (специализированная терминология)',
    'Язык страны, где планируется работать (при стремлении к международной карьере)'
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Необходимые навыки, знания и качества для работы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-pink-700">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-pink-900">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-pink-200 bg-white shadow-sm mb-10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-pink-700">Знание языков</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {languages.map((language, index) => (
                <li key={index} className="text-pink-900">{language}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="p-6 bg-pink-100 rounded-lg border border-pink-200 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-pink-700 mb-3">Постоянное развитие</h3>
          <p className="text-pink-900">
            Нефтяная отрасль постоянно развивается, внедряются новые технологии и подходы. 
            Специалистам необходимо постоянно обновлять свои знания, следить за инновациями 
            в отрасли и быть готовыми адаптироваться к изменениям. Важно развивать навыки 
            самообразования и критического мышления.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
