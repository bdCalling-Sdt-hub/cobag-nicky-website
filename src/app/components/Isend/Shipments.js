'use client';
import i18n from '@/app/utils/i18';
import React from 'react';

const Shipments = () => {


    const { t } = i18n; 


    return (
        <div className='bg-[#f7f7fc]'>
            <div className='py-10 lg:w-[80%] w-[90%] mx-auto '>
                <div className='lg:w-2/4 mx-auto text-center mb-10'>
                    <h2 className='md:text-4xl text-3xl font-semibold text-primary'>{t('whyChooseCoBag665')}</h2>
                </div>


                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div data-aos="fade-up" data-aos-duration="300" className="overflow-hidden rounded-lg relative group">
                        {/* Background Image with Overlay */}
                        <div className="bg-[url('/Images/isend-shipments-2.png')] w-full h-[350px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                            <div>
                                <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">{t('express665')}</p>
                                <h2 className="text-2xl my-3 font-semibold text-white">{t('exceptionalSpeed665')}</h2>
                                <p className="text-white">
                                   {t('deliveryInJustAFewHours665')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className="overflow-hidden rounded-lg relative group">
                        {/* Background Image with Overlay */}
                        <div className="bg-[url('/Images/isend-shipments-1.png')] w-full h-[350px] bg-cover bg-center bg-[#f7f7fc] group-hover:scale-105 duration-300 ease-in-out relative">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "></div>
                        </div>
                        {/* Content */}
                        <div className="absolute inset-0 z-50 flex items-end justify-start p-5">
                            <div>
                                <p className="bg-[#fff] text-primary max-w-32 text-center py-2 px-6 rounded-full">
                                    {t('savings665')}
                                </p>
                                <h2 className="text-2xl my-3 font-semibold text-white">{t('savings665')}</h2>
                                <p className="text-white">
                                    {t('cheaperThanTraditionalCarriers665')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    <div data-aos="fade-up" data-aos-duration="300" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-3.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('uniqueSolution544')}</h2>
                        <p>{t('takeAdvantageOfInnovativePlatform544')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-2.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('personalizedDelivery544')}</h2>
                        <p>{t('yourBeneficiaryReceivesThePackage544')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="700" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Isend/shipments-icon-1.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('simplicityAndFlexibility544')}</h2>
                        <p>{t('wideChoiceOfRoutes544')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipments;
