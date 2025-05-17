import React from "react";

import PaymentCard from "./PaymentCard/PaymentCard";
import FAQSection from "./home/FAQSection";
import TestimonialSlider from "./home/TestimonialSlider";
import { bgImg, mobileStar } from "../data";
import Header from "./home/Header";

const obj={title:'tradez',para:'Service'}


const ServicesSection = () => {
  return (
    <div>

        {/* Header */}
              <Header title={'Platinum A/C'} obj={obj}/>
    
    {/* service we offer */}
        <PaymentCard/>

        {/* Faq section */}

        <FAQSection/>

        {/* What People Say */}

        <TestimonialSlider />

        {/* Earning Section */}

        <section className="flex justify-center rounded-2xl pb-24 p-6">
          <div className="flex flex-wrap sm:gap-8 md:gap-48 justify-center items-center px-6 md:px-10 pt-8 md:py-4 bg-[#1F1F1F] rounded-3xl">
            {/* Left Part */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-xl md:text-4xl text-white">
                Start earning with only $20
              </h1>
              <p className="text-sm md:text-base text-gray-300">
                Try our super easy portal for free
              </p>
            </div>

            {/* Right Part */}
            <div className="relative inline-block">
              <img
                src={mobileStar}
                alt="Star Image"
                className="w-32 md:w-40 rotating-img mx-auto md:mx-0"
              />
              <button
                type="button"
                className="group flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#F5C96D] text-black rounded-md shadow-md font-semibold"
              >
                Register
                <i className="fas fa-long-arrow-alt-right ml-2 transition-transform duration-700 group-hover:rotate-[-70deg]" />
              </button>
            </div>
          </div>

          <style >{`
            .rotating-img {
              animation: rotate 25s linear infinite;
            }

            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            /* Bounce Animation for Button */
            @keyframes bounce-once {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .animate-bounce-once {
              animation: bounce-once 1s ease;
            }

            /* Slow Pulse Animation */
            @keyframes pulseSlow {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
            }

            .animate-pulse-slow {
              animation: pulseSlow 4s ease-in-out infinite;
            }

            /* Marquee Effect */
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
          `}</style>
        </section>
    </div>
  );
};

export default ServicesSection;
