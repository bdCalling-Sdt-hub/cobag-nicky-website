'use client';
import i18n from '@/app/utils/i18';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { CiChat1, CiClock2, CiLocationOn, CiLock } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa6';
import { FiMessageSquare, FiShield, FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const HowDoesWork = () => {


    const { t } = i18n;

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, [])



    return (
        <div className='lg:w-[80%] w-[90%] mx-auto'>



            <div data-aos="fade-up" data-aos-duration="500" className='my-32 grid lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='md:text-4xl text-2xl font-semibold text-primary'>Access products from around the world, without borders
                    </h2>
                    <p className='my-5 md:text-2xl'>The whole world at your fingertips, thanks to our travel couriers,<span className='text-primary font-semibold'>the world has never been so close</span></p>

                    <div className='bg-[#f3fef7] p-5 rounded-lg'>
                        <h3 className='font-semibold text-2xl text-primary mb-3'>How does it work?</h3>
                        <p>Your dream product is impossible to find in your country, or the import price is too high , or the delivery takes too long . With CoBag, a traveler-courier on vacation in the country where it is available can buy it for you and bring it back in their suitcase upon their return, and all this with the fastest delivery on the planet: just a flight away . Make the inaccessible possible with CoBag.</p>
                    </div>

                    <div className='md:flex items-center gap-5 mt-5'>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>A product <br />
                                <span className='font-semibold text-primary'>not found?</span>
                            </h2>
                        </div>
                        <div className='flex md:block items-center justify-center gap-5'>
                            <FaArrowRight className='text-2xl md:my-0 my-5 text-primary' />
                        </div>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>A CoBag traveler
                                <br />
                                <span className='font-semibold text-primary'>
                                    brings it back to you.</span>
                            </h2>
                        </div>
                    </div>



                </div>
                <div className='flex justify-end'>
                    <img className='w-4/5' src="/Images/NewSection/international_purchase_CoBag.png" alt="" />
                </div>
            </div>

            <div data-aos="fade-up" className='my-32'>
                <h2 className='text-2xl text-center font-semibold text-primary'>Examples of international purchases that you will have in your hands in a few hours, the time of a flight :
                </h2>

                <div className=''>

                    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-20 text-center'>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/Examples-1.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Asia </h2>
                            <p className='font-semibold '>Korean Skin Care Beauty Treatments</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/cigarettes.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Europe </h2>
                            <p className='font-semibold '>Cheaper cigarettes</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/pagne.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Africa </h2>
                            <p className='font-semibold '>Traditional and authentic wax fabric</p>
                        </div>
                        <div className='hover:-mt-2 duration-500'>
                            <img className='w-full mx-auto' src="/Images/NewSection/maillot.png" alt="" />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />America </h2>
                            <p className='font-semibold '>Authentic NBA Jerseys</p>
                        </div>
                    </div>
                    {/* <div>
                        <button className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-10 rounded-lg mx-auto'>Find my buyer <FaArrowRight /></button>
                    </div> */}
                </div>

            </div>





        </div>
    );
}

export default HowDoesWork;


// <div className='py-32'>
//     <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center mb-16'>{t('Howdoesitworkit')}</h2>
//     <div className='lg:w-[80%] w-[90%] mx-auto  grid lg:grid-cols-4 grid-cols-1 gap-10 items-start'>
//         <div data-aos="fade-up" data-aos-duration="300" className='text-center flex flex-col items-center justify-center'>
//             <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
//                 <IoSearchOutline className='text-2xl ' />
//             </div>
//             <h2 className=' text-xl font-semibold text-primary my-5 '>{t('FindAcurier')}</h2>
//             <p className='text-[#000000b2]'>{t('findAtraveler')}</p>
//         </div>
//         <div data-aos="fade-up" data-aos-duration="500" className='text-center flex flex-col items-center justify-center'>
//             <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
//                 <FiMessageSquare className='text-2xl ' />
//             </div>
//             <h2 className=' text-xl font-semibold text-primary my-5 '>{t('DiscussTheDetails')}</h2>
//             <p className='text-[#000000b2]'>{t('SpecifyDesiredProducts')}</p>
//         </div>
//         <div data-aos="fade-up" data-aos-duration="700" className='text-center flex flex-col items-center justify-center'>
//             <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
//                 <FiShoppingBag className='text-2xl ' />
//             </div>
//             <h2 className=' text-xl font-semibold text-primary my-5 '>{t('TheCourierDoesYourShopping')}</h2>
//             <p className='text-[#000000b2]'>{t('TheCourierBuysYourProducts')}</p>
//         </div>
//         <div data-aos="fade-up" data-aos-duration="900" className='text-center flex flex-col items-center justify-center'>
//             <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
//                 <CiLocationOn className='text-2xl ' />
//             </div>
//             <h2 className=' text-xl font-semibold text-primary my-5 '>{t('CollectYourPurchases')}</h2>
//             <p className='text-[#000000b2]'>{t('MeetTheCourierAtTheAirportOrTrainStation')}</p>
//         </div>
//     </div>



//     <div className='lg:w-[80%] w-[90%] mx-auto pt-28'>
//         <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>{t('TheAdvantagesOfCoBag')}</h2>
//         <p className='text-[#000000b2] text-center mt-2' >{t('AnInnovationSolution')}es</p>
//         <div className='mt-20 grid xl:grid-cols-4 md:grid-cols-2 gap-5'>
//             <div data-aos="fade-up" data-aos-duration="300" className='shadow-lg rounded-lg p-10'>
//                 <img src="/Images/Ishop/card-icon-1.png" alt="" />
//                 <h2 className='text-primary text-xl font-semibold my-5'>{t('FastDelivery')}</h2>
//                 <p>{t('ReceiveYourPurchasesInAFewHours')}</p>
//             </div>
//             <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg rounded-lg p-10'>
//                 <img src="/Images/Ishop/card-icon-2.png" alt="" />
//                 <h2 className='text-primary text-xl font-semibold my-5'>{t('GreatPrice')}</h2>
//                 <p>{t('SaveOnInternationalShippingCosts')}</p>
//             </div>
//             <div data-aos="fade-up" data-aos-duration="700" className='shadow-lg rounded-lg p-10'>
//                 <img src="/Images/Ishop/card-icon-3.png" alt="" />
//                 <h2 className='text-primary text-xl font-semibold my-5'>{t('GlobalAccess')}</h2>
//                 <p>{t('BuyProductsFromAllOverTheWorld')}</p>
//             </div>
//             <div data-aos="fade-up" data-aos-duration="900" className='shadow-lg rounded-lg p-10'>
//                 <img src="/Images/Ishop/card-icon-4.png" alt="" />
//                 <h2 className='text-primary text-xl font-semibold my-5'>{t('SafetyGuaranteed')}</h2>
//                 <p>{t('SecurePaymentAndVerifiedCouriers')}</p>
//             </div>
//         </div>
//     </div>

// </div>