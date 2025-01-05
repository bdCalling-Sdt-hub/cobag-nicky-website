import Dragger from 'antd/es/upload/Dragger';
import React from 'react';
import { BsCreditCard } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';
import { GoArrowDownRight } from 'react-icons/go';
import { LuWallet } from 'react-icons/lu';
import { MdArrowOutward, MdOutlineAddCard, MdOutlineArrowOutward } from 'react-icons/md';

const Page = () => {
    return (
        <div>
            <div className='bg-white p-5 rounded-lg'>
                <div className='flex items-center justify-between '>
                    <h1 className='text-xl font-semibold text-primary'>Wallet</h1>
                    <button className='bg-gradient-to-l from-[#C7FFD8] to-[#98DED9] py-3 px-8 rounded-xl text-primary font-semibold flex items-center justify-center gap-2'><MdArrowOutward className='inlinhe text-xl ' /> Withdraw funds</button>
                </div>
                <div className='bg-gradient-to-r from-primary to-[#0d2c98] rounded-lg p-5 mt-10'>
                    <div className=' flex items-center gap-5 my-5'>
                        <div className='flex items-center gap-2 w-14 h-14 bg-[#383f8a] text-white justify-center rounded-full'>
                            <LuWallet className='text-2xl' />
                        </div>
                        <div className='text-white'>
                            <p>Balance available</p>
                            <h2 className='text-3xl font-semibold mt-2'>125.50€ </h2>
                        </div>
                    </div>
                    <hr className='my-3 bg-white ' />
                    <div className='text-white flex items-center justify-between'>
                        <span>Wallet ID</span>
                        <span>5874 9985 7843 5624</span>
                    </div>
                </div>
            </div>

            <section id='bankCard' className='bg-white p-5 rounded-lg mt-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold text-primary'>Bank card</h2>
                    <button className='flex items-center px-6 py-3 border border-primary text-primary rounded-lg gap-2'><BsCreditCard className='text-xl' />Add</button>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 gap-5 my-5'>
                        <img className='w-full' src="/Images/Profile/DashboardBankCard.png" alt="" />
                        <img className='w-full' src="/Images/Profile/DashboardBankCard.png" alt="" />
                        <div>
                            <Dragger className=''>
                                <p className="ant-upload-drag-icon flex items-center justify-center ">
                                    {/* <InboxOutlined /> */}
                                    <MdOutlineAddCard className='text-5xl text-gray-500' />
                                </p>
                                <div className='w-32 mx-auto flex items-center justify-center'>
                                    <p className="font-semibold border-b text-xl border-primary  text-primary">Add a card</p>
                                </div>
                                <p className="ant-upload-hint mt-5">
                                    Add a new bank card
                                </p>
                            </Dragger>
                        </div>
                    </div>
                </div>
            </section>

            <section id='transaction' className="bg-white p-5 rounded-lg mt-5 shadow-sm">
                {/* Header Section */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                    <h2 className="text-xl font-semibold text-primary">Transaction History</h2>
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search transactions"
                                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FaSearch />
                            </span>
                        </div>
                        {/* Select Filter */}
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
                {/* Additional Content (Optional) */}
                {
                    [...Array(3)].map((_, index) => (
                        <div key={index}>
                            <div className='flex items-center justify-between flex-wrap gap-3 bg-[#f6f6fb] my-5 p-5 rounded-md'>
                                <div className='flex flex-wrap items-center gap-3 '>
                                    <div className='flex items-center gap-2 min-w-14 min-h-14 bg-[#e0eee9] text-[#2b8f6c] justify-center rounded-full '>
                                        <GoArrowDownRight className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='font-semibold mb-2'>Payment received from Marie D.</p>
                                        <span>2024-03-14</span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h3 className='text-[#2b8f6c] font-semibold text-xl mb-2'>+ 125.50€</h3>
                                    <p className='text-[#2b8f6c]'>Completed</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between flex-wrap gap-3 bg-[#f6f6fb] my-5 p-5 rounded-md'>
                                <div className='flex items-center flex-wrap gap-3 '>
                                    <div className='flex items-center gap-2 min-w-14 min-h-14 bg-[#f4e2e6] text-[#ff2353] justify-center rounded-full '>
                                        <MdOutlineArrowOutward className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='font-semibold mb-2'>Payment received from Marie D.</p>
                                        <span>2024-03-14</span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <h3 className='text-[#ff2353] font-semibold text-xl mb-2'>+ 125.50€</h3>
                                    <p className='text-[#ffcc23]'>On hold</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default Page;
