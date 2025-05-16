import React, { useState } from 'react';
import { faqimg } from '../../data';

const FAQSection = ({read=false}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
  {
    question: '💼 Q1. What is a Prop Firm and How Does It Work?',
    answer:
      'WealthX is a proprietary trading firm that funds skilled traders with company capital to trade the markets. You don’t risk your own money — we take the risk, and you keep up to 80% of the profits. It’s the safest and fastest way to grow for serious traders.',
  },
  {
    question: '💰 Q2. Is it Real Money or Just Demo Trading?',
    answer:
      '100% real capital. Once you pass our evaluation, you get live funded accounts. You trade real markets, earn real profits, and receive real payouts — up to 80% of what you make. No demos. No gimmicks.',
  },
  {
    question: '📉 Q3. What if I Lose Money While Trading?',
    answer:
      'You don’t lose your own money — we absorb the risk. Funded traders have defined drawdown limits, so your downside is protected. You’ll never owe us anything if you lose. Just focus on smart trading.',
  },
  {
    question: '💵 Q4. How Much Can I Earn?',
    answer:
      'Your earnings depend on your performance. The more consistently you trade, the more we scale your capital. You trade. We fund. You earn — simple as that.',
  },
  {
    question: '🧪 Q5. What’s the Evaluation Process?',
    answer:
      'Pay a small one-time fee of ₹3,400. You’ll get ₹3.5 Lakh in demo capital to hit a 10% profit target with a max drawdown of 6%. No hidden rules. Pass the test, and you’re instantly funded.',
  },
  {
    question: '🔓 Q6. Are There Any Hidden Charges or Subscriptions?',
    answer:
      'None. We believe in transparency. There are no monthly fees or hidden costs — just a one-time fee to start, and everything is clearly laid out.',
  },
  {
    question: '🧑‍💻 Q7. I’m a Beginner. Can I Still Join?',
    answer:
      'Absolutely — as long as you’re committed to learning. We offer mentorship, a trader community, and daily feedback to help you improve and succeed.',
  },
  {
    question: '⏱ Q8. How Fast Can I Get Funded?',
    answer:
      'Most traders get funded within 1–2 days. There’s no long waiting or interviews. Perform well, hit the targets, and get access to real capital — fast.',
  },
  {
    question: '📲 Q9. How Will I Receive My Profits?',
    answer:
      'Withdrawals are quick and easy via UPI, Bank Transfer, or Wallets. Profits are processed every Monday once booked — no delays.',
  },
  {
    question: '🔥 Q10. Why Should I Choose WealthX Over Others?',
    answer:
      'We’re India’s most affordable and trader-first prop firm. Real-money accounts, up to 80% profit share, no traps, and built specifically for Indian traders. We’re here to fund you — not fool you.',
  },
];


  return (
    <section className="pt-12 pb-12 flex flex-col gap-4">
      {/* ✨ Star widgets above heading */}
      <div className="flex justify-center gap-2 text-xl md:text-2xl text-yellow-400 animate-pulse">
        <span>✨</span>
        <span>🌟</span>
        <span>💫</span>
      </div>

      {/* top center part */}
      <h3 className="text-center text-[#9ad953] font-semibold">Faq's</h3>
      <h1 className="text-center text-white font-semibold text-xl">Frequently Asked Question</h1>

      {/* Decorative separator line */}
      <div className="w-24 h-1 mx-auto mt-1 mb-6 bg-[#9ad953] rounded-full"></div>

      <div className="flex flex-wrap lg:flex-nowrap gap-12 justify-between px-6 md:px-32 pt-12 items-center">
        {/* bottom left part */}
        <div className="flex flex-col gap-5">
          <div className="w-full max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item w-auto bg-gray-900 text-white rounded-lg overflow-hidden mb-4">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center px-6 md:px-10 py-4 cursor-pointer duration-500 transition-all"
                >
                  <p className="text-base sm:text-lg md:text-xl font-medium w-[90%]">{faq.question}</p>
                  <span className="toggle-icon w-9 h-9 flex justify-center items-center rounded-lg text-white text-2xl font-bold border-white border-2">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={`faq-answer px-6 md:px-10 pb-4 opacity-0 transition-all duration-300 transform ${activeIndex === index ? 'scale-100 opacity-100 duration-500 transition-all' : 'hidden scale-95 opacity-0 duration-500 transition-all'}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom right part with badge */}
        <div className={`relative w-fit mt-4 ${read?'hidden':''}`}>
          <img src={faqimg} alt="Question img" className="w-[300px] md:w-[500px]" />
          {/* Hot badge */}
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            ⭐ Hot FAQs
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
