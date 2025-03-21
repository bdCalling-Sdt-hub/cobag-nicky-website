'use client';
import baseUrl from '@/app/redux/api/baseUrl';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiCalendar, CiChat1, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar, FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdInformationCircle } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { LuPlane, LuShield } from 'react-icons/lu';
import { MdAccessTime, MdVerified, MdVerifiedUser } from 'react-icons/md';
import { PiTrainThin } from 'react-icons/pi';

const CouriersAvailable = ({ searchIshopItem }) => {

    console.log(searchIshopItem);

    const { t } = i18n;

    const [isNotificaiton, setIsNotificaiton] = useState(true);
    const handleNotificationShowHide = () => {
        setIsNotificaiton(!isNotificaiton);
    }


    const routeData = [
        {
            transportMode: 'plane',
            transportType: 'Vol direct',
            price: 18.00,
            departureCity: 'Paris (CDG)',
            departureDate: '15/03/2024',
            departureTime: '14:30',
            arrivalCity: 'Brazzaville (Maya-Maya)',
            arrivalDate: '15/03/2024',
            arrivalTime: '22:00',
            totalSpace: 3,
            user: {
                profileImage: '/Images/NewSection/usreImgae.avif',
                firstName: 'Thomas Martin',
                reviewAva: 4.8,
                reviewInt: 22,
            },
        },
        // Add more raw route data here as needed
    ];


    const purchaseData = [
        {
            image: 'link_to_image',
            title: 'Exclusive Korean Skincare',
            price: 150,
            earnings: 27,
            purchaseCity: 'Seoul',
            deliveryCity: 'Paris',
            deadline: '04/15/2024',
            travelerName: 'Marie D.',
            travelerRating: 4.8,
            travelerMissions: '4.8 • 15 missions',
            image: '/Images/NewSection/Products/beauty-of-joseon-ground-rice-and-honey-glow-mask-5.jpg',
            userImage: '/Images/NewSection/usreImgae.avif'
        },
        {
            image: 'link_to_image',
            title: 'Nike Air Max Limited Edition',
            price: 200,
            earnings: 27,
            purchaseCity: 'New York',
            deliveryCity: 'Paris',
            deadline: '04/20/2024',
            travelerName: 'Thomas M.',
            travelerRating: 4.9,
            travelerMissions: '4.9 • 10 missions',
            image: '/Images/NewSection/Products/Nike-Air-Max-Shoes-1.jpg',
            userImage: '/Images/NewSection/photo-1500648767791-00dcc994a43e.avif'
        },
        {
            image: 'link_to_image',
            title: 'Cigarette Cartons',
            price: 450,
            earnings: 27,
            purchaseCity: 'Luxembourg',
            deliveryCity: 'Paris',
            deadline: '04/25/2024',
            travelerName: 'Sophie B.',
            travelerRating: 4.7,
            travelerMissions: '4.7 • 20 missions',
            image: '/Images/NewSection/Products/cl-5645cecb7971bb340f4dad84-ph0.jpg',
            userImage: '/Images/NewSection/photo-1438761681033-6461ffad8d80.avif'
        },
        {
            image: 'link_to_image',
            title: 'Exclusive Dubai Perfume',
            price: 180,
            earnings: 27,
            purchaseCity: 'Dubai',
            deliveryCity: 'Paris',
            deadline: '04/18/2024',
            travelerName: 'Luke P.',
            travelerRating: 4.6,
            travelerMissions: '4.6 • 15 missions',
            image: '/Images/NewSection/Products/contes-de-parfums-dubai.webp',
            userImage: '/Images/NewSection/photo-1472099645785-5658abf4ff4e.avif'
        }
    ];


    // Pagination settings
    const itemsPerPage = 3;  // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end index based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = purchaseData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(purchaseData.length / itemsPerPage);



    // States to track the filter values
    const [cityPurchase, setCityPurchase] = useState('');
    const [cityDelivery, setCityDelivery] = useState('');
    const [minRating, setMinRating] = useState(4.5);  // default rating is 4.5
    const [untilDate, setUntilDate] = useState('');
    const [maxAmount, setMaxAmount] = useState('');


    const handleDateChange = (e) => {
        setUntilDate(e.target.value);
    };

    const handleAmountChange = (e) => {
        setMaxAmount(e.target.value);
    };

    const handleRatingChange = (e) => {
        setMinRating(e.target.value);
    };



    return (
        <div className='bg-[#f7f7fc]'>
            <div className='lg:py-32 py-20 bg-[#]'>
                {/* <div className='lg:w-[80%] w-[90%] mx-auto mb-5 flex items-center gap-3'>
                    <p className='text-base font-semibold text-primary'>{t('newJourneyNotification654')} -</p>
                    {
                        isNotificaiton ?
                            <FaToggleOff className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                            :
                            <FaToggleOn className='text-3xl cursor-pointer text-primary' onClick={handleNotificationShowHide} />
                    }
                </div> */}

                <div className='lg:w-[80%] w-[90%] mx-auto '>
                    <div className="bg-white shadow-lg rounded-lg p-8 border text-left">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter ads</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                            {/* City of purchase */}
                            <div className=" space-y-2">
                                <span className="text-gray-600 block">City of purchase</span>
                                <input
                                    type="text"
                                    placeholder="Ex: New York"
                                    value={cityPurchase}
                                    onChange={(e) => setCityPurchase(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-gray-700"
                                />
                            </div>

                            {/* Delivery city */}
                            <div className=" space-y-2">
                                <span className="text-gray-600 block">Delivery city</span>
                                <input
                                    type="text"
                                    placeholder="Ex: Paris"
                                    value={cityDelivery}
                                    onChange={(e) => setCityDelivery(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-gray-700"
                                />
                            </div>
                            {/* Until date */}
                            <div className=" space-y-2">
                                <span className="text-gray-600 block">Until</span>
                                <input
                                    type="date"
                                    value={untilDate}
                                    onChange={handleDateChange}
                                    className="w-full px-4 py-2 border rounded-md text-gray-700"
                                />
                            </div>
                            <div className=" space-y-2">
                                <span className="text-gray-600 block">Maximum amount to advance</span>
                                <input
                                    type="number"
                                    value={maxAmount}
                                    onChange={handleAmountChange}
                                    placeholder="Maximum amount"
                                    className="w-full px-4 py-2 border rounded-md text-gray-700"
                                />
                            </div>

                            {/* Minimum traveler rating */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 block">Minimum traveler rating</span><br />
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={minRating}
                                    onChange={handleRatingChange}
                                    className="w-full"
                                />
                                <span className="text-gray-700">{minRating} ★</span>
                            </div>


                        </div>



                        {/* Apply Filter Button */}
                        <div className="flex justify-end">
                            <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Apply Filter</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
                        {purchaseData.map((request, index) => (
                            <div key={index} className='flex flex-col bg-white shadow-md rounded-lg overflow-hidden'>


                                <div className='relative h-60'>
                                    <img src={request?.image} alt={request.title} className='w-full h-60 object-cover' />
                                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
                                        <h3 className='text-lg font-semibold mb-5 text-white'>{request.title}</h3>
                                        <div className='flex items-center gap-3 justify-between'>
                                            <p className='text-3xl text-white'>{request.price}€</p>
                                            <p className='text-sm text-gray-100 bg-green-600 px-3 py-2 rounded-full'>Earnings: {request.earnings}€ or more</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='p-4'>
                                    {/* <h4 className='text-xl font-semibold'>{request.title}</h4>
                                                                      <p className='text-lg text-gray-700'>{request.price}€</p>
                                                                      <p className='text-sm text-gray-500'>Earnings: {request.earnings}€ or more</p>
                                                                      */}
                                    <div className='flex justify-between '>
                                        <div className=' text-left mt-2'>
                                            <p className='text-sm text-gray-600'>Purchase in:  {request.purchaseCity}</p>
                                            <p className='text-sm text-gray-600'>Delivery to:  {request.deliveryCity}</p>
                                        </div>
                                        <p className='mt-2 text-sm text-gray-600'>Deadline: {request.deadline}</p>
                                    </div>
                                    <div className=' mt-3 flex items-center gap-2'>
                                        <img className='w-10 h-10 rounded-full' src="/Images/NewSection/usreImgae.avif" alt="" />
                                        <div className='text-left'>
                                            <span className='mr-2'>{request.travelerName}</span> <br />
                                            <span className='text-yellow-400'>{'★'}</span>
                                            <span className='ml-2 text-gray-500 text-xs'>{request.travelerMissions}</span>
                                        </div>
                                    </div>
                                    <button className='mt-4 px-6 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center justify-center gap-2 '>
                                        <CiChat1 />Contact
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className='flex justify-center mt-8'>
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            className='px-4 py-2 bg-primary text-white rounded-l-lg hover:bg-primary-dark'
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className='px-4 py-2 text-lg text-gray-700'>{`${currentPage} / ${totalPages}`}</span>
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            className='px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark'
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default CouriersAvailable;
