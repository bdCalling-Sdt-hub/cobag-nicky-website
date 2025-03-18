'use client';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import i18n from '@/app/utils/i18';
import { CiClock2, CiLock } from 'react-icons/ci';
import { FiShield, FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa6';

const PopularProducts = () => {



    const { t } = i18n;

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, [])

    const [openQuestion, setOpenQuestion] = useState(null);

    // Toggle the open question
    const toggleQuestion = (questionId) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };

    return (
        <div className='bg-[#f6f6fb] py-20'>

            <div className="max-w-4xl mx-auto py-10 px-5">
                <h2 className="text-3xl font-semibold text-center text-primary mb-8">Frequently Asked Questions</h2>

                {/* FAQ Panel 1 */}
                <div className="bg-white shadow-md rounded-xl mb-4">
                    <button
                        onClick={() => toggleQuestion(1)}
                        className="w-full text-left px-6 py-4  font-medium text-gray-800 bg-gray-100 rounded-t-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>What does the overseas purchasing mission consist of?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 1 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </button>
                    {openQuestion === 1 && (
                        <div className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl">
                            This service is intended for buyers who wish to purchase a product that is only available in another country,
                            or for which direct delivery would be too long or would incur high customs fees. The CoBag platform allows you
                            to find a traveler located in the country of the desired product and who is returning to your country. This
                            traveler acts as a courier: they make the purchase on-site and bring the product back to you on their return
                            trip, ensuring a fast and economical purchase.
                        </div>
                    )}
                </div>

                {/* FAQ Panel 2 */}
                <div className="bg-white shadow-md rounded-xl mb-4">
                    <button
                        onClick={() => toggleQuestion(2)}
                        className="w-full text-left px-6 py-4 text-gray-800 bg-gray-100 rounded-t-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>How much does a purchasing mission cost and how does payment work?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 2 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </button>
                    {openQuestion === 2 && (
                        <div className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl">
                            The cost of the purchasing mission depends on the product price, the destination country, and the courier’s
                            service fees. Payment is made directly to the platform, and once the purchase is confirmed, the traveler will
                            handle the delivery. You can make payments securely using various payment methods available on the platform.
                        </div>
                    )}
                </div>

                {/* FAQ Panel 3 */}
                <div className="bg-white shadow-md rounded-xl mb-4">
                    <button
                        onClick={() => toggleQuestion(3)}
                        className="w-full text-left px-6 py-4  text-gray-800 bg-gray-100 rounded-t-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>What are the advantages of using CoBag for purchases abroad?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 3 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </button>
                    {openQuestion === 3 && (
                        <div className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl">
                            CoBag offers several benefits: cost-effective services, faster delivery, and the ability to purchase items not
                            easily accessible in your country. The platform ensures that the process is transparent, secure, and
                            convenient for both the buyer and the traveler acting as a courier.
                        </div>
                    )}
                </div>

                {/* "Find more answers" button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-primary text-white py-3 px-8 rounded-full transition duration-300">
                        Find more answers to my questions
                    </button>
                </div>
            </div>

            {/* <div className='lg:w-[80%] w-[90%] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10'>

                <div data-aos="fade-up" data-aos-duration="300" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_1.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Korean Beauty Products</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> Seoul</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_3.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Exclusive sneakers</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> New York</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="700" className='shadow-xl rounded-2xl overflow-hidden'>
                    <div className='bg-[url("/Images/Ishop/Card_image_2.jpg")] w-full min-h-[300px] bg-cover bg-center]  '>
                        <div className='min-h-[300px] w-full bg-[#0000007a] flex items-end'>
                            <div className='p-5 text-white'>
                                <h2 className='text-xl font-semibold'>Clothes</h2>
                                <span className='flex items-center gap-2'><FiShoppingBag /> Tokyo</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 flex justify-end'>
                        <button className='py-3 px-10 bg-gradient-to-r from-primary to-[#0d2c98] text-white rounded-lg'>See the couriers</button>
                    </div>
                </div>


            </div> */}

            <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-4 grid-cols-1 gap-5 items-start'>
                <div data-aos="fade-up" data-aos-duration="300" className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiUserCheck className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('identityVerified1221')}</h2>
                    <p className='text-[#000000b2]'>{t('verifiedUsers1221')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiLock className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securePayment1221')}</h2>
                    <p className='text-[#000000b2]'>{t('paymentSecurity1221')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiClock2 className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securityCode1221')}</h2>
                    <p className='text-[#000000b2]'>{t("securityProcess1221")}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'>
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

export default PopularProducts;
