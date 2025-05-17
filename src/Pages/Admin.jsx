import React, { useContext, useEffect, useState } from "react";
import { QrContext } from "../context/QrContext";
import { poster50lakh } from "../data";

const AdminPage = () => {
  const { qr1, qr2, setQr1, setQr2, token, user } = useContext(QrContext);

  const [qr1Image, setQr1Image] = useState(null);
  const [qr2Image, setQr2Image] = useState(null);
  const [tempQr1, setTempQr1] = useState(null);
  const [tempQr2, setTempQr2] = useState(null);
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [userStatuses, setUserStatuses] = useState({});
  const [val,setVal]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const qrRes = await fetch("http://localhost:5000/api/qrcodes");
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
  }, [val]);

  const handleUpload = (e, setter) => {
    const file = e.target.files[0];
    if (!file) return;
    setter(file);
  };

  const handleSubmit = async () => {
    if (!tempQr1 && !tempQr2) {
      setMessage("Please select at least one QR image.");
      return;
    }

    const formData = new FormData();
    if (tempQr1) formData.append("qr1", tempQr1);
    if (tempQr2) formData.append("qr2", tempQr2);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) throw new Error("QR upload failed");

      const data = await res.json();
      setQr1Image(data.qr1);
      setQr2Image(data.qr2);
      setQr1(data.qr1);
      setQr2(data.qr2);
      setMessage("QR codes uploaded successfully!");
      setTempQr1(null);
      setTempQr2(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Error uploading QR codes.");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  const handleRequestAction = async (action, loggedInEmail, userStatus, id) => {

    setVal((prev)=>!prev);
    
    try {
      // let updatedUser1;
      // // Update user status (no longer checking for "Pending" only)
      // if(userStatus==="Pending"){
      //   const userRes1 = await fetch(`http://localhost:5000/update-userstatus`, {
      //   method: "PATCH",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: loggedInEmail, status: action }),
      // });

      // if (!userRes1.ok) throw new Error("Failed to update user status");

      // updatedUser1 = await userRes1.json();
      // }

      // Update payment status
      const userRes2 = await fetch(`http://localhost:5000/update-paymentstatus`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, status: action }),
      });

      if (!userRes2.ok) throw new Error("Failed to update payment status");

      const updatedUser2 = await userRes2.json();

      setUserStatuses((prev) => ({
        ...prev,
        [loggedInEmail]: updatedUser2,
      }));
    } catch (error) {
      console.error("Error updating user/payment status:", error);
    }
  };

  console.log(requests);
  

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
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-green-400"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-3xl font-bold text-[#9AD953]">{card.value}</p>
          </div>
        ))}
      </div>

      {/* QR Upload */}
      <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-xl border-4 border-green-400 shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-[#FFAD75] mb-6">
          Upload Payment QR Codes
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="flex-1">
              <label className="block mb-2">Upload QR 1:</label>
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                onChange={(e) => handleUpload(e, setTempQr1)}
                className="w-full bg-gray-700 text-white p-2 rounded"
              />
              {tempQr1 && (
                <img
                  src={URL.createObjectURL(tempQr1)}
                  alt="Preview QR1"
                  className="mt-4 w-48 mx-auto rounded border border-green-400"
                />
              )}
            </div>

            <div className="flex-1">
              <label className="block mb-2">Upload QR 2:</label>
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                onChange={(e) => handleUpload(e, setTempQr2)}
                className="w-full bg-gray-700 text-white p-2 rounded"
              />
              {tempQr2 && (
                <img
                  src={URL.createObjectURL(tempQr2)}
                  alt="Preview QR2"
                  className="mt-4 w-48 mx-auto rounded border border-green-400"
                />
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-[#9AD953] hover:bg-[#F5C96D] text-black font-bold py-3 rounded-md transition duration-300 hover:scale-105"
          >
            Submit
          </button>

          {message && (
            <p className="text-center text-green-400 font-medium mt-4 animate-pulse">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Requests */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#FFAD75] text-center">
          User Subscription Requests
        </h2>

        <div
          className={`${
            requests.length > 0 ? "h-[570px]" : ""
          } overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-700 pr-2`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requests.length > 0 ? (
              requests.map((req) => (
                <div
                  key={req._id}
                  className="bg-gray-800 border-4 border-green-400 p-6 text-center rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-1">
                    Name: <span className="text-[#9AD953]">{req.name}</span>
                  </h3>
                  <p className="mb-1">
                    Email: <span className="text-gray-300">{req.email}</span>
                  </p>
                  <p className="mb-3">
                    UTR Number: <span className="text-gray-300">{req.utr}</span>
                  </p>

                  <div className="text-center flex justify-center">
                    <img
                      src={req.screenshotPath}
                      alt="Screenshot"
                      className="w-48 rounded border border-green-400 mb-4"
                    />
                  </div>

                  <p className="mb-2 text-yellow-300 font-semibold">
                    Request Status: {req.status}
                  </p>
                  {/* <p className="mb-4 text-blue-300 font-semibold">
                    User Status:{" "}
                    {userStatuses[req.loggedInEmail]?.status || "unknown"}
                  </p> */}

                  {req.status === "Pending" && (
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          handleRequestAction("Accepted", req.loggedInEmail, req.status, req._id)
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:cursor-pointer"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleRequestAction("Rejected", req.loggedInEmail, req.status, req._id)
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No requests found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
