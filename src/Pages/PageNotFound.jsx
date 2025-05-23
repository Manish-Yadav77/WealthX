import React from "react";
import { useNavigate } from "react-router-dom";
// import { AlertTriangle } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          {/* <AlertTriangle size={64} className="text-yellow-400" /> */}
        </div>
        <h1 className="text-5xl font-bold mb-4 text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
