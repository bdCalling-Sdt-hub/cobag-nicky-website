'use client';
import React, { useState } from 'react';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { Modal } from 'antd';
import { FiShield } from 'react-icons/fi';
import i18n from '@/app/utils/i18';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import toast, { Toaster } from 'react-hot-toast';


const CommissionHeader = () => {
    const { t } = i18n;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log("Subscription confirmed"); // Add subscription logic here
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    //==============  use Payment Mutation ==================
    const { data: userData } = useGetUserQuery();
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
        <div className="bg-gradient-to-b from-[#E9FFFD] via-[#E9FFFD] to-[#FFF]">
            <Toaster />
            <div className="md:w-[50%] w-[90%] mx-auto py-20 text-center">
                <h1 className="md:text-5xl text-3xl font-semibold text-primary">
                    {t('commissionMessage21')}
                </h1>
                <img
                    className="w-2/3 mx-auto mg:my-20 my-10"
                    src="/Images/NewSection/cobag-sky-logo.png"
                    alt="Commission Logo"
                />
                <p className="text-xl text-primary">
                    {/* {t('monthlyFeeMessage')} */}
                    For only €10 per month, without commitment, earn even more
                </p>
                <button
                    onClick={showModal}
                    className="bg-primary py-3 px-16 text-white font-semibold rounded-lg md:mt-20 mt-10"
                >
                    {t('Subscribenow1')} <FaArrowRightLong className="inline ml-2" />
                </button>
            </div>

            {/* Modal */}
            <Modal
                title={null}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                className='!min-w-[700px]'
            >
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-primary mb-10">
                        Activate CoBag Sky
                    </h2>
                    <div className=''>
                        <div>
                            <p className="text-gray-600 mb-2"><span className='text-5xl font-semibold text-primary'>10€ </span>/month</p>
                            <p className="text-gray-600 text-sm mb-5">
                                No commitment - Cancel anytime
                            </p>
                            <ul>
                                <li className="flex items-center gap-3 my-4">
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>0% commission on all transactions</span>
                                </li>
                                <li className="flex items-center gap-3 my-4">
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>No commitment: total freedom</span>
                                </li>
                                <li className="flex items-center gap-3 my-4">
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>Immediate savings for buyers and sellers</span>
                                </li>
                                <li className="flex items-center gap-3 my-4">
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>Plus Insurance included up to €500</span>
                                </li>
                                <li className="flex items-center gap-3 my-4">
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>CoBag Sky badge on your profile</span>
                                </li>
                            </ul>
                        </div>

                        {/* Confirm Button */}
                        <button
                            type="button"
                            onClick={handlePayment}
                            // onClick={handleOk}
                            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center gap-2 justify-center"
                        >
                            <FiShield className='text-2xl' /> Confirm subscription
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CommissionHeader;
