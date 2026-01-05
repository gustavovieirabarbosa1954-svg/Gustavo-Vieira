
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527335480258-54817a81415f?q=80&w=2070&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-shadow-md">
          Excelência e Sofisticação em Climatização
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Conforto e design para seu ambiente. Qualidade e confiança em cada detalhe.
        </p>
        <a href="#servicos" className="border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-md text-lg hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
          Conheça Nossos Serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;
