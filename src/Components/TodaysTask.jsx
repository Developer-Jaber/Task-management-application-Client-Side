import React, { useState } from "react";

const TodaysTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete project report", completed: false },
    { id: 2, text: "Team meeting at 10 AM", completed: true },
    { id: 3, text: "Review design mockups", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Function to toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // Calculate progress
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="bg-white shadow-lg mt-16 mr-7 p-6 rounded-lg">
      <h2 className="mb-4 font-bold text-gray-800 text-xl">Today's Tasks</h2>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-700 text-sm">Progress</span>
          <span className="font-medium text-gray-700 text-sm">
            {completedTasks}/{totalTasks} tasks
          </span>
        </div>
        <div className="bg-gray-200 rounded-full w-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="border-gray-300 rounded focus:ring-blue-500 w-5 h-5 text-blue-500"
              />
              <span
                className={`ml-3 text-gray-700 ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            {task.completed && (
              <span className="text-green-500 text-sm">✔️ Done</span>
            )}
          </div>
        ))}
      </div>

      {/* Add New Task */}
      <div className="mt-6">
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodaysTask;