'use client';
import React, { useState } from 'react';
import { LuPlane, LuShield } from 'react-icons/lu';
import { IoMdInformationCircle } from "react-icons/io";
import { CiCalendar, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar, FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { MdVerifiedUser } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import i18n from '@/app/utils/i18';
import { PiTrainThin } from 'react-icons/pi';
import baseUrl from '@/app/redux/api/baseUrl';
import Link from 'next/link';


const AvailableRoutes = ({ searchData }) => {

    console.log(searchData[0]);

    const { t } = i18n;

    const [isNotificaiton, setIsNotificaiton] = useState(true);

    const handleNotificationShowHide = () => {
        setIsNotificaiton(!isNotificaiton);
    }



    return (
        <div className='lg:py-32 py-20 bg-[#]'>
            <div className='lg:w-[80%] mx-auto mb-5 flex items-center gap-3'>
                <p className='text-base font-semibold text-primary'>{t('newJourneyNotification654')}</p>
                {
                    isNotificaiton ?
                        <FaToggleOff className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                        :
                        <FaToggleOn className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                }
            </div>
            <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>{t("availableRoutes654")} {(`( ${searchData?.length} )`) + ' item'}</h2>

            <div className='lg:w-[80%] w-[95%] mx-auto'>


                {searchData.length > 0 ?
                    searchData?.map((item, index) => (
                        <div data-aos="fade-up" data-aos-duration="300" key={index} className='shadow-lg rounded-lg  p-10 my-5'>
                            <div className='flex flex-wrap items-center justify-between '>
                                <div className='flex items-center text-primary gap-3 font-medium'>
                                    <div className='w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg'>
                                        {
                                            item?.transportMode == 'plane' ?
                                                <LuPlane className='text-2xl' /> :
                                                <PiTrainThin className='text-2xl' />
                                        }
                                    </div>
                                    <h2 className='capitalize'>{item?.transportType} {item?.transportMode}</h2>
                                </div>
                                <div className='flex flex-col justify-end items-end text-gray-500'>
                                    <h3 className='text-3xl font-semibold text-primary mb-3'>{item?.price}$ </h3>
                                    <span className='flex items-center gap-3'> <LuShield className=' text-gray-500 capitalize' />including insurance and protection  <IoMdInformationCircle className='text-gray-500' /> </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between gap-10 items-center my-5'>
                                <div>
                                    <div className='flex gap-2 my-8'>
                                        <CiLocationOn className='text-2xl' />
                                        <div >
                                            <p>{item?.departureCity}</p>
                                            <div className='flex items-center gap-2'>
                                                <span className='flex items-center gap-2 text-sm'> <CiCalendar /> {item?.departureDate}</span>
                                                <span className='flex items-center gap-2 ml-5 text-sm'> <FaRegClock /> {item?.departureTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 my-8'>
                                        <CiLocationOn className='text-2xl' />
                                        <div >
                                            <p>{item?.arrivalCity}</p>
                                            <div className='flex items-center gap-2'>
                                                <span className='flex items-center gap-2 text-sm'> <CiCalendar /> {item?.arrivalDate}</span>
                                                <span className='flex items-center gap-2 ml-5 text-sm'> <FaRegClock /> {item?.arrivalTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#eeeff8] py-5 w-96 px-10 rounded-lg text-primary' >
                                    <h3 className='font-semibold'>Your shipment</h3>
                                    <h2 className='text-2xl font-semibold '>{item?.totalSpace} kg</h2>
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center justify-between gap-5'>
                                <div className='flex flex-wrap items-center gap-5'>
                                    <img className='w-14 rounded-full' src={baseUrl + item?.user?.profileImage} alt="" />
                                    <div>
                                        <h3 className='font-semibold text-primary'>{item?.user?.firstName}</h3>
                                        <div className='flex items-center flex-wrap gap-3'>
                                            <span className='flex items-center gap-3 text-gray-500 '>
                                                {item?.user?.reviewAva}
                                                <FaStar className='text-yellow-400' />  ( {item?.user?.reviewInt} reviews)</span>
                                            <li className='list-disc text-gray-600 ml-5 mr-2'>0 packages delivered</li>
                                            <div className='flex flex-wrap items-center gap-2'>
                                                <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Verified traveler</span>
                                                <span className='bg-[#e7e7ec] text-primary font-semibold py-2 px-5  rounded-full flex items-center gap-2'><MdVerifiedUser /> Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-wrap items-center justify-end gap-5'>
                                        <Link href={`/ishop/${item?._id}`} className='flex items-center gap-3 py-3 px-10 text-primary border-2 border-primary rounded-lg'><CiStar /> View review</Link>
                                        <button className='flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg'><FiMessageSquare /> Contact</button>
                                    </div>
                                    <p className='text-right text-sm mt-5 text-gray-500'>Languages spoken: French, English</p>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div>
                        <h2 className='text-center text-2xl font-semibold text-red-500 my-20'>No Search Data Found !!</h2>
                    </div>
                }

            </div>

        </div>
    );
}

export default AvailableRoutes;
