'use client';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiCalendar, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar, FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { FiMessageSquare } from 'react-icons/fi';
import { LuPlane } from 'react-icons/lu';
import { MdAccessTime, MdVerifiedUser } from 'react-icons/md';

const CouriersAvailable = () => {

    const { t } = i18n;

    const [isNotificaiton, setIsNotificaiton] = useState(true);
    const handleNotificationShowHide = () => {
        setIsNotificaiton(!isNotificaiton);
    }

    return (
        <div className='bg-[#f7f7fc]'>
            <div className='lg:py-32 py-20 bg-[#]'>
                <div className='lg:w-[80%] mx-auto mb-5 flex items-center gap-3'>
                    <p className='text-base font-semibold text-primary'>{t('newJourneyNotification654')} -</p>
                    {
                        isNotificaiton ?
                            <FaToggleOff className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                            :
                            <FaToggleOn className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                    }
                </div>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>{t('couriersAvailable')}</h2>

                <div className='lg:w-[80%] w-[90%] mx-auto'>

                    {
                        [...Array(4)].map((_, index) => (
                            <div data-aos="fade-up" data-aos-duration="300" key={index} className='shadow-lg rounded-lg  p-10 my-5 bg-white'>
                                <div className='flex items-center flex-wrap justify-between '>
                                    <div className='flex items-center text-primary gap-3 font-medium'>
                                        <div className='w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg'>
                                            <LuPlane className='text-2xl' />
                                        </div>
                                        <h2>Direct flight</h2>
                                    </div>
                                    {/* <div className='flex items-center gap-2 bg-[#fff4ea] text-[#ffb46d] font-semibold px-3 py-2 rounded-full'>
                                        <MdAccessTime className='text-2xl' /> Express
                                    </div> */}
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
                                            <div className='flex flex-wrap items-center gap-3'>
                                                <span className='flex items-center gap-3 text-gray-500 '>4.00 <FaStar className='text-yellow-400' />  (157 reviews)</span>
                                                <li className='list-disc text-gray-600 mx-5'>24 packages delivered</li>
                                                <div className='flex flex-wrap items-center gap-2'>
                                                    <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Verified traveler</span>
                                                    <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Expert</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-wrap justify-end items-start gap-3 mb-2'>
                                            <h2 className='text-2xl font-semibold text-primary'>25€</h2>
                                            {/* <div>
                                                <span className='flex items-center flex-wrap gap-3 text-[#ffd16f] '>(+5€ express)</span>
                                                <h4 className='text-xs text-right'>+ CoBag fess</h4>
                                            </div> */}
                                        </div>
                                        <div className='flex flex-wrap items-center justify-end gap-5'>
                                            <Link href={`/ishop/${index}`} className='flex items-center gap-3 py-3 px-10 text-primary border-2 border-primary rounded-lg'><CiStar /> View review</Link>
                                            <button className='flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg'><FiMessageSquare /> Contact</button>
                                        </div>
                                        <div className='flex justify-end mt-3 text-gray-500'>
                                            <p className='text-xs'>Languages spoken: French, English</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>







            </div>
        </div>
    );
}

export default CouriersAvailable;
