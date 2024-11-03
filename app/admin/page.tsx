import React from 'react'
import Calendar from '@/components/calendar/Calendar';
import StatsCards from '@/components/statbar/StatsCards';
import JobUpdates from '@/components/job/JobUpdates';
import Header from '@/components/header/Header'


const page = () => {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      <div className=" md:flex-row min-h-screen ">
        {/* Main content with responsive max-width */}
        <main className="">
          <Header />
          <StatsCards />
          <div className='w-[700px] h-[143px] bg-[#243A50] rounded-md hidden mt-6 lg:block'>
            <div className='flex justify-evenly'>
              <div className=''>
                <h1 className='mt-10 text-[#8D9BB4]'>Open Jobs</h1>
                <p className='text-white font-[600] text-[36px]'>13</p>
              </div>
              <div className=''>
                <h1 className='mt-10 text-[#8D9BB4]'>Closed Jobs</h1>
                <p className='text-white font-[600] text-[36px]'>125</p>
              </div>
              <div className=''>
                <h1 className='mt-10 text-[#8D9BB4]'>Overdue Jobs</h1>
                <p className='text-white font-[600] text-[36px]'>2</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='flex flex-col w-[306px] lg:w-[506px] bg-[#F5F5F7]'>
        <Calendar />
        <JobUpdates />
      </div>
    </div>
  )
}

export default page