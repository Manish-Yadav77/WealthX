// SliderComponent.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bitcoin, cryptobgless, teampng } from "../../data";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

const [readMore1, setReadMore1] = useState(false);
const [readMore2, setReadMore2] = useState(false);

const toggleReadMore1 = () => setReadMore1(!readMore1);
const toggleReadMore2 = () => setReadMore2(!readMore2);


  return (
    <div className="bg-gray-950 text-white py-8 pt-0 pb-0 relative overflow-hidden">
       <Slider {...settings}>
      {/* Slide 1 - About WealthEx */}
      <div className="slider p-6 md:p-12 lg:px-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="md:w-1/2 flex flex-col text-left">
            <h2 className="text-4xl font-bold pb-6">About WealthEx</h2>
            <p className="text-gray-400 max-w-xl">
              ✅ <strong>Who Are We?</strong><br />
              We are India’s most accessible proprietary trading firm, dedicated to
              empowering aspiring and experienced traders by providing real
              capital to trade — without the traditional barriers.
            </p>
            <p className="text-gray-400 max-w-xl mt-4">
              Whether you're a beginner looking to prove your skills or a seasoned
              trader ready to scale, we provide the funded accounts, tools, and
              support you need to succeed.
            </p>

            {/* Show What We Offer content conditionally */}
            {readMore1 && (
              <>
                <p className="text-gray-400 max-w-xl mt-4">
                  We offer comprehensive educational resources, cutting-edge trading
                  platforms, and dedicated support to help traders excel in both stock
                  and crypto markets. Join us to take your trading career to the next
                  level.
                </p>

                <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
                  What We Offer
                </h3>

                <ul className="text-gray-400 text-left max-w-xl space-y-3">
                  <li>
                    <strong>✔ Real Money Funded Accounts:</strong> Access to real
                    capital starting from ₹[amount] — live markets, real risk & rewards.
                  </li>
                  <li>
                    <strong>✔ Affordable Evaluation Fees:</strong> Lowest fees in India
                    for account evaluations.
                  </li>
                  <li>
                    <strong>✔ Profit Sharing Up to 90%:</strong> You earn it, you keep
                    it.
                  </li>
                  <li>
                    <strong>✔ Simple Rules, Transparent Process:</strong> Fair,
                    performance-based evaluation.
                  </li>
                  <li>
                    <strong>✔ Fast Payouts:</strong> Withdraw profits quickly and
                    easily.
                  </li>
                </ul>
              </>
            )}

            {/* Learn More Button toggles showing above content */}
            <button
              type="button"
              className="group bg-[#9AD953] mt-6 py-2 px-5 rounded-2xl text-black hover:bg-[#F5C96D] transition duration-700 font-semibold inline-flex items-center w-max"
              onClick={toggleReadMore1}
            >
              {readMore1 ? "Show Less" : "Learn More"}
              <i className="fas fa-arrow-right ml-2 transition-transform duration-700 group-hover:rotate-[-70deg]"></i>
            </button>
          </div>

          {/* Right side - Image */}
          <div className={`mt-8 md:mt-20 ${readMore1 ? 'lg:mt-40 duration-500 transition-all' : ' duration-500 transition-all '}`}>
            <img
              src={cryptobgless}
              alt="About WealthEx"
              className="w-120 lg:w-150 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Slide 2 - Meet the Minds Behind WealthEx */}
      <div className="slider p-6 md:p-12 lg:px-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="md:w-1/2 flex flex-col text-left">
            <h2 className="text-4xl font-bold pb-4">
              Meet the Minds Behind WealthEx
            </h2>
            <p className="text-gray-400 max-w-xl mt-2">
              Empowering Indian Traders with Real Capital
            </p>
            <p className="text-gray-400 max-w-xl mt-2">
              We are a team of traders, strategists, and finance pros dedicated to
              democratizing trading capital for Indian talent.
            </p>

            {/* Show Our Leadership Team content conditionally */}
            {readMore2 && (
              <>
                <p className="text-gray-400 max-w-xl mt-4">
                  Our leadership team brings deep experience in trading, technology,
                  and risk management to empower you with cutting-edge strategies and
                  tools.
                </p>

                <h3 className="font-semibold text-xl text-white mt-10 mb-3">
                  🔹 Our Leadership Team
                </h3>
                <div className="text-gray-400 mt-2 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl">
                  <div>
                    🧠 <strong>James Maidlow</strong><br />
                    Managing Director & Co-Founder, Founder & CEO<br />
                    “A trader at heart, an enabler by vision.”<br />
                    +15 years in trading
                  </div>
                  <div>
                    📊 <strong>Lewis Piper</strong><br />
                    Senior Consultant - Quants & Technology<br />
                    “We measure risk so our traders can manage it better.”
                  </div>
                  <div>
                    🔍 <strong>Sam Martins</strong><br />
                    Consultant - Hedge Funds & Proprietary Trading, Evaluation Head<br />
                    “Fair, fast, and transparent.”<br />
                    Deep experience in trade analytics
                  </div>
                </div>

                <div className="text-gray-400 mt-8 max-w-xl">
                  <h4 className="font-semibold text-white mb-2">Contact Us</h4>
                  <p>
                    2 Minster Court, London, EC3R 7BB
                    <br />
                    Valdere Group DMCC, Fortune Executive Tower, JLT, Dubai, UAE, PO
                    BOX 337540
                  </p>
                </div>
              </>
            )}

            {/* Learn More Button toggles showing above content */}
            <button
              type="button"
              className="group bg-[#9AD953] mt-6 py-2 px-5 rounded-2xl text-black hover:bg-[#F5C96D] transition duration-700 font-semibold inline-flex items-center w-max"
              onClick={toggleReadMore2}
            >
              {readMore2 ? "Show Less" : "Learn More"}
              <i className="fas fa-arrow-right ml-2 transition-transform duration-700 group-hover:rotate-[-70deg]"></i>
            </button>
          </div>

          {/* Right side - Image */}
          <div className={`mt-8 md:mt-40 ${readMore2 ? 'lg:mt-30 duration-500 transition-all' : ' lg:mt-0 duration-500 transition-all '}`}>
            <img
              src={teampng}
              alt="Leadership Team"
              className="w-120 lg:w-150 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Slider>

    </div>
  );
};

export default SliderComponent;
