import React from 'react';
import { LuPlane, LuShield } from 'react-icons/lu';
import { IoMdInformationCircle } from "react-icons/io";
import { CiCalendar, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar } from 'react-icons/fa6';
import { MdVerifiedUser } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';


const AvailableRoutes = () => {
    return (
        <div className='lg:py-32 py-20 bg-[#]'>
            <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>Available Routes</h2>

            <div className='lg:w-[80%] mx-auto'>

                {
                    [...Array(4)].map((_, index) => (
                        <div key={index} className='shadow-lg rounded-lg  p-10 my-5'>
                            <div className='flex flex-wrap items-center justify-between '>
                                <div className='flex items-center text-primary gap-3 font-medium'>
                                    <div className='w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg'>
                                        <LuPlane className='text-2xl' />
                                    </div>
                                    <h2>Direct flight</h2>
                                </div>
                                <div className='flex flex-col justify-end items-end text-gray-500'>
                                    <h3 className='text-3xl font-semibold text-primary mb-3'>125.50€ </h3>
                                    <span className='flex items-center gap-3'> <LuShield className=' text-gray-500' />39.00 € including insurance and protection  <IoMdInformationCircle className='text-gray-500' /> </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between gap-10 items-center my-5'>
                                <div>
                                    <div className='flex gap-2 my-8'>
                                        <CiLocationOn className='text-2xl' />
                                        <div >
                                            <p>Paris</p>
                                            <div className='flex items-center gap-2'>
                                                <span className='flex items-center gap-2 text-sm'> <CiCalendar /> 15 Mar 2024</span>
                                                <span className='flex items-center gap-2 ml-5 text-sm'> <FaRegClock /> 14:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 my-8'>
                                        <CiLocationOn className='text-2xl' />
                                        <div >
                                            <p>Brazzaville Maya-Maya</p>
                                            <div className='flex items-center gap-2'>
                                                <span className='flex items-center gap-2 text-sm'> <CiCalendar /> 15 Mar 2024</span>
                                                <span className='flex items-center gap-2 ml-5 text-sm'> <FaRegClock /> 14:30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#eeeff8] py-5 w-96 px-10 rounded-lg text-primary' >
                                    <h3 className='font-semibold'>Your shipment</h3>
                                    <h2 className='text-2xl font-semibold '>3 kg</h2>
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center justify-between gap-5'>
                                <div className='flex flex-wrap items-center gap-5'>
                                    <img className='w-14 rounded-full' src="/Images/Isend/availableRoutesUser.png" alt="" />
                                    <div>
                                        <h3 className='font-semibold text-primary'>John Doe</h3>
                                        <div className='flex items-center flex-wrap gap-3'>
                                            <span className='flex items-center gap-3 text-gray-500 '>4.00 <FaStar className='text-yellow-400' />  (157 reviews)</span>
                                            <li className='list-disc text-gray-600 mx-5'>24 packages delivered</li>
                                            <div className='flex flex-wrap items-center gap-2'>
                                                <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Verified traveler</span>
                                                <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center justify-end gap-5'>
                                    <button className='flex items-center gap-3 py-3 px-10 text-primary border-2 border-primary rounded-lg'><CiStar /> View review</button>
                                    <button className='flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg'><FiMessageSquare /> Contact</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default AvailableRoutes;
