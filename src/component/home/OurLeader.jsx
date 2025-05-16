import React from 'react'
import { Lead1, Lead2, Lead3, Lead4 } from '../../data'

function OurLeader() {
  return (
    <section className="bg-gray-900 pt-12 pb-12 flex flex-col gap-4 items-center">
          <h3 className="text-center text-[#9ad953] font-semibold">Team</h3>
          <h1 className="text-center text-white font-semibold text-xl">
            Our Leaders
          </h1>
          <p className="text-center text-gray-500 font-semibold md:w-1/3">
            These individuals have demonstrated exceptional progress and mastery
            in their trading journey.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-12 w-full">
            {/* Card 1 */}
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col bg-black text-white hover:text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out hover:bg-[#9ad953]">
                <img
                  src={Lead1}
                  alt="Student 1"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center transition duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                    James Maidlow
                  </h3>
                  <p className="mt-2 text-sm hover:text-gray-200">
                   Managing Director & Co-Founder, Founder & CEO
“A trader at heart, an enabler by vision.”
With WealthX+15 years in trading
                  </p>
                  <div className="flex gap-5 justify-center pt-5">
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <i className="fab fa-twitter text-xl"></i>
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col bg-black text-white hover:text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out hover:bg-[#9ad953]">
                <img
                  src={Lead2}
                  alt="Student 2"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center transition duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                    Lewis Piper
                  </h3>
                  <p className="mt-2 text-sm hover:text-gray-200">
                    Senior Consultant- Quants & Technology
“We measure risk so our traders can manage it better.”
                  </p>
                  <div className="flex gap-5 justify-center pt-5">
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <i className="fab fa-twitter text-xl"></i>
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col bg-black text-white hover:text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out hover:bg-[#9ad953]">
                <img
                  src={Lead3}
                  alt="Student 3"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center transition duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                     Sam Martins
                  </h3>
                  <p className="mt-2 text-sm hover:text-gray-200">
                    Consultant - Hedge Funds & Proprietary Trading, Evaluation Head
“Fair, fast, and transparent.”
With deep experience in trade analytics
                  </p>
                  <div className="flex gap-5 justify-center pt-5">
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <i className="fab fa-twitter text-xl"></i>
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            {/* <div className="max-w-xs mx-auto">
              <div className="flex flex-col bg-black text-white hover:text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out hover:bg-[#9ad953]">
                <img
                  src={Lead4}
                  alt="Student 4"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-center transition duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-white">
                    Sneha Mehta
                  </h3>
                  <p className="mt-2 text-sm hover:text-gray-200">
                    With dedication and grit, Sneha now ranks among the top
                    performers in crypto trading.
                  </p>
                  <div className="flex gap-5 justify-center pt-5">
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <i className="fab fa-twitter text-xl"></i>
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <button
            type="button"
            className="bg-[#9ad953] py-3 px-6 rounded-2xl mt-12 text-black hover:bg-[#F5C96D] duration-300 transition-all font-semibold"
          >
            View More
          </button>
        </section>
  )
}

export default OurLeader