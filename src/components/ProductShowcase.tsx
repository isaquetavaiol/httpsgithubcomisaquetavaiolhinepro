import React, { useState } from 'react';
import { Star, Shield, Droplets, Sparkles, Play, MessageCircle, Users, Trophy } from 'lucide-react';

interface TabData {
  id: string;
  title: string;
  content: React.ReactNode;
}

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('produto');

  const tabs: TabData[] = [
    {
      id: 'produto',
      title: 'Produto',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1609264122230-f2d7d6b3b4b7?w=400&h=400&fit=crop&crop=center" 
                  alt="HinePro Cera Automotiva - Pote de cera premium"
                  className="w-72 h-72 object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Premium
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">HinePro</h2>
                <p className="text-green-400 text-xl mb-4">Cera Automotiva Premium</p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-300 ml-2">(4.9/5 - 127 avaliações)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Proteção UV avançada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Repelente de água</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Brilho duradouro até 6 meses</span>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">R$ 89,90</p>
                <p className="text-gray-400 text-sm">ou 3x de R$ 29,97 sem juros</p>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'aplicacao',
      title: 'Como Aplicar',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Como aplicar o HinePro</h3>
            <p className="text-gray-300">Siga estes passos simples para obter o melhor resultado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Prepare a superfície',
                description: 'Lave e seque completamente o veículo. Remova todos os resíduos e sujeiras da superfície.'
              },
              {
                step: '02',
                title: 'Aplique HinePro',
                description: 'Use movimentos circulares para aplicar uma fina camada da cera com um pano de microfibra.'
              },
              {
                step: '03',
                title: 'Remova o excesso',
                description: 'Aguarde secar (15-20 min) e remova o excesso com pano limpo e seco em movimentos lineares.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Play className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Vídeo Tutorial</h4>
            <p className="text-gray-300 mb-4">Assista ao tutorial completo de aplicação</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
              Assistir Vídeo
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'avaliacoes',
      title: 'Avaliações',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Avaliações dos Clientes</h3>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white ml-2 text-xl">4.9/5</span>
            </div>
            <p className="text-gray-300">Baseado em 127 avaliações verificadas</p>
          </div>

          <div className="grid gap-6">
            {[
              {
                name: 'Carlos Mendes',
                rating: 5,
                comment: 'Excelente produto! O brilho durou mais de 4 meses no meu carro. Recomendo fortemente.',
                date: '15 dias atrás'
              },
              {
                name: 'Ana Silva',
                rating: 5,
                comment: 'Fácil aplicação e resultado incrível. A água escorre como nunca vi antes.',
                date: '1 semana atrás'
              },
              {
                name: 'Roberto Santos',
                rating: 4,
                comment: 'Boa cera, cumpre o que promete. O preço está adequado pela qualidade.',
                date: '3 dias atrás'
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
              Ver Todas as Avaliações
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'contato',
      title: 'Contato',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Entre em Contato</h3>
            <p className="text-gray-300">Tire suas dúvidas sobre o HinePro</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <MessageCircle className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
                <p className="text-gray-300 mb-4">Fale conosco diretamente</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Chamar no WhatsApp
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <Users className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Suporte</h4>
                <p className="text-gray-300 mb-4">suporte@hinepro.com</p>
                <p className="text-gray-400 text-sm">Respondemos em até 2 horas</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Envie uma Mensagem</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
                />
                <textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-white">HinePro</span>
            </div>
            <div className="flex items-center gap-6">
              <Trophy className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">Premium Quality</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">HinePro</span>
            <br />
            <span className="text-green-400">Cera Premium</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A melhor proteção e brilho para o seu veículo. Desenvolvida com tecnologia avançada para resultados profissionais.
          </p>
        </div>
      </section>

      {/* Dynamic Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Tab Navigation with Dynamic Island */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-full p-2 inline-flex gap-2 relative">
              {/* Dynamic Background */}
              <div 
                className="absolute top-2 bg-green-500 rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width: `${100 / tabs.length}%`,
                  height: 'calc(100% - 16px)',
                  left: `calc(${tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length)}% + 8px)`,
                }}
              />
              
              {/* Tab Buttons */}
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-900 rounded-2xl p-8">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-lg font-bold text-white">HinePro</span>
          </div>
          <p className="text-gray-400">© 2025 HinePro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductShowcase;
