
import React from 'react';
import { SnowflakeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#inicio" className="flex items-center justify-center md:justify-start gap-2">
              <SnowflakeIcon className="h-8 w-8 text-brand-gold" />
              <span className="text-xl font-bold">Clima Certo</span>
            </a>
            <p className="mt-2 text-gray-400">Excelência em climatização.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-2">Contato Rápido</h4>
            <p className="text-gray-400">(11) 99999-8888</p>
            <p className="text-gray-400">contato@climacerto.com.br</p>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Clima Certo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
