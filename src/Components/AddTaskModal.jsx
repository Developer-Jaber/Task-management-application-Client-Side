import { useState } from "react";

const AddTaskModal = ({ isOpen, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Added:", task);
    onClose(); // Close modal after submission
    setTask({ title: "", description: "", dueDate: "", status: "Pending" }); // Reset form
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-invert backdrop-opacity-20">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="mb-4 font-bold text-gray-800 text-xl">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Title */}
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Description
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Due Date */}
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Status
            </label>
            <select
              name="status"
              value={task.status}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;