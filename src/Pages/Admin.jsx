import React, { useContext, useEffect, useState } from "react";
import { QrContext } from "../context/QrContext";
import { poster50lakh } from "../data";

const AdminPage = () => {
  const { setQr1, setQr2 } = useContext(QrContext);

  const [qr1Image, setQr1Image] = useState(null);
  const [qr2Image, setQr2Image] = useState(null);
  const [tempQr1, setTempQr1] = useState(null);
  const [tempQr2, setTempQr2] = useState(null);
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);

  // 📥 Fetch QR codes and requests
  useEffect(() => {
    const fetchData = async () => {
      try {
        const qrRes = await fetch("http://localhost:5000/api/admin/qrcodes");
        const qrData = await qrRes.json();
        setQr1Image(qrData.qr1);
        setQr2Image(qrData.qr2);
        setQr1(qrData.qr1);
        setQr2(qrData.qr2);

        const reqRes = await fetch("http://localhost:5000/api/admin/requests");
        const reqData = await reqRes.json();
        setRequests(reqData);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      }
    };

    fetchData();
  }, []);

  // 🖼️ Upload Image Handler
  const handleUpload = (e, setter) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    reader.readAsDataURL(file);
  };

  // 🚀 Submit new QR
  const handleSubmit = async () => {
  if (!tempQr1 && !tempQr2) {
    setMessage("Please select at least one QR image.");
    return;
  }

  const formData = new FormData();

  if (tempQr1) formData.append("qr1", tempQr1);
  if (tempQr2) formData.append("qr2", tempQr2);

  try {
    const res = await fetch("http://localhost:5000/api/qr/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");

    const data = await res.json();

    setQr1Image(data.qr1);
    setQr2Image(data.qr2);
    setQr1(data.qr1);
    setQr2(data.qr2);
    setMessage("QR codes uploaded successfully!");

    setTempQr1(null);
    setTempQr2(null);
  } catch (error) {
    setMessage("Error uploading QR codes.");
    console.error("Upload error:", error);
  }

  setTimeout(() => setMessage(""), 3000);
};



  // 🔁 Accept or Reject
  const handleRequestAction = async (id, action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: action }),
      });

      if (!res.ok) throw new Error("Failed to update request");

      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status: action } : req))
      );
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFAD75] text-center">
        Crypto Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
        {[
          { title: "Total Users", value: requests.length.toString() },
          { title: "Total Transactions", value: "45,678" },
          { title: "Active Coins", value: "128" },
        ].map((card, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-green-400">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-3xl font-bold text-[#9AD953]">{card.value}</p>
          </div>
        ))}
      </div>

      {/* QR Upload */}
      <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-xl border-4 border-green-400 shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-[#FFAD75] mb-6">Upload Payment QR Codes</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="flex-1">
              <label className="block mb-2">Upload QR 1:</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, setTempQr1)} className="w-full bg-gray-700 text-white p-2 rounded" />
              {(tempQr1 || qr1Image) && <img src={tempQr1 || qr1Image} alt="Preview QR1" className="mt-4 w-48 mx-auto rounded border border-green-400" />}
            </div>

            <div className="flex-1">
              <label className="block mb-2">Upload QR 2:</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, setTempQr2)} className="w-full bg-gray-700 text-white p-2 rounded" />
              {(tempQr2 || qr2Image) && <img src={tempQr2 || qr2Image} alt="Preview QR2" className="mt-4 w-48 mx-auto rounded border border-green-400" />}
            </div>
          </div>

          <button onClick={handleSubmit} className="w-full mt-4 bg-[#9AD953] hover:bg-[#F5C96D] text-black font-bold py-3 rounded-md transition duration-300 hover:scale-105">Submit</button>

          {message && <p className="text-center text-green-400 font-medium mt-4 animate-pulse">{message}</p>}
        </div>
      </div>

      {/* Requests */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#FFAD75] text-center">User Subscription Requests</h2>

        <div className={`${requests.length > 0 ? "h-[500px]" : ""} overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-700 pr-2`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requests.length > 0 ? (
              requests.map((req) => (
                <div key={req._id} className="bg-gray-800 border-4 border-green-400 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-1">Name: <span className="text-[#9AD953]">{req.name}</span></h3>
                  <p className="mb-1">Email: <span className="text-gray-300">{req.email}</span></p>
                  <p className="mb-3">UTR Number: <span className="text-gray-300">{req.utr}</span></p>

                  <img src={poster50lakh} alt="Screenshot" className="w-48 rounded border border-green-400 mb-4" />

                  <p className={`mb-4 font-semibold ${req.status === "accepted" ? "text-green-400" : req.status === "rejected" ? "text-red-400" : "text-yellow-300"}`}>
                    Status: {req.status}
                  </p>

                  {req.status === "pending" && (
                    <div className="flex gap-4">
                      <button onClick={() => handleRequestAction(req._id, "accepted")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Accept</button>
                      <button onClick={() => handleRequestAction(req._id, "rejected")} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reject</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No user requests found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
