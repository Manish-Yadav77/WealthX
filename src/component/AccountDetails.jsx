import React from 'react';
import { AccountImg, bgImg } from '../data';
import Header from './home/Header';

const accountTypes = ['Platinum A/C', 'Gold A/C', 'Silver A/C'];

const AccountDetails = () => {
  return (
    <main className="bg-gray-950 text-white text-sm md:text-base lg:text-lg">
      {/* Header */}
      <Header/>

      {/* Content */}
      <section className="py-12 pb-0 px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Main Info */}
          <div className="lg:col-span-2 space-y-8 px-0 lg:px-24">
            <p className="text-gray-500 leading-relaxed">
              Idea of denouncing the master-builder of human happiness — the moment blinded by desire,
              people fail to foresee the pain and trouble that are bound to ensue...
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
              <img
                src={AccountImg}
                alt="Account"
                className="w-full lg:w-[520px] h-80 object-cover rounded-md"
              />

              <div>
                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>No Commission</li>
                  <li>Leverage up to 1:3000</li>
                  <li>Better Performance</li>
                  <li>Multiple Currency Options</li>
                  <li>Pleasure must sometimes be repudiated for duty</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Currencies</h3>
                <p className="text-gray-400">
                  Business frequently occur that pleasure have to be repudiated...
                </p>
              </div>
            </div>

            {/* Account Info Box */}
            <div className="rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Standard Account Info</h3>
              <p className="text-gray-500 mb-7">
                Bound to ensue and equal blame belongs to those who fail in their
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                <div><strong>Initial Deposit:</strong> $100</div>
                <div><strong>Order Volume:</strong> 0.01 – 100 lots</div>
                <div><strong>Support:</strong> 24/7 Live Chat</div>
                <div><strong>Leverage:</strong> 1:3000</div>
                <div><strong>Spread:</strong> Fixed</div>
                <div><strong>Customer Care:</strong> Multi-Language</div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="shadow-md rounded-xl p-6 space-y-6">
            {/* Account Types */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Account Types</h3>
              <ul className="space-y-4 text-gray-300">
                {accountTypes.map((type) => (
                  <li
                    key={type}
                    className="flex justify-between border border-gray-700 px-6 py-2 w-full"
                  >
                    <span>{type}</span>
                    <i className="fas fa-arrow-right text-green-500 mt-1"></i>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assistance Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Need Assistance</h3>
              <div className="bg-[#1F1F1F] px-6 py-6 rounded-lg space-y-4 text-gray-400">
                <p className="border-b border-gray-600 pb-2">
                  Contact us for further information about the Standard A/C.
                </p>
                <p className="font-medium border-b border-gray-600 pb-2">
                  <strong className="text-green-500">📞</strong> (219) 555-0114
                </p>
                <p className="font-medium">
                  <strong>📧</strong> info@gmail.com
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default AccountDetails;
