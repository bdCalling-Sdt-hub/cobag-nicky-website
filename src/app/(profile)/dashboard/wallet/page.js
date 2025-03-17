'use client';

import React, { useState } from 'react';
import { Modal, Input, Button, Form, InputNumber } from 'antd';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { LuWallet } from 'react-icons/lu';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { GoArrowDownRight } from 'react-icons/go';
import { BsCreditCard } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

const WalletPage = () => {
    // States for Modal
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

    // Withdraw Modal Handlers
    const showWithdrawModal = () => setIsWithdrawModalOpen(true);
    const handleWithdrawCancel = () => setIsWithdrawModalOpen(false);

    // Submit handler for withdraw modal
    const handleWithdrawFinish = (values) => {

        if (!values?.name) {
            toast.error('Amount must be greater than 0!');
            console.log('Withdraw Details:', values); // Log the form values
            return setIsWithdrawModalOpen(true);
        }
        else {
            toast.success('Funds withdrawn successfully!');
            setIsWithdrawModalOpen(false); // Close modal after submission
        }
    };

    return (
        <div className="container mx-auto lg:p-5 p-0">
            <Toaster />
            {/* Wallet Balance Section */}
            <section id="walletBalance" className="bg-white p-5 rounded-lg shadow-md mt-5">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="md:text-3xl text-2xl font-semibold text-primary">My Wallet</h1>
                    <button
                        onClick={showWithdrawModal}
                        className="flex items-center px-6 py-3 bg-gradient-to-l from-[#98ded9] to-[#c6fed8] border rounded-lg gap-2 font-semibold text-primary"
                    >
                        <MdOutlineArrowOutward className="text-2xl" />
                        Withdraw funds
                    </button>
                </div>
                <div className="grid xl:grid-cols-2 gap-10">
                    <div className="bg-gradient-to-l from-primary to-[#0d2c98] rounded-lg p-5 shadow-sm">
                        <div className="flex items-center gap-5 my-5">
                            <div className="flex items-center justify-center w-14 h-14 bg-[#383f8a] text-white rounded-full">
                                <LuWallet className="text-2xl" />
                            </div>
                            <div className="text-white">
                                <p>Balance Available</p>
                                <h2 className="text-3xl font-semibold mt-2">125.50€</h2>
                            </div>
                        </div>
                        <hr className="bg-white h-[2px] my-5" />
                    </div>
                    <div className="bg-primary rounded-lg p-5 shadow-sm">
                        <div className="flex items-center gap-5 my-5">
                            <div className="flex items-center justify-center w-14 h-14 bg-[#383f8a] text-white rounded-full">
                                <LuWallet className="text-2xl" />
                            </div>
                            <div className="text-white">
                                <p>Running Order</p>
                                <h2 className="text-3xl font-semibold mt-2">75.30€</h2>
                            </div>
                        </div>
                        <hr className="bg-white h-[2px] my-5" />
                    </div>
                </div>
            </section>

            {/* Recent Payments Section */}
            <section id="recentPayments" className="bg-white p-5 rounded-lg shadow-md mt-5">
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <h2 className="text-xl font-semibold text-primary">Recent Payments</h2>
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Search Field */}
                        <div className="relative">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search Transactions"
                                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaSearch />
                            </span>
                        </div>
                        {/* Filter Dropdown */}
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

                {/* Recent Payments */}
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-[#f6f6fb] my-5 p-5 rounded-md"
                    >
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

            {/* Withdraw Funds Modal */}
            <Modal
                open={isWithdrawModalOpen}
                onCancel={handleWithdrawCancel}
                footer={null}
            >
                <h2 className="text-3xl font-semibold text-primary text-center">Withdraw Funds</h2>
                <Form onSubmitCapture={handleWithdrawFinish} layout="vertical" className="mt-5" onFinish={handleWithdrawFinish}>
                    {/* Name Field */}
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input className="py-2" placeholder="Enter your name" />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email!' },
                            { type: 'email', message: 'Please enter a valid email!' },
                        ]}
                    >
                        <Input className="py-2" placeholder="Enter your email" />
                    </Form.Item>

                    {/* Bank Card Number Field */}
                    <Form.Item
                        label="Bank Card Number"
                        name="bankCardNumber"
                        rules={[
                            { required: true, message: 'Please enter your bank card number!' },
                            { len: 16, message: 'Card number must be 16 digits!' },
                        ]}
                    >
                        <Input
                            className="py-2"
                            placeholder="1234 5678 9012 3456"
                            maxLength={16}
                            height={400}
                            addonAfter={<BsCreditCard className="text-gray-500 text-2xl" />}
                        />
                    </Form.Item>

                    {/* Amount Field - FIXED */}
                    <Form.Item
                        label="Amount (€)"
                        name="amount"
                        rules={[
                            { required: true, message: 'Please enter an amount!' },
                            {
                                validator: (_, value) =>
                                    value && value > 0
                                        ? Promise.resolve()
                                        : Promise.reject(new Error('Amount must be greater than 0!'))
                            }
                        ]}
                    >
                        <InputNumber
                            className="w-full py-1"
                            min={1}
                            placeholder="Enter amount"
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white rounded-lg mt-5"
                        >
                            Withdraw
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default WalletPage;
