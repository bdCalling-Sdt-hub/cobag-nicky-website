'use client'; // Ensure this is a client-side component

import React from 'react';
import { useParams } from 'next/navigation';
import { LuImageUp, LuPlane } from 'react-icons/lu';
import { MdAccessTime, MdVerifiedUser } from 'react-icons/md';
import { CiCalendar, CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegClock, FaStar, FaStarHalf } from 'react-icons/fa6';
import { FiMessageSquare } from 'react-icons/fi';

const Page = () => {
    const { review } = useParams(); // Fetch dynamic params
    console.log(review);

    const ratingDistribution = [80, 10, 5, 3, 2]; // Mock percentage ratings
    const ratingDetails = [
        { label: 'Level of communication with the service provider', score: 4.9 },
        { label: 'Quality of delivery', score: 4.9 },
        { label: 'Delivery value', score: 4.9 },
        { label: 'Response time', score: '1h' },
    ];

    return (
        <div className="bg-[#f6f6fb] py-10">
            <div className="lg:w-[80%] w-[90%] mx-auto bg-white rounded-lg p-10">
                <div className="my-5">
                    {/* Flight and Shipment Details */}
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center flex-wrap text-primary gap-3 font-medium">
                            <div className="w-14 h-14 bg-[#f6f6fb] text-primary flex items-center justify-center rounded-lg">
                                <LuPlane className="text-2xl" />
                            </div>
                            <h2>Direct flight</h2>
                        </div>
                        <div className="flex items-center gap-2 bg-[#fff4ea] text-[#ffb46d] font-semibold px-3 py-2 rounded-full">
                            <MdAccessTime className="text-2xl" /> Express
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-10 items-center my-5">
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
                        <div className="bg-[#eeeff8] py-5 w-96 px-10 rounded-lg text-primary">
                            <h3 className="font-semibold">Your shipment</h3>
                            <h2 className="text-2xl font-semibold">3 kg</h2>
                        </div>
                    </div>
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
                                    <li className="list-disc text-gray-600 mx-5">
                                        24 packages delivered
                                    </li>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="bg-[#e7e7ec] text-primary font-semibold py-2 px-5 rounded-full flex items-center gap-2">
                                            <MdVerifiedUser /> Verified traveler
                                        </span>
                                        <span className="bg-[#e7e7ec] text-primary font-semibold py-2 px-5 rounded-full flex items-center gap-2">
                                            <MdVerifiedUser /> Expert
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap justify-end items-start gap-3 mb-2">
                                <h2 className="text-2xl font-semibold text-primary">25€</h2>
                                <div>
                                    <span className="flex items-center gap-3 text-[#ffd16f]">
                                        (+5€ express)
                                    </span>
                                    <h4 className="text-xs text-right">+ CoBag fees</h4>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-5">
                                <button className="flex items-center gap-3 py-3 px-10 bg-primary text-white border-2 border-primary rounded-lg">
                                    <FiMessageSquare /> Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-10 block" />
                {/* Ratings and Reviews Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-primary">Ratings and reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                        {/* Left: Rating Summary */}
                        <div className="lg:border-r-2 border-gray-200  pr-10">
                            <div>
                                <div className="text-6xl font-bold text-primary">4.2</div>
                                <div className="text-primary text-lg mt-3 ">500 Ratings</div>
                            </div>
                            <div className="mt-6 space-y-2">
                                {ratingDistribution.map((percentage, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="text-sm font-medium text-gray-600">
                                            {5 - index} ★
                                        </div>
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-orange-400"
                                                style={{ width: `${percentage}%` }} // Dynamic width
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Right: Detailed Ratings */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Rating Details
                            </h3>
                            <ul className="space-y-2">
                                {ratingDetails.map((detail, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-gray-600">{detail.label}</span>
                                        <span className="flex items-center text-gray-800">
                                            {typeof detail.score === 'number' ? (
                                                <>
                                                    <span className="mr-1">★</span>
                                                    {detail.score.toFixed(1)}
                                                </>
                                            ) : (
                                                detail.score
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <hr className="my-10 block" />

                    <div>
                        <div className='flex items-center gap-5'>
                            <img className='w-14 rounded-full' src="/Images/Isend/availableRoutesUser.png" alt="" />
                            <h2 className='text-primary font-semibold text-xl'>Abu Musa</h2>
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Write a review' className='border-b-2 border-gray-200 py-3 px-5 lg:w-[60%] focus:outline-none ring-0' />
                        </div>
                        <div className='flex items-center gap-5'>
                            <LuImageUp />
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                            </div>
                        </div>
                        <button className='bg-primary text-white px-2 rounded mt-5'>post</button>
                    </div>

                    {
                        [...Array(5)].map((_, index) => (
                            <div data-aos="fade-up" data-aos-duration="500" key={index} className='py-10 border-b-2 border-gray-200 flex items-start gap-3'>
                                <img src="/Images/Isend/availableRoutesUser.png" alt="" />
                                <div>
                                    <div className=''>
                                        <h2 className='text-primary font-semibold text-xl'>Abu Musa</h2>
                                        <span className='my-1 text-gray-400 block'>15 Mar 2024</span>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <CiStar className='text-orange-400' />
                                        </div>
                                        <p className='text-[#2c2c2cb2] mt-3'>Working with Borislav for our first month of ads management was fantastic! His quick communication, strategic thinking and attention to the
                                            details not only gave us the confidence in his abilities but generated a plethora of quality leads for our business. We will continue to use him! I
                                            highly recommend...Show all</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Page;
