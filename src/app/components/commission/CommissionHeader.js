'use client';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import React, { useState } from 'react';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { Modal } from 'antd';
import { FiShield } from 'react-icons/fi';
import i18n from '@/app/utils/i18';
import { usePaymentMutation } from '@/app/redux/Features/payment/createPayment';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import toast, { Toaster } from 'react-hot-toast';
import { useCreateSubscriptionMutation } from '@/app/redux/Features/payment/subscription';

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
    const [payment] = useCreateSubscriptionMutation();
    const router = useRouter();

    const user = userData?.user;
    console.log(user);

    const handlePayment = async (amount) => {
        if (!userData?.user) {
            toast.error('Please login first');
            return router.push('/login');
        }
        const data = {
            amount: amount * 100,
            cobagProfit: 10,
            currency: "eur",
            paymentMethodId: "pm_card_visa",
            senderId: user?._id,
        }

        try {
            const response = await payment(data).unwrap();
            if (response?.url) {
                window.open(response?.url, "_blank");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#E9FFFD] via-[#E9FFFD] to-[#FFF]">
            <Toaster />
            <motion.div
                whileInView={{ opacity: 1 }}  // Make sure opacity animates when in view
                initial={{ opacity: 0 }}  // Start with opacity 0
                transition={{ duration: 1 }}
                className="md:w-[50%] w-[90%] mx-auto py-20 text-center"
            >
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }} // animate when in view
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="md:text-5xl text-3xl font-semibold text-primary"
                >
                    {t('commissionMessage21')}
                </motion.h1>
                <motion.div
                    whileInView={{ rotateY: '0turn', scale: 1 }}  // Flip on scroll
                    initial={{ rotateY: '-0.5turn', scale: 2 }}  // Start flipped
                    transition={{ duration: 0.5 }}  // Smooth transition
                    className='flex items-center justify-center gap-5'
                >
                    <img
                        className="w-2/3 mx-auto my-10"
                        src="/Images/NewSection/cobag-sky-logo.png"
                        alt=""
                    />
                </motion.div>

                <motion.p
                    whileInView={{ opacity: 1 }}  // Fade in when in view
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl text-primary"
                >
                    For only €10 per month, without commitment, earn even more
                </motion.p>
                <motion.button
                    onClick={showModal}
                    whileInView={{ opacity: 1 }}  // Fade in button on scroll
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="bg-primary py-3 px-16 text-white font-semibold rounded-lg md:mt-20 mt-10"
                >
                    {t('Subscribenow1')} <FaArrowRightLong className="inline ml-2" />
                </motion.button>
            </motion.div>

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
                                <motion.li
                                    whileInView={{ opacity: 1 }}  // Fade in each list item
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="flex items-center gap-3 my-4"
                                >
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>0% commission on all transactions</span>
                                </motion.li>
                                <motion.li
                                    whileInView={{ opacity: 1 }}  // Fade in each list item
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                    className="flex items-center gap-3 my-4"
                                >
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>No commitment: total freedom</span>
                                </motion.li>
                                <motion.li
                                    whileInView={{ opacity: 1 }}  // Fade in each list item
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                    className="flex items-center gap-3 my-4"
                                >
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>Immediate savings for buyers and sellers</span>
                                </motion.li>
                                <motion.li
                                    whileInView={{ opacity: 1 }}  // Fade in each list item
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.6 }}
                                    className="flex items-center gap-3 my-4"
                                >
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>Plus Insurance included up to €500</span>
                                </motion.li>
                                <motion.li
                                    whileInView={{ opacity: 1 }}  // Fade in each list item
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.8 }}
                                    className="flex items-center gap-3 my-4"
                                >
                                    <div className="bg-[#EEEFF8] text-primary w-6 h-6 flex items-center justify-center rounded-full">
                                        <FaCheck />
                                    </div>
                                    <span>CoBag Sky badge on your profile</span>
                                </motion.li>
                            </ul>
                        </div>

                        {/* Confirm Button */}
                        <motion.button
                            type="button"
                            onClick={() => handlePayment(10)}
                            whileInView={{ opacity: 1 }}  // Fade in the confirm button
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center gap-2 justify-center"
                        >
                            <FiShield className='text-2xl' /> Confirm subscription
                        </motion.button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CommissionHeader;
