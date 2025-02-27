import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import { message } from 'antd';

const DailyTaskComponent = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState([]); // Track checked tasks

  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/task/email/${user.email}`
        );
        setTasks(response.data); // Assuming the API returns an array of tasks
        setLoading(false);
      } catch (err) {
        setError(err.message);
        message.error(err.message);
      }
    };

    fetchTasks();
  }, [user]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Filter tasks for today
  const todaysTasks = tasks.filter(task => task.dueDate === today);

  // Handle checkbox click
  const handleCheckboxClick = taskId => {
    // Update the task status to "In Progress"
    const updatedTasks = tasks.map(task =>
      task._id === taskId ? { ...task, status: 'In Progress' } : task
    );
    setTasks(updatedTasks);

    // Add or remove the task from the checkedTasks list
    if (checkedTasks.includes(taskId)) {
      setCheckedTasks(checkedTasks.filter(id => id !== taskId));
    } else {
      setCheckedTasks([...checkedTasks, taskId]);
    }
  };

  // Handle submit
  const handleSubmit = async () => {
    try {
      // Mark all checked tasks as "Completed"
      const updatedTasks = tasks.map(task =>
        checkedTasks.includes(task._id)
          ? { ...task, status: 'Completed' }
          : task
      );

      // Update each task individually
      for (const taskId of checkedTasks) {
        await axios.put(`http://localhost:5000/task/${taskId}`, {
          status: 'Completed',
        });
      }

      // Update the UI
      setTasks(updatedTasks);
      setCheckedTasks([]); // Clear the checked tasks
      message.success('Tasks updated successfully!');
    } catch (err) {
      setError('Failed to update tasks.');
      message.error('Failed to update tasks.');
      console.error(err);
    }
  };

  if (loading) {
    return <p className='text-gray-600'>Loading tasks...</p>;
  }

  if (error) {
    return <p className='text-red-500'>Error: {error}</p>;
  }

  return (
    <div className='bg-white shadow-lg mt-16 mr-8 p-6 rounded-lg'>
      <h2 className='mb-4 font-bold text-gray-800 text-xl'>Today's Tasks</h2>

      {/* Display today's tasks */}
      {todaysTasks.length > 0 ? (
        <div className='space-y-4'>
          {todaysTasks.map(task => (
            <div
              key={task._id}
              className='hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition-colors'
            >
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='font-medium text-gray-800 text-lg'>
                    {task.title}
                  </h3>
                  <p className='mt-1 text-gray-600 text-sm'>
                    {task.description}
                  </p>
                  <div className='flex items-center mt-2'>
                    <span
                      className={`text-sm font-semibold ${
                        task.status === 'Completed'
                          ? 'text-green-500'
                          : task.status === 'In Progress'
                          ? 'text-blue-500'
                          : 'text-yellow-500'
                      }`}
                    >
                      {task.status}
                    </span>
                    <span className='ml-2 text-gray-600 text-sm'>
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>
                <input
                  type='checkbox'
                  checked={checkedTasks.includes(task._id)}
                  onChange={() => handleCheckboxClick(task._id)}
                  className='border-gray-300 rounded focus:ring-blue-500 w-5 h-5 text-blue-500'
                  disabled={task.status === 'Completed'} // Disable checkbox if task is completed
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-600'>No tasks for today.</p>
      )}

      {/* Submit Button */}
      {checkedTasks.length > 0 && (
        <div className='mt-6'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
          >
            Submit Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default DailyTaskComponent;