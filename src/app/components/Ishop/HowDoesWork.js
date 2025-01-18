'use client';
import i18n from '@/app/utils/i18';
import React from 'react';
import { CiClock2, CiLocationOn, CiLock } from 'react-icons/ci';
import { FiMessageSquare, FiShield, FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const HowDoesWork = () => {


    const { t } = i18n;



    return (
        <div className='py-32'>
            <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center mb-16'>{t('Howdoesitworkit')}</h2>
            <div className='lg:w-[80%] w-[90%] mx-auto  grid lg:grid-cols-4 grid-cols-1 gap-10 items-start'>
                <div data-aos="fade-up" data-aos-duration="300" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <IoSearchOutline className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>{t('FindAcurier')}</h2>
                    <p className='text-[#000000b2]'>{t('findAtraveler')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <FiMessageSquare className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>{t('DiscussTheDetails')}</h2>
                    <p className='text-[#000000b2]'>{t('SpecifyDesiredProducts')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <FiShoppingBag className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>{t('TheCourierDoesYourShopping')}</h2>
                    <p className='text-[#000000b2]'>{t('TheCourierBuysYourProducts')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <CiLocationOn className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>{t('CollectYourPurchases')}</h2>
                    <p className='text-[#000000b2]'>{t('MeetTheCourierAtTheAirportOrTrainStation')}</p>
                </div>
            </div>



            <div className='lg:w-[80%] w-[90%] mx-auto pt-28'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>{t('TheAdvantagesOfCoBag')}</h2>
                <p className='text-[#000000b2] text-center mt-2' >{t('AnInnovationSolution')}es</p>
                <div className='mt-20 grid xl:grid-cols-4 md:grid-cols-2 gap-5'>
                    <div data-aos="fade-up" data-aos-duration="300" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-1.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('FastDelivery')}</h2>
                        <p>{t('ReceiveYourPurchasesInAFewHours')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-2.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('GreatPrice')}</h2>
                        <p>{t('SaveOnInternationalShippingCosts')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="700" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-3.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('GlobalAccess')}</h2>
                        <p>{t('BuyProductsFromAllOverTheWorld')}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900" className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-4.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>{t('SafetyGuaranteed')}</h2>
                        <p>{t('SecurePaymentAndVerifiedCouriers')}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HowDoesWork;