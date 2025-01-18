'use client';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from 'aos';


const YouraBuyer = () => {
    const { t } = i18n; 
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, [])

    return (
        <div>
            <div className='md:w-3/4 md:px-0 px-5  mx-auto grid lg:grid-cols-2 gap-10 items-center md:my-20 my-10'>
                <div data-aos="fade-up" data-aos-duration="300" className='flex items-end justify-end'>
                    <img className='w-full' src="/Images/Ourconcept/ourconcept2.png" alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='md:py-20 py-10 text-primary'>
                    <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>{t('WhyChooseCoBag45')}</h2>
                    <div>
                        <ul className='my-5 list-disc ml-6'>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'> Secure: </span>{t('Secure456')}
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'> Eco-Friendly:</span> {t('EcoFriendly546')}
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'>Affordable: </span>  {t('Affordable456456')}
                            </li>
                            <li className='my-5 text-xl'>
                                <span className='font-semibold'>Flexible: </span>  {t('Flexible4566')}
                            </li>
                        </ul>
                        <div>
                            <p className='text-xl mb-10'> <span className='font-semibold'>{t('JoinTheCoBagMovement54645')} <br /> </span>{t('Whetheryoure4241')}</p>
                        </div>
                        <Link href={'/signup'}>
                            <button className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 px-16 text-primary font-semibold rounded-md w-full'>{t('SignUpNow456')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouraBuyer;