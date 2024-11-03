import React from 'react'
import Image from "next/image";
import image from '@/images/angle-right-small.png'

const page = () => {
  return (
    <div className='flex'>
      <div className='mt-10'>
        <p className='font-[600] text-[24px]'>Coustomers </p>
      </div>
      <div className='mt-6 ml-16'>
        <h2 className='font-[400] text-[14px] mt-6 text-[#3498DB] whitespace-nowrap cursor-pointer'>View Insights</h2>
      </div>
      <div className=' ml-[0.69rem] mt-[3.45rem]'>
        <Image
          src={image}
          alt="Image"// Adjust width and height
          height={10}
          width={6}
        />
      </div>

    </div>

  )
}

export default page