
import React from 'react';
import { ShieldCheckIcon, ClockIcon, StarIcon, UsersIcon } from './icons';

const Feature: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-brand-gold">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-gray-400 mt-1">{text}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1542375372-8354b2361db4?q=80&w=1964&auto=format&fit=crop" 
                            alt="Técnico especialista da Clima Certo" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Compromisso com a Perfeição</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Nossa missão é transcender o padrão. Somos parceiros dedicados a entregar não apenas climatização, mas uma experiência de conforto, bem-estar e sofisticação.
                        </p>
                        <div className="space-y-6">
                            <Feature 
                                icon={<UsersIcon className="h-7 w-7"/>}
                                title="Especialistas Certificados"
                                text="Nossa equipe é formada por profissionais de elite, em constante treinamento para dominar as tecnologias mais avançadas."
                            />
                            <Feature 
                                icon={<ShieldCheckIcon className="h-7 w-7"/>}
                                title="Garantia de Qualidade Superior"
                                text="Trabalhamos exclusivamente com peças originais e as melhores marcas, assegurando a durabilidade e performance do seu investimento."
                            />
                            <Feature 
                                icon={<ClockIcon className="h-7 w-7"/>}
                                title="Pontualidade e Eficiência"
                                text="Respeitamos seu tempo com agendamentos precisos e uma execução ágil, minimizando qualquer inconveniente."
                            />
                            <Feature 
                                icon={<StarIcon className="h-7 w-7"/>}
                                title="Atendimento Exclusivo"
                                text="Oferecemos um serviço personalizado, transparente e focado em superar suas expectativas."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
