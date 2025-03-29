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
            className=" relative bg-center bg-auto bg-no-repeat sm:min-h-[62vh] min-h-[62vh] w-full bg-[url('/Images/Landingpage/hero-.png')] lg:mb-[500px] mb-60 "
        >
            <div className="w-full h-full relative sm:min-h-[62vh] min-h-[62vh] bg-[#0000009a]">
                <div className='flex flex-col items-center justify-center px-5 md:px-0 py-10 md:py-20'>

                    <button className='text-white flex items-center duration-[1s] gap-2 hover:scale-105 border-2 rounded-full md:px-6 px-5 text-sm py-2 border-[#6c7e82] cursor-pointer bg-[#ffffff1c] backdrop-blur-sm '>
                        <FiShield className='text-2xl animate-spin-slow' />
                        <IoLockClosedOutline className='text-2xl' />

                        {t('HeroSecureDelivery')}
                    </button>
                    <h2 className='text-center md:mt-20 md:mb-6 my-5 lg:w-2/4  text-white md:text-5xl text-3xl font-bold'>{t('ShareYourLuggagesaveMoney')}</h2>
                    <h3 className='md:text-2xl text-xl md:mt-0 mt-2 font-semibold text-white'>
                        {t('CoBagreimbursesyourLuggage2')}
                    </h3>
                    <div data-aos="fade-up" data-aos-duration="500" className="absolute md:-bottom-[480px] -bottom-60  md:w-[45%]">
                        {/* Thumbnail or Video Player */}
                        {!isPlaying ? (
                            <div className="relative">
                                <div onClick={handlePlayClick} className="relative cursor-pointer duration-500 group ">
                                    <Image
                                        width={300}
                                        height={200}
                                        src="/Images/Home/Screenshot_22.png" // Thumbnail image path
                                        alt="Video Thumbnail"
                                        className="w-full h-full object-cover rounded-2xl cursor-pointer "
                                    />
                                    <div className="absolute group-hover:opacity-60 duration-500 inset-0 bg-black opacity-40 rounded-2xl"></div> {/* Black overlay */}
                                </div>

                                {/* Play Button */}
                                <button
                                    onClick={handlePlayClick}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#eeeeee73] p-5 rounded-full shadow-lg "
                                >
                                    <CiPlay1 className='text-4xl text-white' />
                                </button>
                            </div>
                        ) : (
                            // When the play button is clicked, show YouTube video iframe
                            <iframe
                                className="w-[100%] xl:h-[500px] md:h-[400px] h-[300px]"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                src="https://www.youtube.com/embed/9x1XyJeTC20"
                                title="YouTube video"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                        )}
                        <div className='my-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <button className='bg-gradient-to-r shadow-lg shadow-[#929292] from-[#161D6F] to-[#0B2F9F] py-3 rounded-md font-semibold text-white flex items-center justify-center gap-2'><GoPackage className='text-xl' />
                                {t('Sellmyunusedkilos')}
                            </button>
                            <button className="bg-gradient-to-r shadow-lg from-[#98DED9] to-[#C7FFD8] py-3 rounded-md font-semibold text-primary border-[1px] flex items-center justify-center gap-2">
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
