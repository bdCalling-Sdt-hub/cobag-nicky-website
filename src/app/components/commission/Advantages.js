'use client'
import i18n from '@/app/utils/i18';
import React from 'react';

const Advantages = () => {
    const { t } = i18n;

    return (
        <div className='py-20 bg-[#fafaff]'>
            <div className='text-center my-10'>
                <h1 className='md:text-5xl text-3xl font-semibold text-primary mb-5'>{t('TheCoBagSkyAdvantages')}</h1>
                <p className='text-base font-semibold text-gray-500'>{t('PremiumExperience')}</p>
            </div>

            <div className='lg:w-[60%] w-[90%] mx-auto mt-20'>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/NewSection/colis.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-1.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>{t('ZeroCommissions')}</h2>
                            <p className='text-gray-400'>{t('ZeroCommissionFee')}</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/NewSection/gare.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-2.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>{t('InsurancePlusIncluded')}</h2>
                            <p className='text-gray-400'>{t('EnjoyCompleteFlexibility')}</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 items-center gap-20 my-20'>
                    <img className='w-full' src="/Images/NewSection/securite.png" alt="" />
                    <div className='flex items-start gap-5'>
                        <img src="/Images/commission/commission-con-3.png" alt="" />
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold text-primary mb-5'>{t('NoCommitment')}</h2>
                            <p className='text-gray-400'>{t('StayInControl')}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Advantages;
