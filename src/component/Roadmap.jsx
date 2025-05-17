import React, { useEffect, useRef } from "react";
import { AffordableTrading, bgImg, BiggestMistake, FundsProblem, Get50Lakh, GrowWithUs, MostTrusted, NoCapital, SkillNeed, StopScrolling } from "../data";
import EarningSection from "./home/EarningSection";
import Marquee from "react-fast-marquee";
import Header from "./home/Header";

const Roadmap = () => {
  const scrollLineRef = useRef(null);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current || !scrollLineRef.current) return;

      const rect = roadmapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      scrollLineRef.current.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger once to initialize
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgData = [
    FundsProblem,
    AffordableTrading,
    FundsProblem,
    MostTrusted,
    Get50Lakh,
    BiggestMistake,
    GrowWithUs,
    NoCapital,
    SkillNeed,
    StopScrolling,
  ]

  const obj={title:'WealthX', para:'Resource', para2:'Roadmap'}

  return (
    <>
      {/* TailwindCSS CDN is assumed loaded globally or via postcss */}
      <style>{`
        /* Menu styles - only needed if menu is implemented */
        .roadmap-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          background-color: #9ad953;
          transform: translateX(-50%);
          height: 0%;
          transition: height 0.2s ease-out;
          z-index: 0;
        }
      `}</style>

      <main className="bg-[#1F1F1F] text-white text-sm md:text-base lg:text-lg">
        {/* Header */}
        <Header title={'Roadmap'} obj={obj}/>

        {/* Roadmap Section */}
        <section className="py-10 px-4 bg-[#1F1F1F] relative">
          <h2 className="text-3xl font-bold text-center mb-10">Roadmap</h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
            We are constantly updating our roadmap to bring transparency for our
            users and to get your feedback – please tell us what is important
            for you!
          </p>

          <div
            ref={roadmapRef}
            className="roadmap-container relative ml-4 md:ml-1 md:pl-0 md:pr-8 md:grid md:grid-cols-2 md:gap-8"
          >
            {/* Scroll line */}
            <div
              id="scroll-line"
              ref={scrollLineRef}
              className="absolute md:left-1/2 top-0 w-[2px] h-0 bg-[#9AD953] -translate-x-1/2 z-0"
            ></div>

            {/* Items */}

            {/* Item 1 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 lg:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2010 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  The Idea Was Born
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Started as a small group of traders focusing on NIFTY 50 and
                  SENSEX. Traded manually with personal capital and high
                  conviction swing strategies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="mb-10 md:mt-48 md:col-start-2 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2012 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  {" "}
                  Building the Base
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Developed edge in BANK NIFTY options through price action and
                  volume analysis. Created a small capital pool to back top
                  performers within the team.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2014 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  Data-Driven Shift
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Started using Excel + TradingView for backtesting. Introduced
                  risk-reward based strategies with stop loss discipline. Market
                  exposure expanded to commodities (Gold, Crude).
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2016 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  Crypto Curiosity
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Started experimenting with Bitcoin and Ethereum. Executed
                  first trades on Indian crypto exchanges. Built arbitrage bots
                  for BTC-INR pairs.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2018 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  The Turning Point
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Consistently profitable strategies in both Bank Nifty options
                  and crypto futures. Developed in-house risk management rules
                  and capital allocation frameworks.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2020 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  The Vision Expanded
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Launched internal funded trader challenge. Evaluated over 100
                  traders on demo before funding them with live capital. Added
                  weekend crypto trading as a unique opportunity for traders.
                </p>
              </div>
            </div>

            {/* Item 7 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2022 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  Official Funded Account Launch
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Launched public platform for Indian traders to access real
                  capital. Segmented funding in equities, indices, and crypto.
                  Onboarded 500+ traders with scalable accounts.
                </p>
              </div>
            </div>

            {/* Item 8 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2023 –
                </h3>
                <h3 className="text-xl font-bold text-left">Tech + Talent</h3>
                <p className="text-gray-500 mt-2 text-left">
                  Launched AI-based evaluation metrics. Integrated advanced
                  trader dashboards with PNL tracking, drawdown alerts, and
                  leaderboards. Expanded crypto coverage to include DeFi tokens.
                </p>
              </div>
            </div>

            {/* Item 9 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2024 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  Pan India + Global Traders
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Scaled platform to 15+ cities in India. Partnered with crypto
                  exchanges for smooth payouts. Introduced “Weekend Hustle”
                  program for crypto-only traders. Over ₹2 crore funded to
                  Indian traders in a single year.
                </p>
              </div>
            </div>

            {/* Item 10 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  📍 2025 –
                </h3>
                <h3 className="text-xl font-bold text-left">
                  The Revolution Continues
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Launching mobile app for trading performance + instant
                  payouts. Expanding funded programs to commodities & forex.
                  Building India’s first crypto + equity hybrid evaluation
                  model. Goal: Fund 5,000 traders by end of year.
                </p>
              </div>
            </div>

            {/* Item 11 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">
                  💡 What’s Next?
                </h3>
                <h3 className="text-xl font-bold text-left">
                  Instant evaluation funding model.
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Real-time trade coaching by elite funded traders. First
                  “Trader’s Summit India” – crypto & equity combined. Goal:
                  Empower every Indian with a smartphone to trade smart, trade
                  funded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling of Greent tab Section */}

        <section className="bg-[#1F1F1F] overflow-hidden w-full">
          <div className="relative w-full">
            <Marquee speed={45} gradient={false}>
              <div className="flex gap-12 sm:gap-16 items-center whitespace-nowrap min-w-max px-4">
                {
                  imgData.map((itm,idx)=>(
                    <img src={itm} alt={itm} key={idx} 
                  className="h-70 sm:h-120 rounded-4xl opacity-70 w-auto"
                  />
                  ))
                }
                {/* Duplicate logos for smooth infinite scroll */}
                {
                  imgData.map((itm,idx)=>(
                    <img src={itm} alt={itm} key={idx} 
                  className="h-70 sm:h-120 rounded-4xl opacity-70 w-auto"
                  />
                  ))
                }
              </div>
            </Marquee>
          </div>
        </section>

        {/* Earning Section */}
        <EarningSection />
      </main>
    </>
  );
};

export default Roadmap;
