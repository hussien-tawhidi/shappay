"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown, MdSecurity } from "react-icons/md";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import UserMenu from "./UserMenu";
import { IoMdClose } from "react-icons/io";

interface props {
  flag: string;
  session: any;
}

const TopHeader = ({ flag, session }: props) => {
  const [visible, setVisible] = useState(false);
  const country = {} as any;

  const handleUserMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className='flex justify-end px-5 relative border py-1'>
      <ul className='flex gap-2 items-center'>
        <li className='flex md:gap-2 gap-0.5 items-center  text-gray-700 text-[12px] px-2 border-r-2 hover:underline hover:text-gray-900 transition-all cursor-pointer'>
          <Image
            src={flag || "/images/afg-flag.png"}
            alt=''
            width={50}
            height={50}
            className='object-cover rounded-full md w-7 h-7 '
          />
        </li>
        <li className='flex md:gap-2 gap-0.5 items-center px-2 border-r-2 text-gray-700 text-[12px] hover:underline hover:text-gray-900 transition-all cursor-pointer'>
          <MdSecurity />
          <span>Buyer Protection</span>
        </li>
        <li className='flex md:gap-2 gap-0.5 items-center text-gray-700 text-[12px]  px-2 border-r-2 hover:underline hover:text-gray-900 transition-all cursor-pointer'>
          <span>Customer Service</span>
        </li>
        <li className='flex md:gap-2 gap-0.5 items-center text-gray-700 text-[12px]  px-2 border-r-2 hover:underline hover:text-gray-900 transition-all cursor-pointer'>
          <span>Help</span>
        </li>
        <li className='flex md:gap-2 gap-0.5 text-gray-700 text-[12px] items-center  px-2 border-r-2 hover:underline hover:text-gray-900 transition-all cursor-pointer'>
          <BsSuitHeart />
          <Link href='/profile/whishlist'>
            <span>Whishlist</span>
          </Link>
        </li>
        <li
          className='flex md:gap-2 gap-0.5 items-center text-gray-700 text-[14px] px-2 hover:underline hover:text-gray-900 transition-all cursor-pointer'
          onClick={handleUserMenu}>
          {session ? (
            <div className=''>
              <div className='relative'>
                <Image
                  src={session?.user?.image || "/images/user-avatar.png"}
                  alt=''
                  width={50}
                  height={50}
                  className='object-cover w-8 h-8 rounded-full border'
                />
                <div className='absolute bottom-0 -left-1'>
                  {visible ? (
                    <div className='rounded-full bg-gray-600/90 text-white'>
                      <IoMdClose className='font-semibold ' />
                    </div>
                  ) : (
                    <MdKeyboardDoubleArrowDown className='font-bold' />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className=''>
              <div className=''>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </div>
          )}
          {visible && <UserMenu session={session} />}
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
