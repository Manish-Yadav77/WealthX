import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  useEffect(() => {
    // Countdown logic
    const countdown = document.getElementById("countdown");
    const offerEnd = new Date();
    offerEnd.setDate(offerEnd.getDate() + 3); // 3 days left

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = offerEnd - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

      if (distance < 0) {
        countdown.innerHTML = "Offer expired!";
      }
    }

    setInterval(updateCountdown, 1000);
  }, []);

  const location = useLocation();

  return (
    <div>
      <footer className={`bg-gray-900 text-white py-12 px-6 md:px-24 ${location.pathname==='/login' || location.pathname === '/signup' ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="./Services.html" className="hover:text-white">Service</a></li>
              <li><a href="./Contact.html" className="hover:text-white">Contact</a></li>
              <li><a href="Support.html" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="About.html" className="hover:text-white">About</a></li>
              <li><a href="./Contact.html" className="hover:text-white">Contact</a></li>
              <li><a href="./Terms&Condition.html" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Widgets */}
          <div className="space-y-6">
            {/* Countdown Widget */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Offer Ends In</h3>
              <div id="countdown" className="text-xl font-bold text-[#9ad953]">
                00d : 00h : 00m : 00s
              </div>
            </div>

            {/* Star Rating Widget */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Rate Us</h3>
              <div className="flex gap-1 text-yellow-400 text-2xl">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">Get weekly market insights & news:</p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#9ad953] text-gray-900 px-4 py-2 rounded-r-md text-sm font-semibold hover:bg-lime-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-5">
          <div className="text-center md:text-left">
            &copy; 2020 <strong className="text-[#9ad953]">Tradez</strong> – All Rights Reserved
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#9ad953] transition">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#9ad953] transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#9ad953] transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#9ad953] transition">
              <i className="fab fa-discord text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
