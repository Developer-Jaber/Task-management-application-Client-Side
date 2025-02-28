import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { AuthContext } from '../Provider/AuthProvider';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableTask } from '../Components/SortableTask';

const MyTaskPage = () => {
  const { user } = useContext(AuthContext);
  const [tasksByDate, setTasksByDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from the backend API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `https://task-management-application-server-side-six.vercel.app/task/email/${user.email}`
        ); // Replace with your API endpoint
        const tasks = response.data;

        // Group tasks by date
        const groupedTasks = groupTasksByDate(tasks);
        setTasksByDate(groupedTasks);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        message.error('Failed to fetch tasks.');
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user.email]);

  // Helper function to group tasks by date
  const groupTasksByDate = (tasks) => {
    const grouped = {};

    tasks.forEach((task) => {
      const date = new Date(task.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (!grouped[date]) {
        grouped[date] = [];
      }

      grouped[date].push(task);
    });

    // Convert the grouped object into an array of objects
    return Object.keys(grouped).map((date) => ({
      date,
      tasks: grouped[date],
    }));
  };

  // Handle task deletion
  const handleDeleteTask = async (taskId) => {
    try {
      console.log(taskId);
      await axios.delete(`https://task-management-application-server-side-six.vercel.app/task/${taskId}`); 
      message.success('Task deleted successfully!');

      // Refetch tasks to update the UI
      const updatedTasksByDate = tasksByDate.map((group) => ({
        ...group,
        tasks: group.tasks.filter((task) => task._id !== taskId),
      }));
      setTasksByDate(updatedTasksByDate);
    } catch (err) {
      message.error('Failed to delete task.');
      console.error(err);
    }
  };

  // Handle drag-and-drop reordering
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasksByDate((prevTasksByDate) => {
        const updatedTasksByDate = prevTasksByDate.map((group) => {
          const tasks = [...group.tasks];
          const oldIndex = tasks.findIndex((task) => task._id === active.id);
          const newIndex = tasks.findIndex((task) => task._id === over.id);

          // Reorder tasks
          if (oldIndex !== -1 && newIndex !== -1) {
            const [removed] = tasks.splice(oldIndex, 1);
            tasks.splice(newIndex, 0, removed);
          }

          return { ...group, tasks };
        });

        return updatedTasksByDate;
      });
    }
  };

  // Sensors for drag-and-drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (loading) {
    return <p className="p-6 text-gray-600">Loading tasks...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="mb-6 font-bold text-gray-800 text-2xl">My Tasks</h1>

      {/* Drag-and-drop context */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-6">
          {tasksByDate.map((group) => (
            <div key={group.date} className="bg-white shadow-lg rounded-lg">
              {/* Date Header */}
              <div className="p-4 border-gray-200 border-b">
                <h2 className="font-semibold text-gray-800 text-lg">
                  {group.date}
                </h2>
              </div>

              {/* Sortable task list */}
              <SortableContext
                items={group.tasks.map((task) => task._id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="p-4">
                  {group.tasks.map((task) => (
                    <SortableTask
                      key={task._id}
                      task={task}
                      onDelete={handleDeleteTask}
                    />
                  ))}
                </div>
              </SortableContext>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default MyTaskPage;