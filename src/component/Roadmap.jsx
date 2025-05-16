import React, { useEffect, useRef } from "react";
import { bgImg } from "../data";
import EarningSection from "./home/EarningSection";

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
        <div
          className="h-[210px] sm:h-[250px] md:h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div className="px-6 sm:px-12 md:px-40">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              Roadmap
            </h1>
            <p className="text-base sm:text-lg pt-2 flex gap-2 sm:gap-4 items-center font-medium text-white">
              <span>Tradez</span>
              <span className="text-xs sm:text-sm">&gt;</span>
              <span>Roadmap</span>
            </p>
          </div>
        </div>

        {/* Roadmap Section */}
        <section className="py-10 px-4 bg-[#1F1F1F] relative">
          <h2 className="text-3xl font-bold text-center mb-10">Roadmap</h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
            We are constantly updating our roadmap to bring transparency for our
            users and to get your feedback – please tell us what is important for
            you!
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
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2010</h3>
                <h3 className="text-xl font-bold text-left">Introduction to Forex</h3>
                <p className="text-gray-500 mt-2 text-left">
                  The Forex market is incredibly liquid ensuring that you can
                  enter and exit positions easily even with large amounts of
                  capital.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="mb-10 md:mt-48 md:col-start-2 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2012</h3>
                <h3 className="text-xl font-bold text-left">Trading Strategies</h3>
                <p className="text-gray-500 mt-2 text-left">
                  Trading Strategies – The world of finance offers a multitude of
                  opportunities for individuals seeking to build their wealth and
                  explore new horizons.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2014</h3>
                <h3 className="text-xl font-bold text-left">Trading Psychology</h3>
                <p className="text-gray-500 mt-2 text-left">
                  Trading Psychology – We’ll take you on a journey through the
                  fundamentals of Forex trading, how it works, and why it’s worth
                  exploring.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2016</h3>
                <h3 className="text-xl font-bold text-left">Economic Indicators</h3>
                <p className="text-gray-500 mt-2 text-left">
                  Economic Indicators – Currencies on the foreign exchange market
                  with the aim of making a profit. It’s the largest and most
                  liquid financial market.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="mb-10 md:col-start-1 md:text-right w-2/3 ml-10 md:ml-[33%]">
              <div className="relative md:mr-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2016</h3>
                <h3 className="text-xl font-bold text-left">Risk Management</h3>
                <p className="text-gray-500 mt-2 text-left">
                  Risk Management – With a daily trading volume that exceeds $6
                  trillion. Unlike traditional stock markets where you buy and
                  sell shares.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="mb-10 md:col-start-2 md:mt-48 w-2/3 ml-10 md:ml-0">
              <div className="relative md:ml-10">
                <h3 className="text-3xl font-bold text-[#9AD953] text-left">2018</h3>
                <h3 className="text-xl font-bold text-left">
                  Building Your Trading Plan
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Building Your Trading Plan – Unlike stock markets, Forex
                  involves the exchange of one currency for another to profit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Earning Section */}
        <EarningSection/>
      </main>
    </>
  );
};

export default Roadmap;
