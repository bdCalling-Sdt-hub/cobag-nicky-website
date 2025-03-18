'use client';
import i18n from '@/app/utils/i18';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiChat1, CiClock2, CiLock, CiPlay1 } from 'react-icons/ci';
import { FiShield, FiUserCheck } from 'react-icons/fi';

const VideoAndCard = () => {

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
            travelerMissions: 15
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
            travelerMissions: 10
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
            travelerMissions: 20
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
            travelerMissions: 8
        }
    ];

    // Pagination settings
    const itemsPerPage = 3;  // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end index based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = purchaseData.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(purchaseData.length / itemsPerPage);

    // Handle page change
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    // States to track the filter values
    const [cityPurchase, setCityPurchase] = useState('');
    const [cityDelivery, setCityDelivery] = useState('');
    const [minRating, setMinRating] = useState(4.5);  // default rating is 4.5
    const [untilDate, setUntilDate] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    const handleRatingChange = (e) => {
        setMinRating(e.target.value);
    };

    const handleDateChange = (e) => {
        setUntilDate(e.target.value);
    };

    const handleAmountChange = (e) => {
        setMaxAmount(e.target.value);
    };



    const { t } = i18n;

    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayClick = () => {
        setIsPlaying(true); // Set isPlaying to true when the play button is clicked
    };

    return (
        <div>


            <div className='relative mt-10 flex justify-center'>
                <div className=" md:-bottom-60 -bottom-0 md:w-[50%]">
                    {/* Thumbnail or Video Player */}
                    {!isPlaying ? (
                        <div className="relative">
                            <div>
                                <Image
                                    width={300}
                                    height={200}
                                    src="/Images/Landingpage/Hero_Video-thambnel.png" // Thumbnail image path
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Play Button */}
                            <button
                                onClick={handlePlayClick}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#eeeeee73] p-5 rounded-full shadow-lg"
                            >
                                <CiPlay1 className='text-4xl text-white' />
                            </button>
                        </div>
                    ) : (
                        // When the play button is clicked, show YouTube video iframe
                        <iframe

                            className='w-[100%] xl:h-[600px] md:h-[400px] h-[300px]'

                            src="https://www.youtube.com/embed/zFDpdKIQ5LU?autoplay=1" // Correct embed URL format
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}

                </div>
            </div>

            <div className='text-center my-20 lg:w-[80%] w-[90%] mx-auto'>
                <h2 className='md:text-4xl mb-8 text-3xl font-semibold text-primary text-center'>
                    Purchase Request Announcements
                </h2>
                <h3 className='text-xl'>
                    Travelers-couriers, find purchase requests for your journey here.
                </h3>
                <h3 className='font-semibold text-primary text-xl'>
                    Earn at least €27 in earnings for each purchase mission.
                </h3>


                <div className="bg-white shadow-lg rounded-lg p-8 border mt-10 text-left">
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
                                <img src='/Images/NewSection/Nike-Air-Max-Shoes-1.jpg' alt={request.title} className='w-full h-60 object-cover' />
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
                                <div className=' mt-3'>
                                    <img src="https://via.placeholder.com/30" alt="" />
                                    <div className='text-left'>
                                        <span className='mr-2'>{request.travelerName}</span> <br />
                                        <span className='text-yellow-400'>{'★'.repeat(Math.floor(request.travelerRating))}</span>
                                        <span className='ml-2 text-gray-500 text-xs'>({request.travelerMissions} missions)</span>
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
    );
}

export default VideoAndCard;
