'use client';
import i18n from '@/app/utils/i18';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiClock2, CiLock, CiPlay1 } from 'react-icons/ci';
import { FiShield, FiUserCheck } from 'react-icons/fi';

const VideoAndCard = () => {

    const {t} = i18n;

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

            <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-4 grid-cols-1 gap-5 items-start'>
                <div data-aos="fade-up" data-aos-duration="300" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiUserCheck className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('identityVerified1221')}</h2>
                    <p className='text-[#000000b2]'>{t('verifiedUsers1221')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiLock className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securePayment1221')}</h2>
                    <p className='text-[#000000b2]'>{t('paymentSecurity1221')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiClock2 className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securityCode1221')}</h2>
                    <p className='text-[#000000b2]'>{t("securityProcess1221")}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiShield className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('cobagInsurance1221')}</h2>
                    <p className='text-[#000000b2]'>{t('insuranceDetails1221')}</p>
                </div>
            </div>

        </div>
    );
}

export default VideoAndCard;
