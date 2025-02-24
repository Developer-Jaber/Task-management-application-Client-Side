import { Link, Outlet } from 'react-router-dom'
import '../assets/css/Dashboard.css'
import { DashboardOutlined } from '@ant-design/icons'

const Dashboard = () => {
  return (
    <section className='flex bg-gray-100 min-h-screen'>
      {/* Sidebar */}
      <aside className='bg-white shadow-lg m-3 rounded-lg w-64'>
        <div className='p-6'>
          <h1 className='font-bold text-blue-600 text-2xl'>Task Vibe</h1>
        </div>
        <nav className='mt-6'>
          <ul>
            <li className='hover:bg-gray-100 px-6 py-2'>
              <Link to='/' className='flex items-center text-gray-700'>
                <span className='mr-2'><DashboardOutlined /></span>
                Dashboard
              </Link>
            </li>

            <li className='hover:bg-gray-100 px-6 py-2'>
              <Link to='my-task' className='flex items-center text-gray-700'>
                <span className='mr-2'>📋</span>
                Tasks
              </Link>
            </li>

            <li className='hover:bg-gray-100 px-6 py-2'>
              <Link to='#' className='flex items-center text-gray-700'>
                <span className='mr-2'>📊</span>
                Analytics
              </Link>
            </li>

            <li className='hover:bg-gray-100 px-6 py-2'>
              <Link to='#' className='flex items-center text-gray-700'>
                <span className='mr-2'>⚙️</span>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Section */}
      <aside className='flex flex-col flex-1'>
        {/* Navigation Bar */}
        <nav className='bg-white shadow-sm mt-5 mr-5 ml-2 p-4 rounded-lg'>
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
        <section>
          <Outlet></Outlet>
        </section>
      </aside>
    </section>
  )
}

export default Dashboard
