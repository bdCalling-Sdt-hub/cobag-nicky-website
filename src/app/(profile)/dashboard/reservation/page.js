'use client';
import i18n from '@/app/utils/i18';
import React, { useState } from 'react';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { FaFilter, FaRegClock, FaSortDown, FaStar } from 'react-icons/fa6';
import { FiMessageSquare } from 'react-icons/fi';
import { GrSend } from 'react-icons/gr';
import { IoMdInformationCircle } from 'react-icons/io';
import { LuPlane, LuPlaneLanding, LuShield } from 'react-icons/lu';
import { MdAccessTime, MdVerifiedUser } from 'react-icons/md';

const Page = () => {

    const {t} = i18n;


    const [activeTab, setActiveTab] = useState('Traveler'); // Track active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };



    const [showViewCostBreakdown, setShowViewCostBreakdown] = useState(false);
    const showHidevewConst = () => {
        setShowViewCostBreakdown(!showViewCostBreakdown);
    }



    return (
        <div>
            <div className='bg-white  p-5 rounded-lg'>
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-2'>{t('myReservations')}</h2>
                    <p className='text-gray-500'>{t('manageYourBooking')}</p>
                </div>
                <div>
                    <div className="my-10">
                        {/* Tab Buttons and Filters */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => handleTabChange('Traveler')}
                                    className={`py-4 flex items-center justify-center gap-2 px-10 rounded-lg font-semibold ${activeTab === 'Traveler'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-black'
                                        }`}
                                >
                                    <LuPlane /> {t('asATraveler')}
                                </button>
                                <button
                                    onClick={() => handleTabChange('Sender')}
                                    className={`py-4 flex items-center justify-center gap-2 px-10 rounded-lg font-semibold ${activeTab === 'Sender'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-black'
                                        }`}
                                >
                                    <GrSend /> {t('asASender')}
                                </button>
                            </div>
                            {/* Search and Filter */}
                            <div className="flex items-center gap-3">
                                {/* Search Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Search transactions"
                                        className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <FaSearch />
                                    </span>
                                </div>
                                {/* Select Filter */}
                                <div className="relative">
                                    <select
                                        name="searchselect"
                                        className="py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                                    >
                                        <option value="all">All</option>
                                        <option value="in">In</option>
                                        <option value="out">Out</option>
                                    </select>
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <FaFilter />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        {activeTab === 'Traveler' && (
                           
                            [...Array(5)].map((_, index) => (
                                <div>
                                <div className="my-5">
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <div className="flex flex-wrap items-center gap-5">
                                            <img
                                                className="w-14 rounded-full"
                                                src="/Images/Isend/availableRoutesUser.png"
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="font-semibold text-primary">John Doe</h3>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="flex items-center gap-3 text-gray-500">
                                                        4.00 <FaStar className="text-yellow-400" /> (157 reviews)
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-primary flex items-center gap-2 justify-center font-semibold capitalize'>
                                            <LuPlane className='text-xl' /> traveler
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between lg:gap-10 gap-3 items-center lg:my-5">
                                        <div>
                                            <div className="flex gap-2 my-8">
                                                <CiLocationOn className="text-2xl" />
                                                <div>
                                                    <p>Paris</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-2 text-sm">
                                                            <CiCalendar /> 15 Mar 2024
                                                        </span>
                                                        <span className="flex items-center gap-2 ml-5 text-sm">
                                                            <FaRegClock /> 14:30
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 my-8">
                                                <CiLocationOn className="text-2xl" />
                                                <div>
                                                    <p>Brazzaville Maya-Maya</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-2 text-sm">
                                                            <CiCalendar /> 15 Mar 2024
                                                        </span>
                                                        <span className="flex items-center gap-2 ml-5 text-sm">
                                                            <FaRegClock /> 14:30
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-right mr-3 lg:mr-0 b-2">
                                                <h2 className="text-2xl font-semibold text-primary">25€</h2>
                                                <div>
                                                    <span className='flex items-center gap-3 text-gray-500 my-2'> <LuShield className=' text-gray-500' />39.00 € including insurance and protection  <IoMdInformationCircle className='text-gray-500' /> </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end lg:gap-5 gap-1">
                                                <span className='py-1 font-semibold px-5 bg-[#2aff9541] text-[#1d995b] rounded-full'>Confirmed</span>
                                                <button className="flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg">
                                                    <FiMessageSquare /> Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-10'>
                                    <div onClick={showHidevewConst} className='flex  gap-1 cursor-pointer justify-between '>
                                        {
                                            showViewCostBreakdown ? (
                                                <FaSortDown className="rotate-180 mt-1 transition-transform duration-300" />
                                            ) : (
                                                <FaSortDown className="rotate-0 transition-transform duration-300" />
                                            )
                                        }

                                        {t('viewCostBreakdown')}
                                        <span className='block w-[86%] h-[2px] bg-primary mt-3'></span>
                                    </div>
                                    {
                                        showViewCostBreakdown && (
                                            <div className='p-5'>
                                                <div className='flex justify-between items-center gap-5 my-5'>
                                                    <span>{t('basePrice')}</span>
                                                    <span className='font-semibold'>35.00€</span>
                                                </div>
                                                <div className='flex justify-between items-center gap-5 my-5'>
                                                    <span>{t('commission')} (20%)</span>
                                                    <span className='font-semibold'>0.50€</span>
                                                </div>
                                                <div className='flex justify-between items-center gap-5 my-5'>
                                                    <span>{t('fixedCosts')}</span>
                                                    <span className='font-semibold'>7.00€</span>
                                                </div>
                                                <hr className='my-3' />
                                                <div className='flex justify-between items-center gap-5 my-5 font-semibold'>
                                                    <span>Total:</span>
                                                    <span className=''>42.50€</span>
                                                </div>
                                                <div className='flex items-center justify-end text-gray-500 text-sm'>
                                                    <span className='flex items-center gap-2 '><LuShield className=' ' /> Includes insurance and protection</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            ))
                           
                        )}
                        {activeTab === 'Sender' && (
                            <div>
                                <h2 className="text-xl font-semibold text-primary mb-4">
                                    Transactions as a Sender
                                </h2>
                                <p>No sender transactions available.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page;
