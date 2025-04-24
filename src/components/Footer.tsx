import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Нефтяное дело: как начать путь</h2>
            <p className="text-pink-200">Проектная работа 2025</p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-2">Контактная информация</h3>
            <p className="text-pink-200">Email: irinapodlesnaa76@gmail.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-pink-700 text-center">
          <p className="text-pink-200 text-sm">
            © 2025 Все права защищены. Информация предоставлена в образовательных целях.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
