'use client';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import React, { useEffect, useState } from 'react';
import i18n from '@/app/utils/i18';
import { CiClock2, CiLock } from 'react-icons/ci';
import { FiShield, FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa6';

const PopularProducts = () => {
    const { t } = i18n;

    const [openQuestion, setOpenQuestion] = useState(null);

    // Toggle the open question
    const toggleQuestion = (questionId) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };

    return (
        <div className='bg-[#f6f6fb] py-20'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto py-10 px-5"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl font-semibold text-center text-primary mb-8"
                >
                    Frequently Asked Questions
                </motion.h2>

                {/* FAQ Panel 1 */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-white shadow-md rounded-xl mb-4"
                >
                    <motion.button
                        onClick={() => toggleQuestion(1)}
                        className="w-full text-left px-6 py-8 font-semibold text-gray-600 bg-gray-50 rounded-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>What does the overseas purchasing mission consist of?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 1 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </motion.button>
                    {openQuestion === 1 && (
                        <motion.div
                            className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            This service is intended for buyers who wish to purchase a product that is only available in another country,
                            or for which direct delivery would be too long or would incur high customs fees. The CoBag platform allows you
                            to find a traveler located in the country of the desired product and who is returning to your country. This
                            traveler acts as a courier: they make the purchase on-site and bring the product back to you on their return
                            trip, ensuring a fast and economical purchase.
                        </motion.div>
                    )}
                </motion.div>

                {/* FAQ Panel 2 */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-white shadow-md rounded-xl mb-4"
                >
                    <motion.button
                        onClick={() => toggleQuestion(2)}
                        className="w-full text-left px-6 py-8 font-semibold text-gray-600 bg-gray-50 rounded-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>How much does a purchasing mission cost and how does payment work?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 2 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </motion.button>
                    {openQuestion === 2 && (
                        <motion.div
                            className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            The cost of the purchasing mission depends on the product price, the destination country, and the courier’s
                            service fees. Payment is made directly to the platform, and once the purchase is confirmed, the traveler will
                            handle the delivery. You can make payments securely using various payment methods available on the platform.
                        </motion.div>
                    )}
                </motion.div>

                {/* FAQ Panel 3 */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-white shadow-md rounded-xl mb-4"
                >
                    <button
                        onClick={() => toggleQuestion(3)}
                        className="w-full text-left px-6 py-8 font-semibold text-gray-600 bg-gray-50 rounded-xl hover:bg-indigo-50 focus:outline-none flex justify-between items-center"
                    >
                        <span>What are the advantages of using CoBag for purchases abroad?</span>
                        <span
                            className={`transition-transform duration-300 ${openQuestion === 3 ? 'transform rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </span>
                    </button>
                    {openQuestion === 3 && (
                        <div
                            className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-xl"

                        >
                            CoBag offers several benefits: cost-effective services, faster delivery, and the ability to purchase items not
                            easily accessible in your country. The platform ensures that the process is transparent, secure, and
                            convenient for both the buyer and the traveler acting as a courier.
                        </div>
                    )}
                </motion.div>

                {/* "Find more answers" button */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mt-10"
                >
                    <motion.button
                        className="bg-primary text-white py-3 px-8 rounded-full transition duration-300"
                    >
                        Find more answers to my questions
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Icons Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-[90%] mx-auto py-20 grid lg:grid-cols-4 grid-cols-1 gap-5 items-start"
            >
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'
                >
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiUserCheck className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('identityVerified1221')}</h2>
                    <p className='text-[#000000b2]'>{t('verifiedUsers1221')}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'
                >
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiLock className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securePayment1221')}</h2>
                    <p className='text-[#000000b2]'>{t('paymentSecurity1221')}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'
                >
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiClock2 className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('securityCode1221')}</h2>
                    <p className='text-[#000000b2]'>{t("securityProcess1221")}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='hover:-mt-2 duration-500 text-center flex flex-col items-center justify-center'
                >
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiShield className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>{t('cobagInsurance1221')}</h2>
                    <p className='text-[#000000b2]'>{t('insuranceDetails1221')}</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default PopularProducts;
