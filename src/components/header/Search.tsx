"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Search = () => {
  return (
    <div className='flex items-center justify-center py-2'>
      <div className='flex items-center justify-center gap-3 w-full'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={100}
          height={100}
          className='w-10 h-auto object-cover'
        />
        <form className='w-[50vw] flex items-center relative'>
          <input
            type='text'
            className='w-full p-1.5 border focus:border-0'
            placeholder='Search ...'
          />
          <CiSearch className='absolute right-3 font-extrabold text-lg cursor-pointer' />
        </form>
        <div className='relative'>
          <PiShoppingCartSimpleLight className='font-bold text-3xl' />
          <span className='absolute top-0 right-0 text-[8px] bg-gray-600/90 text-slate-100 rounded-full w-3 h-3 flex items-center justify-center '>
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
