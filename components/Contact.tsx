
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the data to a server
  };

  return (
    <section id="contato" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Fale Conosco</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Pronto para o próximo nível de conforto? Solicite um orçamento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 p-8 sm:p-12 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Agradecemos seu contato!</h3>
              <p className="text-gray-300">Sua mensagem foi recebida. Em breve, um de nossos especialistas entrará em contato.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Nome Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">Telefone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-300 font-semibold mb-2">Serviço Desejado</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" required>
                  <option value="">Selecione um serviço</option>
                  <option value="Manutenção">Manutenção Preventiva</option>
                  <option value="Limpeza">Limpeza e Higienização</option>
                  <option value="Instalação">Instalação</option>
                  <option value="Reparo">Reparo e Conserto</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="Descreva sua necessidade..."></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-12 rounded-lg text-lg hover:bg-brand-gold-hover transition-all duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                  Enviar Solicitação
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
