import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-50 border-t border-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Нефтяное дело: как начать путь</h2>
            <p className="text-gray-700">Проектная работа 2025</p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Контакты</h3>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:irinapodlesnaa76@gmail.com" className="hover:text-pink-600 transition-colors">
                irinapodlesnaa76@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">
              Все права защищены © 2025
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Информация представлена в образовательных целях
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
