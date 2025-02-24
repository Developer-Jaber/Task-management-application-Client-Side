import React from "react";

const MyTaskPage = () => {
  // Sample tasks grouped by date
  const tasksByDate = [
    {
      date: "October 25, 2023",
      tasks: [
        {
          id: 1,
          title: "Complete project report",
          description: "Finish the final draft of the project report.",
          status: "In Progress",
        },
        {
          id: 2,
          title: "Team meeting",
          description: "Discuss project updates with the team.",
          status: "Completed",
        },
      ],
    },
    {
      date: "October 26, 2023",
      tasks: [
        {
          id: 3,
          title: "Review design mockups",
          description: "Provide feedback on the new design mockups.",
          status: "Pending",
        },
      ],
    },
    {
      date: "October 27, 2023",
      tasks: [
        {
          id: 4,
          title: "Submit weekly report",
          description: "Submit the weekly progress report to the manager.",
          status: "Pending",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="mb-6 font-bold text-gray-800 text-2xl">My Tasks</h1>

      {/* Task List Grouped by Date */}
      <div className="space-y-6">
        {tasksByDate.map((group) => (
          <div key={group.date} className="bg-white shadow-lg rounded-lg">
            {/* Date Header */}
            <div className="p-4 border-gray-200 border-b">
              <h2 className="font-semibold text-gray-800 text-lg">{group.date}</h2>
            </div>

            {/* Task List */}
            <div className="p-4">
              {group.tasks.map((task) => (
                <div
                  key={task.id}
                  className="hover:bg-gray-50 mb-4 p-4 rounded-lg transition-colors"
                >
                  <h3 className="font-medium text-gray-800 text-lg">
                    {task.title}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">{task.description}</p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-semibold ${
                        task.status === "Completed"
                          ? "text-green-500"
                          : task.status === "In Progress"
                          ? "text-blue-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTaskPage;