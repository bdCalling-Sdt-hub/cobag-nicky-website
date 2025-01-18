'use client';
import i18n from '@/app/utils/i18';
import React, { useEffect } from 'react';
import Aos from 'aos';

const YourTravial = () => {

    const { t } = i18n;

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, [])

    return (
        <div className='md:w-3/4 md:px-0 px-5 mx-auto grid lg:grid-cols-2 gap-10 items-center md:my-20 my-10'>
            <div data-aos="fade-up" data-aos-duration="300" className=' text-primary'>
                <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>{t('heading1212121')}</h2>
                <p className='my-10 text-xl'>{t('paragraph1121212')}</p>

                <div>
                    <h2 className='gap-2 md:text-5xl text-3xl font-semibold'>{t('heading2456')}</h2>
                    <div className='my-5'>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>1.</span>
                            <span className='font-semibold'>{t('step1_title')}</span> {t('step1_description')}
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>2.</span>
                            <span className='font-semibold'>{t('step2_title')}</span>  {t('step2_description')}
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>3.</span>
                            <span className='font-semibold'>{t('step3_title')}</span> {t('step3_description')}
                        </p>
                        <p className='my-5 text-xl'><span className='font-semibold mr-5'>4.</span>
                            <span className='font-semibold'>{t('step4_title')} </span> {t('step4_description')}
                        </p>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up" data-aos-duration="500" className='flex items-end justify-end'>
                <img className='w-full' src="/Images/Ourconcept/ourconcept1.png" alt="" />
            </div>
        </div>
    );
}

export default YourTravial;
