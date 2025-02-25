import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { message } from 'antd'

const ProfilePage = () => {
  const { user, userLogOut } = useContext(AuthContext)

  const handleSignOut = () => {
    userLogOut()
    .then(()=>{
      message.success("You are successfully logedout.!")
    })
    .catch(()=>{
      message.error("Can't logedout right now.!")
    })
  }
  return (
    <div className='bg-gray-100 p-6 min-h-screen'>
      <h1 className='mb-6 font-bold text-gray-800 text-2xl'>Profile</h1>

      {/* Profile Card */}
      <div className='bg-white shadow-lg mb-6 p-6 rounded-lg'>
        <div className='flex items-center space-x-6'>
          <img
            src={user?.photoURL}
            alt='Profile'
            className='rounded-full w-24 h-24'
          />
          <div>
            <h2 className='font-bold text-gray-800 text-xl'>{user?.displayName}</h2>
            <p className='text-gray-600'>{user?.email}</p>
            <p className='mt-2 text-gray-600 italic'>
              {user?.bio ? user.bio : "Plese write your Bio"}
            </p>
          </div>
        </div>
      </div>

      {/* Activity Statistics */}
      <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mb-6'>
        <div className='bg-white shadow-lg p-6 rounded-lg'>
          <h3 className='font-semibold text-gray-800 text-lg'>
            Tasks Completed
          </h3>
          <p className='font-bold text-blue-500 text-3xl'>75</p>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg'>
          <h3 className='font-semibold text-gray-800 text-lg'>
            Tasks In Progress
          </h3>
          <p className='font-bold text-yellow-500 text-3xl'>12</p>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg'>
          <h3 className='font-semibold text-gray-800 text-lg'>Overdue Tasks</h3>
          <p className='font-bold text-red-500 text-3xl'>3</p>
        </div>
      </div>

      {/* Settings Section */}
      <div className='bg-white shadow-lg p-6 rounded-lg'>
        <h2 className='mb-4 font-bold text-gray-800 text-xl'>Settings</h2>
        <form className='space-y-4'>
          {/* Name */}
          <div>
            <label className='block font-medium text-gray-700 text-sm'>
              Full Name
            </label>
            <input
              type='text'
              defaultValue='John Doe'
              className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block font-medium text-gray-700 text-sm'>
              Email
            </label>
            <input
              type='email'
              defaultValue='john.doe@example.com'
              className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>

          {/* Bio */}
          <div>
            <label className='block font-medium text-gray-700 text-sm'>
              Bio
            </label>
            <textarea
              defaultValue='Passionate about productivity and task management.'
              className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
              rows='3'
            ></textarea>
          </div>

          {/* Save Button */}
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <div className='bg-white shadow-lg mt-4 p-6 rounded-lg'>
        <button
          onClick={handleSignOut}
          className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
