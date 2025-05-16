import React, { useEffect, useState } from 'react';
import { author1, author2, author3 } from '../../data';

const TestimonialSlider = () => {
  const testimonials = [
  {
    name: "Rohit Mehra",
    location: "Delhi",
    text: "Managing a ₹50 lakh live trading account felt like a dream until WealthX made it real."
  },
  {
    name: "Sonal Patil",
    location: "Mumbai",
    text: "Finally, a platform that believes in retail traders like me. ₹50 lakh real capital – no demo nonsense!"
  },
  {
    name: "Karthik Reddy",
    location: "Hyderabad",
    text: "I cleared the evaluation and got real funds within days. This is the real deal."
  },
  {
    name: "Amitabh Singh",
    location: "Lucknow",
    text: "They gave me ₹50 lakh to trade. No joke, no fluff – just real capital and real opportunity."
  },
  {
    name: "Priyanka Saha",
    location: "Kolkata",
    text: "Other platforms give fake promises, WealthX gave me real trading power."
  },
  {
    name: "Deepak Chauhan",
    location: "Jaipur",
    text: "I was skeptical at first, but WealthX delivered exactly what they promised – ₹50 lakh funded account."
  },
  {
    name: "Neha Vora",
    location: "Ahmedabad",
    text: "Trading with real capital changes your mindset. Thank you, WealthX, for trusting me."
  },
  {
    name: "Mohammad Arif",
    location: "Bhopal",
    text: "I never imagined I'd manage real capital this big – until WealthX backed me."
  },
  {
    name: "Sandeep Pawar",
    location: "Pune",
    text: "This is not paper trading. This is serious money – and serious trust from WealthX."
  },
  {
    name: "Ritika Sharma",
    location: "Chandigarh",
    text: "₹50 lakh funded account with real-time execution – I’m hooked for life!"
  },
  {
    name: "Rakesh Menon",
    location: "Kochi",
    text: "WealthX means business – quick communication, fast results, no delays."
  },
  {
    name: "Anjali Dubey",
    location: "Indore",
    text: "Most platforms take weeks – I was live within 2 days. Hats off to the team!"
  },
  {
    name: "Manav Desai",
    location: "Rajkot",
    text: "No red tape, no excuses. Quickest onboarding I’ve ever experienced."
  },
  {
    name: "Pooja Bhatt",
    location: "Nashik",
    text: "Their process is streamlined. I didn’t have to follow up even once!"
  },
  {
    name: "Naveen Joshi",
    location: "Dehradun",
    text: "Fastest approval I’ve seen in the prop firm space."
  },
  {
    name: "Ravi Verma",
    location: "Agra",
    text: "No confusing jargon. Just a clean and easy system anyone can understand."
  },
  {
    name: "Meenal Shetty",
    location: "Mangalore",
    text: "They make trading stress-free – simple UI and clear steps."
  },
  {
    name: "Harshad Kale",
    location: "Nagpur",
    text: "Even as a part-time trader, I never felt lost. WealthX is so simple to navigate."
  },
  {
    name: "Nidhi Tiwari",
    location: "Varanasi",
    text: "If you can trade, WealthX makes the rest super easy. I love the clarity."
  },
  {
    name: "Devang Thakkar",
    location: "Surat",
    text: "Zero confusion, full support. Best experience for a first-time funded trader."
  },
  {
    name: "Tina Rawat",
    location: "Shimla",
    text: "What they promise is what you get – completely transparent process."
  },
  {
    name: "Ajay Kulkarni",
    location: "Aurangabad",
    text: "No deductions, no sudden fees – I could focus on trading without fear."
  },
  {
    name: "Zoya Khan",
    location: "Aligarh",
    text: "Honesty is rare in this business. WealthX stands out with their clarity."
  },
  {
    name: "Ashwin Pillai",
    location: "Thiruvananthapuram",
    text: "Every rupee accounted for – zero surprises, and that builds trust."
  },
  {
    name: "Ritika Iyer",
    location: "Chennai",
    text: "From struggling with capital to becoming a funded trader – I owe it to WealthX."
  },
  {
    name: "Yash Chaudhary",
    location: "Udaipur",
    text: "My dream of being a pro trader came true here. Real capital, real rewards."
  }
];

  const [index, setIndex] = useState(0);
  const total = testimonials.length; 


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 4000);


    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 pt-16 relative h-[420px] ">
      <h1 className="text-center text-[#F5C96D]">Testimonial</h1>
      <h1 className="text-center text-white text-3xl mt-7 mb-8">What People Say</h1>

      <div id="slider-wrapper" className="overflow-hidden h-[400px]">
        <div
  id="card-slider"
  className="flex transition-transform duration-700 ease-in-out"
  style={{ transform: `translateX(-${index * 100}%)` }}
>
  {testimonials.map((testimonial, i) => (
    <div
      key={i}
      className="min-w-full rounded-2xl p-8 text-white flex flex-col items-center text-center gap-4"
    >
      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
      <p className="text-sm opacity-90 w-1/2">
        {testimonial.text}
      </p>
      <p className="text-sm text-gray-400">{testimonial.location}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
