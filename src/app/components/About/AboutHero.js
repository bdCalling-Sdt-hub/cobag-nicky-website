'use client';
import i18n from '@/app/utils/i18';
import React from 'react';

const AboutHero = () => {
    const { t } = i18n;
    return (
        <div>
            <div className='bg-[url("/Images/about/about_banner.png")] md:min-h-[90vh] min-h-[80vh] w-full bg-cover bg-center '>
                <div className='md:min-h-[90vh] min-h-[80vh] w-full bg-[#000000b0] flex items-center'>
                    <div className='text-white w-[90%] mx-auto py-5 text-center'>
                        <h2 className='md:text-6xl text-4xl leading-[1.3]'>{t('logoitem101')}<span className='font-semibold'>{t('logoitem102')}</span>{t('logoitem103')}<span className='font-semibold'>{t('Luggage542121')}</span><br className='md:block hidden' /> {t('TravelsforYouandforOthers')}</h2>
                        <p className='md:my-10 my-5 md:text-2xl text-base md:w-[60%] w-full mx-auto'>{t('CoBagwasborn455')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
