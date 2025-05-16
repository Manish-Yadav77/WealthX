import React, { useState } from "react";
import FAQSection from "./home/FAQSection";
import { Link } from "react-router-dom";
import { bankAccount } from "../data";

const TermsAndConditions = () => {
  const [read, setRead] = useState(false);
  return (
    <main className="bg-gray-950 text-white text-sm md:text-base lg:text-lg">
      <section className="text-gray-800 py-12 px-4 md:px-12 lg:px-48">
        <div className="max-w-6xl mx-auto text-white flex flex-col gap-10 bg-[#1F1F1F] py-8 px-3 md:px-12 rounded-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              📜 Rules & Terms — WealthX Funded Trader Program
            </h2>
            <p className="text-gray-400">
              Trade Responsibly. Get Funded. Earn Real Profits.
            </p>
          </div>

          {/* Evaluation Phase */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              🧪 1. Evaluation Phase (Challenge Account)
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                ✅ <strong>Profit Target:</strong> Achieve 10% net profit. No
                time limit unless specified.
              </li>
              <li>
                📉 <strong>Maximum Drawdown:</strong> Cannot exceed 6% of peak
                equity.
              </li>
              <li>
                🔻 <strong>Daily Loss Limit:</strong> Daily losses must not
                exceed 3% of initial balance.
              </li>
              <li>
                📆 <strong>Minimum Trading Days:</strong> Minimum of 5 active
                trading days.
              </li>
            </ul>
          </div>

          {/* Funded Account Rules */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              🔐 2. Funded Account Rules
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                💰 <strong>Payout Policy:</strong> Weekly payouts on Monday. Up
                to 80% profit share.
              </li>
              <li>
                🏁 <strong>Breach Conditions:</strong> Breach leads to
                termination or pause of account.
              </li>
              <li>
                🔁 <strong>Re-attempts:</strong> Discounted reapplication
                available if eligible.
              </li>
            </ul>
          </div>

          {/* Trading Restrictions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              🚫 3. Trading Restrictions & Forbidden Practices
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                ❌ <strong>Lot Size Abuse:</strong> Excessive position sizes.
              </li>
              <li>
                ❌ <strong>News Trading:</strong> No trades 2 mins before/after
                high-impact news.
              </li>
              <li>
                ❌ <strong>Copy Trading:</strong> No bots, signals, or
                mirroring.
              </li>
              <li>
                ❌ <strong>Grid/Martingale:</strong> Unlimited risk strategies
                forbidden.
              </li>
              <li>
                ❌ <strong>HFT/Arbitrage:</strong> High-frequency or
                latency-based arbitrage disallowed.
              </li>
              <li>
                ❌ <strong>Third-Party EA:</strong> Unauthorized robots are not
                allowed.
              </li>
              <li>
                ❌ <strong>Slippage Exploits:</strong> Price feed or broker lag
                exploitation banned.
              </li>
              <li>
                ❌ <strong>Identity Fraud:</strong> Multiple accounts per person
                prohibited.
              </li>
            </ul>
            <p className="text-red-400">
              📝 Violations result in disqualification and payout void.
            </p>
          </div>

          {/* Fees and Refunds */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              🧾 4. Fees, Refunds, and Discounts
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Evaluation fees are non-refundable (except technical failures).
              </li>
              <li>Discounted reattempts possible (based on eligibility).</li>
              <li>No recurring or monthly charges.</li>
            </ul>
          </div>

          {/* Scaling Plan */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              🔓 5. Scaling Plan (Performance-Based Funding)
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>1 Month:</strong> 10% profit, no breach → +25% capital.
              </li>
              <li>
                <strong>3 Months:</strong> 25% cumulative profit → +50% capital.
              </li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              📜 6. Legal & General Disclaimer
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>You’re responsible for your trades and risk.</li>
              <li>No financial advice or portfolio services provided.</li>
              <li>Trades must align with platform rules and ethics.</li>
            </ul>
            <p className="text-green-400">
              ✅ By joining, you agree to follow rules, trade responsibly,
              accept decisions, and honor support timelines.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-2 text-center pt-4">
            <Link to="/signup" className="text-blue-500 hover:underline">
              [Apply for Evaluation Register Now]
            </Link>
            <br />
            <button
              onClick={() => setRead((prev) => !prev)}
              className="text-blue-500 hover:underline transition-colors"
            >
              [{read ? "Hide FAQs" : "Read FAQs"}]
            </button>
            <br />
            {read && (
              <div className="mt-4">
                <FAQSection read={read} />
              </div>
            )}

            <Link
              to="https://www.instagram.com/fundedbywealthx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              [Join Trader Community]
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
