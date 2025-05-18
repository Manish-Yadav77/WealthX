import React, { useState } from "react";
import SliderComponent from "./SliderComponent";
import FAQSection from "./FAQSection";
import TestimonialSlider from "./TestimonialSlider";
import Marquee from "react-fast-marquee";
import {
  companyLogo,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  girlwithphone,
  Lead1,
  Lead2,
  Lead3,
  Lead4,
  mobileStar,
  phoneGirl,
  starIcon,
  sunIcon,
  tradeon2,
  vectorIcon,
  vectorRocket,
  whytradebg,
} from "../../data";
import PaymentCard from "../PaymentCard/PaymentCard";
import GreenTab from "./GreenTab";
import OurLeader from "./OurLeader";
import EarningSection from "./EarningSection";
import { useNavigate } from "react-router-dom";
import PaymentCardHome from "../PaymentCard/PaymentCardHome";

function Home() {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);
  const navigate= useNavigate();

  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <main className="mb-0 pb-0">
        {/* Header  */}

        <SliderComponent />

        {/* Green Tab Section  */}

        <GreenTab />

        {/* Payment Cards Section */}
        <div>
          <PaymentCardHome />
        </div>

        {/* 💼 INVEST IN SKILL. TRADE WITH CONFIDENCE. */}

        <section className="relative overflow-hidden pt-8 bg-[#0F172A]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-12 gap-8 relative z-10">
            {/* Left Part (Image) */}
            <div className="w-full md:w-1/2 duration-500 transition-all">
              <img
                src={tradeon2}
                alt="Trade Platform"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0"
              />
            </div>

            {/* Right Part (Content) */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 px-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                💼 INVEST IN SKILL. TRADE WITH CONFIDENCE.
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-500">
                Join India’s Most Accessible Prop Firm — Real Capital. Low Cost.
                High Rewards.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                🏁 The Trading Revolution Starts Here
                <br />
                Are you a skilled trader with no capital?
                <br />
                Or an investor looking for high-potential talent in the Indian
                market?
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                At WealthX we’re bridging the gap between talent and
                opportunity.
                <br />
                We provide real-money funded accounts at the lowest cost in
                India, empowering traders and delivering returns without the
                traditional risk or barrier.
              </p>

              {/* Read More Section */}
              {readMore && (
                <>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-semibold pt-2">
                    💸 FOR TRADERS: TRADE BIG WITHOUT RISKING YOUR SAVINGS
                  </p>

                  <ul className="text-left space-y-2">
                    <li className="flex items-start gap-3 px-2 py-1 text-gray-300">
                      <i className="fas fa-check text-green-600 mt-1 w-5"></i>
                      <span>
                        ✅ Get a funded account starting from just ₹3400
                      </span>
                    </li>
                    <li className="flex items-start gap-3 px-2 py-1 text-gray-300">
                      <i className="fas fa-check text-green-600 mt-1 w-5"></i>
                      <span>✅ Keep up to 80% of the profits</span>
                    </li>
                    <li className="flex items-start gap-3 px-2 py-1 text-gray-300">
                      <i className="fas fa-check text-green-600 mt-1 w-5"></i>
                      <span>✅ Scale your capital as you perform</span>
                    </li>
                    <li className="flex items-start gap-3 px-2 py-1 text-gray-300">
                      <i className="fas fa-check text-green-600 mt-1 w-5"></i>
                      <span>
                        ✅ No brokerage burden or infrastructure costs
                      </span>
                    </li>
                    <li className="flex items-start gap-3 px-2 py-1 text-gray-300">
                      <i className="fas fa-check text-green-600 mt-1 w-5"></i>
                      <span>
                        ✅ Trade equity, F&amp;O, and more — with our capital
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-semibold pt-2">
                    🎯 If you can trade, we’ll give you the capital to prove it.
                  </p>
                  <p className="text-lg sm:text-xl text-white italic">
                    💬 “Skill hona chahiye, paisa hum denge.”
                  </p>
                </>
              )}

              {/* Read More Button */}
              <button
                type="button"
                onClick={toggleReadMore}
                className="mt-4 inline-flex items-center justify-center gap-2 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:cursor-pointer mr-7 transition"
              >
                {readMore ? "Read Less" : "Read More"}
                <i className={`fas fa-chevron-${readMore ? "up" : "down"}`}></i>
              </button>

              {/* Sign Up Button */}
              {!readMore && (
                <button
                type="button"
                  onClick={()=>{
                    navigate('/signup');
                  }}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition hover:cursor-pointer"
                >
                  Sign Up Now<i className="fas fa-long-arrow-alt-right"></i>
                </button>
              )}
            </div>
          </div>

          {/* Decorative Icons */}
          <div className="absolute top-6 left-6 w-24 h-24 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transform rotate-6 z-0 flex items-center justify-center text-green-400">
            <i className="fas fa-chart-bar text-2xl"></i>
          </div>

          <div className="absolute bottom-8 right-8 w-28 h-28 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transform -rotate-12 z-0 flex items-center justify-center text-yellow-300">
            <i className="fas fa-coins text-2xl"></i>
          </div>

          <div className="absolute top-1/2 right-2/3 md:right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl z-0 flex items-center justify-center text-blue-400 animate-pulse">
            <i className="fas fa-bolt text-xl"></i>
          </div>
        </section>

        {/* What Makes Us Different?*/}

        <section className="relative overflow-hidden bg-[#F5C96D] px-4 sm:px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
          {/* Decorative Icons */}
          <div className="absolute top-6 left-6 w-20 h-20 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl transform rotate-6 z-0 flex items-center justify-center text-[#F5C96D]">
            <img
              src={sunIcon}
              alt="Sun Icon"
              className="w-10 sm:w-12 animate-pulse-slow"
            />
          </div>

          <div className="absolute top-6 right-6 w-20 h-20 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl transform -rotate-6 z-0 flex items-center justify-center text-[#F5C96D]">
            <img
              src={starIcon}
              alt="Star Icon"
              className="w-10 sm:w-12 animate-pulse-slow"
            />
          </div>

          {/* Left Image */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[500px]">
              <img src={starIcon} alt="starIcon" className={` absolute w-50 animate-bounce ${showMore ? ' lg:-top-[60%] lg:left-50 rounded-2xl p-4 ' : 'hidden'}`}/>
              <img
                src={whytradebg}
                alt="Background Icon"
                className={`ml-28 md:ml-0 md:pt-[32%] lg:pt-0 sm:pl-12 md:-pl-10 lg:pl-20 lg:ml-10 w-24 sm:w-40 md:w-56 ${showMore ? 'lg:scale-150 lg:pt-20 duration-500 transition-all' : 'lg:scale-90 duration-500 transition-all'}`}
              />
              <img
                src={girlwithphone}
                alt="Girl with Phone"
                className={`absolute -top-[20%] left-[20%] w-[60%] sm:top-[16%] md:top-[35%] lg:top-[16%] sm:-left-[12%] lg:left-[15%] sm:w-[35%] md:w-[80%] lg:w-[320px] ${showMore ? 'lg:scale-130 lg:pt-28 duration-500 transition-all lg:mt-7' : 'lg:scale-90 lg:-mt-20 duration-500 transition-all'}`}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`w-full mt-10 md:mt-0 md:w-1/2 text-[#2b2b2b] space-y-6 px-2 text-center md:text-left ${showMore ? 'lg:h-[950px] duration-500 transition-all' : 'lg:h-[360px] duration-500 transition-all'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              ✅ What Makes Us Different?
            </h2>

            <ol className="list-decimal list-inside space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0">
              {/* First 2 items always visible */}
              <li>
                <strong>Real Capital – Not Just Simulations</strong>
                <br />
                Tired of demo contests and fake funding? We give you live
                accounts, real risk, and real reward — because your performance
                deserves to be tested in real markets.
              </li>
              <li>
                <strong>Lowest Entry Barrier in India</strong>
                <br />
                Start with as low as ₹3400 — no hidden fees, no monthly charges.
                We believe every trader should get a chance, not just those with
                deep pockets.
              </li>

              {/* Show rest only if showMore is true */}
              {showMore && (
                <>
                  <li>
                    <strong>High Profit Share – Up to 80%</strong>
                    <br />
                    You worked for it — you should keep it. We offer one of the
                    highest payout structures in the industry.
                  </li>
                  <li>
                    <strong>Clear Rules, Fast Evaluation</strong>
                    <br />
                    We keep it simple: Meet the target, follow the rules, get
                    funded. No confusing terms, no unrealistic conditions.
                  </li>
                  <li>
                    <strong>Mentorship + Community Support</strong>
                    <br />
                    You’re not alone — join a community of funded traders with
                    regular guidance, feedback, and success stories.
                  </li>
                  <li>
                    <strong>Fast Withdrawals. No Delays.</strong>
                    <br />
                    Your profits are yours to keep — and we make sure you get
                    them fast.
                  </li>
                </>
              )}
              </ol>

              {showMore && (
                <>
                {/* The rest of the content */}
            <p className=" text-lg sm:text-xl font-semibold text-[#14532d]">
              📈 You Focus on Trading. We’ll Handle the Rest.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 max-w-xl mx-auto md:mx-0">
              <li>❌ No need to risk your own savings</li>
              <li>❌ No need for expensive infrastructure</li>
              <li>✅ Just your skill, internet, and screen</li>
            </ul>

            <p className="mt-4 text-base sm:text-lg font-semibold text-[#14532d]">
              💬 "Trading का सपना, अब पैसों के बिना भी पूरा हो सकता है।"
            </p>
                </>
              )}

            {/* Button to toggle showMore */}
            <button
              onClick={() => setShowMore(!showMore)}
              className=" inline-block text-[#14532d] font-semibold underline hover:text-[#0b3c0b] transition hover:cursor-pointer"
              type="button"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>

            
          </div>

          {/* Pulsing Bottom Bubbles */}
          <div>
            <div className="absolute bottom-1 md:bottom-10 left-10 w-16 h-16 bg-[#9AD953] rounded-full opacity-80 animate-pulse-slow z-0"></div>
          <div className="absolute bottom-1 md:bottom-10 right-10 w-16 h-16 bg-[#9AD953] rounded-full opacity-80 animate-pulse-slow z-0"></div>
          </div>
        </section>

        {/* What will you learn */}

        <section className="relative bg-[#9AD953] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-12 gap-10 overflow-hidden md:pb-0">
          {/* Decorative Widgets */}
          <div className="absolute left-10 top-6 md:top-10 z-10 animate-pulse-slow scale-100 hover:scale-110 transition-transform duration-500">
            <img
              src={starIcon}
              alt="star icon"
              className="w-10 sm:w-12 md:w-16 lg:w-20 md:ml-80 lg:pl-0"
            />
          </div>

          <div className="absolute right-10 top-20 z-10 animate-pulse-slow scale-100 hover:scale-110 transition-transform duration-500">
            <img
              src={sunIcon}
              alt="sun icon"
              className="w-10 sm:w-12 md:w-16 lg:w-20"
            />
          </div>

          {/* Left Content */}
          <div className="text-black space-y-6 w-full lg:w-1/2 px-2">
            <h2 className="text-lg pt-5 sm:text-xl font-bold leading-tight">
              What Can You Earn With WealthX <br />
              <span className="text-[#14532d] text-2xl sm:text-3xl">
                Real Traders. Real Money. Real Growth.
              </span>
            </h2>
            <p className="text-base sm:text-lg max-w-md">
              🎯 Your Skill Has Value — We Help You Monetize It <br />
              You’re already spending time in the markets. <br />
              You’re already analyzing charts. <br />
              Now imagine doing all of that… <br />
              with someone else’s capital — and keeping up to 80% of the
              profits. <br />
              <br />
              At WealthX we give you the capital, <br />
              you earn the profits — without risking your own savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <h3 className="text-4xl font-bold">1.2K+</h3>
                <p className="text-sm">Users Joined</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">5.5M</h3>
                <p className="text-sm">Monthly Volume (In USD)</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[600px]">
              <img
                src={phoneGirl}
                alt="girl with phone"
                className="w-[80%] mx-auto"
              />

              {/* Rocket Widget */}
              <div className="absolute bottom-36 -right-20 md:bottom-10 md:right-10 z-10 animate-pulse-slow scale-100 hover:scale-110 transition-transform duration-500">
                <img
                  src={vectorRocket}
                  alt="rocket vector"
                  className="w-24 sm:w-32 md:w-40"
                />
              </div>

              {/* Coin Widget */}
              <div className="absolute bottom-72 left-5 md:bottom-8 md:-left-28 w-20 h-20 sm:w-24 sm:h-24 rounded-xl backdrop-blur-sm bg-black/30 border border-white/20 shadow-xl transform -rotate-12 z-0 flex items-center justify-center text-yellow-300 animate-pulse">
                <i className="fas fa-coins text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Widgets */}
          <div className="absolute bottom-10 left-10 z-10 animate-pulse-slow">
            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
          </div>

          <div className="absolute bottom-10 right-10 z-10 animate-pulse-slow">
            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
          </div>
        </section>

        {/* Our Leader */}

        <OurLeader />

        {/* FaqSection */}

        <FAQSection />

        {/* What People Say */}

        <TestimonialSlider />

        {/* Earning Section */}

        <EarningSection />
      </main>
    </div>
  );
}

export default Home;
