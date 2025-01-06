import React from 'react';
import { FaSearch } from 'react-icons/fa';

const AllUserMessage = () => {
    return (
        <div className="">
            {/* Logo */}
            <div className='border-b border-gray-400'>
                <img className="w-1/2 mx-auto py-5" src="/Images/logo.svg" alt="Logo" />
            </div>

            {/* Header */}
            <div className="p-5 border-b border-gray-400">
                <h2 className="font-semibold text-xl mb-5">Messages</h2>
                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search people or message"
                        className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <div className=''>
                <div className='p-5 flex items-start justify-between gap-2 cursor-pointer hover:bg-gray-100'>
                    <div className='flex gap-5'>
                        <img className='w-10 h-10 rounded-full' src="/Images/auth/Affiche_cobag.png" alt="" />
                        <div>
                            <h2 className='font-semibold'>Tomas Martian</h2>
                            <p className='text-gray-500 text-sm'>i just sad, we may have a good...</p>
                        </div>
                    </div>
                    <span className='text-gray-500 text-sm'>06 jan</span>
                </div>
            </div>
        </div>
    );
}

export default AllUserMessage;
