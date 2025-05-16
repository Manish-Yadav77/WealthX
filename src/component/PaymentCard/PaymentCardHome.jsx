import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./PaymentCard.css";

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

  const [index, setIndex] = useState(0);
  const total = plans.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [readMore, setReadMore] = useState(false);

  const rules = [
    <>
      <strong>Evaluation Phase (Challenge Account)</strong>
      <br />
      ✅ Profit Target: Achieve 10% net profit. No time limit unless specified.
      <br />
      📉 Maximum Drawdown: Cannot exceed 6% of peak equity.
      <br />
      🔻 Daily Loss Limit: Daily losses must not exceed 3% of initial balance.
      <br />
      📆 Minimum Trading Days: Minimum of 5 active trading days.
    </>,
    <>
      <strong>Funded Account Rules</strong>
      <br />
      💰 Payout Policy: Weekly payouts on Monday. Up to 80% profit share.
      <br />
      🏁 Breach Conditions: Breach leads to termination or pause of account.
      <br />
      🔁 Re-attempts: Discounted reapplication available if eligible.
    </>,
    <>
      <strong>Trading Restrictions & Forbidden Practices</strong>
      <br />
      ❌ Lot Size Abuse: Excessive position sizes.
      <br />
      ❌ News Trading: No trades 2 mins before/after high-impact news.
      <br />
      ❌ Copy Trading: No bots, signals, or mirroring.
      <br />
      ❌ Grid/Martingale: Unlimited risk strategies forbidden.
      <br />
      ❌ HFT/Arbitrage: High-frequency or latency-based arbitrage disallowed.
      <br />
      ❌ Third-Party EA: Unauthorized robots are not allowed.
      <br />
      ❌ Slippage Exploits: Price feed or broker lag exploitation banned.
      <br />
      ❌ Identity Fraud: Multiple accounts per person prohibited.
      <br />
      📝 Violations result in disqualification and payout void.
    </>,
    <>
      <strong>Fees, Refunds, and Discounts</strong>
      <br />
      Evaluation fees are non-refundable (except technical failures).
      <br />
      Discounted reattempts possible (based on eligibility).
      <br />
      No recurring or monthly charges.
    </>,
    <>
      <strong>Scaling Plan (Performance-Based Funding)</strong>
      <br />
      1 Month: 10% profit, no breach → +25% capital.
      <br />3 Months: 25% cumulative profit → +50% capital.
    </>,
    <>
      <strong>Legal & General Disclaimer</strong>
      <br />
      You’re responsible for your trades and risk.
      <br />
      No financial advice or portfolio services provided.
      <br />
      Trades must align with platform rules and ethics.
      <br />✅ By joining, you agree to follow rules, trade responsibly, accept
      decisions, and honor support timelines.
    </>,
  ];

  return (
    <section className="w-full  px-4 pt-10 relative h-[400ox] duration-500 bg-gray-800 transition-all">
      <h1 className="text-center text-4xl font-bold text-white pb-0 mb-0">
        Choose Your Plan
      </h1>

      {/* separte them into 70 / 30 */}

      <div
        className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 px-4 py-8"
        style={{ minHeight: "500px" }}
      >
        {/* Left part: 70% width */}
        <div
          className={`flex-[0.7] bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-6 text-white ${
            readMore
              ? "h-fit md:h-[1030px] duration-500 transition-all mt-0"
              : " h-[500px] duration-500 transition-all mt-20"
          } text-balance`}
        >
          <h2 className="text-3xl font-bold mb-4">
            📜 Rules & Terms — WealthX Funded Trader Program
          </h2>
          <p className="mb-4 font-semibold">
            Trade Responsibly. Get Funded. Earn Real Profits.
          </p>
          <ol
            className={`list-decimal list-inside space-y-4 text-[#FFAD75] text-sm leading-relaxed h-fit duration-500 transition-all `}
          >
            {(readMore ? rules : rules.slice(0, 2)).map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ol>

          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-4 text-[#9AD953] hover:cursor-pointer hover:text-[#F5C96D] font-semibold"
          >
            {readMore ? "Show Less ▲" : "Read More ▼"}
          </button>
        </div>

        {/* Right part: 30% width */}
        <div
          className={`flex-[0.3] shadow-lg border-4 border-gray-700 h-fit rounded-2xl ${
            readMore
              ? "lg:mt-50 duration-500 transition-all"
              : " mt-8 duration-500 transition-all"
          }`}
        >
          <div
            id="slider-wrapper"
            className="overflow-hidden h-[600px] flex flex-col -mt-1 justify-center max-w-md mx-auto"
          >
            <div
              id="card-slider"
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.6 }}
                  className="flex-shrink-0 w-full py-10 md:px-8"
                >
                  <div
                    className={`group hover:scale-105 relative bg-gray-800 hover:bg-black hover:cursor-pointer text-white rounded-xl shadow-md p-6 border-t-4 ${
                      plan.color
                    } ${
                      plan.highlight
                        ? "scale-105 shadow-lg border-b-4 hover:border-0 hover:duration-500 transition-all"
                        : ""
                    }`}
                  >
                    {/* Borders */}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                    <span className="absolute top-0 right-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                    <span className="absolute top-0 left-0 h-0 w-1 bg-green-400 group-hover:h-full transition-all duration-500 ease-in-out delay-100"></span>
                    <span className="absolute bottom-0 right-0 h-0 w-1 bg-green-400 group-hover:h-full transition-all duration-500 ease-in-out delay-100"></span>

                    <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                    <p className="text-xl text-[#FFAD75] mb-2">
                      {plan.tagline}
                    </p>
                    <p className="text-3xl font-bold text-white mb-2">
                      {plan.price}
                    </p>
                    <p className="text-sm font-medium mb-4 text-[#FFAD75]">
                      {plan.getStarted}
                    </p>

                    <ul className="text-[#FFAD75] space-y-2 mb-6 text-sm">
                      {plan.details.map((item, i) => (
                        <li
                          key={i}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentCard;
