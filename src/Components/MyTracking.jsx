import React, { useState } from "react";

const MyTracking = () => {
  const [trackingData, setTrackingData] = useState([
    { id: 1, name: "Tasks Completed", progress: 75, color: "bg-blue-500" },
    { id: 2, name: "Goals Achieved", progress: 50, color: "bg-green-500" },
    { id: 3, name: "Projects Done", progress: 90, color: "bg-yellow-500" },
    { id: 4, name: "Learning Hours", progress: 60, color: "bg-purple-500" },
  ]);

  // Function to update progress (for demonstration purposes)
  const updateProgress = (id, newProgress) => {
    setTrackingData(
      trackingData.map((item) =>
        item.id === id ? { ...item, progress: newProgress } : item
      )
    );
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="mb-4 font-bold text-gray-800 text-xl">My Tracking</h2>

      {/* Progress Bars */}
      <div className="space-y-4">
        {trackingData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 text-sm">
                {item.name}
              </span>
              <span className="font-medium text-gray-700 text-sm">
                {item.progress}%
              </span>
            </div>
            <div className="bg-gray-200 rounded-full w-full h-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mt-8">
        <h3 className="mb-4 font-semibold text-gray-800 text-lg">
          Progress Overview
        </h3>
        <div className="flex justify-between items-end h-40">
          {trackingData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center"
              style={{ height: "100%" }}
            >
              <div
                className={`w-8 ${item.color} rounded-t-lg transition-transform transform hover:scale-110`}
                style={{ height: `${item.progress}%` }}
              ></div>
              <span className="mt-2 text-gray-700 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Update Progress (Demo Purpose) */}
      <div className="mt-8">
        <h3 className="mb-4 font-semibold text-gray-800 text-lg">
          Update Progress (Demo)
        </h3>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          {trackingData.map((item) => (
            <div key={item.id} className="flex items-center">
              <span className="mr-2 text-gray-700 text-sm">{item.name}</span>
              <input
                type="number"
                value={item.progress}
                onChange={(e) =>
                  updateProgress(item.id, parseInt(e.target.value, 10))
                }
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
                min="0"
                max="100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTracking;