'use client';
import i18n from '@/app/utils/i18';
import React from 'react';

const Courier = () => {
    const {t} = i18n;
    return (
        <div className='bg-[#f6f6fb]'>
            <div className='lg:w-[70%] w-[90%] mx-auto py-20'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>{t('whatItsLikeCourierCobagTitle')}</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10' >
                    <div data-aos="fade-up" data-aos-duration="300" className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-2.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>{t('DoubleYourWinnings564654')}</h2>
                        <p className='text-ceneter'>{t('CourierEarnings564654')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-3.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>{t('SimpleAndDirectMission564654')}</h2>
                        <p className='text-center'>{t('BuyAndDeliver564654')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" className='bg-white p-10 rounded-xl flex flex-col justify-center items-center'>
                        <img src="/Images/Itravel/Courier-1.png" alt="" />
                        <h2 className='text-2xl font-normal my-5 text-primary text-center'>{t('MaximizeYourEarnings564654')}</h2>
                        <p className='text-center'>{t('VATRecovery564654')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courier;
