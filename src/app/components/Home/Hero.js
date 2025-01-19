'use client';
import React, { useState } from 'react';
import { IoLockClosedOutline, IoSearchOutline } from 'react-icons/io5';
import { FiShield } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";
import Image from 'next/image';
import { GoPackage } from "react-icons/go";
import i18n from '@/app/utils/i18';
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const { t } = useTranslation()
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true); // Set isPlaying to true when the play button is clicked
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat sm:min-h-[60vh] min-h-[90vh] w-full bg-[url('/Images/Landingpage/hero-.png')] lg:mb-96 md:mb-60 mb-0"
        >
            <div className="w-full h-full sm:min-h-[80vh] min-h-[90vh] bg-[#000000c5]">
                <div className='flex flex-col items-center justify-center py-10'>

                    <button className='text-white flex items-center duration-[1s] gap-2 hover:scale-105 border-2 rounded-full px-10 py-2 border-[#6c7e82] cursor-pointer bg-[#ffffff1c] backdrop-blur-sm '>
                        <FiShield className='text-2xl animate-spin duration-[2s]' />
                        <IoLockClosedOutline className='text-2xl' />

                        {t('HeroSecureDelivery')}
                    </button>
                    <h2 className='text-center my-10 text-white md:text-6xl text-3xl font-bold'>{t('ShareYourLuggagesaveMoney')}</h2>
                    <h3 className='md:text-3xl text-xl font-semibold text-white'>
                        {t('CoBagreimbursesyourLuggage')}
                    </h3>
                    <div className="absolute md:-bottom-60 -bottom-0 md:w-[50%]">
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
                        <div className='my-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <button className='bg-gradient-to-r from-[#161D6F] to-[#0B2F9F] py-3 rounded-md font-semibold text-white flex items-center justify-center gap-2'><GoPackage className='text-xl' />
                                {t('Sellmyunusedkilos')}
                            </button>
                            <button className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 rounded-md font-semibold text-primary border-[1px] flex items-center justify-center gap-2">
                                <IoSearchOutline className='text-xl' />
                               {t('Searchforatraveler')}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
