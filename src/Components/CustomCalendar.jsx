import React, { useState } from "react";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Track the current date

  // Function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Function to navigate to today's date
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Function to check if a date is today
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Render the calendar grid
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const calendarDays = [];
    let dayCounter = 1;

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isTodayDate = isToday(i); // Check if this day is today
      calendarDays.push(
        <div
          key={`day-${i}`}
          className={`text-center p-2 border border-gray-200 hover:bg-blue-100 cursor-pointer ${
            isTodayDate ? "bg-blue-500 text-white font-bold" : ""
          }`}
        >
          {i}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="mb-4 font-bold text-gray-800 text-2xl">Calendar</h1>
      <div className="bg-white shadow-lg p-4 rounded-lg">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={goToPreviousMonth}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
          >
            Previous
          </button>
          <h2 className="font-semibold text-xl">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button
            onClick={goToNextMonth}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
          >
            Next
          </button>
        </div>

        {/* Go to Today Button */}
        <div className="mb-4">
          <button
            onClick={goToToday}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
          >
            Go to Today
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="gap-2 grid grid-cols-7">
          {/* Weekday Headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold text-gray-700 text-center">
              {day}
            </div>
          ))}
          {/* Calendar Days */}
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;