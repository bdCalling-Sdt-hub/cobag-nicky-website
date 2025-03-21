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


            <div className='relative mt-10 pb-10 flex justify-center'>
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


       

        </div>
    );
}

export default VideoAndCard;
