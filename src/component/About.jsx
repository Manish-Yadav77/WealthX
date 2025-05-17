import React from "react";
import {
  companyStory,
} from "../data";
import Header from "./home/Header";
import OurLeader from "./home/OurLeader";
import EarningSection from "./home/EarningSection";
import TestimonialSlider from "./home/TestimonialSlider";
import GreenTab from "./home/GreenTab";

const About = () => {

  const obj={title:'WealthX', para:'Company', para2:'About'}
  return (
    <div className="bg-gray-950 text-white text-sm md:text-base lg:text-lg min-h-screen relative">
      <main>
        {/* Header */}
        <Header title={'About'} obj={obj}/>

        {/* Green Tab Section  */}

        <GreenTab/>

        {/* Our Company Story Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center px-4 md:px-12 py-12 max-w-7xl mx-auto relative">
          {/* Left Part (Image) */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
            <img
              src={companyStory}
              alt="Company Story"
              className="w-full md:w-[490px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Part (Text) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-green-500 text-sm md:pt-5 font-semibold uppercase tracking-wide">
              Our Company Story
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              What We Do
            </h1>
            <p className="text-gray-400 text-base md:text-lg w-2/3">
              Trading is the art and science of buying and selling financial
              instruments, such as stocks, bonds, and currencies.
            </p>

            {/* Who We Are Subsection */}
            <div className="flex flex-col-reverse sm:flex-row items-start gap-12 mt-6">
              {/* Icon */}
              <div
                className="group text-xl text-black font-semibold bg-[#9AD953] hover:bg-[#F5C96D] cursor-pointer p-3 rounded-full w-[100px] h-[100px] md:w-80 md:h-[110px] flex flex-col justify-center items-center mt-12"
                
              >
                <i className="fas fa-arrow-right transform transition-transform duration-700 group-hover:rotate-[-60deg]"
                style={{ transform: "rotate(-30deg)" }}
                ></i>
                <span className="mt-1 text-center text-[15px]">Start Now</span>
              </div>

              {/* Text Content */}
              <div>
            <h2 className="text-3xl font-bold pb-6">Who Are We?</h2>
                <p className="text-gray-400 ">
              We are India’s most accessible proprietary trading firm, dedicated to
              empowering aspiring and experienced traders by providing real
              capital to trade — without the traditional barriers.
            </p>
              </div>
            </div>
          </div>

          {/* Animated Star Widgets */}
          <div className="absolute right-4 top-[50%] md:right-[14%] md:top-[25%] z-0 flex flex-col items-center space-y-6">
            {/* Big Star */}
            <div
              className="shadow-2xl"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#fde047",
                clipPath:
                  "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                animation: "pulse 5s ease-in-out infinite",
              }}
            ></div>

            {/* Small Star */}
            <div
              className="shadow-lg"
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#facc15",
                clipPath:
                  "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            ></div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-black">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-48 py-12 gap-8">
            {/* Left */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white md:w-1/2">
              <p className="text-[#F5C96D] uppercase tracking-wider text-sm font-semibold mb-2">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-3xl font-bold mb-4">
                Empowering Success How We're Making a Difference
              </h2>
            </div>

            {/* Right */}
            <div className="text-gray-400 md:w-[35%] md:text-left">
              <p className="mx-auto md:mx-0 text-end">
                We believe that success is not reserved for the privileged few.
                It's a journey that anyone can embark upon with right guidance
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 px-6 md:px-40 pb-12">
            {/* Card 1 */}
            <div className="group p-6 rounded-lg shadow-lg bg-[#1F1F1F] flex flex-col items-center w-full text-white hover:text-black hover:bg-[#9ad953] transition-all duration-700">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center bg-black w-20 h-20 mb-6 rounded-full gap-1">
                  <i className="fab fa-bitcoin text-[#9ad953] text-2xl"></i>
                  <i className="fab fa-dollar text-[#9ad953] text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Client-first approach</h3>
              </div>
              <p className="text-center text-gray-400 group-hover:text-black">
                Transformed the trading landscape. Online trading platforms and
                mobile apps have made it easier than ever for individuals
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-lg shadow-lg bg-[#1F1F1F] flex flex-col items-center w-full text-white hover:text-black hover:bg-[#9ad953] transition-all duration-700">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center bg-black w-20 h-20 mb-6 rounded-full">
                  <i className="fas fa-balance-scale text-[#9ad953] text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold">
                  Integrity and Compliance
                </h3>
              </div>
              <p className="text-center text-gray-400 group-hover:text-black">
                One of the fundamental principles of trading is risk management.
                Successful traders carefully manage their capital,
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-lg shadow-lg bg-[#1F1F1F] flex flex-col items-center w-full text-white hover:text-black hover:bg-[#9ad953] transition-all duration-700">
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center bg-black w-20 h-20 mb-6 rounded-full">
                  <i className="fa-solid fa-rocket text-[#9ad953] text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Fast Execution</h3>
              </div>
              <p className="text-center text-gray-400 group-hover:text-black">
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
            </div>
          </div>
        </section>

        {/* Our Leader */}

        <OurLeader/>

        {/* What People Say */}

        <TestimonialSlider />

        {/* Earning Section */}

        <EarningSection/>
      </main>

      {/* Keyframes style injection */}
      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
        .animate-slide-out {
          animation: slideOut 0.3s ease-in forwards;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 12s linear infinite;
        }
        .group:hover .fa-arrow-right {
          transform: rotate(-90deg);
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
