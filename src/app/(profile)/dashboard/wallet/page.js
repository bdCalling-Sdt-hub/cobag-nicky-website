'use client';

import React, { useState } from 'react';
import { Modal, Input, Button, Form, InputNumber } from 'antd';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { LuWallet } from 'react-icons/lu';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { GoArrowDownRight } from 'react-icons/go';
import { BsCreditCard } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import { useGetAllTransactionQuery, useGetAllwidthrawQuery, useGetWidthrawQuery, useWidthrawMutation } from '@/app/redux/Features/payment/widthraw';
import moment from 'moment';
import useUser from '@/hooks/useUser';

const WalletPage = () => {
    // States for Modal
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

    // Withdraw Modal Handlers
    const showWithdrawModal = () => setIsWithdrawModalOpen(true);
    const handleWithdrawCancel = () => setIsWithdrawModalOpen(false);


    const user = useUser();
    const [withdraw] = useWidthrawMutation();
    const { data: widthrawData } = useGetWidthrawQuery();
    const { data: allWidthrawData } = useGetAllwidthrawQuery();
    const myAllWidthrawData = allWidthrawData?.data[0];

    const { data: transition } = useGetAllTransactionQuery();
    const myWidthrawData = transition?.data;


    console.log(myWidthrawData);


    // Submit handler for withdraw modal
    const handleWithdrawFinish = async (values) => {

        if (myAllWidthrawData?.withdrawAbleAmount < 1 || !myAllWidthrawData?.withdrawAbleAmount) {
            setIsWithdrawModalOpen(false);
            return toast.error('Your balance must be greater than 0!');
        }

        const formData = {
            amount: values.amount,
            accountNumber: values.bankCardNumber,
            currency: "usd",
            date: "2025-01-20T00:00:00.000Z"
        }
        try {

            const res = await withdraw(formData).unwrap();

            if (res?.statusCode === 201) {
                toast.success(res?.message);
                setIsWithdrawModalOpen(false);
                values.resetFields();
            }

        } catch (error) {
            toast.error(error?.data?.message);
            console.log(error);
        }

    };

    return (
        <div className="container mx-auto lg:p-5 p-0">
            {/* <Toaster /> */}
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
                                <h2 className="text-3xl font-semibold mt-2">{myAllWidthrawData?.withdrawAbleAmount || 0} €</h2>
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
                                <h2 className="text-3xl font-semibold mt-2">{myAllWidthrawData?.unWithdrawAbleAmountRunningOrder || 0} €</h2>
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
                {myWidthrawData?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-[#f6f6fb] my-5 p-5 rounded-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`${item?.sellKgId?._id == user?.id ? "bg-green-100" : "bg-red-100"} flex items-center justify-center w-14 h-14 rounded-full`}>
                                {
                                    item?.sellKgId?._id == user?.id ?
                                        < GoArrowDownRight className="text-2xl text-green-500" /> :
                                        <MdOutlineArrowOutward className="text-2xl text-red-500" />

                                }
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> {item?.sellKgId?._id == user?.id ? 'Payment received successfully' : 'Payment sent successfully'} </p>
                                <span>{moment(item?.createdAt).format("YYYY-MM-DD")}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <h3 className={`${item?.sellKgId?._id == user?.id ? "text-green-600 text-xl font-semibold" : "text-red-600 text-xl font-semibold"}`}>+ {item?.amount}€</h3>
                            <p className={`${item?.sellKgId?._id == user?.id ? "text-green-600" : "text-red-600"}`}>{item?.status}</p>
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
