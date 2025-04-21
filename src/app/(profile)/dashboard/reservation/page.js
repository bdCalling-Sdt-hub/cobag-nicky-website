'use client';
import baseUrl from '@/app/redux/api/baseUrl';
import { useGetAllReservationQuery } from '@/app/redux/Features/reservation/reservation';
import i18n from '@/app/utils/i18';
import useUser from '@/hooks/useUser';
import Link from 'next/link';
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
    const { t } = i18n;

    const [activeTab, setActiveTab] = useState('traveller'); // Track active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const user = useUser();
    const { data: getAllReservation } = useGetAllReservationQuery({
        activeTab,
        id: user?._id,
    });

    const allReservation = getAllReservation?.data;

    console.log(allReservation);

    // State to track which reservation's cost breakdown is visible
    const [activeCostBreakdown, setActiveCostBreakdown] = useState(null);

    // Toggle cost breakdown for a specific reservation
    const toggleCostBreakdown = (reservationId) => {
        setActiveCostBreakdown((prev) =>
            prev === reservationId ? null : reservationId
        );
    };



    return (
        <div>
            <div className='bg-white p-5 rounded-lg'>
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-2'>
                        {t('myReservations')}
                    </h2>
                    <p className='text-gray-500'>{t('manageYourBooking')}</p>
                </div>
                <div>
                    <div className="my-10">
                        {/* Tab Buttons and Filters */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => handleTabChange('traveller')}
                                    className={`py-4 flex items-center justify-center gap-2 px-10 rounded-lg font-semibold ${activeTab === 'traveller'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-black'
                                        }`}
                                >
                                    <LuPlane /> {t('asATraveler')}
                                </button>
                                <button
                                    onClick={() => handleTabChange('sender')}
                                    className={`py-4 flex items-center justify-center gap-2 px-10 rounded-lg font-semibold ${activeTab === 'sender'
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
                    <div className="bg-white p-5 rounded-2xl ">
                        {allReservation?.map((reservation) => (
                            <div className='my-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5 rounded-md' key={reservation._id}>
                                <div className=" ">
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <div className="flex flex-wrap items-center gap-5">
                                            <img
                                                className="w-14 rounded-full"
                                                src={baseUrl + reservation?.senderId?.profileImage}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="font-semibold text-primary">{reservation?.senderId?.firstName && reservation?.senderId?.firstName + " " + reservation?.senderId?.lastName && reservation?.senderId?.lastName}</h3>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="flex items-center gap-3 text-gray-500">
                                                        {reservation?.senderId?.reviewAva} <FaStar className="text-yellow-400" /> ({reservation?.senderId?.reviewInt} reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-primary flex items-center gap-2 justify-center font-semibold capitalize">
                                            <LuPlane className="text-xl" /> {reservation?.senderId?.isTraveler ? 'traveller' : 'sender'}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between lg:gap-10 gap-3 items-center lg:my-5">
                                        <div>
                                            <div className="flex gap-2 my-8">
                                                <CiLocationOn className="text-2xl" />
                                                <div>
                                                    <p>{reservation?.sellKgId?.departureCity}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-2 text-sm">
                                                            <CiCalendar /> {reservation?.sellKgId?.departureDate}
                                                        </span>
                                                        <span className="flex items-center gap-2 ml-5 text-sm">
                                                            <FaRegClock /> {reservation?.sellKgId?.departureTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 my-8">
                                                <CiLocationOn className="text-2xl" />
                                                <div>
                                                    <p>{reservation?.sellKgId?.arrivalCity}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-2 text-sm">
                                                            <CiCalendar /> {reservation?.sellKgId?.arrivalDate}
                                                        </span>
                                                        <span className="flex items-center gap-2 ml-5 text-sm">
                                                            <FaRegClock /> {reservation?.sellKgId?.arrivalTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-right mr-3 lg:mr-0 b-2">
                                                <h2 className="text-2xl font-semibold text-primary">{reservation?.amount / 100} €</h2>
                                                <div>
                                                    <span className="flex items-center gap-3 text-gray-500 my-2">
                                                        {/* <LuShield className="text-gray-500" />39.00 € including insurance and protection{' '} */}
                                                        {/* <IoMdInformationCircle className="text-gray-500" /> */}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end lg:gap-5 gap-1">
                                                <span className="py-1 font-semibold px-5 bg-[#2aff9541] text-[#1d995b] rounded-full">
                                                    {reservation?.orderStatus}
                                                </span>
                                                <Link href={`/message`}
                                                    className="flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg">
                                                    <FiMessageSquare /> Contact
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* View Cost Breakdown */}
                                <div className="my-10">
                                    <div
                                        onClick={() => toggleCostBreakdown(reservation._id)}
                                        className="flex gap-1 cursor-pointer justify-between"
                                    >
                                        {activeCostBreakdown === reservation._id ? (
                                            <FaSortDown className="rotate-180 mt-1 transition-transform duration-300" />
                                        ) : (
                                            <FaSortDown className="rotate-0 transition-transform duration-300" />
                                        )}
                                        {t('viewCostBreakdown')}
                                        <span className="block w-[86%] h-[2px] bg-primary mt-3"></span>
                                    </div>

                                    {activeCostBreakdown === reservation._id && (
                                        <div className="p-5">
                                            <div className="flex justify-between items-center gap-5 my-5">
                                                <span>{t('basePrice')}</span>
                                                <span className="font-semibold">{reservation?.amount / 100} €</span>
                                            </div>
                                            <div className="flex justify-between items-center gap-5 my-5">
                                                <span>{t('commission')} 20%</span>
                                                <span className="font-semibold">{(reservation?.amount / 100) / 100 * 20}€</span>
                                            </div>
                                            <div className="flex justify-between items-center gap-5 my-5">
                                                <span>{t('fixedCosts')}</span>
                                                <span className="font-semibold">{((reservation?.amount / 100) / 100 * 20) + (reservation?.amount / 100)}€</span>
                                            </div>
                                            <hr className="my-3" />
                                            <div className="flex justify-between items-center gap-5 my-5 font-semibold">
                                                <span>Total:</span>
                                                <span className="">{((reservation?.amount / 100) / 100 * 20) + (reservation?.amount / 100)} €</span>
                                            </div>
                                            <div className="flex items-center justify-end text-gray-500 text-sm">
                                                <span className="flex items-center gap-2 ">
                                                    <LuShield className=" " /> Includes insurance and protection
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
