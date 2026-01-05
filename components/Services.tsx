
import React, { useState } from 'react';
import { CogIcon, SparklesIcon, PlusCircleIcon, WrenchIcon } from './icons';

const services = [
  {
    icon: <CogIcon className="h-10 w-10 text-brand-gold" />,
    title: 'Manutenção Preventiva e Corretiva',
    description: 'Asseguramos a máxima performance e longevidade do seu equipamento com planos de manutenção detalhados.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-brand-gold" />,
    title: 'Higienização Premium',
    description: 'Nosso processo de limpeza profunda utiliza produtos de ponta para purificar o ar e proteger sua saúde.',
  },
  {
    icon: <PlusCircleIcon className="h-10 w-10 text-brand-gold" />,
    title: 'Instalação de Alta Precisão',
    description: 'Executamos projetos de instalação para todos os modelos, seguindo rigorosamente as normas técnicas.',
  },
  {
    icon: <WrenchIcon className="h-10 w-10 text-brand-gold" />,
    title: 'Reparos e Diagnósticos',
    description: 'Diagnosticamos e solucionamos qualquer tipo de problema, restaurando o conforto do seu ambiente com agilidade.',
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Serviços de Excelência</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Soluções completas e personalizadas para sua necessidade.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded"></div>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bg-gray-900 p-8 rounded-lg border border-gray-800 
                flex flex-col items-center text-center 
                transition-all duration-500 ease-in-out transform
                ${hoveredIndex === index ? 'scale-105 z-10 shadow-2xl shadow-black' : ''}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 blur-sm scale-95' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 h-14 flex items-center justify-center">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>
              <a 
                href="#contato" 
                className="
                  mt-8 inline-block border border-brand-gold text-brand-gold 
                  font-semibold py-2 px-6 rounded-md 
                  hover:bg-brand-gold hover:text-brand-dark 
                  transition-colors duration-300
                "
              >
                Faça seu Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
