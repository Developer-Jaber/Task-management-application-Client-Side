import CustomCalendar from "../Components/CustomCalendar"
import MyCategory from "../Components/MyCategory"
import MyTracking from "../Components/MyTracking"
import TodaysTask from "../Components/TodaysTask"

const LandingPage = () => {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 overscroll-auto'>
      <div>
        <CustomCalendar></CustomCalendar>
      </div>
      <div>
        <TodaysTask></TodaysTask>
      </div>
      <div>
        <MyCategory></MyCategory>
      </div>
      <div>
        <MyTracking></MyTracking>
      </div>
      {/* <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>To-Do</h3>
              <p className='mt-2 text-gray-600'>5 tasks pending</p>
            </div>
           
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>
                In Progress
              </h3>
              <p className='mt-2 text-gray-600'>3 tasks in progress</p>
            </div>
            
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-800 text-lg'>Done</h3>
              <p className='mt-2 text-gray-600'>10 tasks completed</p>
            </div> 
          </div> */}
    </div>
  )
}

export default LandingPage
