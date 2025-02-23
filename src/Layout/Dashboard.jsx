const Dashboard = () => {
  return (
    <section className='flex bg-gray-100 min-h-screen'>
      {/* Sidebar */}
      <aside className='bg-white shadow-lg w-64'>
        <div className='p-6'>
          <h1 className='font-bold text-blue-600 text-2xl'>Task Manager</h1>
        </div>
        <nav className='mt-6'>
          <ul>
            <li className='hover:bg-gray-100 px-6 py-2'>
              <a href='#' className='flex items-center text-gray-700'>
                <span className='mr-2'>📋</span>
                Tasks
              </a>
            </li>
            <li className='hover:bg-gray-100 px-6 py-2'>
              <a href='#' className='flex items-center text-gray-700'>
                <span className='mr-2'>📊</span>
                Analytics
              </a>
            </li>
            <li className='hover:bg-gray-100 px-6 py-2'>
              <a href='#' className='flex items-center text-gray-700'>
                <span className='mr-2'>⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Section */}
      <aside className='flex flex-col flex-1'>
        {/* Navigation Bar */}
        <nav className='bg-white shadow-sm p-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search...'
                className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='flex items-center space-x-4'>
              <button className='text-gray-600 hover:text-blue-600'>🔔</button>
              <div className='flex items-center'>
                <img
                  src='https://via.placeholder.com/40'
                  alt='User'
                  className='rounded-full w-8 h-8'
                />
                <span className='ml-2 text-gray-700'>John Doe</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Section */}
        <section className='flex-1 p-6'>
          <h2 className='mb-4 font-bold text-gray-800 text-xl'>Dashboard</h2>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* Card 1 */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>To-Do</h3>
              <p className='mt-2 text-gray-600'>5 tasks pending</p>
            </div>
            {/* Card 2 */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>
                In Progress
              </h3>
              <p className='mt-2 text-gray-600'>3 tasks in progress</p>
            </div>
            {/* Card 3 */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>Done</h3>
              <p className='mt-2 text-gray-600'>10 tasks completed</p>
            </div>
          </div>
        </section>
      </aside>
    </section>
  )
}

export default Dashboard
