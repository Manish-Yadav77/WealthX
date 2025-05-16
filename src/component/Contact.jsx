import React from "react";
import Header from "./home/Header";
import EarningSection from "./home/EarningSection";

const Contact = () => {
  return (
    <div className="bg-gray-950 text-white text-sm md:text-base lg:text-lg min-h-screen">
      <main>
        {/* Header */}
        <Header/>

        {/* Business submission form */}
        <section className="flex flex-col md:flex-row items-start md:px-48 md:pt-20 gap-16 p-8">
          {/* Left Part */}
          <div className="flex-1 max-w-md">
            <h1 className="text-2xl font-semibold mb-4">Business Submissions</h1>
            <p className="mb-4 text-gray-400">
              For business plan submissions. Please submit using this
            </p>

            <div className="flex gap-4 mb-4 items-center">
              <i className="fas fa-envelope-open-text bg-[#9AD953] w-10 h-10 text-center p-2 text-2xl rounded-full"></i>
              <span className="text-lg">deanna.curtis@example.com</span>
            </div>

            <div className="flex gap-4 mb-4 items-center">
              <i className="fa fa-phone transform rotate-90 bg-[#9AD953] w-10 h-10 text-center p-2 text-2xl rounded-full"></i>
              <span className="text-lg">(555) 555-555</span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold mb-4">Our Social Media</h1>
              <div className="flex gap-4">
                <i className="fab fa-facebook-f text-2xl"></i>
                <i className="fab fa-instagram text-2xl"></i>
                <i className="fab fa-twitter text-2xl"></i>
                <i className="fab fa-linkedin text-2xl"></i>
                <i className="fab fa-youtube text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-4">Enquiry Form</h1>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 bg-gray-950 border-b-4 border-[#1F1F1F] rounded-lg w-full focus:outline-none focus:border-[#9AD953]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 bg-gray-950 border-b-4 border-[#1F1F1F] rounded-lg w-full focus:outline-none focus:border-[#9AD953]"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-2 bg-gray-950 border-b-4 border-[#1F1F1F] rounded-lg w-full focus:outline-none focus:border-[#9AD953]"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-2 bg-gray-950 border-b-4 border-[#1F1F1F] rounded-lg w-full focus:outline-none focus:border-[#9AD953]"
              />
              <div className="col-span-1 sm:col-span-2">
                <textarea
                  placeholder="Message"
                  className="p-2 bg-gray-950 border-b-4 border-[#1F1F1F] rounded-lg w-full focus:outline-none focus:border-[#9AD953] h-32"
                  rows="4"
                ></textarea>
              </div>
              <div className="sm:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-[#9AD953] text-black px-6 py-2 rounded-lg mt-4 hover:bg-[#F5C96D] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Earning Section */}

        <EarningSection/>
        
      </main>
    </div>
  );
};

export default Contact;
