import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const [copyMessage, setCopyMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Fetch user payments and set userName
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user?.email) return;

      setLoading(true);
      try {
        const res = await fetch(
          `https://wealthx-backend.onrender.com/api/userinfo?email=${encodeURIComponent(
            user.email
          )}`
        );
        const data = await res.json();
        const payments = Array.isArray(data) ? data : data ? [data] : [];
        setUserInfo(payments);

        if (payments.length) {
          const latest = payments.reduce((a, b) =>
            new Date(a.submittedAt) > new Date(b.submittedAt) ? a : b
          );
          setUserName(latest.name || user.name || "User");
          const statusLower = latest.status?.toLowerCase();
          if (statusLower === "accepted" || statusLower === "rejected") {
            setPaymentStatus(latest.status);
            setShowPopup(true);
          }
        } else {
          setUserName(user.name || "User");
          setPaymentStatus(null);
          setShowPopup(false);
        }
      } catch (error) {
        console.error(error);
        setUserInfo([]);
        setUserName(user?.name || "User");
        setPaymentStatus(null);
        setShowPopup(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [user]);

  const handleCopy = () => {
  const referralLink = `${window.location.origin}/signup?ref=${user?.email || ""}`;
  const message = `मैंने खुद लिया है funded account challenge –
✅ Nominal fees में real money funded account
✅ और सबसे बड़ा फायदा – Fast Withdrawal Guarantee

इंडिया में अब बिना अपनी capital लगाए,
सिर्फ skills के दम पर Indian Market मे ट्रेडिंग करके पैसा कमाया जा सकता है।

अगर तुम भी serious हो trading को लेकर,
तो अब time waste मत करो।

📈 Join करो इस funded program को –
और मेरी तरह तुम भी अपनी trading journey को अगले level पर ले जाओ।

🎁 Use मेरा referral link और पाओ special bonus/discount:
👉 ${referralLink} 👈`;

  navigator.clipboard.writeText(message);
  setCopyMessage("Message copied! Paste it anywhere to invite others.");
  setTimeout(() => setCopyMessage(""), 3000);
};


  const closePopup = () => {
    setShowPopup(false);
    setPaymentStatus(null);
  };

  const formatDate = (isoString) => {
    try {
      return new Date(isoString).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  const Skeleton = ({ className }) => (
    <div
      className={`animate-pulse bg-gray-700 rounded ${className}`}
      aria-hidden="true"
    />
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6 md:p-12 font-sans select-none">
      {/* Greeting */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
          {loading ? <Skeleton className="h-14 max-w-xs mx-auto" /> : `Welcome, ${userName}`}
        </h1>
        <p className="mt-2 text-gray-400 text-lg italic">
          Your personalized dashboard — manage your plans, payments, and referrals.
        </p>
      </header>

      {/* Payment Status Popup */}
      {showPopup && paymentStatus && (
        <aside
          role="alertdialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
          onClick={closePopup}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                paymentStatus.toLowerCase() === "accepted" ? "text-green-400" : "text-red-400"
              }`}
            >
              Payment {paymentStatus.toLowerCase() === "accepted" ? "Approved 🎉" : "Rejected ❌"}
            </h2>
            <p className="text-gray-300 mb-8">
              Your latest payment status is <strong>{paymentStatus}</strong>.
            </p>
            <button
              onClick={closePopup}
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
              autoFocus
            >
              Close
            </button>
          </div>
        </aside>
      )}

      {/* Payment Records */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-400 tracking-wide">
          Your Payment Records
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-600 animate-pulse max-w-md mx-auto"
              >
                <div className="h-6 w-32 mb-4 bg-yellow-600 rounded" />
                <div className="h-4 w-20 mb-6 bg-yellow-500 rounded" />
                <div className="space-y-2">
                  {[...Array(4)].map((__, j) => (
                    <div key={j} className="h-4 w-full bg-yellow-500 rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : userInfo.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-h-[520px] overflow-y-auto px-4 md:px-0">
            {userInfo.map((payment) => (
              <article
                key={payment._id}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-yellow-500 flex flex-col"
                tabIndex={0}
                aria-label={`Payment record for ${payment.plan}, status ${payment.status}`}
              >
                <header className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-yellow-300 truncate">{payment.plan}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                      payment.status.toLowerCase() === "accepted"
                        ? "bg-green-600 text-green-100"
                        : payment.status.toLowerCase() === "rejected"
                        ? "bg-red-600 text-red-100"
                        : "bg-yellow-600 text-yellow-100"
                    }`}
                  >
                    {payment.status}
                  </span>
                </header>

                <div className="text-gray-300 flex-grow space-y-2 text-sm">
                  <p>
                    <strong className="text-white">Name:</strong> {payment.name}
                  </p>
                  <p>
                    <strong className="text-white">Email:</strong> {payment.email}
                  </p>
                  <p>
                    <strong className="text-white">Phone:</strong> {payment.phone}
                  </p>
                  <p>
                    <strong className="text-white">UTR:</strong> {payment.utr}
                  </p>
                  <p>
                    <strong className="text-white">Submitted:</strong> {formatDate(payment.submittedAt)}
                  </p>
                </div>

                {payment.screenshotPath && (
                  <figure className="mt-5">
                    <figcaption className="text-white font-semibold mb-2">
                      Payment Screenshot
                    </figcaption>
                    <a
                      href={payment.screenshotPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded overflow-hidden border border-gray-600 shadow-md hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={payment.screenshotPath}
                        alt="Payment Screenshot"
                        className="w-full max-h-44 object-cover"
                        loading="lazy"
                      />
                    </a>
                  </figure>
                )}
              </article>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500 text-lg font-light mt-10">
              No payment records found.
            </p>
          )
        )}

        <aside className="mt-8 max-w-3xl mx-auto bg-gray-700 bg-opacity-20 p-5 rounded border border-yellow-400 text-yellow-200 text-center text-sm font-medium tracking-wide">
          <strong>Note:</strong> Always use the same login email when purchasing a new plan to
          ensure your subscription updates correctly.
        </aside>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/accounts")}
            className="bg-yellow-400 text-gray-900 font-bold px-10 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Buy New Plan
          </button>
        </div>
      </section>

      {/* Refer and Earn */}
      <section className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-blue-400">
        <h2 className="text-3xl font-bold mb-5 text-center text-blue-400 drop-shadow-md">
          Refer & Earn Rewards
        </h2>
        <p className="mb-6 text-center text-blue-300 font-medium">
          Invite friends to join and earn exciting rewards on every successful referral!
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            readOnly
            value={`${window.location.origin}/signup?ref=${user?.email || ""}`}
            className="flex-grow bg-blue-700 text-white text-center rounded-md py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Referral link"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-6 py-3 shadow-md transition-transform hover:scale-105"
            aria-live="polite"
            aria-atomic="true"
          >
            Copy Link
          </button>
        </div>
        {copyMessage && (
          <p
            className="mt-3 text-center text-green-400 font-semibold animate-pulse"
            role="status"
          >
            {copyMessage}
          </p>
        )}
      </section>

      {/* Community Links */}
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 shadow-lg border border-purple-400">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400 drop-shadow-md">
          Join Our Community
        </h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition rounded-lg px-6 py-3 font-semibold shadow-lg text-white text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.52 3.48a11.887 11.887 0 0 0-16.5 0 11.883 11.883 0 0 0-3.4 8.42 11.884 11.884 0 0 0 3.4 8.41L2 22l2.99-2.17a11.89 11.89 0 0 0 8.41 3.4 11.89 11.89 0 0 0 8.42-3.4 11.88 11.88 0 0 0 0-16.5Zm-8.08 15.54a8.123 8.123 0 0 1-4.03-1.11l-.29-.17-2.39.68.64-2.33-.19-.3a8.148 8.148 0 0 1 1.12-10.63 8.13 8.13 0 0 1 5.72-2.34 8.108 8.108 0 0 1 8.08 8.07 8.108 8.108 0 0 1-2.34 5.72 8.117 8.117 0 0 1-5.61 2.31Z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="https://t.me/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg px-6 py-3 font-semibold shadow-lg text-white text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9.03 16.5h-.04l-.17-.06-1.36-.55a.48.48 0 0 1-.18-.16.54.54 0 0 1 .05-.57l7.84-8.79a.65.65 0 0 0-.92-.92l-8.79 7.85a.54.54 0 0 1-.57.05.48.48 0 0 1-.16-.18l-.55-1.37-.06-.17v-.04L7.5 8.94l5.99-3.43a1 1 0 0 1 1.41 1.15L11.88 16.5a1 1 0 0 1-2.85 0Z" />
            </svg>
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
};

export default UsersPage;
