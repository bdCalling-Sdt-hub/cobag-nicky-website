'use client';

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuPlane, LuShoppingBag } from 'react-icons/lu';
import i18n from '@/app/utils/i18';

const AboutStory = () => {
    const { t } = i18n ;
    useEffect(() => {
        // Initialize AOS
        Aos.init({
            duration: 1000, // Animation duration
            once: false, // Ensures animations trigger every time element comes into view
        });

        // Refresh AOS on scroll to reinitialize animations
        const handleScroll = () => {
            Aos.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
        };
    }, []);

    return (
        <div className=''>
            <div className='my-20 lg:w-[60%] w-[90%] mx-auto'>
                {/* Your original code remains unchanged */}
                <div data-aos="fade-up" data-aos-duration="900" className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <img className='lg:w-4/5 rounded-lg lg:order-1 order-2' src="/Images/about/about-1.png" alt="" />
                    <div className='flex items-start gap-5 lg:order-2 order-1'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <LuPlane className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>{t('birthOfIdeaTitle2')}</h2>
                            <p className='leading-[1.5] text-gray-500'>{t('birthOfIdeaDescription2')}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="900" className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <div className='flex items-start gap-5'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <BsFillBoxSeamFill className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>{t('revolutionaryTitle')}</h2>
                            <p className='leading-[1.5] text-gray-500'>{t('revolutionaryDescription')}</p>
                        </div>
                    </div>
                    <img className='lg:w-4/5 rounded-lg' src="/Images/about/about-2.png" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="900" className='grid lg:grid-cols-2 gap-10 items-center my-10'>
                    <img className='lg:w-4/5 rounded-lg lg:order-1 order-2' src="/Images/about/about-3.png" alt="" />
                    <div className='flex items-start gap-5 lg:order-2 order-1'>
                        <div className='bg-[#f6f6fb] min-w-14 min-h-14 rounded flex items-center justify-center'>
                            <LuShoppingBag className='text-2xl text-primary' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary mb-3'>{t('notOnlyThatTitle')}</h2>
                            <p className='leading-[1.5] text-gray-500'>{t('notOnlyThatDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f7f7fc] md:py-32 mx-auto py-20 flex items-center justify-center  border-b-[1px] border-white'>
                <div data-aos="zoom-in" data-aos-duration="500" className='text-center md:px-0 px-5 w-2/3 '>
                    <h2 className='md:text-5xl text-3xl font-semibold text-primary'>{t('joinTheRevolutionTitle')}</h2>
                    <div className='flex items-center justify-center mt-8'>
                        <button className='bg-primary py-3 px-10 text-white font-semibold rounded-lg flex items-center gap-2 justify-center'>Start <FaArrowRightLong className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStory;
