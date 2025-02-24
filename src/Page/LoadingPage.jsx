import React, { useEffect, useState } from "react";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <div className="text-center">
        {/* Logo or App Name */}
        <h1 className="mb-4 font-bold text-white text-4xl animate-bounce">
          TaskFlow
        </h1>

        {/* Loading Spinner */}
        <div className="mx-auto mb-4 border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin"></div>

        {/* Progress Bar */}
        <div className="bg-white mx-auto mb-4 rounded-full w-64 h-2 overflow-hidden">
          <div
            className="bg-blue-500 rounded-full h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-lg">Loading your tasks...</p>
      </div>
    </div>
  );
};

export default LoadingPage;