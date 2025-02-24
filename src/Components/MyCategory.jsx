import React, { useState } from "react";

const MyCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Work", color: "bg-blue-500", icon: "💼" },
    { id: 2, name: "Personal", color: "bg-green-500", icon: "👤" },
    { id: 3, name: "Shopping", color: "bg-yellow-500", icon: "🛒" },
    { id: 4, name: "Health", color: "bg-red-500", icon: "🏥" },
  ]);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("bg-blue-500");

  // Function to add a new category
  const addCategory = () => {
    if (newCategoryName.trim() !== "") {
      const newCategory = {
        id: categories.length + 1,
        name: newCategoryName,
        color: newCategoryColor,
        icon: "📁", // Default icon for new categories
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName("");
    }
  };

  return (
    <div className="bg-white shadow-lg mr-4 mb-4 ml-5 p-4 rounded-lg">
      <h2 className="mb-4 font-bold text-gray-800 text-xl">My Categories</h2>

      {/* Category Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`p-6 rounded-lg text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105 ${category.color}`}
          >
            <span className="mb-2 text-3xl">{category.icon}</span>
            <h3 className="font-semibold text-lg">{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Add New Category */}
      <div className="mt-6">
        <h3 className="mb-2 font-semibold text-gray-800 text-lg">
          Add New Category
        </h3>
        <div className="flex sm:flex-row flex-col gap-4">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Category name"
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newCategoryColor}
            onChange={(e) => setNewCategoryColor(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="bg-blue-500">Blue</option>
            <option value="bg-green-500">Green</option>
            <option value="bg-yellow-500">Yellow</option>
            <option value="bg-red-500">Red</option>
            <option value="bg-purple-500">Purple</option>
            <option value="bg-pink-500">Pink</option>
          </select>
          <button
            onClick={addCategory}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCategory;