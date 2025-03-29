'use client';
import i18n from '@/app/utils/i18';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const HowDoesWork = () => {
    const { t } = i18n;

    return (
        <div className='lg:w-[80%] w-[90%] mx-auto'>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className='my-32 grid lg:grid-cols-2 gap-10 items-center'
            >
                <div>
                    <h2
                        className='md:text-4xl text-2xl font-semibold text-primary'
                    >
                        Access products from around the world, without borders
                    </h2>
                    <p className='my-5 md:text-2xl'>
                        The whole world at your fingertips, thanks to our travel couriers,
                        <span className='text-primary font-semibold'> the world has never been so close</span>
                    </p>

                    <div className='bg-[#f3fef7] p-5 rounded-lg'>
                        <h3 className='font-semibold text-2xl text-primary mb-3'>How does it work?</h3>
                        <p>
                            Your dream product is impossible to find in your country, or the import price is too high,
                            or the delivery takes too long. With CoBag, a traveler-courier on vacation in the country where it is available
                            can buy it for you and bring it back in their suitcase upon their return — all with the fastest delivery on the planet.
                        </p>
                    </div>

                    <div className='md:flex items-center gap-5 mt-5'>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>
                                A product <br />
                                <span className='font-semibold text-primary'>not found?</span>
                            </h2>
                        </div>
                        <div className='flex md:block items-center justify-center gap-5'>
                            <FaArrowRight className='text-2xl md:my-0 my-5 text-primary' />
                        </div>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>
                                A CoBag traveler <br />
                                <span className='font-semibold text-primary'>brings it back to you.</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='flex justify-end'
                >
                    <img className='w-4/5' src="/Images/NewSection/international_purchase_CoBag.png" alt="" />
                </motion.div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className='my-32'
            >
                <h2 className='text-2xl text-center font-semibold text-primary mb-10'>
                    Examples of international purchases that you will have in your hands in a few hours, the time of a flight:
                </h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-20 text-center'>
                    {[
                        {
                            img: '/Images/NewSection/Examples-1.png',
                            region: 'Asia',
                            product: 'Korean Skin Care Beauty Treatments',
                        },
                        {
                            img: '/Images/NewSection/cigarettes.png',
                            region: 'Europe',
                            product: 'Cheaper cigarettes',
                        },
                        {
                            img: '/Images/NewSection/pagne.png',
                            region: 'Africa',
                            product: 'Traditional and authentic wax fabric',
                        },
                        {
                            img: '/Images/NewSection/maillot.png',
                            region: 'America',
                            product: 'Authentic NBA Jerseys',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='hover:-mt-2 duration-500'
                        >
                            <img className='w-full mx-auto' src={item.img} alt={item.region} />
                            <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'>
                                <CiLocationOn /> {item.region}
                            </h2>
                            <p className='font-semibold'>{item.product}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HowDoesWork;
