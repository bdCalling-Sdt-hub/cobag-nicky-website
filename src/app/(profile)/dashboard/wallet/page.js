'use client';

import React, { useState } from 'react';
import { Modal, Input, Button, Form } from 'antd';
import { BsCreditCard } from 'react-icons/bs';
import { MdOutlineAddCard } from 'react-icons/md';
import { GoArrowDownRight } from 'react-icons/go';
import { FaFilter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import i18n from '@/app/utils/i18';

const Page = () => {
    const { t } = i18n;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const onFinish = (values) => {
        console.log('Card Details:', values);
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Bank Card Section */}
            <section id="bankCard" className="bg-white p-5 rounded-lg mt-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-primary">{t('bankCard')}</h2>
                    <button
                        className="flex items-center px-6 py-3 border border-primary text-primary rounded-lg gap-2"
                        onClick={showModal}
                    >
                        <BsCreditCard className="text-xl" /> {t('add')}
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-5 my-5">
                    <img className="w-full" src="/Images/Profile/DashboardBankCard.png" alt="Bank Card" />
                    <img className="w-full" src="/Images/Profile/DashboardBankCard.png" alt="Bank Card" />
                    <div onClick={showModal}>
                        <div className="p-5 border border-dashed rounded-lg cursor-pointer">
                            <div className='flex items-center justify-center'>
                                <MdOutlineAddCard className="text-5xl text-gray-500 " />
                            </div>
                            <div className="w-32 mx-auto flex items-center justify-center mt-3">
                                <p className="font-semibold border-b text-xl border-primary text-primary">Add a card</p>
                            </div>
                            <p className="ant-upload-hint text-center mt-5">{t('addANewBankCard')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Payments Section */}
            <section id="recentPayments" className="bg-white p-5 rounded-lg mt-5">
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h2 className="text-xl font-semibold text-primary">{t('recentPayments')}</h2>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                name="search"
                                placeholder={t('searchTransactions')}
                                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaSearch />
                            </span>
                        </div>
                        <div className="relative">
                            <select
                                name="searchselect"
                                className="py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            >
                                <option value="all">All</option>
                                <option value="in">In</option>
                                <option value="out">Out</option>
                            </select>
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaFilter />
                            </span>
                        </div>
                    </div>
                </div>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#f6f6fb] my-5 p-5 rounded-md">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-14 h-14 bg-[#e0eee9] text-[#2b8f6c] rounded-full">
                                <GoArrowDownRight className="text-2xl" />
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Payment received from Marie D.</p>
                                <span>2024-03-14</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <h3 className="text-[#2b8f6c] font-semibold text-xl mb-2">+ 125.50€</h3>
                            <p className="text-[#2b8f6c]">Completed</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Modal */}
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <h2 className='text-2xl font-semibold text-primary text-center'>Add a Card</h2>
                <Form layout="vertical" className='mt-10' onFinish={onFinish}>
                    <Form.Item
                        label="Card Holder Name"
                        className='font-semibold text-primary'
                        name="cardHolderName"
                        rules={[{ required: true, message: 'Please enter the card holder name!' }]}
                    >
                        <Input className='py-3' placeholder="Card holder name" />
                    </Form.Item>
                    <Form.Item
                        label="Card Number"
                        name="cardNumber"
                        className='font-semibold text-primary'
                        rules={[
                            { required: true, message: 'Please enter the card number!' },
                            { len: 16, message: 'Card number must be 16 digits!' },
                        ]}
                    >
                        <Input className='py-3' placeholder="1234 5678 9012 3456" maxLength={16} />
                    </Form.Item>
                    <div className='grid grid-cols-2 gap-5'>
                        <Form.Item
                            label="Expiration Date (MM/YY)"
                            name="expirationDate"
                            className='font-semibold text-primary'
                            rules={[{ required: true, message: 'Please enter the expiration date!' }]}
                        >
                            <Input className='py-3' placeholder="MM/YY" />
                        </Form.Item>
                        <Form.Item
                            label="CVC"
                            name="cvc"
                            className='font-semibold text-primary'
                            rules={[
                                { required: true, message: 'Please enter the CVC!' },
                                { len: 3, message: 'CVC must be 3 digits!' },
                            ]}
                        >
                            <Input className='py-3' placeholder="123" maxLength={3} />
                        </Form.Item>
                    </div>
                    <label htmlFor="check" className='flex items-center gap-1'>
                        <input type="checkbox" name="terms" id="check" />
                        By confirming, you agree to the{' '}
                        <a href="/terms" className="text-primary font-semibold">Terms of Use</a> and{' '}
                        <a href="/privacy" className="text-primary font-semibold">Privacy Policy</a>.
                    </label>
                    <p className="text-sm text-gray-500 mb-4">

                    </p>
                    <Form.Item>
                        <button className='w-full py-3 bg-primary text-white rounded-lg' htmlType="submit" block>
                            Add Card
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Page;
