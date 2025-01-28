'use client';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import i18n from '@/app/utils/i18';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';

const SubscriptionCard = () => {

    const { data: userData } = useGetUserQuery();

    const { t } = i18n;

    const [payment] = usePaymentMutation();
    const router = useRouter();

    const handlePayment = async () => {

        if (!userData?.user) {
            toast.error('Please login first');
            return router.push('/login');
        }

        // console.log("Payment confirmed");
        const data = {
            "amount": 500,
            "currency": "usd",
            "paymentMethodId": "pm_card_visa"
        }

        // console.log(data);
        // setIsModalOpen(false);
        try {

            const response = await payment(data).unwrap();

            console.log(response?.url);
            if (response?.url) {
                // window.location.href = response?.url;
                router.push(response?.url);
            }
            // setIsModalOpen(false);


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="py-20 bg-gray-100 px-5 md:px-0">
            <Toaster />
            <div className="max-w-[500px]  w-full mx-auto shadow-xl rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary text-white px-6 md:px-10 py-5 text-center">
                    <h3 className="text-xl md:text-2xl mb-5">{t('OneSubscriptionUniqueBenefits')}</h3>
                    <h2 className="text-5xl md:text-7xl font-semibold">
                        {t('PricePerMonth')} <span className="text-sm">/month</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10">
                    <ul>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>{t('ZeroCommission')}</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>{t('NoCommitment2')}</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>{t('ImmediateSavings')}</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>{t('InsurancePlusIncluded')}</span>
                        </li>
                        <li className="flex items-center gap-3 my-4">
                            <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <span>{t('CoBagSkyBadge')}</span>
                        </li>
                    </ul>

                    {/* Subscribe Button */}
                    <button onClick={handlePayment} className="w-full bg-gradient-to-l mt-10 from-[#C7FFD8] to-[#98DED9] text-primary font-semibold py-3 rounded-lg flex items-center gap-3 justify-center">
                        {t('Subscribenow1')} <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
