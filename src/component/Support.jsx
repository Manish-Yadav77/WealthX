import React from 'react';
import Header from './home/Header';
import FAQSection from './home/FAQSection';
import EarningSection from './home/EarningSection';

const Support = () => {
  const cards = [
    {
      icon: 'fa-regular fa-user',
      title: 'Beginner Course',
      description:
        'Trading is not without its challenges, as markets can be highly volatile and unpredictable. It requires discipline',
    },
    {
      icon: 'fas fa-tools',
      title: 'Trading Tools',
      description:
        'Trading is not without its challenges, as markets can be highly volatile and unpredictable. It requires discipline',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Stocks and CFDs',
      description:
        'Trading is not without its challenges, as markets can be highly volatile and unpredictable. It requires discipline',
    },
  ];

  return (
    <>
    {/* Header */}
    <Header/>
    
    {/* support section */}
    <section className="flex flex-col items-center justify-center mt-10 px-6 gap-6">
      <h1 className="text-xl md:text-4xl font-semibold">
        Anytime Support from our team
      </h1>
      <p className="text-gray-400 text-center md:w-1/3">
        We're constantly improving our trading platform, trying to make it the
        best on the market. such as stocks
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 px-6 md:px-40 pb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg shadow-lg bg-[#1F1F1F] flex flex-col items-center w-full text-white hover:text-black hover:bg-[#9ad953] transition-all duration-700"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center justify-center bg-black w-20 h-20 mb-6 rounded-full">
                <i className={`${card.icon} text-[#9AD953] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="text-center text-gray-400 group-hover:text-black">
              {card.description}
            </p>
            <div className="btn-group">
              <button
                type="button"
                className="group/btn hover:cursor-pointer mt-6 relative inline-block font-semibold"
              >
                <span className="border-b-2 border-white/30 group-hover:border-black pb-1 pr-3 transition-all duration-300">
                  Learn More
                </span>
                <i className="fa fa-arrow-right group-hover/btn:rotate-[-60deg] transition-all duration-700 pl-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* FAQ Section */}
    <FAQSection/>

{/* Earning Section */}
    <EarningSection/>
    </>
  );
};

export default Support;
