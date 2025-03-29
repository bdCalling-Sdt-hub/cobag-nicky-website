'use client'
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import i18n from '@/app/utils/i18';
import React from 'react';

const Advantages = () => {
    const { t } = i18n;

    return (
        <div className='py-20 bg-[#fafaff]'>
            <div className='text-center my-10'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}  // Fade-in and slide-up effect when in view
                    initial={{ opacity: 0, y: 50 }}  // Initial state for animation
                    transition={{ duration: 1 }}
                    className='md:text-5xl text-3xl font-semibold text-primary mb-5'
                >
                    {t('TheCoBagSkyAdvantages')}
                </motion.h1>
                <motion.p
                    whileInView={{ opacity: 1 }} // Fade-in effect for the text when in view
                    initial={{ opacity: 0 }} // Initial state for opacity
                    transition={{ duration: 1 }}
                    className='text-base font-semibold text-gray-500'
                >
                    {t('PremiumExperience')}
                </motion.p>
            </div>

            <div className='lg:w-[60%] w-[90%] mx-auto mt-20'>
                {/* First Section */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}  // Slide-in from the left when in view
                    initial={{ opacity: 0, y: 50 }}  // Initial state for animation
                    transition={{ duration: 1 }}
                    className='grid lg:grid-cols-2 items-center gap-20 my-20'
                >
                    <motion.img
                        whileInView={{ scale: 1.1 }}  // Zoom-in effect when in view
                        initial={{ scale: 1 }}  // Initial state for scale
                        transition={{ duration: 1 }}
                        className='w-full'
                        src="/Images/NewSection/colis.png"
                        alt=""
                    />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-1.png" alt="" />
                        <div>
                            <motion.h2
                                whileInView={{ opacity: 1, y: 0 }}  // Slide-in effect for the heading
                                initial={{ opacity: 0, y: 50 }}  // Initial state for heading animation
                                transition={{ duration: 1 }}
                                className='md:text-3xl text-2xl font-semibold text-primary mb-5'
                            >
                                {t('ZeroCommissions')}
                            </motion.h2>
                            <motion.p
                                whileInView={{ opacity: 1 }}  // Fade-in effect for the paragraph
                                initial={{ opacity: 0 }}  // Initial state for opacity
                                transition={{ duration: 1 }}
                                className='text-gray-400'
                            >
                                {t('ZeroCommissionFee')}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                {/* Second Section */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}  // Slide-in from the left when in view
                    initial={{ opacity: 0, y: 50 }}  // Initial state for animation
                    transition={{ duration: 1 }}
                    className='grid lg:grid-cols-2 items-center gap-20 my-20'
                >
                    <motion.img
                        whileInView={{ scale: 1.1 }}  // Zoom-in effect when in view
                        initial={{ scale: 1 }}  // Initial state for scale
                        transition={{ duration: 1 }}
                        className='w-full'
                        src="/Images/NewSection/gare.png"
                        alt=""
                    />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-2.png" alt="" />
                        <div>
                            <motion.h2
                                whileInView={{ opacity: 1, y: 0 }}  // Slide-in effect for the heading
                                initial={{ opacity: 0, y: 50 }}  // Initial state for heading animation
                                transition={{ duration: 1 }}
                                className='md:text-3xl text-2xl font-semibold text-primary mb-5'
                            >
                                Sans engagement
                            </motion.h2>
                            <motion.p
                                whileInView={{ opacity: 1 }}  // Fade-in effect for the paragraph
                                initial={{ opacity: 0 }}  // Initial state for opacity
                                transition={{ duration: 1 }}
                                className='text-gray-400'
                            >
                                {t('EnjoyCompleteFlexibility')}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                {/* Third Section */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}  // Slide-in from the left when in view
                    initial={{ opacity: 0, y: 50 }}  // Initial state for animation
                    transition={{ duration: 1 }}
                    className='grid lg:grid-cols-2 items-center gap-20 my-20'
                >
                    <motion.img
                        whileInView={{ scale: 1.1 }}  // Zoom-in effect when in view
                        initial={{ scale: 1 }}  // Initial state for scale
                        transition={{ duration: 1 }}
                        className='w-full'
                        src="/Images/NewSection/securite.png"
                        alt=""
                    />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-3.png" alt="" />
                        <div>
                            <motion.h2
                                whileInView={{ opacity: 1, y: 0 }}  // Slide-in effect for the heading
                                initial={{ opacity: 0, y: 50 }}  // Initial state for heading animation
                                transition={{ duration: 1 }}
                                className='md:text-3xl text-2xl font-semibold text-primary mb-5'
                            >
                                Plus Insurance included
                            </motion.h2>
                            <motion.p
                                whileInView={{ opacity: 1 }}  // Fade-in effect for the paragraph
                                initial={{ opacity: 0 }}  // Initial state for opacity
                                transition={{ duration: 1 }}
                                className='text-gray-400'
                            >
                                Benefit from Plus insurance: coverage included up to €500 instead of €150
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}

export default Advantages;
