import React, { useState } from "react";
import { WealthX, WealthX3 } from "../data";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const toggleCompanyDropdown = () =>
    setShowCompanyDropdown(!showCompanyDropdown);
  const toggleResourcesDropdown = () =>
    setShowResourcesDropdown(!showResourcesDropdown);

  return (
    <div>
      <nav className="top-0 z-50 w-full px-4 sm:px-6 md:px-8 py-4 bg-black border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left - Logo & Brand */}
          <Link to="/">
            <div className="flex items-center gap-3 hover:scale-105 duration-300">
              <img
                src={WealthX3}
                alt="Wealth X"
                className="w-32 sm:w-30 object-contain drop-shadow-md"
              />
            </div>
          </Link>

          {/* Center links */}
          <div className="w-full flex items-center ml-10 relative">
            <ul
              id="menu"
              className={`menu-links fixed sm:static top-0 left-0 ${
                isMenuVisible ? "menu-visible animate-slide-in" : "menu-hidden"
              } sm:flex sm:flex-row flex-col bg-black sm:bg-transparent w-[70%] sm:w-auto h-full sm:h-auto p-6 lg:p-8 sm:p-0 transition-all duration-300 z-50 gap-6 sm:gap-8 md:gap-10 shadow-lg sm:shadow-none rounded-md md:items-center text-white`}
            >
              <li className="flex gap-3 mt-3 sm:hidden hover:scale-105 duration-400">
                <img src={WealthX3} alt="Wealth X" className="w-16 sm:w-20" />
              </li>

              <li className="hover:scale-105 hover:text-[#9AD953] font-medium transition-transform duration-300 flex items-center gap-4">
                <i className="fa-solid fa-house sm:hidden"></i>
                <Link to="/" className="text-white hover:text-[#9AD953]">
                  Home
                </Link>
              </li>
              <li className="hover:scale-105 hover:text-[#9AD953] font-medium transition-transform duration-300 flex items-center gap-4">
                <i className="fa-solid fa-wallet sm:hidden"></i>
                <Link
                  to="/accounts"
                  className="text-white hover:text-[#9AD953]"
                >
                  Accounts
                </Link>
              </li>
              <li className="hover:scale-105 hover:text-[#9AD953] font-medium transition-transform duration-300 flex items-center gap-4">
                <i className="fa-solid fa-screwdriver-wrench sm:hidden"></i>
                <Link
                  to="/rules&terms"
                  className="text-white hover:text-[#9AD953]"
                >
                  Rules & Terms
                </Link>
              </li>

              <ul className="your-menu-class flex flex-col md:flex-row gap-6">
                {/* Company Dropdown */}
                <li className="hover:scale-105 hover:text-[#9AD953] font-medium transition-transform duration-300 flex items-center gap-4 text-white">
                  <i className="fa-solid fa-building sm:hidden mr-1"></i>
                  <div
                    className="relative group cursor-pointer text-white"
                    onClick={() =>
                      window.innerWidth < 1280 && toggleCompanyDropdown()
                    }
                  >
                    <div className="hover:text-[#9AD953] flex items-center justify-between w-full">
                      Company{" "}
                      <i className="fas fa-chevron-down text-white text-xs ml-1"></i>
                    </div>
                    <ul
                      className={`
              absolute left-0 w-40 bg-white text-black sm:bg-black sm:text-white rounded shadow z-50
              transition duration-300
              ${
                window.innerWidth < 1280
                  ? showCompanyDropdown
                    ? "block"
                    : "hidden"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              }
            `}
                    >
                      <li>
                        <Link
                          to="/About"
                          className="block px-4 py-2 hover:scale-105 duration-300 hover:text-[#9AD953] rounded-2xl"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Contact"
                          className="block px-4 py-2 hover:scale-105 duration-300 hover:text-[#9AD953] rounded-2xl"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Resources Dropdown */}
                <li className="hover:scale-105 hover:text-[#9AD953] font-medium transition-transform duration-300 flex items-center gap-4 text-white">
                  <i className="fa-solid fa-book-open sm:hidden"></i>
                  <div
                    className="relative group cursor-pointer text-white"
                    onClick={() =>
                      window.innerWidth < 1280 && toggleResourcesDropdown()
                    }
                  >
                    <div className="hover:text-[#9AD953] flex items-center justify-between w-full">
                      Resources{" "}
                      <i className="fas fa-chevron-down text-white text-xs ml-2"></i>
                    </div>
                    <ul
                      className={`
              absolute left-0 w-40 bg-white text-black sm:bg-black sm:text-white rounded shadow z-50
              transition duration-300
              ${
                window.innerWidth < 1280
                  ? showResourcesDropdown
                    ? "block"
                    : "hidden"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              }
            `}
                    >
                      <li>
                        <Link
                          to="/roadmap"
                          className="block px-4 py-2 hover:scale-105 duration-300 hover:text-[#9AD953] rounded-2xl"
                        >
                          Roadmap
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Support"
                          className="block px-4 py-2 hover:scale-105 duration-300 hover:text-[#9AD953] rounded-2xl"
                        >
                          Support
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/rules&terms"
                          className="block px-4 py-2 hover:scale-105 duration-300 hover:text-[#9AD953] rounded-2xl"
                        >
                          Rules & Terms
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </li>
              </ul>

              {/* Sign In */}
            {location.pathname==='/Admin' || location.pathname==='/accounts'? '' :

            
              <li className="group hover:scale-105 hover:text-[#9ad953] font-medium transition-transform duration-300 lg:absolute xl:mr-35 md:text-gray-400 lg:right-40 xl:right-5 flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-white group-hover:text-[#9ad953]"
                >
                  <i className="fas fa-sign-in-alt mr-3 pr-1 transition-transform sm:hidden"></i>
                  Sign in
                </Link>
                <i className="fas fa-arrow-right mr-2 transition-transform duration-700 group-hover:rotate-[-70deg]"></i>
              </li>
}

              {/* // Sign Up */}
              {location.pathname==='/Admin' || location.pathname==='/accounts'? '' :
              <li className="group hover:scale-105 hover:text-green-700 font-medium transition-transform duration-300 lg:absolute lg:-right-8 xl:-right-14 md:border md:px-6 lg:px-3 rounded-2xl border-green-300 md:text-black md:hover:bg-[#F5C96D] md:hover:text-black md:bg-[#9ad953] lg:p-3 lg:mr-4 xl:mr-12 flex gap-4 hover:cursor-pointer items-center">
                <i className="fa-solid fa-user-plus sm:hidden"></i>
                <Link to="/signup" className="inline-flex items-center">
                  <span className="flex gap-3 font-bold">
                    Sign Up
                    <i className="fas fa-arrow-right mr-2 transition-transform duration-700 group-hover:rotate-[-70deg] mt-1"></i>
                  </span>
                </Link>
              </li>}
            </ul>
          </div>

          {/* Right - Menu Icon */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              className="menu-button text-3xl md:hidden focus:outline-none"
              type="button"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .menu-links {
          display: none;
        }
        @media (min-width: 640px) {
          .menu-links {
            display: flex !important;
          }
          .menu-button {
            display: none;
          }
        }

        .menu-visible {
          left: 0%;
          transition: 0.4s ease-in-out;
          display: flex;
        }

        .menu-hidden {
          display: none;
        }

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
      `}</style>
    </div>
  );
}

export default Navbar;
