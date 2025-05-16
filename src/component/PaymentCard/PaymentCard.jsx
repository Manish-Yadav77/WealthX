import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import './PaymentCard.css';

function PaymentCard() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Plan 1",
      price: "₹3400",
      tagline: "Risk Reward Matters",
      cta: "Get Real ₹3.5 Lacks",
      getStarted: "Get Started Today:",
      details: [
        { label: "Challenge Fees", value: "₹3400" },
        { label: "Challenge Type", value: "1 Step" },
        { label: "Profit Target", value: "10%" },
        { label: "Maximum Daily Loss", value: "3%" },
        { label: "Maximum Overall Loss", value: "6%" },
        { label: "Minimum Trading Days", value: "5 Days" },
        { label: "Profit Split Upto", value: "100%" },
        { label: "News Trading", value: "✅" },
      ],
      color: "border-green-400",
      highlight: true,
    },
    {
      title: "Plan 2",
      price: "₹8500",
      tagline: "Risk Reward Matters",
      cta: "Get Real ₹10 Lack",
      getStarted: "Get Started Today:",
      details: [
        { label: "Challenge Fees", value: "₹8500" },
        { label: "Challenge Type", value: "1 Step" },
        { label: "Profit Target", value: "10%" },
        { label: "Maximum Daily Loss", value: "3%" },
        { label: "Maximum Overall Loss", value: "6%" },
        { label: "Minimum Trading Days", value: "5 Days" },
        { label: "Profit Split Upto", value: "100%" },
        { label: "News Trading", value: "✅" },
      ],
      color: "border-green-400",
      highlight: true,
    },
    {
      title: "Plan 3",
      price: "₹17000",
      tagline: "Risk Reward Matters",
      cta: "Get Real ₹25 Lacks",
      getStarted: "Get Started Today:",
      details: [
        { label: "Challenge Fees", value: "₹17000" },
        { label: "Challenge Type", value: "1 Step" },
        { label: "Profit Target", value: "10%" },
        { label: "Maximum Daily Loss", value: "3%" },
        { label: "Maximum Overall Loss", value: "6%" },
        { label: "Minimum Trading Days", value: "5 Days" },
        { label: "Profit Split Upto", value: "100%" },
        { label: "News Trading", value: "✅" },
      ],
      color: "border-green-400",
      highlight: true,
    },
    {
      title: "Plan 4",
      price: "₹25500",
      tagline: "Risk Reward Matters",
      cta: "Get Real ₹50 Lacks",
      getStarted: "Get Started Today:",
      details: [
        { label: "Challenge Fees", value: "₹25500" },
        { label: "Challenge Type", value: "1 Step" },
        { label: "Profit Target", value: "10%" },
        { label: "Maximum Daily Loss", value: "3%" },
        { label: "Maximum Overall Loss", value: "6%" },
        { label: "Minimum Trading Days", value: "5 Days" },
        { label: "Profit Split Upto", value: "100%" },
        { label: "News Trading", value: "✅" },
      ],
      color: "border-green-400",
      highlight: true,
    },
  ];

  return (
    <section className="py-12 bg-gray-900 rounded-2xl overflow-hidden">
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Choose Your Plan
      </h2>

      <div className="relative w-full overflow-hidden">
        <Marquee
          speed={75}
          gradient={false}
          pauseOnHover={true}
          className="space-x-6 lg:space-x-40 px-6"
        >
          <div className="flex gap-30 md:gap-30">
    {[...plans, ...plans].map((plan, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.6 }}
        className="min-w-[300px] max-w-sm py-10"
      >
              <div
                className={` ${plan.title === "Plan 1" ? 'ml-5 md:ml-0':'ml-0'} group relative bg-gray-800 hover:bg-black hover:cursor-text text-white rounded-xl shadow-md p-6 border-t-4 ${plan.color} ${
                  plan.highlight
                    ? "scale-105 shadow-lg border-b-4 hover:border-0 hover:duration-500 transition-all"
                    : ""
                }`}
              >
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                <span className="absolute top-0 left-0 h-0 w-1 bg-green-400 group-hover:h-full transition-all duration-500 ease-in-out delay-100"></span>
                <span className="absolute bottom-0 right-0 h-0 w-1 bg-green-400 group-hover:h-full transition-all duration-500 ease-in-out delay-100"></span>

                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <p className="text-xl text-[#FFAD75] mb-2">{plan.tagline}</p>
                <p className="text-3xl font-bold text-white mb-2">{plan.price}</p>
                <p className="text-sm font-medium mb-4 text-[#FFAD75]">
                  {plan.getStarted}
                </p>

                <ul className="text-[#FFAD75] space-y-2 mb-6 text-sm">
                  {plan.details.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between border-b py-1"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    navigate(`/form/${encodeURIComponent(plan.title)}`);
                  }}
                  className="bg-[#9AD953] hover:scale-105 hover:cursor-pointer hover:bg-[#F5C96D] text-black font-bold py-2 px-4 rounded-full w-full transition-all duration-300"
                >
                  {plan.cta}
                </button>
              </div>
             </motion.div>
    ))}
  </div>
        </Marquee>
      </div>
    </section>
  );
}

export default PaymentCard;
