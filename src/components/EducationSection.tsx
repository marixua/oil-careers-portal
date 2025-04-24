import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection: React.FC = () => {
  const educationOptions = [
    {
      level: 'Среднее профессиональное образование',
      programs: [
        'Бурение нефтяных и газовых скважин',
        'Разработка и эксплуатация нефтяных и газовых месторождений',
        'Переработка нефти и газа',
        'Сооружение и эксплуатация газонефтепроводов и газонефтехранилищ'
      ],
      duration: '3-4 года после 9 класса, 2-3 года после 11 класса'
    },
    {
      level: 'Высшее образование (бакалавриат)',
      programs: [
        'Нефтегазовое дело',
        'Геология нефти и газа',
        'Химическая технология природных энергоносителей',
        'Машины и оборудование нефтяных и газовых промыслов'
      ],
      duration: '4 года'
    },
    {
      level: 'Высшее образование (магистратура)',
      programs: [
        'Управление разработкой месторождений нефти и газа',
        'Моделирование нефтегазовых процессов',
        'Геология и геохимия нефти и газа',
        'Технология переработки углеводородов'
      ],
      duration: '2 года после бакалавриата'
    }
  ];

  const topUniversities = [
    'Российский государственный университет нефти и газа имени И.М. Губкина',
    'Санкт-Петербургский горный университет',
    'Уфимский государственный нефтяной технический университет',
    'Тюменский индустриальный университет',
    'Казанский (Приволжский) федеральный университет'
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Получение образования в нефтяной промышленности
        </h2>
        
        <div className="space-y-8">
          {educationOptions.map((option, index) => (
            <Card key={index} className="border-pink-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-pink-700">{option.level}</CardTitle>
                <p className="text-sm text-pink-500">Продолжительность обучения: {option.duration}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-pink-800 mb-2">Основные направления подготовки:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {option.programs.map((program, programIndex) => (
                    <li key={programIndex} className="text-pink-900">{program}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="border-pink-200 bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-pink-700">Ведущие учебные заведения</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {topUniversities.map((university, index) => (
                  <li key={index} className="text-pink-900">{university}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="p-6 bg-pink-100 rounded-lg border border-pink-200 shadow-sm">
            <h3 className="text-xl font-semibold text-pink-700 mb-3">Дополнительное профессиональное образование</h3>
            <p className="text-pink-900 mb-4">
              Помимо основного образования, специалисты нефтяной отрасли регулярно повышают квалификацию через:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-pink-900">Курсы повышения квалификации (от нескольких дней до нескольких месяцев)</li>
              <li className="text-pink-900">Профессиональную переподготовку (от 250 часов)</li>
              <li className="text-pink-900">Корпоративные обучающие программы крупных нефтяных компаний</li>
              <li className="text-pink-900">Международные сертификационные программы</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
