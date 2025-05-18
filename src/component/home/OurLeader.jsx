import React, { useState } from 'react';
import { Lead1, Lead2, Lead3, Lead4 } from '../../data';
import { Link } from 'react-router-dom';

function OurLeader() {
  const [showAll, setShowAll] = useState(false);

  const leadData = [
    {
      img: Lead1,
      title: 'James Maidlow',
      desc:
        'Managing Director & Co-Founder, Founder & CEO “A trader at heart, an enabler by vision.” With WealthX+15 years in trading',
      linkdin: '#',
      instagram: '#',
      twitter: '#',
    },
    {
      img: Lead2,
      title: 'Lewis Piper',
      desc:
        'Senior Consultant- Quants & Technology “We measure risk so our traders can manage it better.”',
      linkdin: '#',
      instagram: '#',
      twitter: '#',
    },
    {
      img: Lead3,
      title: 'Sam Martins',
      desc:
        'Consultant - Hedge Funds & Proprietary Trading, Evaluation Head “Fair, fast, and transparent.” With deep experience in trade analytics',
      linkdin: '#',
      instagram: '#',
      twitter: '#',
    },
    // {
    //   img: Lead4,
    //   title: 'Sneha Mehta',
    //   desc:
    //     'With dedication and grit, Sneha now ranks among the top performers in crypto trading.',
    //   linkdin: '#',
    //   instagram: '#',
    //   twitter: '#',
    // },
  ];

  const visibleLeads = showAll ? leadData : leadData.slice(0, 3);

  return (
    <section className="bg-gray-900 pt-12 pb-12 flex flex-col gap-4 items-center">
      <h3 className="text-center text-[#9ad953] font-semibold">Team</h3>
      <h1 className="text-center text-white font-semibold text-xl">
        Our Leadership Team
      </h1>
      <p className="text-center text-gray-500 font-semibold md:w-1/3">
        👨‍💼 Meet the Minds Behind WealthX
      </p>

      {/* Cards with animation */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-6 w-full transition-all duration-700 ease-in-out ${
          showAll ? 'opacity-100 scale-100' : 'opacity-100 scale-95'
        }`}
      >
        {visibleLeads.map((itm, idx) => (
          <div
            className="max-w-xs mx-auto transition-all duration-700 ease-in-out transform"
            key={idx}
          >
            <div className="flex flex-col bg-black text-white hover:text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out hover:bg-[#9ad953]">
              <img
                src={itm.img}
                alt={itm.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-white">{itm.title}</h3>
                <p className="mt-2 text-sm">{itm.desc}</p>
                <div className="flex gap-5 justify-center pt-5">
                  <Link className="hover:text-[#0077B5]" to={itm.linkdin}>
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </Link>
                  <Link className="hover:text-[#1DA1F2]" to={itm.twitter}>
                    <i className="fab fa-twitter text-xl"></i>
                  </Link>
                  <Link className="hover:text-[#FD1D1D]" to={itm.instagram}>
                    <i className="fab fa-instagram text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show Button only if more than 3 leaders */}
      {leadData.length > 2 && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="bg-[#9ad953] py-3 px-6 rounded-2xl mt-12 text-black hover:bg-[#F5C96D] duration-300 transition-all font-semibold hover:cursor-pointer"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      )}
    </section>
  );
}

export default OurLeader;
