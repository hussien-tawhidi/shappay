"use client";

import Link from "next/link";
import LightButton from "../buttons/LightButton";
import { IoLogoGoogle } from "react-icons/io";

const Register = () => {
  return (
    <div className=' py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto  md:w-[50vw] mx-auto w-full'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl font-semibold'>User Register</h1>
            </div>
            <div className=''>
              <form className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='fullname'
                    name='fullname'
                    type='text'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Email address'
                  />
                  <label
                    htmlFor='fullname'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                    Full Name
                  </label>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='email'
                    name='email'
                    type='text'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Email address'
                  />
                  <label
                    htmlFor='email'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                    Email Address
                  </label>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='password'
                    name='password'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Password'
                  />
                  <label
                    htmlFor='password'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                    Password
                  </label>
                </div>
                <div className='relative'>
                  <input
                    autoComplete='off'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                    placeholder='Password'
                  />
                  <label
                    htmlFor='confirmPassword'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                    Confirm your password
                  </label>
                </div>
                <div className='relative justify-between'>
                  <Link
                    href='/login'
                    className='text-[10px] text-left text-gray-600 hover:underline'>
                    Already have an account?
                  </Link>
                  <LightButton title='Login' />
                </div>
              </form>
              <p className='text-center text-[12px] text-gray-600'>
                Or Continue with google
              </p>
              <LightButton
                title='Google'
                Icon={IoLogoGoogle}
                iconClass='text-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
