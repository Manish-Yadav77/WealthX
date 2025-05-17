import React from "react";
import Header from "./home/Header";
import EarningSection from "./home/EarningSection";

const Contact = () => {

  const obj={title:'Tradez', para:'Company', para2:'Contact'}

  return (
    <div className="bg-gray-950 text-white text-sm md:text-base lg:text-lg min-h-screen">
      <main>
        {/* Header */}
        <Header title={'Contact'} obj={obj}/>

        {/* Business submission form */}
        <section className="flex flex-col md:flex-row items-start md:px-48 md:pt-20 gap-16 p-8">
  {/* Left Part */}
  <div className="flex-1 max-w-md">
    <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
    <p className="mb-4 text-gray-400">You can reach us at our global offices:</p>

    <div className="mb-4">
      <h2 className="text-lg font-medium">London Office</h2>
      <p className="text-gray-300">2 Minster Court, London, EC3R 7BB</p>
    </div>

    <div className="mb-8">
      <h2 className="text-lg font-medium">Dubai Office</h2>
      <p className="text-gray-300">
        Valdere Group DMCC, Fortune Executive Tower, JLT, Dubai, UAE, PO BOX 337540
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-lg font-medium">Email Us:</h2>
      <p className="text-gray-300">
        fundedbywealthx@gmail.com 
      </p>
    </div>

    <h1 className="text-2xl font-semibold mb-4">Our Social Media</h1>
    <div className="flex gap-4">
      <i className="fab fa-facebook-f text-2xl"></i>
      <i className="fab fa-instagram text-2xl"></i>
      <i className="fab fa-twitter text-2xl"></i>
      <i className="fab fa-linkedin text-2xl"></i>
      <i className="fab fa-youtube text-2xl"></i>
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
