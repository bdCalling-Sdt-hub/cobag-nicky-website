'use client';
import i18n from '@/app/utils/i18';
import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { GoAlert, GoLaw } from 'react-icons/go';



const HalfEmptyLuggage = () => {

    const { t } = i18n;

    return (
        <div className='w-[90%] mx-auto md:py-20 py-10'>
            <div className='md:w-2/4 mx-auto text-center my-10'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary'>{t('AreYouLeavingWithHalfEmptyLuggage2511')}</h2>
                <p className='mt-3 font-semibold text-[#737373]'>{t('DontLetThoseUnusedKilosGoToWaste2511')}</p>
            </div>


            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div data-aos="fade-up" data-aos-duration="300" className="overflow-hidden rounded-lg relative group">
                    {/* Background Image with Overlay */}
                    <div className="bg-[url('/Images/Itravel/half-empty-laggage-1.png')] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                        <div>
                            <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">{t('New2511')}</p>
                            <h2 className="text-2xl my-3 font-semibold text-white">{t('Resellyourkilos2511')}</h2>
                            <p className="text-white">
                               {t('ResellYourKilos2511')}
                            </p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className="overflow-hidden rounded-lg relative group">
                    {/* Background Image with Overlay */}
                    <div className="bg-[url('/Images/Itravel/half-empty-laggage-2.png')] w-full h-[300px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                    </div>
                    {/* Content */}
                    <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                        <div>
                            <p className="bg-[#fff] text-primary max-w-48 text-center py-2 px-6 rounded-full">
                                {t('MutualAid2511')}
                            </p>
                            <h2 className="text-2xl my-3 font-semibold text-white">{t('Helpasender2511')}</h2>
                            <p className="text-white">
                                {t('HelpASender2511')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-10'>
                <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-1.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>{t('MakeYourTravelsProfitable')}</h2>
                    <p>{t('TurnUnusedPoundsIntoIncome')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-2.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>{t('PromoteMutualAid')}</h2>
                    <p>{t('HelpIndividualsSendParcels')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-3.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>{t('ContributeToARevolution')}</h2>
                    <p>{t('BePartOfANewModel')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                    <img src="/Images/Itravel/item-4.png" alt="" />
                    <h2 className='text-primary text-xl font-semibold my-5'>{t('EcologicalImpact')}</h2>
                    <p>{t('OptimizeExistingJourneys')}</p>
                </div>
            </div>



            <div className='my-20 flex items-center justify-center'>
                <div className='flex items-center gap-5 shadow-lg rounded-lg p-10'>
                    <div className='bg-gradient-to-tl w-14 h-14 flex items-center justify-center from-[#C7FFD8] to-primary text-white rounded-full'>
                        <BsCurrencyDollar className='text-3xl ' />
                    </div>
                    <div>
                        <span>
                            {t('AverageEarningsPerTraveler')}
                        </span>
                        <h2 className='text-3xl font-semibold text-primary'>30€ - 300€</h2>
                    </div>
                </div>
            </div>


            <div className='lg:w-[70%] mx-auto '>
                <h2 className='text-center text-4xl font-semibold text-primary my-10'>{t('MultipleSendersMoreEarnings')}</h2>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div data-aos="zoom-in" data-aos-duration="300">

                        <div className='bg-gradient-to-tl from-[#C7FFD8] to-primary rounded-lg w-full flex items-center justify-center lg:p-10 p-5'>
                            <div className='bg-[#47474727] backdrop-blur-lg rounded-lg px-8 py-14 w-full  flex items-center justify-center'>
                                <p className='text-white text-xl'>{t('WhyLimitYourself')}</p>
                            </div>
                        </div>

                        <div className='p-5 rounded-lg mt-10 bg-[#C7FFD8]'>
                            <div className='flex gap-5'>
                                <div className='bg-primary w-14 h-14 flex items-center justify-center p-3 rounded-full'>
                                    <GoAlert className='text-5xl text-white' />
                                </div>
                                <div>
                                    <h1 className='font-semibold text-primary text-xl'>{t('Attention')}</h1>
                                    <p className='font-normal mt-3'>{t('CheckAvailableKilos')}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div data-aos="zoom-in" data-aos-duration="300" className="bg-[url('/Images/Itravel/all-bags.png')] bg-no-repeat bg-cover bg-center min-h-[50vh] flex items-end rounded-lg">
                        <div className='bg-[#ffffff] m-5 p-5  rounded-lg flex  items-center justify-center gap-5'>
                            <GoLaw className='text-5xl text-primary' />
                            <p className='font-semibold text-primary'>{t('MaximizeRevenue')}</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default HalfEmptyLuggage;
