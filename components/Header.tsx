
import React, { useState } from 'react';
import { SnowflakeIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#contato', label: 'Contato' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-brand-dark/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <SnowflakeIcon className="h-8 w-8 text-brand-gold" />
          <span className="text-xl font-bold text-white">Clima Certo</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-brand-gold font-medium transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:inline-block bg-brand-gold text-brand-dark font-semibold px-5 py-2 rounded-md hover:bg-brand-gold-hover transition-all duration-300 shadow-sm">
          Solicitar Orçamento
        </a>
        
        <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark shadow-lg border-t border-gray-700/50">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-gray-300 hover:text-brand-gold font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={toggleMenu} className="bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-md hover:bg-brand-gold-hover transition-all duration-300 shadow-sm w-4/5 text-center">
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
