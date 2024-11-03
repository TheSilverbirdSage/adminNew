import React from 'react'
import Image from "next/image";
import image from '@/images/angle-right-small.png'
import image1 from '@/images/notificate.png'
import image2 from '@/images/Profil.png'

const page = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='mt-10'>
          <p className='font-[600] text-[24px]'>Jobs</p>
          <div className='flex justify-between items-center'>
            <div className='flex-1'>
              <h2 className='font-[400] text-[14px] mt-6 text-[#3498DB] whitespace-nowrap hover:underline cursor-pointer'>View Insights</h2>
            </div>
            <div className='flex-1 mt-[1.6rem] ml-3'>
              <Image
                src={image}
                alt="Image"// Adjust width and height
                height={10}
                width={6}
              />
            </div>
          </div>
        </div>
        <div className='flex mt-12'>
          <div className='mr-8'>
            <button className='w-[200px] h-[55px] rounded-[50px] bg-[#34495E] font-[600] text-[16px] text-white'>Start a job</button>
          </div>
          <div className='mr-6 cursor-pointer'>
            <Image
              src={image1}
              alt="Image"// Adjust width and height
              height={52}
              width={52}
            />
          </div>
          <div className='mr-14 cursor-pointer'>
            <Image
              src={image2}
              alt="Image"// Adjust width and height
              height={52}
              width={52}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page