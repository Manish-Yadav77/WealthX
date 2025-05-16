import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QrContext } from "../context/QrContext";
import { v4 as uuidv4 } from "uuid";
import { bankAccount, etheriumQrCode } from "../data";

const Form = () => {
  const { qr1, qr2, setQr1, setQr2 } = useContext(QrContext);
  const { planName } = useParams();
  const navigate = useNavigate();
  const decodedPlan = decodeURIComponent(planName);

  const [val, setVal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    utr: "",
    screenshot: null,
  });

  useEffect(() => {
    const savedQr1 = localStorage.getItem("qr1");
    const savedQr2 = localStorage.getItem("qr2");

    if (savedQr1) setQr1(savedQr1);
    if (savedQr2) setQr2(savedQr2);
  }, [val]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "screenshot") {
      setForm({ ...form, screenshot: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal((prev) => prev + 1);
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    if (!form.utr || !form.screenshot) {
      alert("Please enter UTR and upload screenshot");
      return;
    }

    const userData = {
      _id: uuidv4(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      utr: form.utr,
      screenshot: form.screenshot.name,
      plan: decodedPlan,
      submittedAt: new Date().toISOString(),
    };

    const previousData = JSON.parse(localStorage.getItem("userPayments")) || [];
    localStorage.setItem("userPayments", JSON.stringify([...previousData, userData]));

    setForm({
      name: "",
      email: "",
      phone: "",
      utr: "",
      screenshot: null,
    });

    setShowModal(false);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-gray-900 text-white rounded-xl mt-10 shadow-md border-t-4 border-b-4 border-green-400">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#FFAD75]">
        Get Real Account - {decodedPlan}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full bg-gray-800 text-white p-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full bg-gray-800 text-white p-3 rounded-lg"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full bg-gray-800 text-white p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-[#9AD953] text-black font-bold py-3 px-4 rounded-full w-full hover:bg-[#F5C96D] transition-all"
        >
          Submit Application
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-4 overflow-auto">
          <div className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-5xl shadow-2xl relative border-4 border-green-500">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-white hover:text-red-500"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-center text-[#FFAD75] mb-6">
              Complete Payment to Confirm Application
            </h3>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
              {qr1 && (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={etheriumQrCode}
                    alt="QR 1"
                    className="w-64 h-auto rounded-md border-2 border-green-400"
                  />
                  <p className="text-green-300 text-sm">Scan QR 1 & Pay</p>
                </div>
              )}
              {qr2 && (
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={bankAccount}
                    alt="QR 2"
                    className="w-64 h-auto rounded-md border-2 border-green-400"
                  />
                  <p className="text-green-300 text-sm">Or Pay Directly</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="utr"
                  value={form.utr}
                  onChange={handleChange}
                  placeholder="UTR No.*"
                  required
                  className="flex-1 bg-gray-800 text-white p-3 rounded-lg"
                />
                <input
                  type="file"
                  name="screenshot"
                  accept="image/*"
                  onChange={handleChange}
                  required
                  className="flex-1 bg-gray-800 text-white p-3 rounded-lg"
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleModalSubmit}
                  className="bg-green-400 text-black font-semibold py-3 px-8 rounded-lg hover:bg-green-500 transition"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
