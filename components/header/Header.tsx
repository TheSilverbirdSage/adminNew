import React from 'react'


const Header = () => (
    <div className="flex justify-between mt-8">
      <div>
        <h1 className="text-xl lg:text-[24px] lg:font-[600] font-semibold">
          Hi Ayomide
        </h1>
        <p className="text-sm md:text-base lg:text-[16px] lg:font-[400] text-gray-500">
          Let’s finish today’s job!
        </p>
      </div>
  
      <div className="flex items-center space-x-4">
        <img src="/avatar.jpg" alt="Profile" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
        <div className="text-right">
          <h4 className="font-medium">Good Stitching</h4>
          <p className="text-xs text-gray-500">Business account</p>
        </div>
      </div>
    </div>
  );
  

export default Header