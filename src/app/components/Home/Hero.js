'use client';
import React, { useState } from 'react';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FiShield } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";
import Image from 'next/image';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true); // Set isPlaying to true when the play button is clicked
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-[60vh] w-full bg-[url('/Images/Landingpage/hero-.png')]"
        >
            <div className="w-full h-full min-h-[80vh] bg-[#000000c5]">
                <div className='flex flex-col items-center justify-center py-10'>

                    <button className='text-white flex items-center gap-2 hover:scale-105 border-2 rounded-full px-10 py-2 border-[#6c7e82] cursor-pointer bg-[#ffffff1c] backdrop-blur-sm duration-300'>
                        <FiShield className='text-2xl animate-spin duration-800' />
                        <IoLockClosedOutline className='text-2xl' />
                        Secure Delivery & Payment
                    </button>
                    <h2 className='text-center my-10 text-white md:text-6xl text-3xl font-semibold'>Got extra kilos in your luggage ? <br /> Sell-them !</h2>
                    <h3 className='md:text-3xl text-xl font-semibold text-white'>Express delivery, faster than express</h3>
                    <div className="absolute md:-bottom-48 bottom-24 md:w-[50%]">
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
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                                >
                                    <CiPlay1 className='text-3xl' />
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
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
