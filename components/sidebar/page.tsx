"use client";
import React, { FC, useState } from 'react';
import image from '@/images/hoow.png'
import {
  HomeIcon,
  BriefcaseIcon,
  UsersIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'; // Ensure correct import path
import Image from "next/image";
import Link from 'next/link'

interface SidebarItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

// SidebarItem component with correct prop handling
const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, label }) => (
  <div className="flex items-center ml-8 space-x-3 p-2 hover:bg-gray-200 rounded">
    <Icon className="h-6 w-6 text-gray-600" />
    <span className="text-gray-800 text-[14px]">{label}</span>
  </div>
);

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Sidebar with Responsive Widths */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white border-r transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform md:translate-x-0 w-60 lg:w-[152px] xl:w-[252px]`}
      >
        <div className='mt-[34px] ml-[45px] mb-[30px]'>
          <Image
            src={image}
            alt="Image"// Adjust width and height
            height={45.39}
            width={120}
          />
        </div>


        {/* Sidebar Navigation */}
        <nav className="space-y-4 p-4">
          <Link href={'/admin'}>
            <SidebarItem icon={HomeIcon} label="Home" />
          </Link>
          <Link href={'admin/jobs'}>
            <SidebarItem icon={BriefcaseIcon} label="Jobs" />
          </Link>
          <Link href={'admin/coustomers'}>
            <SidebarItem icon={UsersIcon} label="Customers" />
          </Link>
          <Link href={'admin/jobs'}>
            <SidebarItem icon={ChatBubbleLeftIcon} label="Messages" />
          </Link>
          <Link href={'admin/jobs'}>
            <SidebarItem icon={Cog6ToothIcon} label="Accounts" />
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
