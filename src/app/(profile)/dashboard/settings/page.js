import React from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Page = () => {
    return (
        <div>
            <div className='bg-white p-5 lg:w-3/4 mx-auto rounded-lg'>
                <div>
                    <h2 className='text-2xl font-semibold text-primary mb-2'>Account settings</h2>
                    <p>Manage your bookings as a sender or traveler,</p>
                    <br />

                    <div className="relative w-full">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">Language</span>
                        <div className="relative">
                            <select
                                name="language"
                                id="language"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="English">English</option>
                                <option value="French">French</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full my-5">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">Time zone</span>
                        <div className="relative">
                            <select
                                name="language"
                                id="language"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="English">USA</option>
                                <option value="French">French</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full my-5">
                        <span className="font-semibold text-sm text-gray-400 block mb-2">Currency</span>
                        <div className="relative">
                            <select
                                name="language"
                                id="language"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="Euro">Euro</option>
                                <option value="Doller">Doller</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5 bg-white p-5 lg:w-3/4 mx-auto rounded-lg'>
                <h2 className='text-2xl font-semibold text-primary mb-2'>Preferences</h2>

                <section id='preferences2' className='my-5 lg:p-5 bg-white rounded-lg'>
                    <div>
                        <div className='rounded-lg my-10 flex items-center justify-between'>
                            <div className=' flex items-center gap-5'>
                                <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                    <IoMdNotifications className='text-2xl text-primary' />
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-1'>Notifications SMS</h2>
                                    <span className='text-sm'>Receive SMS notifications</span>
                                </div>
                            </div>
                            <div>
                                <FaToggleOn className='text-5xl font-semibold text-primary' />
                            </div>
                        </div>
                        <div className='rounded-lg my-10 flex items-center justify-between'>
                            <div className=' flex items-center gap-5'>
                                <div className='flex items-center gap-3 w-14 h-14 bg-[#eeefff] text-[#2b8f6c] justify-center rounded-md'>
                                    <MdOutlineEmail className='text-2xl text-primary' />
                                </div>
                                <div>
                                    <h2 className='font-semibold mb-1'>Notifications email</h2>
                                    <span className='text-sm'>Receive email notifications</span>
                                </div>
                            </div>
                            <div>
                                <FaToggleOn className='text-5xl font-semibold text-primary' />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
