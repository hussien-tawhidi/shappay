"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import LightButton from "../buttons/LightButton";
import { IoLogoGoogle } from "react-icons/io";
import { signIn } from "next-auth/react";
import truncate from "truncate";
import { signOut } from "../../../auth";

interface props {
  session: any;
}

const UserMenu = ({ session }: props) => {
  return (
    <div className='absolute top-8 right-5 p-3 flex flex-col bg-slate-100 text-gray-600 rounded-md shadow-md'>
      <h4 className='font-bold border-b border-gray-600'>
        Welcome to Shoppay !
      </h4>
      {session ? (
        <div className=''>
          <div className='flex items-center gap-2'>
            <Image
              src={session?.user?.image || "/images/user-avatar.png"}
              width={1000}
              height={1000}
              alt={session?.user?.name || "user name"}
              className='object-cover rounded-full border w-12 h-12'
            />
            <div className='text-[12px]'>
              <span className='font-bold text-[14px]'>Welcome Back,</span>
              <h3 className='capitalize font-semibold'>
                {truncate(session?.user?.name, 9)}
              </h3>
            </div>
          </div>
          <ul className='text-[12px] my-2'>
            <li className='pb-1 hover:font-semibold hover:underline transition-all'>
              <Link href='/profile'>Account</Link>
            </li>
            <li className='pb-1 hover:font-semibold hover:underline transition-all'>
              <Link href='/profile/orders'>My Orders</Link>
            </li>
            <li className='pb-1 hover:font-semibold hover:underline transition-all'>
              <Link href='/profile/messages'>Message Center</Link>
            </li>
            <li className='pb-1 hover:font-semibold hover:underline transition-all'>
              <Link href='/profile/address'>Address</Link>
            </li>
            <li className='pb-1 hover:font-semibold hover:underline transition-all'>
              <Link href='/profile/whishlist'>Whishlist</Link>
            </li>
          </ul>
          <LightButton
            title='Sign out'
            Icon={LiaSignOutAltSolid}
            iconClass='text-lg'
          />
        </div>
      ) : (
        <div className=''>
          <div className='flex gap-4 mt-5 mb-3'>
            <Link href='/register'>
              {" "}
              <LightButton
                title='Register'
                Icon={FaRegUser}
                iconClass='text-lg'
              />
            </Link>
            <Link href='/login'>
              <LightButton title='Login' Icon={FaRegUser} iconClass='text-lg' />
            </Link>
          </div>
          <p className='text-center text-[12px] text-gray-600'>
            Or Continue with google
          </p>
          <LightButton
            title='Google'
            Icon={IoLogoGoogle}
            iconClass='text-lg'
            onClick={() => signIn("google")}
          />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
