'use client';
import React, { useState } from 'react';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { Modal } from 'antd';
import { FiShield } from 'react-icons/fi';
import i18n from '@/app/utils/i18';
 

const CommissionHeader = () => {
    const {t} = i18n;
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

    return (
        <div className="bg-gradient-to-b from-[#E9FFFD] via-[#E9FFFD] to-[#FFF]">
            <div className="md:w-[50%] w-[90%] mx-auto py-20 text-center">
                <h1 className="md:text-5xl text-3xl font-semibold text-primary">
                    {t('commissionMessage21')}
                </h1>
                <img
                    className="w-2/3 mx-auto mg:my-20 my-10"
                    src="/Images/commission/commission-hero-logo.png"
                    alt="Commission Logo"
                />
                <p className="text-xl text-primary">
                    {t('monthlyFeeMessage')}
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
                    <div className='grid grid-cols-2 gap-5'>
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
                        <form className="text-left space-y-5">
                            {/* Card Number */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">Card number</label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Expiration Date */}
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Expiration date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                {/* CVC */}
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">CVC</label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Terms Agreement */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 accent-primary"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    By confirming, you agree to the <span className="text-primary font-semibold">Terms of Use</span> and <span className="text-primary font-semibold">Privacy Policy</span>.
                                </label>
                            </div>

                            {/* Confirm Button */}
                            <button
                                type="button"
                                onClick={handleOk}
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center gap-2 justify-center"
                            >
                                <FiShield className='text-2xl' /> Confirm subscription
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CommissionHeader;
