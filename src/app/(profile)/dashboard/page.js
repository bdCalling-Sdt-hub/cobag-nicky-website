import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='flex items-center justify-center min-h-[80vh] w-full'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h2 className='text-5xl font-semibold text-primary'>Welcome to Dashboard</h2>
                <Link href={'/dashboard/profile'} className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>Go Profile</Link>
            </div>
        </div>
    );
}

export default Page;