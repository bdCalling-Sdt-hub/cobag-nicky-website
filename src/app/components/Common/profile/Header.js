import Link from 'next/link';
import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuMessageSquareText } from 'react-icons/lu';

const Header = () => {
    return (
        <div className='p-5 bg-white flex justify-between items-center gap-3'>
            <h1 className='text-2xl font-bold text-primary'>Dashboard</h1>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <LuMessageSquareText className='text-4xl text-primary' />
                    <span className='w-5 h-5 bg-red-600 rounded-full absolute -top-2 -right-2 text-white flex items-center justify-center text-xs'>1</span>
                </div>
                <div className='relative'>
                    <IoMdNotificationsOutline className='text-4xl text-primary' />
                    <span className='w-5 h-5 bg-red-600 rounded-full absolute -top-1 -right-1 text-white flex items-center justify-center text-xs'>1</span>
                </div>
                <Link href={"/dashboard/profile"} className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-10 rounded-full' src="/Images/Isend/availableRoutesUser.png" alt="" />
                    <h2 className='font-semibold'>John Doe</h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;
